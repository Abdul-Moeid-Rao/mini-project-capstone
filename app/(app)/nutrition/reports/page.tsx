"use client";

import Link from "next/link";
import { ArrowLeft, TrendingUp, Calendar } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const weeklyMacroData = [
  { day: "Mon", calories: 2350, protein: 175, carbs: 240, fat: 65 },
  { day: "Tue", calories: 2420, protein: 180, carbs: 260, fat: 68 },
  { day: "Wed", calories: 2200, protein: 165, carbs: 220, fat: 60 },
  { day: "Thu", calories: 2500, protein: 190, carbs: 270, fat: 72 },
  { day: "Fri", calories: 2380, protein: 178, carbs: 245, fat: 66 },
  { day: "Sat", calories: 2650, protein: 185, carbs: 290, fat: 78 },
  { day: "Sun", calories: 2150, protein: 160, carbs: 210, fat: 58 },
];

export default function NutritionReportsPage() {
  return (
    <div className="max-w-5xl">
      <header className="mb-8">
        <Link
          href="/app/nutrition/dashboard"
          className="text-gray-400 hover:text-white flex items-center gap-2 mb-4 text-sm"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Nutrition Dashboard
        </Link>
        <h1 className="font-heading text-4xl font-bold mb-1">
          Nutrition <span className="text-gradient-lime">Analytics</span>
        </h1>
        <p className="text-gray-400 text-sm">
          Weekly and monthly macronutrient consumption trends.
        </p>
      </header>

      {/* Weekly Averages Banner */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Avg Calories / Day", value: "2,378 kcal", color: "var(--lime)" },
          { label: "Avg Daily Protein",  value: "176g",       color: "var(--cyan)" },
          { label: "Calorie Goal Hit",   value: "6 / 7 days", color: "#FF9B50" },
          { label: "Hydration Average",  value: "3.1 L",      color: "#38BDF8" },
        ].map((s) => (
          <div key={s.label} className="glass rounded-2xl p-5 border-t-2" style={{ borderTopColor: s.color }}>
            <p className="text-xs uppercase text-gray-400 font-semibold tracking-wide mb-1">{s.label}</p>
            <p className="font-heading text-2xl font-bold" style={{ color: s.color }}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Recharts Bar Chart */}
      <div className="glass rounded-3xl p-6 sm:p-8 mb-8 border border-white/10">
        <h2 className="font-heading text-2xl font-bold mb-6">Daily Macro Breakdown (Past 7 Days)</h2>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weeklyMacroData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="day" stroke="rgba(255,255,255,0.4)" tick={{ fill: "rgba(255,255,255,0.6)" }} />
              <YAxis stroke="rgba(255,255,255,0.4)" tick={{ fill: "rgba(255,255,255,0.6)" }} />
              <Tooltip
                contentStyle={{ backgroundColor: "#111827", borderColor: "rgba(255,255,255,0.1)", borderRadius: "12px" }}
              />
              <Legend />
              <Bar dataKey="protein" name="Protein (g)" fill="var(--cyan)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="carbs"   name="Carbs (g)"   fill="#FF9B50"     radius={[4, 4, 0, 0]} />
              <Bar dataKey="fat"     name="Fat (g)"     fill="#C084FC"     radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
