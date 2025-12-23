import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import promo1 from "@/assets/promo-1.jpg";
import promo2 from "@/assets/promo-2.jpg";
import promo3 from "@/assets/promo-3.jpg";
import promo4 from "@/assets/promo-4.jpg";
import icedMocha from "@/assets/iced-mocha.jpg";

const categories = [
  { id: "coffee", label: "Coffee Series", icon: "☕", color: "from-amber-600 to-amber-800" },
  { id: "frappe", label: "Frappe Series", icon: "🧊", color: "from-blue-400 to-blue-600" },
  { id: "milk", label: "Milk Series", icon: "🥛", color: "from-amber-100 to-amber-300" },
  { id: "tea", label: "Tea Series", icon: "🍵", color: "from-green-400 to-green-600" },
  { id: "summer", label: "Summer Vibes", icon: "🌴", color: "from-orange-400 to-pink-500" },
];

const menuItems = [
  {
    id: "iced-mocha",
    name: "Iced Mocha",
    price: 25000,
    originalPrice: 30000,
    rating: 4.9,
    reviews: 1200,
    category: "coffee",
    image: icedMocha,
    badge: "TOP PICK",
  },
  {
    id: "cafe-latte",
    name: "Cafe Latte",
    price: 20000,
    rating: 4.5,
    reviews: 890,
    category: "coffee",
    image: promo1,
  },
  {
    id: "caramel-macchiato",
    name: "Caramel Macchiato",
    price: 28000,
    rating: 4.9,
    reviews: 1500,
    category: "coffee",
    image: promo2,
    badge: "BEST SELLER",
  },
  {
    id: "matcha-frappe",
    name: "Matcha Frappe",
    price: 30000,
    rating: 4.7,
    reviews: 650,
    category: "frappe",
    image: promo3,
  },
  {
    id: "iced-americano",
    name: "Iced Americano",
    price: 18000,
    rating: 4.6,
    reviews: 980,
    category: "coffee",
    image: promo4,
  },
  {
    id: "hazelnut-frappe",
    name: "Hazelnut Choco Frappe",
    price: 32000,
    rating: 4.8,
    reviews: 720,
    category: "frappe",
    image: promo1,
    badge: "NEW",
  },
  {
    id: "fresh-milk-latte",
    name: "Fresh Milk Latte",
    price: 22000,
    rating: 4.4,
    reviews: 450,
    category: "milk",
    image: promo2,
  },
  {
    id: "brown-sugar-milk",
    name: "Brown Sugar Milk",
    price: 24000,
    rating: 4.7,
    reviews: 820,
    category: "milk",
    image: promo3,
    badge: "POPULAR",
  },
  {
    id: "lemon-tea",
    name: "Lemon Tea",
    price: 15000,
    rating: 4.3,
    reviews: 380,
    category: "tea",
    image: promo4,
  },
  {
    id: "peach-tea",
    name: "Peach Tea",
    price: 18000,
    rating: 4.6,
    reviews: 540,
    category: "tea",
    image: promo1,
  },
  {
    id: "tropical-blast",
    name: "Tropical Blast",
    price: 28000,
    rating: 4.8,
    reviews: 320,
    category: "summer",
    image: promo2,
    badge: "LIMITED",
  },
  {
    id: "mango-sunrise",
    name: "Mango Sunrise",
    price: 26000,
    rating: 4.7,
    reviews: 280,
    category: "summer",
    image: promo3,
  },
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("coffee");

  const filteredItems = menuItems.filter((item) => item.category === activeCategory);
  const activeCategoryData = categories.find((c) => c.id === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-section py-12 text-center md:py-16">
          <div className="container">
            <h1 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Our <span className="text-primary">Menu</span>
            </h1>
            <p className="mx-auto max-w-xl text-muted-foreground">
              Pilih kategori favoritmu dan temukan minuman yang sempurna untuk menemani harimu.
            </p>
          </div>
        </section>

        {/* Category Grid */}
        <section className="bg-background py-8 md:py-12">
          <div className="container">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`group relative overflow-hidden rounded-2xl p-6 text-center transition-all duration-300 ${
                    activeCategory === category.id
                      ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                      : "hover:shadow-card-hover"
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90`}
                  />
                  <div className="relative z-10">
                    <span className="mb-2 block text-4xl">{category.icon}</span>
                    <span className="font-heading text-sm font-semibold text-white md:text-base">
                      {category.label}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Items Grid */}
        <section className="bg-background pb-16">
          <div className="container">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  {activeCategoryData?.label}
                </h2>
                <p className="text-muted-foreground">
                  {filteredItems.length} minuman tersedia
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {filteredItems.map((item) => (
                <Link
                  key={item.id}
                  to={`/menu/${item.id}`}
                  className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                >
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden">
                    {item.badge && (
                      <span className="absolute left-3 top-3 z-10 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                        {item.badge}
                      </span>
                    )}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="mb-1 font-heading text-lg font-semibold text-foreground">
                      {item.name}
                    </h3>
                    <div className="mb-3 flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-accent text-accent" />
                        <span className="text-sm font-medium text-foreground">
                          {item.rating}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        ({item.reviews.toLocaleString()} reviews)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-heading text-lg font-bold text-primary">
                        {formatPrice(item.price)}
                      </span>
                      {item.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {formatPrice(item.originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* See All CTA */}
        <section className="bg-muted py-12">
          <div className="container text-center">
            <h3 className="mb-4 font-heading text-xl font-bold text-foreground md:text-2xl">
              Ingin lihat menu lengkap?
            </h3>
            <p className="mb-6 text-muted-foreground">
              Download aplikasi Point Coffee untuk melihat semua menu dan promo eksklusif.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <button className="flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-medium text-background transition-colors hover:bg-foreground/90">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                App Store
              </button>
              <button className="flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-medium text-background transition-colors hover:bg-foreground/90">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                Google Play
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;
