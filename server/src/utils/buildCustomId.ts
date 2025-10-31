import { randomUUID } from 'crypto';
import { getDate } from '../utils/getTodayDate';

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export function buildCustomId(fields, sequenceNumber) {
  const idParts: string[] = [];

  for (const f of fields) {
    const type = f.field_type || f.type;
    switch (type) {
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
      case '20_bit_random':
        idParts.push(Math.floor(Math.random() * 2 ** 20).toString());
        break;
      case '32_bit_random':
        idParts.push(Math.floor(Math.random() * 2 ** 32).toString());
        break;
      default:
        console.warn(`Unknown field type: ${type}`);
    }
  }

  return idParts.join('-');
}

//TODO: Make 20_bit and 32_bit random as HEX