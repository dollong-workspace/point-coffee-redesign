import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Star, Heart, ChevronRight, ChevronLeft, Info, Smartphone, ShoppingCart } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import promo1 from "@/assets/promo-1.jpg";
import promo2 from "@/assets/promo-2.jpg";
import promo3 from "@/assets/promo-3.jpg";
import promo4 from "@/assets/promo-4.jpg";
import icedMocha from "@/assets/iced-mocha.jpg";

const menuItems: Record<string, {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  category: string;
  categoryLabel: string;
  image: string;
  badge?: string;
}> = {
  "iced-mocha": {
    id: "iced-mocha",
    name: "Iced Mocha",
    description: "Perpaduan espresso shot pilihan dengan cokelat premium yang rich dan susu segar.",
    price: 25000,
    originalPrice: 30000,
    rating: 4.9,
    reviews: 1200,
    category: "coffee",
    categoryLabel: "Coffee Series",
    image: icedMocha,
    badge: "TOP PICK",
  },
  "cafe-latte": {
    id: "cafe-latte",
    name: "Cafe Latte",
    description: "Espresso klasik dengan susu segar yang creamy, sempurna untuk memulai hari.",
    price: 20000,
    rating: 4.5,
    reviews: 890,
    category: "coffee",
    categoryLabel: "Coffee Series",
    image: promo1,
  },
  "caramel-macchiato": {
    id: "caramel-macchiato",
    name: "Caramel Macchiato",
    description: "Espresso dengan susu vanilla dan drizzle karamel yang manis sempurna.",
    price: 28000,
    rating: 4.9,
    reviews: 1500,
    category: "coffee",
    categoryLabel: "Coffee Series",
    image: promo2,
    badge: "BEST SELLER",
  },
  "matcha-frappe": {
    id: "matcha-frappe",
    name: "Matcha Frappe",
    description: "Matcha premium Jepang diblended dengan es dan susu untuk kesegaran maksimal.",
    price: 30000,
    rating: 4.7,
    reviews: 650,
    category: "frappe",
    categoryLabel: "Frappe Series",
    image: promo3,
  },
  "iced-americano": {
    id: "iced-americano",
    name: "Iced Americano",
    description: "Double shot espresso dengan air dingin untuk sensasi kopi murni yang menyegarkan.",
    price: 18000,
    rating: 4.6,
    reviews: 980,
    category: "coffee",
    categoryLabel: "Coffee Series",
    image: promo4,
  },
};

const relatedProducts = [
  { id: "cafe-latte", name: "Cafe Latte", price: 20000, rating: 4.5, image: promo1 },
  { id: "caramel-macchiato", name: "Caramel Macchiato", price: 28000, rating: 4.9, image: promo2 },
  { id: "matcha-frappe", name: "Matcha Frappe", price: 30000, rating: 4.7, image: promo3 },
  { id: "iced-americano", name: "Iced Americano", price: 18000, rating: 4.6, image: promo4 },
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
};

const MenuDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedSize, setSelectedSize] = useState<"regular" | "large">("regular");
  const [sugarLevel, setSugarLevel] = useState(100);
  const [isFavorite, setIsFavorite] = useState(false);

  const item = id ? menuItems[id] : null;

  if (!item) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container flex min-h-[60vh] items-center justify-center">
          <div className="text-center">
            <h1 className="mb-4 font-heading text-2xl font-bold text-foreground">
              Menu tidak ditemukan
            </h1>
            <Link to="/menu" className="text-primary hover:underline">
              Kembali ke Menu
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const sugarOptions = [0, 25, 50, 75, 100];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Breadcrumb */}
        <div className="border-b border-border bg-muted/50">
          <div className="container py-3">
            <nav className="flex items-center gap-2 text-sm">
              <Link to="/menu" className="text-muted-foreground hover:text-foreground">
                Menu
              </Link>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <Link to="/menu" className="text-muted-foreground hover:text-foreground">
                {item.categoryLabel}
              </Link>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium text-primary">{item.name}</span>
            </nav>
          </div>
        </div>

        {/* Product Detail */}
        <section className="py-8 md:py-12">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Product Image */}
              <div className="relative">
                {item.badge && (
                  <span className="absolute left-4 top-4 z-10 rounded-full bg-card px-4 py-2 text-sm font-semibold text-foreground shadow-card">
                    🔥 {item.badge}
                  </span>
                )}
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col">
                <div className="mb-2 flex items-center gap-3">
                  <span className="rounded-md bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                    {item.categoryLabel}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="text-sm font-medium text-foreground">
                      {item.rating}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      ({item.reviews.toLocaleString()})
                    </span>
                  </div>
                </div>

                <h1 className="mb-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
                  {item.name}
                </h1>

                <p className="mb-6 text-muted-foreground">{item.description}</p>

                {/* Price */}
                <div className="mb-8 flex items-center gap-3">
                  <span className="font-heading text-3xl font-bold text-primary">
                    {formatPrice(item.price)}
                  </span>
                  {item.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      {formatPrice(item.originalPrice)}
                    </span>
                  )}
                </div>

                {/* Size Selection */}
                <div className="mb-6">
                  <h3 className="mb-3 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                    Ukuran Cup
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setSelectedSize("regular")}
                      className={`flex flex-col items-center rounded-xl border-2 p-4 transition-all ${
                        selectedSize === "regular"
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <span className="mb-1 text-2xl">☕</span>
                      <span className="font-medium text-foreground">Regular</span>
                      <span className="text-xs text-muted-foreground">12 oz</span>
                    </button>
                    <button
                      onClick={() => setSelectedSize("large")}
                      className={`flex flex-col items-center rounded-xl border-2 p-4 transition-all ${
                        selectedSize === "large"
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <span className="mb-1 text-2xl">🥤</span>
                      <span className="font-medium text-foreground">Large</span>
                      <span className="text-xs text-muted-foreground">16 oz</span>
                    </button>
                  </div>
                </div>

                {/* Sugar Level */}
                <div className="mb-8">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                      Sugar Level
                    </h3>
                    <span className="text-sm font-medium text-primary">
                      Normal ({sugarLevel}%)
                    </span>
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    {sugarOptions.map((level) => (
                      <button
                        key={level}
                        onClick={() => setSugarLevel(level)}
                        className={`rounded-lg border-2 px-3 py-2 text-sm font-medium transition-all ${
                          sugarLevel === level
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border text-foreground hover:border-primary/50"
                        }`}
                      >
                        {level}%
                      </button>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button size="lg" className="flex-1 gap-2">
                    <ShoppingCart className="h-5 w-5" />
                    Add to Order
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={isFavorite ? "border-destructive text-destructive" : ""}
                  >
                    <Heart
                      className={`h-5 w-5 ${isFavorite ? "fill-destructive" : ""}`}
                    />
                  </Button>
                </div>

                {/* Nutrition Info Accordion */}
                <div className="mt-6">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="nutrition" className="border-border">
                      <AccordionTrigger className="text-foreground hover:no-underline">
                        <div className="flex items-center gap-2">
                          <Info className="h-4 w-4" />
                          Informasi Nutrisi
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="grid grid-cols-2 gap-4 pt-2">
                          <div className="rounded-lg bg-muted p-3">
                            <span className="block text-xs text-muted-foreground">
                              Kalori
                            </span>
                            <span className="font-semibold text-foreground">
                              180 kcal
                            </span>
                          </div>
                          <div className="rounded-lg bg-muted p-3">
                            <span className="block text-xs text-muted-foreground">
                              Gula
                            </span>
                            <span className="font-semibold text-foreground">
                              24g
                            </span>
                          </div>
                          <div className="rounded-lg bg-muted p-3">
                            <span className="block text-xs text-muted-foreground">
                              Protein
                            </span>
                            <span className="font-semibold text-foreground">
                              5g
                            </span>
                          </div>
                          <div className="rounded-lg bg-muted p-3">
                            <span className="block text-xs text-muted-foreground">
                              Kafein
                            </span>
                            <span className="font-semibold text-foreground">
                              75mg
                            </span>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="bg-background py-12">
          <div className="container">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  Pasangan Sempurna
                </h2>
                <p className="text-muted-foreground">
                  Rekomendasi minuman lain yang mungkin kamu suka
                </p>
              </div>
              <div className="hidden items-center gap-2 md:flex">
                <button className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-muted">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-muted">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              {relatedProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/menu/${product.id}`}
                  className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="mb-1 font-heading font-semibold text-foreground">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="font-heading font-bold text-primary">
                        {formatPrice(product.price)}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-accent text-accent" />
                        <span className="text-sm text-muted-foreground">
                          {product.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-6 text-right">
              <Link
                to="/menu"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                See All
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* App Download CTA */}
        <section className="bg-primary py-12 md:py-16">
          <div className="container">
            <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
              <div className="text-center md:text-left">
                <h2 className="mb-3 font-heading text-2xl font-bold text-primary-foreground md:text-3xl">
                  Pesan Lebih Cepat Lewat App
                </h2>
                <p className="mb-6 max-w-md text-primary-foreground/80">
                  Skip antrian dan dapatkan promo eksklusif khusus pengguna aplikasi Point Coffee.
                </p>
                <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                  <Button
                    variant="secondary"
                    className="gap-2 bg-foreground text-background hover:bg-foreground/90"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                    </svg>
                    App Store
                  </Button>
                  <Button
                    variant="secondary"
                    className="gap-2 bg-foreground text-background hover:bg-foreground/90"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
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

export default MenuDetail;
