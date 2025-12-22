import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Coffee, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "Menu", href: "/menu" },
  { label: "Promotions", href: "/promotions" },
  { label: "Articles", href: "#articles" },
  { label: "Membership", href: "#membership" },
];

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary md:h-10 md:w-10">
            <Coffee className="h-5 w-5 text-primary-foreground md:h-6 md:w-6" />
          </div>
          <span className="font-heading text-lg font-bold text-foreground md:text-xl">
            Point<span className="text-primary">Coffee</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <a
            href="#location"
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "hidden gap-2 sm:flex md:size-default"
            )}
          >
            <MapPin className="h-4 w-4" />
            <span>Location</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:bg-muted lg:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="border-t border-border bg-background lg:hidden">
          <div className="container py-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#location"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "mt-2 gap-2"
                )}
              >
                <MapPin className="h-4 w-4" />
                <span>Find Location</span>
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
