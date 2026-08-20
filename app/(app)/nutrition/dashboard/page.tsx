"use client";

import Link from "next/link";
import { Plus, Flame, Sparkles, TrendingUp, ChevronRight, Apple, Drumstick, Wheat, Droplets } from "lucide-react";

export default function NutritionDashboardPage() {
  const macros = {
    calories: { current: 1840, target: 2400, unit: "kcal", color: "var(--lime)" },
    protein: { current: 145, target: 180, unit: "g", color: "var(--cyan)" },
    carbs: { current: 195, target: 250, unit: "g", color: "#FF9B50" },
    fat: { current: 52, target: 70, unit: "g", color: "#C084FC" },
    water: { current: 2.4, target: 3.5, unit: "L", color: "#38BDF8" },
  };

  const meals = [
    {
      type: "Breakfast",
      time: "8:30 AM",
      items: "Oatmeal with whey protein, peanut butter & banana",
      cals: 620,
      protein: "42g",
    },
    {
      type: "Lunch",
      time: "1:15 PM",
      items: "Grilled chicken breast, brown rice & steamed broccoli",
      cals: 710,
      protein: "58g",
    },
    {
      type: "Snack",
      time: "4:45 PM",
      items: "Greek yogurt with mixed berries and almonds",
      cals: 260,
      protein: "24g",
    },
    {
      type: "Dinner",
      time: "8:00 PM",
      items: "Salmon fillet, baked sweet potato & asparagus",
      cals: 250,
      protein: "21g",
    },
  ];

  return (
    <div className="max-w-5xl">
      <header className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="font-heading text-4xl font-bold mb-1">
            Nutrition <span className="text-gradient-lime">Tracker</span>
          </h1>
          <p className="text-gray-400 text-sm">
            Monitor daily calorie targets, macronutrient splits, and AI meal logs.
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/app/nutrition/reports"
            className="glass px-4 py-2.5 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors"
          >
            Reports
          </Link>
          <Link
            href="/app/nutrition/add-meal"
            className="bg-[var(--lime)] text-black font-bold px-5 py-2.5 rounded-full text-sm hover:bg-[var(--lime-dark)] transition-colors flex items-center gap-2 shadow-lg glow-lime"
          >
            <Plus className="h-4 w-4" /> Add Meal
          </Link>
        </div>
      </header>

      {/* Calories & Macro Rings Banner */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-8">
        <div className="col-span-2 sm:col-span-1 glass rounded-2xl p-5 border-t-2 border-[var(--lime)]">
          <p className="text-xs uppercase text-gray-400 font-bold mb-1">Calories</p>
          <p className="font-heading text-2xl font-extrabold text-[var(--lime)]">
            {macros.calories.current}{" "}
            <span className="text-xs text-gray-400 font-normal">/ {macros.calories.target}</span>
          </p>
          <div className="w-full bg-white/10 rounded-full h-1.5 mt-3">
            <div
              className="bg-[var(--lime)] h-1.5 rounded-full"
              style={{ width: `${(macros.calories.current / macros.calories.target) * 100}%` }}
            />
          </div>
        </div>

        <div className="glass rounded-2xl p-5 border-t-2 border-[var(--cyan)]">
          <div className="flex items-center gap-1.5 mb-1 text-xs uppercase text-gray-400 font-bold">
            <Drumstick className="h-3.5 w-3.5 text-[var(--cyan)]" /> Protein
          </div>
          <p className="font-heading text-xl font-bold text-[var(--cyan)]">
            {macros.protein.current}g <span className="text-xs text-gray-500 font-normal">/ {macros.protein.target}g</span>
          </p>
          <div className="w-full bg-white/10 rounded-full h-1.5 mt-3">
            <div
              className="bg-[var(--cyan)] h-1.5 rounded-full"
              style={{ width: `${(macros.protein.current / macros.protein.target) * 100}%` }}
            />
          </div>
        </div>

        <div className="glass rounded-2xl p-5 border-t-2 border-[#FF9B50]">
          <div className="flex items-center gap-1.5 mb-1 text-xs uppercase text-gray-400 font-bold">
            <Wheat className="h-3.5 w-3.5 text-[#FF9B50]" /> Carbs
          </div>
          <p className="font-heading text-xl font-bold text-[#FF9B50]">
            {macros.carbs.current}g <span className="text-xs text-gray-500 font-normal">/ {macros.carbs.target}g</span>
          </p>
          <div className="w-full bg-white/10 rounded-full h-1.5 mt-3">
            <div
              className="bg-[#FF9B50] h-1.5 rounded-full"
              style={{ width: `${(macros.carbs.current / macros.carbs.target) * 100}%` }}
            />
          </div>
        </div>

        <div className="glass rounded-2xl p-5 border-t-2 border-[#C084FC]">
          <div className="flex items-center gap-1.5 mb-1 text-xs uppercase text-gray-400 font-bold">
            <Apple className="h-3.5 w-3.5 text-[#C084FC]" /> Fat
          </div>
          <p className="font-heading text-xl font-bold text-[#C084FC]">
            {macros.fat.current}g <span className="text-xs text-gray-500 font-normal">/ {macros.fat.target}g</span>
          </p>
          <div className="w-full bg-white/10 rounded-full h-1.5 mt-3">
            <div
              className="bg-[#C084FC] h-1.5 rounded-full"
              style={{ width: `${(macros.fat.current / macros.fat.target) * 100}%` }}
            />
          </div>
        </div>

        <div className="glass rounded-2xl p-5 border-t-2 border-[#38BDF8]">
          <div className="flex items-center gap-1.5 mb-1 text-xs uppercase text-gray-400 font-bold">
            <Droplets className="h-3.5 w-3.5 text-[#38BDF8]" /> Water
          </div>
          <p className="font-heading text-xl font-bold text-[#38BDF8]">
            {macros.water.current}L <span className="text-xs text-gray-500 font-normal">/ {macros.water.target}L</span>
          </p>
          <div className="w-full bg-white/10 rounded-full h-1.5 mt-3">
            <div
              className="bg-[#38BDF8] h-1.5 rounded-full"
              style={{ width: `${(macros.water.current / macros.water.target) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* AI Recommendation Banner */}
      <div className="glass bg-gradient-to-r from-[var(--lime)]/10 to-[var(--cyan)]/10 border border-[var(--lime)]/20 p-5 rounded-2xl mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Sparkles className="h-6 w-6 text-[var(--lime)] animate-pulse" />
          <div>
            <p className="font-heading font-semibold text-sm text-white">Smart Recommendation</p>
            <p className="text-xs text-gray-300">
              You are 35g away from your protein goal. A protein shake or 150g Greek yogurt will hit your target!
            </p>
          </div>
        </div>
        <Link
          href="/app/nutrition/recommendations"
          className="text-xs text-[var(--lime)] hover:underline whitespace-nowrap ml-4 font-semibold"
        >
          View all
        </Link>
      </div>

      {/* Today's Meals Timeline */}
      <h2 className="font-heading text-2xl font-bold mb-4">Today&apos;s Meals</h2>
      <div className="space-y-3">
        {meals.map((meal) => (
          <div
            key={meal.type}
            className="glass glass-hover rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <span className="font-heading font-bold text-lg text-white">{meal.type}</span>
                <span className="text-xs text-gray-500">{meal.time}</span>
              </div>
              <p className="text-sm text-gray-400">{meal.items}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs bg-white/5 border border-white/5 px-3 py-1.5 rounded-lg text-[var(--lime)] font-mono font-bold">
                {meal.cals} kcal
              </span>
              <span className="text-xs bg-white/5 border border-white/5 px-3 py-1.5 rounded-lg text-[var(--cyan)] font-mono font-bold">
                {meal.protein} protein
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
