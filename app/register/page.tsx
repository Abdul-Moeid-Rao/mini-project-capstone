"use client";

import { useState } from "react";
import { signUp } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Zap, Loader2 } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { error } = await signUp.email({ name, email, password });
    if (error) {
      setError(error.message || "Registration failed. Please try again.");
      setLoading(false);
    } else {
      router.push("/app/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--cyan)]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="glass rounded-3xl p-10 w-full max-w-md z-10 relative">
        <Link href="/" className="flex items-center gap-2 mb-10 justify-center">
          <Zap className="h-6 w-6 text-[var(--lime)]" />
          <span className="font-heading font-bold text-xl">
            Lift<span className="text-gradient-lime">Club</span>
          </span>
        </Link>

        <h1 className="font-heading text-3xl font-bold text-center mb-2">Create Account</h1>
        <p className="text-center text-gray-400 text-sm mb-8">Join Lift Club and start your journey today</p>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm p-3 rounded-xl mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">Full Name</label>
            <input
              type="text" required value={name} onChange={(e) => setName(e.target.value)}
              placeholder="Alex Johnson"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[var(--cyan)] transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">Email</label>
            <input
              type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[var(--cyan)] transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">Password</label>
            <input
              type="password" required value={password} onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[var(--cyan)] transition-colors"
            />
          </div>
          <button
            type="submit" disabled={loading}
            className="w-full bg-[var(--lime)] text-black font-bold rounded-xl py-3.5 hover:bg-[var(--lime-dark)] transition-colors flex items-center justify-center mt-2"
          >
            {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Create Account"}
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-8">
          Already have an account?{" "}
          <Link href="/login" className="text-[var(--lime)] hover:underline font-medium">Log in</Link>
        </p>
      </div>
    </div>
  );
}
