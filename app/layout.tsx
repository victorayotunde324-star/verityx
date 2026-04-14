import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full overflow-x-hidden">

        {/* NAVBAR */}
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 bg-[#F6FAFD]/80 backdrop-blur-md border-b border-[#B3CFE5]">

          {/* LOGO */}
          <div className="flex items-center gap-3 font-semibold text-[#0A1931]">
            <img src="/logo.png" className="h-8" />
            Verityx
          </div>

          {/* LINKS */}
          <div className="flex gap-6 text-sm text-[#0A1931]">
            <a href="/" className="hover:text-[#4A7FA7]">Home</a>
            <a href="/services" className="hover:text-[#4A7FA7]">Services</a>
            <a href="/team" className="hover:text-[#4A7FA7]">Team</a>
            <a href="/testimonials" className="hover:text-[#4A7FA7]">Testimonials</a>
            <a href="/contact" className="hover:text-[#4A7FA7]">Contact</a>
          </div>

        </nav>

        {/* CONTENT (FULL WIDTH) */}
        <div className="pt-20">
          {children}
        </div>

      </body>
    </html>
  );
}