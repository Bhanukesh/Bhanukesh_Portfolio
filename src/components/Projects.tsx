import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Universal Analytics API",
    description: "Developed a scalable API that enhances real-time sentiment analysis capabilities, improving data accessibility and decision-making efficiency by 25%.",
    tech: ["Python", "Docker", "CI/CD"],
    date: "09/2024"
  },
  {
    title: "Sales Performance Analysis",
    description: "Managed over 10,000 transactions in the Customer Behavior Analysis using Machine Learning project, boosting ROI by 18% through effective RFM analysis.",
    tech: ["Python", "SQL", "Tableau"],
    date: "01/2024"
  },
  {
    title: "BMI Application",
    description: "Developed a fitness app offering BMI calculations and personalized advice. Integrated Python, SQL, Node.js, and Heroku for robust functionality.",
    tech: ["Python", "Node.js", "SQL"],
    date: "10/2023"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground">Featured work and achievements</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card rounded-lg p-6 hover:shadow-2xl transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <div className="flex gap-2">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};