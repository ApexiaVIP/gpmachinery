import { Wrench, Truck, PhoneCall, ShoppingBag } from "lucide-react";
import repairsImg from "@/assets/repairs.jpg";
import plantHireImg from "@/assets/plant-hire.jpg";
import calloutsImg from "@/assets/callouts.jpg";

const services = [
  {
    icon: Wrench,
    title: "Repairs & Servicing",
    description: "Expert repairs on all garden tools and plant machinery. Chainsaws, strimmers, mowers, hedge trimmers — pull cords to pistons, we fix it all.",
    image: repairsImg,
  },
  {
    icon: Truck,
    title: "Plant Hire",
    description: "Mini diggers, dumpers and plant machinery available for hire. Competitive rates for local Cheshire jobs, big or small.",
    image: plantHireImg,
  },
  {
    icon: PhoneCall,
    title: "Call Outs & Site Visits",
    description: "Machinery broken down on site? We come to you. Call us for a same-day or next-day site visit across Wilmslow and the surrounding areas.",
    image: calloutsImg,
  },
  {
    icon: ShoppingBag,
    title: "Sales",
    description: "We sell quality new and refurbished garden and plant machinery. Need something specific? We can source it quickly for you.",
    image: null,
  },
];

const Services = () => (
  <section id="services" className="py-20 md:py-28 bg-background">
    <div className="container max-w-6xl">
      <div className="text-center mb-16">
        <p className="font-body text-secondary tracking-[0.25em] uppercase text-sm mb-2">What We Do</p>
        <h2 className="font-display text-3xl md:text-5xl text-foreground">Our Services</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((s) => (
          <div
            key={s.title}
            className="group bg-card rounded-sm overflow-hidden border border-border hover:shadow-xl transition-shadow duration-300"
          >
            {s.image && (
              <div className="h-56 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-sm bg-primary flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl text-foreground">{s.title}</h3>
              </div>
              <p className="font-body text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
