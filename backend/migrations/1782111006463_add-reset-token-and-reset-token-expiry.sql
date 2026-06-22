-- Up Migration
ALTER TABLE users
ADD COLUMN reset_token VARCHAR(255),
ADD COLUMN reset_token_expiry TIMESTAMPTZ;

-- Down Migration
ALTER TABLE users
DROP COLUMN IF EXISTS reset_token,
DROP COLUMN IF EXISTS reset_token_expiry;