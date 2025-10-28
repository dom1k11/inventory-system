import { apiWrapper } from "../utils/apiWrapper";
export function fetchUsers() {
  return apiWrapper("/users");
}