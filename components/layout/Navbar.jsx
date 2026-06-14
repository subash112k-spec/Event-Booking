"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [darkMode]);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-slate-900 shadow-lg text-black dark:text-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-indigo-600"
          >
            EventBook
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/">Home</Link>
            <Link href="/events">Events</Link>
            <Link href="/bookings">Bookings</Link>
            <Link href="/profile">Profile</Link>
            <Link href="/admin">Admin</Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="px-4 py-2 rounded-lg border"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="px-4 py-2 rounded-lg bg-indigo-600 text-white"
            >
              Register
            </Link>
          </div>

          <button
  onClick={() => {
    console.log("darkMode:", darkMode);
    setDarkMode(!darkMode);
  }}
  className="border px-4 py-2 rounded-lg"
>
  {darkMode ? "☀️" : "🌙"}
</button>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 flex flex-col gap-4">
            <Link href="/">Home</Link>
            <Link href="/events">Events</Link>
            <Link href="/bookings">Bookings</Link>
            <Link href="/profile">Profile</Link>
            <Link href="/admin">Admin</Link>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </div>
        )}
      </div>
    </nav>
  );
}