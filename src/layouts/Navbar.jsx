import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Button from '../components/ui/Button';

const navLinks = [
  { label: 'Home', href: '#home' },
  { 
    label: 'About Us', 
    href: '#about',
    subLinks: [
      { label: 'Principal’s Message', href: '#principals-message' },
      { label: 'Vision & Mission', href: '#vision-mission' },
      { label: 'School History', href: '#school-history' },
      { label: 'Faculty/Staff Directory', href: '#faculty-staff' },
    ]
  },
  { 
    label: 'Academics', 
    href: '#academics',
    subLinks: [
      { label: 'Curriculum (RBSE)', href: '#curriculum' },
      { label: 'Subjects', href: '#subjects' },
    ]
  },
  { 
    label: 'Admissions', 
    href: '#admissions',
    subLinks: [
      { label: 'Fee Structure', href: '#fee-structure' },
      { label: 'How to Apply', href: '#how-to-apply' },
      { label: 'Age Criteria', href: '#age-criteria' },
    ]
  },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileDropdown = (label) => {
    setOpenMobileDropdown(openMobileDropdown === label ? null : label);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold text-gray-900 tracking-tight">Wisdom<span className="text-primary">Academy</span></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              <a 
                href={link.href} 
                className="flex items-center text-gray-600 hover:text-primary transition-colors font-medium py-2"
              >
                {link.label} 
                {link.subLinks && <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />}
              </a>
              {link.subLinks && (
                <div className="absolute top-[100%] left-0 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white border border-gray-100 rounded-xl shadow-xl py-2 transform origin-top translate-y-2 group-hover:translate-y-0 transition-transform duration-200">
                    {link.subLinks.map((subLink) => (
                      <a 
                        key={subLink.label} 
                        href={subLink.href} 
                        className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary hover:pl-6 transition-all duration-200 font-medium"
                      >
                        {subLink.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Enroll Button (Replacement for Auth) */}
        <div className="hidden lg:flex items-center">
          <Button href="#contact">Enroll Now</Button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-gray-600 p-2 -mr-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 max-h-[85vh] overflow-y-auto bg-white shadow-2xl border-t py-4 px-6 flex flex-col space-y-2">
          {navLinks.map((link) => (
            <div key={link.label} className="flex flex-col">
              <div 
                className="flex items-center justify-between py-2"
                onClick={() => link.subLinks ? toggleMobileDropdown(link.label) : setIsMobileMenuOpen(false)}
              >
                <a 
                  href={link.subLinks ? '#' : link.href} 
                  className={`font-medium ${openMobileDropdown === link.label ? 'text-primary' : 'text-gray-900'}`}
                  onClick={(e) => link.subLinks && e.preventDefault()}
                >
                  {link.label}
                </a>
                {link.subLinks && (
                  <button className="p-1 text-gray-500">
                    <ChevronDown className={`w-4 h-4 transition-transform ${openMobileDropdown === link.label ? 'rotate-180' : ''}`} />
                  </button>
                )}
              </div>
              
              {/* Mobile Submenu */}
              {link.subLinks && openMobileDropdown === link.label && (
                <div className="flex flex-col pl-4 space-y-2 border-l-2 border-primary/20 mt-2 mb-2">
                  {link.subLinks.map((subLink) => (
                    <a 
                      key={subLink.label} 
                      href={subLink.href} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-600 text-sm py-1.5 font-medium hover:text-primary transition-colors"
                    >
                      {subLink.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-6 border-t mt-4 pb-6">
            <Button href="#contact" className="w-full shadow-md" onClick={() => setIsMobileMenuOpen(false)}>Enroll Now</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
