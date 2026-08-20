"use client";

import { useState } from "react";
import { Search, UserCheck, Shield, Trash2, MoreVertical, Plus } from "lucide-react";

interface UserItem {
  id: string;
  name: string;
  email: string;
  role: "USER" | "TRAINER" | "ADMIN";
  status: "Active" | "Suspended";
  joined: string;
}

const sampleUsers: UserItem[] = [
  { id: "1", name: "Alex Johnson", email: "alex@liftclub.com", role: "ADMIN", status: "Active", joined: "May 10, 2026" },
  { id: "2", name: "Daniel Smith", email: "trainer.dan@liftclub.com", role: "TRAINER", status: "Active", joined: "Jun 02, 2026" },
  { id: "3", name: "Sarah Connor", email: "sarah.c@gym.com", role: "USER", status: "Active", joined: "Jul 15, 2026" },
  { id: "4", name: "Marcus Brody", email: "marcus99@yahoo.com", role: "USER", status: "Suspended", joined: "Aug 01, 2026" },
];

export default function AdminUsersPage() {
  const [users, setUsers] = useState<UserItem[]>(sampleUsers);
  const [search, setSearch] = useState("");

  const toggleStatus = (id: string) => {
    setUsers(
      users.map((u) =>
        u.id === id ? { ...u, status: u.status === "Active" ? "Suspended" : "Active" } : u
      )
    );
  };

  const changeRole = (id: string, newRole: "USER" | "TRAINER" | "ADMIN") => {
    setUsers(users.map((u) => (u.id === id ? { ...u, role: newRole } : u)));
  };

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold text-white mb-1">User Management</h1>
          <p className="text-sm text-gray-400">Search, manage RBAC roles, and regulate athlete accounts.</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by user name or email address..."
          className="w-full bg-[#1E293B] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Users DataTable */}
      <div className="bg-[#1E293B] border border-white/10 rounded-2xl overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-white/5 text-gray-400 text-xs uppercase tracking-wide">
              <th className="px-5 py-3.5">User</th>
              <th className="px-5 py-3.5">Assigned Role</th>
              <th className="px-5 py-3.5">Account Status</th>
              <th className="px-5 py-3.5">Joined Date</th>
              <th className="px-5 py-3.5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((u) => (
              <tr key={u.id} className="border-t border-white/5 hover:bg-white/5 transition-colors">
                <td className="px-5 py-4">
                  <p className="font-bold text-white">{u.name}</p>
                  <p className="text-xs text-gray-400">{u.email}</p>
                </td>
                <td className="px-5 py-4">
                  <select
                    value={u.role}
                    onChange={(e) => changeRole(u.id, e.target.value as "USER" | "TRAINER" | "ADMIN")}
                    className="bg-black/30 border border-white/10 rounded-lg px-2.5 py-1 text-xs font-bold text-blue-400 focus:outline-none"
                  >
                    <option value="USER" className="bg-gray-900 text-white">USER</option>
                    <option value="TRAINER" className="bg-gray-900 text-white">TRAINER</option>
                    <option value="ADMIN" className="bg-gray-900 text-white">ADMIN</option>
                  </select>
                </td>
                <td className="px-5 py-4">
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                      u.status === "Active"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {u.status}
                  </span>
                </td>
                <td className="px-5 py-4 text-xs text-gray-400">{u.joined}</td>
                <td className="px-5 py-4 text-right">
                  <button
                    onClick={() => toggleStatus(u.id)}
                    className="text-xs text-gray-300 hover:text-white px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    {u.status === "Active" ? "Suspend" : "Reactivate"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
