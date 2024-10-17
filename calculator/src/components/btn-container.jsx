import React from 'react'
import addcss from "/Users/akshayshendre/Desktop/react/calculator/src/css/btn-container.module.css"
import Button from './buttons';
function Container({ buttons, handleOnClick }) {

  return (
    <div id='btn-container' className={`${addcss.btnContainer}`}>
      <Button btns={buttons} handleOnClick={handleOnClick}></Button>
    </div >);
}
export default Container;