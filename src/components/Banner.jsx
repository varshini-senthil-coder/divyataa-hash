import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/hero-children-B1qFxMJF.webp';

const Banner = () => {
  return (
    <section
      className="relative w-full overflow-hidden h-[85dvh] min-h-[480px] md:h-dvh md:min-h-[580px]"
    >
      {/* Full-bleed background image */}
      <img
        src={heroImg}
        alt="Divyataa children"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark gradient overlays for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

      {/* Bottom fade — blends the banner into the white page below */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-[5] h-[15%] md:h-[20%]"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.3) 40%, rgba(255,255,255,0.7) 70%, #ffffff 100%)',
        }}
      />

      {/* Content — vertically centred with safe padding */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-center w-full max-w-3xl"
        >
          {/* Main Title */}
          <h2 className="whitespace-nowrap text-lg sm:text-2xl md:text-3xl lg:text-5xl font-serif text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
           <b>DIVYATAA INTERNATIONAL SCHOOL</b> 
          </h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg font-serif italic text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] max-w-4xl"
          >
            Where every child's innate love of learning is protected, nurtured, and set free.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto"
          >
            <Link
              to="/why-divyataa"
              className="flex items-center justify-center gap-2 sm:gap-3 rounded-full bg-purple-600 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm md:text-base font-bold text-white shadow-[0_8px_24px_rgba(114,8,179,0.4)] hover:bg-purple-500 hover:scale-105 active:scale-95 transition-all"
            >
              Explore programmes <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 sm:gap-3 rounded-full w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm md:text-base font-bold text-white hover:bg-white/10 hover:scale-105 active:scale-95 transition-all"
              style={{
                background: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.4)',
              }}
            >
              Schedule a visit
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
