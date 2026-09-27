---
name: update-portfolio
description: Update this workspace's portfolio in MongoDB or its frontend/backend code, then verify the published result in a controlled browser.
---

# Update Portfolio

The repository is `portfolio/` under this workspace. The frontend is Docusaurus in `portfolio/client` and deploys to GitHub Pages from `main` through `.github/workflows/deploy.yml`. The FastAPI backend is in `portfolio/server` and deploys to Vercel. Its MongoDB connection is in `portfolio/server/.env`. The published site is `https://macorisd.github.io/portfolio/`.

## Route the request

- First locate the source of the requested value or behavior. A text change may be a MongoDB field or a hardcoded frontend string.
- **Data:** For MongoDB-backed content, edit MongoDB only. Do not alter source code to simulate a data change. Read [references/mongo-data.md](references/mongo-data.md).
- **Code:** For behavior, layout, styling, API, or hardcoded content, edit the relevant repository files. Do not alter MongoDB unless the request also needs a data change. If the user explicitly limits the task to MongoDB but the target is hardcoded, explain that constraint before changing code. Read [references/code-deploy.md](references/code-deploy.md).
- **Both:** When the requested result needs data and code, follow both routes. Apply the data-field consultation before any MongoDB write.

## Data consultation before every MongoDB write

Inspect the actual target document, the fields of that document type (including nested objects), representative documents in its collection, and the relevant API/model/frontend use. Do this afresh; do not rely on a fixed schema list. Show the user every editable field, its current value or absence, the proposed value if supplied, and the format used by comparable documents. Exclude only system identifiers and metadata that should not be user-authored. Ask what they want in **each** field, accepting natural-language answers and `keep unchanged` for fields they do not want to edit. Bundle related fields in one clear question when practical. If the original request already supplies a value, prefill it in the proposed changes but still present the complete field inventory and wait for the user's answer before writing.

Use `mongosh` for all MongoDB reads and writes. Never use PyMongo, Compass, an HTTP write endpoint, or another client to change portfolio data. Match the target by `_id` and existing values, change only approved fields, check the matched/modified count, then read the record back through `mongosh`. Keep the database URI out of command arguments, logs, and responses. See the linked data reference for the connection pattern.

## Published verification after every change

Control the browser to visit `https://macorisd.github.io/portfolio/` after each MongoDB mutation or deployed code change, then open the affected route. Reload the site from the root so the frontend's in-memory API cache cannot conceal the update. Wait for content to load, verify the exact requested value or visual behavior and its surrounding context, and capture a screenshot. A database read, API response, local build, or search result does not replace this browser check. If browser control is unavailable, report the concrete blocker and leave the result explicitly unverified.

For code intended to affect the live site, build/test locally, inspect the diff, then commit and push only the task's files to `main` so deployment can occur; keep unrelated working-tree changes out of the commit. Monitor the relevant deployment and verify the live site. For backend changes, visit `https://vercel.com/macoris-projects/portfolio` to check deployment progress. If that page is inaccessible, check the live result every three minutes for up to 30 minutes, communicating progress at least once per minute. Frontend changes deploy through the GitHub Pages workflow; wait for the published build before judging the live result. Details are in the code reference.

If live verification suggests a code defect, inspect the relevant portfolio code and form concrete repair options. Present a concise diagnosis and an **interactive chat poll** with viable solutions, tradeoffs, and an explicit `No hacer cambios` option. Prefer `request_user_input_async` so the conversation remains open; continue useful independent checks while waiting. Do not apply a repair until the user chooses an option. If the poll tool is unavailable, ask the same choice in chat and wait. After an approved repair, deploy and verify again.

Report precise before-and-after values, the edited MongoDB fields or code files, and what was visibly confirmed at the published URL. State deployment or verification limits plainly; never claim success from a pending deploy.

## Skill maintenance

The live skill is `.agents/skills/update-portfolio`. Its versioned mirror is `portfolio/.agents/skills/update-portfolio`. Edit the live skill, then run `portfolio/scripts/sync-update-portfolio-skill.ps1` before any commit that should include skill changes. Routine MongoDB content edits need no repository commit. Do not create a commit merely because this skill was invoked. The repository's `main` tracks `origin/main`.
