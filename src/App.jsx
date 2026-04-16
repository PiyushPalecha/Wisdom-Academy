import Navbar from './layouts/Navbar';
import Hero from './components/sections/Hero';
import PartnerBar from './components/sections/PartnerBar';
import CourseGallery from './components/sections/CourseGallery';
import AboutUs from './components/sections/AboutUs';
import Academics from './components/sections/Academics';
import Admissions from './components/sections/Admissions';
import Testimonials from './components/sections/Testimonials';
import Subscribe from './components/sections/Subscribe';
import Gallery from './components/sections/Gallery';
import Careers from './components/sections/Careers';
import Contact from './components/sections/Contact';
import Footer from './layouts/Footer';
import { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white shadow-xl max-w-[100vw] overflow-x-hidden">
      <Toaster position="bottom-right" />
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col overflow-hidden"
      >
        <Hero />
        <PartnerBar />
        <div className="h-12 md:h-20" /> {/* Explicit Spacer */}
        
        <AboutUs />
        <Academics />
        <CourseGallery />

        <div className="bg-gradient-to-b from-[#94a3fa] via-[#9e7cf5] to-[#ba68f3]">
          <Testimonials />
          <Subscribe />
        </div>
        
        <Admissions />
        <Gallery />
        <Careers />
        <Contact />
      </motion.main>
      <div className="bg-[#ba68f3]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
