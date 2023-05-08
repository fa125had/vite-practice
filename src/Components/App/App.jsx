import { useState } from 'react'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <nav>
        <ul>
          <li>State Hook</li>
          <li>Effect Hook</li>
          <li>Props</li>
        </ul>
      </nav>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </>
  )
}

export default App
