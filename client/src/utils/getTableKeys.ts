export function getTableKeys(items: any[]): string[] {
  const keys = new Set<string>();
  items.forEach((item) => {
    Object.keys(item).forEach((k) => {
      if ( k !== "created_by" && k !== "item_id" && k !== "fields" && k !== "inventory_id" && k !== "created_at") keys.add(k);
    });
    Object.keys(item.fields || {}).forEach((k) => keys.add(k));
  });
  return Array.from(keys);
}
