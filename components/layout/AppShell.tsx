"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import {
  LayoutDashboard, Dumbbell, ClipboardList, Utensils,
  Calculator, TrendingUp, Activity, User, LogOut, Zap, Menu, X,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/app/dashboard",            label: "Dashboard",      icon: LayoutDashboard },
  { href: "/app/exercises",            label: "Exercises",      icon: Dumbbell },
  { href: "/app/workouts/planner",     label: "Workouts",       icon: ClipboardList },
  { href: "/app/nutrition/dashboard",  label: "Nutrition",      icon: Utensils },
  { href: "/app/calculators",          label: "Calculators",    icon: Calculator },
  { href: "/app/progress",             label: "Progress",       icon: TrendingUp },
  { href: "/app/ai-check",             label: "AI Form Check",  icon: Activity },
  { href: "/app/profile",              label: "Profile",        icon: User },
];

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    router.push("/login");
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-white/8 flex items-center gap-2">
        <Zap className="h-5 w-5 text-[var(--lime)]" />
        <span className="font-heading font-bold text-lg">
          Lift<span className="text-gradient-lime">Club</span>
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const active = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all",
                active
                  ? "bg-[var(--lime)]/10 text-[var(--lime)] border border-[var(--lime)]/20"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              )}
            >
              <item.icon className="h-4 w-4 flex-shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Sign out */}
      <div className="px-3 py-4 border-t border-white/8">
        <button
          onClick={handleSignOut}
          className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-gray-400 hover:text-red-400 hover:bg-red-500/5 transition-all"
        >
          <LogOut className="h-4 w-4" /> Sign Out
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen overflow-hidden bg-[var(--bg-base)]">
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex w-60 flex-shrink-0 flex-col glass border-r border-white/8">
        <SidebarContent />
      </aside>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="relative z-10 w-64 bg-[var(--bg-base)] border-r border-white/10 flex flex-col">
            <SidebarContent />
          </aside>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="h-14 border-b border-white/8 flex items-center justify-between px-6 bg-[var(--bg-base)]/80 backdrop-blur-sm flex-shrink-0">
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="lg:hidden flex items-center gap-2">
            <Zap className="h-5 w-5 text-[var(--lime)]" />
            <span className="font-heading font-bold">LiftClub</span>
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <Link
              href="/app/profile"
              className="w-8 h-8 rounded-full bg-[var(--lime)]/20 flex items-center justify-center text-[var(--lime)] hover:bg-[var(--lime)]/30 transition-colors"
            >
              <User className="h-4 w-4" />
            </Link>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
