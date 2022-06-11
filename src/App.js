import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Frontpage from './components/Frontpage'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Error from './components/Error'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Frontpage />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}

export default App
