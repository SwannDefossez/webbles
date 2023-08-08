/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { motion } from "framer-motion";
import css from "./select.module.scss";
const Select = () => {
  const [optionState, setOptionState] = useState("");
  return (
    <div className={css.list}>
      <select
        name="lexique"
        onChange={(e) => {
          const selectedOption = e.target.value;
          setOptionState(selectedOption);
        }}
      >
        <option value="">Choisissez une définition</option>
        <option value="accessibilite">ACCESSIBILITÉ</option>
        <option value="referencement">RÉFÉRENCEMENT</option>
        <option value="normew3c">NORMES W3C</option>
        <option value="simple">SITE SIMPLE PAGE ou ONE PAGE</option>
        <option value="vitrine">SITE VITRINE</option>
        <option value="ecommerce">SITE E-COMMERCE</option>
        <option value="prestashop">PRESTASHOP</option>
        <option value="application">APPLICATION WEB</option>
        <option value="reseaux">RESEAUX SOCIAUX / COMMUNITY MANAGEMENT</option>
      </select>
      {optionState == "accessibilite" && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className={css.collapse__div}
        >
          <p>
            <blockquote
              style={{ margin: "0", "line-break": "auto" }}
              cite="https://www.monparcourshandicap.gouv.fr/accessibilite-numerique"
            >
              <cite style={{ margin: "0", "line-break": "strict" }}>
                Définition raccourcie de
                <a href="https://www.monparcourshandicap.gouv.fr/accessibilite-numerique"> https://www.monparcourshandicap.gouv.fr/accessibilite-numerique</a>
              </cite>
            </blockquote>
            <q>
              Un site web accessible est un site qui permet aux personnes en
              situation de handicap d'accéder à ses contenus et ses
              fonctionnalités sans difficulté.
            </q>
          </p>
          <p>
            L’accessibilité est un ensemble de normes éthiques, de
            recommandations, régis par une organisation qui s'appelle le W3C*.
            Le double avantage de respecter les standards est que le plus grand
            nombre pourra naviguer sur votre site et que les robots google vont
            mieux vous référencer dans les résultats de recherche.
          </p>

          <p>Un site accessible permet par exemple de :</p>
          <ul>
            <li>
              naviguer avec une synthèse vocale et/ou une plage braille
              (notamment utilisées par les personnes aveugles et malvoyantes)
            </li>
            <li>
              personnaliser l’affichage du site selon ses besoins (grossissement
              des caractères, modification des couleurs, etc.)
            </li>
            <li>
              naviguer sans utiliser la souris (avec le clavier uniquement, via
              un écran tactile, à la voix ou tout autre périphérique adapté).
            </li>
          </ul>
          <p>
            Pour cela, le site doit respecter les normes en vigueur lors de sa
            réalisation et de ses mises à jour. Une norme internationale émise
            par le W3C : <a href="https://www.w3.org/">https://www.w3.org/</a>
          </p>
        </motion.div>
      )}
      {optionState == "referencement" && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className={css.collapse__div}
        >
          <p>
            Dans les moteurs de recherche comme google qui est le plus connu,
            apparaissent en 1ère position les sites dits sponsorisés, ce sont
            les sites qui paient pour être tout en haut de la page, on appelle
            ça le référencement payant ou SEA, puis quand on descend on trouve
            d’autres sites, c’est le travail du référencement naturel SEO.
            <br />
            <br /> Pour être bien référencé naturellement c’est la combinaison
            de plusieurs facteurs. Entre autres :<br /> 1. Technique : Votre
            site doit être codé en respectant les normes W3C*, il doit inclure
            des mots clés à des places stratégiques et ne pas user de mauvaises
            méthodes comme la répétition de mots clés sans sens, ce qui se
            faisait beaucoup il y a quelques années.
            <br />
            2. Populaire : Google aime les sites qui sont populaires, il existe
            plusieurs façons d’amener du trafic sur votre site, dont les réseaux
            sociaux*.
            <br /> 3. Contenus texte riche : Ecrire des textes cohérents,
            intéressants et renouveler couramment ce contenu
          </p>
        </motion.div>
      )}
      {optionState == "normew3c" && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className={css.collapse__div}
        >
          <p>
            Quelques années après la création du web les entreprises qui
            investissaient dans les technologies internet ont demandé au
            créateur Sir Tim Berners-Lee de voir comment uniformiser
            l’architecture de codage, et de faire des « règles, normes » d’un
            web éthique, qui soit accessible à tous (voir accessibilité*).{" "}
            <br />
            Une organisation de professionnels est née en 1994 et continue à ce
            jour. Avoir un site aux normes W3C, vous assure d’avoir des
            développeurs qui travaillent avec éthique (morale) mais aussi qu’il
            soit accessible et mieux référencé par les moteurs de recherche
            comme google.
          </p>
        </motion.div>
      )}
      {optionState == "simple" && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className={css.collapse__div}
        >
          <p>
            Si vous voulez présenter une activité, un produit, ou un bref
            condensé de votre entreprise, le site simple est l’option la moins
            onéreuse, attention il ne peut pas contenir des tonnes
            d’informations ou de photos sinon ça devient illisible et pas
            agréable, donc quelques informations de bases quelques photos ou un
            carrousel photo, vos infos de contact et pas plus.
          </p>
        </motion.div>
      )}
      {optionState == "vitrine" && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className={css.collapse__div}
        >
          <p>
            Il est composé de plusieurs pages (minimum 1 page d’accueil et 1
            contact) il va vous servir à présenter votre entreprise, vos
            produits ou services, par exemple pour un artisan le site va
            présenter l’entreprise et tout ce qu’elle peut proposer, des photos
            de vos prestations, des explications, voir une gamme de tarifs,
            énormément de clients vont maintenant sur internet glaner des
            informations, se donner une idée de ce que vous proposez, c’est un
            gage de sérieux d’avoir un site internet.
            <br />
            <br /> La page d’accueil peut contenir textes et photos statiques,
            un ou plusieurs carrousels de photo qui défilent, des avant / après,
            des vidéos, des avis de clients, l’avantage c’est que vous pouvez
            facilement partager le lien sur les réseaux sociaux ou par mail,
            c’est un support de communication impeccable.
            <br />
            <br /> Pour un commerçant qui ne veut pas basculer sur un site
            e-commerce car c’est un investissement trop lourd, un site qui présente quelques produits, la promo du
            mois, sur la page contact, votre géolocalisation, vos horaires
            d’ouverture, est un véritable atout, la seule chose est de bien
            veiller à ce que les informations soient mises à jour, et de temps en
            temps ajouter du contenu, nous avons prévu pour cela des packs à
            prix doux en abonnement.
          </p>
        </motion.div>
      )}
      {optionState == "ecommerce" && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className={css.collapse__div}
        >
          <p>
            sa destination est de vendre, vue le nombre de fonctionnalités à
            intégrer (paiement livraison, base de données produits, client etc
            …), les produits, catégories, voir en plus un blog, selon le nombre
            de passage/jour il faut un bon hébergement, et une bonne application
            de gestion (voir Prestashop*).
          </p>
        </motion.div>
      )}
      {optionState == "prestashop" && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className={css.collapse__div}
        >
          <p>
            Nous faisons le choix d’utiliser l’application web prestashop pour
            les créations de boutique car vous pouvez avoir une boutique avec
            toutes les fonctionnalités de base e-commerce sans avoir à débourser
            un centime pour une licence ou un abonnement prestashop est libre,
            ce qui peut coûter de l’argent c’est les thèmes (design) ou des
            modules spécifiques comme Store-Commander* et le système de paiement
            qui prend un % pour chaque encaissement. Prestashop offre une
            administration back-office "l'arrière boutique" (c’est la partie cachée, l’administration
            de votre boutique) qui au 1er abord est complexe mais après quelques
            heures d'initiation (inclus avec chaque installation), ajouter un
            produit, changer les quantités ou le prix n’aura plus de secret
            pour vous.
          </p>
        </motion.div>
      )}
      {optionState == "application" && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className={css.collapse__div}
        >
          <p>
            L'application web est un logiciel en ligne, des fonctionnalités en
            ligne qui ne nécessitent pas l'installation d'un programme sur votre
            ordinateur, par exemple un blog, un forum etc ...
          </p>
        </motion.div>
      )}
      {optionState == "reseaux" && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className={css.collapse__div}
        >
          <p>
            Le Community Management est la gestion et l'animation des réseaux
            sociaux, la traduction littéraire est "gestion de communauté"
          </p>
          <p>
            Depuis quelques années la consultation d'internet, des réseaux
            sociaux a explosé, qui n’a pas un compte facebook, instagram, tiktok
            … et qui n’a jamais consulté la fiche google d’une entreprise, d’un
            restaurant, regardé les avis, la note avant de se rendre chez ce
            professionnel ? Comme dit en page d’accueil, avoir un site internet
            c’est bien, ça fait plus professionnel, ça permet de montrer ses
            produits, ses services, mais si il est figé dans le temps, pas mis à
            jour, s'il ne vous apporte pas de nouveaux clients, il ne sert pas à
            grand-chose.
          </p>
          <p>
            C’est comme une page pro sur un réseau social avec votre logo, c’est
            joli mais il faut faire vivre votre page, l'animer, présenter ses
            services, ses nouveautés, fidéliser ses clients et aller en chercher
            de nouveaux, répondre quand on vous pose des questions, attraper
            l’occasion quand un particulier cherche un produit ou un service sur
            un groupe d'annonce, être présent sur les groupes locaux en
            diffusant sa publicité, rendre son site attrayant en mettant à jour
            le contenu, tout ça représente du temps, une connaissance des
            réseaux et la création de contenus, nous vous proposons des packs
            mensuel afin de le faire pour vous.
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default Select;
