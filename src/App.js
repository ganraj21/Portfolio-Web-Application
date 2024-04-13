import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
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
            </>
          }
        />
        <Route exact path="/tech/education" element={<EducationCert />} />
        <Route exact path="/tech/skill" element={<NewSkillsPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="login/admin" element={<AdminUser />} />
        <Route exact path="/contact-me" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
