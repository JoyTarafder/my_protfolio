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
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if user has a preference stored
    const savedTheme = localStorage.getItem("theme");
    // Check if browser/OS is set to dark mode
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    // Return true if saved theme is dark or if no saved theme but OS prefers dark
    return savedTheme === "dark" || (!savedTheme && prefersDark);
  });
  const pageRef = useRef<HTMLDivElement>(null);

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
      className="min-h-screen py-32 px-4 relative overflow-hidden dark:bg-[#0f172a] transition-colors duration-500"
    >
      {/* Theme toggle button */}
      <button
        onClick={toggleTheme}
        className="fixed top-24 right-6 z-50 p-3 rounded-full bg-white dark:bg-[#1e293b] shadow-lg hover:shadow-xl transition-all duration-300 group"
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? (
          <Icon
            icon="lucide:sun"
            className="text-xl text-[rgba(var(--color-primary),0.9)] group-hover:rotate-45 transition-transform duration-500"
          />
        ) : (
          <Icon
            icon="lucide:moon"
            className="text-xl text-[rgba(var(--color-primary),0.9)] group-hover:rotate-12 transition-transform duration-500"
          />
        )}
      </button>

      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-grid-primary/[0.02] dark:bg-grid-primary/[0.01] -z-1" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(var(--color-primary),0.01)] to-transparent dark:via-[rgba(var(--color-primary),0.02)]" />

      {/* Dynamic background blur that follows mouse */}
      <div
        className="absolute w-[40vw] h-[40vw] rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-[120px] opacity-[0.03] dark:opacity-[0.04] transition-all duration-700 ease-out"
        style={{
          background: "rgba(var(--color-primary), 1)",
          left: `${mousePosition.x / 10}px`,
          top: `${mousePosition.y / 10}px`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Animated particles - enhanced for dark mode */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-particle"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              background: isDarkMode
                ? `rgba(var(--color-primary), ${Math.random() * 0.7 + 0.3})`
                : `rgba(var(--color-primary), ${Math.random() * 0.5 + 0.2})`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              boxShadow: isDarkMode
                ? `0 0 ${
                    Math.random() * 10 + 5
                  }px rgba(var(--color-primary), 0.3)`
                : "none",
            }}
          />
        ))}
      </div>

      {/* Subtle noise texture */}
      <div className="absolute inset-0 noise-overlay opacity-10 dark:opacity-20"></div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header section with enhanced animations */}
        <div
          className={`flex flex-col items-center text-center mb-20 ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <div className="relative mb-6">
            <h1 className="text-6xl font-bold mb-4 text-[rgba(var(--color-primary),0.9)] dark:text-[rgba(var(--color-primary),0.95)] relative z-10">
              My Projects
            </h1>
            <div className="absolute -inset-4 bg-[rgba(var(--color-primary),0.03)] dark:bg-[rgba(var(--color-primary),0.06)] rounded-full blur-xl -z-1 opacity-70"></div>
          </div>

          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[rgba(var(--color-primary),0.5)] to-transparent rounded-full mb-8" />

          <p className="mt-4 text-xl text-default-600 dark:text-gray-300 max-w-2xl leading-relaxed">
            A comprehensive collection of my work showcasing my skills and
            experience in
            <span className="text-[rgba(var(--color-primary),0.9)] dark:text-[rgba(var(--color-primary),1)] font-medium mx-1">
              web development
            </span>
            and
            <span className="text-[rgba(var(--color-primary),0.9)] dark:text-[rgba(var(--color-primary),1)] font-medium mx-1">
              UI/UX design
            </span>
          </p>

          {/* Back to home button with enhanced styling */}
          <Link to="/" className="mt-10 group">
            <Button
              variant="light"
              className="text-[rgba(var(--color-primary),0.9)] dark:text-[rgba(var(--color-primary),1)] px-6 py-6 relative overflow-hidden group-hover:shadow-md transition-all duration-300 dark:bg-[rgba(var(--color-primary),0.1)] dark:backdrop-blur-sm"
              startContent={
                <Icon
                  icon="lucide:arrow-left"
                  className="text-lg transition-transform duration-300 group-hover:-translate-x-1"
                />
              }
            >
              <span className="relative z-10">Back to Home</span>
              <div className="absolute inset-0 bg-[rgba(var(--color-primary),0.05)] dark:bg-[rgba(var(--color-primary),0.15)] scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500"></div>
            </Button>
          </Link>
        </div>

        {/* Project filters - enhanced with better animations and styling */}
        <div
          className={`flex justify-center mb-16 ${
            isVisible ? "animate-slide-up stagger-1" : "opacity-0"
          }`}
        >
          <div className="flex p-1.5 bg-[rgba(var(--color-primary),0.04)] dark:bg-[rgba(var(--color-primary),0.08)] rounded-full shadow-sm backdrop-blur-sm border border-[rgba(var(--color-primary),0.08)] dark:border-[rgba(var(--color-primary),0.15)]">
            {[
              { id: "all", label: "All Projects", icon: "lucide:grid" },
              { id: "featured", label: "Featured", icon: "lucide:star" },
              { id: "web", label: "Web Apps", icon: "lucide:globe" },
              { id: "mobile", label: "Mobile Apps", icon: "lucide:smartphone" },
            ].map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-500 ${
                  filter === category.id
                    ? "bg-[rgba(var(--color-primary),0.9)] text-white shadow-md transform scale-105"
                    : "text-default-600 dark:text-gray-300 hover:text-[rgba(var(--color-primary),0.9)] dark:hover:text-[rgba(var(--color-primary),1)] hover:bg-[rgba(var(--color-primary),0.03)] dark:hover:bg-[rgba(var(--color-primary),0.1)]"
                }`}
              >
                <Icon
                  icon={category.icon}
                  className={`mr-2 ${
                    filter === category.id ? "animate-pulse" : ""
                  }`}
                />
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid with enhanced card design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`${
                isVisible
                  ? `animate-slide-up stagger-${(index % 3) + 2}`
                  : "opacity-0"
              }`}
            >
              <div className="premium-card h-full group relative">
                {/* Animated border effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[rgba(var(--color-primary),0.2)] to-[rgba(var(--color-secondary),0.2)] dark:from-[rgba(var(--color-primary),0.4)] dark:to-[rgba(var(--color-secondary),0.4)] rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></div>

                <div className="relative bg-[rgba(var(--color-card),1)] dark:bg-[#1e293b] rounded-xl p-6 h-full flex flex-col border border-transparent dark:border-[rgba(var(--color-primary),0.1)]">
                  {/* Image container with enhanced hover effects */}
                  <div className="relative overflow-hidden h-56 rounded-lg mb-6 group-hover:shadow-lg dark:group-hover:shadow-[0_0_15px_rgba(var(--color-primary),0.15)] transition-all duration-500">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Overlay on hover - enhanced with better animations */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(var(--color-dark),0.8)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-white/90 mb-4 line-clamp-3">
                          {project.description}
                        </p>
                        <div className="flex gap-3">
                          <Button
                            size="sm"
                            className="bg-white text-[rgba(var(--color-primary),0.9)] border-0 hover-lift"
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

                    {/* Featured badge - enhanced for dark mode */}
                    {project.featured && (
                      <div className="absolute top-4 right-4 featured-badge dark:bg-[rgba(var(--color-primary),1)] dark:shadow-[0_0_10px_rgba(var(--color-primary),0.3)]">
                        <Icon
                          icon="lucide:star"
                          className="inline-block mr-1 text-xs"
                        />
                        Featured
                      </div>
                    )}

                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 dark:via-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-x-full group-hover:translate-x-full"></div>
                  </div>

                  {/* Content - enhanced with better typography and spacing */}
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-[rgba(var(--color-primary),0.9)] dark:text-[rgba(var(--color-primary),1)] group-hover:text-[rgba(var(--color-primary),1)] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-default-500 dark:text-gray-400 mb-5 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags - enhanced with better styling for dark mode */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="project-tag group/tag dark:bg-[rgba(var(--color-primary),0.15)] dark:text-[rgba(var(--color-primary),1)]"
                        >
                          <span className="relative z-10">{tag}</span>
                          <div className="absolute inset-0 bg-[rgba(var(--color-primary),0.1)] dark:bg-[rgba(var(--color-primary),0.25)] scale-x-0 group-hover/tag:scale-x-100 origin-left transition-transform duration-300 rounded-full"></div>
                        </span>
                      ))}
                    </div>

                    {/* Buttons - enhanced with better hover effects for dark mode */}
                    <div className="flex gap-3 w-full mt-auto">
                      <Button
                        className="flex-1 bg-[rgba(var(--color-primary),0.9)] dark:bg-[rgba(var(--color-primary),0.8)] text-white hover:bg-[rgba(var(--color-primary),1)] dark:hover:bg-[rgba(var(--color-primary),0.9)] hover-lift relative overflow-hidden group/btn"
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
                        className="flex-1 bg-transparent border border-[rgba(var(--color-primary),0.2)] dark:border-[rgba(var(--color-primary),0.3)] text-[rgba(var(--color-primary),0.9)] dark:text-[rgba(var(--color-primary),1)] hover:bg-[rgba(var(--color-primary),0.04)] dark:hover:bg-[rgba(var(--color-primary),0.15)] hover-lift relative overflow-hidden group/btn"
                        variant="bordered"
                        endContent={
                          <Icon
                            icon="lucide:github"
                            className="transition-transform duration-300 group-hover/btn:translate-x-1"
                          />
                        }
                      >
                        <span className="relative z-10">View Code</span>
                        <div className="absolute inset-0 bg-[rgba(var(--color-primary),0.05)] dark:bg-[rgba(var(--color-primary),0.1)] scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-500"></div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project stats section - enhanced for dark mode */}
        {/* <div
          className={`mt-24 grid grid-cols-1 md:grid-cols-4 gap-6 ${
            isVisible ? "animate-slide-up stagger-5" : "opacity-0"
          }`}
        >
          {[
            {
              label: "Projects Completed",
              value: "15+",
              icon: "lucide:check-circle",
            },
            { label: "Happy Clients", value: "10+", icon: "lucide:users" },
            { label: "Hours of Work", value: "500+", icon: "lucide:clock" },
            { label: "Technologies Used", value: "12+", icon: "lucide:code" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="frosted-glass p-6 rounded-xl text-center hover-lift transition-all duration-300 border border-[rgba(var(--color-primary),0.08)] dark:border-[rgba(var(--color-primary),0.15)] dark:bg-[rgba(15,23,42,0.6)] group"
            >
              <div className="w-14 h-14 rounded-full bg-[rgba(var(--color-primary),0.08)] dark:bg-[rgba(var(--color-primary),0.15)] flex items-center justify-center mx-auto mb-4 group-hover:bg-[rgba(var(--color-primary),0.12)] dark:group-hover:bg-[rgba(var(--color-primary),0.25)] transition-colors duration-300">
                <Icon
                  icon={stat.icon}
                  className="text-2xl text-[rgba(var(--color-primary),0.9)] dark:text-[rgba(var(--color-primary),1)]"
                />
              </div>
              <div className="text-3xl font-bold text-[rgba(var(--color-primary),0.9)] dark:text-[rgba(var(--color-primary),1)] mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-default-500 dark:text-gray-400 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div> */}

        {/* Call to action section - enhanced for dark mode */}
        <div
          className={`mt-24 ${
            isVisible ? "animate-slide-up stagger-6" : "opacity-0"
          }`}
        >
          <div className="frosted-glass rounded-xl p-10 text-center relative overflow-hidden border border-[rgba(var(--color-primary),0.08)] dark:border-[rgba(var(--color-primary),0.2)] dark:bg-[rgba(15,23,42,0.6)] group hover-lift">
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(var(--color-primary),0.02)] to-transparent dark:from-[rgba(var(--color-primary),0.05)]"></div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[rgba(var(--color-primary),0.3)] to-transparent dark:via-[rgba(var(--color-primary),0.5)]"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[rgba(var(--color-primary),0.3)] to-transparent dark:via-[rgba(var(--color-primary),0.5)]"></div>

            {/* Animated corner accents */}
            <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[rgba(var(--color-primary),0.3)] dark:border-[rgba(var(--color-primary),0.5)] rounded-tl-lg"></div>
            <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-[rgba(var(--color-primary),0.3)] dark:border-[rgba(var(--color-primary),0.5)] rounded-tr-lg"></div>
            <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-[rgba(var(--color-primary),0.3)] dark:border-[rgba(var(--color-primary),0.5)] rounded-bl-lg"></div>
            <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[rgba(var(--color-primary),0.3)] dark:border-[rgba(var(--color-primary),0.5)] rounded-br-lg"></div>

            <h3 className="text-2xl font-bold text-[rgba(var(--color-primary),0.9)] dark:text-[rgba(var(--color-primary),1)] mb-4 group-hover:scale-105 transition-transform duration-300">
              Ready to Start a Project?
            </h3>
            <p className="text-lg text-default-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm currently available for freelance work. If you have a project
              that needs some creative touch, I'd love to hear about it.
            </p>
            <a
              href="mailto:joytarafder3@gmail.com?subject=Project%20Inquiry"
              className="inline-block"
            >
              <Button
                size="lg"
                className="px-8 py-6 text-lg bg-[rgba(var(--color-primary),0.9)] dark:bg-[rgba(var(--color-primary),0.8)] text-white hover:bg-[rgba(var(--color-primary),1)] dark:hover:bg-[rgba(var(--color-primary),0.9)] button-3d relative overflow-hidden group/btn dark:shadow-[0_4px_20px_rgba(var(--color-primary),0.3)]"
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
