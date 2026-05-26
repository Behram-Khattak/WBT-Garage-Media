import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  ["Home", "/"],
  ["About", "/about"],
  ["Gallery", "/gallery"],
  ["Media", "/media"],
  ["Stories", "/stories"],
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

  // implement the hamburger menu interaction using useState to toggle the mobile navigation menu visibility when the hamburger button is clicked. The menu should slide in from the top and cover the entire screen with a semi-transparent background. Clicking outside the menu or on a link should close the menu. Use Tailwind CSS for styling and transitions.
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);

    // prevent body scroll when mobile menu is open
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const transparent = isHome && !isScrolled;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col"
    onClick={() => isMobileMenuOpen && toggleMobileMenu()}
    >
      {/* ── Header ── */}
      <header
        className={cn(
          "fixed top-0 w-full px-4 z-50 flex justify-between md:justify-center md:flex-col items-center transition-all duration-400 ease-in-out space-y-4",
          transparent
            ? "bg-transparent py-5 gap-2.5"
            : "bg-white border-b border-black/10 py-5 gap-2.0"
        )}
      >
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/wbt-logo.png"
            alt="WBT Garage"
            className="w-14 h-14 rounded-full object-cover transition-opacity duration-300 group-hover:opacity-70"
          />
        </Link>

        <div className="navigations">
          <nav className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest">
            {navLinks.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "px-4 py-1.5 transition-all duration-300 text-lg font-medium",
                  transparent
                    ? location === href
                      ? "text-white"
                      : "text-white/40 border-white/20 hover:text-white"
                    : location === href
                      ? "text-black border-black/60"
                      : "text-black/40 border-black/15 hover:text-black hover:border-black/40"
                )}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* navigation for the mobile view with the same links with slider and hamburger menu */}
          <div className="md:hidden">
            <button
              // change the hamburger color according to the header background
              className={cn(
                "transition-colors duration-300",
                transparent ? "text-white/60 hover:text-white" : "text-black/60 hover:text-black"
              )}
              aria-label="Toggle navigation menu"
              onClick={toggleMobileMenu}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* mobile navigation menu */}
          <div className="md:hidden"
            style={{
              // on visibility i just need a smooth visibility using the opacity and transition
              visibility: isMobileMenuOpen ? "visible" : "hidden",
              opacity: isMobileMenuOpen ? 1 : 0,
              transition: "opacity 0.3s ease, visibility 0.3s ease",
            }}
          >
            <nav className="absolute mobile-nav text-center top-full left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-black/10 py-4">
              {navLinks.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="block px-4 font-semibold text-xl py-2 text-black/60 hover:text-black transition-colors duration-300"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

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
