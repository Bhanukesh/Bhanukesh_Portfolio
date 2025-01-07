import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#FEC6A1] to-[#9b87f5] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Get in Touch</h2>
          <p className="text-white/80">Let's connect and discuss opportunities</p>
        </motion.div>
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card rounded-lg p-6 shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              <a
                href="mailto:kesh.bhanu11@gmail.com"
                className="flex items-center gap-3 p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 text-white transform hover:scale-105 hover:shadow-lg"
              >
                <Mail className="w-5 h-5" />
                <span>kesh.bhanu11@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/bhanukesh/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 text-white transform hover:scale-105 hover:shadow-lg"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/Bhanukesh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 text-white transform hover:scale-105 hover:shadow-lg"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};