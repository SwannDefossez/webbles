"use client";

import React from "react";
import "./globals.scss";
import { Roboto } from "next/font/google";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
const roboto = Roboto({ weight: ["300"], subsets: ["latin"] });

export const metadata = {
  title: "Webbles",
  description: "Webbles, votre partenaire de confiance pour la création, le développement et la gestion de votre présence en ligne. Nous sommes une agence web spécialisée dans l'audit, le conseil, la création de sites internet, la conception graphique, le référencement internet et le développement d'applications web. Avec plus de 20 années d'expérience dans le domaine de l'internet, nous regroupons l'ensemble des compétences nécessaires à la réalisation réussie de votre projet. Que vous ayez besoin d'un site vitrine, d'une plateforme de vente en ligne, d'une application web ou d'un conseil personnalisé, notre équipe s'adapte à vos besoins. Chez Webbles, vous bénéficiez d'un suivi personnalisé tout au long du processus, avec un interlocuteur dédié qui vous accompagne pas à pas dans la conception et la mise en place de votre site internet ou application web. Nous mettons à votre disposition notre expertise technique et notre créativité pour répondre à vos attentes et vous aider à atteindre vos objectifs en ligne. Basée dans la ville d'Agde - Cap d'Agde, dans le sud de la France, nous intervenons principalement dans les villes de l'Hérault telles que Béziers, Montpellier, Pézénas, Sète et leurs environs. Cependant, nous sommes également en mesure de collaborer avec des clients à distance et de travailler sur des projets dans d'autres régions, y compris Paris.Faites confiance à Webbles pour donner vie à votre projet web.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={roboto.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
