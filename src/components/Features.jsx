import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      title: 'Child-centred learning',
      description: 'Individual attention and respect for each child\'s natural development pace'
    },
    {
      title: 'Nurturing environment',
      description: 'Safe, caring atmosphere that promotes confidence and independence'
    },
    {
      title: 'Authentic Montessori',
      description: 'Traditional Montessori materials and methodology adapted for modern learning'
    },
    {
      title: 'Excellence in education',
      description: 'Preparing children for academic success and lifelong learning'
    }
  ];

  return (
    <section className="relative w-full py-12 md:py-16 lg:py-20 px-5 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-20 space-y-4 sm:space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#1a1a1a] font-bold"
          >
            What makes Divyataa different
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-500 max-w-3xl mx-auto text-base leading-relaxed px-4 font-normal"
          >
            We are not Montessori-inspired. We are pure Montessori, and that distinction matters more than any brochure can explain.
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {[
            {
              title: "Child-led learning",
              desc: "Every child at Divyataa directs their own work. They choose, they focus, they finish, building the habit of self-direction that most adults are still trying to develop."
            },
            {
              title: "A prepared environment",
              desc: "Our classrooms are designed, not decorated. Every shelf, every material, every element of the room is there because it serves the child's development. Nothing is accidental."
            },
            {
              title: "Trained Montessori guides",
              desc: "Our educators are trained to observe before they speak, to offer a lesson at the right moment, and then to step back. A great Montessori classroom hums without the teacher at its centre."
            },
            {
              title: "Three hours of deep work",
              desc: "No bells. No forced transitions. Every morning, children at Divyataa have three uninterrupted hours to go deep into their chosen work. Concentration is not demanded here, it is grown."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-100 rounded-[32px] p-8 md:p-10 text-center shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col items-center group"
            >
              <h3 className="text-lg md:text-xl font-serif text-[#1a1a1a] mb-5 font-semibold group-hover:text-[#7208b3] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-black leading-relaxed text-sm md:text-base font-light">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
