import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "BMI Application",
    description: `Developed a comprehensive BMI (Body Mass Index) calculator application using React Native, providing personalized health and lifestyle recommendations based on user results. Key features and achievements include:

• Built robust backend services in Golang for handling user data and BMI calculations
• Implemented personalized health advice system based on BMI results
• Integrated Docker and Kubernetes for improved scalability and deployment
• Utilized Python for data analysis and health recommendation algorithms
• Created efficient database structure using SQL for user data management
• Developed RESTful APIs with Node.js and Express
• Successfully tested and deployed on virtual simulators
• Implemented responsive UI/UX design with React Native
• Maintained clean, well-documented code on GitHub repository

Technologies used include Golang for backend services, Docker & Kubernetes for containerization and orchestration, Python for data analysis, SQL for database management, and JavaScript/Node.js for frontend development.`,
    tech: ["React Native", "Golang", "Docker", "Kubernetes", "Python", "SQL", "Node.js", "JavaScript"],
    date: "04/2024",
    image: "/lovable-uploads/a813545c-1e02-4b6c-a0c3-82bf0dc996b6.png",
    liveUrl: "https://bmiyoga-a0809dbd427a.herokuapp.com/",
    github: "https://github.com/Bhanukesh"
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
    title: "Automated Financial Market Analysis",
    description: `Developed a comprehensive financial data analysis system using AWS and Python. 

Key Steps and Achievements:

1. API Setup:
• Configured Alpha Vantage API integration for financial data retrieval
• Implemented secure API key management
• Set up automated daily stock price data collection

2. AWS Lambda Configuration:
• Created Python-based Lambda function for automated data fetching
• Resolved library compatibility challenges
• Optimized function performance and timeout settings

3. AWS S3 Implementation:
• Configured secure S3 bucket (financebucket11) for data storage
• Established proper permissions and security protocols
• Implemented data integrity verification systems

4. Technical Challenges Overcome:
• Successfully migrated from requests to http.client for Lambda compatibility
• Optimized Lambda timeout settings for reliable execution
• Implemented cost-effective data storage solutions

5. Data Processing Pipeline:
• Developed automated data verification systems
• Implemented data integrity checks
• Created efficient data processing workflows

Future Enhancements:
• Integration of Python visualization libraries
• Implementation of advanced monitoring systems
• Cost optimization strategies

The system now successfully automates financial data collection, storage, and processing, providing a robust foundation for market analysis.`,
    tech: ["Python", "AWS Lambda", "AWS S3", "Alpha Vantage API"],
    date: "09/2024",
    images: [
      "/lovable-uploads/4fdfc8fd-9d47-43bb-b943-414740f1220b.png",
      "/lovable-uploads/ee7ff641-5dc2-4683-aab6-f446a9fb62ad.png"
    ],
    github: "#"
  },
  {
    title: "Universal Analytics API",
    description: `Developed a comprehensive analytics API with real-time visualization capabilities. Key achievements include:
    • Created interactive dashboards for data analysis and visualization
    • Implemented multiple visualization techniques for data representation
    • Developed real-time data processing pipeline using Kafka for continuous updates
    • Built scalable MySQL database architecture for efficient data storage
    • Enhanced data accessibility and decision-making efficiency by 25%`,
    tech: ["Python", "Docker", "CI/CD", "Kafka", "MySQL", "Tableau"],
    date: "03/2024",
    images: [
      "/lovable-uploads/04d510e5-00ed-4cce-88dc-c10deb6fa4da.png",
      "/lovable-uploads/f793355c-af74-417c-b6ba-0f22057bb9a3.png"
    ],
    github: "#"
  },
  {
    title: "COVID-19 Spread Across the US",
    description: `Analyzed COVID-19 data across US states using multiple visualization techniques to provide comprehensive insights:

    Visualization Techniques:
    • Bar Graphs: Comparing new cases and deaths by state
    • Tree Maps: Showing case proportions with size and color intensity
    • Geographic Maps: Visualizing outbreak sizes across states
    • Horizontal Bar Charts: Detailed state-by-state comparisons
    • Bubble Charts: Representing probable cases and deaths
    • Scatter Plots: Analyzing case-fatality correlations
    • Dark-themed Maps: Highlighting severity distribution
    
    Key Features:
    • Interactive dashboards for real-time monitoring
    • Multi-dimensional data visualization
    • State-by-state comparative analysis
    • Trend identification and pattern recognition
    
    Impact:
    These visualizations enable stakeholders to make informed decisions about resource allocation, policy implementation, and public health strategies through clear, immediate visual insights into pandemic patterns and trends.`,
    tech: ["Tableau", "Python", "Data Analysis", "SQL"],
    date: "03/2024",
    images: [
      "/lovable-uploads/ac506a49-3aff-44b1-a184-f30e1f2fccc1.png",
      "/lovable-uploads/2e773431-048b-45e9-85b7-710e563e6ccd.png"
    ],
    github: "#"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black relative">
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
          <h2 className="text-3xl font-bold mb-4 text-white text-shadow-lg">Projects</h2>
          <p className="text-white/80">Featured work and achievements</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
