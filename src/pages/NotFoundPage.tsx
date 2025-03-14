import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function NotFoundPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Set visible immediately
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

  return (
    <div className="min-h-screen py-32 px-4 relative overflow-hidden dark:bg-[#0f172a] transition-colors duration-500 flex items-center justify-center">
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

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-particle"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              background: `rgba(var(--color-primary), ${
                Math.random() * 0.7 + 0.3
              })`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              boxShadow: `0 0 ${
                Math.random() * 10 + 5
              }px rgba(var(--color-primary), 0.3)`,
            }}
          />
        ))}
      </div>

      {/* Subtle noise texture */}
      <div className="absolute inset-0 noise-overlay opacity-10 dark:opacity-20"></div>

      <div className="max-w-3xl mx-auto relative">
        <div
          className={`flex flex-col items-center text-center ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          {/* 404 Text with animated gradient */}
          <div className="relative mb-8">
            <h1 className="text-[10rem] font-bold leading-none text-[rgba(var(--color-primary),0.9)] dark:text-[rgba(var(--color-primary),0.95)] relative z-10 animate-floating-3d">
              404
            </h1>
            <div className="absolute -inset-8 bg-[rgba(var(--color-primary),0.03)] dark:bg-[rgba(var(--color-primary),0.06)] rounded-full blur-xl -z-1 opacity-70 animate-pulse-slow"></div>
          </div>

          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[rgba(var(--color-primary),0.5)] to-transparent rounded-full mb-8" />

          <h2 className="text-3xl font-bold mb-4 text-[rgba(var(--color-primary),0.9)] dark:text-[rgba(var(--color-primary),1)]">
            Page Not Found
          </h2>

          <p className="text-xl text-default-600 dark:text-gray-300 max-w-2xl leading-relaxed mb-10">
            The page you're looking for doesn't exist or has been moved. Let's
            get you back on track.
          </p>

          {/* Back to home button with enhanced styling */}
          <Link to="/" className="group">
            <Button
              size="lg"
              className="px-8 py-6 text-lg bg-[rgba(var(--color-primary),0.9)] dark:bg-[rgba(var(--color-primary),0.8)] text-white hover:bg-[rgba(var(--color-primary),1)] dark:hover:bg-[rgba(var(--color-primary),0.9)] button-3d relative overflow-hidden group/btn dark:shadow-[0_4px_20px_rgba(var(--color-primary),0.3)]"
              startContent={
                <Icon
                  icon="lucide:home"
                  className="text-lg transition-transform duration-300 group-hover:-translate-x-1"
                />
              }
            >
              <span className="relative z-10">Back to Home</span>
              <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500"></div>
            </Button>
          </Link>

          {/* Decorative elements */}
          <div className="absolute -bottom-20 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[rgba(var(--color-primary),0.3)] to-transparent dark:via-[rgba(var(--color-primary),0.5)] opacity-50"></div>
        </div>
      </div>
    </div>
  );
}
