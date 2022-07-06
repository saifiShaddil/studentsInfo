import { useState } from 'react'
import logo from './logo.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-sky-400 border-x">StudentsInfo App</h1>
    </div>
  )
}

export default App
