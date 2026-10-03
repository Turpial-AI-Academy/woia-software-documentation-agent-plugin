# Documentation Standard

## Purpose

Software documentation is part of the product and operational contract. This capability reconciles material documentation with the exact candidate being reviewed so users, agents, and operators are not given instructions or claims that diverge from the software they will actually use.

The goal is **minimum sufficient, trustworthy documentation**, not documentation volume.

## 1. Candidate-bound truth

Start from an exact candidate identity whenever the repository permits it:

~~~text
repository + branch/ref + commit SHA
or
version/tag + resolved commit/tree
or
immutable artifact digest
~~~

Documentation evidence is valid only for the candidate it actually inspected.

If implementation changes after documentation reconciliation, determine which claims are affected and invalidate only the evidence that no longer applies. Do not reuse a PASS from a materially different candidate.

Evidence for an unchanged claim may be carried forward only after inspecting its owning source/inputs and establishing applicability to the current candidate. Record that reconciliation; a previous whole-candidate PASS does not transfer automatically. Mutation of packaged documentation in an approved/frozen artifact requires a new candidate freeze/approval through the owning release process.

## 2. Audiences

Treat these audiences separately when their needs differ.

### Users

Need enough information to install, configure, invoke, understand, troubleshoot, upgrade, and safely use supported behavior.

### Agents

Need repository-specific instructions, available tools/capabilities, boundaries, canonical files, workflows, and mutation/validation expectations that match reality.

### Operators

Need environment assumptions, operational procedures, health/verification steps, backup/restore or rollback guidance where applicable, failure handling, and production-impact boundaries.

One document may serve multiple audiences, but audience differences must remain explicit.

## 3. Material documentation

Documentation is material when an incorrect or missing claim can reasonably cause one or more of:

- incorrect product use;
- failed installation, configuration, integration, or automation;
- unsafe or destructive operation;
- incompatible API/schema/config usage;
- incorrect agent behavior;
- broken release, upgrade, migration, rollback, recovery, or support procedure;
- misunderstanding of supported versions/platforms/environments;
- incorrect security- or privacy-relevant operation;
- release notes that misstate the candidate's externally relevant behavior.

Cosmetic wording, optional narrative polish, and non-contractual prose are normally non-blocking unless the repository defines otherwise.

## 4. Source-of-truth ownership

Do not apply one universal evidence hierarchy. Identify which source owns each fact.

Examples:

- executable behavior -> implementation plus executable tests/runtime evidence;
- API/schema/event shape -> canonical schema or interface definition plus implementation where needed;
- configuration keys/defaults -> canonical config schema/default declarations;
- supported versions/platforms -> explicit compatibility policy and maintained build/runtime declarations;
- CLI syntax -> parser/command definition and current help output when available;
- release/version identity -> version metadata, candidate ref, changelog/release records;
- architecture intent -> accepted architecture documentation/ADR reconciled with implementation reality;
- operational procedure -> repository-owned automation/runbook plus safe execution evidence where possible.

Documentation may itself be the authoritative source for product policy or intended support. If two plausible sources conflict, record the ambiguity instead of silently selecting whichever is convenient.

## 5. Single-source-of-truth boundaries

Duplication increases drift risk.

Prefer, in order when appropriate:

1. one canonical source rendered or referenced elsewhere;
2. generated documentation from canonical machine-readable sources;
3. concise cross-links;
4. manually duplicated facts only when audience usability justifies the maintenance cost.

Generated files should identify their generator or provenance when the repository's conventions support it. Edit the source, not generated output, unless the repository explicitly owns generated files directly.

## 6. Documentation surface

Inspect material surfaces as applicable:

- root README and onboarding;
- user/product guides;
- CLI/API/schema/config reference;
- examples and sample configuration;
- agent instructions and repository operating rules;
- runbooks and operational procedures;
- deployment, rollback, backup/restore, disaster-recovery guidance;
- migration/deprecation/compatibility notes;
- changelog and release notes;
- architecture/design explanations where they affect use or operation;
- generated docs and diagrams;
- comments or embedded help text when they are user/agent/operator-facing;
- intentional historical/audit documentation.

Do not treat all repository prose as current operational truth. Historical material should remain clearly historical rather than being rewritten to look current.

## 7. Commands and examples

A documented command is a behavioral claim.

Validate exact command names, arguments, paths, prerequisites, working directory, expected result, and platform assumptions when material.

Never insert real credentials, tokens, customer data, production identifiers, or private host paths into examples.

Use safe placeholders such as:

~~~text
<token>
<project-id>
<environment>
<path>
~~~

Examples should demonstrate supported behavior rather than accidental author-machine state.

## 8. Operations and safety

Documentation validation must not create the incident it is trying to prevent.

Do not run production-impacting, destructive, billing-triggering, irreversible, credential-bearing, or externally mutating procedures simply to validate prose.

For those procedures, use one or more of:

- static verification against canonical commands/config;
- dry-run or validation mode;
- disposable/sandbox environment;
- mocked/local substitute that preserves semantics;
- explicit operator-reviewed evidence.

State exactly what was and was not executed.

## 9. Scope boundaries

Documentation work may expose defects elsewhere. Record them, but do not silently take ownership of another capability.

Examples:

- architecture contradiction -> surface it; do not redesign architecture by default;
- missing tests -> surface validation gap; do not redefine test strategy;
- insecure procedure -> surface risk; do not perform a full security review unless authorized;
- deployment mismatch -> reconcile documentation facts but do not authorize production deployment.

Implementation changes require their own authorization and validation.

## 10. Release gate

Documentation reconciliation is release-blocking when material user, agent, or operator documentation contradicts the same candidate or omits guidance required to operate it safely and correctly.

A release documentation PASS requires:

- exact candidate identified;
- material documentation surfaces inspected;
- blocking drift reconciled or explicitly resolved by the owning authority;
- validations performed on the same candidate;
- blocked checks reported as blocked, not passed;
- no known material contradiction left hidden.
