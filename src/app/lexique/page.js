/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState }  from "react";
import css from "./lexique.module.scss";
import ParticleBackground from "../../components/particle/particleBackground";
import SecondaryHeader from "../../components/secondaryHeader/secondaryHeader";

import { motion, AnimatePresence } from "framer-motion";


const definition = [
{titre : 'ACCESSIBILITÉ:', desc: '<p>
l’accessibilité est un ensemble de normes éthiques, de
recommandations, le double avantage de respecter les standards du
w3c est que le plus grand nombre pourra naviguer sur votre site et
que les robots google vont mieux vous référencer dans les résultats
de recherche.
</p>
<p>
Définition raccourcie de
https://www.monparcourshandicap.gouv.fr/accessibilite-numerique : Un
site web accessible est un site qui permet aux personnes en
situation de handicap d'accéder à ses contenus et ses
fonctionnalités sans difficulté. Un site accessible permet par
exemple de :
</p>
<ul>
<li>
  naviguer avec une synthèse vocale et/ou une plage braille
  (notamment utilisées par les personnes aveugles et malvoyantes) ;
</li>
<li>
  • personnaliser l’affichage du site selon ses besoins
  (grossissement des caractères, modification des couleurs, etc.) ;
</li>
<li>
  • naviguer sans utiliser la souris (avec le clavier uniquement,
  via un écran tactile, à la voix ou tout autre périphérique
  adapté).
</li>
</ul>
<p>
Pour cela, le site doit respecter les normes en vigueur lors de sa
réalisation et de ses mises à jour. Une norme internationale émise
par le W3C : https://www.w3.org/
</p>'},
{titre : 'RÉFÉRENCEMENT', desc: ''},
{titre : 'NORMES W3C ', desc: ''},
{titre : '', desc: ''},
{titre : '', desc: ''},
{titre : '', desc: ''},
{titre : '', desc: ''},
{titre : '', desc: ''},
{titre : '', desc: ''},
{titre : '', desc: ''},
{titre : '', desc: ''},
{titre : '', desc: ''}
]


// const Accordion = ({ i, expanded, setExpanded }) => {
// const isOpen = i === expanded;

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
          vous paraitre enfantin, imagé, mais c'est justement la définition de
          l'accessibilité* (voir ci-dessous)
        </p>
        <div className={css.definition}>
          <h3>ACCESSIBILITÉ:</h3>
          <p>
            l’accessibilité est un ensemble de normes éthiques, de
            recommandations, le double avantage de respecter les standards du
            w3c est que le plus grand nombre pourra naviguer sur votre site et
            que les robots google vont mieux vous référencer dans les résultats
            de recherche.
          </p>
          <p>
            Définition raccourcie de
            https://www.monparcourshandicap.gouv.fr/accessibilite-numerique : Un
            site web accessible est un site qui permet aux personnes en
            situation de handicap d'accéder à ses contenus et ses
            fonctionnalités sans difficulté. Un site accessible permet par
            exemple de :
          </p>
          <ul>
            <li>
              naviguer avec une synthèse vocale et/ou une plage braille
              (notamment utilisées par les personnes aveugles et malvoyantes) ;
            </li>
            <li>
              • personnaliser l’affichage du site selon ses besoins
              (grossissement des caractères, modification des couleurs, etc.) ;
            </li>
            <li>
              • naviguer sans utiliser la souris (avec le clavier uniquement,
              via un écran tactile, à la voix ou tout autre périphérique
              adapté).
            </li>
          </ul>
          <p>
            Pour cela, le site doit respecter les normes en vigueur lors de sa
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
          <h3>SITE SIMPLE PAGE ou ONE PAGE :</h3>
          <p>
            si vous voulez présenter une activité, un produit, ou un bref
            condensé de votre entreprise, le site simple est l’option la moins
            onéreuse, attention il ne peut pas contenir des tonnes
            d’informations ou de photos sinon ça devient illisible et pas
            agréable, donc quelques informations de bases quelques photos ou un
            carrousel photo vos infos de contact et pas plus.
          </p>
        </div>
        <div className={css.definition}>
          <h3>SITE VITRINE :</h3>
          <p>
            il est composé de plusieurs pages (minimum 1 page d’accueil et 1
            contact) il va vous servir à présenter votre entreprise, vos
            produits ou services, par exemple pour un artisan le site va
            présenter l’entreprise et tout ce qu’elle peut proposer, des photos
            de vos prestations, des explications, voir une gamme de tarifs,
            énormément de clients vont maintenant sur internet glaner des
            informations, se donner une idée de ce que vous proposez, c’est un
            gage de sérieux d’avoir un site internet. La page d’accueil peut
            contenir textes et photos statiques, un ou plusieurs carrousels de
            photo qui défilent, des avant / après, des vidéos, des avis de
            clients, l’avantage c’est que vous pouvez facilement partager le
            lien sur les réseaux sociaux ou par mail, c’est un support de
            communication impeccable. Pour un commerçant qui ne veut pas
            basculer sur un site e-commerce car c’est un investissement trop
            lourd pécuniairement ou en gestion, un site qui présente quelques
            produits, la promo du mois, sur la page contact votre
            géolocalisation, vos horaires d’ouverture, est un véritable atout,
            la seule chose est de bien veiller à ce que les informations soient
            à jour, et de temps en temps ajouter du contenu, nous avons prévu
            pour cela des packs à prix doux en abonnement.
          </p>
        </div>
        <div className={css.definition}>
          <h3>SITE E-COMMERCE :</h3>
          <p>
            sa destination est de vendre, vue le nombre de fonctionnalités à
            intégrer (paiement livraison, base de données produits, client etc
            …), les produits, catégories, voir en plus un blog, selon le nombre
            de passage/jour il faut un bon hébergement, et une bonne application
            de gestion (voir Prestashop*).
          </p>
        </div>
        <div className={css.definition}>
          <h3>PRESTASHOP :</h3>
          <p>
            Nous faisons le choix d’utiliser l’application web prestashop pour
            les créations de boutique car vous pouvez avoir une boutique avec
            toutes les fonctionnalités de base e-commerce sans avoir à débourser
            un centime pour une licence ou un abonnement prestashop est gratuit,
            ce qui peut coûter de l’argent c’est les thème (design) ou des
            modules spécifiques comme Store-Commander* et le moyen de paiement
            qui prend un % pour chaque encaissement. Prestashop offre une
            administration back-office (c’est la partie cachée l’administration
            de votre boutique) qui au 1er abord est complexe mais après quelques
            heures de formation (inclus avec chaque installation), ajouter un
            produit en changer les quantités ou le prix n’aura plus de secret
            pour vous.
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
