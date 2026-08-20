import type { Metadata } from "next";
import Link from "next/link";
import { Search, Filter } from "lucide-react";

export const metadata: Metadata = { title: "Exercise Library" };

const exercises = [
  { slug: "barbell-squat",     name: "Barbell Squat",      muscle: "Legs",      equipment: "Barbell",   diff: "Intermediate" },
  { slug: "bench-press",       name: "Bench Press",         muscle: "Chest",     equipment: "Barbell",   diff: "Intermediate" },
  { slug: "pull-up",           name: "Pull-Up",             muscle: "Back",      equipment: "Bodyweight",diff: "Intermediate" },
  { slug: "overhead-press",    name: "Overhead Press",      muscle: "Shoulders", equipment: "Barbell",   diff: "Intermediate" },
  { slug: "deadlift",          name: "Deadlift",            muscle: "Back",      equipment: "Barbell",   diff: "Advanced" },
  { slug: "push-up",           name: "Push-Up",             muscle: "Chest",     equipment: "Bodyweight",diff: "Beginner" },
  { slug: "dumbbell-curl",     name: "Dumbbell Curl",       muscle: "Arms",      equipment: "Dumbbell",  diff: "Beginner" },
  { slug: "plank",             name: "Plank",               muscle: "Core",      equipment: "Bodyweight",diff: "Beginner" },
  { slug: "lunge",             name: "Lunge",               muscle: "Legs",      equipment: "Bodyweight",diff: "Beginner" },
  { slug: "lat-pulldown",      name: "Lat Pulldown",        muscle: "Back",      equipment: "Machine",   diff: "Beginner" },
  { slug: "cable-row",         name: "Cable Row",           muscle: "Back",      equipment: "Cable",     diff: "Intermediate" },
  { slug: "leg-press",         name: "Leg Press",           muscle: "Legs",      equipment: "Machine",   diff: "Beginner" },
];

const diffColor: Record<string, string> = {
  Beginner:     "bg-green-500/15 text-green-400",
  Intermediate: "bg-yellow-500/15 text-yellow-400",
  Advanced:     "bg-red-500/15 text-red-400",
};

export default function ExercisesPage() {
  return (
    <div className="max-w-6xl">
      <header className="mb-8 flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-end">
        <div>
          <h1 className="font-heading text-4xl font-bold mb-1">Exercise <span className="text-gradient-lime">Library</span></h1>
          <p className="text-gray-400 text-sm">Browse 100+ exercises with instructions and muscle diagrams.</p>
        </div>
      </header>

      {/* Search + Filter bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            placeholder="Search exercises..."
            className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[var(--lime)] transition-colors"
          />
        </div>
        <button className="flex items-center gap-2 px-5 py-3 glass rounded-xl text-sm text-gray-300 hover:bg-white/10 transition-colors">
          <Filter className="h-4 w-4" /> Filter
        </button>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {exercises.map((ex) => (
          <Link
            key={ex.slug}
            href={`/app/exercises/${ex.slug}`}
            className="card-lift glass glass-hover rounded-2xl p-5 flex flex-col"
          >
            {/* Placeholder thumbnail */}
            <div className="rounded-xl bg-[var(--bg-elevated)] h-28 mb-4 flex items-center justify-center text-3xl">
              🏋️
            </div>
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-heading font-semibold text-sm">{ex.name}</h3>
              <span className={`text-xs px-2 py-0.5 rounded-full ${diffColor[ex.diff]}`}>{ex.diff}</span>
            </div>
            <p className="text-gray-500 text-xs">{ex.muscle} · {ex.equipment}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
