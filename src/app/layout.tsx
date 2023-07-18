import { Metadata } from 'next'
import React from "react";
import "./globals.scss";
import { Roboto } from "next/font/google";
import Footer from "../components/footer/footer";

const roboto = Roboto({ weight: ["300"], subsets: ["latin"] });
import Head from 'next/head'
import GoogleAnalytics from "./googleanalytics";

export const metadata: Metadata = {
  title: "Sites internet agence de professionnels du web Webbles, création sites, SEO, Cap d'Agde, Agde, Béziers, France",
  description: "Création site vitrine, e-commerce présence en ligne, référencement, notre équipe s'adapte à vos besoins. Agde, Cap d'Agde, Béziers, Pézenas, Sète et environs ou toute la France",
}


export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <Head><GoogleAnalytics /></Head>
      
      
      
      
      <body className={roboto.className}>
        {children}

        <Footer />
      </body>
    </html>
  );
}
