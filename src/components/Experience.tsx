import { motion } from "framer-motion";

const experiences = [
  {
    title: "Research Analyst",
    company: "CU Denver Business School",
    period: "04/2023 - 12/2024",
    location: "Denver, US",
    description: "Led CU Denver's Generative AI for Clinical Decision Support project, improving patient care and provider efficacy with AI-driven models."
  },
  {
    title: "Apprenticeship",
    company: "KPMG",
    period: "12/2022 - 02/2023",
    location: "India",
    description: "Analyzed 1,295 records to identify attrition factors, achieving precision and recall of 99%."
  },
  {
    title: "Data Analyst",
    company: "Murali & Co., Chartered Accountants",
    period: "11/2021 - 11/2022",
    location: "Hyderabad, India",
    description: "Corrected revenue forecasts by 30% through predictive modeling."
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground">My professional journey</p>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-8 relative pl-8 border-l-2 border-primary/20"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
              <div className="glass-card rounded-lg p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
                <p className="text-lg text-primary/80 mb-2">{exp.company}</p>
                <p className="text-sm text-muted-foreground mb-2">{exp.location}</p>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};