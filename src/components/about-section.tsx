import { Button, Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";

const socialLinks = [
  {
    icon: "lucide:github",
    url: "https://github.com/JoyTarafder",
    label: "GitHub",
  },
  {
    icon: "lucide:linkedin",
    url: "https://www.linkedin.com/in/joy-tarafder",
    label: "LinkedIn",
  },
  { icon: "lucide:twitter", url: "#", label: "Twitter" },
  { icon: "lucide:instagram", url: "#", label: "Instagram" },
];

// const skills = [
//   // { name: "React", level: 90, icon: "logos:react" },
//   // { name: "JavaScript", level: 85, icon: "logos:javascript" },
//   // { name: "TailwindCSS", level: 80, icon: "logos:tailwindcss-icon" },
//   // { name: "Node.js", level: 75, icon: "logos:nodejs-icon" },
// ];

const experiences = [
  {
    title: "Frontend Developer Intern",
    company: "Cloud Coder Ltd.",
    period: "Feb 2025 - Present",
    description:
      "Developing responsive web applications using React and TailwindCSS.",
  },
  {
    title: "Managing Director",
    company: "Degital Flexiload",
    period: "Jan 2023 - Present",
    description:
      "Managing the company's operations and overseeing the development of digital products.",
  },
];

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("about"); // "about", "experience", "education"
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

  return (
    <section
      ref={sectionRef}
      className="py-32 px-4 relative overflow-hidden"
      id="about"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-grid-primary/[0.02] -z-1" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(var(--color-primary),0.005)] to-transparent" />

      {/* Subtle background blur */}
      <div
        className="absolute top-40 left-10 w-96 h-96 rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.02]"
        style={{ background: "rgba(var(--color-primary), 1)" }}
      />

      {/* Subtle noise texture */}
      <div className="absolute inset-0 noise-overlay opacity-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-40 h-40 border border-[rgba(var(--color-primary),0.04)] rounded-full animate-subtle-rotate opacity-20"></div>
      <div
        className="absolute bottom-20 left-20 w-60 h-60 border border-[rgba(var(--color-primary),0.03)] rounded-full animate-subtle-rotate opacity-15"
        style={{ animationDuration: "30s", animationDirection: "reverse" }}
      ></div>

      <div className="max-w-6xl mx-auto relative">
        <div
          className={`flex flex-col items-center text-center mb-16 ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold mb-4 text-[rgba(var(--color-primary),0.9)]">
            About Me
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[rgba(var(--color-primary),0.3)] to-transparent rounded-full" />
        </div>

        {/* Tab navigation - enhanced */}
        <div
          className={`flex justify-center mb-12 ${
            isVisible ? "animate-slide-up stagger-1" : "opacity-0"
          }`}
        >
          <div className="flex p-1 bg-[rgba(var(--color-primary),0.03)] rounded-full shadow-sm">
            {[
              { id: "about", label: "About", icon: "lucide:user" },
              {
                id: "experience",
                label: "Experience",
                icon: "lucide:briefcase",
              },
              {
                id: "education",
                label: "Education",
                icon: "lucide:graduation-cap",
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-[rgba(var(--color-primary),0.9)] text-white shadow-sm"
                    : "text-default-600 hover:text-[rgba(var(--color-primary),0.9)]"
                }`}
              >
                <Icon icon={tab.icon} className="mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* About tab content - enhanced */}
        {activeTab === "about" && (
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div
              className={`relative ${
                isVisible ? "animate-slide-left" : "opacity-0"
              }`}
            >
              {/* Ultimate Premium Avatar Animation */}
              <div className="relative w-72 h-72 group perspective-1000">
                {/* Magnetic field background */}
                <div className="absolute -inset-12 rounded-full animate-magnetic-field">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-accent-500/20 blur-3xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 via-transparent to-accent-500/10 mix-blend-overlay"></div>
                </div>

                {/* Energy field */}
                <div className="absolute -inset-8 rounded-full opacity-70">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={`energy-ring-${i}`}
                      className="absolute inset-0 rounded-full border-2 border-primary-500/20 animate-portal-spin"
                      style={{
                        animationDelay: `${i * -4}s`,
                        transform: `scale(${1 + i * 0.1})`,
                      }}
                    ></div>
                  ))}
                </div>

                {/* Floating particles */}
                {[...Array(24)].map((_, i) => (
                  <div
                    key={`particle-${i}`}
                    className="absolute animate-energy-flow"
                    style={{
                      top: `${Math.random() * 140 - 20}%`,
                      left: `${Math.random() * 140 - 20}%`,
                      width: `${Math.random() * 3 + 1}px`,
                      height: `${Math.random() * 3 + 1}px`,
                      background: `rgba(var(--color-${
                        ["primary", "secondary", "accent"][
                          Math.floor(Math.random() * 3)
                        ]
                      }, ${Math.random() * 0.4 + 0.3})`,
                      borderRadius: "50%",
                      animationDelay: `${i * -0.2}s`,
                      animationDuration: `${Math.random() * 3 + 4}s`,
                    }}
                  />
                ))}

                {/* Premium container */}
                <div className="relative w-full h-full rounded-full animate-floating-3d group-hover:pause">
                  {/* Holographic effect container */}
                  <div className="absolute -inset-2 rounded-full premium-glass animate-holographic">
                    <div className="absolute inset-[2px] rounded-full bg-background/40"></div>
                  </div>

                  {/* Main image container */}
                  <div className="relative w-full h-full rounded-full overflow-hidden premium-border group-hover:scale-105 transition-transform duration-700">
                    {/* Dynamic light effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/0 via-white/10 to-secondary-500/0 mix-blend-overlay"></div>

                    <img
                      src="https://i.ibb.co.com/1Vm2pHB/Joy-Tarafder.jpg"
                      alt="Joy Tarafder"
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />

                    {/* Premium hover effects */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                      {/* Shine sweep */}
                      <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1500 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

                      {/* Radial highlight */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                      {/* Edge glow */}
                      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 premium-shadow"></div>
                    </div>
                  </div>

                  {/* Interactive particle system */}
                  <div className="absolute inset-0">
                    {[...Array(12)].map((_, i) => {
                      const angle = (i * Math.PI * 2) / 12;
                      return (
                        <div
                          key={`orbital-particle-${i}`}
                          className="absolute w-2 h-2"
                          style={{
                            top: `${50 + 45 * Math.cos(angle)}%`,
                            left: `${50 + 45 * Math.sin(angle)}%`,
                            transform: "translate(-50%, -50%)",
                          }}
                        >
                          {/* Particle core */}
                          <div
                            className="w-full h-full rounded-full bg-gradient-to-r from-primary-500/60 to-secondary-500/60 blur-[2px] animate-pulse-slow"
                            style={{ animationDelay: `${i * 0.2}s` }}
                          ></div>

                          {/* Particle glow */}
                          <div
                            className="absolute inset-0 rounded-full bg-white/40 animate-ping"
                            style={{
                              animationDuration: "3s",
                              animationDelay: `${i * 0.2}s`,
                            }}
                          ></div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Premium hover rings */}
                <div className="absolute -inset-4 rounded-full border-2 border-primary-500/0 transition-all duration-700 group-hover:border-primary-500/30 group-hover:blur-sm"></div>
                <div className="absolute -inset-8 rounded-full border-2 border-secondary-500/0 transition-all duration-700 group-hover:border-secondary-500/20 group-hover:blur-sm"></div>
                <div className="absolute -inset-12 rounded-full border-2 border-accent-500/0 transition-all duration-700 group-hover:border-accent-500/10 group-hover:blur-sm"></div>
              </div>

              {/* Stats cards - enhanced */}
              <div className="absolute -right-10 top-1/4 frosted-glass px-4 py-3 rounded-lg shadow-sm animate-float stagger-2 border border-[rgba(var(--color-primary),0.08)]">
                <div className="text-xs font-semibold text-default-600">
                  Projects
                </div>
                <div className="text-xl font-bold text-[rgba(var(--color-primary),0.9)]">
                  15+
                </div>
              </div>

              <div className="absolute -left-10 bottom-1/4 frosted-glass px-4 py-3 rounded-lg shadow-sm animate-float stagger-3 border border-[rgba(var(--color-primary),0.08)]">
                <div className="text-xs font-semibold text-default-600">
                  Experience
                </div>
                <div className="text-xl font-bold text-[rgba(var(--color-primary),0.9)]">
                  1+ yr
                </div>
              </div>
            </div>

            <Card
              className={`flex-1 frosted-glass border border-[rgba(var(--color-primary),0.08)] shadow-sm ${
                isVisible ? "animate-slide-right" : "opacity-0"
              }`}
            >
              <CardBody className="gap-6">
                <p className="text-xl leading-relaxed text-default-600">
                  I'm a{" "}
                  <span className="text-[rgba(var(--color-primary),0.9)] font-semibold">
                    Computer Science Engineering
                  </span>{" "}
                  (CSE) student (undergraduate last semester) with a proven
                  track record of developing web-based projects using HTML, CSS,
                  and JavaScript. Possessing one year of hands-on experience in
                  web development, I am now seeking a challenging internship
                  opportunity to enhance my skills, gain practical industry
                  experience, and contribute effectively to innovative projects.
                </p>

                <p className="text-xl leading-relaxed text-default-600">
                  I'm eager to leverage my{" "}
                  <span className="text-[rgba(var(--color-primary),0.9)] font-semibold">
                    technical expertise
                  </span>{" "}
                  and passion for coding to make valuable contributions to a
                  dynamic team while continuously learning and growing in web
                  development.
                </p>

                {/* Skills with progress bars and icons - enhanced */}
                {/* <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-6 text-[rgba(var(--color-primary),0.9)]">
                    My Skills
                  </h3>
                  <div className="space-y-6">
                    {skills.map((skill, index) => (
                      <div
                        key={skill.name}
                        className={`${
                          isVisible
                            ? `animate-slide-right stagger-${index + 1}`
                            : "opacity-0"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-[rgba(var(--color-primary),0.08)] flex items-center justify-center mr-3">
                              <Icon icon={skill.icon} className="text-xl" />
                            </div>
                            <span className="font-medium">{skill.name}</span>
                          </div>
                          <span className="text-sm font-semibold bg-[rgba(var(--color-primary),0.04)] px-3 py-1 rounded-full">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full elegant-progress rounded-full h-2.5 overflow-hidden">
                          <div
                            className="h-2.5 rounded-full transition-all duration-1000 ease-out elegant-progress-bar"
                            style={{
                              width: isVisible ? `${skill.level}%` : "0%",
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div> */}

                <div className="flex flex-wrap gap-3 mt-8">
                  {[
                    "React",
                    "JavaScript",
                    "TailwindCSS",
                    "Node.js",
                    "HTML5",
                    "CSS3",
                    "Git",
                  ].map((tech, index) => (
                    <span
                      key={tech}
                      className={`px-4 py-2 rounded-full bg-[rgba(var(--color-primary),0.04)] text-default-600 text-sm font-medium hover-scale ${
                        isVisible
                          ? `animate-fade-in stagger-${index + 1}`
                          : "opacity-0"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-6">
                  {socialLinks.map((link, index) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        isVisible
                          ? `animate-fade-in stagger-${index + 2}`
                          : "opacity-0"
                      }
                    >
                      <Button
                        isIconOnly
                        variant="light"
                        aria-label={link.label}
                        className="text-default-600 hover:text-[rgba(var(--color-primary),0.9)] hover-scale"
                      >
                        <Icon icon={link.icon} className="text-xl" />
                      </Button>
                    </a>
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>
        )}

        {/* Experience tab content - enhanced */}
        {activeTab === "experience" && (
          <div
            className={`max-w-3xl mx-auto ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            <div className="relative">
              {/* Timeline line - enhanced */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[rgba(var(--color-primary),0.1)] via-[rgba(var(--color-primary),0.2)] to-[rgba(var(--color-primary),0.1)] rounded-full"></div>

              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative pl-16 pb-12 ${
                    isVisible
                      ? `animate-slide-up stagger-${index + 1}`
                      : "opacity-0"
                  }`}
                >
                  {/* Timeline dot - enhanced */}
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-[rgba(var(--color-primary),0.9)] z-10 flex items-center justify-center animate-pulse-slow">
                    <div className="w-4 h-4 rounded-full bg-white"></div>
                  </div>

                  <div className="frosted-glass p-8 rounded-xl shadow-sm border border-[rgba(var(--color-primary),0.08)] hover-lift">
                    <h3 className="text-xl font-bold text-[rgba(var(--color-primary),0.9)] mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center text-default-600 mb-3">
                      <div className="w-6 h-6 rounded-full bg-[rgba(var(--color-primary),0.08)] flex items-center justify-center mr-2">
                        <Icon
                          icon="lucide:building"
                          className="text-[rgba(var(--color-primary),0.9)] text-sm"
                        />
                      </div>
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center text-sm text-default-500 mb-4">
                      <div className="w-5 h-5 rounded-full bg-[rgba(var(--color-primary),0.08)] flex items-center justify-center mr-2">
                        <Icon
                          icon="lucide:calendar"
                          className="text-[rgba(var(--color-primary),0.9)] text-xs"
                        />
                      </div>
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-default-600">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education tab content - enhanced */}
        {activeTab === "education" && (
          <div
            className={`max-w-3xl mx-auto ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            <div className="frosted-glass p-8 rounded-xl animate-slide-up shadow-sm border border-[rgba(var(--color-primary),0.08)] hover-lift">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[rgba(var(--color-primary),0.9)] flex items-center justify-center mr-6 animate-pulse-slow">
                  <Icon
                    icon="lucide:graduation-cap"
                    className="text-3xl text-white"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[rgba(var(--color-primary),0.9)] mb-1">
                    Bachelor of Science in Computer Science Engineering
                  </h3>
                  <p className="text-default-600">
                    Independent University, Bangladesh
                  </p>
                </div>
              </div>
              <div className="flex items-center text-default-500 mb-6 ml-2">
                <div className="w-5 h-5 rounded-full bg-[rgba(var(--color-primary),0.08)] flex items-center justify-center mr-2">
                  <Icon
                    icon="lucide:calendar"
                    className="text-[rgba(var(--color-primary),0.9)] text-xs"
                  />
                </div>
                <span>2020 - 2025</span>
              </div>
              <p className="text-default-600 mb-6 ml-2">
                Completing my undergraduate degree with a focus on web
                development and software engineering.
              </p>

              {/* Elegant divider */}
              <div className="elegant-divider my-8"></div>

              <div className="flex flex-wrap gap-3 ml-2">
                <span className="px-4 py-2 rounded-full bg-[rgba(var(--color-primary),0.04)] text-default-600 text-sm font-medium hover-scale">
                  Data Structures
                </span>
                <span className="px-4 py-2 rounded-full bg-[rgba(var(--color-primary),0.04)] text-default-600 text-sm font-medium hover-scale">
                  Algorithms
                </span>
                <span className="px-4 py-2 rounded-full bg-[rgba(var(--color-primary),0.04)] text-default-600 text-sm font-medium hover-scale">
                  Web Development
                </span>
                <span className="px-4 py-2 rounded-full bg-[rgba(var(--color-primary),0.04)] text-default-600 text-sm font-medium hover-scale">
                  Software Engineering
                </span>
                <span className="px-4 py-2 rounded-full bg-[rgba(var(--color-primary),0.04)] text-default-600 text-sm font-medium hover-scale">
                  Research Methodology
                </span>
              </div>

              {/* Academic achievements - enhanced */}
              {/* <div className="mt-10">
                <h4 className="text-lg font-semibold text-[rgba(var(--color-primary),0.9)] mb-4">
                  Academic Achievements
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[rgba(var(--color-primary),0.9)] flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <Icon icon="lucide:award" className="text-white" />
                    </div>
                    <div>
                      <h5 className="font-medium text-default-700">
                        Dean's List
                      </h5>
                      <p className="text-default-600">
                        Maintained a GPA of 3.8+ throughout the program
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[rgba(var(--color-primary),0.9)] flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <Icon icon="lucide:trophy" className="text-white" />
                    </div>
                    <div>
                      <h5 className="font-medium text-default-700">
                        Hackathon Winner
                      </h5>
                      <p className="text-default-600">
                        First place in the university's annual coding
                        competition
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
