/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import css from "./lexique.module.scss";
import ParticleBackground from "../../components/particle/particleBackground";
import SecondaryHeader from "../../components/secondaryHeader/secondaryHeader";
export default function page() {
  return (
    <div className={css.container}>
      <SecondaryHeader />
      <ParticleBackground />
      <div className={css.contain}>
        <h2>Lexique</h2>
        <p className={css.presentation}>
          Afin de vous faciliter la compréhension de ce que nous vous proposons,
          voici un lexique, pour les personnes les plus aguerries, ce lexique va
          vous parait re enfantin, imagé, mais c'est justement la définition de
          l'accessibilité* (voir ci-dessous)
        </p>
        <div className={css.definition}>
          <h3>ACCESSIBILITÉ:</h3>
          <p>
            l’accessibilité est un ensemble de normes éthiques, de
            recommandations, le double avantage de respecter les standards du
            w3c est que votre site sera accessible au plus grand nombre et que
            les robots google vont mieux vous référencer dans les résultats de
            recherche. Définition raccourcie de
            https://www.monparcourshandicap.gouv.fr/accessibilite-numerique : Un
            site web accessible est un site qui permet aux personnes en
            situation de handicap d'accéder à ses contenus et ses
            fonctionnalités sans difficulté. Un site accessible permet par
            exemple de : • naviguer avec une synthèse vocale et/ou une plage
            braille (notamment utilisées par les personnes aveugles et
            malvoyantes) ; • personnaliser l’affichage du site selon ses besoins
            (grossissement des caractères, modification des couleurs, etc.) ; •
            naviguer sans utiliser la souris (avec le clavier uniquement, via un
            écran tactile, à la voix ou tout autre périphérique adapté). Pour
            cela, le site doit respecter les normes en vigueur lors de sa
            réalisation et de ses mises à jour. Une norme internationale émise
            par le W3C : https://www.w3.org/
          </p>
        </div>
        <div className={css.definition}>
          <h3>RÉFÉRENCEMENT :</h3>
          <p>
            dans les moteurs de recherche comme google qui est le plus connus,
            apparaissent en 1ère position les sites dits sponsorisés, ce sont
            les sites qui paient pour être tout en haut de la page, on appelle
            ça le référencement payant ou SEA, puis quand on descend on trouve
            d’autres sites, c’est le travail du référencement naturel SEO. Pour
            être bien référencé naturellement c’est la combinaison de plusieurs
            facteurs. Entre autres : 1. technique : votre site doit être codé en
            respectant les normes W3C, il doit inclure des mots clés à des
            places stratégiques et ne pas user de mauvaises méthodes comme la
            répétition de mots clés sans sens, ce qui se faisait beaucoup il y a
            quelques années. 2. populaire : google aime les sites qui sont
            populaires, il existe plusieurs façons d’amener du trafic sur votre
            site, dont les réseaux sociaux. 3. contenus texte riche : écrire des
            textes cohérents, intéressants et renouveler couramment ce contenu
          </p>
        </div>
        <div className={css.definition}>
          <h3>NORMES W3C : </h3>
          <p>
            quelques années après la création du web les entreprises qui
            investissaient dans les technologies internet ont demandé au
            créateur Sir Tim Berners-Lee de voir comment uniformiser
            l’architecture de codage, et de faire des « règles, normes » d’un
            web éthique, qui soit accessible à tous (voir accessibilité). Une
            organisation de professionnels est née en 1994 et continue à ce
            jour. Avoir un site aux normes W3C, vous assure d’avoir des
            développeurs qui travaillent avec éthique (morale) mais aussi qu’il
            soit accessible et mieux référencé par les moteurs de recherche
            comme google.
          </p>
        </div>
        <div className={css.definition}>
          <h3>OPTIMISATION :</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            mollitia, tenetur unde perspiciatis dignissimos ab laborum, alias
            commodi corporis iusto voluptates asperiores aliquid saepe libero
            harum recusandae incidunt ipsum voluptatum.
          </p>
        </div>
        <div className={css.definition}>
          <h3>SITE VITRINE :</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            mollitia, tenetur unde perspiciatis dignissimos ab laborum, alias
            commodi corporis iusto voluptates asperiores aliquid saepe libero
            harum recusandae incidunt ipsum voluptatum.
          </p>
        </div>
        <div className={css.definition}>
          <h3>SITE E-COMMERCE :</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            mollitia, tenetur unde perspiciatis dignissimos ab laborum, alias
            commodi corporis iusto voluptates asperiores aliquid saepe libero
            harum recusandae incidunt ipsum voluptatum.
          </p>
        </div>
        <div className={css.definition}>
          <h3>PRESTASHOP :</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            mollitia, tenetur unde perspiciatis dignissimos ab laborum, alias
            commodi corporis iusto voluptates asperiores aliquid saepe libero
            harum recusandae incidunt ipsum voluptatum.
          </p>
        </div>
        <div className={css.definition}>
          <h3>APPLICATION WEB:</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            mollitia, tenetur unde perspiciatis dignissimos ab laborum, alias
            commodi corporis iusto voluptates asperiores aliquid saepe libero
            harum recusandae incidunt ipsum voluptatum.
          </p>
        </div>
        <div className={css.definition}>
          <h3>RESEAUX SOCIAUX / COMMUNITY MANAGEMENT:</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            mollitia, tenetur unde perspiciatis dignissimos ab laborum, alias
            commodi corporis iusto voluptates asperiores aliquid saepe libero
            harum recusandae incidunt ipsum voluptatum.
          </p>
        </div>
        <div className={css.definition}>
          <h3>titre:</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            mollitia, tenetur unde perspiciatis dignissimos ab laborum, alias
            commodi corporis iusto voluptates asperiores aliquid saepe libero
            harum recusandae incidunt ipsum voluptatum.
          </p>
        </div>
      </div>
    </div>
  );
}
