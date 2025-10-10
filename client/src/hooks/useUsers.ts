import { useEffect, useState } from "react";
import type { User } from "../types/user";
import { fetchUsers } from "../services/userService";

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);

  async function loadUsers() {
    const data = await fetchUsers();
    setUsers([...data]); 
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return { users, loadUsers };
}
