import { motion } from 'framer-motion';
import silambamImg from '../assets/silambam.webp';

const ImageSection = () => {
  return (
    <section className="relative w-full py-8 md:py-12 px-5 overflow-hidden bg-transparent">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl"
        >
          <img 
            src={silambamImg} 
            alt="Students practicing Silambam" 
            className="w-full h-auto max-h-[250px] md:max-h-[400px] lg:max-h-[500px] object-cover focus:outline-none"
          />
          {/* Subtle overlay for depth */}
          <div className="absolute inset-0 bg-black/5 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default ImageSection;
