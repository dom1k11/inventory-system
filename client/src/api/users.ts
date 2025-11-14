import { apiWrapper } from "../utils/apiWrapper";
export function fetchUsers() {
  return apiWrapper("/users");
}

export function fetchUserData() {
  return apiWrapper("/users/me");
}
