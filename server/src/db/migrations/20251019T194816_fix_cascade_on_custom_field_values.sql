-- SQL migration
ALTER TABLE custom_field_values
DROP CONSTRAINT IF EXISTS custom_field_values_item_id_fkey;

ALTER TABLE custom_field_values
ADD CONSTRAINT custom_field_values_item_id_fkey
FOREIGN KEY (item_id) REFERENCES items(id) ON DELETE CASCADE;
