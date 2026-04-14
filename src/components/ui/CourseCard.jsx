import { Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export default function CourseCard({ title, image, rating, reviews, instructor, onClick }) {
  return (
    <motion.article 
      whileHover={{ y: -10 }}
      className="bg-white rounded-[24px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full cursor-pointer border border-gray-100"
      onClick={onClick}
    >
      <div className="relative">
        <img src={image} alt={title} loading="lazy" className="w-full h-56 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex gap-2 items-center text-amber-500 mb-3">
          <Star className="w-4 h-4 fill-current" />
          <span className="text-sm font-bold text-gray-900">{rating}</span>
          <span className="text-sm text-gray-500 font-medium">({reviews} students)</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2">{title}</h3>
        
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={instructor.avatar} alt={instructor.name} loading="lazy" className="w-9 h-9 rounded-full object-cover border-2 border-primary/20" />
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 font-medium">Teacher</span>
              <span className="text-sm font-bold text-gray-900">{instructor.name}</span>
            </div>
          </div>
          <button className="flex items-center gap-1 text-primary font-bold hover:text-blue-700 text-sm transition-colors bg-blue-50 py-1.5 px-3 rounded-full hover:bg-blue-100">
            Details <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

CourseCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  reviews: PropTypes.string.isRequired,
  instructor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired
};
