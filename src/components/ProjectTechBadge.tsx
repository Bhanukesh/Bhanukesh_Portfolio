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
      return <FileJson className="w-4 h-4 text-[#9b87f5]" />; // Primary Purple
    case 'r':
      return <Binary className="w-4 h-4 text-[#7E69AB]" />; // Secondary Purple
    case 'sql':
      return <Database className="w-4 h-4 text-[#6E59A5]" />; // Tertiary Purple
    case 'java':
      return <Cpu className="w-4 h-4 text-[#8B5CF6]" />; // Vivid Purple
    case 'node.js':
      return <Server className="w-4 h-4 text-[#D946EF]" />; // Magenta Pink
    case 'react':
      return <Code2 className="w-4 h-4 text-[#F97316]" />; // Bright Orange
    case 'tensorflow':
      return <BrainCircuit className="w-4 h-4 text-[#0EA5E9]" />; // Ocean Blue
    case 'docker':
      return <Container className="w-4 h-4 text-[#1EAEDB]" />; // Bright Blue
    case 'aws':
    case 'aws lambda':
    case 'aws s3':
      return <Cloud className="w-4 h-4 text-[#33C3F0]" />; // Sky Blue
    case 'git':
      return <Github className="w-4 h-4 text-[#0FA0CE]" />; // Deep Blue
    case 'tableau':
      return <BarChart className="w-4 h-4 text-[#9b87f5]" />; // Primary Purple
    case 'mysql':
      return <Table2 className="w-4 h-4 text-[#7E69AB]" />; // Secondary Purple
    case 'mongodb':
      return <Database className="w-4 h-4 text-[#6E59A5]" />; // Tertiary Purple
    case 'postgresql':
      return <Table2 className="w-4 h-4 text-[#8B5CF6]" />; // Vivid Purple
    case 'ci/cd':
      return <Workflow className="w-4 h-4 text-[#D946EF]" />; // Magenta Pink
    case 'kafka':
      return <Network className="w-4 h-4 text-[#F97316]" />; // Bright Orange
    case 'data analysis':
      return <BarChart className="w-4 h-4 text-[#0EA5E9]" />; // Ocean Blue
    default:
      return <Code2 className="w-4 h-4 text-[#8E9196]" />; // Neutral Gray
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