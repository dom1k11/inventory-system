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

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getYear() {
  return new Date().getFullYear();
}

function getGUID() {
  return randomUUID();
}

export async function generateCustomId(inventoryId: number) {
  const fixed = 'PR-';
  const random_number = getRandomInt(999999999);
  const year = getYear();
  const guid = getGUID();
  const sequence_number = await getSequenceNumber(inventoryId);

  const custom_id = `${fixed}${random_number}_${guid}_${sequence_number}_${year}`;
  console.log('Custom id:', custom_id);
  return custom_id;
}

generateCustomId(1);
