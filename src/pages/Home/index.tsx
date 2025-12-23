import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SpecialOffers from "@/components/SpecialOffers";
import VibeSection from "@/components/VibeSection";
import LocationSection from "@/components/LocationSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <SpecialOffers />
        <VibeSection />
        <LocationSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
