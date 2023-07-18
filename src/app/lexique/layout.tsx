
import { Metadata } from "next";

import ParticleBackground from "../../components/particle/particleBackground";
import SecondaryHeader from "../../components/secondaryHeader/secondaryHeader";

export const metadata: Metadata = {
  title:
    "Web simplifié, Lexique, explications, dictionnaire, des mots du monde digital, utilisé par Webbles, décrit de façon accessible",
  description:
    "Une des valeurs de l'agence Webbles est l'accessibilité au sens large du terme, nous mettons un point d'honneur a communiquer simplement afin que vous ne soyez pas perdu par des termes que vous ne comprenez pas",
};

export default function RootLayout({ children }) {
  return (
    <div style={{ backgroundColor: "#0b0a14" }}>
      
      <ParticleBackground />
      <SecondaryHeader />
      <div>
        {children}
      </div>
    </div>
  );
}
