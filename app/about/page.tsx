import Link from "next/link";
import { Zap, ArrowLeft, Target, Award, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8">
        <ArrowLeft className="h-4 w-4" /> Back to Home
      </Link>

      <header className="mb-12">
        <h1 className="font-heading text-5xl font-bold mb-4">
          About <span className="text-gradient-lime">Lift Club PK</span>
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          Empowering individuals across Pakistan and beyond to master their physical potential through computer vision, automated nutrition science, and athletic programming.
        </p>
      </header>

      <div className="grid sm:grid-cols-3 gap-6 mb-16">
        {[
          { icon: Target, title: "Precision Training", desc: "AI-driven biomechanics analysis for safer, stronger reps." },
          { icon: Users,  title: "Inclusive Platform", desc: "Designed for all fitness levels, from beginners to powerlifters." },
          { icon: Award,  title: "Scientific Integrity", desc: "Evidence-based caloric formulas and USDA nutritional data." },
        ].map((item, i) => (
          <div key={i} className="glass rounded-3xl p-6 border border-white/10">
            <div className="w-12 h-12 rounded-2xl bg-[var(--lime)]/10 text-[var(--lime)] flex items-center justify-center mb-4">
              <item.icon className="h-6 w-6" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-2 text-white">{item.title}</h3>
            <p className="text-sm text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="glass rounded-3xl p-8 border border-white/10 text-center space-y-4">
        <h2 className="font-heading text-3xl font-bold">Join the Movement</h2>
        <p className="text-gray-400 max-w-xl mx-auto text-sm">
          Experience the complete fitness platform today. Start logging workouts and checking your posture with real-time AI.
        </p>
        <Link
          href="/register"
          className="inline-block bg-[var(--lime)] text-black font-bold px-8 py-3.5 rounded-full hover:bg-[var(--lime-dark)] transition-colors glow-lime text-sm"
        >
          Create Free Account
        </Link>
      </div>
    </div>
  );
}
