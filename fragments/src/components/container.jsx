import addcss from "/Users/akshayshendre/Desktop/react/fragments/src/components/container.module.css"
const Container = (props) => {
  return (
    < div className={addcss.container} >
      {props.children}
    </div >);
}
export default Container;