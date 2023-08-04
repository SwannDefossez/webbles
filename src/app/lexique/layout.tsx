import { Metadata } from "next";
import Head from "next/head";

import SecondaryHeader from "../../components/secondaryHeader/secondaryHeader";

export const metadata: Metadata = {
  title:
    "Web simplifié, Lexique, explications, dictionnaire, des termes techniques",
  description:
    "Définition simpliste des mots techniques, explications accessibles",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.webbles.fr/lexique/" />
        <meta property="og:image" content="./opengraph-image.jpg" />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:alt" content="Logo agence Webbles" />
        <meta
          property="og:title"
          content="Web simplifié, Lexique, explications, dictionnaire, des termes techniques"
        />
        <meta
          property="og:description"
          content="Définition simpliste des mots techniques, explications accessibles"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Webbles" />
        <meta property="og:url" content="https://www.webbles.fr/lexique" />

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
