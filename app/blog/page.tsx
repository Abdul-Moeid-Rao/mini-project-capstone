import Link from "next/link";
import { ArrowLeft, BookOpen, Clock, ArrowRight } from "lucide-react";

const articles = [
  {
    slug: "progressive-overload-principles",
    title: "The Ultimate Guide to Progressive Overload",
    excerpt: "Why micro-loading, rep incrementation, and tempo variation are the core engines of long-term hypertrophy.",
    readTime: "5 min read",
    category: "Training",
    date: "Aug 12, 2026",
  },
  {
    slug: "protein-timing-and-synthesis",
    title: "Protein Timing: Debunking the 30-Minute Window",
    excerpt: "What modern exercise physiology actually says about total daily intake versus immediate post-workout consumption.",
    readTime: "7 min read",
    category: "Nutrition",
    date: "Aug 08, 2026",
  },
  {
    slug: "sleep-and-athletic-recovery",
    title: "Optimizing Deep Sleep for Maximum Testosterone & Growth Hormone",
    excerpt: "How sleep hygiene, magnesium supplementation, and circadian rhythm alignment accelerate muscle repair.",
    readTime: "4 min read",
    category: "Recovery",
    date: "Aug 02, 2026",
  },
];

export default function BlogListingPage() {
  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8">
        <ArrowLeft className="h-4 w-4" /> Back to Home
      </Link>

      <header className="mb-12">
        <h1 className="font-heading text-5xl font-bold mb-4">
          Fitness & Nutrition <span className="text-gradient-lime">Articles</span>
        </h1>
        <p className="text-gray-400 text-base">
          Evidence-based guides written by professional athletic coaches and sports nutritionists.
        </p>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((art) => (
          <Link
            key={art.slug}
            href={`/blog/${art.slug}`}
            className="card-lift glass rounded-3xl p-6 flex flex-col justify-between border border-white/10 group"
          >
            <div>
              <div className="flex justify-between items-center mb-4 text-xs font-bold">
                <span className="text-[var(--lime)] bg-[var(--lime)]/10 px-2.5 py-1 rounded-full uppercase">
                  {art.category}
                </span>
                <span className="text-gray-500 flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {art.readTime}
                </span>
              </div>
              <h2 className="font-heading font-bold text-xl text-white group-hover:text-[var(--lime)] transition-colors mb-3">
                {art.title}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{art.excerpt}</p>
            </div>

            <div className="flex items-center justify-between text-xs font-semibold text-gray-400 border-t border-white/5 pt-4">
              <span>{art.date}</span>
              <span className="text-[var(--lime)] flex items-center gap-1">
                Read Article <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
