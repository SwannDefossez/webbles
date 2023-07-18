"use client";
import React from "react";
import css from "./tarif.module.scss";
import Tarif from "../../components/tarif/tarif";


export default function page() {
  return (
    <div>
      <div className={css.container}>
        <Tarif />
      </div>
    </div>
  );
}
