"use client";
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef } from "react";
import css from "./page.module.scss";
import ParticleBackground from "../components/particle/particleBackground";
import Header from "../components/header/header";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReturnTop from "../components/returnTop/returnTop";
import Link from "next/link";
import {
  AiOutlineCode,
  AiOutlineShop,
  AiFillThunderbolt,
} from "react-icons/ai";
import { IoShareSocialOutline } from "react-icons/io5";
import {
  MdOutlineTouchApp,
  MdOutlineSell,
  MdOutlineProductionQuantityLimits,
  MdChecklist,
  MdOutlineAccessible,
  MdOutlinePhoto,
} from "react-icons/md";
gsap.registerPlugin(ScrollTrigger);
export default function page() {
  const textRef = useRef(null);
  const parentRef = useRef(null);
  const arrowRef = useRef(null);
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

    gsap.fromTo(
      arrowRef.current,
      { opacity: 0 },
      {
        opacity: 1,

        scrollTrigger: {
          trigger: parentRef.current,
          start: "top top", // when the top of the trigger hits the top of the viewport
          end: "+=100",
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
          <div className="#top" ref={parentRef}>
            <div className={css.main__text} ref={textRef}>
              <div className={css.main__services}>
                <h3>Nos Services</h3>
                <div className={css.main__list}>
                  <ul className={css.main__ul1}>
                    <li>
                      Création/ refonte de sites internet aux normes W3C*
                      <AiOutlineCode className={css.main__icons} />
                    </li>
                    <li>
                      Applications web*, blogs, forum
                      <MdOutlineTouchApp className={css.main__icons} />
                    </li>
                    <li>
                      Sites e-commerce*
                      <MdOutlineSell className={css.main__icons} />
                    </li>
                    <li>
                      Conseils / création / gestion de catalogues produits
                      <MdOutlineProductionQuantityLimits
                        className={css.main__icons}
                      />
                    </li>
                    <li>
                      Boutiques Facebook/ Instagram
                      <AiOutlineShop className={css.main__icons} />
                    </li>
                  </ul>
                  <ul className={css.main__ul2}>
                    <li>
                      Référencement (SEO, SEA)*
                      <MdChecklist className={css.main__icons} />
                    </li>
                    <li>
                      Optimisation*
                      <AiFillThunderbolt className={css.main__icons} />
                    </li>
                    <li>
                      Gestion de votre présence sur les réseaux sociaux*, page
                      pro google
                      <IoShareSocialOutline className={css.main__icons} />
                    </li>
                    <li>
                      Accessibilité*
                      <MdOutlineAccessible className={css.main__icons} />
                    </li>
                    <li>
                      Montage photo / vidéo
                      <MdOutlinePhoto className={css.main__icons} />
                    </li>
                  </ul>
                </div>
                <p>
                  * : voir <a href="/lexique">Lexique</a>
                </p>
                <h4>N'hésitez pas à nous contacter pour exposer votre projet.</h4>
                <Link className={css.main__link} href="/contact">Contact</Link>
              </div>
              <div>
                <h3>Nos Valeurs</h3>
                <p>
                  Avoir un site, une page sur les réseaux sociaux, c’est bien
                  mais si vous ne les faites pas vivre, malgré une bonne
                  optimisation, ça ne vous apportera que peu de trafic. Pour
                  entretenir une boutique il faut créer ses produits, les mettre
                  à jour, nous proposons soit un accompagnement de quelques
                  heures à la livraison soit un pack mensuel adapté à vos
                  besoins.
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
                <div className={css.main__localisation}>
                  <h3>Localisation</h3>
                  <p>
                    Basés dans la ville d'Agde - Cap d'Agde, dans le sud de la
                    France, nous intervenons principalement dans les villes de
                    l'Hérault telles que Béziers, Montpellier, Pézenas, Sète et
                    leurs environs. Cependant, nous sommes également en mesure
                    de collaborer à distance et de travailler sur des projets
                    dans d'autres régions, y compris Paris.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a href="#top" ref={arrowRef}>
            <ReturnTop />
          </a>
          {/* <Swiper /> */}

          <ParticleBackground />
        </div>
      </div>
    </div>
  );
}
