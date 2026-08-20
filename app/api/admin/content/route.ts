import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    stats: { exercises: 12, articles: 6 },
  });
}

export async function POST(req: Request) {
  const body = await req.json();
  return NextResponse.json({ success: true, message: "Content item published", item: body }, { status: 201 });
}
