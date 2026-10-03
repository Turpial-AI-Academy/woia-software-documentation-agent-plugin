# Reconciliation Model

## Purpose

Classify documentation state consistently so reconciliation work fixes material divergence without turning stylistic preference into a release blocker.

## 1. Unit of reconciliation

Reconcile **claims**, not just files.

A claim is a statement or instruction that users, agents, or operators can reasonably rely on, for example:

- "run this command";
- "this flag defaults to X";
- "this API returns Y";
- "this environment variable is required";
- "this version supports Z";
- "rollback uses this procedure";
- "the agent may edit these files".

One file can contain many claims with different owners and validation methods.

## 2. States

Use one state for each material claim or obligation.

### MATCH

The documented claim agrees with its canonical source and current candidate, with sufficient evidence for its materiality.

### DRIFT

Documentation materially contradicts the current candidate or owning source.

Examples:

- stale command or flag;
- wrong default;
- deleted path/API/tool presented as current;
- obsolete operator procedure;
- release/version mismatch.

### MISSING

The candidate exposes behavior or an operational obligation that materially requires documentation, but no adequate guidance exists.

Do not label every undocumented internal detail as missing. Materiality must be established.

### AMBIGUOUS

Two plausible authoritative sources disagree or ownership is unclear.

Do not resolve by guesswork. Identify the owner decision needed.

### BLOCKED_EXTERNAL

The claim depends on an external system, credential, production environment, third-party behavior, or other evidence that cannot be safely or legitimately verified in the current context.

Use static or sandbox evidence where possible, and report the limitation.

### NOT_MATERIAL

The difference is cosmetic, historical, intentionally versioned, or otherwise not relevant to correct current use or operation.

Do not use this state to hide a real contradiction.

## 3. Materiality test

A finding is material when leaving it unresolved can reasonably cause:

- incorrect or failed user action;
- broken integration or automation;
- unsafe or destructive operation;
- agent mutation outside intended boundaries;
- incorrect compatibility expectation;
- failed migration, rollback, or recovery;
- release consumer misunderstanding;
- a materially false security, privacy, or operational claim.

Record the expected impact, not just "docs are stale".

## 4. Reconciliation actions

Choose the smallest action that restores a healthy source-of-truth boundary.

### UPDATE

Correct the documentation to match the owned truth.

### ADD

Add missing material guidance.

### REMOVE

Delete obsolete current-facing guidance when it is not intentional history.

### LINK

Replace duplicated detail with a pointer to the canonical source.

### GENERATE

Regenerate documentation from the canonical source with the repository's supported tool.

### CLARIFY

Make scope, audience, version, prerequisite, limitation, or historical status explicit.

### ESCALATE_OWNER

When policy or implementation ownership is ambiguous, record the contradiction and request the appropriate owner decision.

### DEFER_NONBLOCKING

Defer only when materiality is genuinely non-blocking and the remaining risk is recorded.

## 5. Blocking rules

Documentation reconciliation is **not ready** when any of these remains:

- material DRIFT affecting current user, agent, or operator behavior;
- material MISSING guidance required for safe or correct operation;
- AMBIGUOUS ownership whose unresolved outcome changes current behavior or instructions;
- a validation claim reported as passed without evidence;
- documentation validated against a materially different candidate.

BLOCKED_EXTERNAL is not automatically a release blocker. Decide based on risk, available static or sandbox evidence, and the repository's release policy. The limitation must remain visible.

## 6. Preserve history

Do not "fix" historical truth by rewriting intentional records to current behavior.

Preserve and clearly label:

- changelog history;
- past release notes;
- ADRs;
- migration records;
- audits;
- incident or postmortem records;
- versioned documentation.

Current-facing indexes and navigation must not accidentally present historical guidance as current.

## 7. Reconciliation ledger

For non-trivial work, track at least:

| Claim/surface | Audience | Owner/source | State | Materiality | Action | Validation | Result |
|---|---|---|---|---|---|---|---|

The ledger may live in a PR, issue, report, temporary working note, or project-native tracking system. Do not force a new artifact when existing workflow already captures the evidence well.

## 8. Completion condition

A documentation reconciliation can report PASS only when:

- all material in-scope claims are MATCH after reconciliation, or an authorized owner resolution establishes the intended truth;
- no blocking MISSING or AMBIGUOUS state remains;
- validation evidence refers to the same candidate;
- blocked or unexecuted checks are explicitly distinguished from PASS.
