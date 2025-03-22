// Define project interface
export interface Project {
  title: string;
  description: string;
  image: string;
  demo: string;
  code: string;
  tags: string[];
  featured: boolean;
  category: "web" | "mobile" | string;
}

// Shared projects data to be used across components
export const projects: Project[] = [
  {
    title: "Task Management App",
    description: "A collaborative task management application",
    image: "https://i.ibb.co.com/Mxxr4LpD/Screenshot-2025-03-21-012058.png",
    demo: "https://taskify-jt.netlify.app/",
    code: "https://github.com/JoyTarafder/Taskify.git",
    tags: ["Nextjs", "TailwindCSS", "TypeScript"],
    featured: true,
    category: "web",
  },
  {
    title: "Course Folio Website",
    description: "A portfolio website for a course",
    image: "https://i.ibb.co.com/SDmLWN5h/Whats-App-Image-2025-03-14-at-00-38-52-4f60ddc1.jpg",
    demo: "https://shantanukr.netlify.app/",
    code: "https://github.com/JoyTarafder/COURSEFOLIO.git",
    tags: ["Reactjs", "TailwindCSS", "TypeScript"],
    featured: true,
    category: "web",
  },
  // Additional projects for the projects page
  {
    title: "Basic Calculator",
    description: "A basic calculator with basic operations",
    image: "https://i.ibb.co.com/jkcn5MD6/384644384-c19d4beb-b2fa-4ff1-b7e5-8125e3f28ab4.png",
    demo: "#",
    code: "https://github.com/JoyTarafder/Basic_Calculator_Mobile_App.git",
    tags: ["React", "API Integration", "TailwindCSS"],
    featured: false,
    category: "mobile",
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
