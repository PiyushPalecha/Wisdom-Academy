import { motion } from 'framer-motion';
import { IndianRupee, FileText, CalendarHeart, CheckCircle2, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

export default function Admissions() {
  const steps = [
    { title: "Submit Application", desc: "Fill out the online application form with all required documents." },
    { title: "Entrance Assessment", desc: "Candidates will be invited for a basic competency assessment." },
    { title: "Parent Interaction", desc: "A brief meeting with the Principal to align our values." },
    { title: "Confirmation \& Fee Payment", desc: "Upon selection, complete the admission by paying the enrollment fee." },
  ];

  return (
    <section id="admissions" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 space-y-32">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3 block">Join Our Community</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-950 mb-6">Admissions Process</h2>
          <p className="text-gray-600 text-lg">We look forward to welcoming bright minds. Our admission process is transparent, merit-based, and designed to ensure the best fit for your child.</p>
        </div>

        {/* How to Apply Section */}
        <motion.div id="how-to-apply" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2 space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center">
                  <FileText className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">How to Apply</h3>
              </div>
              <div className="space-y-6">
                {steps.map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-50 text-primary font-bold flex items-center justify-center shrink-0 border border-blue-100">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{step.title}</h4>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button href="#contact" className="flex items-center gap-2">
                Start Application <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop" alt="Students applying" className="rounded-3xl shadow-2xl" />
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Age Criteria */}
          <motion.div id="age-criteria" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-blue-50 rounded-3xl p-10">
            <div className="w-14 h-14 bg-white text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
              <CalendarHeart className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Age Criteria</h3>
            <p className="text-gray-600 mb-6">To ensure age-appropriate learning, we follow strict age guidelines for admission as of June 1st of the academic year:</p>
            <ul className="space-y-4">
              {[
                { grade: 'Pre-Primary (Nursery)', age: '3 to 4 Years' },
                { grade: 'Kindergarten (KG)', age: '4 to 6 Years' },
                { grade: 'Primary (Grade 1)', age: '6+ Years' },
                { grade: 'Middle & High School', age: 'Based on previous grade' }
              ].map((item, idx) => (
                <li key={idx} className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm">
                  <span className="font-semibold text-gray-800">{item.grade}</span>
                  <span className="text-primary font-bold">{item.age}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Fee Structure Reference */}
          <motion.div id="fee-structure" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gray-900 rounded-3xl p-10 text-white relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 opacity-10">
              <IndianRupee className="w-64 h-64" />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <IndianRupee className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Fee Structure</h3>
              <p className="text-gray-300 mb-8">Our fee structure is designed to be comprehensive, ensuring that there are no hidden costs during the academic year. It covers tuition, standard library access, and routine healthcare on campus.</p>
              
              <div className="space-y-4 mb-8">
                {['Registration Fee (One-time)', 'Admission Fee (One-time)', 'Quarterly Tuition Fee', 'Transport (Optional)'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" className="border-white text-gray-900 bg-white hover:bg-gray-100">
                Download Detailed Fee Chart
              </Button>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
