import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Briefcase, CheckCircle, Upload } from 'lucide-react';

const jobs = [
  { id: 1, title: "Senior Mathematics Teacher", type: "Full-Time", location: "On-site", description: "Looking for an experienced educator to lead our advanced mathematics program." },
  { id: 2, title: "Content Creator", type: "Part-Time", location: "Remote", description: "Create engaging educational content and materials for our online learning platform." },
  { id: 3, title: "Student Counselor", type: "Full-Time", location: "On-site", description: "Provide guidance, support, and mentorship to students across different grade levels." },
];

export default function Careers() {
  const [expandedId, setExpandedId] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const toggleAccordion = (id) => {
    setExpandedId(expandedId === id ? null : id);
    setIsSuccess(false);
    reset();
  };

  const onSubmit = (data) => {
    console.log("Application Submitted:", data);
    setIsSuccess(true);
    reset();
  };

  return (
    <section id="careers" className="py-24 bg-[#eaf4ff]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-extrabold text-blue-950">
            Work With <span className="text-[#7D52F4]">Us</span>
          </h2>
          <p className="text-gray-600 text-lg font-medium">
            Join our team of passionate educators and professionals to shape the future of learning.
          </p>
        </div>

        <div className="space-y-4">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white rounded-2xl shadow-sm hover:shadow-md overflow-hidden border border-gray-100 transition-shadow">
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors focus:outline-none"
                onClick={() => toggleAccordion(job.id)}
              >
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                  <div className="flex items-center gap-3 text-sm text-gray-500 mt-2 font-medium">
                    <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4 text-[#FFD24D]" /> {job.type}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expandedId === job.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-100 p-2 rounded-full text-gray-600"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>

              <AnimatePresence>
                {expandedId === job.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 border-t border-gray-100 bg-[#fbfbfe]">
                      <p className="text-gray-600 mb-6 font-medium bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                        {job.description}
                      </p>
                      
                      {isSuccess ? (
                        <motion.div 
                          initial={{ scale: 0.95, opacity: 0 }} 
                          animate={{ scale: 1, opacity: 1 }} 
                          className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-xl flex items-start gap-4 shadow-sm"
                        >
                          <CheckCircle className="w-8 h-8 text-green-500 shrink-0" />
                          <div>
                            <p className="font-bold text-lg">Application Submitted!</p>
                            <p className="text-sm mt-1 opacity-90">Thank you for applying to the {job.title} position. Our HR team will review your application and get back to you shortly.</p>
                          </div>
                        </motion.div>
                      ) : (
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                          <h4 className="font-bold text-gray-800 mb-5 flex items-center gap-2">
                            <span className="w-2 h-6 bg-[#FFD24D] rounded-full inline-block"></span>
                            Apply For This Role
                          </h4>
                          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                              <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name <span className="text-red-500">*</span></label>
                                <input
                                  {...register('name', { required: 'Name is required' })}
                                  type="text"
                                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7D52F4]/50 focus:border-[#7D52F4] transition-all bg-gray-50/50"
                                  placeholder="John Doe"
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1.5 font-medium flex items-center gap-1">{errors.name.message}</p>}
                              </div>
                              <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address <span className="text-red-500">*</span></label>
                                <input
                                  {...register('email', { 
                                    required: 'Email is required',
                                    pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                                  })}
                                  type="email"
                                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7D52F4]/50 focus:border-[#7D52F4] transition-all bg-gray-50/50"
                                  placeholder="john@example.com"
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.email.message}</p>}
                              </div>
                            </div>
                            
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Select Role <span className="text-red-500">*</span></label>
                              <select
                                {...register('role', { required: 'Please select a role' })}
                                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7D52F4]/50 focus:border-[#7D52F4] transition-all bg-gray-50/50 cursor-pointer"
                                defaultValue={job.title}
                              >
                                {jobs.map(j => <option key={j.id} value={j.title}>{j.title}</option>)}
                              </select>
                            </div>

                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Resume</label>
                              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <label className="cursor-pointer group flex items-center gap-2 bg-white px-5 py-3 rounded-xl border-2 border-dashed border-gray-300 text-sm font-medium text-gray-600 hover:border-[#7D52F4] hover:bg-[#7D52F4]/5 transition-all text-center">
                                  <Upload className="w-4 h-4 text-gray-400 group-hover:text-[#7D52F4] transition-colors" />
                                  Upload Document
                                  <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                                </label>
                                <span className="text-xs text-gray-500 font-medium">Supported max file size: 5MB (PDF, DOC)</span>
                              </div>
                            </div>

                            <button
                              type="submit"
                              className="w-full mt-2 bg-[#7D52F4] text-white font-bold py-3.5 rounded-xl shadow-lg shadow-[#7D52F4]/30 hover:bg-[#6c43d9] hover:-translate-y-0.5 transition-all active:translate-y-0 flex items-center justify-center gap-2"
                            >
                              Submit Application
                            </button>
                          </form>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
