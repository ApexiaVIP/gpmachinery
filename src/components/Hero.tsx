import { Phone } from "lucide-react";
import heroBg from "@/assets/diggers-yard.jpg";

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    <img
      src={heroBg}
      alt="Excavator working in Cheshire countryside"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <p className="font-body text-secondary text-sm md:text-base tracking-[0.3em] uppercase mb-4 animate-fade-in-up">
        Wilmslow, Cheshire
      </p>
      <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-[0.95] mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
        Garden & Plant<br />Machinery
      </h1>
      <p className="font-body text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        Plant hire, machinery repairs &amp; garden tool servicing across Cheshire and surrounding areas. From strimmers to diggers — we keep you working.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
        <a
          href="tel:+4407717083947"
          className="inline-flex items-center gap-3 bg-secondary text-secondary-foreground font-display text-lg uppercase tracking-wider px-8 py-4 rounded-sm hover:brightness-110 transition-all"
        >
          <Phone className="w-5 h-5" />
          07717 083 947
        </a>
        <a
          href="tel:+441625583929"
          className="inline-flex items-center gap-3 bg-primary-foreground/10 border border-primary-foreground/30 text-primary-foreground font-display text-lg uppercase tracking-wider px-8 py-4 rounded-sm hover:bg-primary-foreground/20 transition-all"
        >
          <Phone className="w-5 h-5" />
          01625 583 929
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
