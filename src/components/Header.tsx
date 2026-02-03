import { Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
  currentPage: "home" | "projects";
  navigateTo: (page: "home" | "projects") => void;
}

export function Header({ isDark, toggleTheme, currentPage, navigateTo }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    if (currentPage !== "home") {
      navigateTo("home");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  const handleProjectsClick = () => {
    navigateTo("projects");
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigateTo("home");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${
      isDark ? "bg-neutral-900/90 border-neutral-800" : "bg-white/90 border-neutral-200"
    } backdrop-blur-sm border-b`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={handleLogoClick}
            className={`text-2xl ${
              isDark ? "text-white hover:text-neutral-300" : "text-neutral-900 hover:text-neutral-600"
            } transition-colors`}
          >
            simplistic | studio
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={handleProjectsClick}
              className={`${
                isDark ? "text-neutral-300 hover:text-white" : "text-neutral-600 hover:text-neutral-900"
              } transition-colors`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`${
                isDark ? "text-neutral-300 hover:text-white" : "text-neutral-600 hover:text-neutral-900"
              } transition-colors`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`${
                isDark ? "text-neutral-300 hover:text-white" : "text-neutral-600 hover:text-neutral-900"
              } transition-colors`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`${
                isDark ? "text-neutral-300 hover:text-white" : "text-neutral-600 hover:text-neutral-900"
              } transition-colors`}
            >
              Contact
            </button>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${
                isDark ? "bg-neutral-800 text-white hover:bg-neutral-700" : "bg-neutral-100 text-neutral-900 hover:bg-neutral-200"
              } transition-colors`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${
                isDark ? "bg-neutral-800 text-white" : "bg-neutral-100 text-neutral-900"
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={isDark ? "text-white" : "text-neutral-900"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className={`md:hidden py-6 border-t ${
            isDark ? "border-neutral-800" : "border-neutral-200"
          }`}>
            <div className="flex flex-col gap-4">
              <button
                onClick={handleProjectsClick}
                className={`${
                  isDark ? "text-neutral-300 hover:text-white" : "text-neutral-600 hover:text-neutral-900"
                } transition-colors text-left`}
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`${
                  isDark ? "text-neutral-300 hover:text-white" : "text-neutral-600 hover:text-neutral-900"
                } transition-colors text-left`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className={`${
                  isDark ? "text-neutral-300 hover:text-white" : "text-neutral-600 hover:text-neutral-900"
                } transition-colors text-left`}
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`${
                  isDark ? "text-neutral-300 hover:text-white" : "text-neutral-600 hover:text-neutral-900"
                } transition-colors text-left`}
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
