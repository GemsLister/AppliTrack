-- Up Migration
ALTER TABLE application
ADD COLUMN user_id UUID REFERENCES users (id) ON DELETE CASCADE;

-- Down Migration
ALTER TABLE application
DROP COLUMN IF EXISTS uiser_id;