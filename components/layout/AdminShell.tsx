"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "@/lib/auth-client";
import {
  ShieldAlert,
  Users,
  FileText,
  BarChart3,
  BookOpen,
  ArrowLeft,
  LogOut,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const adminNav = [
  { href: "/admin",          label: "Dashboard",       icon: BarChart3 },
  { href: "/admin/users",    label: "User Management", icon: Users },
  { href: "/admin/content",  label: "Content CMS",     icon: FileText },
  { href: "/admin/reports",  label: "System Analytics",icon: BarChart3 },
  { href: "/api-docs",       label: "REST API Docs",   icon: BookOpen },
];

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/login");
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#0A0E17]">
      {/* Admin Sidebar */}
      <aside className="w-64 flex-shrink-0 flex flex-col bg-[#0F172A] border-r border-white/10">
        <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldAlert className="h-6 w-6 text-blue-500" />
            <span className="font-heading font-bold text-base text-white">
              Admin<span className="text-blue-500">Panel</span>
            </span>
          </div>
          <span className="text-[10px] uppercase font-bold tracking-widest bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded">
            SuperAdmin
          </span>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {adminNav.map((item) => {
            const active = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all",
                  active
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-3 border-t border-white/10 space-y-1">
          <Link
            href="/app/dashboard"
            className="flex items-center gap-3 px-4 py-2 rounded-xl text-xs text-gray-400 hover:text-white hover:bg-white/5 transition-all"
          >
            <ArrowLeft className="h-4 w-4" /> Return to User App
          </Link>
          <button
            onClick={handleSignOut}
            className="w-full flex items-center gap-3 px-4 py-2 rounded-xl text-xs text-red-400 hover:bg-red-500/10 transition-all"
          >
            <LogOut className="h-4 w-4" /> Admin Logout
          </button>
        </div>
      </aside>

      {/* Main Admin Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-14 border-b border-white/10 flex items-center justify-between px-8 bg-[#0F172A]/80 backdrop-blur-sm">
          <p className="text-xs uppercase font-bold tracking-wider text-gray-400">
            LIFT CLUB PK — Central Management Console
          </p>
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-ping" />
            <span className="text-xs font-semibold text-gray-300">Database Live (Neon Serverless)</span>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8">{children}</main>
      </div>
    </div>
  );
}
