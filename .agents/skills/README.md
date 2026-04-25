# Skills — Draft0

Skills are on-demand instructions that extend [`AGENTS.md`](../../AGENTS.md) with deeper workflows, checklists, and verification steps.

## When to create a skill

Create a skill when:

- The content is too detailed for `AGENTS.md` (multi-step workflows, release checklists, app-specific conventions).
- It only applies to some tasks, not every session.
- It is self-contained enough to load on its own.

Keep in `AGENTS.md` instead when:

- It is a one-line guardrail every session needs.
- It is a simple mechanical fact with no separate procedure.

## Layout

```text
.agents/skills/
├── README.md                 # This file
├── some-skill/
│   └── SKILL.md              # Required: YAML frontmatter + body
│   └── optional-notes.md     # Optional: linked from SKILL.md
```

## SKILL.md frontmatter

Use only fields your agent runtime documents. Commonly:

| Field         | Required | Purpose                                                                                                                       |
| ------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `name`        | Yes      | Skill id; used for `$name` references.                                                                                        |
| `description` | Yes      | What the skill covers and **when** to load it. Include paths (`apps/docs`, `packages/oxlint`) and keywords so matching works. |

Write descriptions so an agent can answer: _should I open this skill for this task?_

## Relationship to AGENTS.md

- `AGENTS.md` = always-loaded guardrails and commands.
- Skills = conditional deep dives. Do not duplicate long passages from `AGENTS.md`; link back or summarize in one line.

## Naming

- Short, topic-scoped — examples in this repo: `code-style`, `testing`, `commits-and-prs`, `package-changes`, `docs-app`, `quality-checks`, `authoring-skills`.
- Hyphens for multi-word names. No repo prefix.

See [`authoring-skills/SKILL.md`](authoring-skills/SKILL.md) for full authoring guidance aligned with this repo.
