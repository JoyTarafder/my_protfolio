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
      className="py-16 sm:py-32 px-4 relative overflow-hidden"
      id="about"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-grid-primary/[0.02] -z-1" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(var(--color-primary),0.005)] to-transparent" />

      {/* Subtle background blur */}
      <div
        className="absolute top-40 left-10 w-64 sm:w-96 h-64 sm:h-96 rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.02]"
        style={{ background: "rgba(var(--color-primary), 1)" }}
      />

      {/* Subtle noise texture */}
      <div className="absolute inset-0 noise-overlay opacity-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 sm:w-40 h-32 sm:h-40 border border-[rgba(var(--color-primary),0.04)] rounded-full animate-subtle-rotate opacity-20"></div>
      <div
        className="absolute bottom-20 left-20 w-48 sm:w-60 h-48 sm:h-60 border border-[rgba(var(--color-primary),0.03)] rounded-full animate-subtle-rotate opacity-15"
        style={{ animationDuration: "30s", animationDirection: "reverse" }}
      ></div>

      <div className="max-w-6xl mx-auto relative">
        <div
          className={`flex flex-col items-center text-center mb-10 sm:mb-16 ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <h2 className="hidden sm:block text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-[rgba(var(--color-primary),0.9)]">
            About Me
          </h2>
          <div className="hidden sm:block w-16 sm:w-20 h-0.5 bg-gradient-to-r from-transparent via-[rgba(var(--color-primary),0.3)] to-transparent rounded-full" />
        </div>

        {/* Tab navigation - enhanced */}
        <div
          className={`flex justify-center mb-8 sm:mb-12 overflow-x-auto pb-4 sm:pb-0 ${
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
                className={`flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-[rgba(var(--color-primary),0.9)] text-white shadow-sm"
                    : "text-default-600 hover:text-[rgba(var(--color-primary),0.9)]"
                }`}
              >
                <Icon icon={tab.icon} className="mr-2" />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* About tab content - enhanced */}
        {activeTab === "about" && (
          <div className="flex flex-col md:flex-row gap-8 sm:gap-12 items-center">
            <div
              className={`relative ${
                isVisible ? "animate-slide-left" : "opacity-0"
              }`}
            >
              {/* Cosmic Avatar Animation - Enhanced with new effects */}
              <div className="relative w-64 sm:w-80 h-64 sm:h-80 group perspective-1000">
                {/* Quantum background effect */}
                <div className="absolute -inset-12 sm:-inset-16 rounded-full animate-nebula">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 via-secondary-500/20 to-accent-500/30 blur-3xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 via-transparent to-accent-500/20 mix-blend-overlay"></div>
                  <div className="absolute inset-0 rounded-full opacity-30 animate-cosmic-wave"></div>
                </div>

                {/* Prism light effect */}
                <div className="absolute -inset-8 sm:-inset-12 rounded-full opacity-40 animate-prism-light blur-xl"></div>

                {/* Constellation effect */}
                <div className="absolute -inset-8 sm:-inset-10 animate-constellation">
                  {[...Array(12)].map((_, i) => {
                    const angle = (i * Math.PI * 2) / 12;
                    const distance = 90 + Math.random() * 30;
                    return (
                      <div
                        key={`star-${i}`}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                          top: `calc(50% + ${Math.sin(angle) * distance}px)`,
                          left: `calc(50% + ${Math.cos(angle) * distance}px)`,
                          opacity: Math.random() * 0.5 + 0.3,
                          boxShadow: "0 0 3px 1px rgba(255, 255, 255, 0.3)",
                        }}
                      />
                    );
                  })}
                </div>

                {/* Stardust particles */}
                {[...Array(30)].map((_, i) => (
                  <div
                    key={`stardust-${i}`}
                    className="absolute animate-stardust"
                    style={{
                      top: `${Math.random() * 160 - 30}%`,
                      left: `${Math.random() * 160 - 30}%`,
                      width: `${Math.random() * 2 + 1}px`,
                      height: `${Math.random() * 2 + 1}px`,
                      background: `rgba(var(--color-${
                        ["primary", "secondary", "accent"][
                          Math.floor(Math.random() * 3)
                        ]
                      }, ${Math.random() * 0.6 + 0.4})`,
                      borderRadius: "50%",
                      animationDelay: `${i * -0.15}s`,
                      animationDuration: `${Math.random() * 3 + 3}s`,
                      boxShadow: "0 0 3px rgba(255, 255, 255, 0.3)",
                    }}
                  />
                ))}

                {/* Rotating quantum rings */}
                <div className="absolute -inset-4 sm:-inset-6 rounded-full opacity-80">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={`quantum-ring-${i}`}
                      className="absolute inset-0 rounded-full border-2 border-primary-500/30 animate-portal-spin"
                      style={{
                        animationDelay: `${i * -3}s`,
                        transform: `scale(${1 + i * 0.1}) rotate(${i * 30}deg)`,
                        borderImage:
                          "linear-gradient(45deg, rgba(var(--color-primary), 0.6), rgba(var(--color-secondary), 0.6)) 1",
                        filter: `hue-rotate(${i * 30}deg)`,
                      }}
                    ></div>
                  ))}
                </div>

                {/* Premium glass container */}
                <div className="relative w-full h-full rounded-full animate-floating-3d group-hover:pause">
                  {/* Cosmic wave effect */}
                  <div className="absolute -inset-2 sm:-inset-3 rounded-full animate-cosmic-wave">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 via-secondary-500/20 to-accent-500/30 blur-xl"></div>
                  </div>

                  {/* Holographic effect container */}
                  <div className="absolute -inset-1.5 sm:-inset-2 rounded-full premium-glass animate-holographic">
                    <div className="absolute inset-[2px] rounded-full bg-background/40"></div>
                  </div>

                  {/* Main image container */}
                  <div className="relative w-full h-full rounded-full overflow-hidden premium-border group-hover:scale-105 transition-transform duration-700">
                    {/* Dynamic light effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 via-white/20 to-secondary-500/10 mix-blend-overlay"></div>

                    <img
                      src="https://i.ibb.co.com/1Vm2pHB/Joy-Tarafder.jpg"
                      alt="Joy Tarafder"
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />

                    {/* Premium hover effects */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                      {/* Shine sweep */}
                      <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1500 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

                      {/* Radial highlight */}
                      <div className="absolute inset-0 bg-radial-highlight opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About content */}
            <div
              className={`flex-1 text-center md:text-left ${
                isVisible ? "animate-slide-right" : "opacity-0"
              }`}
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-[rgba(var(--color-primary),0.9)]">
                Hi, I'm Joy Tarafder
              </h3>
              <p className="text-base sm:text-lg text-default-600 mb-6">
                A passionate frontend developer with a keen eye for design and a
                love for creating beautiful, intuitive user experiences. I
                specialize in building modern web applications using React,
                TypeScript, and TailwindCSS.
              </p>

              {/* Social links */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <Icon icon={link.icon} className="text-lg sm:text-xl" />
                    <span className="text-sm sm:text-base">{link.label}</span>
                  </a>
                ))}
              </div>

              {/* Call to action */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 bg-[rgba(var(--color-primary),0.9)] text-white hover:bg-[rgba(var(--color-primary),1)] button-3d"
                  endContent={
                    <Icon icon="lucide:download" className="text-xl" />
                  }
                  onClick={() => {
                    // Handle CV download
                  }}
                >
                  Download CV
                </Button>
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 border-[rgba(var(--color-primary),0.2)] text-[rgba(var(--color-primary),0.9)] hover:bg-[rgba(var(--color-primary),0.04)] elegant-button"
                  variant="bordered"
                  endContent={<Icon icon="lucide:mail" className="text-xl" />}
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Experience tab content - enhanced */}
        {activeTab === "experience" && (
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${
              isVisible ? "animate-slide-up stagger-2" : "opacity-0"
            }`}
          >
            {experiences.map((exp, index) => (
              <Card
                key={exp.title}
                className={`elegant-card hover-lift ${
                  isVisible
                    ? `animate-slide-up stagger-${index + 1}`
                    : "opacity-0"
                }`}
              >
                <CardBody className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-[rgba(var(--color-primary),0.04)]">
                      <Icon
                        icon="lucide:briefcase"
                        className="text-2xl text-[rgba(var(--color-primary),0.9)]"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-semibold mb-1 text-[rgba(var(--color-primary),0.9)]">
                        {exp.title}
                      </h4>
                      <p className="text-sm sm:text-base text-default-600 mb-2">
                        {exp.company}
                      </p>
                      <p className="text-xs sm:text-sm text-default-500 mb-3">
                        {exp.period}
                      </p>
                      <p className="text-sm sm:text-base text-default-600">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        )}

        {/* Education tab content - enhanced */}
        {activeTab === "education" && (
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${
              isVisible ? "animate-slide-up stagger-2" : "opacity-0"
            }`}
          >
            <Card className="elegant-card hover-lift">
              <CardBody className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-[rgba(var(--color-primary),0.04)]">
                    <Icon
                      icon="lucide:graduation-cap"
                      className="text-2xl text-[rgba(var(--color-primary),0.9)]"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold mb-1 text-[rgba(var(--color-primary),0.9)]">
                      Bachelor of Science in Computer Science
                    </h4>
                    <p className="text-sm sm:text-base text-default-600 mb-2">
                      National University
                    </p>
                    <p className="text-xs sm:text-sm text-default-500 mb-3">
                      2021 - Present
                    </p>
                    <p className="text-sm sm:text-base text-default-600">
                      Studying computer science with a focus on web development
                      and software engineering.
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}
