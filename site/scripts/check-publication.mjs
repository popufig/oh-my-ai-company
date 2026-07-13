import { execFileSync } from "node:child_process";
import { readFileSync, rmSync } from "node:fs";
import { resolve } from "node:path";

const db = resolve("generated/publication-check.db");
const manifest = JSON.parse(readFileSync(resolve("publish.manifest.json"), "utf8"));
const assets = JSON.parse(readFileSync(resolve("generated/public-assets.json"), "utf8"));
const sql = [
  readFileSync(resolve("migrations/0001_public_schema.sql"), "utf8"),
  readFileSync(resolve("migrations/0002_public_assets.sql"), "utf8"),
  readFileSync(resolve("generated/vault.sql"), "utf8")
].join("\n");

rmSync(db, { force: true });
execFileSync("sqlite3", [db], { input: sql, stdio: ["pipe", "pipe", "inherit"] });

function scalar(statement) {
  return String(execFileSync("sqlite3", [db, statement], { encoding: "utf8" })).trim();
}
function assert(condition, message) {
  if (!condition) throw new Error(`publication check failed: ${message}`);
}

assert(Number(scalar("SELECT COUNT(*) FROM objects WHERE type_id='company'")) === manifest.companies.length, "company count does not match manifest");
assert(Number(scalar("SELECT COUNT(*) FROM objects WHERE type_id IN ('note','method','batch')")) === 0, "internal types are present");
assert(Number(scalar("SELECT COUNT(*) FROM links WHERE kind <> 'field'")) === 0, "weak links are present");
assert(Number(scalar(`SELECT COUNT(*) FROM objects WHERE type_id='source.item' AND (
  json_extract(fields_json,'$.quality') NOT IN ('full','partial') OR
  json_extract(fields_json,'$.evidence_level') NOT IN ('S1','S2','S3') OR
  json_extract(fields_json,'$.processing_status') NOT IN ('summarized','linked')
)`)) === 0, "source policy is violated");
assert(Number(scalar("SELECT COUNT(*) FROM objects WHERE id IN ('company.test-co','note.browserbase-research-run-2026-07-11')")) === 0, "known internal/test objects are present");
assert(Number(scalar("SELECT COUNT(*) FROM objects WHERE body LIKE '%/Users/%' OR body LIKE '%/tmp/%' OR body LIKE '%pinix_session=%'")) === 0, "sensitive paths or session data are present");
assert(Number(scalar("SELECT COUNT(*) FROM public_assets")) === assets.length, "asset projection count does not match manifest output");
assert(assets.every((asset) => manifest.asset_allowlist.includes(asset.path)), "an asset is not explicitly allowlisted");

const objects = JSON.parse(execFileSync("sqlite3", ["-json", db, "SELECT id,body FROM objects WHERE body <> ''"], { encoding: "utf8" }) || "[]");
const publicIDs = new Set(JSON.parse(execFileSync("sqlite3", ["-json", db, "SELECT id FROM objects"], { encoding: "utf8" }) || "[]").map((row) => row.id));
for (const object of objects) {
  for (const match of object.body.matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g)) {
    assert(publicIDs.has(match[1]), `${object.id} links to non-public object ${match[1]}`);
  }
}

rmSync(db, { force: true });
console.log(`Publication check passed: ${manifest.companies.length} companies, ${assets.length} assets`);
