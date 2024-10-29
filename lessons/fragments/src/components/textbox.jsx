import addcss from "/Users/akshayshendre/Desktop/react/fragments/src/components/textbox.module.css"
const TextBox = ({ handleOnChange, handleOnClick }) => {
  return (
    <div className="container">
      <input type="text"
        className={addcss.foodinput}
        placeholder="Enter item"
        onChange={handleOnChange} />
      <button onClick={handleOnClick} className="click">Add</button>
      {/* <button onClick={onErase} className="click">Erase</button> */}
    </div>
  );
}
export default TextBox;