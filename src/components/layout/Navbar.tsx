import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";

const navLinks = [
  { label: "Accueil", path: "/" },
  { label: "À propos", path: "/a-propos" },
  { label: "Services", path: "/#services" },
  { label: "Contact", path: "/contact" },
  { label: "Demander un devis", path: "/devis" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (path: string) => {
    setOpen(false);
    if (path === "/#services" && location.pathname === "/") {
      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-secondary text-secondary-foreground text-xs py-2">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="tel:0722117244" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Phone className="w-3 h-3" /> 07 22 11 72 44
            </a>
            <a href="mailto:contact@prestationsglobales.com" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Mail className="w-3 h-3" /> contact@prestationsglobales.com
            </a>
          </div>
          <span className="hidden md:block">Lun - Ven : 9h - 17h</span>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <Link to="/" className="font-display text-xl font-bold text-primary tracking-tight">
            Prestations <span className="text-accent">Globales</span>
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path === "/#services" ? "/" : link.path}
                onClick={() => handleNavClick(link.path)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  link.path === "/devis"
                    ? "btn-cta text-sm"
                    : location.pathname === link.path
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:text-primary hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-border bg-card animate-fade-in">
            <div className="container py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path === "/#services" ? "/" : link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    link.path === "/devis"
                      ? "btn-cta text-center"
                      : "text-foreground hover:text-primary hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
