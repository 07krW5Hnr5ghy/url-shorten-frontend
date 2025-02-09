import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UrlShortener from './pages/UrlShortener'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UrlShortener/>
    </>
  )
}

export default App
