import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="relative w-full py-16 md:py-20 px-5 overflow-hidden bg-transparent">
      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6 sm:space-y-8 md:space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4 sm:space-y-6"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 font-bold tracking-widest text-[10px] md:text-xs uppercase shadow-sm border border-purple-100/50">
            2025–26 Admissions Open
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif text-[#1a1a1a] leading-tight font-bold">
            Come and see it for yourself.
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            The best way to understand Divyataa is to visit on a working morning and watch the children.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
        >
          <Link to="/contact" className="w-full sm:w-auto flex items-center justify-center gap-3 rounded-full bg-[#7208b3] px-10 py-5 text-base font-bold text-white shadow-lg transition-all hover:bg-[#8a1fd0] hover:scale-105 active:scale-95">
            Visit Our Campus <ArrowRight size={20} />
          </Link>
          <Link to="/contact" className="w-full sm:w-auto flex items-center justify-center gap-3 rounded-full border border-slate-200 bg-white px-10 py-5 text-base font-bold text-[#1a1a1a] shadow-sm transition-all hover:bg-slate-50 hover:scale-105 active:scale-95">
            Schedule a Meeting
          </Link>
        </motion.div>

        <p className="text-slate-400 text-xs md:text-sm pt-2">
          Or call us directly: <a href="tel:9751112300" className="hover:text-[#7208b3] transition-colors">97511 12300</a> · <a href="tel:8428412300" className="hover:text-[#7208b3] transition-colors">84284 12300</a>
        </p>
      </div>
    </section>
  );
};

export default CTA;
