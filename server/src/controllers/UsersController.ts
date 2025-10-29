import { getAllUsers } from '../queries/users/getAllUsers';
import { controller } from '../utils/controllerWrapper';
export const handleGetAllUsers = controller(async (req, res) => {
  const users = await getAllUsers();
  res.json(users);
});

