"use client";

import "./globals.css";
import { useState } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <html lang="en">
      <body className="w-full overflow-x-hidden">

        {/* NAVBAR */}
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#F6FAFD]/80 backdrop-blur-md border-b border-[#B3CFE5]">

          <div className="flex items-center justify-between px-6 md:px-8 py-4">

            {/* LOGO */}
            <div className="flex items-center gap-3 font-semibold text-[#0A1931]">
              <img src="/logo.png" className="h-8" />
              Verityx
            </div>

            {/* DESKTOP LINKS */}
            <div className="hidden md:flex gap-6 text-sm text-[#0A1931]">
              <a href="/" className="hover:text-[#4A7FA7]">Home</a>
              <a href="/services" className="hover:text-[#4A7FA7]">Services</a>
              <a href="/team" className="hover:text-[#4A7FA7]">Team</a>
              <a href="/testimonials" className="hover:text-[#4A7FA7]">Testimonials</a>
              <a href="/contact" className="hover:text-[#4A7FA7]">Contact</a>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-3xl text-[#0A1931]"
            >
              ≡
            </button>

          </div>

          {/* MOBILE MENU */}
          {open && (
            <div className="md:hidden px-6 pb-6 flex flex-col gap-4 text-[#0A1931] bg-[#F6FAFD] shadow-md">

              <a href="/" onClick={() => setOpen(false)}>Home</a>
              <a href="/services" onClick={() => setOpen(false)}>Services</a>
              <a href="/team" onClick={() => setOpen(false)}>Team</a>
              <a href="/testimonials" onClick={() => setOpen(false)}>Testimonials</a>
              <a href="/contact" onClick={() => setOpen(false)}>Contact</a>

            </div>
          )}

        </nav>

        {/* CONTENT */}
        <div className="pt-20">
          {children}
        </div>

      </body>
    </html>
  );
}