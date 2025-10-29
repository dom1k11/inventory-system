import prisma from '../../prisma';

export async function registerUser({ name, email, password_hash }) {
  return prisma.users.create({
    data: {
      name,
      email,
      password_hash,
      role: 'user',
      is_blocked: false,
    },
  });
}
