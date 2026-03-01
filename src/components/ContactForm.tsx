import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  nom: z.string().trim().min(1, "Le nom est obligatoire").max(100),
  email: z.string().trim().email("Adresse email invalide").max(255),
  telephone: z.string().trim().max(20).optional(),
  sujet: z.string().trim().min(1, "Le sujet est obligatoire").max(200),
  message: z.string().trim().min(1, "Le message est obligatoire").max(2000),
  honeypot: z.string().max(0), // anti-spam
});

type FormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  showSubject?: boolean;
  showService?: boolean;
  title?: string;
}

const ContactForm = ({ showSubject = true, title = "Envoyez-nous un message" }: ContactFormProps) => {
  const [form, setForm] = useState<FormData>({
    nom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
    honeypot: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrors({});

    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof FormData;
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      setStatus("idle");
      return;
    }

    // For now, simulate success (backend edge function needed for SMTP)
    await new Promise((res) => setTimeout(res, 1000));
    setStatus("success");
    setForm({ nom: "", email: "", telephone: "", sujet: "", message: "", honeypot: "" });
  };

  if (status === "success") {
    return (
      <div className="bg-accent/10 border border-accent rounded-xl p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
          <Send className="w-8 h-8 text-accent" />
        </div>
        <h3 className="font-display text-xl font-semibold text-foreground mb-2">Message envoyé !</h3>
        <p className="text-muted-foreground text-sm">
          Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-primary hover:underline"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <h3 className="font-display text-xl font-semibold text-foreground mb-2">{title}</h3>

      {/* Honeypot - hidden */}
      <input
        type="text"
        name="honeypot"
        value={form.honeypot}
        onChange={handleChange}
        className="absolute opacity-0 h-0 w-0 pointer-events-none"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nom" className="block text-sm font-medium text-foreground mb-1">Nom *</label>
          <input
            id="nom" name="nom" value={form.nom} onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
            placeholder="Votre nom"
          />
          {errors.nom && <p className="text-destructive text-xs mt-1">{errors.nom}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email *</label>
          <input
            id="email" name="email" type="email" value={form.email} onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
            placeholder="votre@email.com"
          />
          {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="telephone" className="block text-sm font-medium text-foreground mb-1">Téléphone</label>
          <input
            id="telephone" name="telephone" value={form.telephone} onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
            placeholder="06 00 00 00 00"
          />
        </div>
        {showSubject && (
          <div>
            <label htmlFor="sujet" className="block text-sm font-medium text-foreground mb-1">Sujet *</label>
            <input
              id="sujet" name="sujet" value={form.sujet} onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
              placeholder="Sujet de votre message"
            />
            {errors.sujet && <p className="text-destructive text-xs mt-1">{errors.sujet}</p>}
          </div>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message *</label>
        <textarea
          id="message" name="message" rows={5} value={form.message} onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
          placeholder="Décrivez votre besoin..."
        />
        {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-cta w-full sm:w-auto gap-2 disabled:opacity-50"
      >
        {status === "loading" ? (
          <><Loader2 className="w-4 h-4 animate-spin" /> Envoi en cours...</>
        ) : (
          <><Send className="w-4 h-4" /> Envoyer</>
        )}
      </button>

      <p className="text-xs text-muted-foreground">
        Assistance informatique disponible de 9h à 18h, 7j/7.
      </p>
    </form>
  );
};

export default ContactForm;
