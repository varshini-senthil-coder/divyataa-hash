import { motion, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

/* ✅ Counter (per column trigger) */
const Counter = ({ end, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, isInView]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const StatsStrip = () => {
  const stats = [
    { label: 'Children enrolled', value: 200, suffix: '+' },
    { label: 'Grades Offered', value: 'KG – Grade 6' },
    { label: 'Pure Montessori', value: 100, suffix: '%' },
    { label: 'Montessori educators', value: 'Trained' }
  ];

  return (
    <section className="py-12 md:py-16 bg-white border-y border-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">

          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center space-y-2"
            >
              {/* VALUE */}
              <div className="text-3xl md:text-4xl font-serif text-[#7208b3] font-bold">
                {typeof stat.value === "number" ? (
                  <Counter end={stat.value} suffix={stat.suffix} />
                ) : (
                  stat.value
                )}
              </div>

              {/* LABEL */}
              <div className="text-xs md:text-sm text-slate-500 uppercase tracking-widest font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default StatsStrip;