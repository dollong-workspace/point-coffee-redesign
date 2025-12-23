import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Search, Heart, Coffee, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCoffee from "@/assets/hero-coffee.jpg";

const stats = [
  { value: "1.000+", label: "Outlets" },
  { value: "100+", label: "Cities" },
  { value: "100%", label: "Arabica Beans" },
  { value: "24/7", label: "Availability" },
];

const timeline = [
  {
    year: "2016",
    title: "Lahirnya Point Coffee",
    description: "Point Coffee pertama kali hadir dengan konsep 'Fresh Quality Coffee'. Menggunakan 100% biji kopi asli Indonesia yang di-brew langsung oleh barista handal.",
    position: "left",
  },
  {
    year: "2019",
    title: "Ekspansi Nasional",
    description: "Memperluas jangkauan ke berbagai pulau besar di Indonesia, memperkenalkan varian minuman kekinian yang disukai generasi muda.",
    position: "right",
  },
  {
    year: "2022",
    title: "1.000 Outlet Milestone",
    description: "Pencapaian luar biasa dengan kehadiran 1.000 outlet yang tersebar di Indonesia, menjadikan kopi berkualitas mudah dijangkau siapa saja.",
    position: "left",
  },
  {
    year: "Future",
    title: "Inovasi Berkelanjutan",
    description: "Berkomitmen pada praktik bisnis hijau, inovasi menu musiman, dan produk ramah lingkungan untuk masa depan yang lebih hijau.",
    position: "right",
  },
];

const values = [
  {
    icon: Heart,
    title: "Quality First",
    description: "Kami hanya menggunakan biji kopi pilihan 100% Indonesia dan bahan-bahan berkualitas tinggi untuk setiap cangkir yang kami sajikan.",
  },
  {
    icon: Coffee,
    title: "Customer Love",
    description: "Kepuasan pelanggan adalah prioritas kami. Memberikan, berinovasi, dan memberikan pelayanan terbaik di setiap gerai.",
  },
  {
    icon: Zap,
    title: "Fast & Fresh",
    description: "Konsep Grab & Go kami memastikan kamu mendapatkan kopi segar dengan cepat tanpa mengurangi kualitas rasa.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroCoffee})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>

        <div className="relative container h-full flex flex-col justify-center items-center text-center text-primary-foreground">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase bg-primary-foreground/20 rounded-full border border-primary-foreground/30">
            Our Story
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold italic mb-4">
            Brewing Happiness<br />Since 2016
          </h1>
          <p className="max-w-xl text-primary-foreground/90 text-sm md:text-base">
            Menyajikan kopi berkualitas terbaik dengan konsep 'Grab & Go' untuk menemani setiap momen produktifmu.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary py-8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-primary-foreground">
            {stats.map((stat) => (
              <div key={stat.label} className="animate-fade-in">
                <div className="font-heading text-3xl md:text-4xl font-bold">{stat.value}</div>
                <div className="text-sm text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
              Perjalanan Kami
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Dari satu gerai kecil hingga menjadi bagian dari keseharian jutaan orang Indonesia.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden md:block" />

            <div className="space-y-12 md:space-y-0">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                    item.position === "left" ? "md:flex-row" : "md:flex-row-reverse"
                  } animate-fade-in`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Content */}
                  <div className={`flex-1 ${item.position === "left" ? "md:text-right" : "md:text-left"}`}>
                    <span className="font-heading text-4xl md:text-5xl font-bold text-primary">
                      {item.year}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-foreground mt-2 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto md:mx-0 md:ml-auto">
                      {item.description}
                    </p>
                  </div>

                  {/* Dot */}
                  <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-lg">
                    <Coffee className="w-5 h-5" />
                  </div>

                  {/* Image placeholder */}
                  <div className="flex-1">
                    <div className="w-full h-48 md:h-56 rounded-2xl bg-muted overflow-hidden shadow-card">
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${heroCoffee})` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Finder Section */}
      <section className="py-16 bg-coffee-cream">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
                Temukan Point Coffee di Sekitarmu
              </h2>
              <p className="text-muted-foreground mb-6 text-sm">
                Lagi butuh asupan kafein? Cek lokasi terdekat dan nikmati promo spesial khusus pembelian di store.
              </p>

              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Cari kota atau lokasi..."
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <Button className="w-full mt-4 gap-2">
                <MapPin className="w-4 h-4" />
                Cari Lokasi
              </Button>
            </div>

            {/* Map placeholder */}
            <div className="h-64 md:h-80 rounded-2xl bg-muted overflow-hidden shadow-card">
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                  <span className="text-primary font-heading font-bold text-lg">Indonesia Wide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground text-center mb-12">
            Our Values
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-background rounded-2xl p-6 shadow-card hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Partners */}
      <section className="py-12 bg-background">
        <div className="container text-center">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-6">
            Yuk Order Delivery
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {["KLIK Indomaret", "GrabFood", "GoFood", "ShopeeFood"].map((partner) => (
              <div
                key={partner}
                className="px-6 py-3 border border-border rounded-lg text-sm font-medium text-muted-foreground hover:border-primary hover:text-primary transition-colors cursor-pointer"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
