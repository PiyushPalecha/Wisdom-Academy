import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CourseCard from '../ui/CourseCard';
import { Search, X, CheckCircle2, Star, Users, GraduationCap, MapPin, Target } from 'lucide-react';

export default function CourseGallery() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      title: "Class 11 & 12 - PCM (Engineering Wing)",
      description: "A rigorous program designed for students aiming for Top Engineering Colleges. We bridge the gap between Board Exams and Competitive Entrance tests with a focus on logical reasoning and complex problem-solving.",
      features: ["JEE Mains & Advanced Prep", "Advanced Physics Lab", "Regular Mock Tests", "Personalized Mentorship"],
      syllabus: ["Physics (Mechanics to Quantum)", "Chemistry (Organic & Inorganic)", "Mathematics (Calculus & Algebra)", "English & Electives"],
      schedule: "Mon - Sat, 8:00 AM - 2:00 PM + Evening Doubt Sessions",
      requirements: "Minimum 75% in Class 10 Boards (Science & Maths).",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop",
      rating: 4.9,
      reviews: "1.2k",
      careerPath: "IITs, NITs, BITS, Data Science, Defense (NDA)",
      instructor: { name: "Dr. S. K. Khanna", avatar: "https://randomuser.me/api/portraits/men/32.jpg" }
    },
    {
      title: "Class 11 & 12 - PCB (Medical Wing)",
      description: "Preparing future doctors with a deep dive into Biological Sciences. Our curriculum focuses on memory-mapping techniques and intensive Biology lab work essential for medical entrance success.",
      features: ["NEET-UG Specialized Coaching", "Live Bio-Dissections", "Regular Mock NCERT Tests", "Mental Health Support"],
      syllabus: ["Botany & Zoology", "Human Physiology", "Physical & Organic Chemistry", "Modern Physics"],
      schedule: "Mon - Sat, 8:00 AM - 2:00 PM + Lab Sessions",
      requirements: "Minimum 75% in Class 10 Boards (Science).",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800&auto=format&fit=crop",
      rating: 4.9,
      reviews: "980",
      careerPath: "AIIMS, NEET, Biotechnology, Genetics, Pharmacy",
      instructor: { name: "Dr. Meera Iyer", avatar: "https://randomuser.me/api/portraits/women/45.jpg" }
    },
    {
      title: "Class 11 & 12 - Commerce (Specialized Accounts)",
      description: "Crafting future CEOs and Financial Analysts. We offer the most detailed Accountancy and Economics program in the region, focusing on real-world GST, Taxation, and Corporate Finance.",
      features: ["CA Foundation Integrated", "Stock Market Basics", "Tally & GST Training", "Business Case Studies"],
      syllabus: ["Financial Accountancy", "Macro & Micro Economics", "Business Studies", "Applied Mathematics/IP"],
      schedule: "Mon - Sat, 8:30 AM - 1:30 PM",
      requirements: "Interest in Finance and Business.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",
      rating: 4.8,
      reviews: "1.1k",
      careerPath: "Chartered Accountancy (CA), CS, Investment Banking, MBA",
      instructor: { name: "Prof. Rajesh V.", avatar: "https://randomuser.me/api/portraits/men/85.jpg" }
    },
    {
      title: "Class 9 & 10 - Foundation Excellence",
      description: "Crucial years for career building. We focus on conceptual clarity across all subjects to ensure students don't just 'pass', but master the skills required for senior streams.",
      features: ["NTSE/Olympiad Coaching", "Smart Classes", "Language Lab (English)", "Career Counseling"],
      syllabus: ["Science (Phy/Che/Bio)", "Maths (NCERT + Exemplar)", "Social Science", "Hindi/Sanskrit & IT"],
      schedule: "Mon - Fri, 8:00 AM - 1:30 PM",
      requirements: "Completion of Class 8.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
      rating: 4.7,
      reviews: "2.5k",
      careerPath: "Strong base for Science/Commerce/Humanities",
      instructor: { name: "Mrs. Anjali Roy", avatar: "https://randomuser.me/api/portraits/women/22.jpg" }
    }
  ];

  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="courses" className="py-24 bg-gradient-to-b from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary font-bold tracking-widest uppercase text-sm"
          >
            Admissions Open 2026-27
          </motion.span>
          <h2 className="text-5xl font-extrabold text-slate-900 tracking-tight">
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Curriculum</span>
          </h2>
          <p className="text-slate-600 text-lg">
            At Wisdom Academy, we don't just teach; we mentor. Explore our specialized streams designed to turn students into global leaders.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-16 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-blue-500" />
          </div>
          <input
            type="text"
            className="block w-full pl-12 pr-4 py-4 border-none rounded-2xl shadow-xl bg-white focus:ring-2 focus:ring-blue-500 transition-all font-medium text-slate-800 outline-none"
            placeholder="Search for Class 11, PCM, Commerce..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <motion.div 
                  key={course.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.25 }}
                >
                  <CourseCard {...course} onClick={() => setSelectedCourse(course)} />
                </motion.div>
              ))
            ) : (
              <motion.div 
                key="empty"
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full text-center text-slate-500 font-medium py-10"
              >
                No specialized stream found matching "{searchQuery}"
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Course Detail Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCourse(null)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
            />
            <motion.div 
              layoutId={selectedCourse.title}
              className="relative w-full max-w-6xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[95vh] z-10"
            >
              <button 
                onClick={() => setSelectedCourse(null)}
                className="absolute top-6 right-6 bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-600 p-2 rounded-full transition-all z-20"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Sidebar: Image & Quick Stats */}
              <div className="w-full md:w-[40%] bg-slate-900 relative min-h-[300px] md:min-h-auto">
                <img 
                  src={selectedCourse.image} 
                  alt={selectedCourse.title} 
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <span className="text-white/80 text-sm font-bold">({selectedCourse.reviews} Parents Enrolled)</span>
                  </div>
                  <h3 className="text-3xl font-black text-white mb-4 leading-tight">{selectedCourse.title}</h3>
                  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                    <img src={selectedCourse.instructor.avatar} className="w-12 h-12 rounded-full border-2 border-primary" />
                    <div>
                      <p className="text-xs text-blue-300 font-bold uppercase">Lead Faculty</p>
                      <p className="font-bold text-white text-lg">{selectedCourse.instructor.name}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="w-full md:w-[60%] p-8 md:p-12 overflow-y-auto">
                <div className="space-y-10">
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <GraduationCap className="text-primary" /> Academic Overview
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-lg italic">"{selectedCourse.description}"</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                      <h5 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5" /> Why Choose Us?
                      </h5>
                      <ul className="space-y-2">
                        {selectedCourse.features.map((f, i) => (
                          <li key={i} className="text-slate-700 text-sm font-medium flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                      <h5 className="font-bold text-indigo-900 mb-2 flex items-center gap-2">
                        <Target className="w-5 h-5" /> Future Career Path
                      </h5>
                      <p className="text-slate-700 text-sm font-semibold">{selectedCourse.careerPath}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-slate-900">Curriculum Highlights</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCourse.syllabus.map((item, idx) => (
                        <span key={idx} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-bold border border-slate-200">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 bg-slate-900 rounded-3xl text-white flex flex-col sm:flex-row justify-between items-center gap-6">
                    <div className="space-y-1 text-center sm:text-left">
                      <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Enrollment Status</p>
                      <h5 className="text-xl font-bold text-green-400">Limited Seats Remaining!</h5>
                    </div>
                    <button className="w-full sm:w-auto px-10 py-4 bg-primary hover:bg-blue-600 text-white font-black rounded-2xl transition-all transform hover:scale-105 shadow-xl">
                      APPLY FOR ADMISSION
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

// Ensure you have Lucide icons and Framer Motion installed: 
// npm install lucide-react framer-motion