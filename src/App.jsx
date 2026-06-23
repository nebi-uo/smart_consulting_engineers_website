import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ProjectsPage from './pages/ProjectsPage'
import Services from './pages/Services'
import Contact from './pages/Contact'
import ProjectDetails from './pages/ProjectDetails'
import ServiceDetails from './pages/ServiceDetails'

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-neutral-white selection:bg-accent selection:text-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/service/:id" element={<ServiceDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App