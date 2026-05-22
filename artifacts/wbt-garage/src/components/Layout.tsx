import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location === "/";

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-500 ease-in-out flex flex-col items-center",
          isHome && !isScrolled
            ? "bg-transparent py-5 gap-2.5"
            : "bg-background/95 backdrop-blur-md border-b border-border py-3 gap-2"
        )}
      >
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/wbt-logo.png"
            alt="WBT Garage"
            className="w-9 h-9 rounded-full object-cover transition-opacity duration-300 group-hover:opacity-80"
          />
          <span className={cn(
            "font-serif text-xl font-bold tracking-widest transition-colors duration-300 group-hover:opacity-70",
            isHome && !isScrolled ? "text-white" : "text-foreground"
          )}>
            WBT GARAGE
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest">
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Gallery", "/gallery"],
            ["Media", "/media"],
            ["Approach Us", "/approach"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "px-4 py-1.5 rounded-full border transition-all duration-300",
                isHome && !isScrolled
                  ? cn(
                      "hover:text-white hover:border-white/60",
                      location === href ? "text-white border-white/50" : "text-white/50 border-white/20"
                    )
                  : cn(
                      "hover:text-foreground hover:border-foreground/50",
                      location === href ? "text-foreground border-foreground/60" : "text-foreground/50 border-border"
                    )
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="py-12 px-8 border-t border-white/5 bg-background text-center text-sm text-foreground/50">
        <p>© {new Date().getFullYear()} WBT GARAGE. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}
