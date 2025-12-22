import { Coffee } from "lucide-react";

const productLinks = [
  "Coffee Series",
  "Frappe Series",
  "Milk Series",
  "Tea Series",
  "Summer Vibes",
];

const infoLinks = [
  { label: "About Us", href: "#about" },
  { label: "Promotions", href: "#promotions" },
  { label: "Articles", href: "#articles" },
  { label: "Membership", href: "#membership" },
  { label: "FAQ", href: "#faq" },
];

const socialLinks = [
  { name: "Instagram", icon: "📸" },
  { name: "TikTok", icon: "🎵" },
  { name: "YouTube", icon: "📺" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-foreground text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-1">
            <a href="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Coffee className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="font-heading text-xl font-bold">
                Point<span className="text-primary">Coffee</span>
              </span>
            </a>
            <p className="mb-6 text-sm text-primary-foreground/70">
              Nikmati setiap momen dengan racikan kopi terbaik dari barista
              handal kami. Freshly brewed for you.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 transition-colors hover:bg-primary/30"
                  aria-label={social.name}
                >
                  <span>{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider">
              Products
            </h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#menu"
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider">
              Information
            </h3>
            <ul className="space-y-2">
              {infoLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:customercare@pointcoffee.id"
                  className="flex items-center gap-2 text-sm text-primary-foreground/70 transition-colors hover:text-primary"
                >
                  <span>📧</span>
                  customercare@pointcoffee.id
                </a>
              </li>
              <li className="pt-2">
                <p className="mb-2 text-sm text-primary-foreground/70">
                  Download our App
                </p>
                <div className="flex gap-2">
                  <div className="rounded-lg bg-primary/20 px-3 py-2 text-xs text-primary-foreground/50">
                    Coming Soon
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Point Coffee Indonesia. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
