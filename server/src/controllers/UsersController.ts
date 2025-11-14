import { getAllUsers, getUserById } from '../queries/users/getAllUsers';
import { controller } from '../utils/controllerWrapper';
export const handleGetAllUsers = controller(async (req, res) => {
  const users = await getAllUsers();
  res.json(users);
});

export const handleGetUserById = controller(async (req, res) => {
const userId = (req as any).user.id;
  const users = await getUserById(userId);
  res.json(users);
});
