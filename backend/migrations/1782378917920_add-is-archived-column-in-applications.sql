-- Up Migration
ALTER TABLE applications
ADD COLUMN is_archived BOOLEAN DEFAULT FALSE;

-- Down Migration
ALTER TABLE applications
DROP COLUMN IF EXISTS is_archived;