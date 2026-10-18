---
name: games-roadmap-docs
description: How to work a task in this project's roadmap — the four docs/ files (ROADMAP.md, CHANGELOG.md, IMPROVEMENTS.md, DEFERRED.md) owned by the roadkeep CLI and never hand-edited, and above all the one-task-one-commit rule: every finished roadmap task ends in one local commit — `git add -- <its paths>` then `git commit -F <message file>`, no Claude attribution, never pushed — site change plus doc sync in that single commit. Use whenever adding a task, picking the next VG-number, marking a task shipped, retiring, deferring, linting, editing any of those files, executing a block or a list of VG ids, or finishing any task that touches this repo.
---

# Roadmap tasks & committing

**No figure in this file is derived from the backlog.** Counts, the priority queue and which
ids are open are all things `roadkeep` answers, and a sentence here quoting one is a sentence
that was true on the day it was written. Where you would want a number, this file names the
read instead.

## ⛔ READ FIRST — one task, one commit (non-negotiable)

**A task is not finished until the commit landed.** Commit with plain `git`, staged by
path, from the repo root — not `run-commit.cmd`, whose `git add *` takes the whole tree:

```
cd d:\Git\viglet\games
git add -- <this task's paths>
git commit -F <message file>
```

- **Stage by path, never everything** — no `git add -A`, `.` or `*`. Another session in
  this checkout would have its files committed under your title, so
  `git diff --cached --stat` must list this task's files alone.
- **The message comes from a scratchpad file**: a conventional-commits title in ASCII, then
  a few plain lines on what changed and why. `-F` keeps it off the command line, where an em
  dash or an accent may not arrive as the bytes typed.
- **No attribution, no push.** No `Co-Authored-By` trailer, no "Generated with Claude
  Code" line, no `--author`: the commit is the user's, and it stays local. A push to `main`
  publishes `site/` to GitHub Pages, so pushing is the owner's call. Hooks run — never
  `--no-verify`.
- **The doc sync rides in the same commit as the change**, so the governed files never
  describe a state that did not ship.
- **You may NOT do more than one task before committing.** A multi-task request
  (a whole block, or a list of `VG<n>`s) is _not_ permission to batch: it is a request
  to run them one at a time, committing after each.
- **A batch of ≥2 tasks runs under the `/loop` skill** (self-paced): exactly one task
  per iteration, committed at the end of that iteration, then advance.
- **Self-check before starting task N+1:** `git status` / `git log -1`. If the previous
  task's work is still in the working tree, stop and commit it first.
- **Declare your paths, then read them back at the moment of committing.**
  `roadkeep claim VG<n> --path <p>` says what the task will touch; `roadkeep claim VG<n>`
  with no `--path` answers what you declared plus what the tree holds that another live claim
  says is its own. `roadkeep claims` lists held, expired and stale; `[claims] held` in
  `roadkeep.toml` is how long one stands.

The same rule applies to any finished unit of work in this repo, roadmap task or not.

## The gate before the commit

Validated means checked, not that the edit looked right. `site/` is static HTML, CSS and
`app.js` with no build step, so the gate is:

| Check                    | What it holds                                                                                                     | When                                       |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| `roadkeep lint`          | The governed files. Non-zero exit is the whole point of it.                                                       | Every task, without exception.             |
| Headless Chrome screenshot | The page in PT (`--lang=pt-BR`) and EN (`--lang=en-US`), at 1280 and 390 wide — the EN/PT switch lives in `app.js`. | Every task that touches `site/`.           |
| `--dump-dom`             | The rendered DOM after `app.js` ran, for text and link checks a screenshot cannot read.                           | When a string, link or attribute changed. |

Write screenshots and Chrome profiles to the session scratchpad, never into `site/`. Look at
the screenshot before claiming the page renders.

## ⛔ READ SECOND — four files are owned by `roadkeep`

[`roadkeep.toml`](../../../roadkeep.toml) declares this project's format — prefix `VG`,
`ref_scheme = "id"`, the markers, the limits, the requirement vocabulary (`owner`) — and
[`.mcp.json`](../../../.mcp.json) plus [`.claude/settings.json`](../../settings.json)
wire the rest: a hook that **denies a hand-edit** to any governed file and names the command
that does it, and the `mcp__roadkeep__*` tools whose input schema _is_ this project's
format. **Reach for the MCP tools first**; the shell fallback is
`python .claude/hooks/roadkeep-launch.py`.

Start a task with `brief`, not by reading the files; `lint` is the gate.

| File                                                    | Single responsibility                                                                                                                                                                                                |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`docs/ROADMAP.md`](../../../docs/ROADMAP.md)           | **Task status** — active backlog only (📋 designed · 💭 idea · ⏳ partial · 🛠 in-progress), one line per task, plus the `## Priority` queue, the block headings, the `## Done when` criteria and the `## Non-goals`. |
| [`docs/CHANGELOG.md`](../../../docs/CHANGELOG.md)       | What has **shipped** — the ledger, indexed by block. Authoritative for the highest block letter.                                                                                                                     |
| [`docs/IMPROVEMENTS.md`](../../../docs/IMPROVEMENTS.md) | **Design rationale** for _unshipped_ work only. Deleted per task by the ship that closes it.                                                                                                                         |
| [`docs/DEFERRED.md`](../../../docs/DEFERRED.md)         | Lines **set aside** by `defer`, keeping their id, deps, symptom and section. `resume` brings one back.                                                                                                               |

## The loop

- **`brief --claim`** picks the next line and briefs it in one read, taking it in the same
  transaction. **Reach for `--designed`** when an unscoped pick would hand you a 💭 whose
  design is still to write.
- **`--have owner`** only when the owner is present to take the step — DNS, GitHub settings,
  Steamworks, the label's e-mail. Otherwise those lines are set aside and named: draft, and
  leave publishing to the owner.
- **Order is the `## Priority` section of `docs/ROADMAP.md`**, not opinion. `priority list`
  is the read; `priority add` / `priority drop` are the doors.
- **The read BEFORE an add is `delivered <block> --near "<the sentence you would file>"`**,
  the duplicate question asked _before_ an id is spent.
- **Adding is `add --block <x> --symptom "…" --why "…" --section "…"`.** The `§VG<n>`
  pointer is derived. `budget` prices every field first.
- **The next id is `roadkeep next-id`** — it never fills a gap. Retired ids are never reused.
- **Keep a task line terse** — symptom (what does not work, never a fix name) + one
  sentence of why + the pointer. The reasoning belongs in the section.

## The two lists that bind a proposal

- **`non-goal list`** — every entry binds. A proposal a non-goal forbids is not filed.
- **`criterion list`** — what would finish each block, under `## Done when — Block X`.
  A constraint the project must keep obeying usually belongs here: a criterion survives
  every ship and is what `ship --checked <lead>` verifies.

## Shipping, and the section it deletes

`ship <id> --why "<what now works>"` writes the ledger entry, clears the roadmap line and
**deletes the design section**, in one transaction or none. **Read the section before you
ship it**, and ask of each paragraph: _does this stop being true when the page changes?_

| Answer                                     | Door                                                                       |
| ------------------------------------------ | -------------------------------------------------------------------------- |
| It explains **this file**                  | `--recorded-in <path>` — move the prose into a comment in that file.      |
| It is a rule the project must keep obeying | `criterion add` or `non-goal add`, which are never deleted                 |
| You read it and it had gone stale          | `--superseded-design "<what it was wrong about>"`                          |
| Nothing survives                           | ship plainly — most ships are this                                         |

**Never copy a section into a second file.** A section may end with its own instruction —
`On ship: --recorded-in <path>` — honour it, revised against what was actually built.

## Everything else

- **Status lives in exactly one file.** If a marker anywhere disagrees with the roadmap, the
  roadmap wins.
- **A pause is `defer <id> --reason "…"`, not `retire`.** Retiring is terminal.
- **A false claim is `restate <id> --symptom "…"`**, which keeps the id, deps, marker and
  design.
- **`lint` reports and `repair` spends the report** — every finding names the command that
  closes it, and `explain <code>` says what a code means before you guess.
