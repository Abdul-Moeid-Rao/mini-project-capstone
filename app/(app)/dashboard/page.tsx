import type { Metadata } from "next";
import { Dumbbell, TrendingUp, Utensils, Activity, ClipboardList, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = { title: "Dashboard" };

const quickLinks = [
  { label: "Start Workout",      href: "/app/workouts/planner",    icon: Dumbbell,      color: "var(--lime)" },
  { label: "Log a Meal",         href: "/app/nutrition/add-meal",  icon: Utensils,      color: "#FF9B50" },
  { label: "View Progress",      href: "/app/progress",            icon: TrendingUp,    color: "var(--cyan)" },
  { label: "AI Form Check",      href: "/app/ai-check",            icon: Activity,      color: "var(--neon-magenta)" },
];

export default function DashboardPage() {
  return (
    <div className="max-w-5xl">
      {/* Header */}
      <header className="mb-10">
        <h1 className="font-heading text-4xl font-bold mb-2">
          Good morning! 👋
        </h1>
        <p className="text-gray-400">Here&apos;s your fitness overview for today.</p>
      </header>

      {/* KPI Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {[
          { label: "Workouts This Week", value: "3",    color: "var(--lime)" },
          { label: "Calories Today",     value: "1,840", color: "#FF9B50" },
          { label: "Avg Form Score",     value: "87%",  color: "var(--cyan)" },
          { label: "Days Streak",        value: "7",    color: "#C084FC" },
        ].map((s) => (
          <div key={s.label} className="glass rounded-2xl p-5 border-t-2" style={{ borderTopColor: s.color }}>
            <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-2">{s.label}</p>
            <p className="font-heading text-3xl font-bold" style={{ color: s.color }}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Quick Links */}
      <section className="mb-10">
        <h2 className="font-heading text-xl font-bold mb-4">Quick Actions</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickLinks.map((q) => (
            <Link
              key={q.label}
              href={q.href}
              className="glass glass-hover rounded-2xl p-5 flex items-center gap-4 group transition-all"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${q.color}18`, color: q.color }}>
                <q.icon className="h-5 w-5" />
              </div>
              <span className="font-medium text-sm group-hover:text-white transition-colors">{q.label}</span>
              <ArrowRight className="h-4 w-4 ml-auto text-gray-600 group-hover:text-white transition-colors" />
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Activity */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-heading text-xl font-bold">Recent Activity</h2>
          <Link href="/app/workouts/history" className="text-sm text-[var(--lime)] hover:underline">View all</Link>
        </div>
        <div className="glass rounded-2xl overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-white/5 text-gray-400 text-xs uppercase tracking-wide">
                <th className="px-5 py-3">Type</th>
                <th className="px-5 py-3">Detail</th>
                <th className="px-5 py-3">Date</th>
                <th className="px-5 py-3 text-right">Score / Reps</th>
              </tr>
            </thead>
            <tbody>
              {[
                { type: "Workout",   detail: "Upper Body Push",  date: "Today",    stat: "4 exercises" },
                { type: "Nutrition", detail: "1,840 kcal",        date: "Today",    stat: "156g protein" },
                { type: "AI Check",  detail: "Barbell Squat",    date: "Yesterday",stat: "87% score" },
                { type: "Workout",   detail: "Lower Body Pull",  date: "Aug 13",   stat: "5 exercises" },
              ].map((row, i) => (
                <tr key={i} className="border-t border-white/5 hover:bg-white/5 transition-colors">
                  <td className="px-5 py-3.5">
                    <span className={`px-2 py-0.5 rounded-md text-xs font-bold ${
                      row.type === "Workout"   ? "bg-[var(--lime)]/10 text-[var(--lime)]" :
                      row.type === "Nutrition" ? "bg-orange-500/10 text-orange-400" :
                                                 "bg-[var(--cyan)]/10 text-[var(--cyan)]"
                    }`}>{row.type}</span>
                  </td>
                  <td className="px-5 py-3.5 text-gray-200">{row.detail}</td>
                  <td className="px-5 py-3.5 text-gray-400">{row.date}</td>
                  <td className="px-5 py-3.5 text-right text-gray-300">{row.stat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
