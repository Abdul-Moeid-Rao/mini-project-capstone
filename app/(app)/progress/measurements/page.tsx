"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check, Plus, Calendar, Ruler } from "lucide-react";

interface MeasurementRecord {
  date: string;
  weightKg: number;
  bodyFatPct: number;
  chestCm: number;
  waistCm: number;
  hipsCm: number;
  armsCm: number;
}

const initialHistory: MeasurementRecord[] = [
  { date: "Aug 15, 2026", weightKg: 76.5, bodyFatPct: 16.0, chestCm: 104, waistCm: 81, hipsCm: 98, armsCm: 38 },
  { date: "Jul 15, 2026", weightKg: 77.2, bodyFatPct: 16.6, chestCm: 103, waistCm: 82, hipsCm: 99, armsCm: 37.5 },
  { date: "Jun 15, 2026", weightKg: 78.0, bodyFatPct: 17.1, chestCm: 102, waistCm: 83, hipsCm: 100, armsCm: 37 },
];

export default function BodyMeasurementsPage() {
  const [history, setHistory] = useState<MeasurementRecord[]>(initialHistory);
  const [weight, setWeight] = useState(76.5);
  const [bodyFat, setBodyFat] = useState(16.0);
  const [chest, setChest] = useState(104);
  const [waist, setWaist] = useState(81);
  const [hips, setHips] = useState(98);
  const [arms, setArms] = useState(38);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEntry: MeasurementRecord = {
      date: "Today",
      weightKg: weight,
      bodyFatPct: bodyFat,
      chestCm: chest,
      waistCm: waist,
      hipsCm: hips,
      armsCm: arms,
    };
    setHistory([newEntry, ...history]);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <div className="max-w-4xl">
      <header className="mb-8">
        <Link
          href="/app/progress"
          className="text-gray-400 hover:text-white flex items-center gap-2 mb-4 text-sm"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Progress Tracker
        </Link>
        <h1 className="font-heading text-4xl font-bold mb-1">
          Body <span className="text-gradient-lime">Measurements</span>
        </h1>
        <p className="text-gray-400 text-sm">
          Track circumference measurements (chest, waist, hips, arms) and body fat percentage.
        </p>
      </header>

      {/* Entry Form */}
      <form onSubmit={handleSubmit} className="glass rounded-3xl p-6 sm:p-8 border border-white/10 mb-8 space-y-6">
        <div className="flex items-center gap-2 mb-2">
          <Ruler className="h-5 w-5 text-[var(--cyan)]" />
          <h2 className="font-heading text-xl font-bold">Log New Measurements</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs uppercase text-gray-400 font-bold mb-1">Weight (kg)</label>
            <input
              type="number" step="0.1" value={weight} onChange={(e) => setWeight(parseFloat(e.target.value) || 0)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white font-bold focus:outline-none focus:border-[var(--lime)]"
            />
          </div>
          <div>
            <label className="block text-xs uppercase text-gray-400 font-bold mb-1">Body Fat (%)</label>
            <input
              type="number" step="0.1" value={bodyFat} onChange={(e) => setBodyFat(parseFloat(e.target.value) || 0)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white font-bold focus:outline-none focus:border-[var(--cyan)]"
            />
          </div>
          <div>
            <label className="block text-xs uppercase text-gray-400 font-bold mb-1">Chest (cm)</label>
            <input
              type="number" step="0.5" value={chest} onChange={(e) => setChest(parseFloat(e.target.value) || 0)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white font-bold focus:outline-none focus:border-[var(--lime)]"
            />
          </div>
          <div>
            <label className="block text-xs uppercase text-gray-400 font-bold mb-1">Waist (cm)</label>
            <input
              type="number" step="0.5" value={waist} onChange={(e) => setWaist(parseFloat(e.target.value) || 0)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white font-bold focus:outline-none focus:border-[var(--lime)]"
            />
          </div>
          <div>
            <label className="block text-xs uppercase text-gray-400 font-bold mb-1">Hips (cm)</label>
            <input
              type="number" step="0.5" value={hips} onChange={(e) => setHips(parseFloat(e.target.value) || 0)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white font-bold focus:outline-none focus:border-[var(--lime)]"
            />
          </div>
          <div>
            <label className="block text-xs uppercase text-gray-400 font-bold mb-1">Arms (cm)</label>
            <input
              type="number" step="0.5" value={arms} onChange={(e) => setArms(parseFloat(e.target.value) || 0)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white font-bold focus:outline-none focus:border-[var(--lime)]"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[var(--lime)] text-black font-bold py-3.5 rounded-xl hover:bg-[var(--lime-dark)] transition-colors flex items-center justify-center gap-2"
        >
          {submitted ? (
            <>
              <Check className="h-5 w-5" /> Saved!
            </>
          ) : (
            <>
              <Plus className="h-5 w-5" /> Save Measurement Entry
            </>
          )}
        </button>
      </form>

      {/* Measurement History Table */}
      <div className="glass rounded-3xl overflow-hidden border border-white/10">
        <div className="p-6 border-b border-white/10">
          <h2 className="font-heading text-xl font-bold">Measurement History</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-white/5 text-gray-400 text-xs uppercase tracking-wide">
                <th className="px-5 py-3">Date</th>
                <th className="px-5 py-3">Weight</th>
                <th className="px-5 py-3">Body Fat</th>
                <th className="px-5 py-3">Chest</th>
                <th className="px-5 py-3">Waist</th>
                <th className="px-5 py-3">Hips</th>
                <th className="px-5 py-3">Arms</th>
              </tr>
            </thead>
            <tbody>
              {history.map((row, i) => (
                <tr key={i} className="border-t border-white/5 hover:bg-white/5 transition-colors">
                  <td className="px-5 py-3.5 font-medium text-white">{row.date}</td>
                  <td className="px-5 py-3.5 text-[var(--lime)] font-mono">{row.weightKg} kg</td>
                  <td className="px-5 py-3.5 text-[var(--cyan)] font-mono">{row.bodyFatPct}%</td>
                  <td className="px-5 py-3.5 text-gray-300">{row.chestCm} cm</td>
                  <td className="px-5 py-3.5 text-gray-300">{row.waistCm} cm</td>
                  <td className="px-5 py-3.5 text-gray-300">{row.hipsCm} cm</td>
                  <td className="px-5 py-3.5 text-gray-300">{row.armsCm} cm</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
