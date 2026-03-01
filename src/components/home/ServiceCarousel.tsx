import { services } from "@/data/services";
import { Link } from "react-router-dom";

const ServiceCarousel = () => {
  // Double the items for infinite scroll
  const doubled = [...services, ...services];

  return (
    <section className="py-12 bg-secondary overflow-hidden">
      <div className="container mb-6">
        <h2 className="font-display text-2xl font-bold text-secondary-foreground text-center">
          Nos domaines d'expertise
        </h2>
      </div>
      <div className="carousel-container">
        <div className="carousel-track">
          {doubled.map((service, idx) => (
            <Link
              to={`/services/${service.id}`}
              key={`${service.id}-${idx}`}
              className="shrink-0 w-64 mx-3 group"
            >
              <div className="relative h-44 rounded-xl overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-display font-semibold text-sm text-secondary-foreground">
                    {service.shortTitle}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCarousel;
