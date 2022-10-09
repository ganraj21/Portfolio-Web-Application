import './App.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
// web pages --->
import Frontpage from './components/Frontpage'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Work from './components/Work'
import Skills from './components/Skills'
import Error from './components/Error'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <>
      <Navbar />
<Frontpage />
<About />
<Experience />
<Work />
      <Routes>
        <Route path="/" element={<Frontpage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/experience" element={<Experience />}></Route>
        <Route path="/work" element={<Work />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/error" element={<Error />}></Route>
      </Routes>
    </>
  )
}
