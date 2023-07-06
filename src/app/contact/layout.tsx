"use client";
import { Metadata } from "next";
import { motion } from "framer-motion";
import ParticleBackground from "../../components/particle/particleBackground";
import SecondaryHeader from "../../components/secondaryHeader/secondaryHeader";
export const metadata: Metadata = {
  title:
    "Contactez Webbles pour nous exposer vos projets web, notre équipe de spécialistes ",
  description:
    "Site internet, réseaux sociaux, qu'elle que soit votre demande, nous apportons une réponse adaptée personnalisée, nous nous déplaçons dans les alentours Cap d'Agde, Agde, Vias, Marseillan, Sète, Béziers, Montpellier, Hérault, Occitanie sud, exceptionnellement le reste de la France, L'Europe, sinon nous gérons en Visio et autres moyens",
};

export default function RootLayout({ children }) {
  return (
    <div style={{ backgroundColor: "#0b0a14" }}>
      <ParticleBackground />
      <SecondaryHeader />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {children}
      </motion.div>
    </div>
  );
}
