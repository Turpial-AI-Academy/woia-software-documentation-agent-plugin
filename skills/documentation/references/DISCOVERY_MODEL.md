# Discovery Model

## Goal

Build a compact evidence map of the documentation that matters for the exact candidate before editing any of it.

## 1. Anchor the candidate

Record, when available:

- repository and root;
- branch/ref;
- commit SHA;
- tree SHA or artifact digest when release-sensitive;
- version/tag;
- dirty/clean state if operating in a worktree;
- generated artifacts or docs tied to the candidate.

If candidate identity is unstable, say so and avoid claiming final reconciliation.

## 2. Read repository instructions

Before scanning documentation, identify:

- contribution/ownership rules;
- agent instructions;
- generated-file markers;
- vendored or third-party documentation;
- protected paths;
- localization rules;
- versioned-docs layout;
- documentation build/generation tasks;
- release or support policies.

Preserve healthy conventions.

## 3. Build an audience map

Ask who must successfully use the documentation:

| Audience | Typical need |
|---|---|
| End user | install, configure, use, troubleshoot |
| Integrator | APIs, schemas, events, compatibility |
| Agent | tools, files, workflows, boundaries, validation |
| Maintainer | contribution and repository operation |
| Operator | run, observe, recover, rollback |
| Release consumer | version, changes, migration, deprecation |

Only include audiences relevant to the repository.

## 4. Inventory material surfaces

Search by concern rather than by file extension.

### Use and onboarding

- README;
- installation/setup;
- quickstarts;
- tutorials;
- examples;
- troubleshooting.

### Interfaces and configuration

- CLI help/reference;
- APIs and schemas;
- configuration keys/defaults;
- environment variables;
- events/messages;
- compatibility/support statements.

### Agent and maintainer operation

- AGENTS/instructions;
- contribution guides;
- canonical tasks;
- repository-specific workflow rules.

### Operations

- startup/shutdown;
- health verification;
- runbooks;
- backup/restore;
- migration;
- rollback/recovery;
- incident/support procedures.

### Release/history

- changelog;
- release notes;
- migration/deprecation notes;
- versioned documentation;
- ADRs/audits/history that must remain intentionally historical.

### Generated surfaces

- generated API docs;
- generated config/reference tables;
- diagrams or static sites generated from sources.

## 5. Build a source-of-truth map

For each material claim family, record:

~~~text
claim family
-> audience
-> documentation surface
-> canonical owner
-> verification method
-> current state
~~~

Examples of claim families:

- install command;
- default port;
- environment variable;
- API field;
- supported runtime;
- rollback command;
- release version;
- agent tool name.

Do not assume code automatically overrides an explicit product policy; contradictions can indicate a product/implementation issue that needs owner resolution.

## 6. Detect drift signals

Look for:

- commands or paths that no longer exist;
- renamed/deleted APIs, flags, tools, files, services, or configuration;
- stale defaults;
- examples using unsupported behavior;
- conflicting copies of the same fact;
- generated docs differing from their source;
- instructions for old versions presented as current;
- release notes that do not match candidate metadata;
- agent instructions referencing unavailable tools or obsolete workflow;
- runbooks whose prerequisites or rollback steps no longer match automation;
- undocumented externally relevant candidate behavior;
- orphan docs with no current audience or owner.

## 7. Produce discovery output

Before editing, be able to state:

1. exact candidate inspected;
2. material audiences;
3. documentation surfaces in scope;
4. source-of-truth owners;
5. drift/missing-guidance candidates;
6. validation methods;
7. blocked evidence or owner questions.

Then move to reconciliation.
