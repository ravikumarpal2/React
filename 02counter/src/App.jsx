import { useState } from 'react'

import './App.css'

function App() {

  const [counter,setCounter]=useState(15)

  const addValue= () => {
    setCounter((prevCounter) => prevCounter+1)
    setCounter((prevCounter) => prevCounter+1)
    setCounter((prevCounter) => prevCounter+1)
    
  }
  const removeValue= () => {
    setCounter((prevCounter) => prevCounter-1)
    setCounter((prevCounter) => prevCounter-1)
    setCounter((prevCounter) => prevCounter-1)
    
  }
  
  return (
    <>
      <h1>React Course with hitesh {counter}</h1>
      <h1>Counter value:{counter}</h1>
      <button onClick={addValue}>Add value</button> {" "}
      <button onClick={removeValue}>Remove value</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
