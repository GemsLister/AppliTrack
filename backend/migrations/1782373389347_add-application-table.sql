-- Up Migration
CREATE TABLE
    application (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
        company VARCHAR(255),
        position VARCHAR(255),
        date TIMESTAMPTZ,
        created_at TIMESTAMPTZ DEFAULT NOW ()
    );

-- Down Migration
DROP TABLE IF EXISTS application;