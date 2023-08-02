
import { Metadata } from "next";

import ParticleBackground from "../../components/particle/particleBackground";
import SecondaryHeader from "../../components/secondaryHeader/secondaryHeader";

export const metadata: Metadata = {
  title: "tarifs de base de l'agence Webbles",
  description:
    "contactez nous pour obtenir un devis adapté personnalisé, Cap d'Agde, Agde",
};

export default function RootLayout({ children }) {
  return (
    <div style={{ backgroundColor: "#0b0a14" }}>
      <link rel="canonical" href="https://www.webbles.fr/tarif" />
      <meta property="og:image" content="./opengraph-image.jpg" />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:alt" content="Logo agence Webbles" />
        <meta
          property="og:title"
          content="tarifs de base de l'agence Webbles"
        />
        <meta
          property="og:description"
          content="contactez nous pour obtenir un devis adapté personnalisé, Cap d'Agde, Agde"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Webbles" />
        <meta property="og:url" content="https://www.webbles.fr/tarif" />

        <meta name="twitter:image" content="./twitter-image.jpg" />
        <meta name="twitter:image:type" content="image/jpg" />
        <meta name="twitter:image:width" content="300" />
        <meta name="twitter:image:height" content="300" />
      <ParticleBackground />
      <SecondaryHeader />
      <div >
        {children}
      </div>
    </div>
  );
}
