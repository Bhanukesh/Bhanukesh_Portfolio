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

interface ProjectTechBadgeProps {
  tech: string;
}

const getTechIcon = (tech: string) => {
  switch (tech.toLowerCase()) {
    case 'python':
      return <FileJson className="w-4 h-4 text-[#FFD43B]" />; // Python Yellow
    case 'r':
      return <Binary className="w-4 h-4 text-[#276DC3]" />; // R Blue
    case 'sql':
      return <Database className="w-4 h-4 text-[#00758F]" />; // MySQL Blue
    case 'java':
      return <Cpu className="w-4 h-4 text-[#E76F00]" />; // Java Orange
    case 'node.js':
      return <Server className="w-4 h-4 text-[#68A063]" />; // Node Green
    case 'react':
      return <Code2 className="w-4 h-4 text-[#61DAFB]" />; // React Blue
    case 'tensorflow':
      return <BrainCircuit className="w-4 h-4 text-[#FF6F00]" />; // TensorFlow Orange
    case 'docker':
      return <Container className="w-4 h-4 text-[#2496ED]" />; // Docker Blue
    case 'aws':
    case 'aws lambda':
    case 'aws s3':
      return <Cloud className="w-4 h-4 text-[#FF9900]" />; // AWS Orange
    case 'git':
      return <Github className="w-4 h-4 text-[#F05032]" />; // Git Orange-Red
    case 'tableau':
      return <BarChart className="w-4 h-4 text-[#E97627]" />; // Tableau Orange
    case 'mysql':
    case 'mongodb':
    case 'postgresql':
      return <Table2 className="w-4 h-4 text-[#4479A1]" />; // PostgreSQL Blue
    case 'ci/cd':
      return <Workflow className="w-4 h-4 text-[#43A047]" />; // Green
    case 'kafka':
      return <Network className="w-4 h-4 text-[#231F20]" />; // Kafka Black
    case 'data analysis':
      return <BarChart className="w-4 h-4 text-[#9C27B0]" />; // Purple
    default:
      return <Code2 className="w-4 h-4 text-[#6E768166]" />; // Neutral Gray
  }
};

export const ProjectTechBadge = ({ tech }: ProjectTechBadgeProps) => {
  return (
    <span className="px-4 py-2 text-sm rounded-full bg-white/10 backdrop-blur-sm text-white font-medium flex items-center gap-2 border border-white/20">
      {getTechIcon(tech)}
      {tech}
    </span>
  );
};