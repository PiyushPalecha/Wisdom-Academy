import { motion } from 'framer-motion';
import { BookOpen, Library, GraduationCap, Microscope, Code, Globe, Palette, Calculator } from 'lucide-react';

export default function Academics() {
  const subjects = [
    { name: "Advanced Mathematics", icon: <Calculator className="w-5 h-5" /> },
    { name: "Sciences (Physics, Chemistry, Bio)", icon: <Microscope className="w-5 h-5" /> },
    { name: "Computer Science & IT", icon: <Code className="w-5 h-5" /> },
    { name: "Languages & Literature", icon: <Globe className="w-5 h-5" /> },
    { name: "Fine Arts & Design", icon: <Palette className="w-5 h-5" /> },
    { name: "Social Sciences", icon: <BookOpen className="w-5 h-5" /> },
  ];

  return (
    <section id="academics" className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-6 space-y-32">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3 block">Excellence in Education</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-950 mb-6">Academics at Wisdom</h2>
          <p className="text-gray-600 text-lg">We provide a rigorous, globally-recognized academic program designed to challenge students and foster a deep love for learning.</p>
        </div>

        {/* Curriculum Section */}
        <motion.div id="curriculum" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
              <GraduationCap className="w-7 h-7" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">RBSE Curriculum & Competitive Edge</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              We follow the **Rajasthan Board of Secondary Education (RBSE)**, ensuring a strong academic foundation rooted in local excellence and national standards. Beyond the standard syllabus, we provide specialized focus for higher secondary students.
            </p>
            <div className="space-y-4 pt-2">
              <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-xl">
                <h4 className="font-bold text-gray-900 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-primary" /> NEET & JEE Preparation
                </h4>
                <p className="text-gray-600 text-sm mt-1">
                  Integrated coaching classes for students of **Grades 10, 11, and 12**. We bridge the gap between board exams and competitive success with expert mentorship.
                </p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-semibold text-gray-700">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Strategic Study Material</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Weekly Mock Assessments</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Expert Faculty Panel</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Personalized Mentorship</li>
              </ul>
            </div>
          </div>
          <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop" alt="Students studying for exams" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 to-transparent"></div>
          </div>
        </motion.div>

        {/* Subjects Section */}
        <motion.div id="subjects" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-3xl p-10 md:p-16 shadow-lg shadow-gray-200/50">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Core Subjects</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Our diverse range of subjects ensures a well-rounded education, allowing students to explore various fields before choosing their specialization.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, idx) => (
              <div key={idx} className="p-6 border border-gray-100 rounded-2xl hover:border-primary/30 hover:shadow-md transition-all group cursor-pointer bg-gray-50 hover:bg-white">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  {subject.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900">{subject.name}</h4>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
