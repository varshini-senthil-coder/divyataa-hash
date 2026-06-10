import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import img1 from '../assets/CAMPUS.jpg';

const ImageSection = () => {
  const [index, setIndex] = useState(0);

  // ✅ Define images array
  const images = [img1];

  return (
    <section className="relative w-full py-8 md:py-12 px-5 overflow-hidden bg-transparent">
      <div className="max-w-5xl mx-auto relative z-10">
        
        <div className="relative rounded-[80px] md:rounded-[80px] overflow-hidden shadow-2xl h-[250px] md:h-[400px] lg:h-[500px]">

          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={images[index]} // ✅ now works
              alt="slider"
              className="w-full h-full object-contain absolute top-0 left-0"

              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}

              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </AnimatePresence>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/5 pointer-events-none" />

        </div>
      </div>
    </section>
  );
};

export default ImageSection;