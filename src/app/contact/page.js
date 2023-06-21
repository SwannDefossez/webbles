"use client";
import React from "react";
import css from "./contact.module.scss";
import ParticleBackground from "../../components/particle/particleBackground";

import Form from "../../components/form/form.jsx";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import Link from "next/link";

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
              <AiOutlineMail />
              <Link href={'mailto:contact@webbles.fr'}>contact@webbles.fr</Link>
            </div>
            <div className={css.contact__phone}>
              <AiOutlinePhone />
              <Link href={'tel:+33627599275'}>06 27 59 92 75</Link>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
