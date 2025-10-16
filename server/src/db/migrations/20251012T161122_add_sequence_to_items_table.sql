-- SQL migration
ALTER TABLE items
ADD COLUMN IF NOT EXISTS sequence_number INTEGER;