import SectionReveal from "./SectionReveal";

const institutions = [
  "Carnegie Mellon", "Purdue", "U of Nottingham", "Florida State",
  "Illinois Springfield", "Northcap University", "Silesian U of Tech",
  "Witwatersrand", "CAAS", "Cape Peninsula UT",
];

const TrustedBy = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container">
      <SectionReveal>
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full border border-border text-sm font-semibold text-primary mb-4">
            Our Partners
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-foreground" style={{ textWrap: "balance" }}>
            Trusted by Leading Institutions
          </h2>
          <p className="mt-3 text-muted-foreground">
            Trusted by 5,000 organizations and 65 Thousand people
          </p>
        </div>
      </SectionReveal>

      <SectionReveal delay={0.15}>
        <div className="overflow-hidden relative">
          <div className="flex animate-logo-scroll gap-12 w-max">
            {[...institutions, ...institutions].map((name, i) => (
              <div
                key={i}
                className="flex-shrink-0 h-16 px-6 flex items-center justify-center bg-card rounded-xl border border-border shadow-sm"
              >
                <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap">{name}</span>
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </SectionReveal>
    </div>
  </section>
);

export default TrustedBy;
