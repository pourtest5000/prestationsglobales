import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { services } from "@/data/services";

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container py-20 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">Service introuvable</h1>
          <Link to="/" className="btn-cta">Retour à l'accueil</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/70" />
          </div>
          <div className="container relative z-10 py-20">
            <Link to="/" className="inline-flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity mb-6 text-secondary-foreground">
              <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground">
                {service.title}
              </h1>
            </div>
            <p className="text-lg text-secondary-foreground/80 max-w-2xl">{service.introduction}</p>
          </div>
        </section>

        {/* Description */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Description</h2>
                <p className="text-muted-foreground leading-relaxed mb-10">{service.description}</p>

                <h3 className="font-display text-xl font-bold text-foreground mb-4">Nos prestations</h3>
                <div className="grid sm:grid-cols-2 gap-3 mb-10">
                  {service.prestations.map((p) => (
                    <div key={p} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                      <span className="text-sm text-foreground">{p}</span>
                    </div>
                  ))}
                </div>

                <h3 className="font-display text-xl font-bold text-foreground mb-4">Avantages</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.avantages.map((a) => (
                    <div key={a} className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm text-foreground">{a}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* CTA */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-display font-semibold text-foreground mb-3">{service.ctaText}</h4>
                  <div className="space-y-3">
                    <Link to="/contact" className="btn-cta w-full justify-center gap-2">
                      Nous contacter <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link to="/devis" className="btn-cta-outline w-full justify-center">
                      Demander un devis
                    </Link>
                  </div>
                </div>

                {/* Coordonnées */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-display font-semibold text-foreground mb-4">Coordonnées</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary shrink-0" />
                      Casablanca et régions
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Phone className="w-4 h-4 text-primary shrink-0" />
                      <a href="tel:0722117244" className="hover:text-primary transition-colors">07 22 11 72 44</a>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Mail className="w-4 h-4 text-primary shrink-0" />
                      <a href="mailto:contact@prestationsglobales.com" className="hover:text-primary transition-colors">
                        contact@prestationsglobales.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
