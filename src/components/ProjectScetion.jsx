import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Learning Management System",
    description: "A web application for managing online courses and students.",
    image: "/projects/project1.png",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "tailwindcss"],
    projectUrl: "https://lms-frontend-one-omega.vercel.app",
    Github: "https://github.com/sayakroy83/LMS",
  },
  {
    id: 2,
    title: "E-commerce Landing Page",
    description: "A modern and responsive landing page for an e-commerce website.",
    image: "/projects/project2.png",
    tags: ["React", "tailwindcss", "Framer Motion"],
    projectUrl: "https://eshop-sr.netlify.app",
    Github: "https://github.com/sayakroy83/Eshop-frontend",
  },
  {
    id: 3,
    title: "Pingup - Social media platform",
    description: "A social media platform for connecting with friends and sharing content.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "MongoDB", "tailwindcss", "Clerk"],
    projectUrl: "https://pingup-client-five.vercel.app",
    Github: "https://github.com/sayakroy83/Social-Media-Platform"
  },
  {
    id: 4,
    title: "Pingup - Social media platform",
    description: "A real-time chat application for instant messaging and communication.",
    image: "/projects/project4.png",
    tags: ["React", "Node.js", "MongoDB", "tailwindcss", "websocket", "DaisyUI"],
    projectUrl: "https://chat-application-jxcx.onrender.com",
    Github: "https://github.com/sayakroy83/chat-application"
  }
];

export const ProjectScetion = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on recently. Click on the
          project link for a live demo or visit the GitHub repository.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-md card-hover flex flex-col transition-all duration-500 ease-in-out 
              hover:-translate-y-1 hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.45)] hover:ring-2 hover:ring-primary/60 hover:ring-offset-2 hover:ring-offset-background"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex justify-between items-center mt-auto">
                  <div className="flex space-x-3">
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.Github}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
            <a href="https://github.com/sayakroy83" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">Check my Github <ArrowRight size={16}/></a>
        </div>
      </div>
    </section>
  );
};
