import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { CheckCircle, Upload, Loader2, User, Mail, Phone, GraduationCap, Clock, MessageSquare } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Careers() {
  const [isSuccess, setIsSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();

  const onSubmit = async (data) => {
    // Simulate API request delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Teacher Application Received:", data);
    setIsSuccess(true);
    toast.success('Your teaching application has been submitted successfully!');
    reset();
  };

  return (
    <section id="careers" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Join Our Faculty</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950">
            Apply for <span className="text-[#7D52F4]">Teaching</span>
          </h2>
          <p className="text-gray-600 text-lg font-medium max-w-2xl mx-auto">
            We are looking for passionate, innovative educators to join our RBSE/Rajasthan Board faculty. Share your details and let's shape the future together.
          </p>
        </div>

        <div className="bg-white border border-gray-100 rounded-[2.5rem] shadow-2xl p-8 md:p-12 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
          
          {isSuccess ? (
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              className="flex flex-col items-center justify-center text-center py-12"
            >
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-12 h-12 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Received!</h3>
              <p className="text-gray-600 max-w-sm mb-8">
                Thank you for your interest in joining Wisdom Academy. Our team will review your CV and teaching expertise and get back to you shortly.
              </p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="text-primary font-bold hover:underline"
              >
                Apply for another position
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" /> Full Name *
                  </label>
                  <input
                    {...register('name', { required: 'Full name is required' })}
                    type="text"
                    className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-gray-50/50"
                    placeholder="e.g. Rahul Sharma"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name.message}</p>}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" /> Email Address *
                  </label>
                  <input
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                    })}
                    type="email"
                    className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-gray-50/50"
                    placeholder="rahul@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email.message}</p>}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" /> Mobile Number *
                  </label>
                  <input
                    {...register('phone', { required: 'Phone number is required' })}
                    type="tel"
                    className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-gray-50/50"
                    placeholder="9998887776"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone.message}</p>}
                </div>

                {/* Teaching Subject */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-primary" /> Subject Expertise *
                  </label>
                  <select
                    {...register('subject', { required: 'Please select your subject' })}
                    className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-gray-50/50 cursor-pointer"
                  >
                    <option value="">Select Subject</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Physics">Physics</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Biology">Biology</option>
                    <option value="English">English</option>
                    <option value="Social Studies">Social Studies</option>
                    <option value="Computer Science">Computer Science</option>
                  </select>
                  {errors.subject && <p className="text-red-500 text-xs mt-1 font-medium">{errors.subject.message}</p>}
                </div>

                {/* Total Experience */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" /> Years of Experience *
                  </label>
                  <input
                    {...register('experience', { required: 'Years of experience is required' })}
                    type="number"
                    min="0"
                    className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-gray-50/50"
                    placeholder="e.g. 5"
                  />
                  {errors.experience && <p className="text-red-500 text-xs mt-1 font-medium">{errors.experience.message}</p>}
                </div>

                {/* Resume Upload Box */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <Upload className="w-4 h-4 text-primary" /> Resume / CV *
                  </label>
                  <div className="relative group">
                    <input
                      type="file"
                      id="resume"
                      className="absolute inset-0 opacity-0 cursor-pointer z-20"
                      accept=".pdf,.doc,.docx"
                      required
                    />
                    <div className="w-full px-5 py-3 rounded-2xl border-2 border-dashed border-gray-200 group-hover:border-primary group-hover:bg-primary/5 transition-all flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gray-100 group-hover:bg-primary/10 flex items-center justify-center text-gray-400 group-hover:text-primary transition-colors">
                        <Upload className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-700">Choose File</p>
                        <p className="text-[10px] text-gray-500">PDF, DOCX up to 10MB</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message/Bio */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-primary" /> Brief Profile / Cover Note
                </label>
                <textarea
                  {...register('bio')}
                  rows={4}
                  className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-gray-50/50 resize-none"
                  placeholder="Tell us about your teaching philosophy or key achievements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#7D52F4] text-white font-bold py-4 rounded-2xl shadow-xl shadow-primary/30 hover:bg-[#6c43d9] hover:-translate-y-1 active:translate-y-0 transition-all flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    Processing Application...
                  </>
                ) : (
                  "Submit Teaching Application"
                )}
              </button>
            </form>
          )}
        </div>

        <div className="mt-12 text-center text-gray-400 text-sm font-medium">
          Interested in non-teaching roles? Reach out to us at <span className="text-primary underline">hr@wisdomacademy.in</span>
        </div>
      </div>
    </section>
  );
}
