"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Trash2, GripVertical, Play, Dumbbell, Clock, CheckCircle2 } from "lucide-react";

interface ExerciseItem {
  id: string;
  name: string;
  muscle: string;
  sets: number;
  reps: number;
  restSecs: number;
}

const sampleRoutine: ExerciseItem[] = [
  { id: "1", name: "Barbell Squat", muscle: "Legs", sets: 4, reps: 8, restSecs: 90 },
  { id: "2", name: "Romanian Deadlift", muscle: "Hamstrings", sets: 3, reps: 10, restSecs: 60 },
  { id: "3", name: "Walking Lunges", muscle: "Quads & Glutes", sets: 3, reps: 12, restSecs: 60 },
  { id: "4", name: "Standing Calf Raises", muscle: "Calves", sets: 4, reps: 15, restSecs: 45 },
];

const availableExercises = [
  { name: "Bench Press", muscle: "Chest" },
  { name: "Overhead Press", muscle: "Shoulders" },
  { name: "Pull-Ups", muscle: "Back" },
  { name: "Barbell Row", muscle: "Back" },
  { name: "Incline DB Press", muscle: "Chest" },
  { name: "Lateral Raises", muscle: "Shoulders" },
  { name: "Tricep Dips", muscle: "Arms" },
  { name: "Hammer Curls", muscle: "Arms" },
];

export default function WorkoutPlannerPage() {
  const [activeDay, setActiveDay] = useState("Mon");
  const [routine, setRoutine] = useState<ExerciseItem[]>(sampleRoutine);
  const [routineName, setRoutineName] = useState("Leg Day Power Split");

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const handleAddExercise = (item: { name: string; muscle: string }) => {
    const newEx: ExerciseItem = {
      id: Date.now().toString(),
      name: item.name,
      muscle: item.muscle,
      sets: 3,
      reps: 10,
      restSecs: 60,
    };
    setRoutine([...routine, newEx]);
  };

  const handleRemoveExercise = (id: string) => {
    setRoutine(routine.filter((r) => r.id !== id));
  };

  const updateExercise = (id: string, field: keyof ExerciseItem, val: number) => {
    setRoutine(
      routine.map((r) => (r.id === id ? { ...r, [field]: val } : r))
    );
  };

  return (
    <div className="max-w-6xl">
      <header className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="font-heading text-4xl font-bold mb-1">
            Workout <span className="text-gradient-lime">Planner</span>
          </h1>
          <p className="text-gray-400 text-sm">
            Customize day-by-day training splits and organize routine order.
          </p>
        </div>
        <Link
          href="/app/workouts/session"
          className="inline-flex items-center gap-2 bg-[var(--lime)] text-black font-bold px-6 py-3 rounded-full hover:bg-[var(--lime-dark)] transition-colors shadow-lg glow-lime text-sm"
        >
          <Play className="h-4 w-4 fill-black" /> Start Active Session
        </Link>
      </header>

      {/* Days Tabs */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeDay === day
                ? "bg-[var(--lime)] text-black shadow-md"
                : "glass text-gray-300 hover:bg-white/10"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Active Day Routine (Left 2 cols) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="glass rounded-2xl p-6 mb-4">
            <label className="block text-xs uppercase text-gray-400 font-semibold tracking-wider mb-2">
              Routine Title
            </label>
            <input
              type="text"
              value={routineName}
              onChange={(e) => setRoutineName(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-lg font-bold text-white focus:outline-none focus:border-[var(--lime)]"
            />
          </div>

          <div className="space-y-3">
            {routine.map((ex, idx) => (
              <div
                key={ex.id}
                className="glass glass-hover rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-white/8"
              >
                <div className="flex items-center gap-3">
                  <span className="text-gray-500 font-mono text-sm">{idx + 1}</span>
                  <GripVertical className="h-4 w-4 text-gray-500 cursor-grab" />
                  <div>
                    <h3 className="font-heading font-semibold text-white">{ex.name}</h3>
                    <p className="text-xs text-gray-400">{ex.muscle}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                    <span className="text-gray-400 text-xs">Sets</span>
                    <input
                      type="number"
                      value={ex.sets}
                      onChange={(e) => updateExercise(ex.id, "sets", parseInt(e.target.value) || 1)}
                      className="w-10 bg-transparent text-center font-bold text-[var(--lime)] focus:outline-none"
                    />
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                    <span className="text-gray-400 text-xs">Reps</span>
                    <input
                      type="number"
                      value={ex.reps}
                      onChange={(e) => updateExercise(ex.id, "reps", parseInt(e.target.value) || 1)}
                      className="w-10 bg-transparent text-center font-bold text-[var(--cyan)] focus:outline-none"
                    />
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                    <Clock className="h-3.5 w-3.5 text-gray-400" />
                    <input
                      type="number"
                      value={ex.restSecs}
                      onChange={(e) => updateExercise(ex.id, "restSecs", parseInt(e.target.value) || 30)}
                      className="w-10 bg-transparent text-center font-bold text-gray-300 focus:outline-none"
                    />
                    <span className="text-xs text-gray-500">s</span>
                  </div>
                  <button
                    onClick={() => handleRemoveExercise(ex.id)}
                    className="text-gray-500 hover:text-red-400 p-1.5 transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Exercise Library Picker (Right 1 col) */}
        <div className="glass rounded-2xl p-6 h-fit">
          <div className="flex items-center gap-2 mb-4">
            <Dumbbell className="h-5 w-5 text-[var(--lime)]" />
            <h2 className="font-heading font-bold text-lg">Add Exercise</h2>
          </div>
          <p className="text-xs text-gray-400 mb-4">Click to add to your active split routine.</p>

          <div className="space-y-2">
            {availableExercises.map((ex) => (
              <button
                key={ex.name}
                onClick={() => handleAddExercise(ex)}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 text-left transition-colors group"
              >
                <div>
                  <p className="text-sm font-semibold text-white group-hover:text-[var(--lime)] transition-colors">
                    {ex.name}
                  </p>
                  <p className="text-xs text-gray-500">{ex.muscle}</p>
                </div>
                <Plus className="h-4 w-4 text-gray-400 group-hover:text-[var(--lime)]" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
