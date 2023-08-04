import { Metadata } from "next";
import Head from "next/head";
import SecondaryHeader from "../../components/secondaryHeader/secondaryHeader";
export const metadata: Metadata = {
  title:
    "Conditions générales de vente Webbles, agence basée au Cap d'Agde, Agde",
  description:
    "Afin de collaborer dans de bonnes conditions et vous sécuriser, merci de lire nos conditions générales de vente",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.webbles.fr/condition" />
        <meta property="og:image" content="./opengraph-image.jpg" />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:alt" content="Logo agence Webbles" />
        <meta
          property="og:title"
          content="Conditions générales de vente Webbles, agence basée au Cap d'Agde, Agde"
        />
        <meta
          property="og:description"
          content="Afin de collaborer dans de bonnes conditions et vous sécuriser, merci de lire nos conditions générales de vente"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Webbles" />
        <meta property="og:url" content="https://www.webbles.fr/condition" />

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
