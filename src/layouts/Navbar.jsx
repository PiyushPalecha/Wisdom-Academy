import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Button from '../components/ui/Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold text-gray-900 tracking-tight">Wisdom<span className="text-primary">Academy</span></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#courses" className="flex items-center text-gray-600 hover:text-primary transition-colors font-medium">
            Courses <ChevronDown className="ml-1 w-4 h-4" />
          </a>
          <a href="#teachers" className="text-gray-600 hover:text-primary transition-colors font-medium">Teachers</a>
          <a href="#offers" className="text-gray-600 hover:text-primary transition-colors font-medium">Offers</a>
          <a href="#gallery" className="text-gray-600 hover:text-primary transition-colors font-medium">Gallery</a>
          <a href="#careers" className="text-gray-600 hover:text-primary transition-colors font-medium">Careers</a>
          <a href="#contact" className="text-gray-600 hover:text-primary transition-colors font-medium">Contact</a>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="!px-4">Log In</Button>
          <Button>Sign Up</Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t py-4 px-6 flex flex-col space-y-4">
          <a href="#courses" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 font-medium">Courses</a>
          <a href="#teachers" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 font-medium">Teachers</a>
          <a href="#offers" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 font-medium">Offers</a>
          <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 font-medium">Gallery</a>
          <a href="#careers" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 font-medium">Careers</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 font-medium">Contact</a>
          <div className="flex flex-col space-y-2 pt-4 border-t">
            <Button variant="outline" className="w-full">Log In</Button>
            <Button className="w-full">Sign Up</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
