
import { Metadata } from "next";

import SecondaryHeader from "../../components/secondaryHeader/secondaryHeader";
export const metadata: Metadata = {
  title:
    "Conditions générales de vente Webbles, agence basée au Cap d'Agde, Agde",
  description:
    "Afin de collaborer dans de bonnes conditions et vous sécuriser, merci de lire nos conditions générales de vente, elles sont valables pour nos clients au Cap d'Agde, Agde, Béziers, Montpellier ou toute autre partie de la France et Europe",
};

export default function RootLayout({ children }) {
  return (
    <div style={{ backgroundColor: "#0b0a14" }}>
      <SecondaryHeader />
      <div>
        {children}
      </div>
    </div>
  );
}
