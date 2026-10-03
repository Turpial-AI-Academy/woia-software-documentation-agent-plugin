# Validation Playbook

## Purpose

Validate documentation claims with the minimum sufficient evidence needed to trust the same software candidate, while avoiding unsafe mutations merely to prove prose.

## 1. Freshness

Before validation, re-confirm candidate identity.

When available, record:

~~~text
repository
branch/ref
commit SHA
tree SHA or artifact digest
version/tag
~~~

If candidate changes after validation, identify which claims are affected and rerun only those checks.

## Evidence lifecycle for an amendment

- **Reusable:** durable, inspectable source or execution evidence for an unchanged claim, with owner, candidate/input identity, command or method, result, and relevant environment/freshness. Independently confirm its inputs still apply; preserve unrelated valid documentation, evidence, and historical records.
- **Invalidated:** record the affected claims/checks when their owning source, behavior, contract, command, generated provenance, configuration, migration, security, operations, or candidate/artifact changed. Retain original records as history and reconcile only affected dependencies plus mandatory candidate, links, ownership, and safety invariants.
- **Fresh:** execute or inspect the missing/changed claim using the strongest safe method below. Re-check source ownership, links, candidate identity, and any expired operational observation that supports a current claim. Use deep handling and new freeze/approval for an approved artifact mutation.
- **Assumptions:** a plan, source map, recollection, inferred behavior, or unavailable external state is not proof of execution. Keep STATIC_ONLY, BLOCKED, NOT_APPLICABLE, historical, and executed results distinct; reused static evidence does not become executed PASS.

Record the changed unit, reused sources/inputs, invalidation reason, fresh checks, and limitations in the existing report or workflow. A healthy bounded amendment does not require a new inventory, a full template replay, or repeated unaffected runtime checks.

## 2. Evidence levels

Use the strongest safe evidence appropriate to the claim.

### Direct execution

Best for non-destructive, deterministic commands in a suitable local or disposable environment.

Examples:

- help or version output;
- validators;
- build or test commands;
- read-only inspection;
- local example execution.

### Sandboxed execution

Use when behavior mutates state but can be safely isolated.

Examples:

- disposable database;
- temporary directory;
- local container;
- test account or environment;
- dry-run mode.

### Static verification

Use when executing would be unsafe, unauthorized, expensive, production-impacting, or credential-dependent.

Verify against:

- command or parser definitions;
- schemas;
- configuration declarations;
- automation scripts;
- deployment manifests;
- source-controlled runbooks;
- generated help or reference sources.

### Owner or external evidence

Use when truth depends on an external service or controlled environment. Record evidence provenance and freshness.

Do not convert static or external evidence into a claim that the procedure was actually executed.

## 3. Command validation

For each material documented command, verify as applicable:

- executable or task name;
- flags and arguments;
- working directory;
- prerequisite tools or services;
- environment assumptions;
- file or path references;
- expected result or exit behavior;
- platform differences;
- whether the command is read-only, mutating, or destructive.

A syntactically valid command can still be operationally false if prerequisites or paths are wrong.

## 4. Unsafe procedures

Do **not** execute solely for documentation validation:

- production deployment or promotion;
- irreversible deletion;
- destructive database or storage commands;
- real billing or purchase actions;
- credential rotation;
- customer or user notification;
- external publication;
- live DNS or domain mutation;
- destructive rollback or restore;
- any operation requiring secrets that are not already safely available and authorized.

Prefer dry-run, static verification, disposable environments, or operator evidence.

## 5. Interface and configuration validation

### CLI

Compare docs with actual command registration, help, or parser behavior.

### API, schema, and event

Compare method, path, topic, field, type, requiredness, and example semantics with canonical definitions and implementation where needed.

### Configuration

Verify:

- key names;
- defaults;
- required or optional behavior;
- allowed values;
- precedence;
- environment variable names;
- reload or restart behavior when material.

### Compatibility

Verify supported versions, platforms, and environments against explicit maintained declarations and current build or runtime evidence.

Do not infer support merely because something happens to work on the validator's machine.

## 6. User examples

Examples should:

- use supported interfaces;
- avoid secrets or private identifiers;
- be internally consistent;
- include needed prerequisites;
- avoid stale output that implies false exactness;
- be executable when practical.

For nondeterministic output, document shape and meaning rather than brittle exact values.

## 7. Agent documentation

Verify agent-facing instructions against:

- actual tools and capabilities available;
- repository paths and ownership;
- allowed mutation boundaries;
- validation commands;
- generated or protected paths;
- human authorization boundaries;
- current workflow terminology.

Stale agent instructions can cause real repository mutations and are material.

## 8. Operator documentation

For runbooks and operations, verify:

- prerequisites and access assumptions;
- target environment selection;
- health or preflight checks;
- safe order of operations;
- success indicators;
- failure branches;
- rollback or recovery conditions;
- backup or restore expectations;
- escalation or owner boundaries.

If a step cannot be safely executed, say which portions were statically verified and which remain externally blocked.

## 9. Generated documentation

When docs are generated:

1. find the canonical source;
2. find the repository-owned generator;
3. regenerate using the supported process;
4. inspect the diff;
5. verify generated files are current;
6. edit the source rather than the output when that is the repository convention.

Do not introduce a new generator just for uniformity when a healthy one already exists.

## 10. Links and navigation

Validate material:

- relative links;
- anchors;
- referenced files;
- current-version navigation;
- version selectors;
- external links when network access and stability justify checking them.

A link checker passing does not prove the linked content is semantically current.

## 11. Release and version validation

Verify:

- current documented version;
- changelog or release heading;
- migration or deprecation notes;
- install or upgrade selectors;
- artifact names when documented;
- compatibility statements.

Historical sections remain historical and should not be rewritten to current values.

## 12. Validation report

For every meaningful check record:

~~~text
claim/surface
method
candidate
command/source
result
limitations
~~~

Use result values such as:

~~~text
PASS
FAIL
BLOCKED
STATIC_ONLY
NOT_APPLICABLE
~~~

Never label BLOCKED, STATIC_ONLY, NOT_APPLICABLE, skipped, or historical evidence as PASS.

## 13. Final gate

Documentation is reconciled when current material user, agent, and operator documentation agrees with the same candidate, and the report makes all remaining limitations explicit.
