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
VALUES
  ('IT Teacher', 'it@school.local', 'hash_it', 'user'),
  ('History Teacher', 'history@school.local', 'hash_teacher', 'user');

-- 📦 INVENTORIES
INSERT INTO inventories (title, description, category, created_by)
VALUES
  ('Printers', 'List of school printers', 'Equipment', 1),
  ('Laptops', 'List of school laptops', 'Equipment', 1),
  ('Books', 'Library book catalog', 'Books', 2),
  ('Maps and Globes', 'Geography teaching materials', 'Geography', 2);

-- 🧩 FIELD TEMPLATES
INSERT INTO field_templates (inventory_id, field_type, title)
VALUES
  -- Printers
  (1, 'text_single', 'Brand'),
  (1, 'text_single', 'Model'),
  (1, 'number', 'Year'),

  -- Laptops
  (2, 'text_single', 'Brand'),
  (2, 'text_single', 'Model'),
  (2, 'number', 'Price'),

  -- Books
  (3, 'text_single', 'Title'),
  (3, 'text_single', 'Author'),
  (3, 'number', 'Year'),

  -- Maps and Globes
  (4, 'text_single', 'Type'),
  (4, 'text_single', 'Region'),
  (4, 'number', 'Year');

-- 💻 ITEMS
INSERT INTO items (inventory_id, created_by, custom_id)
VALUES
  -- Printers
  (1, 1, 'PR-0001'),
  (1, 1, 'PR-0002'),
  (1, 1, 'PR-0003'),

  -- Laptops
  (2, 1, 'NB-0001'),
  (2, 1, 'NB-0002'),
  (2, 1, 'NB-0003'),

  -- Books
  (3, 2, 'BK-0001'),
  (3, 2, 'BK-0002'),
  (3, 2, 'BK-0003'),

  -- Maps / Globes
  (4, 2, 'MP-0001'),
  (4, 2, 'MP-0002'),
  (4, 2, 'GL-0001');

-- 🧾 CUSTOM FIELD VALUES
INSERT INTO custom_field_values (item_id, field_template_id, value)
VALUES
  -- Printers
  (1, 1, 'HP'),        (1, 2, 'LaserJet 1200'), (1, 3, '2019'),
  (2, 1, 'Canon'),     (2, 2, 'Pixma G3411'),   (2, 3, '2021'),
  (3, 1, 'Epson'),     (3, 2, 'EcoTank L3250'), (3, 3, '2020'),

  -- Laptops
  (4, 4, 'Acer'),      (4, 5, 'Aspire 3'),      (4, 6, '550'),
  (5, 4, 'Dell'),      (5, 5, 'Latitude E7450'),(5, 6, '720'),
  (6, 4, 'Lenovo'),    (6, 5, 'ThinkPad X1'),   (6, 6, '950'),

  -- Books
  (7, 7, 'War and Peace'),    (7, 8, 'Leo Tolstoy'),      (7, 9, '1869'),
  (8, 7, '1984'),             (8, 8, 'George Orwell'),    (8, 9, '1949'),
  (9, 7, 'The Hobbit'),       (9, 8, 'J.R.R. Tolkien'),   (9, 9, '1937'),

  -- Maps and Globes
  (10, 10, 'Wall Map'),       (10, 11, 'Europe'),         (10, 12, '2018'),
  (11, 10, 'Political Map'),  (11, 11, 'World'),          (11, 12, '2020'),
  (12, 10, 'Globe'),          (12, 11, 'Earth'),          (12, 12, '2015');
