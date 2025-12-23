import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
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
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id="promotions" className="bg-secondary py-16 md:py-20">
      <div className="container">
        {/* Header */}
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h2 className="mb-2 font-heading text-2xl font-bold text-foreground md:text-3xl">
              Special Offers 🔥
            </h2>
            <p className="text-muted-foreground">
              Promo menarik khusus buat kamu hari ini!
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-muted"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-muted"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={16}
          slidesPerView={1.2}
          breakpoints={{
            480: { slidesPerView: 1.5, spaceBetween: 16 },
            640: { slidesPerView: 2.2, spaceBetween: 20 },
            768: { slidesPerView: 2.5, spaceBetween: 20 },
            1024: { slidesPerView: 3.5, spaceBetween: 24 },
            1280: { slidesPerView: 4, spaceBetween: 24 },
          }}
          className="!overflow-visible"
        >
          {promotions.map((promo) => (
            <SwiperSlide key={promo.id}>
              <Card className="group overflow-hidden rounded-2xl border-0 bg-card shadow-sm transition-all duration-300 hover:shadow-lg">
                <div className="relative aspect-square overflow-hidden rounded-2xl p-3">
                  {promo.badge && (
                    <span
                      className={`absolute left-5 top-5 z-10 rounded-full px-3 py-1 text-xs font-semibold text-primary-foreground ${promo.badgeColor}`}
                    >
                      {promo.badge}
                    </span>
                  )}
                  <img
                    src={promo.image}
                    alt={promo.title}
                    className="h-full w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="px-4 pb-5">
                  <h3 className="mb-1 font-heading text-lg font-bold text-foreground">
                    {promo.title}
                  </h3>
                  <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                    {promo.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-lg font-bold text-primary">
                      {promo.price}
                    </span>
                    <a
                      href="#"
                      className="text-sm font-medium text-foreground underline transition-colors hover:text-primary"
                    >
                      Detail
                    </a>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SpecialOffers;
