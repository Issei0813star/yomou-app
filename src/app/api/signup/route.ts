import { signup } from "@/features/signup/server/api/handler";
import { HttpError } from "@/features/signup/server/usecase/signup";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await signup(req);
    return NextResponse.json(
      { message: "Sign up successful" },
      { status: 201 }
    );
  } catch (error) {
    console.error("aaa", error);

    const status = error instanceof HttpError ? error.statusCode : 500;

    return NextResponse.json({ error: (error as Error).message }, { status });
  }
}
