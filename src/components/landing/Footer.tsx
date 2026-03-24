import { FileSearch, MapPin, Mail, Linkedin } from "lucide-react";

const Footer = () => (
  <footer id="contact" className="bg-card border-t border-border pt-16 pb-8">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <a href="#home" className="flex items-center gap-2 mb-5">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <FileSearch className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-foreground">
              Review<span className="text-primary">-it</span>
            </span>
          </a>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>3A, Queen Street, Croydon,<br />Adelaide, Australia</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span>customersupport@review-it.ai</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-10 gap-y-3 text-sm">
          {["Home", "How it works", "Pricing", "FAQ", "Blogs", "Contact us"].map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace(/\s+/g, "-")}`} className="text-muted-foreground hover:text-foreground transition-colors">
              {link}
            </a>
          ))}
        </div>

        <div className="flex md:justify-end">
          <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="border-t border-border pt-6">
        <p className="text-center text-sm text-muted-foreground">
          2026 Review-it. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
