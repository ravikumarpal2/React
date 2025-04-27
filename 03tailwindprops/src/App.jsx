import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    name: 'ravi' ,
    age: 25,
    address: {
      district:'pratapgarh',
      state: 'UP',
      country: 'India'
    }

  }
  let newarr=[1,5,3,4,9]

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>vite with tailwind</h1>
      <Card username="ravi" myarr={newarr}/>
      <Card username='saif' post='assistant software engg.'/>
      <Card myobj/>
    </>
  )
}

export default App
