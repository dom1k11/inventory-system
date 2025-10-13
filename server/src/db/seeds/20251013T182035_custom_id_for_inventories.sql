-- SQL seed
TRUNCATE TABLE inventory_custom_fields RESTART IDENTITY CASCADE;

--  Inventory #1 → fixed + random_9 + sequence
INSERT INTO
    inventory_custom_fields (inventory_id, field_type, value, position)
VALUES
    (1, 'fixed', 'PR-', 1),
    (1, 'random_9', NULL, 2),
    (1, 'sequence', 'D3', 3);

--  Inventory #2 → random_9 + sequence
INSERT INTO
    inventory_custom_fields (inventory_id, field_type, value, position)
VALUES
    (2, 'random_9', NULL, 1),
    (2, 'sequence', 'D4', 2);

--  Inventory #3 → fixed + date + sequence
INSERT INTO
    inventory_custom_fields (inventory_id, field_type, value, position)
VALUES
    (3, 'fixed', 'BK-', 1),
    (3, 'date', 'YYYY-MM-DD', 2),
    (3, 'sequence', 'D2', 3);