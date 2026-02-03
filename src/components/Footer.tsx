import { Instagram, Linkedin, Facebook } from "lucide-react";

interface FooterProps {
  isDark: boolean;
  navigateTo: (page: "home" | "projects") => void;
}

export function Footer({ isDark, navigateTo }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    navigateTo("home");
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <footer className={`${isDark ? "bg-black" : "bg-neutral-900"} text-white py-12`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="mb-4">simplistic | studio</h3>
            <p className={isDark ? "text-neutral-400" : "text-neutral-400"}>
              Creating timeless spaces through minimalist design and thoughtful architecture.
            </p>
          </div>

          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className={`space-y-2 ${isDark ? "text-neutral-400" : "text-neutral-400"}`}>
              <li>
                <button
                  onClick={() => navigateTo("projects")}
                  className="hover:text-white transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/simplistic | studio/"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 ${
                  isDark ? "bg-neutral-900" : "bg-neutral-800"
                } flex items-center justify-center hover:bg-neutral-700 transition-colors`}
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/simplistic-studio-51a99b206/"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 ${
                  isDark ? "bg-neutral-900" : "bg-neutral-800"
                } flex items-center justify-center hover:bg-neutral-700 transition-colors`}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.facebook.com/p/Simplistic-100064173515796/"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 ${
                  isDark ? "bg-neutral-900" : "bg-neutral-800"
                } flex items-center justify-center hover:bg-neutral-700 transition-colors`}
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@simplistic.architecture"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 ${
                  isDark ? "bg-neutral-900" : "bg-neutral-800"
                } flex items-center justify-center hover:bg-neutral-700 transition-colors`}
                aria-label="TikTok"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className={`border-t ${isDark ? "border-neutral-900" : "border-neutral-800"} pt-8 text-center text-neutral-400`}>
          <p>© {currentYear} simplistic | studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}