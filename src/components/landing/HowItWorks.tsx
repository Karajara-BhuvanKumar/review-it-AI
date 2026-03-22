import { Upload, Brain, CheckCircle } from "lucide-react";
import SectionReveal from "./SectionReveal";

const steps = [
  {
    num: 1,
    icon: Upload,
    title: "Upload your document",
    description: "Securely submit your document for peer review. Review-it supports research papers, proposals, thesis, slides, and CVs.",
  },
  {
    num: 2,
    icon: Brain,
    title: "Understand review",
    description: "Get an AI-powered peer review with detailed feedback. Review-it analyzes strengths, weaknesses, and suggests improvements.",
  },
  {
    num: 3,
    icon: CheckCircle,
    title: "Fix weaknesses",
    description: "Automatically fix issues with Review-it's peer review tool. Get actionable edits to enhance clarity, structure, and impact.",
  },
];

const HowItWorks = () => (
  <section id="how-it-works" className="section-blue py-24 lg:py-32">
    <div className="container">
      <SectionReveal>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-card/20 text-primary-foreground text-sm font-semibold mb-4">
            Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary-foreground leading-tight" style={{ textWrap: "balance" }}>
            Review Your Document<br />In Just <span className="text-accent">3 Easy Steps</span>
          </h2>
          <p className="mt-4 text-primary-foreground/70 text-lg max-w-2xl mx-auto" style={{ textWrap: "pretty" }}>
            Discover how Review-it simplifies the document review process using AI. Submit, analyze, and improve research papers, proposals, and more.
          </p>
        </div>
      </SectionReveal>

      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((s, i) => (
          <SectionReveal key={s.num} delay={i * 0.1}>
            <div className="bg-card rounded-2xl p-8 shadow-lg shadow-foreground/5 h-full">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm mb-5">
                {s.num}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
