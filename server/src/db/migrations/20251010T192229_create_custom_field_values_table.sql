-- SQL migration
CREATE TABLE IF NOT EXISTS custom_field_values (
  id SERIAL PRIMARY KEY,
  item_id INTEGER NOT NULL REFERENCES items(id) ON DELETE CASCADE,
  field_template_id INTEGER NOT NULL REFERENCES field_templates(id) ON DELETE CASCADE,
  value TEXT,
  created_at TIMESTAMP DEFAULT now(),
  UNIQUE (item_id, field_template_id)
);
