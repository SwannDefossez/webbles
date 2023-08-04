import { Metadata } from "next";
import Head from "next/head";
import SecondaryHeader from "../../components/secondaryHeader/secondaryHeader";
export const metadata: Metadata = {
  title: "Mentions légales de l'agence Webbles",
  description:
    "Site internet, site vitrine, e-commerce, les mentions légales sont obligatoires, ainsi que les cgv et les RGPD quand nous collectons vos données",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.webbles.fr/mention/" />
        <meta property="og:image" content="./opengraph-image.jpg" />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:alt" content="Logo agence Webbles" />
        <meta
          property="og:title"
          content="Mentions légales de l'agence Webbles"
        />
        <meta
          property="og:description"
          content="Site internet, site vitrine, e-commerce, les mentions légales sont obligatoires, ainsi que les cgv et les RGPD quand nous collectons vos données"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Webbles" />
        <meta property="og:url" content="https://www.webbles.fr/mention" />

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
