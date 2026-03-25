import { MapPin, Clock, Shield } from "lucide-react";

const highlights = [
  { icon: MapPin, title: "Locally Based", text: "Proudly based in Wilmslow, serving Cheshire and surrounding areas." },
  { icon: Clock, title: "Fast Turnaround", text: "We know downtime costs money. Quick repairs and same-day call outs where possible." },
  { icon: Shield, title: "Experienced & Trusted", text: "Years of hands-on experience with all types of garden and plant machinery." },
];

const About = () => (
  <section id="about" className="py-20 md:py-28 bg-primary">
    <div className="container max-w-5xl text-center">
      <p className="font-body text-secondary tracking-[0.25em] uppercase text-sm mb-2">About Us</p>
      <h2 className="font-display text-3xl md:text-5xl text-primary-foreground mb-6">
        Keeping Cheshire Working
      </h2>
      <p className="font-body text-primary-foreground/80 text-lg max-w-3xl mx-auto mb-16 leading-relaxed">
        GPM Machinery is a hands-on, local business offering reliable plant hire, machinery repairs and garden tool servicing. Whether it's a strimmer that won't start or a digger that needs attention on site — give us a call and we'll sort it.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {highlights.map((h) => (
          <div key={h.title} className="text-center">
            <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
              <h.icon className="w-6 h-6 text-secondary-foreground" />
            </div>
            <h3 className="font-display text-lg text-primary-foreground mb-2">{h.title}</h3>
            <p className="font-body text-primary-foreground/70 text-sm leading-relaxed">{h.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
