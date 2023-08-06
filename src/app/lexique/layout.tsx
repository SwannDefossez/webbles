import { Metadata } from "next";
import SecondaryHeader from "../../components/secondaryHeader/secondaryHeader";

export const metadata: Metadata = {
  title:
    "Web simplifié, Lexique, explications, dictionnaire, des termes techniques",
  description:
    "Définition simpliste des mots techniques, explications accessibles",
    openGraph: {
      type: "website",
      url: "http://www.webbles.fr/lexique/",
      title:
    "Web simplifié, Lexique, explications, dictionnaire, des termes techniques",
  description:
    "Définition simpliste des mots techniques, explications accessibles",
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
    metadataBase: new URL('https://www.webbles.fr/'),
    alternates: {
      canonical: '/lexique/',
      
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
