import Link from "next/link";
import { ArrowLeft, Sparkles, AlertCircle, CheckCircle2, Lightbulb } from "lucide-react";

const recommendations = [
  {
    type: "protein",
    icon: Sparkles,
    color: "var(--cyan)",
    title: "Post-Workout Protein Window",
    desc: "You consistently log workouts between 5:00 PM and 6:30 PM, but delay dinner until 8:30 PM. Consuming 25-30g protein within 45 minutes of training will enhance muscle protein synthesis.",
    status: "Actionable",
  },
  {
    type: "hydration",
    icon: Lightbulb,
    color: "#38BDF8",
    title: "Hydration on Heavy Lifting Days",
    desc: "Your water intake averages 2.2L on squat/deadlift days versus 3.5L recommendation. Dehydration of just 2% body mass reduces strength output by up to 10%.",
    status: "Health Tip",
  },
  {
    type: "calories",
    icon: CheckCircle2,
    color: "var(--lime)",
    title: "Consistent Calorie Deficit Maintained",
    desc: "Great job! You have hit within 50 kcal of your 2,400 kcal target for 5 consecutive days. This rate supports steady lean mass preservation.",
    status: "On Track",
  },
];

export default function NutritionRecommendationsPage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-8">
        <Link
          href="/app/nutrition/dashboard"
          className="text-gray-400 hover:text-white flex items-center gap-2 mb-4 text-sm"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Nutrition Dashboard
        </Link>
        <h1 className="font-heading text-4xl font-bold mb-1">
          Smart <span className="text-gradient-lime">Recommendations</span>
        </h1>
        <p className="text-gray-400 text-sm">
          Personalized, rule-based dietary insights derived from your weekly logging trends.
        </p>
      </header>

      <div className="space-y-4">
        {recommendations.map((r, i) => (
          <div
            key={i}
            className="glass rounded-2xl p-6 border-l-4 flex flex-col sm:flex-row gap-5 items-start"
            style={{ borderLeftColor: r.color }}
          >
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${r.color}15`, color: r.color }}
            >
              <r.icon className="h-6 w-6" />
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-heading font-bold text-lg text-white">{r.title}</h3>
                <span
                  className="text-xs font-bold uppercase tracking-wider px-3 py-0.5 rounded-full"
                  style={{ backgroundColor: `${r.color}20`, color: r.color }}
                >
                  {r.status}
                </span>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
