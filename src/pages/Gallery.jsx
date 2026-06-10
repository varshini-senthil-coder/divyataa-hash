import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Video as VideoIcon } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Assets no longer used for gallery grid but keeping imports clean

const categories = [
  { id: 'all', label: 'All' },
  { id: 'classroom', label: 'Classroom Life' },
  { id: 'sports', label: 'Sports and Co-Curricular' },
  { id: 'campus', label: 'Campus and Spaces' },
  { id: 'events', label: 'Events and Annual Day' },
];

const galleryItems = [
  { type: 'video', category: 'events', id: 'hG-e0nbh5bM', title: "Principal's address" },
  { type: 'video', category: 'events', id: 'ysi8Zr5IpI4', title: "Convocation" },
  { type: 'video', category: 'sports', id: 'KTVIJMbVOr4', title: "Bhangra dance" },
  { type: 'video', category: 'sports', id: '5QPd0GmTRx0', title: "The spirit of beauty dance" },
  { type: 'video', category: 'sports', id: 'GeBOLtLPHEw', title: "Devotional Dance" },
  { type: 'video', category: 'classroom', id: 'x6BTxMcNfFI', title: "Skit - Battle of wits, chess board alive" },
  { type: 'video', category: 'classroom', id: 'Wx3vbvB6GFI', title: "Speech - Happy days at Divyataa" },
  { type: 'video', category: 'classroom', id: 'gH_cnJ2fMts', title: "Dance Skit - Social Media and screen time awareness" },
  { type: 'video', category: 'events', id: 'bNjSrTw7sLA', title: "Mom & Me dance" },
  { type: 'video', category: 'sports', id: 'WvaN5xkkWd4', title: "Karate Performance" },
  { type: 'video', category: 'sports', id: 'uLw-UkgPDxQ', title: "Colours of nature dance" },
  { type: 'video', category: 'sports', id: 'AN88vvBB4Ko', title: "Yoga Performance" },
  { type: 'video', category: 'campus', id: 'FIIT7RBansI', title: "A year in review" },
  { type: 'video', category: 'events', id: '3urrM1tUwG0', title: "Welcome dance" },
  { type: 'video', category: 'events', id: '3aXeIFhULLM', title: "Welcome song" },
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [filteredItems, setFilteredItems] = useState(galleryItems);

  useEffect(() => {
    if (activeTab === 'all') {
      setFilteredItems(galleryItems);
    } else {
      setFilteredItems(galleryItems.filter(item => item.category === activeTab));
    }
  }, [activeTab]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen selection:bg-purple-100">
      <Navbar />

      {/* Video Banner Hero */}
      <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden flex items-center justify-center">
        {/* Background Video (Muted Autoplay) */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-900/40 z-10" /> {/* Overlay */}
          <div className="absolute inset-0 w-full h-full">
            <iframe
              className="absolute w-[180%] h-[180%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none scale-110 md:scale-100"
              src="https://www.youtube.com/embed/FIIT7RBansI?autoplay=1&mute=1&controls=0&loop=1&playlist=FIIT7RBansI&showinfo=0&rel=0&modestbranding=1&disablekb=1&fs=0"
              title="Gallery Banner Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight font-bold">
              Gallery
            </h1>
            <div className="w-20 h-1 bg-purple-500 mx-auto mb-8" />
            <p className="text-lg md:text-xl text-white font-normal leading-relaxed max-w-4xl mx-auto italic drop-shadow-md text-justify md:text-center">
              What learning looks like when children are trusted, respected, and given the right conditions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters/Tabs Section */}
      <section className="sticky top-[80px] z-40 bg-white/80 backdrop-blur-xl border-b border-slate-100 py-6 px-6 overflow-x-auto scrollbar-hide">
        <div className="max-w-7xl mx-auto flex items-center justify-start md:justify-center gap-2 md:gap-4 min-w-max">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-purple-600 rounded-full shadow-lg shadow-purple-200"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Media Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto min-h-[600px]">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id || item.src}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ 
                  type: "spring",
                  stiffness: 500,
                  damping: 35,
                  mass: 1,
                  opacity: { duration: 0.2 }
                }}
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer aspect-square"
                onClick={() => setSelectedMedia(item)}
              >
                {/* Media Thumbnail */}
                <img
                  src={item.type === 'video' ? `https://img.youtube.com/vi/${item.id}/maxresdefault.jpg` : item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    if (item.type === 'video') e.target.src = `https://img.youtube.com/vi/${item.id}/hqdefault.jpg`;
                  }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="flex items-center gap-3 mb-1">
                    <VideoIcon className="text-purple-400" size={16} />
                    <span className="text-white/70 text-[10px] font-bold tracking-widest uppercase">{item.category}</span>
                  </div>
                  <h3 className="text-white text-lg font-serif">{item.title}</h3>
                </div>

                {/* Play Button for Videos */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 transform group-hover:scale-110 transition-transform duration-300">
                      <Play className="text-white fill-white ml-1" size={20} />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Media Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          >
            <div 
              className="absolute inset-0 bg-slate-900/95 backdrop-blur-md"
              onClick={() => setSelectedMedia(null)}
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl z-10 bg-black"
            >
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20 backdrop-blur-md"
              >
                <X size={24} />
              </button>

                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedMedia.id}?autoplay=1`}
                    title={selectedMedia.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              
              <div className="p-6 bg-slate-900 text-center">
                <h3 className="text-white text-xl font-serif">{selectedMedia.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gallery;

