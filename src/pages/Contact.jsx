import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/divyataa.info@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          _subject: `New Enquiry from ${data.parent_name} - Divyataa School`
        })
      });

      if (response.ok) {
        setFormStatus('success');
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again or call us directly.");
      setFormStatus('idle');
    }
  };

  const contactDetails = [
    {
      icon: <Phone className="text-purple-600" size={24} />,
      title: 'Phone and WhatsApp',
      content: '97511 12300   ·   84284 12300',
    },
    {
      icon: <Mail className="text-purple-600" size={24} />,
      title: 'Email',
      content: 'divyataa.info@gmail.com',
    },
    {
      icon: <Clock className="text-purple-600" size={24} />,
      title: 'School hours',
      content: 'Monday to Friday   ·   9:00 am to 4:00 pm',
    },
    {
      icon: <MapPin className="text-purple-600" size={24} />,
      title: 'Address',
      content: '#76/6, Angeripalayam Main Road, Tirupur 641 603, Tamil Nadu, India',
    },
  ];

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-purple-100">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-50 pb-12 px-6 bg-slate-50 overflow-hidden border-b border-slate-100">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-widest mb-6"
          >
            Get In Touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-4xl font-serif text-slate-900 mb-8 font-bold leading-tight"
          >
            We'd love to meet <br className="hidden md:block" /> your family
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto font-normal text-justify md:text-center"
          >
            The first step is always a conversation, or better yet, a morning visit to see the children at work.
          </motion.p>
        </div>
      </section>

      {/* Main Content: Form & Details */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {formStatus === 'success' ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-20 text-center space-y-6"
                  >
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 className="text-green-500" size={40} />
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-slate-900">Thank you.</h2>
                    <p className="text-lg text-slate-700 leading-relaxed max-w-md mx-auto font-normal text-justify md:text-center">
                      We've received your enquiry and will be in touch within two working days. 
                      We look forward to meeting your family.
                    </p>
                    <button 
                      onClick={() => setFormStatus('idle')}
                      className="text-purple-600 font-bold hover:underline pt-4"
                    >
                      Send another enquiry
                    </button>
                  </motion.div>
                ) : (
                  <motion.div key="form" exit={{ opacity: 0, y: -20 }}>
                    <h2 className="text-2xl font-serif font-bold text-slate-900 mb-10">Enquiry Form</h2>
                    <form onSubmit={handleSubmit} className="space-y-8">
                      {/* FormSubmit.co Config */}
                      <input type="hidden" name="_captcha" value="false" />
                      <input type="hidden" name="_template" value="table" />
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Parent Name */}
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Parent / Guardian Name *</label>
                          <input 
                            required
                            name="parent_name"
                            type="text" 
                            placeholder="Your full name"
                            className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-100 focus:border-purple-500 outline-none transition-all placeholder:text-slate-300 text-lg"
                          />
                        </div>
                        {/* Child Name */}
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Child's Name *</label>
                          <input 
                            required
                            name="child_name"
                            type="text" 
                            placeholder="Your child's name"
                            className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-100 focus:border-purple-500 outline-none transition-all placeholder:text-slate-300 text-lg"
                          />
                        </div>
                        {/* Child Age */}
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Child's Age *</label>
                          <input 
                            required
                            name="child_age"
                            type="number" 
                            placeholder="Age in years"
                            className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-100 focus:border-purple-500 outline-none transition-all placeholder:text-slate-300 text-lg"
                          />
                        </div>
                        {/* Phone Number */}
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Phone Number *</label>
                          <input 
                            required
                            name="phone_number"
                            type="tel" 
                            placeholder="We'll WhatsApp you here"
                            className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-100 focus:border-purple-500 outline-none transition-all placeholder:text-slate-300 text-lg"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Email Address (optional)</label>
                        <input 
                          name="email"
                          type="email" 
                          placeholder="your@email.com"
                          className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-100 focus:border-purple-500 outline-none transition-all placeholder:text-slate-300 text-lg"
                        />
                      </div>

                      {/* Programme Dropdown */}
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Programme of Interest *</label>
                        <select 
                          required
                          name="programme"
                          className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-100 focus:border-purple-500 outline-none transition-all text-lg cursor-pointer"
                        >
                          <option value="">Select a programme</option>
                          <option value="kg">KG (Ages 3 to 5)</option>
                          <option value="lower">Lower Elementary (Grades 1 to 3)</option>
                          <option value="upper">Upper Elementary (Grades 4 to 6)</option>
                          <option value="not-sure">Not sure yet</option>
                        </select>
                      </div>

                      {/* Source Dropdown */}
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">How did you hear about us? *</label>
                        <select 
                          required
                          name="referral_source"
                          className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-100 focus:border-purple-500 outline-none transition-all text-lg cursor-pointer"
                        >
                          <option value="">Choose an option</option>
                          <option value="word">Word of mouth</option>
                          <option value="google">Google Search</option>
                          <option value="instagram">Instagram</option>
                          <option value="drive">Drive-by</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Message (optional)</label>
                        <textarea 
                          name="message"
                          rows="3"
                          placeholder="Any questions or anything you'd like us to know"
                          className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-100 focus:border-purple-500 outline-none transition-all resize-none placeholder:text-slate-300 text-lg"
                        ></textarea>
                      </div>

                      <button 
                        type="submit"
                        disabled={formStatus === 'sending'}
                        className="w-full bg-slate-900 hover:bg-purple-600 text-white font-bold py-6 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3 group disabled:opacity-50"
                      >
                        {formStatus === 'sending' ? (
                          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            Send Enquiry
                            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-10">Contact Details</h2>
              <div className="space-y-10">
                {contactDetails.map((detail, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center shrink-0">
                      {detail.icon}
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">{detail.title}</h3>
                      <p className="text-lg text-slate-800 font-medium whitespace-pre-line leading-relaxed">
                        {detail.content}
                      </p>
                      {detail.note && (
                        <p className="text-sm text-slate-700 italic pt-1">{detail.note}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Map Integration */}
            <div className="rounded-[2rem] overflow-hidden shadow-lg border border-slate-100 h-[300px] relative">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14884.40120274826!2d77.332928!3d11.128163!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9074e70a1b233%3A0x7fcff7033eb25aec!2sDIVYATAA-International%20School!5e0!3m2!1sen!2sin!4v1776306643085!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                className=""
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

