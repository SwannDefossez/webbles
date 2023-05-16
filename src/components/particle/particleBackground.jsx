import React from "react";
import Particles from "react-tsparticles";

import { loadFull } from "tsparticles";
import css from "./particleBackground.module.scss";
const particleBackground = () => {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <Particles
      id={css.tsparticles}
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: false,
        detectRetina: false,
        fpsLimit: 30,
        interactivity: {
          detectsOn: "canvas",
          events: {
            resize: true,
          },
        },
        particles: {
          color: {
            value: "#fff",
          },
          number: {
            density: {
              enable: true,
              area: 8000,
            },
            limit: 0,
            value: 400,
          },
          opacity: {
            animation: {
              enable: true,
              minimumValue: 0.05,
              speed: 1,
              sync: false,
            },
            random: {
              enable: true,
              minimumValue: 0.05,
            },
            value: 1,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: {
              enable: true,
              minimumValue: 0.5,
            },
            value: 1,
          },
          move: {
            enable: true,
            speed: 0.25,
          },
        },
      }}
    />
  );
};

export default particleBackground;
