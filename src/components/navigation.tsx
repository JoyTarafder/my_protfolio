import { Icon } from "@iconify/react";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link as UILink,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { ThemeSwitch } from "./theme-switch";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Only update active section on home page
      if (isHomePage) {
        // Update active section based on scroll position
        const sections = ["home", "about", "skills", "projects", "contact"];
        const current = sections.find((section) => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        if (current) {
          setActiveSection(current);
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHomePage]);

  return (
    <Navbar
      maxWidth="full"
      position="sticky"
      className={`transition-all duration-500 ${
        isScrolled
          ? "bg-background/60 backdrop-blur-xl shadow-lg border-b border-primary/10"
          : "bg-transparent"
      }`}
    >
      <NavbarBrand>
        <RouterLink
          to="/"
          className="flex items-center gap-3 hover-scale group relative"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 p-[2px] animate-morph-gradient overflow-hidden">
            <div className="w-full h-full rounded-xl bg-background flex items-center justify-center relative overflow-hidden">
              <span className="font-bold text-lg gradient-text group-hover:scale-110 transition-transform duration-300">
                JT
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          <div className="relative">
            <p className="font-bold text-xl gradient-text animate-morph-gradient bg-clip-text">
              Joy Tarafder
            </p>
            <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300"></div>
          </div>
        </RouterLink>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {isHomePage ? (
          // Home page navigation with hash links
          [
            { href: "#about", label: "About", icon: "lucide:user" },
            { href: "#skills", label: "Skills", icon: "lucide:code" },
            { href: "#projects", label: "Projects", icon: "lucide:folder" },
          ].map((item) => (
            <NavbarItem key={item.href} className="relative group">
              <UILink
                href={item.href}
                className={`relative px-4 py-2 transition-all duration-300 flex items-center gap-2 hover:text-primary ${
                  activeSection === item.href.slice(1)
                    ? "text-primary"
                    : "text-foreground/70"
                }`}
              >
                <Icon
                  icon={item.icon}
                  className={`text-lg transition-transform duration-300 group-hover:scale-110 ${
                    activeSection === item.href.slice(1) ? "animate-pulse" : ""
                  }`}
                />
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transform origin-left transition-transform duration-300 ${
                    activeSection === item.href.slice(1)
                      ? "scale-x-100"
                      : "scale-x-0"
                  } group-hover:scale-x-100`}
                ></span>
              </UILink>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </NavbarItem>
          ))
        ) : (
          // Projects page navigation
          <NavbarItem className="relative group">
            <RouterLink
              to="/projects"
              className={`relative px-4 py-2 transition-all duration-300 flex items-center gap-2 hover:text-primary ${
                location.pathname === "/projects"
                  ? "text-primary"
                  : "text-foreground/70"
              }`}
            >
              <Icon
                icon="lucide:folder"
                className={`text-lg transition-transform duration-300 group-hover:scale-110 ${
                  location.pathname === "/projects" ? "animate-pulse" : ""
                }`}
              />
              Projects
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transform origin-left transition-transform duration-300 ${
                  location.pathname === "/projects"
                    ? "scale-x-100"
                    : "scale-x-0"
                } group-hover:scale-x-100`}
              ></span>
            </RouterLink>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarContent justify="end" className="gap-4">
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem>
          {isHomePage ? (
            <Button
              as={UILink}
              href="#contact"
              className="relative overflow-hidden bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 text-white shadow-lg hover:shadow-primary/25 hover-lift group animate-morph-gradient"
              size="sm"
            >
              <span className="relative z-10 flex items-center gap-2">
                Contact Me
                <Icon
                  icon="lucide:send"
                  className="text-sm transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
              <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Button>
          ) : (
            <Button
              as={RouterLink}
              to="/"
              className="relative overflow-hidden bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 text-white shadow-lg hover:shadow-primary/25 hover-lift group animate-morph-gradient"
              size="sm"
            >
              <span className="relative z-10 flex items-center gap-2">
                Back to Home
                <Icon
                  icon="lucide:home"
                  className="text-sm transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
              <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>

      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-64 h-64 rounded-full bg-primary/5 blur-3xl"
          style={{
            left: `${mousePosition.x / 20}px`,
            top: `${mousePosition.y / 20}px`,
            transition: "all 0.3s ease",
          }}
        ></div>
      </div>
    </Navbar>
  );
}
