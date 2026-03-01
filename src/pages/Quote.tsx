import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/ContactForm";
import { services } from "@/data/services";

const Quote = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="section-dark py-20">
          <div className="container">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Demander un devis</h1>
            <p className="text-lg opacity-80 max-w-2xl">
              Décrivez votre projet et recevez une estimation personnalisée sous 24h.
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container max-w-4xl">
            <div className="grid lg:grid-cols-5 gap-10">
              {/* Services list */}
              <div className="lg:col-span-2">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">Nos services</h3>
                <div className="space-y-2">
                  {services.map((s) => (
                    <div key={s.id} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <s.icon className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm text-foreground">{s.shortTitle}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-3 bg-card border border-border rounded-2xl p-8">
                <ContactForm title="Formulaire de devis" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Quote;
