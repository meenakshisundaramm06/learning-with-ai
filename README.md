# Learning with AI — Evidence Board

An interactive 3D evidence-board presentation for a 45-minute remote learning session.

## Views

- `/` — clean screen-share presentation.
- `/notes/` — separate presenter view with the synced board, speaker script, cues, transitions, and timer.

The two views synchronise the active case in browsers that support `BroadcastChannel`, with a versioned `localStorage` fallback. Keep both tabs on the same device and origin for automatic sync.

The notes URL is intentionally absent from the public presentation. It is still a static URL, not an access-control boundary. Use a private GitLab project with Pages access control if the notes must be private.

## Controls

- `ArrowRight`, `Space`, or `PageDown` — next case.
- `ArrowLeft` or `PageUp` — previous case.
- `Home` / `End` — full-board overview / final case.
- `F` — toggle fullscreen.
- Click an evidence card or case marker to jump to it.

## Local development

```sh
npm install
npm run dev
```

Run the full verification suite:

```sh
npm run check
```

Build output is written to `dist/` and contains both HTML entry points.

## GitHub Pages

`.github/workflows/deploy-pages.yml` runs `npm run check` and publishes `dist/` on every push to `main`. On a public repo the site and the `/notes/` page are both public.

## GitLab Pages

The included `.gitlab-ci.yml` verifies every branch and deploys `dist/` from the default branch using `pages.publish`.

1. Create or connect a GitLab project.
2. Push this folder to its default branch.
3. Wait for the `verify-site` and `deploy-pages` jobs.
4. Find the URL under **Deploy → Pages**.

The Vite base is relative, so the site works on either a GitLab user domain or a project subpath.
