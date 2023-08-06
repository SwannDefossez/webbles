import React from "react";
import "./globals.scss";
import { Roboto } from "next/font/google";
import Footer from "../components/footer/footer";
import { Metadata } from "next";
const roboto = Roboto({ weight: ["300"], subsets: ["latin"] });

import GoogleAnalytics from "./GoogleAnalytics";

export const metadata: Metadata = {
  title:
    "Webbles, agence web, création de sites internet, SEO, réferencement,Cap d'Agde, Agde, Béziers, France ",
  description:
    "Création site vitrine, e-commerce présence en ligne, référencement, notre équipe s'adapte à vos besoins. Agde, Cap d'Agde, Béziers, Pézenas, Sète et environs ou toute la France",
  openGraph: {
    type: "website",
    url: "http://www.webbles.fr/",
    title:
      "Webbles, agence web, création de sites internet, SEO, réferencement, Cap d'Agde, Agde, Béziers, France",
    description:
      "Création site vitrine, e-commerce présence en ligne, référencement, notre équipe s'adapte à vos besoins. Agde, Cap d'Agde, Béziers, Pézenas, Sète et environs ou toute la France",
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
  metadataBase: new URL('https://www.webbles.fr'),
  alternates: {
    canonical: '/',
    
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <GoogleAnalytics key="googleAnalytics" />
        
      </head>
      <body className={roboto.className}>
        {children}

        <Footer />
      </body>
    </html>
  );
}
