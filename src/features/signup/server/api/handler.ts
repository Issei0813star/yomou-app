import { NextRequest } from "next/server";
import { doSignup } from "../usecase/signup";

export async function signup(req: NextRequest) {
  const { email, username, password } = await req.json();
  await doSignup(email, username, password);
}
