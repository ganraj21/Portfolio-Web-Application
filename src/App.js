import "./App.css";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// web pages --->
import Frontpage from "./pages/Frontpage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import EducationCert from "./pages/EducationCert";
import ProjectExp from "./pages/Project_exp";
import Skills from "./pages/Skills";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Loader from "./pages/components/Loder";
const App = () => {
  useEffect(() => {
    setTimeout(() => {
      <Loader />;
    }, 4000);
  }, []);
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
        <Route
          exact
          path="/education_and_certifications"
          element={
            <>
              <EducationCert /> <Footer />
            </>
          }
        />
        <Route
          exact
          path="/projects_and_experiences"
          element={
            <>
              <ProjectExp /> <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;
