
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";


export function HeroSection() {
  return (

    <div className="relative flex flex-col items-center justify-center min-h-screen text-center px-4">
      {/* Background gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-background to-secondary-50/30" />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--dots)_1px,_transparent_1px)] bg-[length:24px_24px]" style={{"--dots": "rgba(0,0,0,0.4)"} as any} />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <div className="mb-6 inline-block">
          <span className="px-4 py-2 rounded-full bg-primary-50 text-primary-500 text-sm font-medium">
            Available for Work
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
          Hi, I'm Joy Tarafder
        </h1>
        <p className="text-xl md:text-2xl text-default-600 mb-12 leading-relaxed max-w-2xl mx-auto">
          A passionate frontend developer crafting beautiful and intuitive digital experiences
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            color="primary" 
            size="lg"
            className="w-full sm:w-auto text-lg h-14 px-8"
            endContent={<Icon icon="lucide:arrow-right" className="text-xl" />}
          >
            View My Work
          </Button>
          <Button
            variant="bordered"
            size="lg"
            className="w-full sm:w-auto text-lg h-14 px-8"
            endContent={<Icon icon="lucide:download" className="text-xl" />}
          >
            Download CV
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon icon="lucide:chevrons-down" className="text-3xl text-default-400" />
        </div>
      </div>
    </div>
    
  );
}