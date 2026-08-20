import Link from "next/link";
import { ArrowLeft, HelpCircle } from "lucide-react";

const faqs = [
  { q: "How does the AI Form Analysis work?", a: "We run Google's MediaPipe Tasks Vision SDK entirely client-side in your web browser. It extracts 33 3D body landmarks at 60 FPS without sending any video footage to our servers." },
  { q: "Is Lift Club free to use?", a: "Yes! All health calculators, workout planner routines, and standard exercise databases are completely free." },
  { q: "How are caloric targets computed?", a: "We utilize the gold-standard Mifflin-St Jeor equation to calculate Basal Metabolic Rate (BMR), adjusted for activity multipliers." },
  { q: "Is my personal biometric data private?", a: "Absolutely. All health metrics, body weight, and exercise sets are stored securely in encrypted PostgreSQL relational tables." },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8">
        <ArrowLeft className="h-4 w-4" /> Back to Home
      </Link>
      <header className="mb-10">
        <h1 className="font-heading text-5xl font-bold mb-3">
          Frequently Asked <span className="text-gradient-lime">Questions</span>
        </h1>
        <p className="text-gray-400 text-base">Answers regarding our technology stack and fitness methodology.</p>
      </header>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="glass rounded-2xl p-6 border border-white/10 space-y-2">
            <h3 className="font-heading font-bold text-lg text-white flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-[var(--lime)] flex-shrink-0" />
              {faq.q}
            </h3>
            <p className="text-sm text-gray-300 pl-7 leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
