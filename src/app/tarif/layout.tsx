"use client";
import { Metadata } from "next";
import { motion } from "framer-motion";
import SecondaryHeader from "../../components/secondaryHeader/secondaryHeader";
import ParticleBackground from "../../components/particle/particleBackground";
export const metadata: Metadata = {
  title: "Contactez-nous pour nous exposer vos projets web",
  description:
    "Site internet, réseaux sociaux, qu'elle que soit votre demande, nous apportons une réponse adaptée personnalisée, Cap d'Agde, Agde",
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
