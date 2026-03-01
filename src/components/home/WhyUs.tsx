import { Award, ShieldCheck, Eye, Heart } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Expérience et expertise",
    description: "Plus de 15 ans au service d'une clientèle exigeante.",
  },
  {
    icon: ShieldCheck,
    title: "Fiabilité et compétence",
    description: "Des solutions éprouvées et des techniciens qualifiés.",
  },
  {
    icon: Eye,
    title: "Honnêteté et transparence",
    description: "Communication claire et tarification juste.",
  },
  {
    icon: Heart,
    title: "Satisfaction client",
    description: "Un résultat irréprochable à chaque intervention.",
  },
];

const WhyUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pourquoi nous choisir ?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nous rassemblons une équipe compétente et expérimentée dont chaque membre
            se perfectionne sur sa tâche afin d'assurer un résultat irréprochable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <r.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 text-foreground">{r.title}</h3>
              <p className="text-sm text-muted-foreground">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
