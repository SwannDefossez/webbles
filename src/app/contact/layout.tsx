import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contactez-nous pour nous exposer vos projets web",
  description: "Site internet, réseaux sociaux, qu'elle que soit votre demande, nous apportons une réponse adaptée personnalisée, Cap d'Agde, Agde",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
