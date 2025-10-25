import { API_URL } from "../constants/api_url";

export async function login(email, password) {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.error || "failed login");
  }
  const data = await res.json();

  localStorage.setItem("token", data.token);
  return data.user;
}
