"use client";
import React from "react";
import ParticleBackground from "../../components/particle/particleBackground";
import css from "./contact.module.scss";
import Form from "../../components/form/form.jsx";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
export default function page() {
  return (
    <div id="contact" className={css.container}>
      <ParticleBackground />
      <div className={css.contact}>
        <h1>Contactez nous</h1>
        <div className={css.contact__content}>
          <div>
            <Form />
          </div>
          <div className={css.contact__info}>
            <div className={css.contact__mail}>
              <AiOutlineMail size={32} />
              <a href={"mailto:contact@webbles.fr"}>contact@webbles.fr</a>
            </div>
            <div className={css.contact__phone}>
              <AiOutlinePhone size={32} />
              <a href={"tel:+33756889853"}>07 56 88 98 53</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
