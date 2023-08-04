import React from "react";
import "./globals.scss";
import { Roboto } from "next/font/google";
import Footer from "../components/footer/footer";
import { Metadata } from "next";
const roboto = Roboto({ weight: ["300"], subsets: ["latin"] });
import Head from "next/head";
import GoogleAnalytics from "./GoogleAnalytics";

export const metadata: Metadata = {
  title:
    "Webbles, agence web, création de sites internet, SEO, réferencement,Cap d'Agde, Agde, Béziers, France ",
  description:
  "Création site vitrine, e-commerce présence en ligne, référencement, notre équipe s'adapte à vos besoins. Agde, Cap d'Agde, Béziers, Pézenas, Sète et environs ou toute la France",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <Head>
        <GoogleAnalytics />
        <link rel="canonical" href="https://www.webbles.fr/" />
        <meta property="og:image" content="./opengraph-image.jpg" />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:alt" content="Logo agence Webbles" />
        <meta
          property="og:title"
          content="Webbles, agence web, création de 
          sites internet, SEO, réferencement, Cap d'Agde, Agde, Béziers, France"
        />
        <meta
          property="og:description"
          content="Création site vitrine, e-commerce présence en ligne, référencement, notre équipe s'adapte à vos besoins. Agde, Cap d'Agde, Béziers, Pézenas, Sète et environs ou toute la France"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Webbles" />
        <meta property="og:url" content="https://www.webbles.fr" />

        <meta name="twitter:image" content="./twitter-image.jpg" />
        <meta name="twitter:image:type" content="image/jpg" />
        <meta name="twitter:image:width" content="300" />
        <meta name="twitter:image:height" content="300" />
      </Head>
      <body className={roboto.className}>
        {children}

        <Footer />
      </body>
    </html>
  );
}
