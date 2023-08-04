import { Metadata } from "next";
import Head from "next/head";

import SecondaryHeader from "../../components/secondaryHeader/secondaryHeader";
export const metadata: Metadata = {
  title:
    "Contactez Webbles pour nous exposer vos projets web, notre équipe de spécialistes",
  description:
    "Site internet, réseaux sociaux, qu'elle que soit votre demande, nous apportons une réponse adaptée personnalisées",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.webbles.fr/contact/" />
        <meta property="og:image" content="./opengraph-image.jpg" />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:alt" content="Logo agence Webbles" />
        <meta
          property="og:title"
          content="Contactez Webbles pour nous exposer vos projets web, notre équipe de spécialistes"
        />
        <meta
          property="og:description"
          content="Site internet, réseaux sociaux, qu'elle que soit votre demande, nous apportons une réponse adaptée personnalisées"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Webbles" />
        <meta property="og:url" content="https://www.webbles.fr/contact" />

        <meta name="twitter:image" content="./twitter-image.jpg" />
        <meta name="twitter:image:type" content="image/jpg" />
        <meta name="twitter:image:width" content="300" />
        <meta name="twitter:image:height" content="300" />
      </Head>

      <SecondaryHeader />
      {children}
    </>
  );
}
