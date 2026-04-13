import { motion } from 'framer-motion';

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyles = "px-6 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center justify-center";
  const variants = {
    primary: "bg-primary text-white shadow-lg hover:shadow-xl hover:bg-[#6b42dd] shadow-primary/30",
    secondary: "bg-white text-primary border border-primary/20 shadow hover:shadow-md",
    outline: "border-2 border-primary text-primary hover:bg-primary/5",
    ghost: "text-gray-600 hover:text-primary hover:bg-primary/5"
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
