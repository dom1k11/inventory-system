import pool from '../../db';
import prisma from '../../prisma';

export async function getInventories(offset, limit) {
  return prisma.inventories.findMany({
    skip: offset,
    take: limit,
    orderBy: {
      created_at: 'desc',
    },
    include: {
      users: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });
}

export async function getInventoryItems(id: number, offset, limit) {
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
    ORDER BY i.id DESC
    LIMIT $2 OFFSET $3;
  `;

  return pool.query(query, [id, limit, offset]);
}

//TODO Rewrite in ORM Prisma
