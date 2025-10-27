import { getAllUsers } from "../queries/getAllUsers";
import { controller } from "../utils/controllerWrapper";
export const handleGetAllUsers = controller(async (req, res) => {
  const users = await getAllUsers();
  res.json({ users });
});