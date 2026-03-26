import { Phone, MapPin } from "lucide-react";

const Contact = () => (
  <section id="contact" className="py-20 md:py-28 bg-muted">
    <div className="container max-w-4xl text-center">
      <p className="font-body text-secondary tracking-[0.25em] uppercase text-sm mb-2">Get In Touch</p>
      <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">Call Us Today</h2>
      <p className="font-body text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
        We're a hands-on team — the quickest way to reach us is by phone. Free, no-obligation quotes for all repairs, hire and sales.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
        <a
          href="tel:+4407717083947"
          className="inline-flex items-center gap-4 bg-primary text-primary-foreground font-display text-2xl md:text-3xl uppercase tracking-wider px-10 py-5 rounded-sm hover:brightness-110 transition-all"
        >
          <Phone className="w-7 h-7" />
          07717 083 947
        </a>
        <a
          href="tel:+441625583929"
          className="inline-flex items-center gap-4 bg-foreground text-primary-foreground font-display text-2xl md:text-3xl uppercase tracking-wider px-10 py-5 rounded-sm hover:brightness-110 transition-all"
        >
          <Phone className="w-7 h-7" />
          01625 583 929
        </a>
      </div>

      <div className="flex items-center justify-center text-muted-foreground font-body">
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-primary" />
          <span>Wilmslow, Cheshire</span>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
