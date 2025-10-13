-- SQL migration
CREATE TABLE IF NOT EXISTS inventory_custom_fields (
  id SERIAL PRIMARY KEY,
  inventory_id INTEGER NOT NULL REFERENCES inventories(id) ON DELETE CASCADE,
  field_type VARCHAR(50) NOT NULL, -- 'fixed', 'random_6', 'random_9', 'sequence', 'date', etc.
  value VARCHAR(50),               -- 'PR-', 'D3', 'YYYY'
  position INTEGER NOT NULL
);
