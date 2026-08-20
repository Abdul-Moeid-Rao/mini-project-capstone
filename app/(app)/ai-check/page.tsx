import Link from "next/link";
import { Activity, Dumbbell, ShieldCheck, Play, Sparkles } from "lucide-react";

const aiExercises = [
  {
    id: "squat",
    name: "Barbell Squat",
    description: "Tracks hip, knee, and ankle joint angles to ensure parallel depth and prevent back rounding.",
    difficulty: "Intermediate",
    accent: "var(--lime)",
    badge: "Computer Vision 3D",
  },
  {
    id: "pushup",
    name: "Push-Up",
    description: "Monitors core engagement, elbow flare angle, and full chest depth to lock-out repetition cadence.",
    difficulty: "Beginner",
    accent: "var(--cyan)",
    badge: "Auto Rep Counter",
  },
  {
    id: "deadlift",
    name: "Barbell Deadlift",
    description: "Analyzes spinal curvature and hip hinge angle to ensure safe, powerful pulling mechanics.",
    difficulty: "Advanced",
    accent: "var(--neon-magenta)",
    badge: "Spine Safety Check",
  },
];

export default function AICheckPage() {
  return (
    <div className="max-w-5xl">
      <header className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-[var(--cyan)]/30 text-[var(--cyan)] text-xs font-bold mb-3">
          <Sparkles className="h-3.5 w-3.5" /> MediaPipe Tasks Vision (Client-Side)
        </div>
        <h1 className="font-heading text-4xl font-bold mb-1">
          AI Form <span className="text-gradient-cyan">Analysis</span>
        </h1>
        <p className="text-gray-400 text-sm max-w-xl">
          Select an exercise for live webcam posture assessment. Our client-side neural network evaluates joint mechanics in real-time.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        {aiExercises.map((ex) => (
          <div
            key={ex.id}
            className="card-lift glass rounded-3xl p-6 flex flex-col justify-between border border-white/10"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${ex.accent}15`, color: ex.accent }}
                >
                  <Activity className="h-6 w-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 text-gray-400">
                  {ex.difficulty}
                </span>
              </div>

              <h3 className="font-heading text-2xl font-bold mb-2 text-white">{ex.name}</h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-6">{ex.description}</p>
            </div>

            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold mb-4" style={{ color: ex.accent }}>
                <ShieldCheck className="h-4 w-4" /> {ex.badge}
              </div>
              <Link
                href={`/app/ai-check/${ex.id}`}
                className="w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-transform hover:scale-105"
                style={{ backgroundColor: ex.accent, color: "#000" }}
              >
                <Play className="h-4 w-4 fill-black" /> Start Live Check
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
