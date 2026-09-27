# MongoDB data route

Use this only for portfolio data requests. The API-to-collection mapping and models live in `portfolio/server/api.py` and `portfolio/server/models.py`; inspect those and the current collection rather than assuming all documents share a shape. Existing collections include `education`, `work_experience`, `papers`, `certifications`, `awards`, `skills`, `index-data`, and `projects`. `work_experience.positions` and `index-data.news` contain nested data.

## Inspect and consult

1. Find the relevant API route and frontend rendering. Use `mongosh` to read the intended document, sibling documents, field names, nested shapes, and value conventions. Distinguish absent fields from `null`, empty strings, and arrays. Note date formats, URL formats, ordering fields, and display rules.
2. Present an editable field inventory before **every** write. For a nested target, include its parent document's editable fields and the target subdocument's fields; summarize unrelated sibling subdocuments and leave them untouched. Mark values from the user's request as proposals and all other fields as `keep unchanged` until answered. Ask the user for desired content in natural language for each field, allowing a single response such as “keep everything else.” Do not write while the answer is pending.
3. Translate the response into a minimal `$set`/`$unset`/array update. Preserve field types and formatting shown by peers. Confirm the precise intended before/after values from the record. Use a filter with `_id` and expected prior values so a concurrent change cannot silently be overwritten. Do not replace the whole document for a small edit.
4. Execute the write with `mongosh` and verify matched/modified counts and a fresh read. Clean up temporary scripts without changing other repository files. Then perform the mandatory browser check in `SKILL.md`.

## Safe `mongosh` connection

Use the installed `mongosh` executable (`Get-Command mongosh`; if it is absent from `PATH`, locate the installed binary, currently `C:\Users\macor\AppData\Local\Programs\mongosh\mongosh.exe`). `mongocli` is a different tool and does not edit collection documents. If `mongosh` is unavailable, do not switch to PyMongo for a write; resolve the CLI availability first.

Run a temporary JavaScript file through `mongosh --nodb --quiet --file <script>` from `portfolio/server`. Have the JavaScript read `.env` locally, connect, and use the Mongo shell API. This keeps `MONGODB_URI` out of the command line. Do not print the URI or commit `.env` or temporary scripts.

```javascript
const fs = require('fs');
const values = {};
for (const line of fs.readFileSync('.env', 'utf8').split(/\r?\n/)) {
  const match = line.match(/^\s*(MONGODB_URI|DATABASE_NAME)\s*=\s*(.*)\s*$/);
  if (match) values[match[1]] = match[2].replace(/^['"]|['"]$/g, '');
}
if (!values.MONGODB_URI || !values.DATABASE_NAME) throw new Error('Missing database configuration');
const database = connect(values.MONGODB_URI).getSiblingDB(values.DATABASE_NAME);
// Inspect or perform the one approved, narrowly filtered update here.
```

Do not copy an example document's factual content into another document. Use peers only to infer field types and formatting.
