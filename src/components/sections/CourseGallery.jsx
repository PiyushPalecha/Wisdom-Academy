import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CourseCard from '../ui/CourseCard';
import { Search, X, CheckCircle2 } from 'lucide-react';

export default function CourseGallery() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      title: "Class 12 - Advanced Mathematics",
      description: "Learn advanced math concepts like Calculus, Algebra, and Probability in a very simple way. Our teachers will help you solve problems easily and prepare well for your final board exams.",
      features: ["Daily Practice Papers", "Weekly Tests", "Doubt Clearing Sessions"],
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=600&auto=format&fit=crop",
      rating: 4.8,
      reviews: "1.5k",
      instructor: { name: "Mr. R. Sharma", avatar: "https://randomuser.me/api/portraits/men/44.jpg" }
    },
    {
      title: "Class 10 - Complete Science",
      description: "A complete study of Physics, Chemistry, and Biology. We focus on practical knowledge and provide easy-to-understand notes so students can learn without stress.",
      features: ["Practical Lab Work", "Chapter-wise Notes", "Board Exam Focus"],
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop",
      rating: 4.9,
      reviews: "920",
      instructor: { name: "Mrs. A. Gupta", avatar: "https://randomuser.me/api/portraits/women/32.jpg" }
    },
    {
      title: "Class 11 - Commerce & Accounts",
      description: "A great start for students taking Commerce. We teach Accountancy and Business Studies in simple English with real-life examples from Indian businesses.",
      features: ["Real-world Examples", "Career Guidance", "Interactive Classes"],
      image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=600&auto=format&fit=crop",
      rating: 4.7,
      reviews: "850",
      instructor: { name: "Mr. V. Verma", avatar: "https://randomuser.me/api/portraits/men/46.jpg" }
    }
  ];

  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="courses" className="py-24 bg-gradient-to-b from-[#94a3fa] via-[#9e7cf5] to-[#ba68f3]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <h2 className="text-4xl font-extrabold text-blue-950">
            Our Main Classes at <span className="text-primary">Wisdom Academy</span>
          </h2>
          <p className="text-gray-600 text-lg font-medium">
            Read about our offline school classes. We provide the best education in your city with experienced teachers and simple learning methods.
          </p>
        </div>

        {/* Real-time Search Engine */}
        <div className="max-w-md mx-auto mb-16 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-11 pr-4 py-3.5 border-none rounded-full shadow-lg bg-white/90 backdrop-blur-sm focus:ring-4 focus:ring-primary/50 transition-all font-medium text-gray-800 placeholder-gray-400"
            placeholder="Search Courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, i) => (
              <motion.div key={i} variants={itemVariants}>
                <CourseCard {...course} onClick={() => setSelectedCourse(course)} />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center text-white font-medium py-10">
              No courses found matching "{searchQuery}"
            </div>
          )}
        </motion.div>
      </div>

      {/* Course Detail Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCourse(null)}
              className="fixed inset-0 bg-[#0f172a]/60 backdrop-blur-md z-[90]"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-4xl bg-white rounded-[2rem] overflow-hidden z-[100] shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              <button 
                  onClick={() => setSelectedCourse(null)}
                  className="absolute top-4 right-4 bg-white/70 hover:bg-white text-gray-900 p-2 rounded-full transition-all shadow-sm z-10"
              >
                  <X className="w-5 h-5" />
              </button>

              {/* Left Side: Image container */}
              <div className="relative w-full md:w-[45%] h-64 md:h-auto flex-shrink-0 bg-gray-100">
                <img 
                  src={selectedCourse.image} 
                  alt={selectedCourse.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-block bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-3">
                    Premium Class
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold mb-5 leading-tight">{selectedCourse.title}</h3>
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 shadow-lg">
                    <img src={selectedCourse.instructor.avatar} alt="Teacher" className="w-11 h-11 rounded-full border-2 border-white/80 object-cover" />
                    <div>
                      <p className="text-[11px] text-blue-100 font-bold uppercase tracking-wider mb-0.5">Taught By</p>
                      <p className="font-bold text-white text-[15px]">{selectedCourse.instructor.name}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Side: Content */}
              <div className="w-full md:w-[55%] p-6 sm:p-10 flex flex-col overflow-y-auto">
                <div className="flex-1 space-y-8">
                  <div>
                    <h4 className="text-xl font-extrabold text-blue-950 mb-3">
                      About the Class
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-[15px]">{selectedCourse.description}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-xl font-extrabold text-blue-950">What we provide</h4>
                    <div className="grid gap-3">
                      {selectedCourse.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-4 bg-gray-50/80 p-3.5 rounded-xl border border-gray-100/80 hover:bg-blue-50/50 hover:border-blue-100 transition-colors">
                          <div className="bg-green-100 p-1.5 rounded-full shadow-sm">
                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                          </div>
                          <span className="font-semibold text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-gray-100 flex justify-end">
                  <button 
                    onClick={() => setSelectedCourse(null)}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-extrabold py-3.5 px-8 rounded-xl transition-colors w-full sm:w-auto shadow-sm"
                  >
                    Close Details
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
