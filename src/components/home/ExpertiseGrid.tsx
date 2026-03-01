import { services } from "@/data/services";

const ExpertiseGrid = () => {
  return (
    <section className="py-20 section-dark">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Notre savoir-faire
          </h2>
          <p className="opacity-70 max-w-xl mx-auto">
            Une expertise diversifiée pour répondre à tous vos besoins technologiques.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {services.map((s) => (
            <div
              key={s.id}
              className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-white/10 transition-all duration-300 text-center"
            >
              <s.icon className="w-8 h-8 text-primary" />
              <span className="text-xs font-medium opacity-90">{s.shortTitle}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseGrid;
