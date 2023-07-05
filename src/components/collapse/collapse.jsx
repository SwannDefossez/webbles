import React, { useState, useRef } from "react";
import css from "./collapse.module.scss";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const Collapse = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef();

  return (
    <div className={css.collapse}>
      <span className={css.collapse__label}>
        <div
          className={`${css.toggle} ${css[props.nb]}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={css.collapse__title}>
            <h3 className={css.collapse__h3}>{props.label}</h3>
          </div>
          {isOpen === true ? (
            <AiFillCaretUp size={32} />
          ) : (
            <AiFillCaretDown size={32} />
          )}
        </div>
      </span>
      <div
        className={css.content_parent}
        ref={parentRef}
        style={
          isOpen
            ? {
                height: parentRef.current.scrollHeight + "px",
              }
            : {
                height: "0px",
              }
        }
      >
        <div className={css.content}>{props.children}</div>
      </div>
    </div>
  );
};

export default Collapse;
