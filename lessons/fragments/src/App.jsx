
import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import ErrorMessage from './components/ErrorMessage';
import FoodItems from './components/FoodItems';
import Container from './components/container';
import TextBox from './components/textbox';
function App() {
  // let foodItems = ['dal', 'bhat', 'sabji', 'roti', 'salad']
  let [foodItemsCurr, setStateFoodItems] = useState([])
  let textState = useState('Enter item')
  let textToShow = textState[0];
  let setState = textState[1];
  const handleOnChange = (event) => {
    console.log(event.target.value);
    setState(event.target.value);
  }
  const handleOnClick = () => {
    console.log(textToShow);
    let newArray = [...foodItemsCurr, textToShow]
    setStateFoodItems(newArray);
    console.log(foodItemsCurr);
    console.log(typeof foodItemsCurr);

  }
  // const onErase = () => {
  //   setState('Enter item')
  // }
  return (
    <>
      <Container>
        <h1 className='heading'>Healthy foods</h1>
        <TextBox handleOnChange={handleOnChange} handleOnClick={handleOnClick} ></TextBox>
        <p>{textToShow}</p>
        {/* {foodItems.length === 0 ? <h2>I am still hungry</h2> : null} */}
        <ErrorMessage items={foodItemsCurr}></ErrorMessage>
        <FoodItems items={foodItemsCurr}></FoodItems>

      </Container>
      <Container>
        <p className="data">Above is the list of healthy foods that are good for your health and well being</p>
      </Container>

    </>



  )
}

export default App
