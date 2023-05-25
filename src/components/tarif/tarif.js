import React from "react";
import css from "./tarif.module.scss";

function tarif() {
  return (
    <div className={css.tarif} id="tarifs">
      <h2>Nos Tarifs</h2>
      <div className={css.container}>
        <div className={css.card}>
          <div className={`${css.card__header} ${css.header1}`}>
            <h3>Vitrine</h3>
          </div>
          <div className={css.card__content}>
            <h4>contenu</h4>
          </div>
        </div>
        <div className={css.card}>
          <div className={`${css.card__header} ${css.header2}`}>
            <h3>Vitrine 2</h3>
          </div>
          <div className={css.card__content}>
            <h4>contenu</h4>
          </div>
        </div>
        <div className={css.card}>
          <div className={`${css.card__header} ${css.header3}`}>
            <h3>Ecommerce</h3>
          </div>
          <div className={css.card__content}>
            <h4>contenu</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default tarif;
