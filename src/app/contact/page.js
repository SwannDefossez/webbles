"use client";
import React from "react";
import css from "./contact.module.scss";
import ParticleBackground from "../../components/particle/particleBackground";
import Footer from "../../components/footer/footer";
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
              <AiOutlineMail />
              <h3>contact@webbles.fr</h3>
            </div>
            <div className={css.contact__phone}>
              <AiOutlinePhone />
              <h3>06 27 59 92 75</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
