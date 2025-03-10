import { Avatar, Button, Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";

const socialLinks = [
  {
    icon: "lucide:github",
    url: "https://github.com/JoyTarafder",
    label: "GitHub",
  },
  {
    icon: "lucide:linkedin",
    url: "https://www.linkedin.com/in/joy-tarafder", // Added https://
    label: "LinkedIn",
  },
  { icon: "lucide:twitter", url: "#", label: "Twitter" },
  { icon: "lucide:instagram", url: "#", label: "Instagram" },
];

export function AboutSection() {
  return (
    <section className="py-32 px-4 relative overflow-hidden" id="about">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-primary/[0.05] -z-1" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="max-w-6xl mx-auto relative">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full" />
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full blur-2xl opacity-20" />
            <Avatar
              src="https://i.ibb.co.com/1Vm2pHB/Joy-Tarafder.jpg"
              className="w-64 h-64 border-4 border-background shadow-xl"
            />
          </div>

          <Card className="flex-1 bg-background/60 backdrop-blur-sm border border-default-200">
            <CardBody className="gap-6">
              <p className="text-xl leading-relaxed text-default-600">
                I'm a Computer Science Engineering (CSE) student (undergraduate
                last semester) with a proven track record of developing webbased
                projects using HTML, CSS, and JavaScript. Possessing one year of
                hands-on experience in web development, I am now seeking a
                challenging internship opportunity to enhance my skills, gain
                practical industry experience, and contribute effectively to
                innovative projects. I'm eager to leverage my technical
                expertise and passion for coding to make valuable contributions
                to a dynamic team while continuously learning and growing in web
                development.
              </p>

              <div className="flex flex-wrap gap-3">
                {["React", "JavaScript", "TailwindCSS", "Node.js"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-default-100 text-default-600 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <div className="flex gap-3 mt-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      isIconOnly
                      variant="light"
                      aria-label={link.label}
                      className="text-default-600 hover:text-primary-500"
                    >
                      <Icon icon={link.icon} className="text-xl" />
                    </Button>
                  </a>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}
