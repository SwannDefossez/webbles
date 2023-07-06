import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web simplifié, Lexique, explications, dictionnaire, des mots du monde digital, utilisé par Webbles, descrit de façon accessible",
  description:
    "Une des valeurs de l'agence Webbles est l'accessibilité au sens large du terme, nous mettons un point d'honneur a communiquer simplement afin que ",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
