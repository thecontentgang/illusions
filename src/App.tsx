import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetails from './pages/ProjectDetails';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SocialMediaBar from './components/SocialMediaBar';

// Simple Page Components for testing



const App = () => {
  return (
    <div className="App min-h-screen bg-[#F9FAFB]">
      {/* Navbar is outside Routes so it stays visible on every page */}
      <Navbar />
      <ScrollToTop />
      <SocialMediaBar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          {/* Catch-all for 404s - Optional */}
          <Route path="*" element={<div className="pt-32 px-12">404 Not Found</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;