import "./App.css";
import React from "react";
// web pages --->
import Frontpage from "./components/Frontpage";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
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
