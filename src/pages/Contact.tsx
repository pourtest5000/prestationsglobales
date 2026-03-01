import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="section-dark py-20">
          <div className="container">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Contact</h1>
            <p className="text-lg opacity-80 max-w-2xl">
              Une question ? Un projet ? Contactez-nous, nous sommes à votre écoute.
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Info + Map */}
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">Nos coordonnées</h2>
                <div className="space-y-4 mb-8">
                  {[
                    { icon: MapPin, label: "Adresse", value: "Rue El Jahid, Mohammédia" },
                    { icon: Phone, label: "Téléphone", value: "07 22 11 72 44 / 06 61 53 62 38" },
                    { icon: Mail, label: "Email", value: "contact@prestationsglobales.com" },
                    { icon: Clock, label: "Horaires", value: "Lundi - Vendredi : 9h - 17h" },
                  ].map((info) => (
                    <div key={info.label} className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-foreground">{info.label}</div>
                        <div className="text-sm text-muted-foreground">{info.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map */}
                <div className="rounded-xl overflow-hidden border border-border h-64">
                  <iframe
                    title="Localisation Prestations Globales"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.5!2d-7.38!3d33.69!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62d7c5f4cf9bf%3A0x0!2sRue+El+Jahid%2C+Mohamm%C3%A9dia!5e0!3m2!1sfr!2sma!4v1700000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              {/* Form */}
              <div className="bg-card border border-border rounded-2xl p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
