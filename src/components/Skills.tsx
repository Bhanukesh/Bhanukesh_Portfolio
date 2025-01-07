import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Workflow, 
  Cloud,
  BrainCircuit,
  BarChart,
  Github,
  Table2,
  Binary,
  FileJson,
  Server,
  Cpu,
  Container,
  Network
} from "lucide-react";

const skills = [
  { 
    category: "Languages", 
    icon: <Code2 className="w-6 h-6 mb-2 text-[#9b87f5]" />,
    items: [
      { name: "Python", icon: <FileJson className="w-4 h-4 text-[#9b87f5]" /> },
      { name: "R", icon: <Binary className="w-4 h-4 text-[#7E69AB]" /> },
      { name: "SQL", icon: <Database className="w-4 h-4 text-[#6E59A5]" /> },
      { name: "Java", icon: <Cpu className="w-4 h-4 text-[#8B5CF6]" /> }
    ]
  },
  { 
    category: "Frameworks", 
    icon: <Workflow className="w-6 h-6 mb-2 text-[#F97316]" />,
    items: [
      { name: "Node.js", icon: <Server className="w-4 h-4 text-[#D946EF]" /> },
      { name: "React", icon: <Code2 className="w-4 h-4 text-[#F97316]" /> },
      { name: "TensorFlow", icon: <BrainCircuit className="w-4 h-4 text-[#0EA5E9]" /> }
    ]
  },
  { 
    category: "Tools", 
    icon: <BrainCircuit className="w-6 h-6 mb-2 text-[#D946EF]" />,
    items: [
      { name: "Docker", icon: <Container className="w-4 h-4 text-[#1EAEDB]" /> },
      { name: "AWS", icon: <Cloud className="w-4 h-4 text-[#33C3F0]" /> },
      { name: "Git", icon: <Github className="w-4 h-4 text-[#0FA0CE]" /> },
      { name: "Tableau", icon: <BarChart className="w-4 h-4 text-[#9b87f5]" /> }
    ]
  },
  { 
    category: "Databases", 
    icon: <Database className="w-6 h-6 mb-2 text-[#0EA5E9]" />,
    items: [
      { name: "MySQL", icon: <Table2 className="w-4 h-4 text-[#7E69AB]" /> },
      { name: "MongoDB", icon: <Database className="w-4 h-4 text-[#6E59A5]" /> },
      { name: "PostgreSQL", icon: <Table2 className="w-4 h-4 text-[#8B5CF6]" /> }
    ]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0EA5E9]/10 to-[#8B5CF6]/10 opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.2),rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-white text-shadow-lg">Skills</h2>
          <p className="text-white/80">Technical expertise and tools</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card rounded-lg p-6 hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex flex-col items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-3">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{skillGroup.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-2 text-sm rounded-full bg-white/10 text-white flex items-center gap-2 hover:bg-white/20 transition-colors"
                  >
                    {skill.icon}
                    {skill.name}
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