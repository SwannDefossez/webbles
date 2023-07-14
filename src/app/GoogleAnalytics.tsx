"use client";
import Script from "next/script";
// import { Metadata } from "next";
// export const metadata : Metadata = {
 
//   title:
//     "Sites internet agence de professionnels du web Webbles, création sites, seo, Cap d'Agde, Agde, Béziers, France",
//   description:
//     'Création site vitrine, e-commerce présence en ligne, référencement, notre équipe s\'adapte à vos besoins. Agde, Cap d\'Agde, Béziers, Pézenas, Sète et environs ou toute la France',
// };

const GoogleAnalytics = () => {
  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-846SFZXGBH`}
      />

      <Script
        id="gtm-script2"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-846SFZXGBH', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
};
export default GoogleAnalytics;
