import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Maps from './Maps'
import Forms from './Forms'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Forms />
    </div>
  )
}

export default App
