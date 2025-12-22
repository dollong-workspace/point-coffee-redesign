import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Coffee, Share2 } from "lucide-react";
import { useState } from "react";
import icedMocha from "@/assets/iced-mocha.jpg";

const categories = [
  { id: "coffee", label: "Coffee Series", icon: Coffee },
  { id: "frappe", label: "Frappe Series", icon: null },
  { id: "milk", label: "Milk Series", icon: null },
  { id: "tea", label: "Tea Series", icon: null },
  { id: "summer", label: "Summer Vibes", icon: null },
];

const featuredProducts: Record<string, {
  name: string;
  description: string;
  price: string;
  image: string;
}> = {
  coffee: {
    name: "Iced Mocha",
    description:
      "Perpaduan sempurna antara dua shot espresso premium khas Point Coffee dengan cokelat lezat dan susu segar.",
    price: "Rp 25.000",
    image: icedMocha,
  },
  frappe: {
    name: "Caramel Frappe",
    description:
      "Blended iced coffee dengan caramel manis dan whipped cream yang creamy.",
    price: "Rp 28.000",
    image: icedMocha,
  },
  milk: {
    name: "Fresh Milk Tea",
    description:
      "Teh premium dengan susu segar berkualitas tinggi, perfect untuk hari yang menyegarkan.",
    price: "Rp 22.000",
    image: icedMocha,
  },
  tea: {
    name: "Lychee Green Tea",
    description:
      "Green tea segar dengan rasa lychee manis alami yang menyegarkan.",
    price: "Rp 20.000",
    image: icedMocha,
  },
  summer: {
    name: "Tropical Paradise",
    description:
      "Minuman segar dengan campuran buah tropis yang sempurna untuk musim panas.",
    price: "Rp 27.000",
    image: icedMocha,
  },
};

export const VibeSection = () => {
  const [activeCategory, setActiveCategory] = useState("coffee");
  const product = featuredProducts[activeCategory];

  return (
    <section id="menu" className="flex min-h-screen flex-col items-center justify-center bg-background py-16 md:py-20">
      <div className="container">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
            Explore Our Taste
          </p>
          <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
            What's Your Vibe Today?
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-12">
          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex min-w-max items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition-all lg:w-full lg:px-5 lg:py-4 ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-secondary text-foreground hover:bg-muted"
                }`}
              >
                {category.icon && (
                  <category.icon className="h-5 w-5 flex-shrink-0" />
                )}
                {category.label}
              </button>
            ))}
          </div>

          {/* Featured Product */}
          <div className="rounded-3xl bg-coffee-cream p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-2 md:items-center md:gap-8">
              {/* Product Image */}
              <div className="flex justify-center">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-64 w-auto rounded-2xl object-contain transition-all duration-500 sm:h-72 md:h-80"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="text-center md:text-left">
                <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
                  Recommended
                </p>
                <h3 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
                  {product.name}
                </h3>
                <p className="mb-6 text-muted-foreground">{product.description}</p>
                <p className="mb-6 font-heading text-3xl font-bold text-primary">
                  {product.price}
                </p>

                <div className="flex flex-col items-center gap-4 sm:flex-row md:justify-start">
                  <Button size="lg" className="w-full sm:w-auto">
                    Order Now
                  </Button>
                  <div className="flex gap-2">
                    <button
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-muted"
                      aria-label="Share"
                    >
                      <Share2 className="h-5 w-5" />
                    </button>
                    <button
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-muted"
                      aria-label="Previous"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-muted"
                      aria-label="Next"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VibeSection;
