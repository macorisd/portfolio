# Code and deployment route

Use this for frontend, backend, or mixed implementation requests. Work in the `portfolio` repository. Its frontend is `client/`; FastAPI backend is `server/api.py` with models in `server/models.py`. `client/src/config/api.js` points the frontend at the deployed backend. The frontend's hooks use an in-memory cache, so a fresh navigation to the site root is important when verifying changed data.

## Edit and publish

1. Inspect `git status`, the relevant code, and the affected UI/API route. Make the smallest code change that satisfies the user. Keep data-only work in MongoDB.
2. Run the relevant local check: `npm run build` from `client/` for frontend changes (install existing lockfile dependencies with `npm ci` only if needed), and a suitable Python import or syntax check for backend changes. Inspect the complete diff and avoid unrelated files.
3. When the user wants the live portfolio changed, commit only task files and push the intended branch to `main`. Do not overwrite remote history or silently include unrelated changes. `portfolio/.github/workflows/deploy.yml` deploys the frontend on pushes to `main`. The backend is served by Vercel and may deploy later than the push.
4. For backend edits, control the browser and visit `https://vercel.com/macoris-projects/portfolio` to inspect the deployment state. If inaccessible, start live checks three minutes apart, for up to 30 minutes. Communicate during the wait at least once per minute and stop once the exact requested result is visibly present. If the time limit is reached, report the commit and pending verification; do not claim a successful deployment. For frontend edits, inspect the GitHub Pages workflow if available and similarly wait for the site to reflect the new build.
5. Navigate to `https://macorisd.github.io/portfolio/` with browser control, open the affected route, wait for hydration, and inspect the visible result. Capture a screenshot. API calls and local checks help diagnose but are not the final verification.

If the site shows a likely code error, inspect the failing path, form two or three viable repair options when possible, and present them with a `No hacer cambios` choice through an asynchronous interactive poll. Explain the tradeoff for each. Keep the turn active while waiting and do not change code until the user chooses. Apply the chosen fix, rerun checks, deploy, and verify again.
