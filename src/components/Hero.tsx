import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#9b87f5] to-[#FEC6A1]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-32 h-32 mx-auto rounded-full overflow-hidden glass-card p-2"
            >
              <div className="text-6xl">👨‍💻</div>
            </motion.div>
          </div>
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-white/20 backdrop-blur-sm text-white">
            Research Analyst & Developer
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Bhanukesh Balabhadrapatruni
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Transforming data into insights and building innovative solutions
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
            >
              Get in touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};