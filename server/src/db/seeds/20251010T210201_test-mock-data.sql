-- 🧹 RESET ALL TABLES
TRUNCATE TABLE custom_field_values,
items,
field_templates,
inventory_access,
inventory_custom_fields,
inventories,
users RESTART IDENTITY CASCADE;

-- 👤 USERS
INSERT INTO
  users (name, email, password_hash, role)
VALUES
  (
    'Admin',
    'admin@gmail.com',
    '$2b$10$DLCspxtuCvWZKJ36KecpJeKJHFu0JBbOtKB2KlpofiK/EmnxkY5v6',
    'admin'
  ),
  (
    'John Doe',
    'john@example.com',
    '$2b$10$DLCspxtuCvWZKJ36KecpJeKJHFu0JBbOtKB2KlpofiK/EmnxkY5v6',
    'user'
  ),
  (
    'Jane Smith',
    'jane@example.com',
    '$2b$10$DLCspxtuCvWZKJ36KecpJeKJHFu0JBbOtKB2KlpofiK/EmnxkY5v6',
    'user'
  );

-- 📦 INVENTORIES 
INSERT INTO
  inventories (title, description, category, created_by)
VALUES
  (
    'Printers',
    'List of office printers',
    'Equipment',
    1
  ),
  (
    'Laptops',
    'Employee laptops and configs',
    'Equipment',
    1
  ),
  ('Books', 'Library catalog', 'Library', 2),
  ('Cameras', 'Photography equipment', 'Media', 2),
  (
    'Chemistry Lab',
    'Lab reagents and tools',
    'Science',
    3
  ),
  (
    'Furniture',
    'Office furniture tracking',
    'Assets',
    3
  ),
  (
    'Software Licenses',
    'Company software keys',
    'Digital',
    1
  );

-- 🧩 FIELD TEMPLATES
INSERT INTO
  field_templates (
    inventory_id,
    field_type,
    title,
    description,
    is_visible,
    position
  )
VALUES
  -- Printers
  (
    1,
    'text_single',
    'Brand',
    'Printer brand name',
    true,
    1
  ),
  (
    1,
    'number',
    'Page Count',
    'Total printed pages',
    true,
    2
  ),
  (
    1,
    'boolean',
    'Under Warranty',
    'Is still under warranty?',
    true,
    3
  ),
  -- Laptops
  (
    2,
    'text_single',
    'Model',
    'Laptop model name',
    true,
    1
  ),
  (2, 'text_single', 'CPU', 'Processor', true, 2),
  (2, 'text_single', 'RAM', 'Memory in GB', true, 3),
  (
    2,
    'boolean',
    'Assigned',
    'Assigned to employee?',
    true,
    4
  ),
  -- Books
  (3, 'text_single', 'Title', 'Book title', true, 1),
  (
    3,
    'text_single',
    'Author',
    'Book author',
    true,
    2
  ),
  (3, 'number', 'Year', 'Publication year', true, 3),
  (
    3,
    'boolean',
    'Available',
    'Available in library?',
    true,
    4
  ),
  -- Cameras
  (
    4,
    'text_single',
    'Brand',
    'Camera brand',
    true,
    1
  ),
  (
    4,
    'text_single',
    'Resolution',
    'Megapixels',
    true,
    2
  ),
  (
    4,
    'boolean',
    'Checked Out',
    'Currently in use?',
    true,
    3
  ),
  -- Chemistry Lab
  (
    5,
    'text_single',
    'Chemical Name',
    'Name of chemical',
    true,
    1
  ),
  (
    5,
    'text_single',
    'Formula',
    'Chemical formula',
    true,
    2
  ),
  (
    5,
    'number',
    'Quantity (ml)',
    'Remaining volume',
    true,
    3
  ),
  (
    5,
    'boolean',
    'Hazardous',
    'Requires special handling?',
    true,
    4
  ),
  -- Furniture
  (
    6,
    'text_single',
    'Type',
    'Furniture type',
    true,
    1
  ),
  (
    6,
    'text_single',
    'Material',
    'Main material',
    true,
    2
  ),
  (
    6,
    'number',
    'Quantity',
    'How many units',
    true,
    3
  ),
  (
    6,
    'boolean',
    'In Use',
    'Is currently used?',
    true,
    4
  ),
  -- Software Licenses
  (
    7,
    'text_single',
    'Product',
    'Software name',
    true,
    1
  ),
  (
    7,
    'text_single',
    'License Key',
    'Unique license key',
    true,
    2
  ),
  (
    7,
    'date',
    'Expiration',
    'License expiration date',
    true,
    3
  );

-- 💻 ITEMS
INSERT INTO
  items (
    inventory_id,
    created_by,
    custom_id,
    sequence_number
  )
VALUES
  (1, 1, 'PR-0001', 1),
  (2, 1, 'LP-0001', 1),
  (3, 2, 'BK-2024-0001', 1),
  (4, 2, 'CM-0001', 1),
  (5, 3, 'CH-0001', 1),
  (6, 3, 'FR-0001', 1),
  (7, 1, 'SW-0001', 1);

-- 🧾 CUSTOM FIELD VALUES
INSERT INTO
  custom_field_values (item_id, field_template_id, value)
VALUES
  (1, 1, 'HP LaserJet 1200'),
  (1, 2, '13500'),
  (1, 3, 'true'),
  (2, 4, 'Dell Inspiron 14'),
  (2, 5, 'i5-1235U'),
  (2, 6, '16 GB'),
  (2, 7, 'false'),
  (3, 8, 'Clean Code'),
  (3, 9, 'Robert Martin'),
  (3, 10, '2008'),
  (3, 11, 'true'),
  (4, 12, 'Sony A7 III'),
  (4, 13, '24.2'),
  (4, 14, 'true'),
  (5, 15, 'Ethanol'),
  (5, 16, 'C2H5OH'),
  (5, 17, '500'),
  (5, 18, 'true'),
  (6, 19, 'Chair'),
  (6, 20, 'Wood'),
  (6, 21, '25'),
  (6, 22, 'true'),
  (7, 23, 'Adobe Photoshop'),
  (7, 24, 'XXXX-YYYY-ZZZZ'),
  (7, 25, '2026-01-01');

-- 🔑 INVENTORY ACCESS
INSERT INTO
  inventory_access (inventory_id, user_id, can_edit)
VALUES
  (1, 2, true),
  (2, 3, false),
  (3, 2, true),
  (4, 3, true),
  (5, 1, true),
  (6, 2, false),
  (7, 3, true);

-- 🧩 CUSTOM ID SETTINGS
TRUNCATE TABLE inventory_custom_fields RESTART IDENTITY CASCADE;

-- Inventory #1 → fixed + random_9 + sequence
INSERT INTO
  inventory_custom_fields (inventory_id, field_type, value, position)
VALUES
  (1, 'fixed', 'PR', 1),
  (1, 'random_9', NULL, 2),
  (1, 'sequence', 'D3', 3);

-- Inventory #2 → random_9 + sequence
INSERT INTO
  inventory_custom_fields (inventory_id, field_type, value, position)
VALUES
  (2, 'random_9', NULL, 1),
  (2, 'sequence', 'D4', 2);

-- Inventory #3 → fixed + date + sequence
INSERT INTO
  inventory_custom_fields (inventory_id, field_type, value, position)
VALUES
  (3, 'fixed', 'BK', 1),
  (3, 'date', 'YYYY-MM-DD', 2),
  (3, 'sequence', 'D2', 3);

-- Inventory #4 → fixed + sequence
INSERT INTO
  inventory_custom_fields (inventory_id, field_type, value, position)
VALUES
  (4, 'fixed', 'CM', 1),
  (4, 'sequence', 'D3', 2);

-- Inventory #5 → fixed + random_9
INSERT INTO
  inventory_custom_fields (inventory_id, field_type, value, position)
VALUES
  (5, 'fixed', 'CH', 1),
  (5, 'random_9', NULL, 2);

-- Inventory #6 → fixed + sequence
INSERT INTO
  inventory_custom_fields (inventory_id, field_type, value, position)
VALUES
  (6, 'fixed', 'FR', 1),
  (6, 'sequence', 'D3', 2);

-- Inventory #7 → fixed + sequence + date
INSERT INTO
  inventory_custom_fields (inventory_id, field_type, value, position)
VALUES
  (7, 'fixed', 'SW', 1),
  (7, 'sequence', 'D3', 2),
  (7, 'date', 'YYYY-MM-DD', 3);