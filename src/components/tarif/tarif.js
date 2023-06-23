import React from "react";
import css from "./tarif.module.scss";

function tarif() {
  return (
    <div className={css.tarif} id="tarifs">
      <h2>Nos Tarifs</h2>
      <article className={css.container}>

        <div className={css.card}>
          <header className={`${css.card__header} ${css.header1}`}>
            <h3>Page Simple</h3>
          </header>
          <section className={css.card__content}>
            <div>
              1 page simple avec photos et textes (ex. : description activité)
            </div>
          </section>
          <footer className={`${css.card__header} ${css.header1}`}>
            <h3>à partir de 400€</h3>
          </footer>
        </div>

        <div className={css.card}>
          <div className={`${css.card__header} ${css.header2}`}>
            <h3>Vitrine</h3>
          </div>
          <div className={css.card__content}>
            <div>
              1 page simple avec photos et textes (ex. : description activité)
            </div>
          </div>
          <footer className={`${css.card__header} ${css.header2}`}>
            <h3>à partir de 400€</h3>
          </footer>
        </div>

        <div className={css.card}>
          <div className={`${css.card__header} ${css.header3}`}>
            <h3>E-commerce</h3>
          </div>
          <div className={css.card__content}>
            <div>
              1 page simple avec photos et textes (ex. : description activité)
            </div>
          </div>
          <footer className={`${css.card__header} ${css.header3}`}>
            <h3>à partir de 400€</h3>
          </footer>
        </div>

        <div className={css.card}>
          <div className={`${css.card__header} ${css.header4}`}>
            <h3>Application Web</h3>
          </div>
          <div className={css.card__content}>
            <div>
              1 page simple avec photos et textes (ex. : description activité)
            </div>
          </div>
          <footer className={`${css.card__header} ${css.header4}`}>
            <h3>à partir de 400€</h3>
          </footer>
        </div>

        <div className={css.card}>
          <div className={`${css.card__header} ${css.header5}`}>
            <h3>Référencement</h3>
          </div>
          <div className={css.card__content}>
            <div>
              1 page simple avec photos et textes (ex. : description activité)
            </div>
          </div>
          <footer className={`${css.card__header} ${css.header5}`}>
            <h3>à partir de 400€</h3>
          </footer>
        </div>

        <div className={css.card}>
          <div className={`${css.card__header} ${css.header6}`}>
            <h3>Réseaux sociaux</h3>
          </div>
          <div className={css.card__content}>
            <div>
              1 page simple avec photos et textes (ex. : description activité)
            </div>
          </div>
          <footer className={`${css.card__header} ${css.header6}`}>
            <h3>à partir de 400€</h3>
          </footer>
        </div>
        <div className={css.card}>
          <div className={`${css.card__header} ${css.header7}`}>
            <h3>Abonnement Modifications</h3>
          </div>
          <div className={css.card__content}>
            <div>
              1 page simple avec photos et textes (ex. : description activité)
            </div>
          </div>
          <footer className={`${css.card__header} ${css.header7}`}>
            <h3>à partir de 400€</h3>
          </footer>
        </div>

        <div className={css.card}>
          <div className={`${css.card__header} ${css.header8}`}>
            <h3>Abonnement Animations des réseaux-sociaux</h3>
          </div>
          <div className={css.card__content}>
            <div>
              1 page simple avec photos et textes (ex. : description activité)
            </div>
          </div>
          <footer className={`${css.card__header} ${css.header8}`}>
            <h3>à partir de 400€</h3>
          </footer>
        </div>

        <div className={css.card}>
          <div className={`${css.card__header} ${css.header9}`}>
            <h3>Maintenance</h3>
          </div>
          <div className={css.card__content}>
            <div>
              1 page simple avec photos et textes (ex. : description activité)
            </div>
          </div>
          <footer className={`${css.card__header} ${css.header9}`}>
            <h3>à partir de 400€</h3>
          </footer>
        </div>
      </article>
    </div>
  );
}

export default tarif;
