---
name: authoring-skills
description: >
  How to create and maintain agent skills in `.agents/skills/`. Use when writing a new
  SKILL.md, editing skill descriptions, choosing frontmatter fields, or deciding what
  belongs in a skill vs `AGENTS.md`. Covers supported fields, description writing,
  naming, and the relationship between always-loaded `AGENTS.md` and on-demand skills.
user-invocable: false
---

# Authoring skills

Use this skill when creating or modifying agent skills under [`.agents/skills/`](../) (sibling skills live alongside this folder).

## When to create a skill

Create a skill when content is:

- Too detailed for `AGENTS.md` (code templates, multi-step workflows, diagnostic procedures).
- Only relevant for specific tasks (not needed every session).
- Self-contained enough to load independently.

Keep in `AGENTS.md` instead when:

- It is a one-liner rule or guardrail every session needs.
- It is a general-purpose gotcha any agent could hit.

## File structure

```text
.agents/skills/
└── my-skill/
    ├── SKILL.md          # Required: frontmatter + content
    ├── workflow.md       # Optional: supplementary detail
    └── examples.md       # Optional: referenced from SKILL.md
```

## Supported frontmatter fields

```yaml
---
name: my-skill # Required. Used for $name references and /name commands.
description: > # Required. How the agent decides to auto-load the skill.
  What this covers and when to use it. Include file names and keywords.
argument-hint: "<pr-number>" # Optional. Hint for expected arguments.
user-invocable: false # Optional. Set false to hide from / menu.
disable-model-invocation: true # Optional. Set true to prevent auto-triggering.
allowed-tools: [Bash, Read] # Optional. Tools allowed without permission.
model: opus # Optional. Model override.
context: fork # Optional. Isolated subagent execution.
agent: Explore # Optional. Subagent type (with context: fork).
---
```

Only use fields your runtime supports. Unknown fields may be ignored.

## Writing descriptions

The `description` is the primary matching surface for auto-activation. Include:

1. **What the skill covers** (topic).
2. **When to use it** (trigger scenario).
3. **Key file names** the skill references (e.g. `package.json`, `apps/docs`).
4. **Keywords** a user or agent might mention.

```yaml
# Too vague - will not auto-trigger reliably
description: Helps with flags.

# Good - specific files and concepts for matching
description: >
  How to add or change a published `@draft0/*` package: changesets, README, peer deps.
  Use when editing `packages/*`, `npx changeset`, or release notes.
```

## Content conventions

### Structure for action

Skills should tell the agent what to **do**, not just what to **know**:

- Lead with "Use this skill when..."
- Include step-by-step procedures.
- Add templates ready to adapt.
- End with verification commands.
- Cross-reference related skills in a "Related skills" section.

### Relationship to AGENTS.md

| `AGENTS.md` (always loaded)  | Skills (on demand)     |
| ---------------------------- | ---------------------- |
| One-liner guardrails         | Step-by-step workflows |
| Points to skills via `$name` | Expands on those rules |

When adding a skill, add a one-liner summary to `AGENTS.md` "Specialized skills" with a `$skill-name` reference.

### Naming

- Short, descriptive, topic-scoped: `quality-checks`, `docs-app`.
- No repo prefix (already scoped by `.agents/skills/`).
- Hyphens for multi-word names.

### Supplementary files

For complex skills, use a hub + detail pattern:

```text
pr-triage/
├── SKILL.md         # Overview, quick commands, links to details
├── workflow.md      # Prioritization and patterns
└── local-repro.md   # Env matching
```
