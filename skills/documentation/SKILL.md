---
name: documentation
description: Audits, reconciles, validates, and updates user, agent, and operator documentation against repository evidence and an exact software candidate.
license: MIT
compatibility: Works with software repositories and documentation sets across languages and deployment styles; validating commands or external operations depends on the target repository's actual tools, environments, and authorized access.
metadata:
  author: Turpial AI Academy
  version: "0.5.7"
---

# documentation

## Operating flow

~~~text
DISCOVER -> DECIDE -> IMPLEMENT -> VALIDATE -> REPORT
~~~

## Purpose

Keep material user, agent, and operator documentation consistent with the exact software candidate it describes.

The objective is trustworthy documentation for the current candidate, not maximum documentation volume. Preserve healthy sources of truth, remove material drift, and verify commands, interfaces, configuration, examples, operations, and release-relevant guidance with proportionate evidence.

## Non-negotiable rules

- Anchor the work to an exact candidate: commit, tree, tag, artifact, or other immutable revision that identifies the software being documented.
- Discover before editing. Read the repository and existing documentation ownership rules first.
- Treat documentation as evidence-bearing product surface, not decoration.
- Reconcile claims against the source that actually owns each fact. Do not invent behavior to fill gaps.
- Preserve healthy single-source-of-truth boundaries. Prefer references or generation over duplicating facts that will drift.
- Distinguish user, agent, and operator audiences; do not collapse their needs into one generic README.
- Do not change implementation merely to make documentation true unless implementation change is separately authorized.
- Never present an unexecuted, blocked, or historical check as current validation.
- Do not execute destructive, production-impacting, credential-bearing, or externally mutating procedures merely to prove documentation.
- Keep secrets out of examples. Use explicit placeholders and documented secret mechanisms.
- Keep documentation scope distinct from architecture redesign, test-policy ownership, security assessment, and deployment authorization.
- If the candidate changes materially after reconciliation, invalidate affected documentation evidence and re-check it.

## Select execution depth

Use a bounded claim-local amendment when an existing documentation/source map is healthy, the candidate and owning sources are identifiable, and a local wording, link, or reference correction leaves behavior and contracts unchanged. Locate the authoritative artifact and relevant durable evidence, identify the affected claim and audience, and read only its owning source and required context.

Amend the smallest coherent unit, validate the affected claim plus links, ownership, audience, safety, and candidate invariants, and preserve unrelated valid documentation/evidence and intentional history. Reuse a healthy source map or report rather than rebuilding the full inventory or replaying every template. The bounded route rejoins Validate/Report with the changed claims and explicit evidence limits.

Use the deep path for a new documentation set/map, unhealthy or missing sources/evidence, unclear ownership/scope, contradictions, public API/event/schema or configuration-contract changes, compatibility/migration/persisted-state changes, security/privacy or operational/deployment/recovery changes, generated-source uncertainty, cross-provider dependency changes, or mutation of an approved/frozen release candidate or artifact. Changing packaged documentation of an approved candidate changes that artifact; require a new freeze and renewed approval through its owning release process before gate acceptance.

Load detailed references by trigger:

| Trigger | Reference |
|---|---|
| Policy/materiality decision, governance uncertainty, or release-gate ambiguity | [DOCUMENTATION_STANDARD.md](references/DOCUMENTATION_STANDARD.md) |
| New/unhealthy source map, missing audience/ownership, or candidate ambiguity | [DISCOVERY_MODEL.md](references/DISCOVERY_MODEL.md) |
| Drift, missing claim, contradiction, or reconciliation action needing classification | [RECONCILIATION_MODEL.md](references/RECONCILIATION_MODEL.md) |
| New/changed command, interface, runbook, generated source, or evidence method | [VALIDATION_PLAYBOOK.md](references/VALIDATION_PLAYBOOK.md) |

## Discover

Apply the selected depth. For a bounded amendment, reuse the healthy map and inspect only the affected owner/source; expand discovery for a missing invariant or deep-path trigger.

Establish:

- exact candidate identity and whether the worktree/revision is stable enough to reconcile;
- repository instructions and documentation ownership/contribution rules;
- audience map: users, integrators, agents, maintainers, operators, release consumers;
- documentation surfaces, including README, guides, API/CLI/config reference, examples, agent instructions, runbooks, release notes, migration/deprecation guidance, generated docs, diagrams, comments, and intentional historical records;
- the source of truth for each material claim;
- documentation generation tooling and generated-file markers;
- supported versions, platforms, environments, compatibility promises, and external dependencies;
- commands and procedures that are safe to validate directly versus those requiring static or sandboxed validation.

Build an evidence-backed documentation map rather than assuming every Markdown file is equally authoritative.

## Decide

Classify the affected claims using the existing healthy map and repository conventions; load classification detail when drift, contradictions, or ambiguity need it.

For each material claim or missing documentation obligation:

1. identify audience and surface;
2. identify the owning source of truth;
3. classify the current state;
4. determine materiality and release impact;
5. choose the smallest safe reconciliation action;
6. define the validation evidence needed on the same candidate.

Prefer removing duplication, linking to the canonical source, or regenerating generated documentation when that is safer than hand-maintaining another copy.

## Implement

Reconcile only the authorized documentation surface.

Typical actions include:

- correct stale commands, flags, paths, defaults, examples, compatibility claims, API/schema references, or release/version references;
- add missing user or operator guidance when the candidate exposes behavior that materially requires it;
- align agent instructions with actual tools, files, workflows, and boundaries;
- replace duplicated facts with links or generated output when a canonical owner already exists;
- regenerate generated docs with the repository's canonical generator;
- remove obsolete documentation only when it is not intentional historical/audit/migration material;
- preserve meaningful history in changelogs, ADRs, migration records, and release notes.

When implementation and documentation conflict and ownership is ambiguous, report the contradiction instead of silently choosing the preferred story.

## Validate

Use the selected evidence method and validation depth; load the playbook when the command, procedure, generated source, or proof method needs new validation decisions.

Validate proportionally on the same candidate. As applicable, check:

- internal links, anchors, referenced paths, filenames, and generated-document provenance;
- CLI commands, flags, exit expectations, and examples;
- APIs, schemas, events, config keys/defaults, environment variables, and compatibility statements;
- installation, bootstrap, upgrade, migration, rollback, backup/restore, and operational procedures;
- agent instructions against actual repository tools and boundaries;
- version/release notes against the exact candidate;
- diagrams and conceptual descriptions against implementation evidence when they are materially operational or contractual.

Prefer read-only execution. Use sandboxed or static verification for mutating procedures unless explicit authorization and an appropriate disposable environment exist.

Inspect the final diff and candidate identity. If the candidate changed in a way that affects reconciled claims, re-run the affected documentation validation.

Independently inspect reusable durable proof and confirm its inputs still apply to the current candidate. Re-execute invalidated or missing checks; preserve execution/static/blocked labels. A source map, plan, or recollection cannot establish an executed PASS.

## Report

Use [RECONCILIATION_REPORT.md](assets/RECONCILIATION_REPORT.md) when a durable report is useful.

Report:

1. candidate identity;
2. audiences and documentation surfaces inspected;
3. sources of truth used;
4. material drift/missing guidance found;
5. reconciliation decisions and files changed;
6. validation actually executed and results;
   include reusable, invalidated, and fresh evidence with sources/inputs, and assumptions that are not evidence;
7. blocked or static-only validations;
8. unresolved ambiguities and owner decisions required;
9. remaining documentation risks;
10. whether material user/agent/operator documentation is reconciled to the same candidate.

Do not claim PASS while a blocking documentation divergence remains.

## Detailed references

- [Documentation Standard](references/DOCUMENTATION_STANDARD.md)
- [Discovery Model](references/DISCOVERY_MODEL.md)
- [Reconciliation Model](references/RECONCILIATION_MODEL.md)
- [Validation Playbook](references/VALIDATION_PLAYBOOK.md)
- [Reconciliation Report Template](assets/RECONCILIATION_REPORT.md)
