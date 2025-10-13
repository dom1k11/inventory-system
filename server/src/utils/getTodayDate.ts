export function getDate() {
  const now = new Date();
  return now.toISOString().split('T')[0];
}
