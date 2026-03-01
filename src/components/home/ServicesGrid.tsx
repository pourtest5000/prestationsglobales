import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

const ServicesGrid = () => {
  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nos services
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Solutions diverses adaptées aux TPME et particuliers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="card-service flex flex-col">
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">{service.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{service.summary}</p>
                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center text-sm font-medium text-primary hover:gap-3 gap-2 transition-all"
                >
                  Voir plus <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
