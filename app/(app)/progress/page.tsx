"use client";

import { useState } from "react";
import Link from "next/link";
import { TrendingUp, Ruler, Plus, Calendar } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const strengthData = [
  { date: "May 26", squat: 90, bench: 70, deadlift: 120 },
  { date: "Jun 26", squat: 95, bench: 75, deadlift: 125 },
  { date: "Jul 26", squat: 100, bench: 80, deadlift: 135 },
  { date: "Aug 26", squat: 110, bench: 85, deadlift: 145 },
];

const weightTrendData = [
  { date: "Week 1", weight: 78.5, bodyFat: 17.5 },
  { date: "Week 2", weight: 78.0, bodyFat: 17.1 },
  { date: "Week 3", weight: 77.2, bodyFat: 16.6 },
  { date: "Week 4", weight: 76.5, bodyFat: 16.0 },
];

export default function ProgressTrackerPage() {
  const [activeChart, setActiveChart] = useState<"strength" | "weight">("strength");

  return (
    <div className="max-w-5xl">
      <header className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="font-heading text-4xl font-bold mb-1">
            Progress <span className="text-gradient-lime">Tracker</span>
          </h1>
          <p className="text-gray-400 text-sm">
            Strength progression charts and body composition metrics over time.
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/app/progress/measurements"
            className="glass px-4 py-2.5 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors flex items-center gap-2"
          >
            <Ruler className="h-4 w-4 text-[var(--cyan)]" /> Log Measurements
          </Link>
        </div>
      </header>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Squat 1RM",     value: "110 kg",  growth: "+20kg (3mo)", color: "var(--lime)" },
          { label: "Bench Press",   value: "85 kg",   growth: "+15kg (3mo)", color: "var(--cyan)" },
          { label: "Deadlift 1RM",  value: "145 kg",  growth: "+25kg (3mo)", color: "#FF9B50" },
          { label: "Current Weight",value: "76.5 kg", growth: "-2.0kg (1mo)",color: "#38BDF8" },
        ].map((s) => (
          <div key={s.label} className="glass rounded-2xl p-5 border-t-2" style={{ borderTopColor: s.color }}>
            <p className="text-xs uppercase text-gray-400 font-semibold tracking-wide mb-1">{s.label}</p>
            <p className="font-heading text-2xl font-bold" style={{ color: s.color }}>{s.value}</p>
            <p className="text-xs text-green-400 mt-1">{s.growth}</p>
          </div>
        ))}
      </div>

      {/* Chart Switcher Tabs */}
      <div className="glass rounded-3xl p-6 sm:p-8 border border-white/10 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-heading text-2xl font-bold">
            {activeChart === "strength" ? "Strength Progression (1RM kg)" : "Body Composition Trends"}
          </h2>
          <div className="flex gap-2 bg-white/5 p-1 rounded-xl">
            <button
              onClick={() => setActiveChart("strength")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeChart === "strength" ? "bg-[var(--lime)] text-black" : "text-gray-400"
              }`}
            >
              Strength
            </button>
            <button
              onClick={() => setActiveChart("weight")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeChart === "weight" ? "bg-[var(--lime)] text-black" : "text-gray-400"
              }`}
            >
              Body Weight & Fat
            </button>
          </div>
        </div>

        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            {activeChart === "strength" ? (
              <LineChart data={strengthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="date" stroke="rgba(255,255,255,0.4)" tick={{ fill: "rgba(255,255,255,0.6)" }} />
                <YAxis stroke="rgba(255,255,255,0.4)" tick={{ fill: "rgba(255,255,255,0.6)" }} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#111827", borderColor: "rgba(255,255,255,0.1)", borderRadius: "12px" }}
                />
                <Legend />
                <Line type="monotone" dataKey="squat" name="Squat (kg)" stroke="var(--lime)" strokeWidth={3} dot={{ r: 5 }} />
                <Line type="monotone" dataKey="bench" name="Bench Press (kg)" stroke="var(--cyan)" strokeWidth={3} dot={{ r: 5 }} />
                <Line type="monotone" dataKey="deadlift" name="Deadlift (kg)" stroke="#FF9B50" strokeWidth={3} dot={{ r: 5 }} />
              </LineChart>
            ) : (
              <LineChart data={weightTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="date" stroke="rgba(255,255,255,0.4)" tick={{ fill: "rgba(255,255,255,0.6)" }} />
                <YAxis stroke="rgba(255,255,255,0.4)" tick={{ fill: "rgba(255,255,255,0.6)" }} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#111827", borderColor: "rgba(255,255,255,0.1)", borderRadius: "12px" }}
                />
                <Legend />
                <Line type="monotone" dataKey="weight" name="Weight (kg)" stroke="#38BDF8" strokeWidth={3} dot={{ r: 5 }} />
                <Line type="monotone" dataKey="bodyFat" name="Body Fat %" stroke="#C084FC" strokeWidth={3} dot={{ r: 5 }} />
              </LineChart>
            )}
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
