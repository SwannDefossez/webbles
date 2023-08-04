"use client";
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef } from "react";
import css from "./page.module.scss";
import ParticleBackground from "../components/particle/particleBackground";
import Header from "../components/header/header";
import Image from "next/image";
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
  const li1Ref = useRef(null);
  const li2Ref = useRef(null);
  const li3Ref = useRef(null);
  const li4Ref = useRef(null);
  const li5Ref = useRef(null);
  const li21Ref = useRef(null);
  const li22Ref = useRef(null);
  const li23Ref = useRef(null);
  const li24Ref = useRef(null);
  const li25Ref = useRef(null);

  const valeurstitleRef = useRef(null);
  const valeursRef = useRef(null);
  const valeurs2Ref = useRef(null);
  const localisationRef = useRef(null);

  const parentRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    // anim div global
    gsap.fromTo(
      textRef.current,
      { y: 250, opacity: 0 },
      {
        y: 0,
        opacity: 1,

        scrollTrigger: {
          trigger: parentRef.current,
          start: "top +=600", // when the top of the trigger hits the top of the viewport
          end: "+=200",
          scrub: true,
        },
      }
    );

    // animation li services
    gsap.fromTo(
      li1Ref.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,

        scrollTrigger: {
          trigger: parentRef.current,
          start: "top +=500", // when the top of the trigger hits the top of the viewport
          end: "+=100",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      li2Ref.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,

        scrollTrigger: {
          trigger: parentRef.current,
          start: "top +=500", // when the top of the trigger hits the top of the viewport
          end: "+=200",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      li3Ref.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,

        scrollTrigger: {
          trigger: parentRef.current,
          start: "top +=500", // when the top of the trigger hits the top of the viewport
          end: "+=300",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      li4Ref.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,

        scrollTrigger: {
          trigger: parentRef.current,
          start: "top +=500", // when the top of the trigger hits the top of the viewport
          end: "+=400",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      li5Ref.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,

        scrollTrigger: {
          trigger: parentRef.current,
          start: "top +=500", // when the top of the trigger hits the top of the viewport
          end: "+=500",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      li21Ref.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,

        scrollTrigger: {
          trigger: parentRef.current,
          start: "top +=500", // when the top of the trigger hits the top of the viewport
          end: "+=100",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      li22Ref.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,

        scrollTrigger: {
          trigger: parentRef.current,
          start: "top +=500", // when the top of the trigger hits the top of the viewport
          end: "+=200",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      li23Ref.current,
      { opacity: 0, x: 100, stagger: 0.2 },
      {
        opacity: 1,
        x: 0,

        scrollTrigger: {
          trigger: parentRef.current,
          start: "top +=500", // when the top of the trigger hits the top of the viewport
          end: "+=300",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      li24Ref.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,

        scrollTrigger: {
          trigger: parentRef.current,
          start: "top +=500", // when the top of the trigger hits the top of the viewport
          end: "+=400",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      li25Ref.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,

        scrollTrigger: {
          trigger: parentRef.current,
          start: "top +=500", // when the top of the trigger hits the top of the viewport
          end: "+=500",
          scrub: true,
        },
      }
    );

    // animation fleche ReturnTop
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

    // anim valeurs
    gsap.fromTo(
      valeurstitleRef.current,
      { y: 250, opacity: 0 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: parentRef.current,
          start: "top -=500", // when the top of the trigger hits the top of the viewport
          end: "+=300",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      valeursRef.current,
      { y: 250, opacity: 0 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: parentRef.current,
          start: "top -=800", // when the top of the trigger hits the top of the viewport
          end: "+=200",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      valeurs2Ref.current,
      { y: 250, opacity: 0 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: parentRef.current,
          start: "top -=1000", // when the top of the trigger hits the top of the viewport
          end: "+=200",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      localisationRef.current,
      { y: 250, opacity: 0 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: parentRef.current,
          start: "top -=1700", // when the top of the trigger hits the top of the viewport
          end: "+=200",
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
              <h3>Nos Services</h3>
              <div className={css.main__container}>
                <div className={css.main__list}>
                  <ul className={css.main__ul1}>
                    <li ref={li1Ref}>
                      Création/ refonte de sites internet aux normes W3C*
                      <AiOutlineCode className={css.main__icons} />
                    </li>
                    <li ref={li2Ref}>
                      Applications web*, blogs, forum
                      <MdOutlineTouchApp className={css.main__icons} />
                    </li>
                    <li ref={li3Ref}>
                      Sites e-commerce*
                      <MdOutlineSell className={css.main__icons} />
                    </li>
                    <li ref={li4Ref}>
                      Conseils / création / gestion de catalogues produits
                      <MdOutlineProductionQuantityLimits
                        className={css.main__icons}
                      />
                    </li>
                    <li ref={li5Ref}>
                      Boutiques Facebook/ Instagram
                      <AiOutlineShop className={css.main__icons} />
                    </li>
                  </ul>
                  <ul className={css.main__ul2}>
                    <li ref={li21Ref}>
                      Référencement (SEO, SEA)*
                      <MdChecklist className={css.main__icons} />
                    </li>
                    <li ref={li22Ref}>
                      Optimisation*
                      <AiFillThunderbolt className={css.main__icons} />
                    </li>
                    <li ref={li23Ref}>
                      Gestion de votre présence sur les réseaux sociaux*, page
                      pro google
                      <IoShareSocialOutline className={css.main__icons} />
                    </li>
                    <li ref={li24Ref}>
                      Accessibilité*
                      <MdOutlineAccessible className={css.main__icons} />
                    </li>
                    <li ref={li25Ref}>
                      Montage photo / vidéo
                      <MdOutlinePhoto className={css.main__icons} />
                    </li>
                  </ul>
                </div>
                <p style={{ display: "flex", gap: "0.5rem" }}>
                  * : voir <a href="/lexique"> Lexique</a>
                </p>
                <h4>
                  N'hésitez pas à nous contacter pour exposer votre projet.
                </h4>
                <Link className={css.main__link} href="/contact">
                  Contact
                </Link>
              </div>
              <div className={css.flexcenter}>
                <div ref={valeurstitleRef} className={css.valeurs__title}>
                  <h3>Nos Valeurs</h3>
                  <p>
                    - Bienveillance, simplicité, accompagnement, sont pour nous
                    des valeurs importantes, nous privilégions une collaboration
                    personnalisée.
                  </p>
                </div>
                <div className={css.valeurs}>
                  <article ref={valeursRef}>
                    <Image
                      src="/optimisation.png"
                      width={1775}
                      height={1508}
                      alt="Image by pikisuperstar on Freepik"
                      className={css.valeurs__image}
                    />
                    <p>
                      Avoir un site, une page sur les réseaux sociaux, c’est
                      bien mais si vous ne les faites pas vivre, malgré une
                      bonne optimisation, ça ne vous apportera que peu de
                      trafic. Pour entretenir une boutique il faut créer ses
                      produits, les mettre à jour, nous proposons soit un
                      accompagnement de quelques heures à la livraison soit un
                      pack mensuel adapté à vos besoins.
                    </p>
                  </article>
                  <article ref={valeurs2Ref}>
                    <Image
                      src="/propriete.png"
                      width={2503}
                      height={1692}
                      alt="Image by pikisuperstar on Freepik"
                      className={css.valeurs__image}
                    />
                    <p>
                      L’hébergement et le nom de domaine de votre site seront
                      votre propriété, cela vous assure que votre site n’est pas
                      sur un hébergement surbooké et vous êtes libres, si pour
                      une raison ou une autre, vous décidez de faire appel à un
                      autre professionnel.
                    </p>
                  </article>
                </div>
              </div>
              <div ref={localisationRef} className={css.localisation}>
                <h3>Notre Localisation</h3>
                <div className={css.localisation__content}>
                  <p>
                    Basés dans la ville d'Agde - Cap d'Agde, dans le sud de la
                    France, nous intervenons principalement dans les villes de
                    l'Hérault telles que Béziers, Montpellier, Pézenas, Sète et
                    leurs environs. Cependant, nous sommes également en mesure
                    de collaborer à distance et de travailler sur des projets
                    dans d'autres régions, y compris Paris.
                  </p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46452.46779514302!2d3.4838706!3d43.30841365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b13c59a969ce11%3A0xb550fa712d2f9df8!2s34300%20Agde!5e0!3m2!1sfr!2sfr!4v1691145150755!5m2!1sfr!2sfr"
                    style={{ border: "0", "border-radius": "1rem" }}
                  ></iframe>
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
