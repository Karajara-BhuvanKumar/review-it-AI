import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionReveal from "./SectionReveal";

const faqs = [
  {
    q: "How secure is my document/manuscript?",
    a: "We take document security seriously. Your manuscript is automatically deleted after the AI-powered peer review is complete. We prioritize the security and privacy of your data over everything else.",
  },
  {
    q: "How does Review-it work?",
    a: "Simply upload your document, and our AI engine analyzes it for strengths, weaknesses, clarity, structure, and more. You receive a detailed report with actionable suggestions within minutes.",
  },
  {
    q: "What AI models does Review-it use?",
    a: "Review-it leverages state-of-the-art large language models fine-tuned specifically for academic and professional document review, ensuring high-quality, domain-aware feedback.",
  },
  {
    q: "Why is there no free trial for the document review tool?",
    a: "Each review consumes significant AI computing resources. Our pricing is designed to be affordable per document while ensuring the highest quality analysis for every submission.",
  },
  {
    q: "How can I contact Review-it for peer review support?",
    a: "You can reach our support team at customersupport@review-it.ai. We typically respond within 24 hours for all inquiries related to document reviews, billing, or technical issues.",
  },
];

const FAQ = () => (
  <section id="faq" className="py-24 lg:py-32 bg-background">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <SectionReveal>
          <span className="inline-block px-4 py-1.5 rounded-full border border-border text-sm font-semibold text-primary mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-foreground">
            Have More Questions?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md">
            Find answers to common questions about our AI-powered document review platform.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded-xl px-5 data-[state=open]:border-primary data-[state=open]:bg-primary data-[state=open]:text-primary-foreground overflow-hidden transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-4 data-[state=open]:text-primary-foreground">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed opacity-80 pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </SectionReveal>
      </div>
    </div>
  </section>
);

export default FAQ;
