"use client";

import Link from "next/link";
import { Activity, ArrowLeft, Calendar, Share2, CheckCircle2, ShieldAlert } from "lucide-react";
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

const jointAnglesData = Array.from({ length: 20 }).map((_, i) => ({
  time: `${i * 2}s`,
  kneeAngle: 175 - Math.abs(Math.sin(i / 2)) * 95,
  hipAngle: 170 - Math.abs(Math.sin(i / 2)) * 85,
}));

export default function AISessionResultsPage() {
  return (
    <div className="max-w-5xl">
      <header className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <Link
            href="/app/ai-check"
            className="text-gray-400 hover:text-white flex items-center gap-2 mb-4 text-sm"
          >
            <ArrowLeft className="h-4 w-4" /> Back to AI Selection
          </Link>
          <h1 className="font-heading text-4xl font-bold mb-1">
            Session <span className="text-gradient-lime">Report</span>
          </h1>
          <p className="text-gray-400 text-sm">
            AI Form Analysis breakdown for Barbell Squat (Logged Today).
          </p>
        </div>
        <button className="glass px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors flex items-center gap-2">
          <Share2 className="h-4 w-4" /> Share Results
        </button>
      </header>

      {/* KPI Scores */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="glass rounded-3xl p-6 text-center border-t-4 border-[var(--lime)]">
          <p className="text-xs uppercase text-gray-400 font-bold mb-1">Completed Reps</p>
          <p className="font-heading text-6xl font-extrabold text-[var(--lime)] my-2">12</p>
          <p className="text-xs text-green-400 font-semibold">100% Rep Quality Standard</p>
        </div>

        <div className="glass rounded-3xl p-6 text-center border-t-4 border-[var(--cyan)]">
          <p className="text-xs uppercase text-gray-400 font-bold mb-1">Overall Form Score</p>
          <p className="font-heading text-6xl font-extrabold text-[var(--cyan)] my-2">91%</p>
          <p className="text-xs text-gray-300">Grade: Excellent Technique</p>
        </div>

        <div className="glass rounded-3xl p-6 text-center border-t-4 border-[#FF9B50]">
          <p className="text-xs uppercase text-gray-400 font-bold mb-1">Depth Consistency</p>
          <p className="font-heading text-6xl font-extrabold text-[#FF9B50] my-2">95%</p>
          <p className="text-xs text-gray-300">Hit parallel on 11/12 reps</p>
        </div>
      </div>

      {/* Joint Angle Trajectory Chart */}
      <div className="glass rounded-3xl p-6 sm:p-8 border border-white/10 mb-8">
        <div className="flex items-center gap-2 mb-6">
          <Activity className="h-5 w-5 text-[var(--lime)]" />
          <h2 className="font-heading text-2xl font-bold">Joint Angle Trajectory Over Session</h2>
        </div>

        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={jointAnglesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="time" stroke="rgba(255,255,255,0.4)" tick={{ fill: "rgba(255,255,255,0.6)" }} />
              <YAxis stroke="rgba(255,255,255,0.4)" tick={{ fill: "rgba(255,255,255,0.6)" }} domain={[60, 190]} />
              <Tooltip
                contentStyle={{ backgroundColor: "#111827", borderColor: "rgba(255,255,255,0.1)", borderRadius: "12px" }}
              />
              <Legend />
              <Line type="monotone" dataKey="kneeAngle" name="Knee Joint (Depth °)" stroke="var(--lime)" strokeWidth={3} dot={false} />
              <Line type="monotone" dataKey="hipAngle"  name="Hip Hinge (°)"        stroke="var(--cyan)" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* AI Cue Breakdown */}
      <div className="glass rounded-3xl p-6 sm:p-8 border border-white/10">
        <h2 className="font-heading text-2xl font-bold mb-4">Real-Time AI Cue Logs</h2>
        <div className="space-y-3">
          {[
            { time: "0:04", note: "Clean brace & unrack. Spinal alignment optimal.", type: "good" },
            { time: "0:18", note: "Hit full 85° parallel depth smoothly on rep 3.", type: "good" },
            { time: "0:34", note: "Minor knee valgus (inward cave) detected on rep 7 ascension.", type: "warning" },
            { time: "0:52", note: "Re-engaged glute drive, finished final 3 reps with ideal mechanics.", type: "good" },
          ].map((cue, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-white/5 flex items-start gap-3 border border-white/5"
            >
              {cue.type === "good" ? (
                <CheckCircle2 className="h-5 w-5 text-[var(--lime)] flex-shrink-0 mt-0.5" />
              ) : (
                <ShieldAlert className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
              )}
              <div>
                <span className="text-xs font-mono text-gray-500 mr-2">{cue.time}</span>
                <span className="text-sm text-gray-200">{cue.note}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
