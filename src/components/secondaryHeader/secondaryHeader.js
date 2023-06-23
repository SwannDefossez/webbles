import React, { useState, useEffect } from "react";
import Link from "next/link";
import css from "./secondaryHeader.module.scss";
import { motion, stagger, useAnimate } from "framer-motion";
import Hamburger from "hamburger-react";
import useMouseCoords from "../useMouseCoords/useMouseCoords";
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
  const [x, y] = useMouseCoords();

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
    <div className={css.header}>
      <div>LOGO</div>
      <div className={css.hamburger}>
        <Hamburger toggled={isOpen} toggle={setOpen} rounded />
      </div>

      <nav className={css.nav}>
        <ul>
          <li>
            <Link className={pathname == "/" ? css.active : ""} href="/">
              <h3>Home</h3>
            </Link>
          </li>
          <li>
            <Link
              className={pathname == "/tarif" ? css.active : ""}
              href="/tarif">
              <h3>Tarifs</h3>
            </Link>
          </li>
          <li>
            <Link
              className={pathname == "/contact" ? css.active : ""}
              href="/contact">
              <h3>Contact</h3>
            </Link>
          </li>
          <li>
            <Link
              className={pathname == "/lexique" ? css.active : ""}
              href="/lexique">
              <h3>Lexique</h3>
            </Link>
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
            className={css.menu__li}>
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
            className={css.menu__li}>
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
            className={css.menu__li}>
            <Link className={css.menu__link} href="/contact#contact">
              Contact
            </Link>
          </motion.li>

          <motion.li
            onHoverStart={() => setLiHovered(true)}
            onHoverEnd={() => setLiHovered(false)}
            whileHover={{
              scale: 1.25,
              transition: { duration: 0.1 },
            }}
            className={css.menu__li}>
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
