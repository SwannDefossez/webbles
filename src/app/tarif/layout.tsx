"use client";
import { Metadata } from "next";
import { motion } from "framer-motion";
import ParticleBackground from "../../components/particle/particleBackground";
import SecondaryHeader from "../../components/secondaryHeader/secondaryHeader";

export const metadata: Metadata = {
  title: "tarifs de base de l'agence Webbles",
  description:
    "Site vitrine, e-commerce, application web, maintenance, communication réseaux sociaux, emailing, contactez nous pour obtenir un devis adapté personnalisé, Cap d'Agde, Agde",
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
