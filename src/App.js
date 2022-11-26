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
      {/* <Routes>
        <Route exact path="/" element={<Frontpage />}></Route>
        <Route exact path="/ganesh/about" element={<About />}></Route>
        <Route exact path="/ganesh/experience" element={<Experience />}></Route>
        <Route exact path="/ganesh/work" element={<Work />}></Route>
        <Route exact path="/ganesh/skills" element={<Skills />}></Route>
        <Route exact path="/ganesh/contact" element={<Contact />}></Route>
        <Route path="/error" element={<Error />}></Route>
      </Routes> */}
    </>
  );
};

export default App;
