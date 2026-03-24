import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link

const Hero = () => (
  <section id="home" className="hero-gradient relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-32">
    <div className="container relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight text-foreground" style={{ textWrap: "balance" }}>
            AI-Driven Reviews{" "}
            <span className="text-gradient">Smarter</span> Decisions
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed" style={{ textWrap: "pretty" }}>
            Review-it provides a comprehensive peer review of your document,
            identifying its strengths and weaknesses. Perfect your Research Papers,
            Proposals, Thesis, and CVs.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/upload"> {/* Wrap the button with Link */}
              <Button variant="hero" size="xl">
                Start Reviewing <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Button variant="hero-outline" size="xl">
              <Play className="w-4 h-4" /> Learn More
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Document illustration */}
            <div className="absolute inset-8 bg-card rounded-2xl shadow-2xl shadow-primary/10 border border-border p-6">
              <div className="flex gap-3 mb-4">
                <div className="w-16 h-2.5 rounded-full bg-primary/20" />
                <div className="w-10 h-2.5 rounded-full bg-primary/10" />
              </div>
              {[...Array(6)].map((_, i) => (
                <div key={i} className={`h-2 rounded-full mb-3 ${i % 3 === 0 ? "w-full bg-muted" : i % 3 === 1 ? "w-4/5 bg-muted/70" : "w-3/5 bg-muted/50"}`} />
              ))}
              <div className="mt-6 flex gap-2">
                <div className="px-3 py-1.5 rounded-lg bg-primary/10 text-xs font-semibold text-primary">Score: 87%</div>
                <div className="px-3 py-1.5 rounded-lg bg-green-100 text-xs font-semibold text-green-700">Strong</div>
              </div>
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 right-4 bg-primary text-primary-foreground rounded-xl px-4 py-3 shadow-xl shadow-primary/30 text-sm font-bold"
            >
              AI
            </motion.div>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-12 left-0 bg-card rounded-xl px-4 py-3 shadow-xl border border-border"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs font-semibold text-foreground">Review Complete</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
    {/* Background decorations */}
    <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
    <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
  </section>
);

export default Hero;
