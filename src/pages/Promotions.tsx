import { useState } from "react";
import { ArrowRight, Smartphone } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import promo1 from "@/assets/promo-1.jpg";
import promo2 from "@/assets/promo-2.jpg";
import promo3 from "@/assets/promo-3.jpg";
import promo4 from "@/assets/promo-4.jpg";

const categories = [
  { id: "all", label: "All Promos", icon: null },
  { id: "coffee", label: "Coffee Series", icon: "☕" },
  { id: "frappe", label: "Frappe", icon: "❄️" },
  { id: "food", label: "Food & Pastry", icon: "🥐" },
];

const promotions = [
  {
    id: 1,
    title: "Double Signature Series",
    description: "Nikmati Cappuccino Iced with Coffee Jelly dan Caramel Macchiato Iced dengan harga spesial.",
    price: "Rp 40rb",
    priceLabel: "Beli 2 Hanya",
    image: promo1,
    badge: "LIMITED TIME",
    badgeColor: "bg-destructive",
    dateLabel: "1 - 31 Des 2025",
    category: "coffee",
  },
  {
    id: 2,
    title: "Sweet Escape Series",
    description: "Hazelnut Choco Crumb Frappe & Oreo Coffee Cheese Cake Frappe. Manisnya pas buat harimu.",
    price: "Rp 25rb",
    priceLabel: "Mulai Dari",
    image: promo2,
    badge: "NEW ARRIVAL",
    badgeColor: "bg-primary",
    dateLabel: "Until 31 Des 2025",
    category: "frappe",
  },
  {
    id: 3,
    title: "Nusantara Series",
    description: "Bersama Tim Nasional Indonesia! Garuda Power & Gelora Gembira siap menemani semangatmu.",
    price: "Rp 25rb",
    priceLabel: "Harga Spesial",
    image: promo3,
    badge: "BEST SELLER",
    badgeColor: "bg-primary",
    dateLabel: "Limited Edition",
    category: "coffee",
  },
  {
    id: 4,
    title: "Triple Signature",
    description: "Beli 3 varian signature (Himalayan Butterscotch, Palm Sugar, Salted Ovaline) lebih hemat.",
    price: "Rp 60rb",
    priceLabel: "Paket 3 Cup",
    image: promo1,
    badge: null,
    badgeColor: null,
    dateLabel: "Weekend Promo",
    category: "coffee",
  },
  {
    id: 5,
    title: "Geng Ngopi Bundle",
    description: "Kelapa Jerukaro, Latte Iced, Caramel Macchiato Iced. Cocok buat nongkrong bareng bestie.",
    price: "Rp 50rb",
    priceLabel: "Only",
    image: promo2,
    badge: "BUNDLE",
    badgeColor: "bg-primary",
    dateLabel: "Sabtu, Minggu, Senin",
    category: "coffee",
  },
  {
    id: 6,
    title: "1 LITER Series",
    description: "Stok kopi di kulkas aman! Tersedia Caramel Macchiato, Signature Chocolate, Palm Sugar...",
    price: "Rp 120rb",
    priceLabel: "Beli 2 Botol",
    image: promo4,
    badge: "BIG SIZE",
    badgeColor: "bg-destructive",
    dateLabel: "Lebih Banyak, Lebih Puas",
    category: "coffee",
  },
];

const Promotions = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPromotions = activeCategory === "all"
    ? promotions
    : promotions.filter((promo) => promo.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-background py-12 text-center md:py-16">
          <div className="container">
            <h1 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Special <span className="text-primary">Offers</span> For You
            </h1>
            <p className="mx-auto max-w-xl text-muted-foreground">
              Jangan lewatkan penawaran promo terbaik dari Point Coffee. Grab your favorites now!
            </p>

            {/* Category Filters */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-foreground hover:border-primary/50 hover:bg-muted"
                  }`}
                >
                  {category.icon && <span>{category.icon}</span>}
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Promotions Grid */}
        <section className="bg-background pb-16">
          <div className="container">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPromotions.map((promo) => (
                <div
                  key={promo.id}
                  className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-card-hover"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {promo.badge && (
                      <span
                        className={`absolute left-3 top-3 z-10 rounded-md px-3 py-1 text-xs font-bold uppercase text-primary-foreground ${promo.badgeColor}`}
                      >
                        {promo.badge}
                      </span>
                    )}
                    <img
                      src={promo.image}
                      alt={promo.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <span className="text-sm font-medium text-white/90">
                        {promo.dateLabel}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="mb-2 font-heading text-lg font-bold text-foreground">
                      {promo.title}
                    </h3>
                    <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                      {promo.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="block text-xs text-muted-foreground">
                          {promo.priceLabel}
                        </span>
                        <span className="font-heading text-xl font-bold text-primary">
                          {promo.price}
                        </span>
                      </div>
                      <Button size="sm" className="gap-1">
                        Order Now
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-10 flex items-center justify-center gap-2">
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground"
              >
                1
              </button>
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                2
              </button>
              <button
                className="flex items-center gap-1 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                Next
              </button>
            </div>
          </div>
        </section>

        {/* App Download CTA */}
        <section className="bg-primary py-12 md:py-16">
          <div className="container">
            <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
              <div className="text-center md:text-left">
                <h2 className="mb-3 font-heading text-2xl font-bold text-primary-foreground md:text-3xl">
                  Mau Promo Lebih Banyak?
                </h2>
                <p className="mb-6 max-w-md text-primary-foreground/80">
                  Download aplikasi Point Coffee sekarang dan dapatkan voucher khusus pengguna baru, poin loyalty, dan promo eksklusif lainnya!
                </p>
                <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                  <Button
                    variant="secondary"
                    className="gap-2 bg-foreground text-background hover:bg-foreground/90"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                    App Store
                  </Button>
                  <Button
                    variant="secondary"
                    className="gap-2 bg-foreground text-background hover:bg-foreground/90"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                    </svg>
                    Google Play
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="flex h-48 w-48 items-center justify-center rounded-3xl bg-background/10 md:h-56 md:w-56">
                  <Smartphone className="h-20 w-20 text-primary-foreground/80 md:h-24 md:w-24" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Promotions;
