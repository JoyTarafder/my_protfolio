import { Button, Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";

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

  const handleDownloadCV = () => {
    try {
      // Update this URL to match your CV file location in the public folder
      const cvUrl = "/files/Joy_Tarafder_CV.pdf";

      // Create a temporary link element
      const link = document.createElement("a");
      link.href = cvUrl;
      link.download = "Joy_Tarafder_CV.pdf"; // The name that will be used when downloading
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Show success notification
      toast.success("CV download started successfully!");
    } catch (error) {
      // Show error notification if something goes wrong
      toast.error("Failed to download CV. Please try again.");
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-32 px-4 relative overflow-hidden"
      id="about"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-grid-primary/[0.02] -z-1" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(var(--color-primary),0.01)] to-transparent" />

      {/* Subtle background blur */}
      <div
        className="absolute top-40 left-10 w-64 sm:w-96 h-64 sm:h-96 rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.04]"
        style={{ background: "rgba(var(--color-primary), 1)" }}
      />
      <div
        className="absolute bottom-40 right-10 w-64 sm:w-96 h-64 sm:h-96 rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.04]"
        style={{ background: "rgba(var(--color-secondary), 1)" }}
      />

      {/* Subtle noise texture */}
      <div className="absolute inset-0 noise-overlay opacity-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 sm:w-40 h-32 sm:h-40 border border-[rgba(var(--color-primary),0.08)] rounded-full animate-subtle-rotate opacity-40"></div>
      <div
        className="absolute bottom-20 left-20 w-48 sm:w-60 h-48 sm:h-60 border border-[rgba(var(--color-primary),0.06)] rounded-full animate-subtle-rotate opacity-30"
        style={{ animationDuration: "30s", animationDirection: "reverse" }}
      ></div>

      {/* Additional decorative elements */}
      <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-[rgba(var(--color-primary),0.5)] animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-[rgba(var(--color-primary),0.5)] animate-pulse-slow stagger-2"></div>
      <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 rounded-full bg-[rgba(var(--color-primary),0.4)] animate-pulse-slow stagger-3"></div>

      <div className="max-w-6xl mx-auto relative">
        <div
          className={`flex flex-col items-center text-center mb-10 sm:mb-16 ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <h2 className="hidden sm:block text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-[rgba(var(--color-primary),0.9)]">
            About Me
          </h2>
          <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-transparent via-[rgba(var(--color-primary),0.4)] to-transparent rounded-full" />
        </div>

        {/* Tab navigation - enhanced */}
        <div
          className={`flex justify-center mb-8 sm:mb-12 overflow-x-auto pb-4 sm:pb-0 ${
            isVisible ? "animate-slide-up stagger-1" : "opacity-0"
          }`}
        >
          <div className="flex p-1.5 bg-[rgba(var(--color-primary),0.05)] rounded-full shadow-lg backdrop-blur-sm border border-[rgba(var(--color-primary),0.1)] hover:border-[rgba(var(--color-primary),0.15)] transition-colors duration-300">
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
                className={`flex items-center px-3 sm:px-6 py-2 sm:py-3.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-[rgba(var(--color-primary),0.85)] to-[rgba(var(--color-primary),0.95)] text-white shadow-xl transform scale-105"
                    : "text-default-600 hover:text-[rgba(var(--color-primary),0.9)] hover:bg-[rgba(var(--color-primary),0.08)]"
                }`}
              >
                <Icon
                  icon={tab.icon}
                  className="mr-1 sm:mr-2 text-base sm:text-lg"
                />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* About tab content - enhanced */}
        {activeTab === "about" && (
          <div className="flex flex-col md:flex-row gap-8 sm:gap-12 items-center bg-gradient-to-br from-[rgba(var(--color-primary),0.03)] to-[rgba(var(--color-secondary),0.02)] p-6 sm:p-10 rounded-3xl backdrop-blur-sm border border-[rgba(var(--color-primary),0.08)] shadow-2xl">
            <div
              className={`relative ${
                isVisible ? "animate-slide-left" : "opacity-0"
              }`}
            >
              {/* Cosmic Avatar Animation - Enhanced with new effects */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 group perspective-1000 mx-auto">
                {/* Quantum background effect */}
                <div className="absolute -inset-8 sm:-inset-12 md:-inset-16 rounded-full animate-nebula">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 via-secondary-500/20 to-accent-500/30 blur-3xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 via-transparent to-accent-500/20 mix-blend-overlay"></div>
                  <div className="absolute inset-0 rounded-full opacity-30 animate-cosmic-wave"></div>
                </div>

                {/* Prism light effect */}
                <div className="absolute -inset-6 sm:-inset-8 md:-inset-12 rounded-full opacity-40 animate-prism-light blur-xl"></div>

                {/* Constellation effect */}
                <div className="absolute -inset-6 sm:-inset-8 md:-inset-10 animate-constellation">
                  {[...Array(12)].map((_, i) => {
                    const angle = (i * Math.PI * 2) / 12;
                    const distance = 70 + Math.random() * 30;
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
                <div className="absolute -inset-3 sm:-inset-4 md:-inset-6 rounded-full opacity-80">
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
                  <div className="absolute -inset-1.5 sm:-inset-2 md:-inset-3 rounded-full animate-cosmic-wave">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 via-secondary-500/20 to-accent-500/30 blur-xl"></div>
                  </div>

                  {/* Holographic effect container */}
                  <div className="absolute -inset-1 sm:-inset-1.5 md:-inset-2 rounded-full premium-glass animate-holographic">
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
              className={`flex-1 text-center md:text-left mt-8 md:mt-0 ${
                isVisible ? "animate-slide-right" : "opacity-0"
              }`}
            >
              <div className="relative inline-block mb-6 sm:mb-8 group perspective-1000">
                {/* Animated background glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 via-secondary-500/10 to-primary-500/20 rounded-xl blur-xl opacity-70 group-hover:opacity-100 animate-gradient-shift transition-opacity duration-700"></div>

                {/* Decorative corner elements with animation */}
                <div className="absolute -left-3 sm:-left-4 -top-3 sm:-top-4 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-l-2 border-[rgba(var(--color-primary),0.6)] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
                <div className="absolute -right-3 sm:-right-4 -bottom-3 sm:-bottom-4 w-6 sm:w-8 h-6 sm:h-8 border-b-2 border-r-2 border-[rgba(var(--color-primary),0.6)] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>

                {/* Floating particles */}
                <div className="absolute -inset-6 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 rounded-full bg-primary-500/60 animate-float-particle"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.2}s`,
                        animationDuration: `${3 + Math.random() * 2}s`,
                      }}
                    ></div>
                  ))}
                </div>

                {/* Main content with 3D hover effect */}
                <div className="relative p-1 backdrop-blur-sm bg-background/30 border border-primary-500/20 rounded-lg shadow-xl group-hover:shadow-primary-500/20 transform group-hover:rotate-y-12 transition-all duration-700">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500 group-hover:from-secondary-500 group-hover:to-primary-500 transition-all duration-700">
                    Joy Tarafder
                  </h3>

                  {/* Animated underline */}
                  <div className="relative h-0.5 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-r from-primary-500/80 via-secondary-500/80 to-primary-500/80 rounded-full transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700"></div>
                  </div>

                  {/* Subtle shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 rounded-lg transform translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000"></div>
                </div>

                {/* Decorative circles with pulse */}
                <div className="absolute -right-2 -bottom-2 w-4 sm:w-6 h-4 sm:h-6 rounded-full border border-[rgba(var(--color-primary),0.4)] opacity-70 group-hover:opacity-100 animate-pulse-slow"></div>
                <div
                  className="absolute -left-2 -top-2 w-3 sm:w-4 h-3 sm:h-4 rounded-full border border-[rgba(var(--color-primary),0.4)] opacity-70 group-hover:opacity-100 animate-pulse-slow"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>

              <p className="text-sm sm:text-base md:text-lg text-default-600 mb-6 sm:mb-8 leading-relaxed">
                A passionate frontend developer with a keen eye for design and a
                love for creating beautiful, intuitive user experiences. I
                specialize in building modern web applications using React,
                TypeScript, and TailwindCSS.
              </p>

              {/* Social links */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-4 mb-6 sm:mb-10">
                {socialLinks.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link group hover:scale-110 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-[rgba(var(--color-primary),0.05)] to-[rgba(var(--color-primary),0.02)] hover:from-[rgba(var(--color-primary),0.08)] hover:to-[rgba(var(--color-primary),0.05)] transition-colors duration-300 border border-[rgba(var(--color-primary),0.08)] hover:border-[rgba(var(--color-primary),0.15)] shadow-sm hover:shadow-md">
                      <Icon
                        icon={link.icon}
                        className="text-base sm:text-lg md:text-xl text-[rgba(var(--color-primary),0.8)] group-hover:text-[rgba(var(--color-primary),1)]"
                      />
                      <span className="text-xs sm:text-sm md:text-base text-default-600 group-hover:text-[rgba(var(--color-primary),0.9)]">
                        {link.label}
                      </span>
                    </div>
                  </a>
                ))}
              </div>

              {/* Call to action */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center md:justify-start">
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-sm sm:text-base md:text-lg h-10 sm:h-12 md:h-14 px-4 sm:px-6 md:px-8 bg-gradient-to-r from-[rgba(var(--color-primary),0.85)] to-[rgba(var(--color-primary),0.95)] text-white hover:opacity-90 button-3d transform hover:scale-105 transition-all duration-300 shadow-xl"
                  endContent={
                    <Icon
                      icon="lucide:download"
                      className="text-lg sm:text-xl"
                    />
                  }
                  onClick={handleDownloadCV}
                >
                  <span className="relative z-10">Download CV</span>
                </Button>
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-sm sm:text-base md:text-lg h-10 sm:h-12 md:h-14 px-4 sm:px-6 md:px-8 border-[rgba(var(--color-primary),0.3)] text-[rgba(var(--color-primary),0.9)] hover:bg-[rgba(var(--color-primary),0.08)] elegant-button transform hover:scale-105 transition-all duration-300 shadow-lg"
                  variant="bordered"
                  endContent={
                    <Icon icon="lucide:mail" className="text-lg sm:text-xl" />
                  }
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <span className="relative z-10">Contact Me</span>
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Experience tab content - enhanced */}
        {activeTab === "experience" && (
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 ${
              isVisible ? "animate-slide-up stagger-2" : "opacity-0"
            }`}
          >
            {experiences.map((exp, index) => (
              <Card
                key={exp.title}
                className={`group hover:scale-[1.03] transition-all duration-500 bg-gradient-to-br from-[rgba(var(--color-primary),0.05)] via-[rgba(var(--color-secondary),0.04)] to-[rgba(var(--color-primary),0.06)] backdrop-blur-sm border border-[rgba(var(--color-primary),0.12)] shadow-2xl hover:shadow-3xl rounded-3xl overflow-hidden ${
                  isVisible
                    ? `animate-slide-up stagger-${index + 1}`
                    : "opacity-0"
                }`}
              >
                {/* Enhanced decorative top bar with shimmer effect */}
                <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-[rgba(var(--color-primary),0.4)] to-transparent relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-shimmer"></div>
                </div>

                <CardBody className="p-4 sm:p-6 md:p-10">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 md:gap-8">
                    <div className="p-3 sm:p-4 md:p-5 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[rgba(var(--color-primary),0.15)] to-[rgba(var(--color-primary),0.08)] border border-[rgba(var(--color-primary),0.18)] shadow-inner transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[rgba(var(--color-primary),0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <Icon
                        icon="lucide:briefcase"
                        className="text-2xl sm:text-3xl md:text-4xl text-[rgba(var(--color-primary),0.9)] group-hover:text-[rgba(var(--color-primary),1)]"
                      />
                    </div>
                    <div className="flex-1 space-y-3 sm:space-y-4 text-center sm:text-left">
                      <h4 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-default-900 dark:text-white group-hover:translate-x-2 transition-transform duration-300">
                        {exp.title}
                      </h4>
                      <p className="text-base sm:text-lg text-default-600 mb-2 sm:mb-3 font-medium tracking-wide">
                        {exp.company}
                      </p>
                      <div className="flex items-center justify-center sm:justify-start mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[rgba(var(--color-primary),0.08)] border border-[rgba(var(--color-primary),0.1)] w-fit mx-auto sm:mx-0 backdrop-blur-sm">
                        <Icon
                          icon="lucide:calendar"
                          className="text-base sm:text-lg mr-2 sm:mr-3 text-[rgba(var(--color-primary),0.8)]"
                        />
                        <p className="text-sm sm:text-base text-default-500 font-medium">
                          {exp.period}
                        </p>
                      </div>
                      <p className="text-base sm:text-lg text-default-600 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>

                  {/* Enhanced decorative elements */}
                  <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-r-2 border-[rgba(var(--color-primary),0.25)] opacity-60 group-hover:opacity-90 transition-opacity"></div>
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 w-6 sm:w-8 h-6 sm:h-8 border-b-2 border-l-2 border-[rgba(var(--color-primary),0.25)] opacity-60 group-hover:opacity-90 transition-opacity"></div>
                  <div className="absolute top-1/4 right-1/4 w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-[rgba(var(--color-primary),0.4)] opacity-40 animate-pulse"></div>
                  <div className="absolute bottom-1/3 left-1/3 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[rgba(var(--color-primary),0.4)] opacity-40 animate-pulse delay-500"></div>
                  <div className="absolute top-1/3 left-1/4 w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[rgba(var(--color-primary),0.4)] opacity-40 animate-pulse delay-1000"></div>
                </CardBody>
              </Card>
            ))}
          </div>
        )}

        {/* Education tab content - enhanced */}
        {activeTab === "education" && (
          <div
            className={`grid grid-cols-1 gap-6 ${
              isVisible ? "animate-slide-up stagger-2" : "opacity-0"
            }`}
          >
            <Card className="elegant-card hover-lift bg-gradient-to-br from-[rgba(var(--color-primary),0.03)] to-[rgba(var(--color-secondary),0.02)] border border-[rgba(var(--color-primary),0.08)] shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden group">
              {/* Top decorative bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[rgba(var(--color-primary),0.7)] via-[rgba(var(--color-secondary),0.5)] to-[rgba(var(--color-primary),0.7)]"></div>

              <CardBody className="p-4 sm:p-6 md:p-10 relative">
                {/* Decorative corner elements */}
                <div className="absolute top-4 left-4 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-l-2 border-[rgba(var(--color-primary),0.2)] opacity-60"></div>
                <div className="absolute bottom-4 right-4 w-6 sm:w-8 h-6 sm:h-8 border-b-2 border-r-2 border-[rgba(var(--color-primary),0.2)] opacity-60"></div>

                {/* Decorative floating elements */}
                <div className="absolute top-1/4 right-1/4 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[rgba(var(--color-primary),0.3)] opacity-40 animate-pulse-slow"></div>
                <div className="absolute bottom-1/3 left-1/3 w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[rgba(var(--color-primary),0.3)] opacity-40 animate-pulse-slow stagger-2"></div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                  <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[rgba(var(--color-primary),0.1)] to-[rgba(var(--color-primary),0.05)] border border-[rgba(var(--color-primary),0.12)] shadow-inner transform group-hover:scale-110 transition-transform duration-300">
                    <Icon
                      icon="lucide:graduation-cap"
                      className="text-2xl sm:text-3xl md:text-4xl text-[rgba(var(--color-primary),0.9)]"
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <div className="relative inline-block mb-2 sm:mb-3">
                      <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-default-900 group-hover:translate-x-1 transition-transform duration-300">
                        Bachelor of Science in Computer Science & Engineering
                      </h4>
                      <div className="w-1/2 h-0.5 mt-1 bg-gradient-to-r from-[rgba(var(--color-primary),0.4)] to-transparent rounded-full transform origin-left group-hover:scale-x-110 transition-transform duration-300"></div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2 sm:mb-3">
                      <div className="flex items-center px-2 sm:px-3 py-1 rounded-full bg-[rgba(var(--color-primary),0.06)] border border-[rgba(var(--color-primary),0.08)]">
                        <Icon
                          icon="lucide:school"
                          className="text-sm sm:text-base mr-1 sm:mr-1.5 text-default-600"
                        />
                        <p className="text-xs sm:text-sm md:text-base font-medium text-default-700">
                          Independent University, Bangladesh
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-3 sm:mb-4">
                      <div className="flex items-center px-2 sm:px-3 py-1 rounded-full bg-[rgba(var(--color-primary),0.06)] border border-[rgba(var(--color-primary),0.08)]">
                        <Icon
                          icon="lucide:calendar"
                          className="text-xs sm:text-sm mr-1 sm:mr-1.5 text-default-600"
                        />
                        <p className="text-xs sm:text-sm text-default-700">
                          2020 - 2025
                        </p>
                      </div>
                      <div className="px-2 sm:px-3 py-1 rounded-full bg-[rgba(var(--color-primary),0.06)] border border-[rgba(var(--color-primary),0.08)]">
                        <p className="text-xs sm:text-sm font-medium text-default-700 flex items-center gap-1">
                          <Icon
                            icon="lucide:check-circle"
                            className="w-3 sm:w-3.5 h-3 sm:h-3.5"
                          />
                          Completed
                        </p>
                      </div>
                    </div>

                    <div className="relative">
                      <p className="text-sm sm:text-base text-default-600 leading-relaxed pl-3 border-l-2 border-[rgba(var(--color-primary),0.2)]">
                        Studying computer science with a focus on web
                        development and software engineering. Coursework
                        includes algorithms, data structures, web technologies,
                        and software design principles.
                      </p>
                    </div>

                    {/* Skills/Courses tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {[
                        "Web Dev",
                        "Algorithms",
                        "Data Structures",
                        "Software Engineering",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 text-xs rounded-md bg-[rgba(var(--color-primary),0.04)] border border-[rgba(var(--color-primary),0.06)] text-white"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
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
