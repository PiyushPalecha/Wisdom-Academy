import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { Play, Star, BookOpen } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#eaf4ff]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h1 className="text-5xl lg:text-[4rem] font-extrabold text-blue-950 leading-[1.1]">
            Innovative Learning <br/>
            for a Changing<br/>
            World
          </h1>
          <p className="text-lg text-gray-600 max-w-lg leading-relaxed font-medium">
             Elevate your knowledge with diverse courses. Discover a world of interactive learning tailored just for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
            <Button className="w-full sm:w-auto px-8 py-3.5 text-lg">Enroll Now</Button>
            <button className="flex items-center gap-3 text-gray-700 font-semibold hover:text-primary transition-colors group">
              <div className="w-12 h-12 rounded-full bg-white shadow-lg shadow-purple-900/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <Play className="w-4 h-4 ml-1 fill-current" />
              </div>
              Watch Demo
            </button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative lg:h-[600px] flex justify-center items-center"
        >
          {/* Circular Purple Background matching reference */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary rounded-full -z-10"></div>
          {/* Dashed outer circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border-[1px] border-dashed border-primary/40 rounded-full -z-10"></div>
          
          <img 
            src="https://images.unsplash.com/photo-1531548731165-c6ae86ff6491?q=80&w=800&auto=format&fit=crop" 
            alt="Student learning" 
            className="w-full max-w-[400px] h-[500px] object-cover object-top z-10 rounded-b-full drop-shadow-2xl"
            style={{ clipPath: 'inset(0 0 0 0 round 200px 200px 0 0)'}}
          />
          
          {/* Floating UI Elements */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 top-1/3 bg-white/70 backdrop-blur-md p-3 px-4 rounded-xl shadow-xl flex items-center gap-3 z-20 border border-white"
          >
            <div className="w-10 h-10 rounded-full bg-accent text-blue-900 flex items-center justify-center"><Star className="w-5 h-5 fill-current" /></div>
            <div>
              <p className="text-sm font-extrabold text-gray-900">250+</p>
              <p className="text-xs text-gray-500 font-medium">Tutors</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-0 bottom-1/4 bg-white/70 backdrop-blur-md p-3 px-4 rounded-xl shadow-xl flex items-center gap-3 z-20 border border-white"
          >
             <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center"><BookOpen className="w-5 h-5" /></div>
            <div>
              <p className="text-sm font-extrabold text-gray-900">10k+</p>
              <p className="text-xs text-gray-500 font-medium">Active Students</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
