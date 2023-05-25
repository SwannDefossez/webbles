import React from "react";
import css from "./footer.module.scss";
import Link from "next/link";
function footer() {
  return (
    <div className={css.footer}>
      <div className={css.footer__info}>
        <h5>contact@webbles.fr</h5>
        <h5>|</h5>
        <h5>06 27 59 92 75</h5>
      </div>
      <div>
        <Link href="/mention">Mentions légales</Link>
      </div>
    </div>
  );
}

export default footer;
