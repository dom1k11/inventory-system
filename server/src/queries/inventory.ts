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