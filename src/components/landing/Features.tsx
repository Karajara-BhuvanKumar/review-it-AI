import { Shield, Brain, Search, Pen, BookOpen, BarChart3 } from "lucide-react";
import SectionReveal from "./SectionReveal";

const features = [
  {
    icon: Shield,
    title: "Keep Your Research Secure",
    description: "Your document stays private. Our AI analysis reviews your paper securely, offering trusted peer review insights.",
  },
  {
    icon: Search,
    title: "Spot Strengths & Weaknesses",
    description: "Identify strong points and weak areas instantly to refine your document. AI suggestions make it more compelling.",
  },
  {
    icon: Pen,
    title: "Fix Issues with Smart Edits",
    description: "Improve your research paper with automated peer review. We highlight clarity issues and suggest edits.",
  },
  {
    icon: BarChart3,
    title: "Boost Your Paper's Impact",
    description: "Enhance structure, flow, and effectiveness with our online review tool. Make your research stand out.",
  },
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Leverage advanced language models to get comprehensive feedback on methodology, arguments, and citations.",
  },
  {
    icon: BookOpen,
    title: "Journal Recommendations",
    description: "Get AI-powered suggestions for the best journals and conferences that match your research topic and quality.",
  },
];

const Features = () => (
  <section id="features" className="section-blue py-24 lg:py-32">
    <div className="container">
      <SectionReveal>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-card/20 text-primary-foreground text-sm font-semibold mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary-foreground leading-tight" style={{ textWrap: "balance" }}>
            Key Features That Make Us Different
          </h2>
          <p className="mt-4 text-primary-foreground/70 text-lg max-w-2xl mx-auto" style={{ textWrap: "pretty" }}>
            Review-it is a powerful peer review tool for academic and professional use. Leverage AI document analysis to perfect your research papers.
          </p>
        </div>
      </SectionReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <SectionReveal key={f.title} delay={i * 0.08}>
            <div className="group bg-card/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 hover:bg-card/20 transition-all duration-300 h-full">
              <div className="w-12 h-12 rounded-xl bg-card/20 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-200">
                <f.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-primary-foreground mb-3">{f.title}</h3>
              <p className="text-primary-foreground/65 leading-relaxed">{f.description}</p>
            </div>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
