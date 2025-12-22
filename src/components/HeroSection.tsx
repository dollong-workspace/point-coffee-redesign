import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import heroCoffee from "@/assets/hero-coffee.jpg";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="container py-12 md:py-20 lg:py-24">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Content */}
          <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
              <span className="h-2 w-2 animate-pulse-subtle rounded-full bg-primary" />
              <span className="text-sm font-medium text-primary">
                Freshly Brewed Everyday
              </span>
            </div>

            <h1 className="mb-6 font-heading text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Awaken Your{" "}
              <span className="text-primary">Senses</span> Today
            </h1>

            <p className="mb-8 max-w-lg text-base text-muted-foreground md:text-lg">
              Nikmati kopi berkualitas premium dengan biji kopi asli Indonesia. 
              Rasakan kehangatan dalam setiap tegukan bersama Point Coffee.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="gap-2 text-base">
                Order Now
              </Button>
              <Button variant="outline" size="lg" className="text-base">
                View Promotions
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative">
              <div className="relative z-10 overflow-hidden rounded-3xl">
                <img
                  src={heroCoffee}
                  alt="Delicious iced coffee latte with palm sugar syrup"
                  className="h-64 w-64 object-cover sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-[450px] lg:w-[450px]"
                />
              </div>

              {/* Best Seller Badge */}
              <div className="absolute -bottom-4 left-1/2 z-20 -translate-x-1/2 animate-fade-in rounded-2xl border border-border bg-card px-4 py-3 shadow-card sm:left-auto sm:right-0 sm:translate-x-0">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
                    <Star className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">BEST SELLER</p>
                    <p className="font-heading text-sm font-semibold">
                      Palm Sugar Latte
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-accent/20 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
