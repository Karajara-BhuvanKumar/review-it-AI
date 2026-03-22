import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SectionReveal from "./SectionReveal";

const FinalCTA = () => (
  <section className="py-24 lg:py-32 bg-background">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <SectionReveal>
          <h2 className="text-3xl sm:text-4xl font-black text-foreground leading-tight">
            Ready to try our AI Research Paper Review
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-lg">
            Use Review-it, the ultimate AI peer review tool, to get a complete document review with an overall quality score. Our AI document analysis evaluates each section, highlights strengths and weaknesses, and offers fixes for improvement.
          </p>
          <Button variant="hero" size="xl" className="mt-8">
            Start Reviewing <ArrowRight className="w-5 h-5" />
          </Button>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <div className="relative max-w-sm mx-auto">
            <div className="bg-card rounded-2xl shadow-2xl shadow-primary/10 border border-border p-8">
              <div className="flex gap-3 mb-5">
                <div className="w-20 h-3 rounded-full bg-muted" />
                <div className="w-12 h-3 rounded-full bg-muted/60" />
              </div>
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`h-2 rounded-full mb-3 ${i % 2 === 0 ? "w-full bg-muted/80" : "w-3/4 bg-muted/50"}`} />
              ))}
              <div className="mt-8 w-20 h-20 rounded-xl bg-primary mx-auto flex items-center justify-center">
                <span className="text-2xl font-black text-primary-foreground">AI</span>
              </div>
              <div className="mt-6 flex justify-center gap-3">
                {[1, 2, 3].map((d) => (
                  <div key={d} className="w-2 h-2 rounded-full bg-primary/40" />
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </div>
  </section>
);

export default FinalCTA;
