/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import css from "./astronaut.module.scss";
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);
function astronaut() {
  const rectRef = useRef(null);
  const pathRef = useRef(null);
  const parentRef = useRef(null);
  gsap.registerPlugin(MotionPathPlugin);

  useEffect(() => {
    gsap.to(rectRef.current, {
      duration: 5,
      ease: "Power0.easeNone",
      motionPath: {
        path: "#path",
        align: "#path",
        autoRotate: true,
        alignOrigin: [0, 0],
      },
      scrollTrigger: {
        trigger: parentRef.current,
        start: "top bottom",
        end: "+=1000",
      },
    });
  }, []);

  return (
    <>
      <svg
        ref={parentRef}
        id={css.svg}
        width="1900"
        height="300"
        viewBox="0 0 1920 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={pathRef}
          id="path"
          className={css.chemin}
          d="M0.5 383C65.1667 253.5 164.8 44.2 426 101C519 121.224 870 264.093
           1300.5 243C1751.5 250.6 1750.5 300.5 1740 150.5008C1699.09 -5.73698 1369.6 -37.6998 1300 200.5003"
          stroke="none"
        />
      </svg>

      <Image
        ref={rectRef}
        src="/rocket.svg"
        width={100}
        height={100}
        className={css.rocket}
        alt="rocket"
      />
    </>
  );
}

export default astronaut;
