import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import Frontpage from './pages/Frontpage';
import ContactPage from './pages/ContactPage';
import EducationCert from './pages/EducationCert';
import ProjectExPage from './pages/ProjectExPage';
import NewSkillsPage from './pages/NewSkillsPage';
import Navbar from './pages/components/Navigation/Navbar';
import Footer from './pages/components/FooterInterface/Footer';
import Login from './pages/components/LoginInterface/Login';
import AdminUser from './pages/components/LoginInterface/AdminUser';

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
              <AboutPage />
              <ProjectExPage />
              <ContactPage />
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
          path="/tech"
          element={
            <>
              <NewSkillsPage />
              <Footer />
            </>
          }
        />
        <Route exact path="/admin/login" element={<Login />} />
        <Route exact path="/user-backend" element={<AdminUser />} />
      </Routes>
    </>
  );
};

export default App;
