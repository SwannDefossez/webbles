"use client";
import Script from "next/script";

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
