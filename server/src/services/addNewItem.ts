import pool from "../db";
import { generateCustomId } from "./CustomIdGenerator";

export async function addItem(
  inventoryId: number,
  createdBy: number
) {
  try {
    console.log("➡️ Adding item for inventory:", inventoryId);

    const sequenceResult = await pool.query(
      `SELECT COALESCE(MAX(sequence_number), 0) + 1 AS next_seq
       FROM items
       WHERE inventory_id = $1`,
      [inventoryId]
    );
    const sequenceNumber = sequenceResult.rows[0].next_seq;
    console.log("Sequence number:", sequenceNumber);

    const customId = await generateCustomId(inventoryId, sequenceNumber);
    console.log("Generated custom_id:", customId);

    const insertQuery = `
      INSERT INTO items (inventory_id, created_by, custom_id, sequence_number)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const { rows } = await pool.query(insertQuery, [
      inventoryId,
      createdBy,
      customId,
      sequenceNumber,
    ]);

    console.log("✅ Added item:", rows[0]);
    return rows[0];
  } catch (err: any) {
    console.error("❌ Error adding item:", err.message);
  } finally {
    process.exit(0);
  }
}

addItem(1, 1);
