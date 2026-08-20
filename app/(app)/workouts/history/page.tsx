import Link from "next/link";
import { Calendar, Clock, Dumbbell, Trophy, ArrowRight } from "lucide-react";

const pastWorkouts = [
  {
    id: "w1",
    title: "Leg Day Hypertrophy",
    date: "August 14, 2026",
    duration: "52 mins",
    volumeKg: "8,450 kg",
    exercisesCount: 5,
    pr: "Squat +5kg PR",
  },
  {
    id: "w2",
    title: "Upper Body Power Split",
    date: "August 12, 2026",
    duration: "45 mins",
    volumeKg: "6,200 kg",
    exercisesCount: 4,
    pr: "Bench Press 100kg",
  },
  {
    id: "w3",
    title: "Back & Biceps Pull",
    date: "August 10, 2026",
    duration: "48 mins",
    volumeKg: "7,100 kg",
    exercisesCount: 5,
    pr: null,
  },
  {
    id: "w4",
    title: "Full Body Functional",
    date: "August 07, 2026",
    duration: "40 mins",
    volumeKg: "4,900 kg",
    exercisesCount: 4,
    pr: null,
  },
];

export default function WorkoutHistoryPage() {
  return (
    <div className="max-w-5xl">
      <header className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="font-heading text-4xl font-bold mb-1">
            Workout <span className="text-gradient-lime">History</span>
          </h1>
          <p className="text-gray-400 text-sm">Review past training volume and logged sessions.</p>
        </div>
        <Link
          href="/app/workouts/planner"
          className="bg-[var(--lime)] text-black font-bold px-5 py-2.5 rounded-full text-sm hover:bg-[var(--lime-dark)] transition-colors"
        >
          Plan New Workout
        </Link>
      </header>

      <div className="space-y-4">
        {pastWorkouts.map((w) => (
          <div
            key={w.id}
            className="glass glass-hover rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-white/8 transition-all"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <h3 className="font-heading text-xl font-bold text-white">{w.title}</h3>
                {w.pr && (
                  <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-full bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">
                    <Trophy className="h-3 w-3" /> {w.pr}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5 text-gray-500" /> {w.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-gray-500" /> {w.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Dumbbell className="h-3.5 w-3.5 text-gray-500" /> {w.exercisesCount} Exercises
                </span>
              </div>
            </div>

            <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 pt-3 sm:pt-0 border-white/5">
              <div className="text-right">
                <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">Total Volume</p>
                <p className="font-heading text-lg font-bold text-[var(--lime)]">{w.volumeKg}</p>
              </div>
              <Link
                href="/app/workouts/planner"
                className="w-9 h-9 rounded-xl glass hover:bg-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
              >
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
