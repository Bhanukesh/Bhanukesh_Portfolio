import { motion } from "framer-motion";

const experiences = [
  {
    title: "Research Analyst",
    company: "CU Denver Business School",
    period: "04/2023 - 12/2024",
    location: "Denver, US",
    description: `• Led CU Denver's Generative AI for Clinical Decision Support project, improving patient care and provider efficacy with AI-driven models

• Boosted patient care efficiency by 20% using predictive analytics with R & Python

• Developed an AI healthcare course, adopted by over 200 professionals`
  },
  {
    title: "Apprenticeship",
    company: "KPMG",
    period: "12/2022 - 02/2023",
    location: "India",
    description: `• Analyzed 1,295 records to identify attrition factors, achieving precision and recall of 99%

• Developed Tableau dashboards for HR teams, enabling proactive retention strategies`
  },
  {
    title: "Data Analyst",
    company: "Murali & Co., Chartered Accountants",
    period: "11/2021 - 11/2022",
    location: "Hyderabad, India",
    description: `• Corrected revenue forecasts by 30% through predictive modeling

• Consolidated data from diverse sources, boosting processing efficiency by 25%

• Designed 30+ dashboards with Power BI & Tableau for real-time financial decisions`
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F97316]/10 to-[#D946EF]/10 opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.2),rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Experience</h2>
          <p className="text-white/80">My professional journey</p>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-8 relative pl-8 border-l-2 border-white/30"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white shadow-lg"></div>
              <div className="glass-card rounded-lg p-6 hover:transform hover:scale-[1.02] transition-all duration-300">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                  <span className="text-sm text-white/80">{exp.period}</span>
                </div>
                <p className="text-lg text-white/90 mb-2">{exp.company}</p>
                <p className="text-sm text-white/80 mb-2">{exp.location}</p>
                <p className="text-white/80 whitespace-pre-line">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};