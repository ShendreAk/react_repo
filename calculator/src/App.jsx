
import addcss from './css/App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'
import Display from './components/Display.jsx'
import Container from './components/btn-container.jsx'
function App() {
  const buttons = ['C', "AC", '+', '-', '*', '/', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', '.0', '.00', '='];
  let [displayValue, setDisplayValue] = useState('');
  let sysBtn = ['C', "AC"]
  const handleOnClick = (event, btn) => {
    console.log(event);
    if (!sysBtn.includes(btn) && btn !== '=') {
      let newValue = displayValue + btn
      setDisplayValue(newValue);
      console.log(displayValue);
    }
    else if (btn === '=') {
      let calculate = eval(displayValue);
      setDisplayValue(calculate);
      console.log('calculate:', calculate);
    }
    else {
      setDisplayValue('');
      console.log(displayValue);
    }
  }
  return (
    <div id='calculator' className={addcss.calculator}>
      <Display display={displayValue}></Display>
      <Container buttons={buttons} handleOnClick={handleOnClick}></Container>
    </div>
  )
}

export default App
