import Link from "next/link";
import {
  Dumbbell, Calculator, TrendingUp, Utensils,
  Activity, ShieldCheck, ArrowRight, Zap, Star
} from "lucide-react";

// ─── Animated Counter (pure CSS — works server-side) ─────────────────────────
function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="font-heading text-4xl sm:text-5xl font-extrabold text-[var(--lime)]">{value}</p>
      <p className="text-sm text-gray-400 mt-1">{label}</p>
    </div>
  );
}

const features = [
  {
    icon: Dumbbell,
    title: "Exercise Library",
    desc: "100+ exercises with instructions, muscle diagrams, and difficulty ratings.",
    href: "/app/exercises",
    color: "var(--lime)",
  },
  {
    icon: TrendingUp,
    title: "Workout Planner",
    desc: "Build custom routines, log sets & reps in real-time, and track strength gains.",
    href: "/app/workouts/planner",
    color: "var(--cyan)",
  },
  {
    icon: Utensils,
    title: "Nutrition Tracker",
    desc: "Snap a photo of your meal for AI-powered food recognition and macro tracking.",
    href: "/app/nutrition/dashboard",
    color: "#FF9B50",
  },
  {
    icon: Calculator,
    title: "Health Calculators",
    desc: "BMI, BMR, TDEE, calorie, protein, and water intake — all in one place.",
    href: "/app/calculators",
    color: "#C084FC",
  },
  {
    icon: Activity,
    title: "AI Form Analysis",
    desc: "MediaPipe pose detection analyses your exercise form live via webcam.",
    href: "/app/ai-check",
    color: "var(--neon-magenta)",
  },
  {
    icon: ShieldCheck,
    title: "Progress Tracking",
    desc: "Log body measurements and visualize trends over weeks and months.",
    href: "/app/progress",
    color: "#34D399",
  },
];

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* ─── Navbar ─────────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[var(--bg-base)]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-[var(--lime)]" />
            <span className="font-heading font-bold text-xl">
              Lift<span className="text-gradient-lime">Club</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <Link href="/app/exercises" className="hover:text-white transition-colors">Exercises</Link>
            <Link href="/app/calculators" className="hover:text-white transition-colors">Calculators</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm text-gray-300 hover:text-white transition-colors px-4 py-2">
              Log In
            </Link>
            <Link
              href="/register"
              className="text-sm font-bold bg-[var(--lime)] text-black rounded-full px-5 py-2.5 hover:bg-[var(--lime-dark)] transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* ─── Hero ───────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        {/* Glow blobs */}
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-[var(--lime)]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--cyan)]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[var(--lime)]/20 text-[var(--lime)] text-sm font-semibold mb-8 animate-fade-up">
            <Star className="h-4 w-4 fill-current" />
            Your Complete Fitness Platform
          </div>

          <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 animate-fade-up leading-none">
            Train Smarter.<br />
            <span className="text-gradient-lime">Live Stronger.</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-12 animate-fade-up">
            Exercise library, workout planner, nutrition tracking, AI form analysis,
            and health calculators — all under one roof.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 bg-[var(--lime)] text-black font-bold rounded-full px-8 py-4 text-lg hover:bg-[var(--lime-dark)] transition-colors glow-lime"
            >
              Start for Free <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/app/exercises"
              className="inline-flex items-center justify-center gap-2 glass rounded-full px-8 py-4 text-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Browse Exercises
            </Link>
          </div>

          {/* Stats row */}
          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-white/10 pt-16">
            <StatCard value="100+" label="Exercises" />
            <StatCard value="6"    label="Calculators" />
            <StatCard value="AI"   label="Form Analysis" />
            <StatCard value="Free" label="To Start" />
          </div>
        </div>
      </section>

      {/* ─── Features Grid ──────────────────────────────────────── */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
            Everything in <span className="text-gradient-lime">One Place</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Six modules, one cohesive platform. No juggling between apps.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <Link
              key={f.title}
              href={f.href}
              className="card-lift glass glass-hover rounded-3xl p-8 flex flex-col group"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${f.color}18`, color: f.color }}
              >
                <f.icon className="h-6 w-6" />
              </div>
              <h3
                className="font-heading text-xl font-bold mb-3 group-hover:transition-colors"
                style={{ color: `inherit` }}
              >
                {f.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">{f.desc}</p>
              <div
                className="mt-6 flex items-center gap-1 text-sm font-semibold"
                style={{ color: f.color }}
              >
                Explore <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── CTA Banner ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-t border-white/10 py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--lime)]/5 to-[var(--cyan)]/5" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-6">
            Ready to <span className="text-gradient-lime">Level Up</span>?
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            Join Lift Club and start tracking your fitness journey today.
          </p>
          <Link
            href="/register"
            className="inline-flex items-center gap-2 bg-[var(--lime)] text-black font-bold rounded-full px-10 py-4 text-lg hover:bg-[var(--lime-dark)] transition-colors glow-lime"
          >
            Create Free Account <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* ─── Footer ─────────────────────────────────────────────── */}
      <footer className="border-t border-white/10 py-12 px-6 max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <Zap className="h-4 w-4 text-[var(--lime)]" />
          <span className="font-heading font-bold text-white">LiftClub</span>
        </div>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
        <p>© 2026 Lift Club PK. All rights reserved.</p>
      </footer>
    </div>
  );
}
