"use client";

import { useState } from "react";
import { User, Mail, Shield, Bell, Check, Save } from "lucide-react";

export default function ProfilePage() {
  const [name, setName] = useState("Alex Johnson");
  const [email, setEmail] = useState("alex@liftclub.com");
  const [heightCm, setHeightCm] = useState(178);
  const [weightKg, setWeightKg] = useState(76.5);
  const [activity, setActivity] = useState("moderate");
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="max-w-4xl">
      <header className="mb-8">
        <h1 className="font-heading text-4xl font-bold mb-1">
          My <span className="text-gradient-lime">Profile & Settings</span>
        </h1>
        <p className="text-gray-400 text-sm">
          Manage your account credentials and personal physical biometrics.
        </p>
      </header>

      <form onSubmit={handleSave} className="space-y-8">
        {/* Account Details */}
        <div className="glass rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
          <div className="flex items-center gap-3 mb-2">
            <User className="h-5 w-5 text-[var(--lime)]" />
            <h2 className="font-heading text-xl font-bold">Account Credentials</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase text-gray-400 font-bold mb-1">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white font-semibold focus:outline-none focus:border-[var(--lime)]"
              />
            </div>
            <div>
              <label className="block text-xs uppercase text-gray-400 font-bold mb-1">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white font-semibold focus:outline-none focus:border-[var(--lime)]"
              />
            </div>
          </div>
        </div>

        {/* Biometrics Settings */}
        <div className="glass rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="h-5 w-5 text-[var(--cyan)]" />
            <h2 className="font-heading text-xl font-bold">Physical Biometrics</h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs uppercase text-gray-400 font-bold mb-1">Height (cm)</label>
              <input
                type="number"
                value={heightCm}
                onChange={(e) => setHeightCm(parseFloat(e.target.value) || 0)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white font-semibold focus:outline-none focus:border-[var(--lime)]"
              />
            </div>
            <div>
              <label className="block text-xs uppercase text-gray-400 font-bold mb-1">Weight (kg)</label>
              <input
                type="number"
                value={weightKg}
                onChange={(e) => setWeightKg(parseFloat(e.target.value) || 0)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white font-semibold focus:outline-none focus:border-[var(--lime)]"
              />
            </div>
            <div>
              <label className="block text-xs uppercase text-gray-400 font-bold mb-1">Activity Level</label>
              <select
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white font-semibold focus:outline-none focus:border-[var(--lime)]"
              >
                <option value="sedentary" className="bg-gray-900">Sedentary</option>
                <option value="light" className="bg-gray-900">Light</option>
                <option value="moderate" className="bg-gray-900">Moderate</option>
                <option value="active" className="bg-gray-900">Heavy Active</option>
              </select>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-[var(--lime)] text-black font-bold px-8 py-3.5 rounded-xl hover:bg-[var(--lime-dark)] transition-colors flex items-center gap-2 shadow-lg glow-lime"
        >
          {saved ? (
            <>
              <Check className="h-5 w-5" /> Changes Saved!
            </>
          ) : (
            <>
              <Save className="h-5 w-5" /> Save Profile Changes
            </>
          )}
        </button>
      </form>
    </div>
  );
}
