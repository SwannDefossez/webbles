/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useRef } from "react";
import css from "./page.module.scss";
import ParticleBackground from "../components/particle/particleBackground";
import Swiper from "../components/swiper/swiper";

import Tarif from "../components/tarif/tarif";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function page() {
  const textRef = useRef(null);
  const parentRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { y: 250, opacity: 0 },
      {
        y: 0,
        opacity: 1,

        scrollTrigger: {
          trigger: parentRef.current,
          start: "top bottom", // when the top of the trigger hits the top of the viewport
          end: "+=700",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <div className={css.home}>
      <div className={css.main__content}>
        <div ref={parentRef}>
          <div className={css.main__text} ref={textRef}>
            <h3>
              Quoi ?
            </h3>
              <p>
                Création/ refonte de sites internet aux normes W3C, d'applications web, sites e-commerce, conseils/création/ gestion de catalogues produits, boutiques Facebook/ Instagram, référencement (SEO, SEA)*, optimisation, création/ gestion de votre présence sur les réseaux sociaux,  accessibilité, communication, montage photo / vidéo, blogs, forum.
                </p>

                <p>
                  Nos "codons" nos sites entièrement, ce qui évite d'alourdir votre serveur et permet une meilleure optimisation SEO. <br />Pour les créations ou refonte de boutiques e-commerce nous privilégions Prestashop car c'est le CMS le plus libre, il est gratuit et dispose d’un vaste catalogue de modules gratuits ou payants selon vos besoins, ce qui permet de vous apporter un confort de travail, il a fait ses preuves et il est considéré comme le meilleur en la matière. En parlant de module prestashop, pour les gros catalogues ou éviter les tâches chronophages nous sommes partenaires Store Commander, programme qui permet de gérer vos catalogues produit, clients, commandes, à la volée (par exemple appliquer une augmentation sur 2000 produits va prendre 2 minutes).
                </p>
                <p>
                  Avoir un site vitrine, e-commerce, un blog ou une page sur les réseaux sociaux, c’est beau mais si vous ne les faites pas vivre, malgré une optimisation SEO, ça ne vous apportera que peu de trafic, une boutique il faut créer ses produits et les mettre à jour, nous proposons soit un accompagnement de quelques heures à la livraison soit un pack mensuel adapté à vos besoins.
                </p>
                <p>
                  L’hébergement et le nom de domaine de votre site seront à votre nom, cela vous assure que votre site n’est pas sur un hébergement surbooké et vous êtes libres, si pour une raison ou une autre, vous décidez de faire appel à un autre professionnel.
                </p>

            <h3>
              Pourquoi ?
            </h3>
              <p>
                Lilou co-créatrice de l'agence :  après une longue expérience de 30 ans dans le commerce/ e-commerce de gestion de catalogues produits, clients, la communication, créer et développer des  présence en ligne pour des entreprises ou association de commerçants/ professionnels, a été à votre place, malgré une forte volonté et beaucoup d’apprentissage, elle en est venue au constat que ce n’est pas simple pour une personne qui maitrise peu « les outils informatique / internet » de trouver des professionnels qui vous parlent et vous expliquent dans un langage simple ou d’avoir les connaissances, le temps, l’envie afin de le faire sois même, les solutions qui vous promettent de faire un site en quelques clic sur internet ne sont pas du tout optimisées pour avoir un bon site, et ça demande aussi un investissement de temps et pécunier non négligeable.
                Nous vous proposons donc un accompagnement personnalisé avec bienveillance, des mots simples, afin de réaliser votre projet.
              </p>

            <h3>
              Où ?
            </h3>
              <p>
                Basés dans la ville d'Agde - Cap d'Agde, dans le sud de la France, nous intervenons principalement dans les villes de l'Hérault telles que Béziers, Montpellier, Pézenas, Sète et leurs environs. Cependant, nous sommes également en mesure de collaborer avec des clients à distance et de travailler sur des projets dans d'autres régions, y compris Paris.
              </p>
            <h3>
              Qui ?
            </h3>
              <p>
                Nous travaillons en famille : développeurs web (HTML, CSS, Javascript, normes W3C, sémantique), accessibilité, référencement, SEO, communication digitale, spécialiste e-commerce/ PrestaShop, réseaux sociaux, blogs, pour les demande de créations graphique plus développées comme logo, bannières …  Nous faisons appel à des professionnels locaux dont la réputation et le sérieux n’est plus à prouver
              </p>


            <p>* : voir lexique</p>
          </div>
        </div>

        <Swiper />
        <Tarif />
        <ParticleBackground />
      </div>
    </div>
  );
}
