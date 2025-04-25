import { useState } from 'react'

import './App.css'

function App() {

  let counter=15;

  const addValue= () => {
    counter=counter+1;
    console.log(counter);
  }
  
  return (
    <>
      <h1>React Course with hitesh {counter}</h1>
      <h1>Counter value:{counter}</h1>
      <button onClick={addValue}>Add value</button> {" "}
      <button>Remove value</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
