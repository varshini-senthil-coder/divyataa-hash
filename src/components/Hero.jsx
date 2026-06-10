import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <main className="relative z-10 flex flex-col items-center justify-center px-4 pb-32 pt-32 text-center md:pb-48 md:pt-44 lg:pb-60 lg:pt-52">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center w-full max-w-5xl"
      >
        {/* Main Titles */}
        <div className="space-y-0 text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
          <h1 className="text-5xl font-serif leading-none md:text-7xl lg:text-8xl">
            DIVYATAA
          </h1>
          <h2 className="text-lg font-serif tracking-[0.2em] md:text-2xl lg:text-3xl uppercase font-light">
            INTERNATIONAL SCHOOL
          </h2>
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-4 text-lg italic text-white/90 font-serif md:text-xl"
        >
          "A silent revolution in early education"
        </motion.p>
 
        {/* Description Box with Glassmorphism */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="glass-dark mt-8 w-full max-w-[800px] border-white/5 rounded-[32px] px-8 py-8 md:px-12 md:py-10"
        >
          <p className="text-base font-light leading-relaxed text-white/95 md:text-lg lg:text-xl">
            Welcome to Divyataa, where we nurture young minds through authentic Montessori education, 
            fostering independence, creativity, and a lifelong love of learning in the heart of Tirupur.
          </p>
        </motion.div>
 
        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row md:gap-8"
        >
          <Link 
            to="/curriculum"
            className="flex w-full items-center justify-center gap-3 rounded-full bg-purple-600 px-10 py-5 text-base font-bold text-white shadow-[0_10px_20px_rgba(114,8,179,0.3)] transition-all hover:bg-purple-500 hover:scale-105 active:scale-95 sm:w-auto"
          >
            Explore programmes <ArrowRight size={20} />
          </Link>
          <Link 
            to="/contact"
            className="flex w-full items-center justify-center gap-3 rounded-full border border-white/30 bg-white/5 px-10 py-5 text-base font-bold text-white backdrop-blur-md transition-all hover:bg-white/15 hover:scale-105 active:scale-95 sm:w-auto"
          >
            Schedule a visit
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Hero;
