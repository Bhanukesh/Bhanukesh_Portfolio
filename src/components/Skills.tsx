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
    icon: <Code2 className="w-6 h-6 mb-2 text-red-300" />,
    items: [
      { name: "Python", icon: <FileJson className="w-4 h-4 text-red-300" /> },
      { name: "R", icon: <Binary className="w-4 h-4 text-yellow-300" /> },
      { name: "SQL", icon: <Database className="w-4 h-4 text-blue-300" /> },
      { name: "Java", icon: <Cpu className="w-4 h-4 text-orange-300" /> }
    ]
  },
  { 
    category: "Frameworks", 
    icon: <Workflow className="w-6 h-6 mb-2 text-green-300" />,
    items: [
      { name: "Node.js", icon: <Server className="w-4 h-4 text-green-300" /> },
      { name: "React", icon: <Code2 className="w-4 h-4 text-blue-300" /> },
      { name: "TensorFlow", icon: <BrainCircuit className="w-4 h-4 text-purple-300" /> }
    ]
  },
  { 
    category: "Tools", 
    icon: <BrainCircuit className="w-6 h-6 mb-2 text-blue-300" />,
    items: [
      { name: "Docker", icon: <Container className="w-4 h-4 text-blue-300" /> },
      { name: "AWS", icon: <Cloud className="w-4 h-4 text-orange-300" /> },
      { name: "Git", icon: <Github className="w-4 h-4 text-white" /> },
      { name: "Tableau", icon: <BarChart className="w-4 h-4 text-pink-300" /> }
    ]
  },
  { 
    category: "Databases", 
    icon: <Database className="w-6 h-6 mb-2 text-amber-300" />,
    items: [
      { name: "MySQL", icon: <Table2 className="w-4 h-4 text-amber-300" /> },
      { name: "MongoDB", icon: <Database className="w-4 h-4 text-cyan-300" /> },
      { name: "PostgreSQL", icon: <Table2 className="w-4 h-4 text-yellow-300" /> }
    ]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 to-[#0EA5E9]/10 opacity-50"></div>
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
                    className={`px-3 py-2 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm flex items-center gap-2 hover:bg-white/20 transition-colors ${
                      skill.name.toLowerCase() === 'git' ? 'text-white' : getTextColor(skill.name)
                    }`}
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

// Helper function to get text color
const getTextColor = (tech: string) => {
  switch (tech.toLowerCase()) {
    // Languages
    case 'python': return 'text-red-300';
    case 'r': return 'text-yellow-300';
    case 'sql': return 'text-blue-300';
    case 'java': return 'text-orange-300';
    
    // Frameworks
    case 'node.js': return 'text-green-300';
    case 'react': return 'text-blue-300';
    case 'tensorflow': return 'text-purple-300';
    
    // Tools
    case 'docker': return 'text-blue-300';
    case 'aws': return 'text-orange-300';
    case 'git': return 'text-white';
    case 'tableau': return 'text-pink-300';
    
    // Databases
    case 'mysql': return 'text-amber-300';
    case 'mongodb': return 'text-cyan-300';
    case 'postgresql': return 'text-yellow-300';
    default: return 'text-gray-300';
  }
};