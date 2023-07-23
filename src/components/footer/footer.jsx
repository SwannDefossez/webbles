"use client";
import React from "react";
import css from "./footer.module.scss";
import {
  FaFacebook,
  FaFacebookMessenger,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
import {FcGoogle} from "react-icons/fc";


function footer() {
  return (
    <div className={css.footer}>
      <div className={css.footer__info}>
        <h5><a href={"mailto:contact@webbles.fr"}>contact@webbles.fr</a></h5>
        <h5>|</h5>
        <h5><a href={"tel:+33756889853"}>07 56 88 98 53</a></h5>
      </div>
      <div className={css.footer__reseaux}>
        <a href="https://www.facebook.com/webblesagence/">
          <FaFacebook className={css.icon} size={40} />
        </a>
        <a href="https://m.me/107868392346630/">
          <FaFacebookMessenger  className={css.icon} size={40} />
        </a> 
        <a href="https://goo.gl/maps/HLBULF1VYpSur1gq6">
          <FcGoogle className={css.icon} size={40} />
        </a>
        <a href="https://www.linkedin.com/in/agence-webbles/">
          <FaLinkedin className={css.icon} size={40} />
        </a>
        <a href="https://www.instagram.com/webbles_agence/">
          <FaInstagramSquare className={css.icon}  size={40} />
        </a>
        
      </div>
      <div className={css.footer__link}>
        <a href="/mention">Mentions légales</a>
        <h5>|</h5>
        <a href="/condition">Condition générale de vente</a>
      </div>
    </div>
  );
}

export default footer;
