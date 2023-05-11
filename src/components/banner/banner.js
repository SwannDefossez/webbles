/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React from "react";
import Image from "next/image";
import css from "../banner/banner.module.scss";

function banner() {
  return (
    <div className={css.banner}>
      <Image
        priority={true}
        className={css.bannerImg}
        width={1920}
        height={300}
        style={{ objectFit: "cover" }}
        src="/background.jpg"
        alt="montagne"
      />
    </div>
  );
}

export default banner;
