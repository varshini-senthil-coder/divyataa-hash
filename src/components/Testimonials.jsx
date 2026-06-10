import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    content: "Divyataa follows a good Montessori approach with hands-on learning activities. The environment is peaceful and helps children focus and develop important life skills. My daughter enjoys learning here and is becoming more confident every day.",
    author: "Prakash",
    sub: "Parent of P.V. Iniyazh (Stage 3)"
  },
  {
    content: "Over the past four years, we have seen many positive changes in our child — not only in academics but also in confidence and communication. The teachers are very caring and give individual attention to each child. My child enjoys going to school every day, which makes me very happy.",
    author: "S. Revathi",
    sub: "Parent of S. Nikithran (Grade 2)"
  },
  {
    content: "The first and foremost thing about Divyataa is the transparency between school and parent. As a parent, we are very free to share our needs about our children and the management takes initiative. Divyataa cares deeply for our child's future — your curriculum makes our kids think and act.",
    author: "Yuganya Rajmohan",
    sub: "Parent of R. Rakshith Abinav (Stage 1)"
  },
  {
    content: "It's a great platform for my child's education. The teachers have a wonderful bond with the children.",
    author: "Selvakumar",
    sub: "Parent of S.Y. Aadhiran (Grade 1)"
  },
  {
    content: "The atmosphere at this school is wonderful. The staff is warm and nurturing, making it a safe place where students feel comfortable and excited to learn. They treat every student as an individual, understanding their unique needs and abilities.",
    author: "Ankita Tiwari",
    sub: "Parent of Ishan Tiwari (Stage 3)"
  },
  {
    content: "The school has such a pleasant environment. The teachers are very friendly, which makes my child feel comfortable and happy. I truly feel at ease knowing my child is cared for so well and feels safe, just like being at home.",
    author: "Jenifer Antony",
    sub: "Parent of Anton Steve (Stage 3)"
  },
  {
    content: "Divyataa's curriculum encourages students to be independent, gives them the opportunity to learn from their errors, and provides an uninterrupted learning environment. My child's ability to reason and carry herself with confidence is where I believe Divyataa has played a vital role.",
    author: "Narmadha",
    sub: "Parent of Ilanila (Grade 2)"
  },
  {
    content: "One of my twins found difficulties in learning while the other could follow immediately. The teachers gave her time to understand and grow with no pressure. Now both my kids are confidently learning. In Divyataa, each student learns independently at their own pace, without being judged or compared. That's why the students of Divyataa wear confidence on their shoulders.",
    author: "Narmadha",
    sub: "Parent of Innila (Grade 2)"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const visibleCount = isMobile ? 1 : 2;
  // To allow sliding one-by-one, maxIndex is testimonials.length - 1
  // But to avoid empty space at the end, it's testimonials.length - visibleCount
  const maxIndex = testimonials.length - visibleCount;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  return (
    <section className="py-16 bg-transparent relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 font-bold tracking-widest text-[10px] md:text-xs uppercase shadow-sm border border-purple-100/50"
          >
            Our Community
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-slate-900 leading-tight font-bold"
          >
            From Our Parents
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-1.5 bg-[#7208b3] mx-auto rounded-full"
          />
        </div>

        <div className="relative group/slider" 
             onMouseEnter={() => setIsAutoPlaying(false)}
             onMouseLeave={() => setIsAutoPlaying(true)}>
          
          <div className="overflow-visible md:overflow-hidden py-10">
            <motion.div
              animate={{ x: `-${currentIndex * (100 / visibleCount)}%` }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
              className="flex"
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className={`flex-shrink-0 px-3 md:px-5 ${isMobile ? 'w-full' : 'w-1/2'}`}
                >
                  <div className="h-full bg-white/90 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-purple-100 shadow-2xl shadow-purple-500/5 flex flex-col relative overflow-hidden group hover:border-purple-300 transition-all duration-500">
                    <Quote className="absolute top-6 right-8 text-purple-50 w-24 h-24 -z-10 group-hover:text-purple-100 transition-colors duration-500" />
                    
                    <div className="flex-grow">
                      <p className="text-slate-600 text-base md:text-lg leading-relaxed italic font-normal mb-10">
                        "{testimonial.content}"
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-5 mt-auto">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-[#7208b3] to-[#8a1fd0] flex items-center justify-center text-white font-serif text-2xl md:text-3xl shadow-xl shadow-purple-200">
                        {testimonial.author[0]}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-lg md:text-xl leading-none">{testimonial.author}</h4>
                        <p className="text-[#7208b3] font-medium text-xs md:text-sm uppercase tracking-wider mt-2">{testimonial.sub}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Controls - Positioned outside the cards on desktop */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-2 -right-2 md:-left-12 md:-right-12 flex justify-between pointer-events-none">
            <button
              onClick={prevSlide}
              className="pointer-events-auto w-10 h-10 md:w-16 md:h-16 rounded-full bg-white border border-slate-100 shadow-2xl flex items-center justify-center text-slate-400 hover:text-[#7208b3] hover:border-purple-200 transition-all hover:scale-110 active:scale-95 group"
            >
              <ChevronLeft className="w-5 h-5 md:w-8 md:h-8 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={nextSlide}
              className="pointer-events-auto w-10 h-10 md:w-16 md:h-16 rounded-full bg-white border border-slate-100 shadow-2xl flex items-center justify-center text-slate-400 hover:text-[#7208b3] hover:border-purple-200 transition-all hover:scale-110 active:scale-95 group"
            >
              <ChevronRight className="w-5 h-5 md:w-8 md:h-8 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Pagination indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {Array.from({ length: testimonials.length - visibleCount + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-500 ${
                index === currentIndex ? 'w-10 bg-[#7208b3]' : 'w-2 bg-purple-100 hover:bg-purple-200'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
