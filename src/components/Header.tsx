import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-foreground/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        <a href="#" className="font-display text-xl md:text-2xl text-primary-foreground tracking-wider">
          GPM <span className="text-secondary">Machinery</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-display text-sm text-primary-foreground/80 hover:text-secondary uppercase tracking-wider transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+4407717083947"
            className="flex items-center gap-2 bg-secondary text-secondary-foreground font-display text-sm uppercase tracking-wider px-5 py-2.5 rounded-sm hover:brightness-110 transition-all"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </nav>

        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-foreground/95 backdrop-blur-sm border-t border-primary-foreground/10 pb-6">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block font-display text-sm text-primary-foreground/80 hover:text-secondary uppercase tracking-wider px-6 py-3 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <a
              href="tel:+4407717083947"
              className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-display text-sm uppercase tracking-wider px-5 py-2.5 rounded-sm"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
