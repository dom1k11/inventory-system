export function toggleSelection(selectedIds: number[], id: number): number[] {
  if (selectedIds.includes(id)) {
    return selectedIds.filter((i) => i !== id);
  } else {
    return [...selectedIds, id];
  }
}
