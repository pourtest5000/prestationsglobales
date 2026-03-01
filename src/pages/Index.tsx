import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServiceCarousel from "@/components/home/ServiceCarousel";
import WhyUs from "@/components/home/WhyUs";
import ServicesGrid from "@/components/home/ServicesGrid";
import ContractAdvantages from "@/components/home/ContractAdvantages";
import ExpertiseGrid from "@/components/home/ExpertiseGrid";
import ProcessSteps from "@/components/home/ProcessSteps";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ServiceCarousel />
        <WhyUs />
        <ServicesGrid />
        <ContractAdvantages />
        <ExpertiseGrid />
        <ProcessSteps />

        {/* Contact section */}
        <section className="py-20 bg-background">
          <div className="container max-w-2xl">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Contactez-nous
              </h2>
              <p className="text-muted-foreground">
                Assistance informatique de 9h à 18h, 7j/7.
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
