import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8">
        <ArrowLeft className="h-4 w-4" /> Back to Home
      </Link>
      <h1 className="font-heading text-4xl font-bold mb-6">Terms of Service</h1>
      <div className="space-y-4 text-gray-300 text-sm leading-relaxed glass rounded-3xl p-8 border border-white/10">
        <p><strong>1. Health & Medical Disclaimer:</strong> Lift Club PK provides algorithmic fitness analytics and computer-vision posture estimations for informational purposes only. Consult a physician before starting any strenuous exercise program.</p>
        <p><strong>2. User Conduct:</strong> Users agree not to misuse platform APIs or upload malicious content.</p>
        <p><strong>3. Intellectual Property:</strong> All software architecture, branding, and interactive calculators are proprietary to Lift Club PK.</p>
      </div>
    </div>
  );
}
