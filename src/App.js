import './App.css'
import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// web pages --->
import Frontpage from './components/Frontpage'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Work from './components/Work'
import Skills from './components/Skills'
import Error from './components/Error'

const App = () => {
  return (
    <>
      <Router>
        <Fragment>
          <Routes>
            {/* <Navbar /> */}
            {/* <Route exact path="/" element={<Navbar />} /> */}
            <Route exact path="/" element={<Frontpage />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Fragment>
      </Router>
    </>
  )
}

export default App
