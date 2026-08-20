"use client";

import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const userGrowthData = [
  { month: "Jan", users: 400, sessions: 1200 },
  { month: "Feb", users: 650, sessions: 2100 },
  { month: "Mar", users: 890, sessions: 3400 },
  { month: "Apr", users: 1100, sessions: 4800 },
  { month: "May", users: 1420, sessions: 6200 },
];

export default function AdminReportsPage() {
  return (
    <div className="max-w-6xl space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold text-white mb-1">Platform Analytics & Growth</h1>
        <p className="text-sm text-gray-400">Monthly user registrations and engagement metrics.</p>
      </div>

      <div className="bg-[#1E293B] border border-white/10 rounded-2xl p-6">
        <h2 className="font-heading font-bold text-lg text-white mb-6">User Acquisition & Workout Activity</h2>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={userGrowthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="month" stroke="rgba(255,255,255,0.4)" tick={{ fill: "rgba(255,255,255,0.6)" }} />
              <YAxis stroke="rgba(255,255,255,0.4)" tick={{ fill: "rgba(255,255,255,0.6)" }} />
              <Tooltip contentStyle={{ backgroundColor: "#0F172A", borderColor: "rgba(255,255,255,0.1)", borderRadius: "12px" }} />
              <Legend />
              <Line type="monotone" dataKey="users" name="Registered Athletes" stroke="#3B82F6" strokeWidth={3} dot={{ r: 5 }} />
              <Line type="monotone" dataKey="sessions" name="Workouts Logged" stroke="#10B981" strokeWidth={3} dot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
