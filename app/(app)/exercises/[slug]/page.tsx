import Link from "next/link";
import { ArrowLeft, Dumbbell, Target, CheckCircle2, Play } from "lucide-react";

export default async function ExerciseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const name = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <div className="max-w-4xl">
      <header className="mb-8">
        <Link
          href="/app/exercises"
          className="text-gray-400 hover:text-white flex items-center gap-2 mb-4 text-sm"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Exercise Library
        </Link>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="font-heading text-4xl font-bold mb-1 text-white">{name}</h1>
            <p className="text-gray-400 text-sm">Compound Strength Movement · Barbell</p>
          </div>
          <Link
            href={`/app/ai-check/${slug}`}
            className="bg-[var(--lime)] text-black font-bold px-6 py-3 rounded-full text-sm hover:bg-[var(--lime-dark)] transition-colors flex items-center gap-2 shadow-lg glow-lime"
          >
            <Play className="h-4 w-4 fill-black" /> Run AI Form Check
          </Link>
        </div>
      </header>

      {/* Media & Anatomy */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="glass rounded-3xl p-8 flex flex-col items-center justify-center min-h-[260px] border border-white/10 text-center">
          <div className="text-6xl mb-4">🏋️</div>
          <p className="font-heading font-semibold text-white">Movement Visual Demo</p>
          <p className="text-xs text-gray-500 mt-1">High-definition technique execution</p>
        </div>

        <div className="glass rounded-3xl p-6 sm:p-8 border border-white/10 space-y-4">
          <h2 className="font-heading text-xl font-bold">Target Anatomy</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between p-2.5 rounded-xl bg-white/5">
              <span className="text-gray-400">Primary Muscle</span>
              <span className="font-bold text-[var(--lime)]">Quadriceps, Gluteus Maximus</span>
            </div>
            <div className="flex justify-between p-2.5 rounded-xl bg-white/5">
              <span className="text-gray-400">Secondary Muscles</span>
              <span className="font-bold text-[var(--cyan)]">Hamstrings, Core, Erectors</span>
            </div>
            <div className="flex justify-between p-2.5 rounded-xl bg-white/5">
              <span className="text-gray-400">Difficulty Rating</span>
              <span className="font-bold text-yellow-400">Intermediate</span>
            </div>
            <div className="flex justify-between p-2.5 rounded-xl bg-white/5">
              <span className="text-gray-400">Force Type</span>
              <span className="font-bold text-white">Push (Bilateral)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Step-by-Step Instructions */}
      <div className="glass rounded-3xl p-6 sm:p-8 border border-white/10 mb-8">
        <h2 className="font-heading text-2xl font-bold mb-6">Step-by-Step Execution</h2>
        <div className="space-y-4">
          {[
            { step: 1, title: "Setup & Unrack", text: "Place the barbell securely on your upper traps. Grip firmly and unrack with a tight brace." },
            { step: 2, title: "Descent Phase", text: "Hinge at the hips and bend knees simultaneously. Keep chest elevated and spine neutral." },
            { step: 3, title: "Depth & Reversal", text: "Descend until your hip crease breaks below the top of your knee cap (parallel depth)." },
            { step: 4, title: "Ascent Phase", text: "Drive through mid-foot, extending hips and knees simultaneously back to lockout." },
          ].map((s) => (
            <div key={s.step} className="flex gap-4 items-start p-4 rounded-2xl bg-white/5">
              <span className="w-8 h-8 rounded-xl bg-[var(--lime)]/20 text-[var(--lime)] font-bold text-sm flex items-center justify-center flex-shrink-0">
                {s.step}
              </span>
              <div>
                <h3 className="font-heading font-semibold text-white mb-1">{s.title}</h3>
                <p className="text-sm text-gray-400">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
