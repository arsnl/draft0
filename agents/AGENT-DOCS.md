# Agent docs

This folder holds the instructions agents pull into context beyond the root `AGENTS.md`. Follow [A Complete Guide to AGENTS.md](https://www.aihero.dev/a-complete-guide-to-agents-md) when editing or adding files here.

## Where content lives

- **Root `AGENTS.md`** — loaded on _every_ request. Keep it minimal: one-sentence project description, package manager, core commands, and breadcrumbs to this folder.
- **`agents/<TOPIC>.md`** — loaded on demand when linked from the root. One focused topic per file.
- **Per-package `AGENTS.md`** (e.g. `packages/<name>/AGENTS.md`) — loaded when the agent works in that package. Use only for behavior that genuinely differs from the monorepo-wide guidance.
- **External references** — link out to the authoritative source (Conventional Commits, GitHub Actions, Next.js docs) rather than restating it here.

## Writing rules

- **Describe behavior, not paths.** Paths move; concepts are stable. "Tests live next to the source" ages better than "tests live in `src/__tests__/*.spec.ts`".
- **Conversational tone.** "Prefer array methods" rather than "ALWAYS use array methods". No RFC 2119 shouting, no all-caps forcing.
- **Skip what the agent already knows.** Don't re-explain what `feat` means in Conventional Commits or how `async`/`await` works — document only Draft0-specific or non-obvious bits.
- **One claim per line.** Bullet lists beat prose paragraphs for scanability.
- **Link, don't duplicate.** Point to an external doc or sibling file and only note the Draft0-specific twist.

## Adding a new file

1. Confirm the content doesn't fit an existing file — extending is usually better than adding.
2. Name it after the topic (single word or hyphenated, e.g. `CODE-STYLE.md`).
3. Add a bullet to the "More context" section of the root `AGENTS.md` with a one-liner saying when to read it.
4. Keep it focused — topics past ~80 lines are candidates for splitting.

## Maintenance

Revisit these files when:

- A referenced command or behavior changes.
- A file drifts past ~80 lines or repeats content from another file.
- Agents keep making the same mistake this folder was supposed to prevent — tighten the rule.
- A rule stops earning its place — delete it.
