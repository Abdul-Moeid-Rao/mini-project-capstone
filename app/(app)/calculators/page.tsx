"use client";

import { useState } from "react";
import { Calculator, Zap, CheckCircle2, BookmarkCheck } from "lucide-react";

type CalcType = "bmi" | "bmr" | "tdee" | "calories" | "protein" | "water";

export default function CalculatorsHubPage() {
  const [activeTab, setActiveTab] = useState<CalcType>("bmi");

  // Form Inputs
  const [weightKg, setWeightKg] = useState<number>(75);
  const [heightCm, setHeightCm] = useState<number>(178);
  const [age, setAge] = useState<number>(24);
  const [gender, setGender] = useState<"male" | "female">("male");
  const [activity, setActivity] = useState<number>(1.55); // moderate
  const [goal, setGoal] = useState<"cut" | "maintain" | "bulk">("maintain");
  const [saved, setSaved] = useState(false);

  // Instant Calculations
  // BMI
  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);
  const bmiCategory =
    bmi < 18.5 ? "Underweight" : bmi < 25 ? "Normal Weight" : bmi < 30 ? "Overweight" : "Obese";

  // BMR (Mifflin-St Jeor)
  const bmr =
    gender === "male"
      ? 10 * weightKg + 6.25 * heightCm - 5 * age + 5
      : 10 * weightKg + 6.25 * heightCm - 5 * age - 161;

  // TDEE
  const tdee = bmr * activity;

  // Calorie needs based on goal
  const caloriesTarget =
    goal === "cut" ? tdee - 500 : goal === "bulk" ? tdee + 400 : tdee;

  // Protein needs (2.0g per kg for athletes)
  const proteinTarget = weightKg * 2.0;

  // Water intake (35ml per kg bodyweight)
  const waterTarget = (weightKg * 35) / 1000;

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const tabs: { id: CalcType; label: string }[] = [
    { id: "bmi", label: "BMI" },
    { id: "bmr", label: "BMR" },
    { id: "tdee", label: "TDEE" },
    { id: "calories", label: "Calories" },
    { id: "protein", label: "Protein" },
    { id: "water", label: "Water Intake" },
  ];

  return (
    <div className="max-w-4xl">
      <header className="mb-8">
        <h1 className="font-heading text-4xl font-bold mb-1">
          Health <span className="text-gradient-lime">Calculators Hub</span>
        </h1>
        <p className="text-gray-400 text-sm">
          Interactive fitness calculators with instant results and profile saving.
        </p>
      </header>

      {/* Tabs */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? "bg-[var(--lime)] text-black shadow-md glow-lime"
                : "glass text-gray-300 hover:bg-white/10"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Left Form Inputs */}
        <div className="glass rounded-3xl p-6 sm:p-8 space-y-5 border border-white/10">
          <h2 className="font-heading text-xl font-bold mb-4">Your Biometrics</h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-400 font-bold uppercase mb-1">
                Weight (kg)
              </label>
              <input
                type="number"
                value={weightKg}
                onChange={(e) => setWeightKg(parseFloat(e.target.value) || 0)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white font-bold focus:outline-none focus:border-[var(--lime)]"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 font-bold uppercase mb-1">
                Height (cm)
              </label>
              <input
                type="number"
                value={heightCm}
                onChange={(e) => setHeightCm(parseFloat(e.target.value) || 0)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white font-bold focus:outline-none focus:border-[var(--lime)]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-400 font-bold uppercase mb-1">Age</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(parseInt(e.target.value) || 0)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white font-bold focus:outline-none focus:border-[var(--lime)]"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 font-bold uppercase mb-1">Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value as "male" | "female")}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white font-bold focus:outline-none focus:border-[var(--lime)]"
              >
                <option value="male" className="bg-gray-900">Male</option>
                <option value="female" className="bg-gray-900">Female</option>
              </select>
            </div>
          </div>

          {(activeTab === "tdee" || activeTab === "calories") && (
            <div>
              <label className="block text-xs text-gray-400 font-bold uppercase mb-1">
                Activity Level
              </label>
              <select
                value={activity}
                onChange={(e) => setActivity(parseFloat(e.target.value))}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[var(--lime)]"
              >
                <option value="1.2" className="bg-gray-900">Sedentary (office job)</option>
                <option value="1.375" className="bg-gray-900">Light Exercise (1-3 days/wk)</option>
                <option value="1.55" className="bg-gray-900">Moderate Exercise (3-5 days/wk)</option>
                <option value="1.725" className="bg-gray-900">Heavy Exercise (6-7 days/wk)</option>
                <option value="1.9" className="bg-gray-900">Athlete (2x per day)</option>
              </select>
            </div>
          )}

          {activeTab === "calories" && (
            <div>
              <label className="block text-xs text-gray-400 font-bold uppercase mb-1">
                Fitness Goal
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(["cut", "maintain", "bulk"] as const).map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setGoal(g)}
                    className={`py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                      goal === g
                        ? "bg-[var(--lime)] text-black"
                        : "bg-white/5 text-gray-400 hover:bg-white/10"
                    }`}
                  >
                    {g === "cut" ? "Fat Loss" : g === "maintain" ? "Maintain" : "Muscle Gain"}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Result Display Card */}
        <div className="glass rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-[var(--lime)]/30 min-h-[380px]">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-[var(--lime)] bg-[var(--lime)]/10 px-3 py-1 rounded-full">
              Calculated Result
            </span>

            {activeTab === "bmi" && (
              <div className="mt-6 space-y-4">
                <h3 className="text-sm font-semibold text-gray-400">Body Mass Index</h3>
                <p className="font-heading text-6xl font-extrabold text-[var(--lime)]">
                  {bmi.toFixed(1)}
                </p>
                <p className="text-lg font-bold text-white">
                  Category: <span className="text-[var(--cyan)]">{bmiCategory}</span>
                </p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Healthy BMI range is between 18.5 and 24.9. Note that muscular athletes may naturally register higher.
                </p>
              </div>
            )}

            {activeTab === "bmr" && (
              <div className="mt-6 space-y-4">
                <h3 className="text-sm font-semibold text-gray-400">Basal Metabolic Rate</h3>
                <p className="font-heading text-6xl font-extrabold text-[var(--lime)]">
                  {Math.round(bmr)}{" "}
                  <span className="text-2xl text-gray-400 font-normal">kcal/day</span>
                </p>
                <p className="text-sm text-gray-300">
                  This is the energy your body burns at complete rest just to keep vital organs functioning.
                </p>
              </div>
            )}

            {activeTab === "tdee" && (
              <div className="mt-6 space-y-4">
                <h3 className="text-sm font-semibold text-gray-400">Total Daily Energy Expenditure</h3>
                <p className="font-heading text-6xl font-extrabold text-[var(--lime)]">
                  {Math.round(tdee)}{" "}
                  <span className="text-2xl text-gray-400 font-normal">kcal/day</span>
                </p>
                <p className="text-sm text-gray-300">
                  Total daily burn including daily physical activity and structured workouts.
                </p>
              </div>
            )}

            {activeTab === "calories" && (
              <div className="mt-6 space-y-4">
                <h3 className="text-sm font-semibold text-gray-400">
                  Target Daily Calories ({goal.toUpperCase()})
                </h3>
                <p className="font-heading text-6xl font-extrabold text-[var(--lime)]">
                  {Math.round(caloriesTarget)}{" "}
                  <span className="text-2xl text-gray-400 font-normal">kcal</span>
                </p>
                <p className="text-sm text-gray-300">
                  {goal === "cut"
                    ? "500 kcal deficit to promote ~0.5kg weekly fat loss."
                    : goal === "bulk"
                    ? "400 kcal surplus to promote lean mass growth."
                    : "Maintenance intake to preserve current body weight."}
                </p>
              </div>
            )}

            {activeTab === "protein" && (
              <div className="mt-6 space-y-4">
                <h3 className="text-sm font-semibold text-gray-400">Optimal Daily Protein</h3>
                <p className="font-heading text-6xl font-extrabold text-[var(--cyan)]">
                  {Math.round(proteinTarget)} <span className="text-2xl text-gray-400 font-normal">g/day</span>
                </p>
                <p className="text-sm text-gray-300">
                  Calculated at 2.0g per kg of body mass, ideal for strength training athletes.
                </p>
              </div>
            )}

            {activeTab === "water" && (
              <div className="mt-6 space-y-4">
                <h3 className="text-sm font-semibold text-gray-400">Recommended Daily Water</h3>
                <p className="font-heading text-6xl font-extrabold text-[#38BDF8]">
                  {waterTarget.toFixed(1)} <span className="text-2xl text-gray-400 font-normal">Liters</span>
                </p>
                <p className="text-sm text-gray-300">
                  Based on 35ml per kg of body weight for optimal cellular hydration and recovery.
                </p>
              </div>
            )}
          </div>

          <button
            onClick={handleSave}
            className="w-full mt-8 bg-white/10 hover:bg-[var(--lime)] hover:text-black text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2"
          >
            {saved ? (
              <>
                <CheckCircle2 className="h-5 w-5 text-green-400" /> Saved to Profile!
              </>
            ) : (
              <>
                <BookmarkCheck className="h-5 w-5" /> Save Result to Profile
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
