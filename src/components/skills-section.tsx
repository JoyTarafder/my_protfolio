import { Tooltip } from "@heroui/react";
import { Icon } from "@iconify/react";
import React from "react";

const skillCategories = [
  {
    name: "Frontend",
    color: "from-blue-500 to-cyan-500",
    items: [
      {
        name: "React",
        icon: "logos:react",
        level: "Beginner",
        years: 0,
        description:
          "Building complex web applications with React and its ecosystem",
      },
      // { name: "TypeScript", icon: "logos:typescript-icon", level: "Advanced", years: 4, description: "Type-safe development with TypeScript" },
      // { name: "Next.js", icon: "logos:nextjs-icon", level: "Advanced", years: 3, description: "Server-side rendering and static site generation" },
      // { name: "Vue", icon: "logos:vue", level: "Intermediate", years: 2, description: "Vue.js development for interactive UIs" },
      {
        name: "TailwindCSS",
        icon: "logos:tailwindcss-icon",
        level: "Intermediate",
        years: 1,
        description: "Rapid UI development with Tailwind",
      },
    ],
  },
  // {
  //   name: "Backend",
  //   color: "from-purple-500 to-pink-500",
  //   items: [
  //     { name: "Node.js", icon: "logos:nodejs-icon", level: "Advanced", years: 3, description: "Server-side JavaScript with Node.js" },
  //     { name: "Express", icon: "simple-icons:express", level: "Advanced", years: 3, description: "RESTful API development with Express" },
  //     { name: "MongoDB", icon: "logos:mongodb-icon", level: "Intermediate", years: 2, description: "NoSQL database management" },
  //     { name: "PostgreSQL", icon: "logos:postgresql", level: "Intermediate", years: 2, description: "Relational database design and optimization" },
  //     { name: "GraphQL", icon: "logos:graphql", level: "Intermediate", years: 2, description: "API development with GraphQL" }
  //   ]
  // },
  {
    name: "Design",
    color: "from-orange-500 to-red-500",
    items: [
      {
        name: "Figma",
        icon: "logos:figma",
        level: "Beginner",
        years: 0,
        description: "UI/UX design and prototyping",
      },
      // { name: "Adobe XD", icon: "logos:adobe-xd", level: "Advanced", years: 2, description: "Interface design and wireframing" },
      // { name: "UI Design", icon: "solar:layout-apps-bold", level: "Expert", years: 4, description: "Creating beautiful and intuitive interfaces" },
      // { name: "Motion", icon: "solar:motion-up-bold", level: "Advanced", years: 2, description: "Animation and motion design" },
      // { name: "Photoshop", icon: "logos:adobe-photoshop", level: "Intermediate", years: 3, description: "Image editing and manipulation" }
    ],
  },
];

const SkillCard = ({
  skill,
  categoryColor,
}: {
  skill: any;
  categoryColor: string;
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Tooltip
      content={
        <div className="p-2 max-w-xs">
          <p className="font-semibold mb-1">{skill.name}</p>
          <p className="text-sm text-default-500">{skill.description}</p>
          <div className="mt-2 flex items-center gap-2 text-tiny">
            <span className="font-medium">{skill.level}</span>
            <span>•</span>
            <span>{skill.years} years</span>
          </div>
        </div>
      }
      placement="top"
      delay={0}
      closeDelay={0}
    >
      <div
        className="relative group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${categoryColor} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
        />
        <div
          className={`
          w-24 h-24 flex items-center justify-center
          bg-background border border-default-200
          rounded-2xl transition-all duration-300
          ${isHovered ? "scale-110 shadow-lg" : ""}
        `}
        >
          <div className="relative">
            <Icon icon={skill.icon} className="text-4xl" />
            <div
              className={`
              absolute -bottom-1 -right-1 w-4 h-4 rounded-full
              flex items-center justify-center text-[8px] font-bold
              bg-gradient-to-br ${categoryColor} text-white
            `}
            >
              {skill.level === "Expert"
                ? "★"
                : skill.level === "Advanced"
                ? "↑"
                : "•"}
            </div>
          </div>
        </div>
      </div>
    </Tooltip>
  );
};

export function SkillsSection() {
  return (
    <section className="py-32 px-4 relative overflow-hidden" id="skills">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-primary/[0.02] -z-1" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="max-w-6xl mx-auto relative">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full" />
          <p className="mt-6 text-xl text-default-600 max-w-2xl">
            A showcase of my technical expertise and professional skillset
          </p>
        </div>

        <div className="space-y-16">
          {skillCategories.map((category) => (
            <div key={category.name} className="space-y-6">
              <div className="flex items-center gap-4">
                <div
                  className={`h-8 w-2 rounded-full bg-gradient-to-b ${category.color}`}
                />
                <h3 className="text-2xl font-semibold">{category.name}</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
                {category.items.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    categoryColor={category.color}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
