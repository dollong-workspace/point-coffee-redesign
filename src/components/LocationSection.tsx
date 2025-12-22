import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import locationBg from "@/assets/location-bg.jpg";

export const LocationSection = () => {
  return (
    <section id="location" className="relative overflow-hidden py-20 md:py-28">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={locationBg}
          alt="Indonesian coffee plantation landscape"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/50 to-foreground/30" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
            Selalu Dekat Denganmu
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/80">
            Point Coffee hadir di lebih dari 1000 outlet di seluruh Indonesia.
          </p>

          <div className="mb-8 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 backdrop-blur-sm">
              <MapPin className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>

          <p className="mb-8 font-heading text-2xl font-semibold text-primary-foreground md:text-3xl">
            Temukan Outlet Terdekat
          </p>

          <Button
            size="lg"
            className="gap-2 text-base"
          >
            <MapPin className="h-5 w-5" />
            Cari Lokasi
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
