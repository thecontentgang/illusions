import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetails from './pages/ProjectDetails';
import Footer from './components/Footer';
import TermsConditionsPage from './pages/TermsConditions';
import PrivacyPolicyPage from './pages/PrivacyPOlicyPage';
import NotFoundPage from './pages/404Page';
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
          <Route path="/terms-conditions" element={<TermsConditionsPage/>}/>
          <Route path="/privacy-policy" element={<PrivacyPolicyPage/>}/>
          {/* Catch-all for 404s - Optional */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;