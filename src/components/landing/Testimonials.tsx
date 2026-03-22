import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import SectionReveal from "./SectionReveal";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Muhammad Ali Khan",
    role: "PhD Researcher",
    review: "The PDF peer review and editable DOCX fixes saved me weeks of work. What impressed me most was the privacy — my paper was automatically deleted after review. Highly recommended for serious researchers.",
    rating: 5,
    initials: "MK",
  },
  {
    name: "K. Sudha Deepthi",
    role: "Academic Professor",
    review: "A must-have resource for professionals. It's a game-changer for anyone looking to refine their work with precision and insight. The AI catches things I would have missed.",
    rating: 5,
    initials: "SD",
  },
  {
    name: "Dr. Sarah Chen",
    role: "Postdoctoral Fellow",
    review: "Review-it transformed how I prepare manuscripts. The strength and weakness analysis is spot-on, and the smart edits saved countless revision cycles. Worth every penny.",
    rating: 5,
    initials: "SC",
  },
  {
    name: "James Okafor",
    role: "Graduate Student",
    review: "As a non-native English speaker, this tool has been invaluable. The clarity suggestions and structural feedback helped me get published in a top-tier journal on my first submission.",
    rating: 5,
    initials: "JO",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Research Scientist",
    review: "I was skeptical about AI-driven reviews, but Review-it exceeded my expectations. The depth of analysis rivals that of human peer reviewers, and it's available 24/7.",
    rating: 5,
    initials: "PS",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((p) => (p + 1) % testimonials.length);

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container">
        <SectionReveal>
          <div className="mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full border border-border text-sm font-semibold text-primary mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-foreground">
              Know What People Say About Us
            </h2>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="relative max-w-4xl">
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-primary rounded-2xl p-8 md:p-10"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-full bg-card/20 flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {testimonials[current].initials}
                    </div>
                    <div>
                      <p className="font-bold text-primary-foreground">{testimonials[current].name}</p>
                      <p className="text-sm text-primary-foreground/60">{testimonials[current].role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-primary-foreground/85 leading-relaxed text-lg">
                    "{testimonials[current].review}"
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <button onClick={prev} className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:bg-muted transition-colors active:scale-95">
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-border"}`}
                  />
                ))}
              </div>
              <button onClick={next} className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:bg-muted transition-colors active:scale-95">
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default Testimonials;
