-- Up Migration
ALTER TABLE users
ADD COLUMN username VARCHAR(255) NOT NULL;

-- Down Migration
ALTER TABLE users
DROP COLUMN IF EXISTS username;