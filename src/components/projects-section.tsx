import { Button, Image } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";

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
];

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState("all"); // "all", "featured", "web", "mobile"
  // const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);

    return () => {
      if (section) observer.disconnect();
    };
  }, []);

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    if (filter === "featured") return project.featured;
    if (filter === "web" || filter === "mobile")
      return project.category === filter;
    return true;
  });

  return (
    <section
      ref={sectionRef}
      className="py-32 px-4 relative overflow-hidden"
      id="projects"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-grid-primary/[0.02] -z-1" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(var(--color-primary),0.005)] to-transparent" />

      {/* Subtle background blur */}
      <div
        className="absolute top-40 right-10 w-96 h-96 rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.02] animate-float"
        style={{ background: "rgba(var(--color-primary), 1)" }}
      />

      {/* Subtle noise texture */}
      <div className="absolute inset-0 noise-overlay opacity-10"></div>

      <div className="max-w-6xl mx-auto relative">
        <div
          className={`flex flex-col items-center text-center mb-20 ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold mb-4 text-[rgba(var(--color-primary),0.9)]">
            Featured Projects
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[rgba(var(--color-primary),0.3)] to-transparent rounded-full mb-6" />
          <p className="mt-4 text-lg text-default-600 max-w-2xl">
            Here are some of my recent projects that showcase my skills and
            experience.
          </p>
        </div>

        {/* Project filters - enhanced */}
        <div
          className={`flex justify-center mb-16 ${
            isVisible ? "animate-slide-up stagger-1" : "opacity-0"
          }`}
        >
          <div className="flex p-1 bg-[rgba(var(--color-primary),0.03)] rounded-full shadow-sm">
            {[
              { id: "all", label: "All Projects", icon: "lucide:grid" },
              { id: "featured", label: "Featured", icon: "lucide:star" },
              { id: "web", label: "Web Apps", icon: "lucide:globe" },
              { id: "mobile", label: "Mobile Apps", icon: "lucide:smartphone" },
            ].map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category.id
                    ? "bg-[rgba(var(--color-primary),0.9)] text-white shadow-sm"
                    : "text-default-600 hover:text-[rgba(var(--color-primary),0.9)]"
                }`}
              >
                <Icon icon={category.icon} className="mr-2" />
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`${
                isVisible
                  ? `animate-slide-up stagger-${index + 1}`
                  : "opacity-0"
              }`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="elegant-card h-full group">
                {/* Image container */}
                <div className="relative overflow-hidden h-56 rounded-lg mb-6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay on hover - enhanced */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(var(--color-dark),0.7)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
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

                  {/* Featured badge - enhanced */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 featured-badge">
                      <Icon
                        icon="lucide:star"
                        className="inline-block mr-1 text-xs"
                      />
                      Featured
                    </div>
                  )}
                </div>

                {/* Content - enhanced */}
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[rgba(var(--color-primary),0.9)] group-hover:text-[rgba(var(--color-primary),1)] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-default-500 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags - enhanced */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons - enhanced */}
                  <div className="flex gap-3 w-full">
                    <Button
                      className="flex-1 bg-[rgba(var(--color-primary),0.9)] text-white hover:bg-[rgba(var(--color-primary),1)] hover-lift"
                      endContent={<Icon icon="lucide:external-link" />}
                    >
                      Live Demo
                    </Button>
                    <Button
                      className="flex-1 bg-transparent border border-[rgba(var(--color-primary),0.2)] text-[rgba(var(--color-primary),0.9)] hover:bg-[rgba(var(--color-primary),0.04)] hover-lift"
                      variant="bordered"
                      endContent={<Icon icon="lucide:github" />}
                    >
                      View Code
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more projects button - enhanced */}
        <div
          className={`flex justify-center mt-16 ${
            isVisible ? "animate-slide-up stagger-4" : "opacity-0"
          }`}
        >
          <Button
            size="lg"
            className="px-8 bg-[rgba(var(--color-primary),0.9)] text-white hover:bg-[rgba(var(--color-primary),1)] button-3d"
            endContent={<Icon icon="lucide:arrow-right" className="text-xl" />}
          >
            View All Projects
          </Button>
        </div>

        {/* Project stats - enhanced */}
        {/* <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 ${
            isVisible ? "animate-slide-up stagger-5" : "opacity-0"
          }`}
        >
          {[
            // {
            //   label: "Projects Completed",
            //   value: "15+",
            //   icon: "lucide:check-circle",
            // },
            // {
            //   label: "Happy Clients",
            //   value: "10+",
            //   icon: "lucide:users",
            // },
            // {
            //   label: "Hours of Work",
            //   value: "500+",
            //   icon: "lucide:clock",
            // },
            // {
            //   label: "Technologies Used",
            //   value: "12+",
            //   icon: "lucide:code",
            // },
          ].map((stat) => (
            <div
              key={stat.label}
              className="frosted-glass p-6 rounded-xl text-center hover-lift transition-all duration-300 border border-[rgba(var(--color-primary),0.08)]"
            >
              <div className="w-12 h-12 rounded-full bg-[rgba(var(--color-primary),0.08)] flex items-center justify-center mx-auto mb-4">
                <Icon
                  icon={stat.icon}
                  className="text-2xl text-[rgba(var(--color-primary),0.9)]"
                />
              </div>
              <div className="text-2xl font-bold text-[rgba(var(--color-primary),0.9)] mb-1">
                {stat.value}
              </div>
              <div className="text-default-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div> */}

        {/* Call to action - enhanced */}
        <div
          className={`mt-24 ${
            isVisible ? "animate-slide-up stagger-6" : "opacity-0"
          }`}
        >
          <div className="frosted-glass rounded-xl p-10 text-center relative overflow-hidden border border-[rgba(var(--color-primary),0.08)]">
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(var(--color-primary),0.02)] to-transparent"></div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[rgba(var(--color-primary),0.3)] to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[rgba(var(--color-primary),0.3)] to-transparent"></div>

            <h3 className="text-2xl font-bold text-[rgba(var(--color-primary),0.9)] mb-4">
              Ready to Start a Project?
            </h3>
            <p className="text-lg text-default-600 mb-8 max-w-2xl mx-auto">
              I'm currently available for freelance work. If you have a project
              that needs some creative touch, I'd love to hear about it.
            </p>
            <a
              href="mailto:joytarafder3@gmail.com?subject=Project%20Inquiry"
              className="inline-block"
            >
              <Button
                size="lg"
                className="px-8 py-6 text-lg bg-[rgba(var(--color-primary),0.9)] text-white hover:bg-[rgba(var(--color-primary),1)] button-3d"
                endContent={<Icon icon="lucide:send" className="text-xl" />}
              >
                Contact Me
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
