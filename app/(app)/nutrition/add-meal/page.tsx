"use client";

import { useState } from "react";
import Link from "next/link";
import { Camera, Upload, Search, Sparkles, Check, ArrowLeft, Loader2 } from "lucide-react";

export default function AddMealPage() {
  const [activeTab, setActiveTab] = useState<"ai" | "manual">("ai");
  const [isScanning, setIsScanning] = useState(false);
  const [detectedFood, setDetectedFood] = useState<{
    name: string;
    confidence: number;
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  } | null>(null);

  const simulateAIScan = () => {
    setIsScanning(true);
    setDetectedFood(null);

    setTimeout(() => {
      setIsScanning(false);
      setDetectedFood({
        name: "Grilled Chicken Salad with Avocado",
        confidence: 94,
        calories: 450,
        protein: 38,
        carbs: 14,
        fat: 22,
      });
    }, 2000);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <header className="mb-8">
        <Link
          href="/app/nutrition/dashboard"
          className="text-gray-400 hover:text-white flex items-center gap-2 mb-4 text-sm"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Nutrition Dashboard
        </Link>
        <h1 className="font-heading text-4xl font-bold mb-1">
          Log a <span className="text-gradient-lime">Meal</span>
        </h1>
        <p className="text-gray-400 text-sm">
          Snap a photo for instant AI food detection or manually search our composition database.
        </p>
      </header>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab("ai")}
          className={`flex-1 py-3 rounded-2xl text-sm font-bold flex items-center justify-center gap-2 transition-all ${
            activeTab === "ai"
              ? "bg-[var(--lime)] text-black shadow-lg glow-lime"
              : "glass text-gray-300 hover:bg-white/10"
          }`}
        >
          <Sparkles className="h-4 w-4" /> AI Photo Recognition
        </button>
        <button
          onClick={() => setActiveTab("manual")}
          className={`flex-1 py-3 rounded-2xl text-sm font-bold flex items-center justify-center gap-2 transition-all ${
            activeTab === "manual"
              ? "bg-[var(--lime)] text-black shadow-lg"
              : "glass text-gray-300 hover:bg-white/10"
          }`}
        >
          <Search className="h-4 w-4" /> Manual Database Search
        </button>
      </div>

      {activeTab === "ai" ? (
        <div className="space-y-6">
          {/* Dropzone */}
          <div
            onClick={simulateAIScan}
            className="glass rounded-3xl p-12 border-2 border-dashed border-white/20 hover:border-[var(--lime)] cursor-pointer flex flex-col items-center justify-center text-center transition-all group"
          >
            <div className="w-16 h-16 rounded-2xl bg-[var(--lime)]/10 text-[var(--lime)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Camera className="h-8 w-8" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-1">
              Click to Upload or Use Camera
            </h3>
            <p className="text-xs text-gray-400 max-w-xs">
              Supports JPEG, PNG photos. Our browser-based AI will classify ingredients & calculate nutrition.
            </p>
          </div>

          {/* AI Scan Progress Indicator */}
          {isScanning && (
            <div className="glass rounded-2xl p-6 flex items-center justify-center gap-3 animate-pulse">
              <Loader2 className="h-5 w-5 text-[var(--lime)] animate-spin" />
              <span className="font-heading font-semibold text-sm">
                Analyzing food image with TensorFlow.js / USDA Database...
              </span>
            </div>
          )}

          {/* AI Result Card */}
          {detectedFood && (
            <div className="glass rounded-3xl p-6 sm:p-8 border border-[var(--lime)]/30 animate-fade-up">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--lime)] bg-[var(--lime)]/10 px-3 py-1 rounded-full">
                    {detectedFood.confidence}% Confidence
                  </span>
                  <h3 className="font-heading text-2xl font-bold mt-2">{detectedFood.name}</h3>
                </div>
              </div>

              {/* Editable Macros */}
              <div className="grid grid-cols-4 gap-3 mb-6">
                <div className="glass p-3 rounded-xl text-center">
                  <p className="text-xs text-gray-400 mb-1">Calories</p>
                  <p className="font-heading font-bold text-lg text-[var(--lime)]">
                    {detectedFood.calories} <span className="text-xs">kcal</span>
                  </p>
                </div>
                <div className="glass p-3 rounded-xl text-center">
                  <p className="text-xs text-gray-400 mb-1">Protein</p>
                  <p className="font-heading font-bold text-lg text-[var(--cyan)]">
                    {detectedFood.protein}g
                  </p>
                </div>
                <div className="glass p-3 rounded-xl text-center">
                  <p className="text-xs text-gray-400 mb-1">Carbs</p>
                  <p className="font-heading font-bold text-lg text-[#FF9B50]">
                    {detectedFood.carbs}g
                  </p>
                </div>
                <div className="glass p-3 rounded-xl text-center">
                  <p className="text-xs text-gray-400 mb-1">Fat</p>
                  <p className="font-heading font-bold text-lg text-[#C084FC]">
                    {detectedFood.fat}g
                  </p>
                </div>
              </div>

              <Link
                href="/app/nutrition/dashboard"
                className="w-full bg-[var(--lime)] text-black font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-[var(--lime-dark)] transition-colors"
              >
                <Check className="h-5 w-5" /> Confirm & Log Meal
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              placeholder="Search 10,000+ USDA foods (e.g. Chicken breast, Eggs, Rice)..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl pl-10 pr-4 py-3.5 text-sm text-white focus:outline-none focus:border-[var(--lime)]"
            />
          </div>

          <div className="space-y-2">
            {[
              { name: "Chicken Breast (Cooked, Skinless)", cals: 165, protein: "31g", carbs: "0g", fat: "3.6g" },
              { name: "Brown Rice (Cooked)", cals: 216, protein: "5g", carbs: "45g", fat: "1.8g" },
              { name: "Whole Egg (Large, Boiled)", cals: 78, protein: "6g", carbs: "0.6g", fat: "5g" },
              { name: "Greek Yogurt (0% Fat, Plain)", cals: 59, protein: "10g", carbs: "3.6g", fat: "0.4g" },
            ].map((f) => (
              <div
                key={f.name}
                className="glass glass-hover p-4 rounded-xl flex items-center justify-between"
              >
                <div>
                  <p className="text-sm font-semibold text-white">{f.name}</p>
                  <p className="text-xs text-gray-400">Per 100g serving</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-[var(--lime)] font-mono font-bold">{f.cals} kcal</span>
                  <button className="bg-white/10 hover:bg-[var(--lime)] hover:text-black text-xs font-bold px-3 py-1.5 rounded-lg transition-colors">
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
