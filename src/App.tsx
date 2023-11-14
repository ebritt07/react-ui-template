import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from './components/table/Table.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      {/*
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        */}
      </div>
      <h1>React Template</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <p>visit <a href="https://www.google.com" target="_blank">google</a></p>
      <ul>
      <li>list one</li>
      <li>list one</li>
      <li>list one</li>
      </ul>

      <Table/>


      <p>This UI's url: <a href="http://localhost:3000">http://localhost:3000</a></p>
      <p>Backend url: <a href="http://localhost:4000">http://localhost:4000</a></p>

    </>
  )
}

export default App
