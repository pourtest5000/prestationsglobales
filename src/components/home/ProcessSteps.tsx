import { ClipboardList, BarChart3, Calculator, Wrench, PackageCheck, Headphones } from "lucide-react";

const steps = [
  { icon: ClipboardList, title: "Étude", desc: "Analyse de vos besoins" },
  { icon: BarChart3, title: "Évaluation", desc: "Diagnostic approfondi" },
  { icon: Calculator, title: "Estimation", desc: "Devis détaillé et transparent" },
  { icon: Wrench, title: "Réalisation", desc: "Mise en œuvre professionnelle" },
  { icon: PackageCheck, title: "Livraison", desc: "Tests et validation" },
  { icon: Headphones, title: "SAV", desc: "Suivi et support continu" },
];

const ProcessSteps = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Notre processus de travail
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Un processus d'intervention structuré garantissant qualité et suivi client.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {steps.map((step, i) => (
            <div key={step.title} className="text-center group">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <step.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-orange text-orange-foreground text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </div>
              </div>
              <h3 className="font-display font-semibold text-foreground mb-1">{step.title}</h3>
              <p className="text-xs text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
