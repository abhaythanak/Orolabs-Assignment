import { useState } from 'react'
import './App.css'
import Table from './components/Table/Table'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <Table/>
      </div>  
    </>
  )
}

export default App
