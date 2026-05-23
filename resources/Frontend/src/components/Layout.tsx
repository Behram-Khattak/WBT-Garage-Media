import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  ["Home", "/"],
  ["About", "/about"],
  ["Gallery", "/gallery"],
  ["Media", "/media"],
  ["Approach Us", "/approach"],
] as const;

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const isHome = location === "/";

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && !isScrolled;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      {/* ── Header ── */}
      <header
        className={cn(
          "fixed top-0 w-full z-50 flex flex-col items-center transition-all duration-400 ease-in-out",
          transparent
            ? "py-5 gap-2.5"
            : "py-5 gap-2.5"
        )}
      >
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/wbt-logo.png"
            alt="WBT Garage"
            className="w-14 h-14 rounded-full object-cover transition-opacity duration-300 group-hover:opacity-70"
          />
          {/* <span className={cn(
            "font-serif text-xl font-bold tracking-widest transition-colors duration-300 group-hover:opacity-60",
            transparent ? "text-white" : "text-black"
          )}>
            WBT GARAGE
          </span> */}
        </Link>

        <br></br>

        <nav className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest">
          {navLinks.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "px-4 py-1.5 rounded-full border transition-all duration-300",
                transparent
                  ? location === href
                    ? "text-white border-white/50"
                    : "text-white/50 border-white/20 hover:text-white hover:border-white/50"
                  : location === href
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
        <div className="border-b border-white/8 px-8 md:px-16 py-12 flex flex-col md:flex-row justify-between items-start gap-10">
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

        <div className="px-8 md:px-16 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] uppercase tracking-widest text-white/20">
          <p>© {new Date().getFullYear()} WBT Garage — All rights reserved</p>
          <p>By Volodymyr Nosov</p>
        </div>
      </footer>
    </div>
  );
}
