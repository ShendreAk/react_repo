import addcss from "/Users/akshayshendre/Desktop/react/calculator/src/css/Display.module.css"
const Display = ({ display }) => {

  return <input id='display' type="text" className={`${addcss.inputText}`} value={display} readOnly />
}
export default Display;