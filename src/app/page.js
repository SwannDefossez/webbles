/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import Banner from "../components/banner/banner";
import css from "./page.module.scss";
import ParticleBackground from "../components/particle/particleBackground";
import Swiper from "../components/swiper/swiper";
import Footer from "../components/footer/footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function page() {
  return (
    <div className={css.home}>
     
      
      <div className={css.main__content}>
        <div className={css.main__text}>
          <h1>Lorem ipsum </h1>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisis volutpat sapien. Etiam ullamcorper ex a diam venenatis
            fringilla. Morbi et sollicitudin sem. Vestibulum laoreet ex a leo
            ornare malesuada.
            <br /> Ut porta gravida libero non porttitor. Aenean in diam ut quam
            tristique bibendum. Nunc eu fermentum nisi. Etiam purus arcu,
            accumsan tempor elit ac, iaculis euismod dolor. Ut enim ipsum,
            tincidunt eu risus vel, tempor convallis massa. Curabitur hendrerit,
            risus at vulputate malesuada, velit urna tempus sem, vel sagittis
            mauris tortor quis justo. Pellentesque varius leo mauris, ac rutrum
            felis scelerisque a.
            <br /> Donec at magna quis massa venenatis placerat vitae at lacus.
            Quisque interdum ex eu erat lobortis, dignissim suscipit orci
            luctus. In dictum eros non ornare gravida. Mauris id commodo leo.
            Fusce varius non lectus non fringilla. Aliquam magna enim, dapibus
            id placerat sit amet, congue eu dui. In eget nulla maximus massa
            egestas viverra ac et ligula. Vestibulum imperdiet, massa id
            accumsan ultricies, neque urna dictum erat, eget imperdiet enim
            tortor id purus. Vestibulum ac venenatis arcu.
          </h3>
        </div>

        <Swiper />
        <ParticleBackground />
        <Footer />
      </div>
    </div>
  );
}
