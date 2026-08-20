import { NextResponse } from "next/server";

const exercises = [
  { id: "1", slug: "barbell-squat", name: "Barbell Squat", muscleGroup: "legs", equipment: "barbell", difficulty: "intermediate" },
  { id: "2", slug: "bench-press", name: "Bench Press", muscleGroup: "chest", equipment: "barbell", difficulty: "intermediate" },
  { id: "3", slug: "deadlift", name: "Deadlift", muscleGroup: "back", equipment: "barbell", difficulty: "advanced" },
  { id: "4", slug: "overhead-press", name: "Overhead Press", muscleGroup: "shoulders", equipment: "barbell", difficulty: "intermediate" },
];

export async function GET() {
  return NextResponse.json({ success: true, count: exercises.length, data: exercises });
}

export async function POST(req: Request) {
  const body = await req.json();
  return NextResponse.json({ success: true, message: "Exercise created", data: body }, { status: 201 });
}
