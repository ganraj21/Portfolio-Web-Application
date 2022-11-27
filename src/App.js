import "./App.css";
import React from "react";
// web pages --->
import Frontpage from "./pages/Frontpage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Work from "./pages/Work";
import Skills from "./pages/Skills";
import Navbar from "./pages/Navbar";
const App = () => {
  return (
    <>
      <Navbar />
      <Frontpage />
      <About />
      <Work />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
};

export default App;
