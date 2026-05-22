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
          isScrolled
            ? "bg-background/90 backdrop-blur-md border-b border-white/8 py-3 gap-2"
            : "bg-transparent py-5 gap-2.5"
        )}
      >
        <Link href="/" className="font-serif text-2xl font-bold tracking-widest text-white hover:text-accent transition-colors">
          WBT GARAGE
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
                "px-4 py-1.5 rounded-full border transition-all duration-300 hover:text-accent hover:border-accent",
                location === href
                  ? "text-accent border-accent"
                  : "text-white/60 border-white/20"
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
