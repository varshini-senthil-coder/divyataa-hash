import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import schoolImg from '../assets/school.webp';
import studyImg from '../assets/study.JPG';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen selection:bg-purple-100">
      <Navbar />

      {/* ─── Hero Section ─── */}
      <section className="relative pt-50 pb-12 px-6 overflow-hidden bg-slate-50 border-b border-slate-100">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 text-xs font-bold uppercase tracking-widest mb-6"
          >

            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-4xl  font-serif text-slate-900 mb-8 font-bold leading-tight"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed font-normal italic text-justify md:text-center"
          >
            Divyataa began with a question: what would education look like if it were truly designed for the child?
          </motion.p>
        </div>
      </section>

      {/* ─── Our Story & Our Founders ─── */}
      <section className="py-20 md:py-32 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          {/* Main Narrative Header */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-20 md:mb-32"
          >
            <span className="text-purple-600 font-bold uppercase tracking-widest text-xs block mb-4">A Legacy of Purpose</span>
            <h2 className="text-2xl md:text-4xl font-serif text-slate-900 font-bold leading-tight mb-8 text-justify md:text-center">
              Divyataa did not emerge from a gap in the market. It emerged from a gap in what education could be.
            </h2>
            <div className="w-20 h-1.5 bg-purple-200 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
            
            {/* ── Chairman's Legacy Card ── */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="group bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 hover:border-purple-200 transition-all duration-500 hover:shadow-xl hover:shadow-purple-900/5"
            >
              <div className="flex flex-col h-full">
                <div className="flex flex-col md:flex-row gap-8 mb-8 items-center md:items-start">
                  <div className="w-32 h-32 md:w-48 md:h-48 bg-slate-200 rounded-2xl shrink-0 overflow-hidden shadow-inner flex items-center justify-center text-slate-400">
                    {/* Placeholder for Founder Photo */}
                    <span className="text-xs uppercase font-bold tracking-widest text-center px-4">Photo coming soon</span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-900 mb-2">Gi. Sudakar</h3>
                    <p className="text-purple-600 font-bold text-sm uppercase tracking-widest">Chairman and Founder</p>
                  </div>
                </div>
                
                <div className="mb-8 pb-8 border-b border-slate-200">
                  <p className="text-slate-800 font-medium italic leading-relaxed text-sm md:text-base">
                    First-generation school founder carrying a century-long family legacy of educational philanthropy. Education as a gift to the community.
                  </p>
                </div>

                <div className="space-y-6 text-slate-700 leading-relaxed font-normal text-base md:text-lg flex-grow text-justify">
                  <p>
                    Our chairman comes from a family for whom education has always been an act of giving. His grandfather, the late Shri S.M.R., gave away his personal inheritance to establish a government school in Suriappam Palayam (S Murugappa Government Higher Secondary School), and spent his own money funding the higher education of students who had none.
                  </p>
                  <p>
                    That spirit, of education as something you offer and not just sell, is written into Divyataa's foundation. As Chairman, Mr. Sudakar continues to invest in his grandfather's government school while building Divyataa as a new expression of that same commitment.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ── Principal's Path Card ── */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="group bg-purple-50/30 p-8 md:p-12 rounded-[2.5rem] border border-purple-100 hover:border-purple-200 transition-all duration-500 hover:shadow-xl hover:shadow-purple-900/5"
            >
              <div className="flex flex-col h-full">
                <div className="flex flex-col md:flex-row gap-8 mb-8 items-center md:items-start">
                  <div className="w-32 h-32 md:w-48 md:h-48 bg-slate-200 rounded-2xl shrink-0 overflow-hidden shadow-inner flex items-center justify-center text-slate-400">
                    {/* Placeholder for Founder Photo */}
                    <span className="text-xs uppercase font-bold tracking-widest text-center px-4">Photo coming soon</span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-900 mb-2">Kavitha Sudakar</h3>
                    <p className="text-purple-600 font-bold text-sm uppercase tracking-widest">Principal and Co-Founder</p>
                  </div>
                </div>

                <div className="mb-8 pb-8 border-b border-purple-100">
                  <p className="text-xs md:text-sm text-slate-400 font-bold uppercase tracking-widest mb-4">Qualifications</p>
                  <div className="flex flex-wrap gap-2">
                    {['M.Sc.', 'M.Phil.', 'NET', 'SLET', 'JRF', 'Dip. Montessori', 'Dip. Child Psychology'].map((q, i) => (
                      <span key={i} className="px-3 py-1.5 bg-white rounded-xl text-[10px] md:text-xs text-slate-700 font-bold border border-purple-100 shadow-sm uppercase tracking-tighter">
                        {q}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-6 text-slate-700 leading-relaxed font-normal text-base md:text-lg flex-grow text-justify">
                  <p>
                    Our principal arrived at early childhood education through a different path. Trained as a scientist and qualified at the highest academic levels, she built a distinguished career as a university lecturer.
                  </p>
                  <p>
                    But she kept returning to the same question: what happens at the very beginning? Before university, before examinations, before the system gets involved, what does a child actually need? That question led her to Maria Montessori. And Montessori led her on this journey.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── Who We Are Today ─── */}
      <section className="py-20 md:py-28 px-6 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left — Text */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            >
              <span className="text-purple-400 font-bold uppercase tracking-widest text-xs block mb-6">Who We Are Today</span>
              <h2 className="text-xl md:text-3xl font-serif font-bold mb-8 leading-tight">
                A pure Montessori school.
              </h2>
              <div className="space-y-5 text-slate-300 text-base md:text-lg leading-relaxed font-light text-justify">
                <p>
                  Divyataa, Enriched Montessori Foundation, operates under the <span className="text-white font-medium">SMR Pavalammal Educational Trust</span>, carrying forward the legacy of a family that has believed in education for generations.
                </p>
                <p>
                  We are a pure Montessori school. Not Montessori-inspired. Not Montessori-influenced. Pure Montessori, from our prepared environments and trained guides to our materials, our daily rhythms, and our relationship with every family who chooses us.
                </p>
                <p>
                  We serve children from <span className="text-purple-400 font-bold">KG through Grade 6
                    </span>, across three developmentally designed learning communities.
                </p>
              </div>

            </motion.div>

            {/* Right — Image + Badge */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/5">
                <img
                  src={studyImg}
                  alt="Children studying at Divyataa"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating Name Card */}
              <div className="absolute -bottom-6 -left-4 md:-left-6 bg-purple-600 text-white p-5 md:p-6 rounded-2xl shadow-xl max-w-[260px]">
                <h4 className="text-lg font-serif mb-1">Divyataa</h4>
                <p className="text-xs md:text-sm opacity-90 leading-relaxed italic">
                  "The name means divine radiance. It is the light we see in every child who walks through our doors."
                </p>
              </div>
            </motion.div>
          </div>

          {/* Centered Motto Section */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="mt-20 md:mt-32 max-w-4xl mx-auto border-t border-white/10 pt-20"
          >
            <div className="flex justify-center gap-2 mb-16 px-2 whitespace-now">
              {['Wisdom', 'Integrity', 'Compassion'].map((word) => (
                <div key={word} className="text-center group">
                  <p className="text-white font-serif text-2xl md:text-4xl mb-2 group-hover:text-purple-400 transition-colors">{word}</p>
                  <div className="w-8 h-1 bg-purple-600 mx-auto rounded-full scale-0 group-hover:scale-100 transition-transform" />
                </div>
              ))}
            </div>
            <div className="space-y-8">
              <p className="text-slate-300 text-base md:text-lg leading-relaxed font-normal text-center italic">
                Our motto, <span className="text-white font-medium">Wisdom, Integrity, Compassion</span>, reflects what we believe school should actually build in a child. Not just marks. Not just ranks. A whole human being.
              </p>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed font-normal text-center">
                The name Divyataa means divine radiance. It is what we see in every child who walks through our doors, before the world has had a chance to convince them that learning is difficult, that failure is shameful, or that some things are simply not for them. Our work is to make sure that radiance is never dimmed.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── About Our Logo ─── */}
      <section className="py-24 md:py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-purple-600 font-bold uppercase tracking-widest text-xs block mb-4">The Story Behind the Symbol</span>
            <h2 className="text-2xl md:text-4xl font-serif text-slate-900 font-bold mb-8">About Our Logo</h2>
            <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Every element of our logo tells a story, it carries a specific meaning, rooted in our philosophy of what a child can become when education honours their full potential.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: "The child in meditation",
                desc: "At the centre of the logo sits a child in a posture of calm and inner stillness. Not performing. Not competing. Simply present. This is the child we aspire to nurture: one who has learned to be at peace with themselves, to concentrate deeply, and to direct their own mind."
              },
              {
                title: "The lotus petals",
                desc: "The lotus rises from water and mud to bloom in full beauty, untouched by the conditions it grew in. It is one of the oldest symbols of learning, purity, and potential realised. The purple petals behind the child represent the school itself: a prepared environment from which every child can rise and flourish."
              },
              {
                title: "The open book",
                desc: "Beneath the child lies an open book, the universal symbol of knowledge and the love of learning. At Divyataa, the book is not a source of fear or examination. It is an invitation."
              },
              {
                title: "The infinity symbol",
                desc: "Woven through the centre of the logo is the infinity symbol, representing the boundless nature of a child's curiosity and the limitless possibilities that open up when that curiosity is respected rather than constrained. Learning at Divyataa has no ceiling."
              },
              {
                title: "The colours",
                desc: "Purple represents wisdom and dignity. Blue represents depth of knowledge and truth. Gold represents excellence and the light that every child carries within them. Green represents growth. Together they reflect our motto: Wisdom, Integrity, Compassion."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-8 md:p-10 rounded-[2rem] border border-slate-100 hover:shadow-xl hover:shadow-purple-900/5 transition-all duration-500"
              >
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Closing Quote ─── */}
      <section className="py-28 md:py-40 px-6 bg-slate-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-6xl md:text-8xl font-serif text-purple-200 block mb-6">"</span>
            <blockquote className="text-xl md:text-3xl font-serif text-slate-800 leading-tight mb-10">
              The greatest sign of success for a teacher is to be able to say: the children are now working as if I did not exist.
            </blockquote>
            <cite className="text-slate-500 font-medium tracking-widest uppercase text-sm not-italic">
              — Maria Montessori
            </cite>
          </motion.div>
        </div>

        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#7208b3 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
