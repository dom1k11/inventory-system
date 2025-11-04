-- 💻 ADDITIONAL ITEMS (expanded)

-- 🖨️ Printers (14 items total)
INSERT INTO items (inventory_id, created_by, custom_id, sequence_number) VALUES
  (1, 1, 'PR-0002', 2),
  (1, 1, 'PR-0003', 3),
  (1, 1, 'PR-0004', 4),
  (1, 1, 'PR-0005', 5),
  (1, 1, 'PR-0006', 6),
  (1, 1, 'PR-0007', 7),
  (1, 1, 'PR-0008', 8),
  (1, 1, 'PR-0009', 9),
  (1, 1, 'PR-0010', 10),
  (1, 1, 'PR-0011', 11),
  (1, 1, 'PR-0012', 12),
  (1, 1, 'PR-0013', 13),
  (1, 1, 'PR-0014', 14),
  (1, 1, 'PR-0015', 15);

-- 💻 Laptops (3 items total)
INSERT INTO items (inventory_id, created_by, custom_id, sequence_number) VALUES
  (2, 1, 'LP-0002', 2),
  (2, 1, 'LP-0003', 3),
  (2, 1, 'LP-0004', 4);

-- 📚 Books (3 items total)
INSERT INTO items (inventory_id, created_by, custom_id, sequence_number) VALUES
  (3, 2, 'BK-2024-0002', 2),
  (3, 2, 'BK-2024-0003', 3),
  (3, 2, 'BK-2024-0004', 4);

-- 📷 Cameras (3 items total)
INSERT INTO items (inventory_id, created_by, custom_id, sequence_number) VALUES
  (4, 2, 'CM-0002', 2),
  (4, 2, 'CM-0003', 3),
  (4, 2, 'CM-0004', 4);

-- ⚗️ Chemistry Lab (3 items total)
INSERT INTO items (inventory_id, created_by, custom_id, sequence_number) VALUES
  (5, 3, 'CH-0002', 2),
  (5, 3, 'CH-0003', 3),
  (5, 3, 'CH-0004', 4);

-- 🪑 Furniture (3 items total)
INSERT INTO items (inventory_id, created_by, custom_id, sequence_number) VALUES
  (6, 3, 'FR-0002', 2),
  (6, 3, 'FR-0003', 3),
  (6, 3, 'FR-0004', 4);

-- 💾 Software Licenses (3 items total)
INSERT INTO items (inventory_id, created_by, custom_id, sequence_number) VALUES
  (7, 1, 'SW-0002', 2),
  (7, 1, 'SW-0003', 3),
  (7, 1, 'SW-0004', 4);


-- 🧾 CUSTOM FIELD VALUES

-- 🖨️ Printers
INSERT INTO custom_field_values (item_id, field_template_id, value) VALUES
  (8, 1, 'Canon Pixma G3400'), (8, 2, '9500'), (8, 3, 'false'),
  (9, 1, 'Epson L3250'), (9, 2, '3100'), (9, 3, 'true'),
  (10, 1, 'Brother HL-L2350DW'), (10, 2, '7800'), (10, 3, 'true'),
  (11, 1, 'Xerox B210'), (11, 2, '5600'), (11, 3, 'false'),
  (12, 1, 'HP OfficeJet Pro 9020'), (12, 2, '11200'), (12, 3, 'true'),
  (13, 1, 'Samsung Xpress M2020W'), (13, 2, '4800'), (13, 3, 'false'),
  (14, 1, 'Kyocera Ecosys P2040dn'), (14, 2, '9000'), (14, 3, 'true'),
  (15, 1, 'Ricoh SP 220'), (15, 2, '4300'), (15, 3, 'false'),
  (16, 1, 'Lexmark MB2236adw'), (16, 2, '7200'), (16, 3, 'true'),
  (17, 1, 'OKI B432dn'), (17, 2, '13000'), (17, 3, 'true'),
  (18, 1, 'HP LaserJet P1102'), (18, 2, '15000'), (18, 3, 'false'),
  (19, 1, 'Canon i-SENSYS MF643Cdw'), (19, 2, '8200'), (19, 3, 'true'),
  (20, 1, 'Epson EcoTank L3150'), (20, 2, '6700'), (20, 3, 'true'),
  (21, 1, 'Brother DCP-L2530DW'), (21, 2, '8900'), (21, 3, 'false');

-- 💻 Laptops
INSERT INTO custom_field_values (item_id, field_template_id, value) VALUES
  (22, 4, 'HP Pavilion 15'), (22, 5, 'Ryzen 5 5625U'), (22, 6, '8 GB'), (22, 7, 'false'),
  (23, 4, 'MacBook Air M1'), (23, 5, 'Apple M1'), (23, 6, '16 GB'), (23, 7, 'true'),
  (24, 4, 'Lenovo ThinkPad E14'), (24, 5, 'i7-1165G7'), (24, 6, '16 GB'), (24, 7, 'false');

-- 📚 Books
INSERT INTO custom_field_values (item_id, field_template_id, value) VALUES
  (25, 8, 'The Pragmatic Programmer'), (25, 9, 'Andrew Hunt'), (25, 10, '1999'), (25, 11, 'false'),
  (26, 8, 'Design Patterns'), (26, 9, 'Erich Gamma'), (26, 10, '1994'), (26, 11, 'true'),
  (27, 8, 'Refactoring'), (27, 9, 'Martin Fowler'), (27, 10, '1999'), (27, 11, 'true');

-- 📷 Cameras
INSERT INTO custom_field_values (item_id, field_template_id, value) VALUES
  (28, 12, 'Canon EOS R6'), (28, 13, '20.1'), (28, 14, 'false'),
  (29, 12, 'Nikon D850'), (29, 13, '45.7'), (29, 14, 'true'),
  (30, 12, 'Fujifilm X-T30'), (30, 13, '26.1'), (30, 14, 'false');

-- ⚗️ Chemistry Lab
INSERT INTO custom_field_values (item_id, field_template_id, value) VALUES
  (31, 15, 'Sodium Chloride'), (31, 16, 'NaCl'), (31, 17, '300'), (31, 18, 'false'),
  (32, 15, 'Acetone'), (32, 16, 'C3H6O'), (32, 17, '200'), (32, 18, 'true'),
  (33, 15, 'Sulfuric Acid'), (33, 16, 'H2SO4'), (33, 17, '100'), (33, 18, 'true');

-- 🪑 Furniture
INSERT INTO custom_field_values (item_id, field_template_id, value) VALUES
  (34, 19, 'Table'), (34, 20, 'Metal'), (34, 21, '10'), (34, 22, 'true'),
  (35, 19, 'Sofa'), (35, 20, 'Leather'), (35, 21, '5'), (35, 22, 'false'),
  (36, 19, 'Cabinet'), (36, 20, 'Wood'), (36, 21, '7'), (36, 22, 'true');

-- 💾 Software Licenses
INSERT INTO custom_field_values (item_id, field_template_id, value) VALUES
  (37, 23, 'Microsoft Office 365'), (37, 24, 'OFF-1234-ABCD'), (37, 25, '2027-03-15'),
  (38, 23, 'Figma Pro'), (38, 24, 'FIG-5678-WXYZ'), (38, 25, '2026-11-22'),
  (39, 23, 'JetBrains Toolbox'), (39, 24, 'JET-9012-QWER'), (39, 25, '2028-04-05');
