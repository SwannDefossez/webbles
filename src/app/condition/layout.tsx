import { Metadata } from "next";
import SecondaryHeader from "../../components/secondaryHeader/secondaryHeader";
export const metadata: Metadata = {
  title:
    "Conditions générales de vente Webbles, agence basée au Cap d'Agde, Agde",
  description:
    "Afin de collaborer dans de bonnes conditions et vous sécuriser, merci de lire nos conditions générales de vente",
    openGraph: {
      type: "website",
      url: "http://www.webbles.fr/condition/",
      title:
    "Conditions générales de vente Webbles, agence basée au Cap d'Agde, Agde",
  description:
    "Afin de collaborer dans de bonnes conditions et vous sécuriser, merci de lire nos conditions générales de vente",
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
};

export default function RootLayout({ children }) {
  return (
    <>
      <head>
        <link rel="canonical" href="https://www.webbles.fr/condition/" />
      </head>
      <SecondaryHeader />
      {children}
    </>
  );
}
