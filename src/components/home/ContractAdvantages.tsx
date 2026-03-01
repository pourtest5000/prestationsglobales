import { CheckCircle } from "lucide-react";

const advantages = [
  "Support illimité",
  "Intervention rapide",
  "Technicien dédié",
  "Priorité clients sous contrat",
  "Maintenance préventive (proactive)",
];

const ContractAdvantages = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Avantages contrats de maintenance
            </h2>
            <p className="text-muted-foreground mb-8">
              Souscrivez un contrat de maintenance et bénéficiez d'un accompagnement
              personnalisé pour la gestion de votre parc informatique.
            </p>
            <ul className="space-y-4">
              {advantages.map((adv) => (
                <li key={adv} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  <span className="font-medium text-foreground">{adv}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "15+", label: "Années d'expérience" },
              { value: "500+", label: "Clients satisfaits" },
              { value: "24h", label: "Délai d'intervention" },
              { value: "7j/7", label: "Assistance disponible" },
            ].map((stat) => (
              <div key={stat.label} className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-colors">
                <div className="font-display text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContractAdvantages;
