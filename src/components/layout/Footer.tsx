import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="section-dark">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Entreprise */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4 text-primary">
              Prestations Globales
            </h3>
            <p className="text-sm opacity-80 leading-relaxed">
              Solutions informatiques et digitales complètes pour entreprises et particuliers.
              Votre prestataire unique pour des services multiples.
            </p>
          </div>

          {/* Menu rapide */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-lg">Menu rapide</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Accueil", path: "/" },
                { label: "À propos", path: "/a-propos" },
                { label: "Contact", path: "/contact" },
                { label: "Demander un devis", path: "/devis" },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-lg">Nos services</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Dépannage informatique", path: "/services/depannage-informatique" },
                { label: "Réseaux & Télécom", path: "/services/reseaux-telecom" },
                { label: "Vidéosurveillance", path: "/services/videosurveillance" },
                { label: "Création site web", path: "/services/creation-site-web" },
                { label: "Marketing digital", path: "/services/digital-marketing" },
                { label: "Domotique", path: "/services/domotique" },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-lg">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span className="opacity-80">Rue El Jahid, Mohammédia</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <div className="opacity-80">
                  <a href="tel:0722117244" className="hover:text-primary transition-colors">07 22 11 72 44</a>
                  {" / "}
                  <a href="tel:0661536238" className="hover:text-primary transition-colors">06 61 53 62 38</a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:contact@prestationsglobales.com" className="opacity-80 hover:text-primary transition-colors">
                  contact@prestationsglobales.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span className="opacity-80">Lun - Ven : 9h - 17h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/20 mt-12 pt-8 text-center text-sm opacity-60">
          © 2026 Prestations Globales. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
