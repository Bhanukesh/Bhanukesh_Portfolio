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
    // Languages
    case 'python':
      return <FileJson className="w-4 h-4 text-red-300" />;
    case 'r':
      return <Binary className="w-4 h-4 text-yellow-300" />;
    case 'sql':
      return <Database className="w-4 h-4 text-blue-300" />;
    case 'java':
      return <Cpu className="w-4 h-4 text-orange-300" />;
    
    // Frameworks
    case 'node.js':
      return <Server className="w-4 h-4 text-green-300" />;
    case 'react':
      return <Code2 className="w-4 h-4 text-blue-300" />;
    case 'tensorflow':
      return <BrainCircuit className="w-4 h-4 text-purple-300" />;
    
    // Tools
    case 'docker':
      return <Container className="w-4 h-4 text-blue-300" />;
    case 'aws':
      return <Cloud className="w-4 h-4 text-orange-300" />;
    case 'git':
      return <Github className="w-4 h-4 text-white" />;
    case 'tableau':
      return <BarChart className="w-4 h-4 text-pink-300" />;
    
    // Databases
    case 'mysql':
      return <Table2 className="w-4 h-4 text-amber-300" />;
    case 'mongodb':
      return <Database className="w-4 h-4 text-cyan-300" />;
    case 'postgresql':
      return <Table2 className="w-4 h-4 text-yellow-300" />;
    
    // Additional Skills
    case 'aws lambda':
      return <Cloud className="w-4 h-4 text-violet-300" />;
    case 'aws s3':
      return <Cloud className="w-4 h-4 text-violet-300" />;
    case 'ci/cd':
      return <Workflow className="w-4 h-4 text-emerald-300" />;
    case 'kafka':
      return <Network className="w-4 h-4 text-teal-300" />;
    case 'data analysis':
      return <BarChart className="w-4 h-4 text-indigo-300" />;
    case 'alpha vantage api':
      return <Code2 className="w-4 h-4 text-slate-300" />;
    default:
      return <Code2 className="w-4 h-4 text-gray-300" />;
  }
};

export const ProjectTechBadge = ({ tech }: ProjectTechBadgeProps) => {
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
      
      // Additional Skills
      case 'aws lambda': return 'text-violet-300';
      case 'aws s3': return 'text-violet-300';
      case 'ci/cd': return 'text-emerald-300';
      case 'kafka': return 'text-teal-300';
      case 'data analysis': return 'text-indigo-300';
      case 'alpha vantage api': return 'text-slate-300';
      default: return 'text-gray-300';
    }
  };

  return (
    <span className={`px-4 py-2 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm ${getTextColor(tech)} flex items-center gap-2 border border-white/20 hover:bg-white/20 transition-colors`}>
      {getTechIcon(tech)}
      {tech}
    </span>
  );
};