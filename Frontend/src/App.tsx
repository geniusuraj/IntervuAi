import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import All_Routes from './Components/All_Routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <All_Routes/>
    </>
  )
}

export default App
