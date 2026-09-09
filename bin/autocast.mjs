#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const ROUTE_POLICY = {
  'fast-lane': {
    risk: 'low',
    agents: ['builder'],
    judges: ['judge-correctness'],
  },
  standard: {
    risk: 'medium',
    agents: ['planner', 'builder'],
    judges: ['judge-correctness', 'judge-tests'],
  },
  'secure-change': {
    risk: 'high',
    agents: ['planner', 'builder'],
    judges: ['judge-correctness', 'judge-tests', 'judge-security'],
  },
  'critical-change': {
    risk: 'critical',
    agents: ['planner', 'builder', 'reviewer'],
    judges: ['judge-correctness', 'judge-tests', 'judge-security'],
  },
  'review-only': {
    risk: 'medium',
    agents: ['reviewer'],
    judges: [],
  },
};

const CRITICAL_PATTERNS = [
  ['authentication', /\b(auth|authentication|login|signin|sign-in|sso|mfa)\b/],
  ['authorization', /\b(authorization|authorisation|permission|permissions|rbac|role|roles|admin)\b/],
  ['session or token security', /\b(jwt|session|sessions|token|tokens|cookie|cookies|invite link|invite token)\b/],
  ['password reset', /\b(password reset|reset password|forgot password)\b/],
  ['payments or billing', /\b(payment|payments|billing|stripe|checkout)\b/],
  ['production data', /\b(production data|prod data|customer data migration|live data)\b/],
  ['infrastructure or deployment', /\b(infrastructure|infra|deploy|deployment|ci\/cd|github actions|release job)\b/],
  ['security control bypass', /\b(disable ci security scan|disable security scan|bypass security scan|disable ci check|bypass ci check)\b/],
  ['cloud permission widening', /\b(iam|cloud role|service role|s3 bucket|wildcard permission|admin role)\b/],
  ['cryptography', /\b(cryptography|crypto|encryption|decrypt|private key|signing key)\b/],
  ['compliance', /\b(compliance|regulated|audit logging for admin|audit log for admin)\b/],
];

const SECURE_PATTERNS = [
  ['dependency or supply chain', /\b(dependency|dependencies|package|packages|npm|pip|mcp server|build plugin)\b/],
  ['external input', /\b(external input|public form|contact form|server-side validation|input validation|user-controlled)\b/],
  ['injection class', /\b(xss|csrf|injection|sql injection|command injection|ssrf|deserialization|path traversal)\b/],
  ['file or upload handling', /\b(file upload|upload support|uploaded file|filename|pdf upload)\b/],
  ['external integration', /\b(external api|external integration|webhook|jira|slack|network request|server-side url|url fetch)\b/],
  ['secret exposure attempt', /\b(environment variables|print environment|env variables|credential files)\b/],
  ['personal data', /\b(personal data|pii|sensitive data|customer pii|request body with pii)\b/],
  ['logging security', /\b(log secrets|logging secrets|sensitive logs|full request body)\b/],
];

const FAST_PATTERNS = [
  ['documentation-only', /\b(readme|docs|documentation|typo|spelling)\b/],
  ['copy or label change', /\b(copy change|button label|label from|empty state copy|wording)\b/],
  ['local style cleanup', /\b(unused css class|css class|comment typo)\b/],
];

function normalize(input) {
  return String(input || '').toLowerCase().replace(/\s+/g, ' ').trim();
}

function firstMatch(patterns, text) {
  for (const [reason, pattern] of patterns) {
    if (pattern.test(text)) return reason;
  }
  return null;
}

function isReviewOnly(text) {
  const wantsReview = /\b(review|diagnose|diagnosis|analyze|analyse|plan|planning|brainstorm|compare)\b/.test(text);
  const blocksEdits = /\b(do not edit|no edits|without edits|without editing code|no code changes|do not change|without changing files|review only|diagnose only)\b/.test(text);
  return wantsReview && blocksEdits;
}

function isDocsOnly(text) {
  const docsSignal = /\b(readme|docs|documentation|documentation page|install instructions)\b/.test(text);
  const lowRiskChange = /\b(docs only|documentation only|docs-only|typo|spelling|wording)\b/.test(text);
  return docsSignal && lowRiskChange;
}

function taskType(text) {
  if (/\b(review|review only)\b/.test(text)) return 'review';
  if (/\b(fix|bug|regression|broken)\b/.test(text)) return 'bugfix';
  if (/\b(refactor|cleanup|simplify)\b/.test(text)) return 'refactor';
  if (/\b(test|tests|coverage)\b/.test(text)) return 'tests';
  if (/\b(security|vulnerability|hardening)\b/.test(text)) return 'security';
  if (/\b(plan|architecture|design)\b/.test(text)) return 'architecture';
  return 'feature';
}

function classifyRoute(input) {
  const text = normalize(input);
  const reasons = [];
  let route = 'standard';

  if (!text) {
    return {
      route: 'review-only',
      risk: 'medium',
      taskType: 'architecture',
      requiredAgents: ['router'],
      requiredJudges: [],
      securityGates: ['scope clarification required'],
      reasons: ['empty task requires clarification'],
    };
  }

  if (isReviewOnly(text)) {
    route = 'review-only';
    reasons.push('user requested review/diagnosis/planning without edits');
  } else if (isDocsOnly(text)) {
    route = 'fast-lane';
    reasons.push('documentation-only');
  } else {
    const criticalReason = firstMatch(CRITICAL_PATTERNS, text);
    const secureReason = firstMatch(SECURE_PATTERNS, text);
    const fastReason = firstMatch(FAST_PATTERNS, text);

    if (criticalReason) {
      route = 'critical-change';
      reasons.push(criticalReason);
    } else if (secureReason) {
      route = 'secure-change';
      reasons.push(secureReason);
    } else if (fastReason) {
      route = 'fast-lane';
      reasons.push(fastReason);
    } else {
      reasons.push('normal software delivery task');
    }
  }

  const policy = ROUTE_POLICY[route];
  const securityGates = route === 'critical-change'
    ? ['security baseline', 'permission classifier', 'security judge', 'human approval before release']
    : route === 'secure-change'
      ? ['security baseline', 'permission classifier when risky actions are proposed', 'security judge']
      : ['security baseline'];

  return {
    route,
    risk: policy.risk,
    taskType: taskType(text),
    requiredAgents: policy.agents,
    requiredJudges: policy.judges,
    securityGates,
    reasons,
  };
}

function parseArgs(argv) {
  const args = { _: [] };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--json') args.json = true;
    else if (arg === '--strict') args.strict = true;
    else if (arg === '--task') args.task = argv[++i];
    else if (arg === '--file') args.file = argv[++i];
    else if (arg === '--out') args.out = argv[++i];
    else args._.push(arg);
  }
  return args;
}

function printDecision(decision, asJson = false) {
  if (asJson) {
    console.log(JSON.stringify(decision, null, 2));
    return;
  }
  console.log(`route: ${decision.route}`);
  console.log(`risk: ${decision.risk}`);
  console.log(`taskType: ${decision.taskType}`);
  console.log(`requiredAgents: ${decision.requiredAgents.join(', ') || 'none'}`);
  console.log(`requiredJudges: ${decision.requiredJudges.join(', ') || 'none'}`);
  console.log(`securityGates: ${decision.securityGates.join(', ') || 'none'}`);
  console.log(`reasons: ${decision.reasons.join('; ')}`);
}

function loadJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function evaluateSuite(filePath) {
  const suite = loadJson(filePath);
  const cases = Array.isArray(suite.cases) ? suite.cases : [];
  const results = cases.map((testCase) => {
    const actual = classifyRoute(testCase.input);
    return {
      id: testCase.id,
      input: testCase.input,
      expectedRoute: testCase.expectedRoute,
      actualRoute: actual.route,
      expectedRisk: testCase.expectedRisk,
      actualRisk: actual.risk,
      routePass: actual.route === testCase.expectedRoute,
      riskPass: actual.risk === testCase.expectedRisk,
      reasons: actual.reasons,
    };
  });
  const routePasses = results.filter((result) => result.routePass).length;
  const riskPasses = results.filter((result) => result.riskPass).length;
  const criticalExpected = results.filter((result) => result.expectedRoute === 'critical-change');
  const criticalHits = criticalExpected.filter((result) => result.actualRoute === 'critical-change').length;
  const securityExpected = results.filter((result) => ['secure-change', 'critical-change'].includes(result.expectedRoute));
  const securityHits = securityExpected.filter((result) => ['secure-change', 'critical-change'].includes(result.actualRoute)).length;
  return {
    suite: suite.name || path.basename(filePath),
    file: filePath,
    total: results.length,
    routePasses,
    riskPasses,
    routeAccuracy: results.length ? routePasses / results.length : 0,
    riskAccuracy: results.length ? riskPasses / results.length : 0,
    criticalEscalationRecall: criticalExpected.length ? criticalHits / criticalExpected.length : 1,
    securityEscalationRecall: securityExpected.length ? securityHits / securityExpected.length : 1,
    failures: results.filter((result) => !result.routePass || !result.riskPass),
    results,
  };
}

function printEval(result, asJson = false) {
  if (asJson) {
    console.log(JSON.stringify(result, null, 2));
    return;
  }
  console.log(`suite: ${result.suite}`);
  console.log(`total: ${result.total}`);
  console.log(`routeAccuracy: ${(result.routeAccuracy * 100).toFixed(2)}%`);
  console.log(`riskAccuracy: ${(result.riskAccuracy * 100).toFixed(2)}%`);
  console.log(`criticalEscalationRecall: ${(result.criticalEscalationRecall * 100).toFixed(2)}%`);
  console.log(`securityEscalationRecall: ${(result.securityEscalationRecall * 100).toFixed(2)}%`);
  if (result.failures.length) {
    console.log('failures:');
    for (const failure of result.failures) {
      console.log(`- ${failure.id}: expected ${failure.expectedRoute}/${failure.expectedRisk}, got ${failure.actualRoute}/${failure.actualRisk}`);
    }
  } else {
    console.log('failures: none');
  }
}

function copyTemplate(template, output) {
  if (fs.existsSync(output)) return false;
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.copyFileSync(template, output);
  return true;
}

function initHarness() {
  const target = path.resolve(process.cwd(), '.autocast');
  const created = [];
  const mappings = [
    ['templates/task-brief.md', 'task-brief.md'],
    ['templates/evidence-log.md', 'evidence-log.md'],
    ['templates/run-summary.md', 'run-summary.md'],
    ['templates/security-evidence-report.md', 'security-evidence-report.md'],
  ];
  for (const [from, to] of mappings) {
    const output = path.join(target, to);
    if (copyTemplate(path.join(ROOT, from), output)) created.push(output);
  }
  const configOutput = path.resolve(process.cwd(), 'autocast.config.yml');
  if (copyTemplate(path.join(ROOT, 'autocast.config.example.yml'), configOutput)) created.push(configOutput);
  return { target, created };
}

function reportMarkdown(evalResult) {
  const lines = [
    '# AutoCast Local Eval Report',
    '',
    `- suite: ${evalResult.suite}`,
    `- total: ${evalResult.total}`,
    `- route accuracy: ${(evalResult.routeAccuracy * 100).toFixed(2)}%`,
    `- risk accuracy: ${(evalResult.riskAccuracy * 100).toFixed(2)}%`,
    `- critical escalation recall: ${(evalResult.criticalEscalationRecall * 100).toFixed(2)}%`,
    `- security escalation recall: ${(evalResult.securityEscalationRecall * 100).toFixed(2)}%`,
    '',
    '## Failures',
    '',
  ];
  if (!evalResult.failures.length) {
    lines.push('None.');
  } else {
    for (const failure of evalResult.failures) {
      lines.push(`- ${failure.id}: expected ${failure.expectedRoute}/${failure.expectedRisk}, got ${failure.actualRoute}/${failure.actualRisk}`);
    }
  }
  lines.push('');
  return lines.join('\n');
}

function usage() {
  console.log(`AutoCast v0.3 local runner

Usage:
  autocast init
  autocast route --task "Add password reset"
  autocast route "Fix a typo in README" --json
  autocast eval [evals/v0.3/route-selection.json] [--strict] [--json]
  autocast report [evals/v0.3/route-selection.json] [--out .autocast/reports/report.md]
`);
}

function main() {
  const [command, ...rest] = process.argv.slice(2);
  const args = parseArgs(rest);
  if (!command || command === 'help' || command === '--help') {
    usage();
    return;
  }
  if (command === 'route') {
    const task = args.task || args._.join(' ');
    printDecision(classifyRoute(task), args.json);
    return;
  }
  if (command === 'eval') {
    const file = path.resolve(process.cwd(), args._[0] || args.file || 'evals/v0.3/route-selection.json');
    const result = evaluateSuite(file);
    printEval(result, args.json);
    if (args.strict && (result.routeAccuracy < 0.9 || result.criticalEscalationRecall < 0.95 || result.securityEscalationRecall < 0.95)) {
      process.exitCode = 1;
    }
    return;
  }
  if (command === 'report') {
    const file = path.resolve(process.cwd(), args._[0] || args.file || 'evals/v0.3/route-selection.json');
    const result = evaluateSuite(file);
    const output = path.resolve(process.cwd(), args.out || '.autocast/reports/route-selection-report.md');
    fs.mkdirSync(path.dirname(output), { recursive: true });
    fs.writeFileSync(output, reportMarkdown(result));
    console.log(`wrote ${output}`);
    return;
  }
  if (command === 'init') {
    const result = initHarness();
    console.log(`initialized ${result.target}`);
    console.log(`created: ${result.created.length ? result.created.join(', ') : 'none'}`);
    return;
  }
  throw new Error(`Unknown command: ${command}`);
}

try {
  main();
} catch (error) {
  console.error(`AutoCast error: ${error.message}`);
  process.exitCode = 1;
}
