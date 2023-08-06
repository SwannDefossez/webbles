import { Metadata } from "next";
import SecondaryHeader from "../../components/secondaryHeader/secondaryHeader";
export const metadata: Metadata = {
  title: "Mentions légales de l'agence Webbles",
  description:
    "Site internet, site vitrine, e-commerce, les mentions légales sont obligatoires, ainsi que les cgv et les RGPD quand nous collectons vos données",
  openGraph: {
    type: "website",
    url: "http://www.webbles.fr/mention/",
    title: "Mentions légales de l'agence Webbles",
    description:
      "Site internet, site vitrine, e-commerce, les mentions légales sont obligatoires, ainsi que les cgv et les RGPD quand nous collectons vos données",
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
  metadataBase: new URL('https://www.webbles.fr/'),
  alternates: {
    canonical: '/mention/',
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <SecondaryHeader />
      {children}
    </>
  );
}
