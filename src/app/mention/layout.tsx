"use client";
import { Metadata } from "next";
import { motion } from "framer-motion";
import SecondaryHeader from "../../components/secondaryHeader/secondaryHeader";
export const metadata: Metadata = {
  title: "Mentions légales de l'agence Webbles",
  description:
    "Site internet, site vitrine, e-commerce, les mentions légals sont obligatoires, ainsi que les cgv et les RGPD quand nous collectons vos données",
};

export default function RootLayout({ children }) {
  return (
    <div style={{ backgroundColor: "#0b0a14" }}>
      <SecondaryHeader />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {children}
      </motion.div>
    </div>
  );
}
