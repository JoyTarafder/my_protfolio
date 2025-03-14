import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Calculate the movement of the parallax elements based on mouse position
  const calculateMovement = (factor: number) => {
    if (!containerRef.current) return { x: 0, y: 0 };

    const width = containerRef.current.offsetWidth;
    const height = containerRef.current.offsetHeight;
    const x = (mousePosition.x / width - 0.5) * factor;
    const y = (mousePosition.y / height - 0.5) * factor;
    return { x, y };
  };

  const movement1 = calculateMovement(15);
  const movement2 = calculateMovement(10);
  const movement3 = calculateMovement(20);

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

  const handleViewWork = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative hidden md:flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      id="home"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(var(--color-primary),0.01)] via-transparent to-[rgba(var(--color-secondary),0.01)]" />
      <div
        className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_center,_var(--dots)_1px,_transparent_1px)] bg-[length:24px_24px]"
        style={{ "--dots": "rgba(0,0,0,0.4)" } as any}
      />

      {/* Subtle noise texture */}
      <div className="absolute inset-0 noise-overlay opacity-10"></div>

      {/* Animated background shapes with parallax effect - refined */}
      <div
        className="absolute w-64 sm:w-96 h-64 sm:h-96 rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.02] animate-float"
        style={{
          top: `calc(20% + ${movement1.y}px)`,
          left: `calc(20% + ${movement1.x}px)`,
          background: `rgba(var(--color-primary), 1)`,
        }}
      />
      <div
        className="absolute w-64 sm:w-96 h-64 sm:h-96 rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.02] animate-float stagger-3"
        style={{
          bottom: `calc(20% + ${movement2.y}px)`,
          right: `calc(20% + ${movement2.x}px)`,
          background: `rgba(var(--color-secondary), 1)`,
        }}
      />

      {/* New elegant geometric shapes */}
      <div
        className="absolute w-64 h-64 border border-[rgba(var(--color-primary),0.06)] rounded-full animate-subtle-rotate opacity-30"
        style={{
          top: `calc(30% + ${movement3.y}px)`,
          right: `calc(25% + ${movement3.x}px)`,
        }}
      />
      <div
        className="absolute w-40 h-40 border border-[rgba(var(--color-primary),0.04)] rounded-full animate-subtle-rotate opacity-20"
        style={{
          bottom: `calc(25% + ${movement1.y}px)`,
          left: `calc(20% + ${movement1.x}px)`,
          animationDirection: "reverse",
          animationDuration: "25s",
        }}
      />
      <div
        className="absolute w-20 h-20 border border-[rgba(var(--color-primary),0.08)] rounded-full animate-float opacity-30"
        style={{
          top: `calc(15% + ${movement2.y}px)`,
          left: `calc(30% + ${movement2.x}px)`,
        }}
      />

      {/* Content */}
      <div
        className={`relative z-10 max-w-4xl mx-auto ${
          isVisible ? "animate-elegant-reveal" : "opacity-0"
        }`}
      >
        <div className="mb-6 sm:mb-8 inline-block animate-slide-up stagger-1">
          <span className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[rgba(var(--color-primary),0.06)] text-[rgba(var(--color-primary),0.9)] text-sm font-medium hover-scale">
            <Icon icon="lucide:sparkles" className="inline-block mr-2" />
            Available for Work
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6 text-[rgba(var(--color-primary),0.9)] animate-slide-up stagger-2">
          Hi, This is <span className="gradient-text">Joy Tarafder</span>
        </h1>

        <div className="relative mb-8 sm:mb-12 animate-slide-up stagger-3">
          <p className="text-lg sm:text-xl md:text-2xl text-default-600 leading-relaxed max-w-2xl mx-auto px-4">
            A passionate frontend developer crafting
            <span className="text-[rgba(var(--color-primary),0.9)] font-semibold mx-1">
              beautiful
            </span>
            and
            <span className="text-[rgba(var(--color-primary),0.9)] font-semibold mx-1">
              intuitive
            </span>
            digital experiences
          </p>

          {/* Animated underline - enhanced */}
          <div className="w-16 sm:w-24 h-0.5 bg-gradient-to-r from-transparent via-[rgba(var(--color-primary),0.3)] to-transparent rounded-full mx-auto mt-4 sm:mt-6"></div>
        </div>

        {/* Animated tech stack marquee - enhanced */}
        <div className="w-full overflow-hidden mb-8 sm:mb-12 animate-slide-up stagger-3">
          <div className="flex animate-marquee">
            {[
              "React",
              "JavaScript",
              "TypeScript",
              "TailwindCSS",
              "Node.js",
              "Next.js",
              "HTML5",
              "CSS3",
              "Git",
              "Figma",
              "UI/UX",
              "Responsive Design",
              "React",
              "JavaScript",
              "TypeScript",
              "TailwindCSS",
              "Node.js",
              "Next.js",
            ].map((tech, index) => (
              <span
                key={`${tech}-${index}`}
                className="mx-2 sm:mx-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[rgba(var(--color-primary),0.04)] text-default-600 text-xs sm:text-sm font-medium whitespace-nowrap hover-scale"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-slide-up stagger-4 px-4">
          <Button
            size="lg"
            className="w-full sm:w-auto text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 bg-[rgba(var(--color-primary),0.9)] text-white hover:bg-[rgba(var(--color-primary),1)] button-3d"
            endContent={<Icon icon="lucide:arrow-right" className="text-xl" />}
            onClick={handleViewWork}
          >
            <span className="relative z-10">View My Work</span>
          </Button>
          <Button
            variant="bordered"
            size="lg"
            className="w-full sm:w-auto text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 border-[rgba(var(--color-primary),0.2)] text-[rgba(var(--color-primary),0.9)] hover:bg-[rgba(var(--color-primary),0.04)] elegant-button"
            endContent={<Icon icon="lucide:download" className="text-xl" />}
            onClick={handleDownloadCV}
          >
            Download CV
          </Button>
        </div>

        {/* Social media icons - enhanced */}
        <div className="mt-12 sm:mt-16 flex justify-center gap-4 sm:gap-6 animate-slide-up stagger-5">
          {[
            { icon: "lucide:github", url: "https://github.com/JoyTarafder" },
            {
              icon: "lucide:linkedin",
              url: "https://www.linkedin.com/in/joy-tarafder",
            },
            { icon: "lucide:twitter", url: "#" },
            { icon: "lucide:instagram", url: "#" },
          ].map((social, index) => (
            <a
              key={social.icon}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-default-500 hover:text-[rgba(var(--color-primary),0.9)] transition-colors duration-300 hover-scale stagger-${
                index + 1
              } elegant-tooltip`}
              data-tooltip={
                social.icon.split(":")[1].charAt(0).toUpperCase() +
                social.icon.split(":")[1].slice(1)
              }
            >
              <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-[rgba(var(--color-primary),0.04)] flex items-center justify-center hover:bg-[rgba(var(--color-primary),0.08)] transition-colors duration-300">
                <Icon icon={social.icon} className="text-lg sm:text-xl" />
              </div>
            </a>
          ))}
        </div>

        {/* Scroll indicator - enhanced */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="w-6 h-10 rounded-full border-2 border-[rgba(var(--color-primary),0.2)] flex items-start justify-center p-1">
            <div className="w-1.5 h-2.5 rounded-full bg-[rgba(var(--color-primary),0.6)]"></div>
          </div>
        </div>
      </div>

      {/* Decorative elements - enhanced */}
      <div
        className="absolute top-10 left-10 w-20 h-20 rounded-full border border-[rgba(var(--color-primary),0.08)] animate-pulse-slow"
        style={{
          transform: `translate(${movement1.x * 0.5}px, ${
            movement1.y * 0.5
          }px)`,
        }}
      />
      <div
        className="absolute bottom-10 right-10 w-16 h-16 rounded-full border border-[rgba(var(--color-primary),0.08)] animate-float stagger-2"
        style={{
          transform: `translate(${movement2.x * 0.5}px, ${
            movement2.y * 0.5
          }px)`,
        }}
      />

      {/* New elegant decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-[rgba(var(--color-primary),0.3)] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-[rgba(var(--color-primary),0.3)] animate-pulse-slow stagger-3"></div>
      <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-[rgba(var(--color-primary),0.3)] animate-pulse-slow stagger-2"></div>
    </div>
  );
}
