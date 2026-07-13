CREATE TABLE IF NOT EXISTS public_assets (
  path TEXT PRIMARY KEY,
  object_id TEXT NOT NULL,
  content_type TEXT NOT NULL DEFAULT 'application/octet-stream',
  FOREIGN KEY (object_id) REFERENCES objects(id)
);

CREATE INDEX IF NOT EXISTS idx_public_assets_object ON public_assets(object_id);
