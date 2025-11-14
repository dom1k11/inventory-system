import { API_URL } from "../constants/api_url";

export async function SFSyncUser(companyName, firstName, lastName, email, phone) {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/salesforce/sync`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },

    body: JSON.stringify({
      companyName,
      firstName,
      lastName,
      email,
      phone,
    }),
  });

  return res;
}
