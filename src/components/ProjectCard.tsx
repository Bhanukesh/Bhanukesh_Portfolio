import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { ProjectTechBadge } from "./ProjectTechBadge";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tech: string[];
    date: string;
    image?: string;
    images?: string[];
    liveUrl?: string;
    github?: string;
  };
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="glass-card rounded-lg overflow-hidden hover:shadow-2xl transition-shadow"
    >
      {project.image && (
        <div className="relative h-64 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      {project.images && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
          {project.images.map((img, imgIndex) => (
            <img
              key={imgIndex}
              src={img}
              alt={`${project.title} visualization ${imgIndex + 1}`}
              className="w-full h-64 object-contain rounded-lg cursor-pointer hover:scale-105 transition-transform"
            />
          ))}
        </div>
      )}
      <div className="p-8">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-2xl font-semibold text-gradient">{project.title}</h3>
          <div className="flex gap-3">
            {project.github && (
              <a 
                href={project.github} 
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6" />
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-6 h-6" />
              </a>
            )}
          </div>
        </div>
        <p className="text-muted-foreground mb-6 whitespace-pre-line text-lg leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-3">
          {project.tech.map((tech, techIndex) => (
            <ProjectTechBadge key={techIndex} tech={tech} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};