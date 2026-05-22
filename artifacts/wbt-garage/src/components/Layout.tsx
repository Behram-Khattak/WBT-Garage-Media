import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

const navLinks = [
  ["Home", "/"],
  ["About", "/about"],
  ["Gallery", "/gallery"],
  ["Media", "/media"],
  ["Approach Us", "/approach"],
] as const;

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      {/* ── Header ── */}
      <header className="fixed top-0 w-full z-50 bg-white border-b border-black/10 flex flex-col items-center py-3 gap-2">
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/wbt-logo.png"
            alt="WBT Garage"
            className="w-9 h-9 rounded-full object-cover transition-opacity duration-300 group-hover:opacity-70"
          />
          <span className="font-serif text-xl font-bold tracking-widest text-black transition-opacity duration-300 group-hover:opacity-60">
            WBT GARAGE
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest">
          {navLinks.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "px-4 py-1.5 rounded-full border transition-all duration-300",
                location === href
                  ? "text-black border-black/60"
                  : "text-black/40 border-black/15 hover:text-black hover:border-black/40"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
      </header>

      <main className="flex-1">{children}</main>

      {/* ── Footer ── */}
      <footer className="bg-[#0c0d10] text-white">
        {/* Top band */}
        <div className="border-b border-white/8 px-8 md:px-16 py-12 flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-5 max-w-xs">
            <div className="flex items-center gap-3">
              <img
                src="/wbt-logo.png"
                alt="WBT Garage"
                className="w-10 h-10 rounded-full object-cover opacity-90"
              />
              <span className="font-serif text-xl font-bold tracking-widest text-white">
                WBT GARAGE
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed font-sans">
              A cinematic record of rare machines, private collections, and the
              culture of the automobile.
            </p>
          </div>

          {/* Nav columns */}
          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <p className="text-white/25 text-[10px] uppercase tracking-[0.3em] mb-1">Explore</p>
              {navLinks.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="text-white/55 text-sm hover:text-white transition-colors duration-300"
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-white/25 text-[10px] uppercase tracking-[0.3em] mb-1">Contact</p>
              <a
                href="mailto:hello@wbtgarage.com"
                className="text-white/55 text-sm hover:text-white transition-colors duration-300"
              >
                hello@wbtgarage.com
              </a>
              <Link
                href="/approach"
                className="text-white/55 text-sm hover:text-white transition-colors duration-300"
              >
                Work with us
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="px-8 md:px-16 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] uppercase tracking-widest text-white/20">
          <p>© {new Date().getFullYear()} WBT Garage — All rights reserved</p>
          <p>By Volodymyr Nosov</p>
        </div>
      </footer>
    </div>
  );
}
