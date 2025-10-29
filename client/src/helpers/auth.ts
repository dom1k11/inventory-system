export function isLoggedIn() {
  const token = localStorage.getItem("token");
  return Boolean(token);
}

export function isOwner(inventoryOwnerId) {
  const token = localStorage.getItem("token");
  if (!token) return false;

  const payload = JSON.parse(atob(token.split(".")[1]));
  const userId = payload.id;
  const role = payload.role;
  if (role === "admin") return true;

  return userId === inventoryOwnerId;
}

export function getUser() {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload;
  } catch {
    return null;
  }
}
