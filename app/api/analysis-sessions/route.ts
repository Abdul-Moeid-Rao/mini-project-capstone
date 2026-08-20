import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  return NextResponse.json({
    success: true,
    message: "AI Pose analysis session recorded",
    sessionSummary: {
      id: `session-${Date.now()}`,
      exerciseId: body.exerciseId || "squat",
      repCount: body.repCount || 12,
      formScore: body.formScore || 91,
      loggedAt: new Date().toISOString(),
    },
  });
}
