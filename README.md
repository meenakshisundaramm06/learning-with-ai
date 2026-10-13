# Learning with AI

An interactive evidence board for a 45-minute remote talk on one question: *AI gives us more learning material than ever, so why do so many learning attempts still end at saved links?*

**[Open the presentation →](https://meenakshisundaramm06.github.io/learning-with-ai/)**
 · **[Open the speaker notes →](https://meenakshisundaramm06.github.io/learning-with-ai/notes/)**

This is a portfolio and reference project. I built the talk and the tool I present it with. It shows how I design for a screen share, not a tool for others to reuse.

## The idea

The talk is a case file. Eight clues sit on one board as cards, joined by threads. Each case moves a camera to one card, and the speaker explains what it shows. The cases lead from "a pile of courses and videos" to a short, practical rule: map the path, shrink the step, practise at the edge of what you can do, and come back later.

## Two views, one talk

| View | Address | For |
| --- | --- | --- |
| Presentation | `/` | The audience. A clean board with no notes, made for screen sharing. |
| Speaker notes | `/notes/` | The speaker. The same board, a word-for-word script, cues, transitions and a timer. |

The two views stay in step. When the speaker moves to the next case in one tab, the other tab follows. They use `BroadcastChannel`, with a versioned `localStorage` fallback for browsers that lack it. Both tabs must run on the same device and the same address.

**Controls**

| Key | Action |
| --- | --- |
| `→`, `Space`, `Page Down` | Next case |
| `←`, `Page Up` | Previous case |
| `Home` | Full-board overview |
| `End` | Final case |
| `F` | Full screen |

You can also click a card or a case marker to jump to it.

## What I wanted to show

**Design for the person who presents.** The audience sees little text on screen. The speaker has a full script, split into lines to say (`SAY`) and actions to take (`DO`), such as a pause, a chat question or a work block. A test checks that the two stay apart.

**Keep the talk to its time.** The cases add up to exactly 45 minutes. A test fails if they do not.

**Fail safely.** The saved state has a version. The app ignores state it does not recognise and keeps valid values inside the range of cases.

**Make the board a model, not a picture.** Cards, threads and camera poses are typed data in `src/content/`. Tests check that every case has a focus card, that every thread joins cards that exist, and that every case shows at least one visible artifact.

## How it is built

- React 19 and TypeScript, built with Vite.
- The depth comes from CSS 3D transforms (`perspective` and `translateZ`). There is no 3D library.
- Tests run with Vitest, linting with ESLint, and type checks with `tsc`.
- Each push to `main` runs the full check and publishes the site to GitHub Pages. A GitLab Pages pipeline (`.gitlab-ci.yml`) does the same on GitLab.

```
src/
  content/       the eight cases, the cards, the threads and the script
  components/    evidence board, cards, thread map, speaker notes
  hooks/         presentation controller: keys and sync between tabs
  lib/           navigation, saved state and timer helpers
notes/           entry page for the speaker view
outputs/         the written session content and a review of the script
```

## Run it

You need Node.js.

```bash
npm install
npm run dev      # local server at 127.0.0.1
npm run check    # lint, tests, type check and build
```

## Notes

- The speaker notes page is public. Its address is not linked from the presentation, but anyone who has the address can open it.
- Shared for reference. No license is attached.
