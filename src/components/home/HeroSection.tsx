import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/60" />

      <div className="container relative z-10 py-20 lg:py-28">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in">
            Solutions informatiques et digitales pour entreprises et particuliers
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Prestataire unique pour des services multiples — End to End
          </p>
          <p className="text-sm text-primary-foreground/60 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Maintenance informatique, réseaux, vidéosurveillance, sécurité électronique,
            création de sites web, digital signage, marketing digital, création de contenu,
            community management et domotique.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Link to="/devis" className="btn-cta gap-2">
              Demander un devis <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="btn-cta-outline border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Phone className="w-4 h-4 mr-2" /> Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
