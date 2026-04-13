import Button from '../ui/Button';
import { motion } from 'framer-motion';

export default function Teacher() {
  return (
    <section id="teachers" className="py-24 bg-[#eaf4ff] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-extrabold text-blue-950 leading-tight">
            Become a Teacher at <br/>
            <span className="text-primary">Wisdom Academy</span>
          </h2>
          <p className="text-gray-600 text-lg font-medium leading-relaxed">
            Instructors from around the world teach millions of established learners on Wisdom Academy. We provide the tools and skills to teach what you love. Join our platform and inspire the next generation.
          </p>
          <ul className="space-y-4 text-gray-700 font-medium">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary" /> Build your brand
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary" /> Inspire thousands of students
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary" /> Flexible schedule
            </li>
          </ul>
          <Button className="px-8 py-3.5 text-lg mt-4">Start Teaching Today</Button>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative max-w-md mx-auto"
        >
          <div className="absolute inset-0 bg-primary rounded-full scale-105 -z-10 translate-x-4 -translate-y-4"></div>
          <div className="rounded-[40px] overflow-hidden bg-accent shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
              alt="Teacher" 
              className="w-full h-[500px] object-cover mix-blend-normal"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
