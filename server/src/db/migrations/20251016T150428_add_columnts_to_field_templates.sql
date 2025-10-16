-- SQL migration
ALTER TABLE field_templates
ADD COLUMN description TEXT,
ADD COLUMN is_visible BOOLEAN DEFAULT false,
ADD COLUMN position INTEGER DEFAULT 0 NOT NULL;
