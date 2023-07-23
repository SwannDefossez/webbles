
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
      
      </Head>
      <body className={roboto.className}>
        {children}

        <Footer />
      </body>
    </html>
  );
} 
