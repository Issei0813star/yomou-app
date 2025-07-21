import { prisma } from "@/lib/prismaClient";

export async function getByEmail(email: string) {
  try {
    return await prisma.user.findUnique({
      where: { email },
    });
  } catch (error) {
    // TODO エラーハンドリング
    console.error(error);
  }
}

export async function create(
  email: string,
  username: string,
  password: string
) {
  try {
    await prisma.user.create({
      data: {
        email,
        username,
        password,
        isVerified: true,
      },
    });
  } catch (error) {
    console.error(error);
  }
}
