import {
  Monitor, Network, FileCheck, Camera, Lock, HardDrive, Shield, Cloud,
  Globe, MonitorPlay, TrendingUp, Palette, Users, Home, Search
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import imgDepannage from "@/assets/service-depannage.jpg";
import imgReseaux from "@/assets/service-reseaux.jpg";
import imgMaintenance from "@/assets/service-maintenance.jpg";
import imgVideo from "@/assets/service-videosurveillance.jpg";
import imgAcces from "@/assets/service-acces.jpg";
import imgData from "@/assets/service-data.jpg";
import imgSecurite from "@/assets/service-securite.jpg";
import imgVirtualisation from "@/assets/service-virtualisation.jpg";
import imgWeb from "@/assets/service-web.jpg";
import imgSignage from "@/assets/service-signage.jpg";
import imgMarketing from "@/assets/service-marketing.jpg";
import imgContenu from "@/assets/service-contenu.jpg";
import imgCommunity from "@/assets/service-community.jpg";
import imgDomotique from "@/assets/service-domotique.jpg";
import imgSeo from "@/assets/service-seo.jpg";

export interface Service {
  id: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  image: string;
  summary: string;
  introduction: string;
  description: string;
  prestations: string[];
  avantages: string[];
  ctaText: string;
}

export const services: Service[] = [
  {
    id: "depannage-informatique",
    title: "Dépannage Informatique",
    shortTitle: "Dépannage",
    icon: Monitor,
    image: imgDepannage,
    summary: "Diagnostic, réparation et optimisation de vos équipements informatiques.",
    introduction: "Service de dépannage et maintenance informatique pour entreprises et particuliers. Intervention rapide pour des résolutions rapides et efficaces.",
    description: "Nous assurons le diagnostic, la réparation et l'optimisation de vos équipements informatiques (PC et Mac). Intervention sur site ou à distance selon la nature de la panne.",
    prestations: ["Réparation PC et Mac", "Réinstallation système", "Suppression virus et malware", "Optimisation performances", "Remplacement composants", "Télémaintenance"],
    avantages: ["Intervention rapide", "Expertise multi-marques", "Solutions durables", "Assistance à distance", "Conseils d'achat et d'utilisation"],
    ctaText: "Contactez-nous pour un dépannage rapide",
  },
  {
    id: "reseaux-telecom",
    title: "Réseaux & Télécom",
    shortTitle: "Réseaux",
    icon: Network,
    image: imgReseaux,
    summary: "Installation et maintenance de réseaux informatiques et solutions télécom.",
    introduction: "Installation et maintenance de réseaux informatiques et solutions télécom pour entreprises et professionnels.",
    description: "Nous concevons et déployons des infrastructures réseau fiables permettant la communication, le partage de données et l'accès Internet sécurisé au sein de votre structure.",
    prestations: ["Installation réseau LAN / Wi-Fi", "Câblage informatique", "Configuration routeurs / switchs", "Téléphonie IP (VoIP)", "Interconnexion bureaux", "Optimisation réseau"],
    avantages: ["Réseau stable et sécurisé", "Couverture Wi-Fi optimisée", "Performance professionnelle", "Installation sur mesure", "Évolutivité"],
    ctaText: "Demandez une étude réseau",
  },
  {
    id: "contrat-maintenance",
    title: "Contrat de Maintenance",
    shortTitle: "Maintenance",
    icon: FileCheck,
    image: imgMaintenance,
    summary: "Maintenance préventive et corrective pour un parc informatique fiable.",
    introduction: "Maintenance informatique préventive et corrective pour entreprises souhaitant un parc informatique fiable et performant.",
    description: "Nous assurons le suivi, la surveillance et l'entretien régulier de vos équipements afin d'éviter les pannes et garantir la continuité d'activité.",
    prestations: ["Maintenance préventive", "Maintenance corrective", "Supervision parc informatique", "Mises à jour systèmes", "Assistance utilisateurs", "Support à distance"],
    avantages: ["Réduction des pannes", "Budget maîtrisé", "Support prioritaire", "Continuité d'activité", "Suivi professionnel"],
    ctaText: "Demandez un contrat de maintenance",
  },
  {
    id: "videosurveillance",
    title: "Vidéosurveillance",
    shortTitle: "Vidéosurveillance",
    icon: Camera,
    image: imgVideo,
    summary: "Systèmes de vidéosurveillance pour la protection de vos locaux.",
    introduction: "Installation de systèmes de vidéosurveillance pour la protection des locaux professionnels et résidentiels.",
    description: "Nous déployons des solutions de surveillance IP permettant de visualiser, enregistrer et sécuriser vos espaces en temps réel, sur site ou à distance.",
    prestations: ["Installation caméras IP", "Enregistreur NVR/DVR", "Accès à distance mobile", "Surveillance intérieure/extérieure", "Maintenance système", "Extension installation"],
    avantages: ["Sécurité renforcée", "Visualisation à distance", "Haute qualité vidéo", "Dissuasion efficace", "Installation professionnelle"],
    ctaText: "Sécurisez vos locaux dès maintenant",
  },
  {
    id: "controle-acces",
    title: "Contrôle d'Accès",
    shortTitle: "Contrôle d'accès",
    icon: Lock,
    image: imgAcces,
    summary: "Solutions de contrôle d'accès pour sécuriser vos bâtiments.",
    introduction: "Solutions de contrôle d'accès pour gérer et sécuriser l'entrée des bâtiments et zones sensibles.",
    description: "Nous installons des systèmes permettant de contrôler et tracer les accès (badges, codes, biométrie) pour entreprises, immeubles et sites sécurisés.",
    prestations: ["Lecteurs badges", "Claviers à code", "Biométrie", "Serrures électriques", "Gestion accès portes", "Interphonie"],
    avantages: ["Accès sécurisé", "Traçabilité entrées", "Gestion utilisateurs", "Intégration sécurité", "Fiabilité"],
    ctaText: "Installez un contrôle d'accès sécurisé",
  },
  {
    id: "recuperation-donnees",
    title: "Récupération de Données",
    shortTitle: "Récupération données",
    icon: HardDrive,
    image: imgData,
    summary: "Récupération de données sur disques durs, SSD et supports endommagés.",
    introduction: "Service de récupération de données sur disques durs, SSD, clés USB et supports endommagés.",
    description: "Nous intervenons en cas de perte de fichiers due à panne, suppression accidentelle, virus ou support défectueux afin de restaurer vos données essentielles.",
    prestations: ["Récupération disque dur", "Récupération SSD", "Récupération clé USB", "Récupération carte mémoire", "Données supprimées", "Supports corrompus"],
    avantages: ["Taux de récupération élevé", "Confidentialité garantie", "Diagnostic rapide", "Supports variés", "Expertise technique"],
    ctaText: "Demandez une récupération de données",
  },
  {
    id: "securite-informatique",
    title: "Sécurité Informatique",
    shortTitle: "Sécurité",
    icon: Shield,
    image: imgSecurite,
    summary: "Protection des systèmes et données contre les cybermenaces.",
    introduction: "Protection des systèmes informatiques et données contre virus, intrusions et cybermenaces.",
    description: "Nous sécurisons postes, réseaux et données des entreprises et professionnels via solutions antivirus, pare-feu et bonnes pratiques cybersécurité.",
    prestations: ["Installation antivirus", "Firewall réseau", "Sécurisation Wi-Fi", "Sauvegarde données", "Protection postes", "Audit sécurité"],
    avantages: ["Protection données", "Prévention attaques", "Conformité sécurité", "Surveillance risques", "Tranquillité"],
    ctaText: "Sécurisez votre informatique",
  },
  {
    id: "virtualisation",
    title: "Virtualisation",
    shortTitle: "Virtualisation",
    icon: Cloud,
    image: imgVirtualisation,
    summary: "Solutions de virtualisation pour optimiser vos ressources IT.",
    introduction: "Déploiement de solutions de virtualisation pour optimiser l'utilisation de vos ressources informatiques.",
    description: "Nous mettons en place des environnements virtualisés permettant de consolider vos serveurs, réduire les coûts et améliorer la flexibilité de votre infrastructure IT.",
    prestations: ["Virtualisation serveurs", "Machines virtuelles", "Cloud privé", "Migration virtuelle", "Haute disponibilité", "Sauvegarde VM"],
    avantages: ["Réduction des coûts", "Flexibilité accrue", "Gestion simplifiée", "Performance optimale", "Récupération rapide"],
    ctaText: "Optimisez votre infrastructure",
  },
  {
    id: "creation-site-web",
    title: "Création Site Web",
    shortTitle: "Site Web",
    icon: Globe,
    image: imgWeb,
    summary: "Sites web professionnels, modernes et optimisés pour votre visibilité.",
    introduction: "Création de sites web professionnels pour entreprises, indépendants et commerces.",
    description: "Nous concevons des sites modernes, responsive et optimisés pour la visibilité en ligne afin de présenter vos services et générer des clients.",
    prestations: ["Site vitrine", "Site entreprise", "Landing page", "Refonte site", "Optimisation SEO", "Maintenance site"],
    avantages: ["Design professionnel", "Visibilité Internet", "Compatible mobile", "Image moderne", "Gestion simple"],
    ctaText: "Créez votre site web",
  },
  {
    id: "affichage-dynamique",
    title: "Affichage Dynamique",
    shortTitle: "Digital Signage",
    icon: MonitorPlay,
    image: imgSignage,
    summary: "Solutions d'affichage dynamique pour une communication visuelle percutante.",
    introduction: "Solutions d'affichage dynamique pour communication visuelle en entreprise, commerce et espaces publics.",
    description: "Nous installons des écrans d'affichage permettant de diffuser contenus, promotions et informations en temps réel sur vos lieux d'activité.",
    prestations: ["Écrans professionnels", "Lecteurs multimédia", "Logiciel affichage", "Gestion contenus", "Installation écrans", "Maintenance"],
    avantages: ["Communication moderne", "Impact visuel fort", "Mise à jour rapide", "Valorisation image", "Attractivité clients"],
    ctaText: "Installez un affichage dynamique",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & Sponsoring",
    shortTitle: "Marketing Digital",
    icon: TrendingUp,
    image: imgMarketing,
    summary: "Stratégies digitales pour développer votre visibilité en ligne.",
    introduction: "Services de marketing digital pour développer votre visibilité et acquérir des clients en ligne.",
    description: "Nous mettons en place des stratégies digitales adaptées à votre activité pour attirer, convertir et fidéliser votre audience.",
    prestations: ["Stratégie digitale", "Publicité en ligne", "SEO", "Réseaux sociaux", "Campagnes sponsorisées", "Analyse performances"],
    avantages: ["Visibilité accrue", "Acquisition clients", "Ciblage précis", "Retour mesurable", "Croissance activité"],
    ctaText: "Développez votre présence digitale",
  },
  {
    id: "creation-contenu",
    title: "Création de Contenu Digital",
    shortTitle: "Contenu Digital",
    icon: Palette,
    image: imgContenu,
    summary: "Contenus visuels et digitaux pour valoriser votre communication.",
    introduction: "Création de contenus visuels et digitaux pour communication web et réseaux sociaux.",
    description: "Nous produisons des contenus graphiques et visuels adaptés à votre image de marque afin de valoriser votre communication digitale.",
    prestations: ["Visuels réseaux sociaux", "Bannières web", "Supports marketing", "Vidéos courtes", "Contenus promotionnels", "Identité visuelle"],
    avantages: ["Image professionnelle", "Cohérence visuelle", "Attractivité", "Communication efficace", "Contenus sur mesure"],
    ctaText: "Créez vos contenus",
  },
  {
    id: "community-management",
    title: "Community Management",
    shortTitle: "Community Management",
    icon: Users,
    image: imgCommunity,
    summary: "Gestion professionnelle de vos réseaux sociaux.",
    introduction: "Gestion professionnelle des réseaux sociaux pour entreprises et marques.",
    description: "Nous animons vos comptes sociaux, publions du contenu et interagissons avec votre audience pour développer votre notoriété et engagement.",
    prestations: ["Gestion pages sociales", "Planning éditorial", "Publication contenus", "Modération messages", "Croissance abonnés", "Reporting"],
    avantages: ["Présence régulière", "Image active", "Engagement audience", "Gain de temps", "Stratégie cohérente"],
    ctaText: "Confiez vos réseaux sociaux",
  },
  {
    id: "domotique",
    title: "Domotique (Smart Home)",
    shortTitle: "Domotique",
    icon: Home,
    image: imgDomotique,
    summary: "Solutions domotiques pour automatiser votre maison ou local professionnel.",
    introduction: "Installation de solutions domotiques pour automatiser et contrôler votre maison ou local professionnel.",
    description: "Nous intégrons des systèmes connectés permettant de gérer éclairage, sécurité, accès et équipements à distance via smartphone ou automatisation.",
    prestations: ["Éclairage connecté", "Contrôle volets", "Sécurité maison", "Caméras connectées", "Capteurs intelligents", "Automatisations"],
    avantages: ["Confort moderne", "Contrôle à distance", "Économies énergie", "Sécurité renforcée", "Habitat intelligent"],
    ctaText: "Automatisez votre espace",
  },
  {
    id: "referencement-seo",
    title: "Référencement & Boost",
    shortTitle: "Référencement",
    icon: Search,
    image: imgSeo,
    summary: "Référencement et boost de vos sites et réseaux sociaux.",
    introduction: "Optimisation du référencement de vos sites web et boost de votre visibilité sur les réseaux sociaux.",
    description: "Nous améliorons le positionnement de votre site sur les moteurs de recherche et augmentons votre portée sur les réseaux sociaux pour générer plus de trafic qualifié.",
    prestations: ["Audit SEO", "Optimisation on-page", "Référencement local", "Link building", "Boost réseaux sociaux", "Suivi positionnement"],
    avantages: ["Meilleur classement Google", "Trafic qualifié", "Visibilité locale", "ROI mesurable", "Croissance organique"],
    ctaText: "Boostez votre visibilité",
  },
];
