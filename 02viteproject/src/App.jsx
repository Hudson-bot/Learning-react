import { useState } from 'react'

import './App.css'

function App() {
 
  const[counter, setCounter] = useState(15) 
  //let counter = 15

  const addValue =() =>{
   setCounter((prevCounter) => prevCounter+1)
   setCounter((prevCounter) => prevCounter+1)
   setCounter((prevCounter) => prevCounter+1)
   setCounter((prevCounter) => prevCounter+1 )
  }

  const decValue=() =>{
    setCounter(counter-1)
  }

  return (
    <>
      <h1>React course with Gourav {counter}</h1>
      <h2>Counter value : {counter}</h2>
      <button
      onClick = {addValue}>Add Value</button>{" "}
      <button
      onClick = {decValue}>Remove Value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
