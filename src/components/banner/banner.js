/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { easeInOut, motion } from "framer-motion";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import css from "../banner/banner.module.scss";
import bannerPic from "../../../public/background.jpg";

//gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function banner() {
  const imgRef = useRef(null);
  const bannerParentRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { y: 400 },
      {
        y: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: bannerParentRef.current,
          start: "top top", // when the top of the trigger hits the top of the viewport
          end: "+=1000", // end after scrolling 500px beyond the start
          scrub: 0.1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar}
        },
      }
    );
  }, []);

  return (
    <motion.div
      ref={bannerParentRef}
      initial={{ y: -310, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1.5,
        ease: easeInOut,
        delay: 0.4,
      }}
      className={css.banner}>
      <Image
        ref={imgRef}
        priority={true}
        className={css.bannerImg}
        width={1920}
        height={1282}
        style={{ objectFit: "cover" }}
        src={bannerPic}
        alt="montagne"
      />
    </motion.div>
  );
}

export default banner;
