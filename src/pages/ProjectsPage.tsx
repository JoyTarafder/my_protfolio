import { Button, Image } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// Using the same projects data from the ProjectsSection
const projects = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with React and Node.js",
    image: "https://picsum.photos/800/600?random=1",
    demo: "#",
    code: "#",
    tags: ["React", "Node.js", "MongoDB"],
    featured: true,
    category: "web",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application",
    image: "https://picsum.photos/800/600?random=2",
    demo: "#",
    code: "#",
    tags: ["React", "Firebase", "TailwindCSS"],
    featured: false,
    category: "web",
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website using React and TailwindCSS",
    image: "https://picsum.photos/800/600?random=3",
    demo: "#",
    code: "#",
    tags: ["React", "TailwindCSS", "Framer Motion"],
    featured: true,
    category: "web",
  },
  // Additional projects for the projects page
  {
    title: "Weather App",
    description: "A weather application with real-time updates",
    image: "https://picsum.photos/800/600?random=4",
    demo: "#",
    code: "#",
    tags: ["React", "API Integration", "TailwindCSS"],
    featured: false,
    category: "web",
  },
  {
    title: "Blog Platform",
    description: "A full-featured blog platform with user authentication",
    image: "https://picsum.photos/800/600?random=5",
    demo: "#",
    code: "#",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    featured: false,
    category: "web",
  },
  {
    title: "Social Media Dashboard",
    description: "A dashboard for managing social media accounts",
    image: "https://picsum.photos/800/600?random=6",
    demo: "#",
    code: "#",
    tags: ["React", "Redux", "TailwindCSS"],
    featured: false,
    category: "web",
  },
];

export function ProjectsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState("all"); // "all", "featured", "web", "mobile"
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDarkMode, setIsDarkMode] = useState(true); // Always start with dark mode
  const pageRef = useRef<HTMLDivElement>(null);
  const [stars, setStars] = useState<
    Array<{
      x: number;
      y: number;
      size: number;
      opacity: number;
      speed: number;
    }>
  >([]);

  // Apply dark mode class to document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // Generate stars for the background
  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 100; i++) {
        newStars.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.7 + 0.3,
          speed: Math.random() * 5 + 1,
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  useEffect(() => {
    // Set visible immediately since this is a dedicated page
    setIsVisible(true);

    // Scroll to top when page loads
    window.scrollTo(0, 0);

    // Track mouse position for interactive effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    if (filter === "featured") return project.featured;
    if (filter === "web" || filter === "mobile")
      return project.category === filter;
    return true;
  });

  return (
    <div
      ref={pageRef}
      className={`min-h-screen py-16 md:py-32 px-4 md:px-6 relative overflow-hidden transition-colors duration-500 ${
        isDarkMode
          ? "bg-black text-white"
          : "bg-gradient-to-b from-[#f8fafc] to-[#eef2ff] text-gray-800"
      }`}
    >
      {/* Theme toggle button */}
      <button
        onClick={toggleTheme}
        className={`fixed top-16 md:top-24 right-4 md:right-6 z-50 p-2.5 md:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group ${
          isDarkMode
            ? "bg-[#1a1a1a] border border-[#333]"
            : "bg-white border border-gray-200"
        }`}
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? (
          <Icon
            icon="lucide:sun"
            className="text-xl text-[#f5f5f5] group-hover:rotate-45 transition-transform duration-500"
          />
        ) : (
          <Icon
            icon="lucide:moon"
            className="text-xl text-[#4f46e5] group-hover:rotate-12 transition-transform duration-500"
          />
        )}
      </button>

      {/* Star background - only visible in dark mode */}
      {isDarkMode && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {stars.map((star, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-twinkle"
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                backgroundColor: "#ffffff",
                left: `${star.x}%`,
                top: `${star.y}%`,
                opacity: star.opacity,
                animationDuration: `${star.speed}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Cosmic nebula effect - only visible in dark mode */}
      {isDarkMode && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(79,70,229,0.15)_0%,rgba(0,0,0,0)_70%)] opacity-60"></div>
      )}

      {/* Light mode background patterns */}
      {!isDarkMode && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(#e0e7ff_1px,transparent_1px)] bg-[size:20px_20px] opacity-50"></div>
          <div className="absolute inset-0 bg-[conic-gradient(at_top_right,#c7d2fe,#e0e7ff,#f1f5f9,#e0e7ff,#c7d2fe)] opacity-10"></div>
        </>
      )}

      {/* Dynamic aurora effect that follows mouse */}
      <div
        className={`absolute w-[60vw] h-[60vw] rounded-full filter blur-[120px] transition-all duration-1000 ease-out ${
          isDarkMode
            ? "mix-blend-screen opacity-20"
            : "mix-blend-multiply opacity-10"
        }`}
        style={{
          background: isDarkMode
            ? "radial-gradient(circle, rgba(79,70,229,0.8) 0%, rgba(139,92,246,0.4) 50%, rgba(0,0,0,0) 80%)"
            : "radial-gradient(circle, rgba(79,70,229,0.4) 0%, rgba(139,92,246,0.2) 50%, rgba(255,255,255,0) 80%)",
          left: `${mousePosition.x / 5}px`,
          top: `${mousePosition.y / 5}px`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-particle"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              background: isDarkMode
                ? `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.3})`
                : `rgba(79, 70, 229, ${Math.random() * 0.3 + 0.1})`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 15 + 10}s`,
              boxShadow: isDarkMode
                ? `0 0 ${Math.random() * 10 + 5}px rgba(255, 255, 255, 0.3)`
                : `0 0 ${Math.random() * 10 + 5}px rgba(79, 70, 229, 0.2)`,
            }}
          />
        ))}
      </div>

      {/* Grid overlay */}
      <div
        className={`absolute inset-0 ${
          isDarkMode
            ? "bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] opacity-20"
            : "bg-[linear-gradient(rgba(79,70,229,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.05)_1px,transparent_1px)] opacity-30"
        } bg-[size:40px_40px]`}
      ></div>

      {/* Subtle noise texture */}
      <div
        className={`absolute inset-0 noise-overlay ${
          isDarkMode ? "opacity-[0.15]" : "opacity-[0.05]"
        }`}
      ></div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header section with enhanced animations */}
        <div
          className={`flex flex-col items-center text-center mb-12 md:mb-20 ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <div className="relative mb-4 md:mb-6">
            <h1
              className={`text-4xl md:text-6xl font-bold mb-4 relative z-10 ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              My <span className="text-[#4f46e5]">Projects</span>
            </h1>
            <div
              className={`absolute -inset-4 rounded-full blur-xl -z-1 opacity-70 animate-pulse-slow ${
                isDarkMode
                  ? "bg-[rgba(79,70,229,0.1)]"
                  : "bg-[rgba(79,70,229,0.08)]"
              }`}
            ></div>
          </div>

          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#4f46e5] to-transparent rounded-full mb-8" />

          <p
            className={`mt-4 text-lg md:text-xl max-w-2xl leading-relaxed px-4 md:px-0 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            A comprehensive collection of my work showcasing my skills and
            experience in
            <span className="text-[#4f46e5] font-medium mx-1">
              web development
            </span>
            and
            <span className="text-[#4f46e5] font-medium mx-1">
              UI/UX design
            </span>
          </p>

          {/* Back to home button with enhanced styling */}
          <Link to="/" className="mt-10 group">
            <Button
              variant="light"
              className={`px-6 py-6 relative overflow-hidden group-hover:shadow-md transition-all duration-300 ${
                isDarkMode
                  ? "text-white bg-[rgba(79,70,229,0.2)] border border-[rgba(79,70,229,0.3)]"
                  : "text-[#4f46e5] bg-white border border-[rgba(79,70,229,0.2)]"
              } backdrop-blur-sm`}
              startContent={
                <Icon
                  icon="lucide:arrow-left"
                  className="text-lg transition-transform duration-300 group-hover:-translate-x-1"
                />
              }
            >
              <span className="relative z-10">Back to Home</span>
              <div
                className={`absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 ${
                  isDarkMode
                    ? "bg-[rgba(79,70,229,0.3)]"
                    : "bg-[rgba(79,70,229,0.1)]"
                }`}
              ></div>
            </Button>
          </Link>
        </div>

        {/* Project filters - enhanced with better animations and styling */}
        <div
          className={`flex justify-center mb-10 md:mb-16 overflow-x-auto pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 ${
            isVisible ? "animate-slide-up stagger-1" : "opacity-0"
          }`}
        >
          <div
            className={`flex p-1 md:p-1.5 rounded-full shadow-lg backdrop-blur-sm ${
              isDarkMode
                ? "bg-[rgba(20,20,20,0.6)] border border-[rgba(79,70,229,0.2)]"
                : "bg-white/80 border border-[rgba(79,70,229,0.1)]"
            }`}
          >
            {[
              { id: "all", label: "All", icon: "lucide:grid" },
              { id: "featured", label: "Featured", icon: "lucide:star" },
              { id: "web", label: "Web", icon: "lucide:globe" },
              { id: "mobile", label: "Mobile", icon: "lucide:smartphone" },
            ].map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`flex items-center px-3 md:px-6 py-2 md:py-3 rounded-full text-sm font-medium transition-all duration-500 whitespace-nowrap ${
                  filter === category.id
                    ? "bg-[#4f46e5] text-white shadow-md transform scale-105"
                    : isDarkMode
                    ? "text-gray-300 hover:text-white hover:bg-[rgba(79,70,229,0.2)]"
                    : "text-gray-600 hover:text-[#4f46e5] hover:bg-[rgba(79,70,229,0.05)]"
                }`}
              >
                <Icon
                  icon={category.icon}
                  className={`mr-1 md:mr-2 ${
                    filter === category.id ? "animate-pulse" : ""
                  }`}
                />
                <span className="hidden md:inline">{category.label}</span>
                <span className="md:hidden">{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid with enhanced card design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`${
                isVisible
                  ? `animate-slide-up stagger-${(index % 3) + 2}`
                  : "opacity-0"
              }`}
            >
              <div className="h-full group relative">
                {/* Animated border effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4f46e5] to-[#8b5cf6] rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></div>

                <div
                  className={`relative rounded-xl p-6 h-full flex flex-col ${
                    isDarkMode
                      ? "bg-[#121212] border border-[#333]"
                      : "bg-white border border-gray-100 shadow-sm"
                  }`}
                >
                  {/* Image container with enhanced hover effects */}
                  <div className="relative overflow-hidden h-56 rounded-lg mb-6 group-hover:shadow-lg group-hover:shadow-[#4f46e5]/20 transition-all duration-500">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Overlay on hover - enhanced with better animations */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-white/90 mb-4 line-clamp-3">
                          {project.description}
                        </p>
                        <div className="flex gap-3">
                          <Button
                            size="sm"
                            className="bg-white text-[#4f46e5] border-0 hover-lift"
                            endContent={<Icon icon="lucide:external-link" />}
                          >
                            Demo
                          </Button>
                          <Button
                            size="sm"
                            className="bg-[rgba(255,255,255,0.1)] text-white border-0 hover-lift"
                            endContent={<Icon icon="lucide:github" />}
                          >
                            Code
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4 bg-[#4f46e5] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        <Icon
                          icon="lucide:star"
                          className="inline-block mr-1 text-xs"
                        />
                        Featured
                      </div>
                    )}

                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-x-full group-hover:translate-x-full"></div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3
                      className={`text-lg md:text-xl font-semibold mb-2 md:mb-3 transition-colors duration-300 ${
                        isDarkMode
                          ? "text-white group-hover:text-[#4f46e5]"
                          : "text-gray-800 group-hover:text-[#4f46e5]"
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`mb-5 line-clamp-2 leading-relaxed ${
                        isDarkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-3 py-1 text-xs font-medium rounded-full text-[#4f46e5] group/tag ${
                            isDarkMode
                              ? "bg-[rgba(79,70,229,0.1)]"
                              : "bg-[rgba(79,70,229,0.05)]"
                          }`}
                        >
                          <span className="relative z-10">{tag}</span>
                          <div
                            className={`absolute inset-0 scale-x-0 group-hover/tag:scale-x-100 origin-left transition-transform duration-300 rounded-full ${
                              isDarkMode
                                ? "bg-[rgba(79,70,229,0.2)]"
                                : "bg-[rgba(79,70,229,0.1)]"
                            }`}
                          ></div>
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2 md:gap-3 w-full mt-auto">
                      <Button
                        size="sm"
                        className="flex-1 bg-[#4f46e5] text-white hover:bg-[#4338ca] hover-lift relative overflow-hidden group/btn text-sm md:text-base"
                        endContent={
                          <Icon
                            icon="lucide:external-link"
                            className="transition-transform duration-300 group-hover/btn:translate-x-1"
                          />
                        }
                      >
                        <span className="relative z-10">Live Demo</span>
                        <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-500"></div>
                      </Button>
                      <Button
                        size="sm"
                        className={`flex-1 bg-transparent hover-lift relative overflow-hidden group/btn ${
                          isDarkMode
                            ? "border border-[#333] text-white hover:bg-[rgba(79,70,229,0.1)]"
                            : "border border-gray-200 text-gray-700 hover:bg-[rgba(79,70,229,0.05)]"
                        }`}
                        variant="bordered"
                        endContent={
                          <Icon
                            icon="lucide:github"
                            className="transition-transform duration-300 group-hover/btn:translate-x-1"
                          />
                        }
                      >
                        <span className="relative z-10">View Code</span>
                        <div
                          className={`absolute inset-0 scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-500 ${
                            isDarkMode
                              ? "bg-[rgba(79,70,229,0.05)]"
                              : "bg-[rgba(79,70,229,0.03)]"
                          }`}
                        ></div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action section */}
        <div
          className={`mt-16 md:mt-24 ${
            isVisible ? "animate-slide-up stagger-6" : "opacity-0"
          }`}
        >
          <div
            className={`rounded-xl p-6 md:p-10 text-center relative overflow-hidden group hover-lift ${
              isDarkMode
                ? "border border-[#333] bg-[rgba(18,18,18,0.6)]"
                : "border border-gray-100 bg-white/80 shadow-md"
            }`}
          >
            <div
              className={`absolute inset-0 ${
                isDarkMode
                  ? "bg-gradient-to-r from-[rgba(79,70,229,0.05)] to-transparent"
                  : "bg-gradient-to-r from-[rgba(79,70,229,0.02)] to-transparent"
              }`}
            ></div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#4f46e5] to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#4f46e5] to-transparent"></div>

            {/* Animated corner accents */}
            <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#4f46e5] rounded-tl-lg"></div>
            <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-[#4f46e5] rounded-tr-lg"></div>
            <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-[#4f46e5] rounded-bl-lg"></div>
            <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#4f46e5] rounded-br-lg"></div>

            <h3
              className={`text-xl md:text-2xl font-bold mb-3 md:mb-4 group-hover:scale-105 transition-transform duration-300 ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Ready to Start a <span className="text-[#4f46e5]">Project</span>?
            </h3>
            <p
              className={`text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              I'm currently available for freelance work. If you have a project
              that needs some creative touch, I'd love to hear about it.
            </p>
            <a
              href="mailto:joytarafder3@gmail.com?subject=Project%20Inquiry"
              className="inline-block"
            >
              <Button
                size="lg"
                className="px-6 md:px-8 py-4 md:py-6 text-base md:text-lg bg-[#4f46e5] text-white hover:bg-[#4338ca] button-3d relative overflow-hidden group/btn shadow-[0_4px_20px_rgba(79,70,229,0.3)]"
                endContent={
                  <Icon
                    icon="lucide:send"
                    className="text-xl transition-transform duration-300 group-hover/btn:translate-x-1"
                  />
                }
              >
                <span className="relative z-10">Contact Me</span>
                <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-500"></div>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
