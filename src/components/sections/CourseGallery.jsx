import { useState } from 'react';
import { motion } from 'framer-motion';
import CourseCard from '../ui/CourseCard';
import { Search } from 'lucide-react';

export default function CourseGallery() {
  const [searchQuery, setSearchQuery] = useState("");

  const courses = [
    {
      title: "Advanced Mathematics (Class 12)",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=600&auto=format&fit=crop",
      rating: 4.8,
      reviews: "1.5k",
      price: "120",
      lessons: "85",
      duration: "60h",
      instructor: { name: "Dr. Robert Smith", avatar: "https://randomuser.me/api/portraits/men/44.jpg" }
    },
    {
      title: "Core Biology & Sciences (Class 11)",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop",
      rating: 4.9,
      reviews: "920",
      price: "110",
      lessons: "70",
      duration: "55h",
      instructor: { name: "Dr. Emily Davis", avatar: "https://randomuser.me/api/portraits/women/32.jpg" }
    },
    {
      title: "Fundamentals of Agriculture (Class 10)",
      image: "https://images.unsplash.com/photo-1589134707106-2c5e536bb33f?q=80&w=600&auto=format&fit=crop",
      rating: 4.7,
      reviews: "850",
      price: "90",
      lessons: "50",
      duration: "40h",
      instructor: { name: "Prof. James Wilson", avatar: "https://randomuser.me/api/portraits/men/46.jpg" }
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
            Our Popular Courses at <span className="text-primary">Wisdom Academy</span>
          </h2>
          <p className="text-gray-600 text-lg font-medium">
            Explore our most popular programs and start enhancing your skills today. Top tier instructors with proven experience.
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
                <CourseCard {...course} />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center text-white font-medium py-10">
              No courses found matching "{searchQuery}"
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
