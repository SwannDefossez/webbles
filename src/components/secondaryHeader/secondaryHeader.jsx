/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import css from "./secondaryHeader.module.scss";
import { motion, stagger, useAnimate } from "framer-motion";
import Hamburger from "hamburger-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
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
function secondaryHeader() {
  const pathname = usePathname();
  //burger open/close
  const [isOpen, setOpen] = useState(false);

  // animation menu li
  const scope = useMenuAnimation(isOpen);
  return (
    <div className={css.header}>
      <a href="/">
        <Image
          priority={true}
          src="/logoentier.png"
          alt="logo webbles"
          width={150}
          height={40}
          className={css.header__webbles}
        />
      </a>
      <div className={css.hamburger}>
        <Hamburger toggled={isOpen} toggle={setOpen} rounded />
      </div>

      <nav className={css.nav}>
        <ul>
          <li>
            <a className={pathname == "/" ? css.active : ""} href="/">
              <h3>Home</h3>
            </a>
          </li>
          <li>
            <a className={pathname == "/tarif" ? css.active : ""} href="/tarif">
              <h3>Tarifs</h3>
            </a>
          </li>
          <li>
            <a
              className={pathname == "/contact" ? css.active : ""}
              href="/contact"
            >
              <h3>Contact</h3>
            </a>
          </li>
          <li>
            <a
              className={pathname == "/lexique" ? css.active : ""}
              href="/lexique"
            >
              <h3>Lexique</h3>
            </a>
          </li>
        </ul>
      </nav>

      <motion.div ref={scope} className={` ${isOpen ? css.wrapper : css.none}`}>
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
    </div>
  );
}

export default secondaryHeader;
