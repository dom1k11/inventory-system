-- Reset all tables
TRUNCATE TABLE 
  custom_field_values,
  items,
  field_templates,
  inventory_access,
  inventories,
  users 
RESTART IDENTITY CASCADE;

-- 👤 USERS
INSERT INTO users (name, email, password_hash, role)
VALUES ('IT Teacher', 'it@school.local', 'hash_it', 'user');

-- 📦 INVENTORY: Printers
INSERT INTO inventories (title, description, category, created_by)
VALUES ('Printers', 'List of school printers', 'Equipment', 1);

-- 🧩 FIELD TEMPLATES
INSERT INTO field_templates (inventory_id, field_type, title, description, is_visible, position)
VALUES
  (1, 'text_single', 'Brand', 'Printer brand name', true, 1),
  (1, 'text_multi', 'Maintenance Notes', 'Service and maintenance info', true, 2),
  (1, 'number', 'Page Count', 'Total printed pages', true, 3),
  (1, 'document', 'Manual Link', 'Link to printer manual (PDF)', true, 4),
  (1, 'boolean', 'Under Warranty', 'Is the printer under warranty?', true, 5);

-- 💻 ITEMS (только один)
INSERT INTO items (inventory_id, created_by, custom_id, sequence_number)
VALUES (1, 1, 'PR-0001', 1);

-- 🧾 CUSTOM FIELD VALUES 
INSERT INTO custom_field_values (item_id, field_template_id, value)
VALUES
  (1, 1, 'HP LaserJet 1200'),
  (1, 2, 'Serviced in 2024, working fine'),
  (1, 3, '13244'),
  (1, 4, 'https://example.com/manual/hp1200.pdf'),
  (1, 5, 'true');
