import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    totalUsers: 1420,
    users: [
      { id: "1", name: "Alex Johnson", email: "alex@liftclub.com", role: "ADMIN", status: "Active" },
      { id: "2", name: "Daniel Smith", email: "trainer.dan@liftclub.com", role: "TRAINER", status: "Active" },
      { id: "3", name: "Sarah Connor", email: "sarah.c@gym.com", role: "USER", status: "Active" },
    ],
  });
}

export async function PUT(req: Request) {
  const body = await req.json();
  return NextResponse.json({ success: true, message: "User permissions updated", user: body });
}
