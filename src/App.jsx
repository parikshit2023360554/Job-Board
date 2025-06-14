import { useState } from 'react'
import React from 'react'

import Dashboard from './component/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Dashboard />
    </>
  )
}

export default App
