"use client";
import React from "react";
import css from "./transition.module.scss";
import {
  easeOut,
  motion,
  stagger,
  useAnimate,
  AnimatePresence,
  exit,
} from "framer-motion";
function transition() {
  return (
    <AnimatePresence>
      <div className={css.transition}>
        <motion.div
          layout
          style={{ originX: 0 }}
          initial={{ transform: "scaleX(1)", zIndex: 0 }}
          animate={{ transform: "scaleX(0)", zIndex: 999 }}
          exit={{ transform: "scaleX(1)", zIndex: 0 }}
          transition={{ duration: 0.8 }}
          transitionEnd={{ duration: 0.8 }}
          className={css.transition__div1}
        ></motion.div>
        <motion.div
          layout
          style={{ originX: 1 }}
          initial={{ transform: "scaleX(1)", zIndex: 0 }}
          animate={{ transform: "scaleX(0)", zIndex: 999 }}
          exit={{ transform: "scaleX(1)", zIndex: 0 }}
          transition={{ duration: 0.8 }}
          transitionEnd={{ duration: 0.8 }}
          className={css.transition__div2}
        ></motion.div>
      </div>
    </AnimatePresence>
  );
}

export default transition;
