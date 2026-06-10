import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Curriculum from './pages/Curriculum';
import Gallery from './pages/Gallery';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-montessori" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/montessori-in-tirupur" element={<Experience />} />
        <Route path="/why-divyataa" element={<Curriculum />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}


export default App;


