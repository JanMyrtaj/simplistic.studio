import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ProjectsPage } from "./components/ProjectsPage";
import { ScrollToTop } from "./components/ScrollToTop";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";

function MainApp() {
  const [isDark, setIsDark] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  
  const currentPage = location.pathname === '/projects' ? 'projects' : 'home';

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const navigateTo = (page: "home" | "projects") => {
    if (page === "home") {
      navigate("/");
    } else {
      navigate("/projects");
    }
    window.scrollTo(0, 0);
  };

  return (
    <div className={`min-h-screen ${isDark ? "bg-neutral-900" : "bg-neutral-50"}`}>
      <Header isDark={isDark} toggleTheme={toggleTheme} currentPage={currentPage} navigateTo={navigateTo} />
      
      <Routes>
        <Route path="/" element={
          <>
            <Hero isDark={isDark} />
            <About isDark={isDark} />
            <Services isDark={isDark} />
            <Contact isDark={isDark} />
          </>
        } />
        <Route path="/projects" element={<ProjectsPage isDark={isDark} />} />
      </Routes>
      
      <Footer isDark={isDark} navigateTo={navigateTo} />
      <ScrollToTop isDark={isDark} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
}