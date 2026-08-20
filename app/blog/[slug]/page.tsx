import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <article className="max-w-3xl mx-auto py-16 px-6">
      <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8">
        <ArrowLeft className="h-4 w-4" /> Back to Articles
      </Link>

      <header className="mb-10 space-y-4">
        <span className="text-xs uppercase font-bold text-[var(--lime)] bg-[var(--lime)]/10 px-3 py-1 rounded-full">
          Featured Guide
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white leading-tight">
          {title}
        </h1>
        <div className="flex items-center gap-4 text-xs text-gray-400 border-b border-white/10 pb-6">
          <span className="flex items-center gap-1.5"><User className="h-3.5 w-3.5" /> Lift Club Coaching Team</span>
          <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> August 2026</span>
          <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> 5 min read</span>
        </div>
      </header>

      <div className="space-y-6 text-gray-300 leading-relaxed text-base">
        <p className="text-lg text-white font-medium">
          Whether your goal is maximal powerlifting strength or aesthetic muscle hypertrophy, progressive overload remains the foundational law of resistance training adaptation.
        </p>
        <h2 className="font-heading text-2xl font-bold text-white pt-4">1. Mechanical Tension & Load Progression</h2>
        <p>
          Muscles respond to mechanical tension placed across the sarcomeres. Adding weight to the bar is the most direct way to increase this stimulus, provided technique and range of motion remain uncompromised.
        </p>
        <h2 className="font-heading text-2xl font-bold text-white pt-4">2. Repetition & Volume Accumulation</h2>
        <p>
          If adding load is not possible in a given microcycle, progressing from 8 reps to 10 reps with the identical load represents a statistically significant volume jump of 25%.
        </p>
        <h2 className="font-heading text-2xl font-bold text-white pt-4">3. Rate of Perceived Exertion (RPE)</h2>
        <p>
          Utilize RPE ratings to autoregulate volume. Pushing every single set to absolute muscular failure frequently generates systemic neural fatigue that impairs subsequent training days.
        </p>
      </div>
    </article>
  );
}
