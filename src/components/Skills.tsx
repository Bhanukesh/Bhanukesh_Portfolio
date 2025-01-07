import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Workflow, 
  Cloud,
  BrainCircuit,
  BarChart,
  Git,
  Table2
} from "lucide-react";

const skills = [
  { 
    category: "Languages", 
    icon: <Code2 className="w-6 h-6 mb-2" />,
    items: ["Python", "R", "SQL", "Java"] 
  },
  { 
    category: "Frameworks", 
    icon: <Workflow className="w-6 h-6 mb-2" />,
    items: ["Node.js", "React", "TensorFlow"] 
  },
  { 
    category: "Tools", 
    icon: <BrainCircuit className="w-6 h-6 mb-2" />,
    items: ["Docker", "AWS", "Git", "Tableau"] 
  },
  { 
    category: "Databases", 
    icon: <Database className="w-6 h-6 mb-2" />,
    items: ["MySQL", "MongoDB", "PostgreSQL"] 
  }
];

const getItemIcon = (item: string) => {
  switch (item.toLowerCase()) {
    case 'aws':
      return <Cloud className="w-4 h-4" />;
    case 'git':
      return <Git className="w-4 h-4" />;
    case 'tableau':
      return <BarChart className="w-4 h-4" />;
    case 'mysql':
    case 'mongodb':
    case 'postgresql':
      return <Table2 className="w-4 h-4" />;
    default:
      return null;
  }
};

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <p className="text-muted-foreground">Technical expertise and tools</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card rounded-lg p-6"
            >
              <div className="flex flex-col items-center mb-4">
                {skillGroup.icon}
                <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary flex items-center gap-2"
                  >
                    {getItemIcon(skill)}
                    {skill}
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