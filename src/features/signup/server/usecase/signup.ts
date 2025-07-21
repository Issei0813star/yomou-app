import { userClient } from "@/features/shared/userClent";

export async function doSignup(
  email: string,
  username: string,
  password: string
) {
  const exists = await userClient.getByEmail(email);
  if (exists) {
    throw new HttpError("すでに登録されているメールアドレスです。", 409);
  }
  // TODO email形式チェック, password ハッシュ

  await userClient.createUser(email, username, password);
}

// todo あとでどっかに移す
export class HttpError extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}
