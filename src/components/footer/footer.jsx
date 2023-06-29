import React from "react";
import css from "./footer.module.scss";
function footer() {
  return (
    <div className={css.footer}>
      <div className={css.footer__info}>
        <h5>contact@webbles.fr</h5>
        <h5>|</h5>
        <h5>06 27 59 92 75</h5>
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
