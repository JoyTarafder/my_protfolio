import { Icon } from "@iconify/react";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link as UILink,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { ThemeSwitch } from "./theme-switch";

// Define types for menu items
type BaseMenuItem = {
  label: string;
  icon: string;
};

type HashMenuItem = BaseMenuItem & {
  href: string;
  to?: never;
};

type RouteMenuItem = BaseMenuItem & {
  to: string;
  href?: never;
};

type MenuItem = HashMenuItem | RouteMenuItem;

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const menuItems: MenuItem[] = isHomePage
    ? [
        { href: "#about", label: "About", icon: "lucide:user" },
        { href: "#skills", label: "Skills", icon: "lucide:code" },
        { href: "#projects", label: "Projects", icon: "lucide:folder" },
        { href: "#contact", label: "Contact", icon: "lucide:mail" },
      ]
    : [
        { to: "/", label: "Back to Home", icon: "lucide:home" },
        { to: "/projects", label: "Projects", icon: "lucide:folder" },
      ];

  return (
    <Navbar
      maxWidth="full"
      position="sticky"
      className={`transition-all duration-500 ${
        isScrolled
          ? "bg-background/60 backdrop-blur-xl shadow-lg border-b border-primary/10"
          : "bg-transparent"
      }`}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarBrand>
        <RouterLink
          to="/"
          className="flex items-center gap-3 hover-scale group relative"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 p-[2px] animate-morph-gradient overflow-hidden">
            <div className="w-full h-full rounded-xl bg-background flex items-center justify-center relative overflow-hidden">
              <span className="font-bold text-3xl gradient-text group-hover:scale-110 transition-transform duration-300">
                JT
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          <div className="relative">
            <p className="font-bold text-5xl gradient-text animate-morph-gradient bg-clip-text">
              FolioJT
            </p>
            <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300"></div>
          </div>
        </RouterLink>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {isHomePage
          ? menuItems.slice(0, -1).map((item) => {
              if (!("href" in item) || !item.href) return null;
              const href = item.href as string;
              return (
                <NavbarItem key={href} className="relative group">
                  <UILink
                    href={href}
                    className={`relative px-4 py-2 transition-all duration-300 flex items-center gap-2 hover:text-primary ${
                      activeSection === href.slice(1)
                        ? "text-primary"
                        : "text-foreground/70"
                    }`}
                  >
                    <Icon
                      icon={item.icon}
                      className={`text-lg transition-transform duration-300 group-hover:scale-110 ${
                        activeSection === href.slice(1) ? "animate-pulse" : ""
                      }`}
                    />
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transform origin-left transition-transform duration-300 ${
                        activeSection === href.slice(1)
                          ? "scale-x-100"
                          : "scale-x-0"
                      } group-hover:scale-x-100`}
                    ></span>
                  </UILink>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </NavbarItem>
              );
            })
          : menuItems.slice(1).map((item) => {
              if (!("to" in item) || !item.to) return null;
              const to = item.to as string;
              return (
                <NavbarItem key={to} className="relative group">
                  <RouterLink
                    to={to}
                    className={`relative px-4 py-2 transition-all duration-300 flex items-center gap-2 hover:text-primary ${
                      location.pathname === to
                        ? "text-primary"
                        : "text-foreground/70"
                    }`}
                  >
                    <Icon
                      icon={item.icon}
                      className={`text-lg transition-transform duration-300 group-hover:scale-110 ${
                        location.pathname === to ? "animate-pulse" : ""
                      }`}
                    />
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transform origin-left transition-transform duration-300 ${
                        location.pathname === to ? "scale-x-100" : "scale-x-0"
                      } group-hover:scale-x-100`}
                    ></span>
                  </RouterLink>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </NavbarItem>
              );
            })}
      </NavbarContent>

      <NavbarContent justify="end" className="gap-4">
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          {isHomePage ? (
            <Button
              as={UILink}
              href="#contact"
              className="relative overflow-hidden bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 text-white shadow-lg hover:shadow-primary/25 hover-lift group animate-morph-gradient"
              size="sm"
              onClick={() => setIsMenuOpen(false)}
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
              onClick={() => setIsMenuOpen(false)}
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

      <NavbarMenu className="pt-6 bg-background/95 backdrop-blur-xl">
        {menuItems.map((item, index) => {
          if ("href" in item && item.href) {
            return (
              <NavbarMenuItem key={`href-${index}`}>
                <UILink
                  href={item.href}
                  className="w-full flex items-center gap-2 py-2 text-lg hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon icon={item.icon} />
                  {item.label}
                </UILink>
              </NavbarMenuItem>
            );
          }
          if ("to" in item && item.to) {
            return (
              <NavbarMenuItem key={`to-${index}`}>
                <RouterLink
                  to={item.to}
                  className="w-full flex items-center gap-2 py-2 text-lg hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon icon={item.icon} />
                  {item.label}
                </RouterLink>
              </NavbarMenuItem>
            );
          }
          return null;
        })}
      </NavbarMenu>

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
