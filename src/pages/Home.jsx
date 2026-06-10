import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import WelcomeSection from '../components/WelcomeSection';
import Features from '../components/Features';
import ImageSection from '../components/ImageSection';
import StatsStrip from '../components/StatsStrip';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import CentralFlowerBackground from '../CentralFlowerBackground';
import { useRef } from 'react';

const Home = () => {
  const sectionsRef = useRef(null);

  return (
    <>
      <Navbar />
      <Banner />
      <div ref={sectionsRef} className="relative bg-white">
        <CentralFlowerBackground sectionsRef={sectionsRef} />
        <WelcomeSection />
        <Features />
        <ImageSection />
        <StatsStrip />
        <Testimonials />
        <CTA />
      </div>
      <Footer />
    </>
  );
};

export default Home;

