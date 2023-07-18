"use client";
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef } from "react";
import css from "./page.module.scss";
import ParticleBackground from "../components/particle/particleBackground";
import Header from "../components/header/header";
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
    
      
    <div>
      
        <Header />
        <div className={css.home}>
          <div className={css.main__content}>
            <div ref={parentRef}>
              <div className={css.main__text} ref={textRef}>
                <h3>Quoi ?</h3>
                <ul>
                  <li>Création/ refonte de sites internet aux normes W3C*</li>
                  <li>applications web*, blogs, forum</li>
                  <li>sites e-commerce*</li>
                  <li>conseils / création / gestion de catalogues produits</li>
                  <li>boutiques Facebook/ Instagram</li>
                  <li>référencement (SEO, SEA)*</li>
                  <li>optimisation*</li>
                  <li>
                    communication, création/ gestion de votre présence sur les
                    réseaux sociaux*, page pro google
                  </li>
                  <li>accessibilité*</li>
                  <li>montage photo / vidéo</li>
                </ul>

                <p>
                  Pour une meilleure optimisation*, vitesse et référencement*
                  nous codons entièrement nos sites, pas de wordpress qui
                  alourdit votre hébergement. Pour les boutiques e-commerce nous
                  privilégions Prestashop* logiciel libre.
                </p>
                <p>
                  Avoir un site, une page sur les réseaux sociaux, c’est bien
                  mais si vous ne les faites pas vivre, malgré une bonne
                  optimisation, ça ne vous apportera que peu de trafic, une
                  boutique il faut créer ses produits, les mettre à jour, nous
                  proposons soit un accompagnement de quelques heures à la
                  livraison soit un pack mensuel adapté à vos besoins.
                </p>
                <p>
                  L’hébergement et le nom de domaine de votre site seront votre
                  propriété, cela vous assure que votre site n’est pas sur un
                  hébergement surbooké et vous êtes libres, si pour une raison
                  ou une autre, vous décidez de faire appel à un autre
                  professionnel.
                </p>

                <p>
                  - Bienveillance, simplicité, accompagnement, sont pour nous
                  des valeurs importantes, nous privilégions une collaboration
                  personnalisée.
                </p>

                <h3>Où ?</h3>
                <p>
                  Basés dans la ville d'Agde - Cap d'Agde, dans le sud de la
                  France, nous intervenons principalement dans les villes de
                  l'Hérault telles que Béziers, Montpellier, Pézenas, Sète et
                  leurs environs. Cependant, nous sommes également en mesure de
                  collaborer avec des clients à distance et de travailler sur
                  des projets dans d'autres régions, y compris Paris.
                </p>

                <p>
                  * : voir <a href="/lexique">Lexique</a>
                </p>
              </div>
            </div>

            {/* <Swiper /> */}

            <ParticleBackground />
          </div>
        </div>
      </div>
    
  );
}
