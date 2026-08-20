import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    data: [
      { id: "w1", title: "Leg Day Hypertrophy", exercises: 4, volumeKg: 8450 },
      { id: "w2", title: "Upper Body Power", exercises: 4, volumeKg: 6200 },
    ],
  });
}

export async function POST(req: Request) {
  const body = await req.json();
  return NextResponse.json({ success: true, message: "Workout routine saved", data: body }, { status: 201 });
}
