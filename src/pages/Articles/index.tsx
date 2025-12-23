import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Search } from "lucide-react";
import { useState } from "react";

const categories = ["Semua", "Coffee", "Promosi", "Lifestyle", "Tips & Tricks"];

const articles = [
  {
    id: 1,
    title: "Cara Menikmati Kopi yang Sempurna di Pagi Hari",
    excerpt: "Temukan rahasia menikmati kopi yang sempurna untuk memulai hari Anda dengan energi dan semangat.",
    category: "Coffee",
    date: "20 Des 2024",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Promo Spesial Akhir Tahun 2024",
    excerpt: "Nikmati berbagai promo menarik untuk menutup tahun dengan secangkir kopi nikmat bersama orang tersayang.",
    category: "Promosi",
    date: "18 Des 2024",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "5 Manfaat Minum Kopi untuk Kesehatan",
    excerpt: "Selain nikmat, kopi ternyata memiliki berbagai manfaat kesehatan yang mungkin belum Anda ketahui.",
    category: "Lifestyle",
    date: "15 Des 2024",
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    title: "Tips Memilih Biji Kopi Berkualitas",
    excerpt: "Panduan lengkap untuk memilih biji kopi terbaik agar secangkir kopi Anda semakin nikmat.",
    category: "Tips & Tricks",
    date: "12 Des 2024",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    title: "Mengenal Berbagai Jenis Kopi Indonesia",
    excerpt: "Indonesia kaya akan varietas kopi berkualitas. Mari kenali berbagai jenis kopi asli Indonesia.",
    category: "Coffee",
    date: "10 Des 2024",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    title: "Member Day: Double Points Setiap Rabu",
    excerpt: "Dapatkan double points setiap hari Rabu khusus untuk member Point Coffee. Yuk gabung sekarang!",
    category: "Promosi",
    date: "8 Des 2024",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=400&h=300&fit=crop",
  },
];

const Articles = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = activeCategory === "Semua" || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-12 md:py-16">
        <div className="container">
          {/* Header Section */}
          <div className="mb-10 text-center">
            <h1 className="mb-3 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Artikel & Berita Terbaru
            </h1>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Temukan berbagai informasi menarik seputar kopi, promo terbaru, dan tips lifestyle untuk pecinta kopi.
            </p>
          </div>

          {/* Search & Filter */}
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Cari artikel..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-border bg-background py-2 pl-10 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
              <Card
                key={article.id}
                className="group cursor-pointer overflow-hidden border-0 shadow-card transition-all duration-300 hover:shadow-card-hover hover-lift"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <Badge className="absolute left-3 top-3 bg-primary text-primary-foreground">
                    {article.category}
                  </Badge>
                </div>

                {/* Content */}
                <CardContent className="p-5">
                  <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                  <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                    {article.title}
                  </h3>
                  <p className="line-clamp-2 text-sm text-muted-foreground">
                    {article.excerpt}
                  </p>
                  <a
                    href={`/articles/${article.id}`}
                    className="mt-3 inline-block text-sm font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
                  >
                    Baca Selengkapnya
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {filteredArticles.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-lg text-muted-foreground">
                Tidak ada artikel yang ditemukan.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Articles;
