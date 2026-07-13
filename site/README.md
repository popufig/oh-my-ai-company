# Oh My AI Company Cloud Site

This directory publishes a reviewed projection of the local Memex vault as a read-only Cloudflare application.

Production URL: <https://companies.yan5xu.ai>

## Architecture

- The vault remains the source of truth: `.memex/memex.db`, `bodies/`, and `assets/`.
- `publish.manifest.json` is the default-deny publication contract: reviewed companies, field allowlists, evidence policy, and asset allowlist.
- `scripts/export-vault.mjs` translates only manifest-approved objects, strong field links, sanitized company bodies, and source metadata into D1 SQL.
- D1 serves structured objects, Markdown bodies, links, and public search data.
- R2 serves vault images and other public media.
- A Cloudflare Worker exposes a narrow read-only API.
- React, TanStack Query/Table, Tailwind, shadcn-style primitives, and React Flow render the public UI.

The public Worker does not expose Memex's local `/api/run`, editing, uploads, arbitrary SQL, internal notes/methods, weak body-mention edges, or unreviewed assets.

## Publication Boundary

The site is a curated company atlas, not a generic browser for the entire vault.

- Companies are default-deny and must be listed in `publish.manifest.json`.
- Related people, investors, investments, traffic snapshots, sources, concepts, and touchpoints are selected only through approved `field` relations.
- Sources must be `full` or `partial`, evidence level `S1`-`S3`, and processing status `summarized` or `linked`.
- Source pages publish metadata and evidence boundaries, not copied source bodies.
- `note`, `method`, tests, placeholders, body-mention edges, internal fields, and sensitive paths are rejected.
- R2 serves only asset paths present in both the explicit allowlist and the generated D1 `public_assets` table.

## Cloudflare Resources

```text
Worker:  oh-my-ai-company
D1:      oh-my-ai-company-prod
R2:      oh-my-ai-company-assets
Domain:  companies.yan5xu.ai
```

The resource IDs and bindings are committed in `wrangler.jsonc`. Authentication remains local to Wrangler and is never committed.

## Requirements

- Node.js and npm
- `sqlite3` CLI
- Wrangler authenticated to the Cloudflare account that owns `yan5xu.ai`

Install dependencies:

```bash
cd site
npm install
```

## Local Development

Run the Worker against the remote read-only data in one terminal:

```bash
npm run worker:dev
```

Run Vite in another terminal:

```bash
npm run dev
```

Open <http://127.0.0.1:5173>.

## Publish Updated Vault Data

Before publishing, refresh and validate the source vault:

```bash
mmx -C .. refresh
mmx -C .. issues
```

Validate the publication boundary:

```bash
npm run publication:check
```

Export, validate, and replace the public D1 projection:

```bash
npm run data:sync
```

Upload allowlisted assets and remove non-public local assets from R2:

```bash
npm run assets:sync
```

Build and deploy the Worker and frontend:

```bash
npm run deploy
```

Run the complete pipeline:

```bash
npm run publish
```

`data:sync` intentionally replaces the filtered public projection. The local Memex vault remains authoritative. Update `publish.manifest.json` only after reviewing a company and its public assets.

## Read-only API

```text
GET /api/health
GET /api/meta
GET /api/types
GET /api/objects?type=company&q=browser&limit=50&offset=0
GET /api/objects/:id
GET /api/graph?center=company.browserbase&depth=1
GET /media/assets/:path
```

Browser automation is available as `window.ohMyAI`:

```js
window.ohMyAI.state()
window.ohMyAI.selectType("investor")
window.ohMyAI.search("browser")
window.ohMyAI.openObject("company.browserbase")
window.ohMyAI.openGraph("company.browserbase")
window.ohMyAI.setGraphTypeVisible("source.item", true)
window.ohMyAI.setLanguage("en")
```
