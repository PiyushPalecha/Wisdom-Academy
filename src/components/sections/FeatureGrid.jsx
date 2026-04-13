import { UserCheck, BookOpen, Clock, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FeatureGrid() {
  const benefits = [
    { title: "One-on-One Tutoring", desc: "Get personalized guidance from expert educators tailored to your learning style.", icon: UserCheck },
    { title: "500+ Courses", desc: "Access a massive library of courses across various domains and skill levels.", icon: BookOpen },
    { title: "Lifetime Access", desc: "Learn at your own pace with unlimited access to your enrolled courses forever.", icon: Clock },
    { title: "Verified Certificates", desc: "Earn certificates recognized by top institutions and companies globally.", icon: Award },
  ];

  return (
    <section id="offers" className="py-24 bg-[#eaf4ff]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Grid */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 max-w-md mx-auto relative px-4"
        >
           <div className="absolute inset-0 bg-primary/5 rounded-[40px] -z-10 scale-110"></div>
           <div className="rounded-tl-[40px] rounded-br-[40px] overflow-hidden bg-accent aspect-square shadow-lg">
              <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover mix-blend-multiply opacity-80" alt="Student" />
           </div>
           <div className="rounded-tr-[40px] rounded-bl-[40px] overflow-hidden bg-pink-400 aspect-square shadow-lg">
              <img src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover mix-blend-multiply opacity-80" alt="Student" />
           </div>
           <div className="rounded-tr-[40px] rounded-bl-[40px] overflow-hidden bg-white shadow-xl aspect-square p-2 mt-4 -ml-4">
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover rounded-tr-[32px] rounded-bl-[32px]" alt="Student" />
           </div>
           <div className="rounded-tl-[40px] rounded-br-[40px] overflow-hidden bg-green-400 aspect-square shadow-lg mt-4">
              <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover mix-blend-multiply opacity-80" alt="Student" />
           </div>
        </motion.div>

        {/* Right Content */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div className="space-y-4">
            <h2 className="text-4xl font-extrabold text-blue-950 leading-tight">
              <span className="text-primary">Benefits</span> From Our Online Learning
            </h2>
            <p className="text-gray-600 text-lg font-medium">
              We provide the best online learning experience to help you achieve your goals and dreams.
            </p>
          </div>
          <div className="space-y-8">
            {benefits.map((item, i) => (
              <div key={i} className="flex gap-5 group">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-soft-bg flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
