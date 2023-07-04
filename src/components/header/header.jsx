/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { easeOut, motion, stagger, useAnimate } from "framer-motion";
import React, { useState, useEffect } from "react";
import css from "./header.module.scss";
import Hamburger from "hamburger-react";
import Image from "next/image";
import useMouseCoords from "../useMouseCoords/useMouseCoords";
import { AiOutlineArrowDown } from "react-icons/ai";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(
      "ul",
      {
        clipPath: isOpen
          ? "inset(0% 0% 0% 0% round 10px)"
          : "inset(10% 50% 90% 50% round 10px)",
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      }
    );

    animate(
      "li",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );

    return () => {};
  }, [animate, isOpen]);

  return scope;
}

function header() {
  const [x, y] = useMouseCoords();
  //burger open/close
  const [isOpen, setOpen] = useState(false);

  // cursor scale 5 on hover ( title and burger)
  const [isHovered, setIsHovered] = useState(false);
  const hovered = {
    scale: 5,
    transition: { duration: 0.25 },
  };
  const none = {
    scale: 1,
    transition: { duration: 0.25 },
  };
  // cursor scale 5 on hover ( title and burger)
  const [liHovered, setLiHovered] = useState(false);
  const scale = {
    scale: 3,
    transition: { duration: 0.25 },
  };
  const liNone = {
    scale: 1,
    transition: { duration: 0.25 },
  };

  // animation menu li
  const scope = useMenuAnimation(isOpen);

  return (
    <>
      <div className={css.header}>
        <motion.div
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          whileHover={{
            scale: 1.0,
            transition: { duration: 0.1 },
          }}
          className={css.header__h1}
        >
          <a className={css.header__link} href="/">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.75 }}
            >
              <Image
                priority={true}
                src="/webblestext.png"
                alt="logo webbles"
                width={548}
                height={80}
                className={css.header__webbles}
              />
            </motion.div>

            <motion.h2
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.75 }}
            >
              Agence Web Digitale
            </motion.h2>
          </a>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: "0.3" }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className={`${css.header__burger} ${
            isOpen ? css.fixed : css.absolute
          }`}
        >
          <Hamburger
            className={css.hamburger}
            toggled={isOpen}
            toggle={setOpen}
            rounded
          />
        </motion.div>
        <motion.div
          className={css.header__icon}
          initial={{ y: 0 }}
          animate={{ y: 70 }}
          transition={{
            repeat: Infinity,
            repeatDelay: 1,
            duration: 1.5,
            ease: easeOut,
          }}
        >
          <AiOutlineArrowDown size={90} />
        </motion.div>
        <Image
          src="/background.jpg"
          alt="Photo en Islande de Jonatan Pie"
          width={1920}
          height={1080}
          className={css.header__bcg}
        />

        <motion.div
          ref={scope}
          className={` ${isOpen ? css.wrapper : css.none}`}
        >
          <motion.ul onClick={() => setOpen(false)} className={css.menu}>
            <motion.li
              onHoverStart={() => setLiHovered(true)}
              onHoverEnd={() => setLiHovered(false)}
              whileHover={{
                scale: 1.25,
                transition: { duration: 0.1 },
              }}
              className={css.menu__li}
            >
              <a className={css.menu__link} href="/">
                Home
              </a>
            </motion.li>
            <motion.li
              onHoverStart={() => setLiHovered(true)}
              onHoverEnd={() => setLiHovered(false)}
              whileHover={{
                scale: 1.25,
                transition: { duration: 0.1 },
              }}
              className={css.menu__li}
            >
              <a className={css.menu__link} href="/tarif">
                Tarifs
              </a>
            </motion.li>
            <motion.li
              onHoverStart={() => setLiHovered(true)}
              onHoverEnd={() => setLiHovered(false)}
              whileHover={{
                scale: 1.25,
                transition: { duration: 0.1 },
              }}
              className={css.menu__li}
            >
              <a className={css.menu__link} href="/contact#contact">
                Contact
              </a>
            </motion.li>

            <motion.li
              onHoverStart={() => setLiHovered(true)}
              onHoverEnd={() => setLiHovered(false)}
              whileHover={{
                scale: 1.25,
                transition: { duration: 0.1 },
              }}
              className={css.menu__li}
            >
              <a className={css.menu__link} href="/lexique#lexique">
                Lexique
              </a>
            </motion.li>
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ scale: 1 }}
          animate={isHovered ? hovered : none && liHovered ? scale : liNone}
          className={css.cursor}
          style={{
            left: x + "px",
            top: y + "px",
          }}
        ></motion.div>
      </div>
    </>
  );
}

export default header;
