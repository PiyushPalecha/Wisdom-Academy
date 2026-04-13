export default function Footer() {
  return (
    <footer id="contact" className="text-white pt-44 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        <div className="col-span-2 md:col-span-1 space-y-6">
          <h3 className="text-3xl font-bold tracking-tight">Wisdom<span className="text-accent">Academy</span></h3>
          <p className="text-white/90 font-medium pr-4 leading-relaxed">
            Innovative learning for a changing world. We empower you to achieve excellence.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 cursor-pointer transition-colors shadow-lg font-bold">in</div>
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 cursor-pointer transition-colors shadow-lg font-bold">tw</div>
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 cursor-pointer transition-colors shadow-lg font-bold">fb</div>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-6">Company</h4>
          <ul className="space-y-4 text-white/80 font-semibold">
            <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Helpful Links</h4>
          <ul className="space-y-4 text-white/80 font-semibold">
            <li><a href="#" className="hover:text-accent transition-colors">Courses plan</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Teacher directory</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Contact</h4>
          <ul className="space-y-4 text-white/80 font-semibold">
            <li>hello@wisdomacad.edu</li>
            <li>+1 (555) 123-4567</li>
            <li>123 Edu Lane, NY</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-white/20 pt-8 text-center text-white/60 font-medium">
        &copy; {new Date().getFullYear()} Wisdom Academy. All rights reserved.
      </div>
    </footer>
  );
}
