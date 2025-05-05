import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // You could store to a DB, send an email, etc.
  console.log("New contact submission:", { name, email, message });

  return NextResponse.json({ success: true, message: "Message received!" }, { status: 200 });
}