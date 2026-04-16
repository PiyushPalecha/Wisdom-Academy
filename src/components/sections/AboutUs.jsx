import { motion } from 'framer-motion';
import { Target, Award, BookOpen, Users, Compass, History, UserCheck } from 'lucide-react';

export default function AboutUs() {
  const stats = [
    { icon: <Users className="w-6 h-6 text-primary" />, label: "Happy Students", value: "10,000+" },
    { icon: <BookOpen className="w-6 h-6 text-primary" />, label: "Certified Teachers", value: "200+" },
    { icon: <Award className="w-6 h-6 text-primary" />, label: "Awards Won", value: "50+" },
    { icon: <Target className="w-6 h-6 text-primary" />, label: "Passing Rate", value: "99%" },
  ];

  return (
    <section id="about" className="pt-32 pb-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 translate-x-1/3 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -translate-x-1/3 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 space-y-32">
        
        {/* Main About Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3 block">
                Who We Are
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-950 leading-tight">
                Empowering Students to <span className="text-primary">Shape the Future</span>
              </h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Founded in 2005, Wisdom Academy has been at the forefront of quality education. We believe in holistic development, nurturing not just academic excellence, but also critical thinking, creativity, and strong moral values.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-gray-100">
              {stats.map((stat, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="flex items-center gap-4">
                  <div className="bg-blue-50 p-3 rounded-2xl shadow-sm">{stat.icon}</div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 leading-none">{stat.value}</h4>
                    <span className="text-sm text-gray-500 font-medium">{stat.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop" alt="Students studying" className="w-full h-80 object-cover rounded-3xl shadow-lg mt-12 hover:scale-[1.02] transition-transform duration-500"/>
              <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop" alt="Graduation" className="w-full h-80 object-cover rounded-3xl shadow-lg hover:scale-[1.02] transition-transform duration-500"/>
            </div>
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5, type: "spring" }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-3xl shadow-2xl">
              <div className="bg-gradient-to-br from-primary to-indigo-600 text-white w-24 h-24 rounded-2xl flex flex-col items-center justify-center text-center shadow-inner">
                <span className="text-3xl font-black">20+</span>
                <span className="text-[10px] font-bold uppercase tracking-wider mt-1 opacity-90">Years<br/>of Legacy</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Principal's Message & Vision Mission */}
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div id="principals-message" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gray-50 rounded-3xl p-10 relative">
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/30">
              <UserCheck className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Principal’s Message</h3>
            <div className="flex gap-6 items-start">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" alt="Principal" className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md flex-shrink-0" />
              <div>
                <p className="text-gray-600 italic mb-4">"At Wisdom Academy, we believe education is more than just passing exams. It is about helping your child become a good human being. We promise to provide a safe and happy place where your child can learn with confidence. Our teachers are not just mentors; they are like family. Together, we will help your child achieve their dreams and build a bright future."</p>
                <h5 className="font-bold text-gray-900">- Dr. Pushpendra Vyas</h5>
                <span className="text-sm text-primary font-medium">Principal</span>
              </div>
            </div>
          </motion.div>

          <motion.div id="vision-mission" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-blue-900 rounded-3xl p-10 relative text-white">
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-blue-900 shadow-lg shadow-accent/30">
              <Compass className="w-8 h-8" />
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-blue-100 opacity-90">To be the best school where children learn modern skills without forgetting our Indian values. We want to prepare every student to be a leader who is successful, honest, and kind to everyone.</p>
              </div>
              <div className="w-12 h-1 bg-white/20 rounded-full"></div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-blue-100 opacity-90">To Provide  the best Education in Rajasthan.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* School History */}
        <motion.div id="school-history" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-4xl mx-auto">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <History className="w-8 h-8" />
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">School History</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            The foundation stone of Wisdom Academy was laid in 2005 with a vision to create an educational institution that transcends traditional boundaries. From starting with just 150 students in a small building, we have expanded our legacy over the past two decades into a sprawling campus equipped with world-class facilities. Over the years, our students have achieved remarkable success on both national and international platforms.
          </p>
        </motion.div>

        {/* Faculty Directory Teaser */}
        <motion.div id="faculty-staff" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="mb-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Great Teachers</h3>
            <p className="text-gray-600 max-w-2xl leading-relaxed">Our teachers are the heart of Wisdom Academy. They are experts who love teaching and helping students succeed in life.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Highly Qualified", 
                desc: "Every teacher is an expert in their subject. They have years of experience and know how to explain difficult things in a very simple way." 
              },
              { 
                title: "Friendly & Kind", 
                desc: "Our teachers are very kind and helpful. They treats students like family. Students feel very comfortable asking them any questions." 
              },
              { 
                title: "Personal Guidance", 
                desc: "We focus on every child's growth. Teachers give special attention to students who need extra help so that nobody is left behind." 
              },
              { 
                title: "Always Supporting", 
                desc: "Our teachers don't just teach from books. They support students in everything and guide them to become better people for the future." 
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[2rem] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-sm border-t-4 border-t-primary">
                <h4 className="text-xl font-extrabold text-blue-950 mb-4">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
