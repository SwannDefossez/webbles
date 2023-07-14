"use client";
import React from "react";
import "./globals.scss";
import { Roboto } from "next/font/google";
import Footer from "../components/footer/footer";

const roboto = Roboto({ weight: ["300"], subsets: ["latin"] });
import GoogleAnalytics from "./GoogleAnalytics";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
      <title>Sites internet agence de professionnels du web Webbles, création sites, SEO, Cap d&apos;Agde, Agde, Béziers, France</title>
    <meta name="description" content="Création site vitrine, e-commerce présence en ligne, référencement, notre équipe s'adapte à vos besoins. Agde, Cap d'Agde, Béziers, Pézenas, Sète et environs ou toute la France"/>
        <GoogleAnalytics />
      <meta name="google-site-verification" content="IqyPXTsK53kmA6xiuzbIfK9AX49dB_qxzRAcatLfkSs" />
      </head>
  
      
      
      
      <body className={roboto.className}>
        {children}

        <Footer />
      </body>
    </html>
  );
}
