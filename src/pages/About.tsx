import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { services } from "@/data/services";
import { Target, Award, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="section-dark py-20">
          <div className="container">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">À propos</h1>
            <p className="text-lg opacity-80 max-w-2xl">
              Entreprise de services informatiques et digitaux, spécialisée dans l'accompagnement
              des entreprises et particuliers.
            </p>
          </div>
        </section>

        {/* Présentation */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                  Qui sommes-nous ?
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  <strong className="text-foreground">Prestations Globales</strong> est une entreprise
                  de services informatiques et digitaux spécialisée dans l'accompagnement des TPME et
                  des particuliers. Notre mission : vulgariser le service informatique et digital en le
                  rendant accessible à toutes les activités et tous les budgets.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Nos prestations informatiques bénéficient de <strong className="text-foreground">15 ans
                  d'expérience</strong> au service d'une clientèle hautement exigeante, que ce soit sur le plan
                  compétences, efficacité et satisfaction globale.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { icon: Target, title: "Notre objectif", desc: "Rendre la technologie accessible à tous" },
                    { icon: Award, title: "Notre force", desc: "15 ans d'expertise reconnue" },
                    { icon: Users, title: "Notre approche", desc: "Prestataire unique, services multiples" },
                  ].map((item) => (
                    <div key={item.title} className="bg-card border border-border rounded-xl p-4">
                      <item.icon className="w-6 h-6 text-primary mb-2" />
                      <h4 className="font-display font-semibold text-sm text-foreground mb-1">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                  Nos valeurs
                </h3>
                <div className="space-y-4">
                  {[
                    { title: "Expertise", desc: "Maîtrise technique dans chaque domaine d'intervention." },
                    { title: "Compétence", desc: "Des équipes formées et certifiées en continu." },
                    { title: "Expérience", desc: "Plus de 15 ans au service de clients exigeants." },
                    { title: "Honnêteté", desc: "Transparence totale dans nos diagnostics et tarifications." },
                    { title: "Satisfaction client", desc: "Un engagement absolu envers la qualité du résultat." },
                  ].map((v) => (
                    <div key={v.title} className="flex gap-4 p-4 bg-muted/50 rounded-xl">
                      <div className="w-1 bg-primary rounded-full shrink-0" />
                      <div>
                        <h4 className="font-display font-semibold text-foreground">{v.title}</h4>
                        <p className="text-sm text-muted-foreground">{v.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services list */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
              Nos domaines d'intervention
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {services.map((s) => (
                <div key={s.id} className="flex flex-col items-center gap-2 p-4 bg-card border border-border rounded-xl text-center hover:border-primary/30 transition-colors">
                  <s.icon className="w-7 h-7 text-primary" />
                  <span className="text-xs font-medium text-foreground">{s.shortTitle}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
