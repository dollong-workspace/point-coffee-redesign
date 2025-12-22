export const PartnersSection = () => {
  const partners = [
    { name: "GrabFood", icon: "🛵" },
    { name: "GoFood", icon: "🍽️" },
    { name: "ShopeeFood", icon: "🛒" },
    { name: "KlikIndomaret", icon: "🏪" },
  ];

  return (
    <section className="bg-background py-12 md:py-16">
      <div className="container">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Also Available On
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 transition-colors hover:bg-muted"
            >
              <span className="text-xl">{partner.icon}</span>
              <span className="font-heading text-sm font-semibold text-foreground md:text-base">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
