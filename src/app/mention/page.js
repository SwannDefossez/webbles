/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import css from "./mention.module.scss";
import SecondaryHeader from "../../components/secondaryHeader/secondaryHeader";
export default function page() {
  return (
    <div>
      <SecondaryHeader />
      <div className={css.container}>
        <div>
          <h1>Mentions légales</h1>
          <h5>En vigueur au 24/05/2023</h5>
        </div>
        <div className={css.content}>
          <p>
            Conformément aux dispositions des Articles 6-III et 19 de la Loi
            n°2004-575 du 21 juin 2004 <br />
            pour la Confiance dans l’économie numérique, dite L.C.E.N., il est
            porté à la connaissance <br />
            des utilisateurs et visiteurs, ci-après l""Utilisateur", du site
            https://webbles.fr/ , ci-après le "Site", <br />
            les présentes mentions légales. La connexion et la navigation sur le
            Site par l’Utilisateur <br />
            implique acceptation intégrale et sans réserve des présentes
            mentions légales.
            <br />
            Ces dernières sont accessibles sur le Site à la rubrique « Mentions
            légales ».
          </p>
          <h4>ARTICLE 1 - L'EDITEUR</h4>
          <p>
            L’édition et la direction de la publication du Site est assurée par
            Defossez-Anceaux Swann,
            <br />
            dont le numéro de téléphone est 07 56 88 98 53, et l'adresse e-mail
            swann.defossezanceaux@gmail.com. ci-après l'"Editeur".
          </p>
          <h4>ARTICLE 2 - L'HEBERGEUR</h4>
          <p>
            L'hébergeur du Site est la société HOSTINGER, dont le siège social
            est situé <br /> au HOSTINGER INTERNATIONAL LTD, 61 Lordou Vironos
            Street, <br />
            6023 Larnaca, Chypre , avec l'adresse mail :
            https://www.hostinger.fr/contact de contact
          </p>
          <h4>ARTICLE 3 - ACCES AU SITE</h4>
          <p>
            Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de
            force majeure, interruption programmée ou non et pouvant découlant
            d’une nécessité de maintenance.
            <br />
            En cas de modification, interruption ou suspension du Site,
            l'Editeur ne saurait être tenu responsable
          </p>
          <h4>ARTICLE 4 - COLLECTE DES DONNEES</h4>
          <p>
            Le site est exempté de déclaration à la Commission Nationale
            Informatique et Libertés (CNIL) dans la mesure où il ne collecte
            aucune donnée concernant les utilisateurs. Toute utilisation,
            reproduction, diffusion, commercialisation, modification de toute ou
            partie du Site, sans autorisation de l’Editeur est prohibée et
            pourra entraînée des actions et poursuites judiciaires telles que
            notamment prévues par le Code de la propriété intellectuelle et le
            Code civil
          </p>
        </div>
      </div>
    </div>
  );
}
