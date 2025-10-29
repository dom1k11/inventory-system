import pool from '../../db';

export async function getInventories() {
  const query = `
    SELECT id, title, description, category, created_by, is_public, created_at, updated_at 
    FROM inventories
    ORDER BY created_at DESC
  `;
  return pool.query(query);
}
//TODO Make a limit (OFFSET) to not to pull all the data

export async function getInventoryItems(id: number) {
  const query = `
    SELECT 
  i.id AS item_id,
  i.inventory_id,
  i.custom_id,
  i.created_by,
  u.name AS created_by_name,
  i.created_at,
  jsonb_object_agg(
    COALESCE(ft.title, CONCAT('missing_', ft.id::text)),
    cfv.value ORDER BY ft.position ASC
  ) AS fields
FROM items AS i
LEFT JOIN users AS u
  ON u.id = i.created_by
LEFT JOIN custom_field_values AS cfv 
  ON cfv.item_id = i.id
LEFT JOIN field_templates AS ft 
  ON ft.id = cfv.field_template_id
WHERE i.inventory_id = $1
GROUP BY 
  i.id, i.inventory_id, i.custom_id, 
  i.created_by, i.created_at, u.name
ORDER BY i.id;

  `;
  return pool.query(query, [id]);
}

//TODO Make a limit (OFFSET) to not to pull all the data
