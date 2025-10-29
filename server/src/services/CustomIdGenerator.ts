import { randomUUID } from 'crypto';
import { getDate } from '../utils/getTodayDate';
import { getCustomIdFormat } from '../queries/inventories/customId/getCustomIdFormat';

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export async function generateCustomId(
  inventoryId: number,
  sequenceNumber: number,
) {
  const fields = await getCustomIdFormat(inventoryId);

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
        const digits = parseInt(f.value?.replace('D', '') || '3', 10);
        idParts.push(sequenceNumber.toString().padStart(digits, '0'));
        break;
      case '20_bit_random': {
        const buf = new Uint32Array(1);
        crypto.getRandomValues(buf);
        idParts.push((buf[0] & 0xfffff).toString());
        break;
      }

      case '32_bit_random': {
        const buf = new Uint32Array(1);
        crypto.getRandomValues(buf);
        idParts.push(buf[0].toString());
        break;
      }
      default:
        console.warn(`Unknown field type: ${f.field_type}`);
    }
  }

  return idParts.join('-');
}
