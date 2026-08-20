import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Lift Club — Complete Fitness Platform",
    template: "%s | Lift Club",
  },
  description:
    "Your complete fitness companion: exercise library, workout planner, nutrition tracker, AI form analysis, health calculators, and progress tracking — all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} h-full antialiased dark`}
    >
      <body className="min-h-full bg-[var(--bg-base)] text-white">
        {children}
      </body>
    </html>
  );
}

