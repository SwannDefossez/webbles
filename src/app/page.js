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
            
            <h2>
              Vous avez besoin de créer ou améliorer votre présence digitale, vous êtes au bon endroit !
            </h2>
            <h3>Pourquoi ?</h3>
            <p>Nous avons été à votre place, malgré une forte volonté de développer sa présence digitale il faut avoir le temps, les connaissances, l'envie etc… c’est un métier, on ne s’improvise pas développeur web ou spécialiste des réseaux sociaux.</p>
            <h3>Pour Qui ?</h3>
            <p>Nos offres s'adressent aux professionnels, notre clientèle est surtout composée d'artisans, commerçants, petites ou moyennes entreprises, mais aussi nous accompagnons les associations ainsi que les particuliers / famille qui ont besoin d'une vitrine pour un évènement (mariage, cousinades)
            </p>
            <h3>Quoi ?</h3>
            <p>Nos "codons" nos sites entièrement, ce qui évite d'alourdir votre serveur et permet une optimisation SEO. Pour les créations ou refonte de boutiques e-commerce avec un catalogue important nous privilégions Prestashop car c'est le CMS le plus libre, il est gratuit et un catalogue de modules gratuit et payant permet de vous apporter un confort de travail, il a fait ses preuves et il est considéré comme le meilleur en la matière. En parlant de module prestashop, pour les gros catalogues ou éviter les tches chronophages nous sommes partenaires Store Commander, programme qui permet de gérer votre catalogue produit, clients, commandes à la volée
            </p>
            
          </div>
        </div>

        <Swiper />
        <Tarif />
        <ParticleBackground />
      </div>
    </div>
  );
}
