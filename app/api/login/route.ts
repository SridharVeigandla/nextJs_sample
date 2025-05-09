import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  if (!username || !password) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // You could store to a DB, send an email, etc.
  console.log("New contact submission:", { username, password});

  return NextResponse.json({ success: true, message: "Message received!" }, { status: 200 });
}