/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import css from "./lexique.module.scss";
import ParticleBackground from "../../components/particle/particleBackground";
import CollapseList from "../../components/collapse/collapseList";

export default function page() {
  return (
    <div className={css.container}>
      <div className={css.contain}>
        <div className={css.headLexique}>
          <h1>Lexique</h1>
          <p className={css.presentation}>
            Afin de vous faciliter la compréhension de ce que nous vous
            proposons, voici un lexique, pour les personnes les plus aguerries,
            ce lexique va vous paraitre enfantin, imagé, mais c'est justement la
            définition de l'accessibilité* (voir ci-dessous)
          </p>
        </div>
        <CollapseList />
      <ParticleBackground />
      </div>
    </div>
  );
}
