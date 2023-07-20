import React from 'react'
import css from "./returnTop.module.scss";
import { AiOutlineArrowUp } from "react-icons/ai";

function returnTop() {
  return (
      <div className={css.arrow}>
          
              <AiOutlineArrowUp size={30} />
          
      </div>
  )
}

export default returnTop