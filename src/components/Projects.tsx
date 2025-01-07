import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "BMI Application",
    description: "Developed a fitness app offering BMI calculations and personalized advice. Integrated Python, SQL, Node.js, and Heroku for robust functionality.",
    tech: ["Python", "Node.js", "SQL"],
    date: "10/2023",
    image: "/lovable-uploads/a813545c-1e02-4b6c-a0c3-82bf0dc996b6.png",
    liveUrl: "https://bmiyoga-a0809dbd427a.herokuapp.com/",
    github: "#"
  },
  {
    title: "Sales Performance Analysis",
    description: `Conducted comprehensive customer behavior analysis using RFM segmentation, analyzing over 10,000 transactions. Key achievements include:
    • Successfully segmented customers into Champions, Loyal, At-Risk categories
    • Improved marketing ROI by 18% through targeted campaigns
    • Enhanced customer retention by 25% with personalized promotions
    • Implemented advanced Tableau dashboards for dynamic insights`,
    tech: ["Python", "SQL", "Tableau"],
    date: "01/2024",
    images: [
      "/lovable-uploads/ecac5340-86da-4175-9706-742cfb0b2077.png",
      "/lovable-uploads/cb259c00-830a-4c30-ae00-393012a472f9.png",
      "/lovable-uploads/5e82cddc-34ab-44aa-85af-e0addffad898.png"
    ],
    github: "#"
  },
  {
    title: "Universal Analytics API",
    description: "Developed a scalable API that enhances real-time sentiment analysis capabilities, improving data accessibility and decision-making efficiency by 25%.",
    tech: ["Python", "Docker", "CI/CD"],
    date: "09/2024"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card rounded-lg overflow-hidden hover:shadow-2xl transition-shadow"
            >
              {project.image && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              )}
              {project.images && (
                <div className="grid grid-cols-3 gap-2 p-4">
                  {project.images.map((img, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={img}
                      alt={`${project.title} visualization ${imgIndex + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  ))}
                </div>
              )}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.github && (
                      <a 
                        href={project.github} 
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 whitespace-pre-line">{project.description}</p>
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};