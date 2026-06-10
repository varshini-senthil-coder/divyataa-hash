import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import silambam2Img from '../assets/silambam 2.webp';
import childrenLearningImg from '../assets/children-learning-C8YlCPHq.webp';
import whyMontessoriImg from '../assets/Why Montessori.jpg';
import materialsImg from '../assets/placeholder-materials-D6uKM2bM.webp';
import primaryCasaImg from '../assets/Primary Montessori Casa.JPG';
import elementaryImg from '../assets/curriculam/elementary-grades.webp';
import elementaryCuriosityImg from '../assets/Elementary Curiosity Unleashed.JPG';
import outdoorImg from '../assets/experience/placeholder-outdoor-BzcKU8Ud.webp';
import kgClassroomImg from '../assets/curriculam/kg-classroom.webp';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Curriculum = () => {
  const principles = [
    {
      id: '01',
      title: 'The Prepared Environment',
      content: 'A Montessori classroom is not decorated. It is designed. Every shelf is at child height. Every material has exactly one place. The child moves freely, chooses their work, and discovers what comes next, not because a teacher directed them, but because the room itself invites it. The environment is the first teacher.'
    },
    {
      id: '02',
      title: 'Freedom Within Structure',
      content: 'Children at Divyataa choose their own work within clear, understood limits. This is not permissiveness. It is practice, daily exercise of the same capacity that adults spend entire careers trying to develop: the ability to direct themselves.'
    },
    {
      id: '03',
      title: 'Mixed-Age Communities',
      content: 'Our classrooms bring together children across a three-year age span. The six-year-old watches the eight-year-old and reaches. The nine-year-old teaches the seven-year-old and, in doing so, understands the concept more deeply than any worksheet could have made possible.'
    },
    {
      id: '04',
      title: 'Three Hours of Uninterrupted Work',
      content: 'No bells. No forced transitions every forty minutes. The morning work cycle at Divyataa gives children the rarest gift in modern education: time to go deep. Concentration is not demanded here, it is grown, slowly and steadily, until it becomes a habit so natural the child does not realise they have it.'
    },
    {
      id: '05',
      title: 'The Guide, Not the Lecturer',
      content: 'Our educators are trained to observe before they speak. To offer a lesson at the moment the child is ready for it, and then to step back. The goal of a Montessori classroom is one that functions beautifully without the teacher at its centre.'
    }
  ];

  return (
    <div className="bg-white min-h-screen selection:bg-purple-100">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-50 pb-12 px-6 bg-slate-50 overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-purple-600 font-bold tracking-[0.2em] uppercase text-sm mb-6"
          >
            Curriculum
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-4xl font-serif text-slate-900 mb-8 leading-tight font-bold"
          >
            A Journey, Not <br className="hidden md:block" /> a Conveyor Belt
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed font-normal text-justify md:text-center"
          >
            At Divyataa, we do not sort children by age and move them along a conveyor belt. We place them in communities that match where they are developmentally, and trust that what they need will find them there.
          </motion.p>
        </div>
        
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-100/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-200/50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
      </section>

      {/* Why Montessori Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24 items-center">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            >
              <h2 className="text-xl md:text-3xl font-serif text-slate-900 mb-8 font-bold">Why Montessori</h2>
              <p className="text-lg text-slate-600 leading-relaxed space-y-4 text-justify">
                Most of us attended schools where the teacher talked and we listened. Where the bell decided when thinking stopped. Where being wrong was something to hide. 
                <br /><br />
                The Montessori Method is built on the exact opposite of all of that, and it has been working, across cultures and continents, for more than 120 years.
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3]"
            >
              <img src={whyMontessoriImg} alt="Why Montessori" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-10 bg-slate-50 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-500 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
              >
                <span className="text-4xl font-serif text-purple-200 group-hover:text-purple-500 transition-colors duration-500 block mb-6">{principle.id}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{principle.title}</h3>
                <p className="text-slate-500 leading-relaxed font-normal text-sm md:text-base text-justify">{principle.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Primary Program Section */}
      <section className="py-32 px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <span className="text-purple-400 font-bold tracking-widest uppercase text-sm mb-6 block">Ages 3 to 6</span>
              <h2 className="text-xl md:text-3xl font-serif mb-6 font-bold">Primary Montessori: Casa</h2>
              <h3 className="text-2xl font-light text-slate-400 mb-10 italic">Where independence begins</h3>
              <p className="text-lg text-slate-300 leading-relaxed mb-10 text-justify">
                This is where it all starts. The KG environment is built entirely around the young child's natural drives: to move, to touch, to repeat, to master. Children here do not sit and listen. They work.
              </p>
              <div className="p-8 bg-white/5 rounded-[2rem] border border-white/10 backdrop-blur-sm">
                <p className="text-slate-200 leading-relaxed italic text-justify">
                  "Each morning, a child in the KG environment chooses their activity, carries it to their workspace, completes it, and returns it. This simple cycle builds the habit of beginning, concentrating, finishing, and caring for what belongs to everyone."
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/5">
                <img src={primaryCasaImg} alt="Primary Montessori: Casa" className="w-full h-auto" />
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">
            {[
              { title: 'Practical Life', content: 'Pouring, folding, sweeping, buttoning, transferring, cutting. These are not chores. They are building hand-eye coordination, concentration, and fine motor control.' },
              { title: 'Sensorial', content: 'The pink tower. Colour tablets. Sound cylinders. Before a child can think in abstractions, they must have handled them. Giving the mind precise vocabulary for what the hands have learned.' },
              { title: 'Language', content: 'Sandpaper letters. The moveable alphabet. Phonemic awareness. Reading and writing emerge not from drills but from discovery, in a sequence that mirrors natural development.' },
              { title: 'Mathematics', content: 'Golden beads. Bead chains. The stamp game. Physically holding one thousand bead units creates an understanding of place value that never leaves them.' },
              { title: 'Cultural Studies', content: 'First maps. First animals. First plants. First stories of the earth. Planting the seed that the world is large, extraordinary, and worth exploring.' }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white/5 rounded-3xl border border-white/10"
              >
                <h4 className="text-xl font-bold mb-4 text-white">{item.title}</h4>
                <p className="text-slate-400 leading-relaxed text-sm text-justify">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2" />
      </section>

      {/* Elementary Program Section */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            >
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50">
                <img src={elementaryCuriosityImg} alt="Elementary: Curiosity Unleashed" className="w-full h-auto" />
              </div>
            </motion.div>
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-purple-600 font-bold tracking-widest uppercase text-sm mb-6 block">Ages 6-12 (Grades 1-6)</span>
              <h2 className="text-xl md:text-3xl font-serif text-slate-900 font-bold leading-tight">
                Elementary: Curiosity Unleashed
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-10 text-justify">
                Around age six, something shifts. The child who wanted to touch everything now wants to know why everything. Why did the dinosaurs disappear? Who invented writing and when? The Elementary years at Divyataa are built for exactly this hunger.
              </p>
              
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-slate-900">The Five Great Lessons</h4>
                <ul className="space-y-4">
                  {[
                    ['The Story of the Universe', 'how matter, energy, stars, and planets came to be'],
                    ['The Story of Life', 'the long slow drama of living things on earth'],
                    ['The Story of Human Beings', 'how our species found fire, language, and each other'],
                    ['The Story of Writing', 'from pictograph to alphabet'],
                    ['The Story of Numbers', 'from tally marks to mathematics']
                  ].map(([title, desc], i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2.5 shrink-0" />
                      <p className="text-slate-600"><span className="text-slate-900 font-semibold">{title}:</span> {desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Language Arts', content: 'Reading, writing, grammar, composition, research, and storytelling. By Grade 6, children write with clarity and argue with evidence.' },
              { title: 'Mathematics', content: 'Four operations, fractions, decimals, geometry, ratio, and early algebraic thinking, all built from concrete materials.' },
              { title: 'Cultural Studies', content: 'History, geography, botany, zoology, and physical science, studied as a connected whole through timelines of life.' },
              { title: 'Going Out', content: 'Children plan and execute real expeditions to investigate questions they have developed themselves. Research in the truest sense.' }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-slate-50 rounded-[2rem] border border-slate-100 hover:shadow-lg transition-shadow"
              >
                <h4 className="text-lg font-bold text-slate-900 mb-4">{item.title}</h4>
                <p className="text-slate-500 leading-relaxed text-sm text-justify">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond the Classroom */}
      <section className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-xl md:text-3xl font-serif text-slate-900 mb-6 font-bold">Beyond the Classroom</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-normal text-justify md:text-center">
              Our co-curricular programme develops the whole child—physically, creatively, culturally, and socially. These are not extras, they extend the curriculum.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { category: 'Movement and Martial Arts', items: ['Karate', 'Silambam', 'Yoga', 'Sports'] },
              { category: 'Arts and Culture', items: ['Bharatanatyam', 'Choir', 'Visual Arts & Crafts'] },
              { category: 'Mind and Thinking', items: ['Chess', 'Public Speaking', 'Project Work'] },
              { category: 'Enrichment', items: ['Whole Brain Integration', 'Field Trips', 'Nature Study'] }
            ].map((group, i) => (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100"
              >
                <h4 className="text-purple-600 font-bold uppercase text-xs tracking-widest mb-6">{group.category}</h4>
                <ul className="space-y-4">
                  {group.items.map((item, j) => (
                    <li key={j} className="text-slate-900 font-medium flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full bg-slate-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions Callout */}
      <section className="py-40 px-6 bg-white relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-3xl font-serif text-slate-900 font-bold leading-tight">
              Take the first step
            </h2>
            <p className="text-base text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
              Every child at Divyataa begins with a school visit, a morning spent watching the children at work, asking every question you have, and seeing whether this is the right fit.
            </p>
            <Link 
              to="/contact"
              className="inline-block px-10 py-4 bg-purple-600 text-white rounded-full font-bold hover:bg-purple-700 transition-all hover:scale-105 shadow-xl shadow-purple-200"
            >
              Schedule a Visit
            </Link>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      </section>

      <Footer />
    </div>
  );
};

export default Curriculum;

