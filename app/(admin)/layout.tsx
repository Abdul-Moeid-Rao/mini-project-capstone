import AdminShell from "@/components/layout/AdminShell";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Admin Portal" };

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <AdminShell>{children}</AdminShell>;
}
