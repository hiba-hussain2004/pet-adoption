import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Addpet from './component/Addpet'
import Searchpet from './component/Searchpet'
import Deletepet from './component/Deletepet'
import Viewpet from './component/Viewpet'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Addpet />}/>
        <Route path="/search" element={<Searchpet />} />
        <Route path="/delete" element={<Deletepet />} />
        <Route path="/view" element={<Viewpet/>} />

      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
