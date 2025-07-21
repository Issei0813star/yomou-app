import * as userRepository from "../repository/userRepository";

export async function getByEmail(email: string) {
  return await userRepository.getByEmail(email);
}

export async function createUser(
  email: string,
  username: string,
  password: string
) {
  await userRepository.create(email, username, password);
}
