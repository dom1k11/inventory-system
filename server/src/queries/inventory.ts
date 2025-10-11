import pool from '../db';

export async function getInventories() {
  const query = `
    SELECT id, title, description, category, created_by, is_public, created_at, updated_at 
    FROM inventories
    ORDER BY created_at DESC
  `;
  return pool.query(query);
}
//TODO Make a limit (OFFSET) to not to pull all the data

export async function getInventoryItems(id:number) {
  const query = `
  SELECT 
  i.id AS item_id,
  i.inventory_id,
  i.custom_id,
  i.created_by,
  i.created_at,
  ft.id AS field_id,
  ft.title AS field_title,
  ft.field_type,
  cfv.value
    FROM items AS i
    LEFT JOIN custom_field_values AS cfv 
    ON cfv.item_id = i.id
    LEFT JOIN field_templates AS ft 
    ON ft.id = cfv.field_template_id
    WHERE i.inventory_id = $1
    ORDER BY i.id, ft.id;
  `;
  return pool.query(query, [id]);
}
//TODO Make a limit (OFFSET) to not to pull all the data
