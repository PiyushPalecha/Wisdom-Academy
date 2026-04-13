import { Star, Clock, Video } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CourseCard({ title, image, rating, reviews, price, lessons, duration, instructor }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white rounded-[24px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col"
    >
      <div className="relative">
        <img src={image} alt={title} className="w-full h-56 object-cover" />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-sm font-bold text-gray-900 shadow-sm">
          ${price}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex gap-2 items-center text-accent mb-3">
          <Star className="w-4 h-4 fill-current" />
          <span className="text-sm font-bold text-gray-900">{rating}</span>
          <span className="text-sm text-gray-500 font-medium">({reviews} reviews)</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2">{title}</h3>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 font-medium">
          <div className="flex items-center gap-1.5"><Video className="w-4 h-4 text-primary" /> {lessons} Lessons</div>
          <div className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-primary" /> {duration}</div>
        </div>

        <div className="mt-auto pt-4 border-t flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={instructor.avatar} alt={instructor.name} className="w-8 h-8 rounded-full" />
            <span className="text-sm font-bold text-gray-900">{instructor.name}</span>
          </div>
          <button className="text-primary font-bold hover:text-[#6b42dd] text-sm transition-colors">View details</button>
        </div>
      </div>
    </motion.div>
  );
}
