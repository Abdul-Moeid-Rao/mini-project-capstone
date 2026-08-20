import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8">
        <ArrowLeft className="h-4 w-4" /> Back to Home
      </Link>
      <h1 className="font-heading text-4xl font-bold mb-6">Privacy Policy</h1>
      <div className="space-y-4 text-gray-300 text-sm leading-relaxed glass rounded-3xl p-8 border border-white/10">
        <p><strong>1. Data Collection:</strong> Lift Club PK collects athlete account data (email, name) and logged biometrics solely for displaying personal progress charts and calculators.</p>
        <p><strong>2. Camera Feed & Computer Vision:</strong> All pose detection and meal recognition tasks run locally in client memory via browser WebAssembly/WebGL. No video feeds or camera images are ever recorded or streamed to remote servers.</p>
        <p><strong>3. Third-Party Sharing:</strong> We do not sell, rent, or trade athlete metrics with any external marketing parties.</p>
      </div>
    </div>
  );
}
