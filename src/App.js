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
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Frontpage />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/experience" element={<Experience />}></Route>
        <Route exact path="/work" element={<Work />}></Route>
        <Route exact path="/skills" element={<Skills />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route path="/error" element={<Error />}></Route>
      </Routes>
    </>
  )
}
