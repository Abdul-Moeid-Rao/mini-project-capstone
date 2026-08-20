"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Check, ArrowLeft, Timer, Play, Pause, RotateCcw, Plus, Trophy } from "lucide-react";

interface SetRow {
  setNumber: number;
  prevWeight: number;
  weight: number;
  reps: number;
  done: boolean;
}

export default function WorkoutSessionPage() {
  const router = useRouter();
  const [seconds, setSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [restCountdown, setRestCountdown] = useState<number | null>(null);

  // Active workout exercises state
  const [setsData, setSetsData] = useState<SetRow[]>([
    { setNumber: 1, prevWeight: 100, weight: 100, reps: 8, done: false },
    { setNumber: 2, prevWeight: 100, weight: 105, reps: 8, done: false },
    { setNumber: 3, prevWeight: 105, weight: 105, reps: 7, done: false },
  ]);

  // Overall workout stopwatch
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning) {
      interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  // Rest timer countdown
  useEffect(() => {
    let restInterval: NodeJS.Timeout;
    if (restCountdown !== null && restCountdown > 0) {
      restInterval = setInterval(() => setRestCountdown((c) => (c ? c - 1 : null)), 1000);
    } else if (restCountdown === 0) {
      setRestCountdown(null);
    }
    return () => clearInterval(restInterval);
  }, [restCountdown]);

  const toggleSet = (idx: number) => {
    const updated = [...setsData];
    const isNowDone = !updated[idx].done;
    updated[idx].done = isNowDone;
    setSetsData(updated);

    if (isNowDone) {
      setRestCountdown(60); // 60s rest trigger
    }
  };

  const addSet = () => {
    const last = setsData[setsData.length - 1];
    setSetsData([
      ...setsData,
      {
        setNumber: setsData.length + 1,
        prevWeight: last ? last.weight : 50,
        weight: last ? last.weight : 50,
        reps: 10,
        done: false,
      },
    ]);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Top Session HUD */}
      <div className="flex items-center justify-between mb-8">
        <Link
          href="/app/workouts/planner"
          className="glass px-4 py-2 rounded-full text-sm text-gray-400 hover:text-white flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" /> Cancel
        </Link>
        <div className="flex items-center gap-4">
          <div className="glass px-5 py-2 rounded-2xl flex items-center gap-2 border border-[var(--lime)]/30">
            <Timer className="h-4 w-4 text-[var(--lime)] animate-pulse" />
            <span className="font-heading font-bold text-lg text-white">
              {formatTime(seconds)}
            </span>
          </div>
          <button
            onClick={() => router.push("/app/workouts/history")}
            className="bg-[var(--lime)] text-black font-bold px-6 py-2 rounded-xl text-sm hover:bg-[var(--lime-dark)] transition-colors shadow-lg"
          >
            Finish Workout
          </button>
        </div>
      </div>

      {/* Rest Timer Banner */}
      {restCountdown !== null && (
        <div className="glass bg-[var(--cyan)]/10 border-[var(--cyan)]/30 p-4 rounded-2xl mb-8 flex items-center justify-between animate-fade-up">
          <div className="flex items-center gap-3">
            <Timer className="h-6 w-6 text-[var(--cyan)]" />
            <div>
              <p className="text-xs uppercase tracking-wider text-[var(--cyan)] font-bold">
                Rest Timer Active
              </p>
              <p className="text-2xl font-extrabold text-white">{restCountdown}s</p>
            </div>
          </div>
          <button
            onClick={() => setRestCountdown(null)}
            className="text-xs bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg text-white"
          >
            Skip Rest
          </button>
        </div>
      )}

      {/* Exercise Active Card */}
      <div className="glass rounded-3xl p-6 sm:p-8 mb-6 border border-white/10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-heading text-2xl font-bold">Barbell Squat</h2>
            <p className="text-sm text-gray-400">Primary: Quadriceps & Glutes</p>
          </div>
          <span className="text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-[var(--lime)]/10 text-[var(--lime)] font-bold">
            Working Sets
          </span>
        </div>

        {/* Set Table */}
        <div className="space-y-3">
          <div className="grid grid-cols-5 text-xs text-gray-500 font-bold uppercase tracking-wider px-3">
            <span>Set</span>
            <span>Prev</span>
            <span>kg</span>
            <span>Reps</span>
            <span className="text-right">Complete</span>
          </div>

          {setsData.map((row, idx) => (
            <div
              key={row.setNumber}
              className={`grid grid-cols-5 items-center p-3 rounded-2xl transition-all ${
                row.done ? "bg-[var(--lime)]/10 border border-[var(--lime)]/30" : "bg-white/5"
              }`}
            >
              <span className="font-heading font-bold text-sm text-gray-300">{row.setNumber}</span>
              <span className="text-xs text-gray-500">{row.prevWeight} kg</span>
              <input
                type="number"
                value={row.weight}
                onChange={(e) => {
                  const val = parseFloat(e.target.value) || 0;
                  const u = [...setsData];
                  u[idx].weight = val;
                  setSetsData(u);
                }}
                className="w-16 bg-white/10 text-white font-bold rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--lime)]"
              />
              <input
                type="number"
                value={row.reps}
                onChange={(e) => {
                  const val = parseInt(e.target.value) || 0;
                  const u = [...setsData];
                  u[idx].reps = val;
                  setSetsData(u);
                }}
                className="w-16 bg-white/10 text-white font-bold rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--cyan)]"
              />
              <div className="text-right">
                <button
                  onClick={() => toggleSet(idx)}
                  className={`w-9 h-9 rounded-xl inline-flex items-center justify-center transition-all ${
                    row.done
                      ? "bg-[var(--lime)] text-black shadow-md"
                      : "bg-white/10 text-gray-400 hover:bg-white/20"
                  }`}
                >
                  <Check className="h-5 w-5 stroke-[3]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={addSet}
          className="w-full mt-4 py-3 rounded-xl border border-dashed border-white/20 text-sm font-semibold text-gray-400 hover:text-white hover:border-white/40 transition-colors flex items-center justify-center gap-2"
        >
          <Plus className="h-4 w-4" /> Add Set
        </button>
      </div>
    </div>
  );
}
