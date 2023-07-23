
import React from "react";
import "./globals.scss";
import { Roboto } from "next/font/google";
import Footer from "../components/footer/footer";

const roboto = Roboto({ weight: ["300"], subsets: ["latin"] });
import Head from 'next/head'
import GoogleAnalytics from "./GoogleAnalytics";



export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <Head><GoogleAnalytics />
      <meta property="og:title" content="Webbles, agence web, création de 
          sites internet, SEO, réferencement, Cap d'Agde, Agde, Béziers, France" />
      <meta property="og:description" content="Création site vitrine, e-commerce présence en ligne, référencement, notre équipe s'adapte à vos besoins. Agde, Cap d'Agde, Béziers, Pézenas, Sète et environs ou toute la France" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Webbles" />
      <meta property="og:url" content="https://webbles.fr" />
      
      <meta property="og:image" content="public\logoentier.png" />
      </Head>
      <body className={roboto.className}>
        {children}

        <Footer />
      </body>
    </html>
  );
} 
