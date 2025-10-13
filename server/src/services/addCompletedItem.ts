import { addItem } from './addEmptyItem';
import { initItemFields } from './initItemFields';

export async function addCompletedItem() {
  const newItem = await addItem(1, 1);
  await initItemFields(newItem.id, newItem.inventory_id);
  console.log(newItem)
  return newItem
}

addCompletedItem()
