import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import SectionReveal from "./SectionReveal";
import { motion, AnimatePresence } from "framer-motion";

const plans = [
  {
    name: "Quick Review",
    monthly: 6.99,
    yearly: 3.49,
    unit: "Per Document",
    popular: false,
    save: null,
    features: ["AI-Powered Review", "Strength Analysis", "Weakness Detection", "Clarity Score", "Structure Feedback", "Grammar Check"],
  },
  {
    name: "Trio Review",
    monthly: 13.99,
    yearly: 6.99,
    unit: "Per 3 Documents",
    popular: true,
    save: "$8.98",
    features: ["Everything in Quick", "Comparative Analysis", "Priority Processing", "Citation Review", "Impact Score", "Journal Suggestions"],
  },
  {
    name: "Unlimited Review",
    monthly: 59,
    yearly: 29.5,
    unit: "Unlimited / Year",
    popular: false,
    save: "$80.80",
    features: ["Everything in Trio", "Unlimited Reviews", "Priority Support", "Team Access", "API Access", "Custom Reports"],
  },
  {
    name: "Paper Fix",
    monthly: 13.99,
    yearly: 6.99,
    unit: "Per Document",
    popular: false,
    save: null,
    features: ["AI Review + Fixes", "Smart Edits", "Structure Rewrite", "Clarity Enhancement", "Grammar Fixes", "Formatting", "Citation Fixes", "Abstract Polish", "Conclusion Rewrite"],
  },
  {
    name: "Trio Fix",
    monthly: 24.99,
    yearly: 12.49,
    unit: "Per 3 Documents",
    popular: true,
    save: "$16.98",
    features: ["Everything in Paper Fix", "3 Documents", "Priority Queue", "Detailed Reports", "Track Changes", "Version History", "Reviewer Notes", "Style Guide", "Plagiarism Check"],
  },
  {
    name: "Unlimited Fix",
    monthly: 99,
    yearly: 49.5,
    unit: "Unlimited / Year",
    popular: false,
    save: "$180.80",
    features: ["Everything in Trio Fix", "Unlimited Fixes", "Dedicated Support", "Team Dashboard", "Custom Templates", "White Label", "SLA Guarantee", "Bulk Upload", "API Access"],
  },
];

const PricingCard = ({ plan, yearly }: { plan: typeof plans[0]; yearly: boolean }) => {
  const [expanded, setExpanded] = useState(false);
  const price = yearly ? plan.yearly : plan.monthly;

  return (
    <div className={`bg-card rounded-2xl p-6 shadow-lg shadow-foreground/5 border ${plan.popular ? "border-primary ring-2 ring-primary/20" : "border-border"} flex flex-col h-full`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
          {plan.popular && (
            <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-destructive text-destructive-foreground text-xs font-bold uppercase">
              Popular
            </span>
          )}
        </div>
        {plan.save && (
          <span className="px-2.5 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-bold">
            Save {plan.save}
          </span>
        )}
      </div>

      <div className="mb-4">
        <span className="text-3xl font-black text-foreground">${price}</span>
        <span className="text-sm text-muted-foreground ml-1">{plan.unit}</span>
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
      >
        Show ({plan.features.length} Key Features)
        {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden mb-4 space-y-2"
          >
            {plan.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {f}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <div className="mt-auto">
        <Button variant={plan.popular ? "default" : "outline"} className="w-full" size="lg">
          Start Reviewing <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

const Pricing = () => {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container">
        <SectionReveal>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full border border-border text-sm font-semibold text-primary mb-4">
              Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-foreground">Our Pricing Plans</h2>
            <p className="mt-3 text-muted-foreground">
              Choose the plan that best fits your needs and get started today.
            </p>

            <div className="mt-8 inline-flex items-center gap-1 bg-card rounded-full p-1 border border-border shadow-sm relative">
              {!yearly && (
                <span className="absolute -top-6 right-0 px-2 py-0.5 rounded-full bg-destructive text-destructive-foreground text-[10px] font-bold">
                  Save 50%
                </span>
              )}
              <button
                onClick={() => setYearly(false)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  !yearly ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setYearly(true)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  yearly ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground"
                }`}
              >
                Yearly
              </button>
            </div>
          </div>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <SectionReveal key={plan.name} delay={i * 0.06}>
              <PricingCard plan={plan} yearly={yearly} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
