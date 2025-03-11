
import { Card, CardBody, CardFooter, Image, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with React and Node.js",
    image: "https://picsum.photos/800/600?random=1",
    demo: "#",
    code: "#",
    tags: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application",
    image: "https://picsum.photos/800/600?random=2",
    demo: "#",
    code: "#",
    tags: ["React", "Firebase", "TailwindCSS"]
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website using React and TailwindCSS",
    image: "https://picsum.photos/800/600?random=3",
    demo: "#",
    code: "#",
    tags: ["React", "TailwindCSS", "Framer Motion"]
  }
];

export function ProjectsSection() {
  return (
    <section className="py-32 px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full" />
          <p className="mt-6 text-xl text-default-600 max-w-2xl">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.title} 
              isHoverable 
              className="border border-default-200 bg-background/60 backdrop-blur-sm"
            >
              <CardBody className="p-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
              </CardBody>
              <CardFooter className="flex flex-col items-start p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-default-500 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 rounded-full bg-default-100 text-default-600 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 w-full">
                  <Button 
                    className="flex-1"
                    color="primary"
                    endContent={<Icon icon="lucide:external-link" />}
                  >
                    Live Demo
                  </Button>
                  <Button 
                    className="flex-1"
                    variant="bordered"
                    endContent={<Icon icon="lucide:github" />}
                  >
                    View Code
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}