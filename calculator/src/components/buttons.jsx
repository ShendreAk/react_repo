import addcss from "/Users/akshayshendre/Desktop/react/calculator/src/css/buttons.module.css"
import React from "react"
const Button = ({ btns, handleOnClick }) => {
  return (
    <>
      {btns.map((btn) => <button key={btn} className={`${addcss.buttons}`} onClick={(event) => { handleOnClick(event, btn) }}>{btn}</button>
      )};

    </>);
}
export default Button;