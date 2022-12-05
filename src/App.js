import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
// web pages --->
import Frontpage from "./pages/Frontpage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Work from "./pages/Work";
import Skills from "./pages/Skills";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Frontpage />
              <About />
              <Skills />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route exact path="/my-experience" element={<Experience />} />
        <Route exact path="/my-work" element={<Work />} />
      </Routes>
    </>
  );
};

export default App;
