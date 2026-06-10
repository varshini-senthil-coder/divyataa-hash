import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Phone, Mail, MapPin, Compass } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Assets
import campusImg from '../assets/school.webp';
import classroomImg from '../assets/placeholder-classroom-Db3PxBcM.webp';
import outdoorImg from '../assets/hero-children-B1qFxMJF.webp';
import materialsImg from '../assets/placeholder-materials-D6uKM2bM.webp';
import learningImg from '../assets/children-learning-C8YlCPHq.webp';
import silambamImg from '../assets/silambam.webp';
import whyMontessoriImg from '../assets/Why Montessori.jpg';
import eventsImg from '../assets/events.png';
import events2Img from '../assets/events 2.jpg';
import annualDayImg from '../assets/annual day.JPG';
import gal1 from '../assets/gallery/5C7A9014.JPG';
import gal2 from '../assets/gallery/5C7A9124.JPG';
import gal3 from '../assets/gallery/5C7A9810.JPG';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const Experience = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-purple-100">
      <Navbar />

      {/* Page Hero */}
      <section className="relative pt-50 pb-12 px-6 overflow-hidden border-b border-slate-50">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 text-xs font-bold uppercase tracking-widest mb-6"
          >
            Our Environment
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-4xl font-serif text-slate-900 mb-6 font-bold leading-tight"
          >
            A place made for children
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-slate-700 max-w-4xl mx-auto mb-12 leading-relaxed font-normal italic text-justify md:text-center"
          >
            The Montessori environment is not decoration. Every element is a decision made in service of the child.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="rounded-[3rem] overflow-hidden shadow-2xl relative max-w-6xl mx-auto"
          >
            <img
              src={campusImg}
              alt="Divyataa Campus Exterior"
              className="w-full h-[400px] md:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Address and Location Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-sm border border-slate-100 flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-8">
              <div className="flex items-center gap-4 text-purple-600">
                <MapPin size={32} />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">Address and Location</h2>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-900">Divyataa International School</h3>
                <p className="text-xl text-slate-600 leading-relaxed">
                  #76/6, Angeripalayam Main Road, <br />
                  Tirupur 641 603, Tamil Nadu, India
                </p>
                <div className="w-20 h-1 bg-purple-200" />
                <p className="text-slate-500 leading-relaxed italic">
                  Situated in the heart of Tirupur, our campus is easily accessible from all parts of the city. 
                  We welcome families from across the Tirupur district.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="https://maps.app.goo.gl/Z9wA5xkkWd4GRqDI8v" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2"
                >
                  <Compass size={20} />
                  Get Directions
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 w-full rounded-3xl overflow-hidden shadow-inner h-[400px] bg-slate-100 relative group">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14884.40120274826!2d77.332928!3d11.128163!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9074e70a1b233%3A0x7fcff7033eb25aec!2sDIVYATAA-International%20School!5e0!3m2!1sen!2sin!4v1776306643085!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                className="transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Classrooms */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="lg:w-1/2 space-y-8"
          >
            <h2 className="text-xl md:text-3xl font-serif text-slate-900 font-bold leading-tight">
              Calm. Ordered. Beautiful.
            </h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-normal text-justify">
              <p>
                A Montessori classroom is unlike any classroom most parents remember from their own schooling. 
                The shelves are low, so every child can reach every material independently. Materials are laid 
                out in sequence, accessible and inviting.
              </p>
              <p>
                The room is calm, not enforced quiet, but the natural quiet of children who are genuinely 
                absorbed in work. Natural light matters here. Clutter does not belong.
              </p>
              <div className="bg-purple-50 p-8 rounded-3xl border-l-4 border-purple-500 italic text-justify">
                Each classroom is prepared before the first child arrives each morning and restored before 
                the last child leaves each afternoon. The environment is never accidental.
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:w-1/2 grid grid-cols-2 gap-4"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-[3/4]">
              <img src={eventsImg} alt="Divyataa Events" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-[3/4] mt-12">
              <img src={events2Img} alt="Divyataa Events 2" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Outdoor Spaces */}
      <section className="py-24 px-6 md:px-12 bg-[#faf7ff]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-20">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="lg:w-1/2 space-y-8 text-right lg:text-left"
          >
            <h2 className="text-xl md:text-3xl font-serif text-slate-900 font-bold leading-tight">
              Children need to move, dig, and be in the world.
            </h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-normal text-justify">
              <p>
                Our outdoor areas are not afterthoughts. They are part of the educational environment, 
                spaces where children can work with soil and plants, observe insects and weather, 
                run, climb and test their bodies.
              </p>
              <p>
                The outdoor space at Divyataa is where our most important learning happens, 
                our children are completely themselves.
              </p>
              <p className="font-medium text-slate-700">
                Here, they experience the unstructured freedom that supports cognitive development 
                just as powerfully as any material on a shelf.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="rounded-[3rem] overflow-hidden shadow-2xl relative group">
              <img src={annualDayImg} alt="Children at Annual Day" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-purple-600/10 group-hover:bg-transparent transition-all duration-500" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Campus Photo Gallery */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-xl md:text-3xl font-serif text-slate-900 font-bold">Campus Gallery</h2>
            <p className="text-slate-500">A glimpse into our prepared environments and vibrant spaces</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[campusImg, silambamImg, outdoorImg, learningImg, annualDayImg, gal1, gal2, gal3, whyMontessoriImg].map((img, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 aspect-square ${
                  idx === 0 ? 'md:col-span-2 md:row-span-2 aspect-auto h-full' : ''
                }`}
              >
                <img src={img} alt={`Campus photo ${idx + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA / Get in touch */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="bg-white border border-slate-100 rounded-[3rem] p-12 md:p-20 text-center shadow-xl shadow-purple-900/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50" />
            
            <h2 className="text-xl md:text-2xl font-serif text-slate-900 mb-8 font-bold">Ready to see it in person?</h2>
            
            <p className="text-xl text-slate-700 mb-12 font-normal">
              The best way to understand a Montessori environment is to see it with your own eyes. 
              Schedule a visit to tour our campus and meet our educators.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
              <a href="tel:9751112300" className="flex items-center gap-3 text-slate-700 font-bold hover:text-purple-600 transition-colors">
                <Phone size={24} className="text-purple-600" />
                <span>97511 12300</span>
              </a>
              <a href="mailto:divyataa.info@gmail.com" className="flex items-center gap-3 text-slate-700 font-bold hover:text-purple-600 transition-colors">
                <Mail size={24} className="text-purple-600" />
                <span>divyataa.info@gmail.com</span>
              </a>
            </div>

            <Link 
              to="/contact"
              className="inline-block bg-purple-600 hover:bg-purple-500 text-white font-bold px-12 py-6 rounded-2xl shadow-xl shadow-purple-600/20 transition-all hover:scale-105 active:scale-95"
            >
              Schedule a visit
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Experience;

