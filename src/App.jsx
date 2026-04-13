import Navbar from './layouts/Navbar';
import Hero from './components/sections/Hero';
import PartnerBar from './components/sections/PartnerBar';
import FeatureGrid from './components/sections/FeatureGrid';
import CourseGallery from './components/sections/CourseGallery';
import Teacher from './components/sections/Teacher';
import Testimonials from './components/sections/Testimonials';
import Subscribe from './components/sections/Subscribe';
import Gallery from './components/sections/Gallery';
import Careers from './components/sections/Careers';
import Footer from './layouts/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white">
      <Navbar />
      <main>
        <Hero />
        <PartnerBar />
        <FeatureGrid />
        <CourseGallery />
        <Teacher />
        <div className="bg-gradient-to-b from-[#94a3fa] via-[#9e7cf5] to-[#ba68f3]">
          <Testimonials />
          <Subscribe />
        </div>
        <Gallery />
        <Careers />
      </main>
      <div className="bg-[#ba68f3]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
