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
      return <FileJson className="w-4 h-4 text-[#F97316]" />;
    case 'r':
      return <Binary className="w-4 h-4 text-[#D946EF]" />;
    case 'sql':
      return <Database className="w-4 h-4 text-[#0EA5E9]" />;
    case 'java':
      return <Cpu className="w-4 h-4 text-[#8B5CF6]" />;
    case 'node.js':
      return <Server className="w-4 h-4 text-[#9b87f5]" />;
    case 'react':
      return <Code2 className="w-4 h-4 text-[#0EA5E9]" />;
    case 'tensorflow':
      return <BrainCircuit className="w-4 h-4 text-[#D946EF]" />;
    case 'docker':
      return <Container className="w-4 h-4 text-[#0EA5E9]" />;
    case 'aws':
    case 'aws lambda':
    case 'aws s3':
      return <Cloud className="w-4 h-4 text-[#F97316]" />;
    case 'git':
      return <Github className="w-4 h-4 text-[#9b87f5]" />;
    case 'tableau':
      return <BarChart className="w-4 h-4 text-[#8B5CF6]" />;
    case 'mysql':
    case 'mongodb':
    case 'postgresql':
      return <Table2 className="w-4 h-4 text-[#F97316]" />;
    case 'ci/cd':
      return <Workflow className="w-4 h-4 text-[#F97316]" />;
    case 'kafka':
      return <Network className="w-4 h-4 text-[#D946EF]" />;
    case 'data analysis':
      return <BarChart className="w-4 h-4 text-[#8B5CF6]" />;
    default:
      return <Code2 className="w-4 h-4 text-[#9b87f5]" />;
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