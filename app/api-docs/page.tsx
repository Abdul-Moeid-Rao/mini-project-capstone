import Link from "next/link";
import { ArrowLeft, BookOpen, Key, Globe } from "lucide-react";

export default function ApiDocsPage() {
  const endpoints = [
    { method: "GET", path: "/api/exercises", desc: "List all exercises with pagination & muscle filters", auth: "Public" },
    { method: "GET", path: "/api/exercises/:slug", desc: "Fetch single exercise details & instructions", auth: "Public" },
    { method: "POST", path: "/api/workouts", desc: "Create new custom routine split", auth: "Bearer JWT" },
    { method: "GET", path: "/api/nutrition/meals", desc: "Get user logged meals for date range", auth: "Bearer JWT" },
    { method: "POST", path: "/api/calculators", desc: "Save biometric calculator results to athlete profile", auth: "Bearer JWT" },
    { method: "POST", path: "/api/analysis-sessions", desc: "Save AI Pose joint trajectory and rep count", auth: "Bearer JWT" },
    { method: "GET", path: "/api/admin/users", desc: "Query user accounts and change RBAC permissions", auth: "Admin Only" },
    { method: "POST", path: "/api/admin/content", desc: "Publish new exercise or article to platform", auth: "Admin Only" },
  ];

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <header className="mb-10">
        <Link href="/admin" className="text-blue-400 hover:underline flex items-center gap-2 mb-4 text-sm">
          <ArrowLeft className="h-4 w-4" /> Back to Admin Console
        </Link>
        <div className="flex items-center gap-3 mb-2">
          <BookOpen className="h-8 w-8 text-blue-500" />
          <h1 className="font-heading text-4xl font-bold text-white">REST API Documentation</h1>
        </div>
        <p className="text-gray-400 text-sm">
          OpenAPI / Swagger standard specification for Lift Club PK Backend Services.
        </p>
      </header>

      {/* Auth Info */}
      <div className="bg-[#1E293B] border border-white/10 rounded-2xl p-6 mb-8 space-y-2">
        <div className="flex items-center gap-2 text-white font-bold">
          <Key className="h-5 w-5 text-yellow-400" /> Authentication Specification
        </div>
        <p className="text-sm text-gray-300">
          All protected endpoints require an <code className="text-blue-400 bg-black/40 px-2 py-0.5 rounded">Authorization: Bearer &lt;session_token&gt;</code> header or an active Better Auth HTTP session cookie.
        </p>
      </div>

      {/* Endpoint Table */}
      <div className="bg-[#1E293B] border border-white/10 rounded-2xl overflow-hidden">
        <div className="p-5 border-b border-white/10 font-heading font-bold text-lg text-white">
          Available REST Endpoints
        </div>
        <div className="divide-y divide-white/5">
          {endpoints.map((ep, i) => (
            <div key={i} className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-3">
                <span
                  className={`text-xs font-mono font-extrabold px-2.5 py-1 rounded-lg ${
                    ep.method === "GET"
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                  }`}
                >
                  {ep.method}
                </span>
                <span className="font-mono text-sm font-bold text-white">{ep.path}</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-right w-full sm:w-auto justify-between sm:justify-end">
                <span className="text-gray-400">{ep.desc}</span>
                <span className="text-xs uppercase font-bold tracking-wider px-2.5 py-0.5 rounded bg-white/5 text-gray-400">
                  {ep.auth}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
