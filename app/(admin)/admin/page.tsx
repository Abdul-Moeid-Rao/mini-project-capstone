import Link from "next/link";
import { Users, Dumbbell, Activity, ShieldCheck, ArrowUpRight, TrendingUp } from "lucide-react";

export default function AdminDashboardPage() {
  const kpis = [
    { label: "Total Registered Users", value: "1,420", growth: "+14% this month", icon: Users, color: "#3B82F6" },
    { label: "Active Training Sessions", value: "348", growth: "+22% this week", icon: Dumbbell, color: "#10B981" },
    { label: "AI Posture Checks Ran", value: "8,920", growth: "+45% this month", icon: Activity, color: "#8B5CF6" },
    { label: "Database Health", value: "99.9%", growth: "0 downtime", icon: ShieldCheck, color: "#F59E0B" },
  ];

  return (
    <div className="max-w-6xl space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold text-white mb-1">
          System Overview & Metrics
        </h1>
        <p className="text-sm text-gray-400">
          Real-time metrics, active user distribution, and server health.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((k) => (
          <div key={k.label} className="bg-[#1E293B] border border-white/10 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase text-gray-400 font-bold">{k.label}</span>
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${k.color}20`, color: k.color }}
              >
                <k.icon className="h-4 w-4" />
              </div>
            </div>
            <p className="font-heading text-3xl font-extrabold text-white">{k.value}</p>
            <p className="text-xs text-green-400 flex items-center gap-1 mt-2">
              <TrendingUp className="h-3 w-3" /> {k.growth}
            </p>
          </div>
        ))}
      </div>

      {/* Recent System Audit Log */}
      <div className="bg-[#1E293B] border border-white/10 rounded-2xl overflow-hidden">
        <div className="p-5 border-b border-white/10 flex items-center justify-between">
          <h2 className="font-heading font-bold text-lg text-white">Recent Security & Audit Logs</h2>
          <span className="text-xs bg-blue-500/10 text-blue-400 font-bold px-2.5 py-1 rounded-full">
            Real-time Feed
          </span>
        </div>
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-white/5 text-gray-400 text-xs uppercase tracking-wide">
              <th className="px-5 py-3">Timestamp</th>
              <th className="px-5 py-3">User</th>
              <th className="px-5 py-3">Action</th>
              <th className="px-5 py-3">Entity</th>
              <th className="px-5 py-3 text-right">Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              { time: "Just now", user: "alex@liftclub.com", action: "AUTH_LOGIN", entity: "Session::JWT", status: "SUCCESS" },
              { time: "2m ago", user: "trainer.dan@liftclub.com", action: "WORKOUT_CREATE", entity: "WorkoutPlan::LegDay", status: "SUCCESS" },
              { time: "15m ago", user: "user94@gmail.com", action: "AI_SESSION_RUN", entity: "MediaPipe::Squat", status: "SUCCESS" },
              { time: "1h ago", user: "admin@liftclub.com", action: "ROLE_CHANGE", entity: "User::ID_882 -> TRAINER", status: "COMPLETED" },
            ].map((row, i) => (
              <tr key={i} className="border-t border-white/5 hover:bg-white/5 transition-colors">
                <td className="px-5 py-3.5 text-xs text-gray-400 font-mono">{row.time}</td>
                <td className="px-5 py-3.5 font-medium text-white">{row.user}</td>
                <td className="px-5 py-3.5 text-xs text-blue-400 font-mono">{row.action}</td>
                <td className="px-5 py-3.5 text-xs text-gray-300 font-mono">{row.entity}</td>
                <td className="px-5 py-3.5 text-right">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-green-500/20 text-green-400">
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
