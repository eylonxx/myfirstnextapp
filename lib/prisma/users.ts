import prisma from '.';

export async function getUsers() {
  try {
    const users = await prisma.user.findMany();
    console.log(users);
    return users;
  } catch (error: any) {
    console.log(error);
    return error;
  }
}

export async function createUser(user: any) {
  try {
    const userFromDB = await prisma.user.create({ data: user });
    return { user: userFromDB };
  } catch (error: any) {
    return { error };
  }
}

export async function getUserById(id: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    return { user };
  } catch (error: any) {
    return { error };
  }
}
