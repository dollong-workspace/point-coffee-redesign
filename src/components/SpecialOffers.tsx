import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import promo1 from "@/assets/promo-1.jpg";
import promo2 from "@/assets/promo-2.jpg";
import promo3 from "@/assets/promo-3.jpg";
import promo4 from "@/assets/promo-4.jpg";

const promotions = [
  {
    id: 1,
    title: "Sweet Escape Series",
    description: "Nikmati varian rasa baru yang manis dan menyegarkan.",
    price: "Rp 25.000",
    image: promo1,
    badge: "LIMITED",
    badgeColor: "bg-destructive",
  },
  {
    id: 2,
    title: "Triple Signature",
    description: "Beli 3 signature coffee hanya 60rb. Hemat banget!",
    price: "Rp 60.000",
    image: promo2,
    badge: "NEW",
    badgeColor: "bg-primary",
  },
  {
    id: 3,
    title: "Geng Ngopi",
    description: "Paket rame-rame lebih asik, weekend only.",
    price: "Rp 50.000",
    image: promo3,
    badge: null,
    badgeColor: null,
  },
  {
    id: 4,
    title: "1 Liter Bottle",
    description: "Stok kopi di kulkas untuk semua.",
    price: "Rp 75.000",
    image: promo4,
    badge: null,
    badgeColor: null,
  },
];

export const SpecialOffers = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById("promo-carousel");
    if (container) {
      const scrollAmount = 300;
      const newPosition =
        direction === "left"
          ? Math.max(0, scrollPosition - scrollAmount)
          : scrollPosition + scrollAmount;
      container.scrollTo({ left: newPosition, behavior: "smooth" });
      setScrollPosition(newPosition);
    }
  };

  return (
    <section id="promotions" className="bg-secondary py-16 md:py-20">
      <div className="container">
        {/* Header */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="mb-2 font-heading text-2xl font-bold text-foreground md:text-3xl">
              Special Offers 🔥
            </h2>
            <p className="text-muted-foreground">
              Promo menarik khusus buat kamu hari ini!
            </p>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              onClick={() => scroll("left")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-muted"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-muted"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          id="promo-carousel"
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide md:gap-6"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {promotions.map((promo) => (
            <Card
              key={promo.id}
              className="group min-w-[260px] flex-shrink-0 overflow-hidden border-border bg-card transition-all duration-300 hover:shadow-card-hover sm:min-w-[280px]"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="relative aspect-square overflow-hidden">
                {promo.badge && (
                  <span
                    className={`absolute left-3 top-3 z-10 rounded-full px-3 py-1 text-xs font-semibold text-primary-foreground ${promo.badgeColor}`}
                  >
                    {promo.badge}
                  </span>
                )}
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-1 font-heading text-lg font-semibold text-foreground">
                  {promo.title}
                </h3>
                <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
                  {promo.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-heading text-lg font-bold text-foreground">
                    {promo.price}
                  </span>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    Detail
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
