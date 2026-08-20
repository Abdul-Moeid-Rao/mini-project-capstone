"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8">
        <ArrowLeft className="h-4 w-4" /> Back to Home
      </Link>

      <header className="mb-10">
        <h1 className="font-heading text-5xl font-bold mb-3">
          Get in <span className="text-gradient-lime">Touch</span>
        </h1>
        <p className="text-gray-400 text-base">
          Have inquiries regarding coaching, enterprise memberships, or AI model accuracy? Send us a message.
        </p>
      </header>

      {sent ? (
        <div className="glass rounded-3xl p-12 text-center border border-[var(--lime)]/30 space-y-4">
          <CheckCircle2 className="h-16 w-16 text-[var(--lime)] mx-auto" />
          <h2 className="font-heading text-3xl font-bold text-white">Message Delivered!</h2>
          <p className="text-gray-300 text-sm max-w-md mx-auto">
            Thank you for reaching out to Lift Club PK. Our team will get back to you within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 border border-white/10 space-y-5">
          <div>
            <label className="block text-xs uppercase text-gray-400 font-bold mb-1.5">Your Name</label>
            <input
              type="text" required value={name} onChange={(e) => setName(e.target.value)}
              placeholder="Alex Johnson"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--lime)]"
            />
          </div>
          <div>
            <label className="block text-xs uppercase text-gray-400 font-bold mb-1.5">Email Address</label>
            <input
              type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="alex@example.com"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--lime)]"
            />
          </div>
          <div>
            <label className="block text-xs uppercase text-gray-400 font-bold mb-1.5">Message</label>
            <textarea
              rows={5} required value={message} onChange={(e) => setMessage(e.target.value)}
              placeholder="How can we assist your athletic journey?..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--lime)]"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[var(--lime)] text-black font-bold py-3.5 rounded-xl hover:bg-[var(--lime-dark)] transition-colors flex items-center justify-center gap-2 glow-lime"
          >
            <Send className="h-4 w-4" /> Send Message
          </button>
        </form>
      )}
    </div>
  );
}
