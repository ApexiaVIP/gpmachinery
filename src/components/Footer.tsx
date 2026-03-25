const Footer = () => (
  <footer className="bg-foreground py-10">
    <div className="container text-center">
      <p className="font-display text-lg text-primary-foreground/60 tracking-wider mb-2">
        GPM <span className="text-secondary">Machinery</span>
      </p>
      <p className="font-body text-primary-foreground/40 text-sm">
        Wilmslow, Cheshire · Plant Hire · Repairs · Garden Tools
      </p>
      <p className="font-body text-primary-foreground/30 text-xs mt-4">
        © {new Date().getFullYear()} Garden & Plant Machinery. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
