import { motion } from 'framer-motion';

const StatsStrip = () => {
  const stats = [
    { label: 'Children enrolled', value: '200+' },
    { label: 'Grades Offered', value: 'KG – Grade 6' },
    { label: 'Pure Montessori', value: '100%' },
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
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center space-y-2"
            >
              <div className="text-3xl md:text-4xl font-serif text-[#7208b3] font-bold">
                {stat.value}
              </div>
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
