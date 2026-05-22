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
          "fixed top-0 w-full z-50 transition-all duration-500 ease-in-out py-6 px-8 flex items-center justify-between",
          isScrolled || !isHome ? "bg-background/95 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent"
        )}
      >
        <Link href="/" className="font-serif text-2xl font-bold tracking-widest text-foreground hover:text-accent transition-colors">
          WBT GARAGE
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest">
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
                "transition-colors hover:text-accent",
                location === href ? "text-accent" : "text-foreground/80"
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
