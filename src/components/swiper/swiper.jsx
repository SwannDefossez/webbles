import React, { useEffect, useRef } from "react";
import Image from "next/image";
// gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import css from "./swiper.module.scss";
// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
// import required modules
import { EffectCards, Navigation } from "swiper";

export default function App() {
  const sliderRef = useRef(null);
  const parentRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      sliderRef.current,
      { x: -1250 },
      {
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: parentRef.current,
          start: "top bottom", // when the top of the trigger hits the top of the viewport
          end: "+=900", // end after scrolling 500px beyond the start
          scrub: 1.5, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar}
        },
      }
    );
  }, []);
  return (
    <div className={css.swiper} id="swip">
      <div className={css.swiper__title}>
        <Image
          src="/rocket.svg"
          width={100}
          height={100}
          alt="fusée"
          className={css.swiper__fusee}
        />
        <h2 ref={parentRef}>Nos créations</h2>
      </div>
      <div ref={sliderRef}>
        <Swiper
          navigation={true}
          grabCursor={true}
          effect={"cards"}
          modules={[EffectCards, Navigation]}
          className={css.swipeslider}>
          <SwiperSlide>
            <a href="/">
              <Image
                src="/img_1.jpg"
                style={{ objectFit: "cover" }}
                width={500}
                height={500}
                alt="1"
                className={css.img}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/creation">
              <Image
                src="/img_2.jpg"
                style={{ objectFit: "cover" }}
                width={500}
                height={500}
                alt="2"
                className={css.img}
              />{" "}
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/img_3.jpg"
              style={{ objectFit: "cover" }}
              width={500}
              height={500}
              alt="3"
              className={css.img}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/img_4.jpg"
              style={{ objectFit: "cover" }}
              width={500}
              height={500}
              alt="4"
              className={css.img}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/img_5.jpg"
              style={{ objectFit: "cover" }}
              width={500}
              height={500}
              alt="5"
              className={css.img}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/img_6.jpg"
              style={{ objectFit: "cover" }}
              width={500}
              height={500}
              alt="6"
              className={css.img}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/img_7.jpg"
              style={{ objectFit: "cover" }}
              width={500}
              height={500}
              alt="7"
              className={css.img}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
