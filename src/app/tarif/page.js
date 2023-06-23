"use client";
import React from "react";
import css from "./tarif.module.scss";
import Tarif from "../../components/tarif/tarif";
import SecondaryHeader from "../../components/secondaryHeader/secondaryHeader";
export default function page() {
  return (
    <div>
      <SecondaryHeader />
      <div className={css.container}>
        <Tarif />
      </div>
    </div>
  );
}
