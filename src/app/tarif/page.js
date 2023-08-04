"use client";
import React from "react";
import css from "./tarif.module.scss";
import ParticleBackground from "../../components/particle/particleBackground";

export default function page() {
  return (
    <div className={css.container}>
      <div className={css.tarif} id="tarifs">
        <h1>Nos Tarifs</h1>
        <p>Tarifs à titre indicatif, nous étudions votre projet et votre budget afin de vous proposer les solutions les plus adaptées</p>
        <article className={css.container}>
          <div className={css.card}>
            <header className={`${css.card__header} ${css.header1}`}>
              <h3>Page Simple</h3>
            </header>
            <section className={css.card__content}>
              <div>
                <h4>
                  1 page simple avec photos et textes <br /> (ex. : description
                  activité)
                </h4>
              </div>
            </section>
            <footer className={`${css.card__header} ${css.header1}`}>
              <h3>à partir de 400€</h3>
            </footer>
          </div>

          <div className={css.card}>
            <div className={`${css.card__header} ${css.header2}`}>
              <h3>Vitrine</h3>
            </div>
            <div className={css.card__content}>
              <div>
                <h4>
                  1 page présentation avec photos et textes description activité
                  <br />1 page contact, avec design adaptatif
                  mobile/tablette/ordinateur, optimisation SEO, lien vers vos
                  réseaux sociaux
                </h4>
              </div>
            </div>
            <footer className={`${css.card__header} ${css.header2}`}>
              <h3>à partir de 650€</h3>
            </footer>
          </div>

          <div className={css.card}>
            <div className={`${css.card__header} ${css.header3}`}>
              <h3>E-commerce</h3>
            </div>
            <div className={css.card__content}>
              <div>
                <h4>
                  Site Prestashop avec installation du thème PrestaShop gratuit,
                  moyens de paiement et livraison, catégories, design adaptatif,
                  formation d’une personne à la création de fiches produit
                </h4>
              </div>
            </div>
            <footer className={`${css.card__header} ${css.header3}`}>
              <h3>à partir de 1500€</h3>
            </footer>
          </div>

          <div className={css.card}>
            <div className={`${css.card__header} ${css.header4}`}>
              <h3>Application Web</h3>
            </div>
            <div className={css.card__content}>
              <div>
                <h4>
                  Exemple un blog, forum, service communication privé
                  d’entreprise, Pages comportant un front et un back qui permet
                  de gérer les bases de données, les authentifications des
                  membres
                </h4>
              </div>
            </div>
            <footer className={`${css.card__header} ${css.header4}`}>
              <h3>à partir de 2500€</h3>
            </footer>
          </div>

          <div className={css.card}>
            <div className={`${css.card__header} ${css.header5}`}>
              <h3>Référencement</h3>
            </div>
            <div className={css.card__content}>
              <div>
                <h4>
                  Optimisation, mots clés, sémantique, balises de suivi Google
                  Analytics
                </h4>
              </div>
            </div>
            <footer className={`${css.card__header} ${css.header5}`}>
              <h3>à partir de 300€</h3>
            </footer>
          </div>

          <div className={css.card}>
            <div className={`${css.card__header} ${css.header6}`}>
              <h3>Réseaux sociaux</h3>
            </div>
            <div className={css.card__content}>
              <div>
                <h4>
                  Création de page pro facebook, ou reprise de page existante,
                  formation gestion de page ou groupe, stratégie de
                  communication
                </h4>
              </div>
            </div>
            <footer className={`${css.card__header} ${css.header6}`}>
              <h3>à partir de 50€</h3>
            </footer>
          </div>
          <div className={css.card}>
            <div className={`${css.card__header} ${css.header7}`}>
              <h3>Abonnement Modifications</h3>
            </div>
            <div className={css.card__content}>
              <div>
                <h4>
                  Changement une fois par mois : photo / texte (maximum 20
                  photos, ajout ou suppression d’une promo), du site vitrine
                </h4>
              </div>
            </div>
            <footer className={`${css.card__header} ${css.header7}`}>
              <h3>50€ / mois</h3>
            </footer>
          </div>

          <div className={css.card}>
            <div className={`${css.card__header} ${css.header8}`}>
              <h3>Abonnement Animations des réseaux-sociaux</h3>
            </div>
            <div className={css.card__content}>
              <div>
                <h4>1 publication par semaine sur 1 réseau</h4>
              </div>
            </div>
            <footer className={`${css.card__header} ${css.header8}`}>
              <h3>50€ / mois</h3>
            </footer>
          </div>

          <div className={css.card}>
            <div className={`${css.card__header} ${css.header9}`}>
              <h3>Maintenance</h3>
            </div>
            <div className={css.card__content}>
              <div>
                <h4>Sauvegardes, mises à jour etc...</h4>
              </div>
            </div>
            <footer className={`${css.card__header} ${css.header9}`}>
              <h3>à partir de 50€</h3>
            </footer>
          </div>
        </article>
      </div>
      <ParticleBackground />
    </div>
  );
}
