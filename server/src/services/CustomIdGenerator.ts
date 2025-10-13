import pool from '../db';
import { randomUUID } from 'crypto';

async function getSequenceNumber(inventoryId: number) {
  const query = `
    SELECT COALESCE(MAX(sequence_number), 0) + 1 AS next_seq
    FROM items
    WHERE inventory_id = $1;
  `;
  const { rows } = await pool.query(query, [inventoryId]);
  return rows[0].next_seq;
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function getDate() {
  const now = new Date();
  return now.toISOString().split('T')[0]; // YYYY-MM-DD
}

export async function generateCustomId(inventoryId: number) {
  const formatQuery = `
    SELECT field_type, value
    FROM inventory_custom_fields
    WHERE inventory_id = $1
    ORDER BY position;
  `;
  const { rows: fields } = await pool.query(formatQuery, [inventoryId]);

  if (!fields.length) {
    throw new Error(`No custom ID format defined for inventory ${inventoryId}`);
  }

  const idParts: string[] = [];

  for (const f of fields) {
    switch (f.field_type) {
      case 'fixed':
        idParts.push(f.value || '');
        break;

      case 'random_6':
        idParts.push(getRandomInt(1_000_000).toString().padStart(6, '0'));
        break;

      case 'random_9':
        idParts.push(getRandomInt(1_000_000_000).toString().padStart(9, '0'));
        break;

      case 'guid':
        idParts.push(randomUUID());
        break;

      case 'date':
        idParts.push(getDate());
        break;

      case 'sequence':
        const seq = await getSequenceNumber(inventoryId);
        const digits = parseInt(f.value?.replace('D', '') || '3', 10);
        idParts.push(seq.toString().padStart(digits, '0'));
        break;

      default:
        console.warn(`Unknown field type: ${f.field_type}`);
    }
  }

  const custom_id = idParts.join('-');
  console.log('Generated Custom ID:', custom_id);
  return custom_id;
}

generateCustomId(3)
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
