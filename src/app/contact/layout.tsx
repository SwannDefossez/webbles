import { Metadata } from "next";
import SecondaryHeader from "../../components/secondaryHeader/secondaryHeader";
export const metadata: Metadata = {
  title:
    "Contactez Webbles pour nous exposer vos projets web, notre équipe de spécialistes",
  description:
    "Site internet, réseaux sociaux, qu'elle que soit votre demande, nous apportons une réponse adaptée personnalisées",
    openGraph: {
      type: "website",
      url: "http://www.webbles.fr/contact/",
      title:
      "Contactez Webbles pour nous exposer vos projets web, notre équipe de spécialistes",
    description:
      "Site internet, réseaux sociaux, qu'elle que soit votre demande, nous apportons une réponse adaptée personnalisées",
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
        <link rel="canonical" href="https://www.webbles.fr/contact/" />
      </head>

      <SecondaryHeader />
      {children}
    </>
  );
}
