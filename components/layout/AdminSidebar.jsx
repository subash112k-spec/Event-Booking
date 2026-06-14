"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function AdminSidebar() {
    const pathname = usePathname();
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-8">
        Admin Panel
      </h2>

      <nav className="flex flex-col gap-4">
        <Link href="/admin"  className={`p-3 rounded-lg ${
    pathname === "/admin"
      ? "bg-indigo-600 text-white"
      : "hover:bg-slate-800"
  }`}>Dashboard</Link>

        <Link href="/admin/events" className={`p-3 rounded-lg ${
    pathname === "/admin/events"
      ? "bg-indigo-600 text-white"
      : "hover:bg-slate-800"
  }`}>
          Manage Events
        </Link>

        <Link href="/admin/create-event" className={`p-3 rounded-lg ${
    pathname === "/admin/create-event"
      ? "bg-indigo-600 text-white"
      : "hover:bg-slate-800"
  }`}>
          Create Event
        </Link>
      </nav>
    </aside>
  );
}