"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, Dumbbell, FileText } from "lucide-react";

export default function AdminContentPage() {
  const [activeTab, setActiveTab] = useState<"exercises" | "articles">("exercises");

  return (
    <div className="max-w-6xl space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold text-white mb-1">Content Management (CMS)</h1>
          <p className="text-sm text-gray-400">Publish and edit exercises and fitness blog articles dynamically.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-xl text-sm flex items-center gap-2 transition-colors">
          <Plus className="h-4 w-4" /> Add New {activeTab === "exercises" ? "Exercise" : "Article"}
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-white/10 pb-3">
        <button
          onClick={() => setActiveTab("exercises")}
          className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all ${
            activeTab === "exercises" ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white"
          }`}
        >
          <Dumbbell className="h-4 w-4" /> Exercises (12 Active)
        </button>
        <button
          onClick={() => setActiveTab("articles")}
          className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all ${
            activeTab === "articles" ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white"
          }`}
        >
          <FileText className="h-4 w-4" /> Blog Articles (6 Published)
        </button>
      </div>

      {/* Content Table */}
      <div className="bg-[#1E293B] border border-white/10 rounded-2xl overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-white/5 text-gray-400 text-xs uppercase tracking-wide">
              <th className="px-5 py-3.5">Title / Name</th>
              <th className="px-5 py-3.5">Category</th>
              <th className="px-5 py-3.5">Difficulty / Read Time</th>
              <th className="px-5 py-3.5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {activeTab === "exercises" ? (
              [
                { name: "Barbell Back Squat", cat: "Legs", diff: "Intermediate" },
                { name: "Flat Bench Press", cat: "Chest", diff: "Intermediate" },
                { name: "Conventional Deadlift", cat: "Back", diff: "Advanced" },
                { name: "Overhead Military Press", cat: "Shoulders", diff: "Intermediate" },
              ].map((ex, i) => (
                <tr key={i} className="border-t border-white/5 hover:bg-white/5 transition-colors">
                  <td className="px-5 py-4 font-bold text-white">{ex.name}</td>
                  <td className="px-5 py-4 text-gray-300">{ex.cat}</td>
                  <td className="px-5 py-4 text-xs text-yellow-400">{ex.diff}</td>
                  <td className="px-5 py-4 text-right space-x-2">
                    <button className="text-gray-400 hover:text-blue-400 p-1.5"><Edit2 className="h-4 w-4" /></button>
                    <button className="text-gray-400 hover:text-red-400 p-1.5"><Trash2 className="h-4 w-4" /></button>
                  </td>
                </tr>
              ))
            ) : (
              [
                { name: "Optimizing Progressive Overload for Hypertrophy", cat: "Training", diff: "5 min read" },
                { name: "Macronutrient Timing: Does the Anabolic Window Exist?", cat: "Nutrition", diff: "7 min read" },
                { name: "Sleep Architecture and Muscle Protein Synthesis", cat: "Recovery", diff: "4 min read" },
              ].map((art, i) => (
                <tr key={i} className="border-t border-white/5 hover:bg-white/5 transition-colors">
                  <td className="px-5 py-4 font-bold text-white">{art.name}</td>
                  <td className="px-5 py-4 text-gray-300">{art.cat}</td>
                  <td className="px-5 py-4 text-xs text-blue-400">{art.diff}</td>
                  <td className="px-5 py-4 text-right space-x-2">
                    <button className="text-gray-400 hover:text-blue-400 p-1.5"><Edit2 className="h-4 w-4" /></button>
                    <button className="text-gray-400 hover:text-red-400 p-1.5"><Trash2 className="h-4 w-4" /></button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
