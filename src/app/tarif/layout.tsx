import { Metadata } from "next";
import SecondaryHeader from "../../components/secondaryHeader/secondaryHeader";

export const metadata: Metadata = {
  title: "Tarifs de base de l'agence Webbles",
  description:
    "Contactez nous pour obtenir un devis adapté personnalisé, Cap d'Agde, Agde",
    openGraph: {
      type: "website",
      url: "http://www.webbles.fr/tarif/",
      title:
      "tarifs de base de l'agence Webbles",
      description:
      "contactez nous pour obtenir un devis adapté personnalisé, Cap d'Agde, Agde",
      siteName: "Webbles",
      images: [
        {
          url: "opengraph-image.jpg",
          type: "image/jpg",
          alt: "Logo agence Webbles",
          width: "300",
          height: "300",
        },
      ],
    },
    twitter: {
      images: [
        {
          url: "twitter-image.jpg",
          type: "image/jpg",
          alt: "Logo agence Webbles",
          width: "300",
          height: "300",
        },
      ],
    },
    metadataBase: new URL('https://www.webbles.fr/tarif/'),
    alternates: {
      canonical: '/tarif/',
      
    },
};

export default function RootLayout({ children }) {
  return (
    <>
      <SecondaryHeader />
      {children}
    </>
  );
}
