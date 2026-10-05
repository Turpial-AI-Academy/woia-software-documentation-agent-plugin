import test from "node:test";
import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

async function text(relativePath) {
  return readFile(path.join(ROOT, relativePath), "utf8");
}

test("documentation skill encodes the exact-candidate reconciliation boundary", async () => {
  const skill = await text("skills/documentation/SKILL.md");
  assert.match(skill, /exact candidate/i);
  assert.match(skill, /user, agent, and operator/i);
  assert.match(skill, /source of truth/i);
  assert.match(skill, /Do not claim PASS while a blocking documentation divergence remains/i);
  assert.match(skill, /Do not execute destructive, production-impacting/i);
  assert.match(skill, /same candidate/i);
});

test("documentation references define material drift states and blocking semantics", async () => {
  const model = await text("skills/documentation/references/RECONCILIATION_MODEL.md");
  for (const state of ["MATCH", "DRIFT", "MISSING", "AMBIGUOUS", "BLOCKED_EXTERNAL", "NOT_MATERIAL"]) {
    assert.match(model, new RegExp("\\b" + state + "\\b"));
  }
  assert.match(model, /material DRIFT affecting current user, agent, or operator behavior/i);
  assert.match(model, /validation claim reported as passed without evidence/i);
  assert.match(model, /Preserve history/i);
});

test("validation playbook separates execution evidence from static or blocked evidence", async () => {
  const playbook = await text("skills/documentation/references/VALIDATION_PLAYBOOK.md");
  assert.match(playbook, /Direct execution/);
  assert.match(playbook, /Sandboxed execution/);
  assert.match(playbook, /Static verification/);
  assert.match(playbook, /Do \*\*not\*\* execute solely for documentation validation/i);
  for (const result of ["PASS", "FAIL", "BLOCKED", "STATIC_ONLY", "NOT_APPLICABLE"]) {
    assert.match(playbook, new RegExp("\\b" + result + "\\b"));
  }
  assert.match(playbook, /Never label BLOCKED, STATIC_ONLY, NOT_APPLICABLE, skipped, or historical evidence as PASS/i);
});

test("reconciliation report preserves candidate, audience, source, validation, and unresolved evidence", async () => {
  const report = await text("skills/documentation/assets/RECONCILIATION_REPORT.md");
  assert.match(report, /Commit SHA/);
  assert.match(report, /Users:/);
  assert.match(report, /Agents:/);
  assert.match(report, /Operators:/);
  assert.match(report, /Sources of truth used/);
  assert.match(report, /Unresolved owner decisions/);
  assert.match(report, /Blocking documentation divergence remaining/);
});

test("bounded documentation amendments reconcile claims against a healthy map and preserve invariants", async () => {
  const skill = await text("skills/documentation/SKILL.md");
  const bounded = skill.split("## Select execution depth")[1].split("Use the deep path")[0];
  for (const obligation of [/bounded/i, /claim-local/i, /(?:existing|current).*map.*healthy/is, /candidate.*owning sources/is, /(?:wording|link|reference).*unchanged/is, /affected.*claim.*audience/is, /owning source/i, /smallest.*unit/is, /links.*ownership.*audience.*safety.*candidate/is, /preserv\w*.*unrelated.*(?:documentation|evidence).*history/is, /reus\w*.*(?:source map|report)/is]) assert.match(bounded, obligation);
});

test("contract, safety, and approved artifact changes require deep handling and a fresh freeze", async () => {
  const skill = await text("skills/documentation/SKILL.md");
  const deep = skill.split("Use the deep path")[1].split("Load detailed references")[0];
  for (const trigger of [/new.*(?:documentation|map)/is, /missing.*(?:sources|evidence)/is, /unclear.*ownership/is, /contradict\w*/i, /API.*event.*schema/is, /configuration.*contract/is, /compatibility.*migration.*persisted/is, /security.*privacy/is, /operational.*deployment.*recovery/is, /generated.*uncertainty/is, /cross-provider/i, /approved.*(?:candidate|artifact)/is]) assert.match(deep, trigger);
  const newApproval = /\b(?:require|needs?|must)\b[^.!?\n]{0,50}\b(?:new|fresh|another)\b[^.!?\n]{0,30}\bfreeze\b[^.!?\n]{0,40}\b(?:renewed|new|fresh)\b[^.!?\n]{0,30}\bapproval\b/i;
  assert.match(deep, newApproval);
  assert.match("A changed approved artifact needs another freeze and fresh approval.", newApproval);
  assert.match("Documentation mutations require a fresh candidate freeze and new approval.", newApproval);
  assert.doesNotMatch(deep.replace(newApproval, "may keep the old freeze and approval"), newApproval);
  assert.doesNotMatch("A changed approved artifact may keep its old freeze and approval.", newApproval);
});

test("claim evidence lifecycle preserves provenance and never upgrades static proof into executed PASS", async () => {
  const playbook = await text("skills/documentation/references/VALIDATION_PLAYBOOK.md");
  const lifecycle = playbook.split("## Evidence lifecycle for an amendment")[1].split("## 2. Evidence levels")[0];
  for (const state of ["Reusable", "Invalidated", "Fresh", "Assumptions", "STATIC_ONLY", "BLOCKED", "NOT_APPLICABLE"]) assert.match(lifecycle, new RegExp(state));
  for (const obligation of [/durable.*inspectable/is, /owner.*candidate.*identity.*(?:method|command).*result/is, /independent\w*.*confirm.*inputs/is, /preserv\w*.*unrelated.*history/is, /affected.*claims.*checks/is, /strongest.*safe.*method/is, /assumptions.*(?:plan|recollection).*not.*execution/is]) assert.match(lifecycle, obligation);
  const noStaticPass = /\bstatic\b[^.!?\n]{0,50}\b(?:does\s+not|cannot|must\s+not)\b[^.!?\n]{0,50}\b(?:become|count|establish|prove)\b[^.!?\n]{0,40}\bexecuted\b[^.!?\n]{0,30}\bPASS\b/i;
  assert.match(lifecycle, noStaticPass);
  assert.match("Static verification cannot count as executed PASS.", noStaticPass);
  assert.doesNotMatch(lifecycle.replace(noStaticPass, "static verification becomes executed PASS"), noStaticPass);
  assert.doesNotMatch("Static verification counts as executed PASS.", noStaticPass);
});

test("documentation detail and reusable reports are loaded only for the affected trigger", async () => {
  const skill = await text("skills/documentation/SKILL.md");
  const routing = skill.split("Load detailed references by trigger:")[1].split("## Discover")[0];
  for (const reference of ["DOCUMENTATION_STANDARD.md", "DISCOVERY_MODEL.md", "RECONCILIATION_MODEL.md", "VALIDATION_PLAYBOOK.md"]) assert.match(routing, new RegExp(reference.replaceAll(".", "\\.")));
  for (const trigger of [/policy.*materiality/i, /source map/i, /contradiction/i, /evidence method/i]) assert.match(routing, trigger);
  const report = await text("skills/documentation/assets/RECONCILIATION_REPORT.md");
  for (const obligation of [/bounded.*existing.*(?:report|map)/is, /reus\w*.*durable.*evidence/is, /invalidat\w*.*claims/is, /fresh\w*.*(?:executed|inspected)/is, /unrelated.*preserv\w*/is, /assum\w*.*not.*evidence/is, /artifact.*new.*freeze.*approval/is]) assert.match(report, obligation);
});
