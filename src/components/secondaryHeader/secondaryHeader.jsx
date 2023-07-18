"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState} from "react";
import css from "./secondaryHeader.module.scss";
import { motion } from "framer-motion";
import Hamburger from "hamburger-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

function secondaryHeader() {
  const pathname = usePathname();
  //burger open/close
  const [isOpen, setOpen] = useState(false);

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

      <motion.div className={` ${isOpen ? css.wrapper : css.none}`}>
        <motion.ul onClick={() => setOpen(false)} className={css.menu}>
          <motion.li
            className={css.menu__li}
          >
            <a className={css.menu__link} href="/">
              Home
            </a>
          </motion.li>
          <motion.li
            className={css.menu__li}
          >
            <a className={css.menu__link} href="/tarif">
              Tarifs
            </a>
          </motion.li>
          <motion.li
            className={css.menu__li}
          >
            <a className={css.menu__link} href="/contact#contact">
              Contact
            </a>
          </motion.li>

          <motion.li
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
