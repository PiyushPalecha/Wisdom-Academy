import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const InstagramIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

/* ─── floating particle ─── */
const Particle = ({ style }) => (
  <div className="absolute rounded-full pointer-events-none" style={style} />
);

const INFO_CARDS = [
  {
    icon: <MapPin size={22} />,
    label: "Visit Us",
    value: "Wisdom Academy, Biloda",
    sub: "Chittorgarh, Rajasthan",
    href: "https://www.google.com/maps/place/Biloda,+Rajasthan/@24.5516676,74.2891304,14z/",
  },
  {
    icon: <Phone size={22} />,
    label: "Call Us",
    value: "+91 8769393200",
    sub: "Available 9 AM – 5 PM",
    href: "tel:+918769393200",
  },
  {
    icon: <Mail size={22} />,
    label: "Email Us",
    value: "karm8233@gmail.com",
    sub: "Reply within 24 hours",
    href: "mailto:karm8233@gmail.com",
  },
  {
    icon: <InstagramIcon size={22} />,
    label: "Follow Us",
    value: "@wisdomacademy...",
    sub: "Latest Campus Updates",
    href: "https://www.instagram.com/wisdomacademybiloda/",
  },
];

const PARTICLES = [
  { width: 120, height: 120, top: "8%", left: "5%", opacity: 0.07, background: "#7D52F4", filter: "blur(40px)", animationDuration: "8s" },
  { width: 80,  height: 80,  top: "70%", left: "2%",  opacity: 0.1,  background: "#7D52F4", filter: "blur(28px)", animationDuration: "11s" },
  { width: 60,  height: 60,  top: "30%", right: "4%", opacity: 0.08, background: "#FFD24D", filter: "blur(20px)", animationDuration: "9s" },
  { width: 200, height: 200, bottom: "5%", right: "6%", opacity: 0.05, background: "#7D52F4", filter: "blur(60px)", animationDuration: "14s" },
];

export default function Contact() {
  const [form, setForm] = useState({ 
    studentName: "", 
    parentName: "", 
    phone: "", 
    grade: "", 
    message: "" 
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const ownerNumber = "918769393200";

    const text = [
      `🎓 *NEW SCHOOL INQUIRY - WISDOM ACADEMY*`,
      ``,
      `*Student Details:*`,
      `• Student Name: ${form.studentName}`,
      `• Parent Name: ${form.parentName}`,
      `• Grade Seeking: ${form.grade}`,
      `• Contact No: ${form.phone}`,
      ``,
      `*Message/Query:*`,
      `"${form.message || "No specific message provided."}"`,
      ``,
      `📅 ${new Date().toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
      })}`,
    ].join("\n");
      
    const url = `https://wa.me/${ownerNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");

    setLoading(false);
    setSubmitted(true);
    setForm({ studentName: "", parentName: "", phone: "", grade: "", message: "" });
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      {/* Particles */}
      {PARTICLES.map((p, i) => (
        <Particle key={i} style={{ ...p, animation: `float ${p.animationDuration} infinite ease-in-out` }} />
      ))}

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#7D52F4]/10 text-[#7D52F4] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-3">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 leading-tight">
            We'd Love to <span className="text-[#7D52F4] italic">Hear From You</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto mt-4 font-medium">
            Interested in joining Wisdom Academy? Fill out our inquiry form and we'll get back to you shortly.
          </p>
        </motion.div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {INFO_CARDS.map((card, i) => (
            <motion.a
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              href={card.href}
              target={card.href ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg hover:border-[#7D52F4]/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#7D52F4]/10 flex items-center justify-center text-[#7D52F4] group-hover:bg-[#7D52F4] group-hover:text-white transition-colors">
                {card.icon}
              </div>
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-[#7D52F4] mb-1">{card.label}</p>
                <p className="font-bold text-gray-900 text-sm">{card.value}</p>
                <p className="text-gray-500 text-xs mt-1 font-medium">{card.sub}</p>
              </div>
              {card.href && (
                <div className="flex items-center gap-1 text-[#7D52F4] text-xs font-bold mt-auto opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Connect</span><ChevronRight size={14} />
                </div>
              )}
            </motion.a>
          ))}
        </div>

        {/* Main Grid: Form + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          {/* FORM */}
          <div className="lg:col-span-3 bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Admission Inquiry Form</h3>
            <p className="text-gray-500 text-sm mb-6 font-medium">Please provide accurate details for us to assist you better.</p>

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center gap-4 py-12 text-center"
              >
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
                    <CheckCircle size={32} className="text-green-500" />
                  </div>
                </div>
                <div>
                  <p className="font-bold text-xl text-gray-900">Inquiry Sent to WhatsApp!</p>
                  <p className="text-gray-500 text-sm mt-1 font-medium">We've redirected you to WhatsApp to complete the inquiry. 💬</p>
                  <button onClick={() => setSubmitted(false)} className="mt-4 text-xs font-bold text-[#7D52F4] hover:underline">Send another inquiry</button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-gray-700 ml-1">Student Name *</label>
                    <input type="text" name="studentName" placeholder="Full name of student" value={form.studentName} onChange={handleChange} required className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#7D52F4] focus:ring-2 focus:ring-[#7D52F4]/50 transition-all font-medium" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-gray-700 ml-1">Parent Name *</label>
                    <input type="text" name="parentName" placeholder="Parent / Guardian name" value={form.parentName} onChange={handleChange} required className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#7D52F4] focus:ring-2 focus:ring-[#7D52F4]/50 transition-all font-medium" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-gray-700 ml-1">Mobile Number *</label>
                    <input type="tel" name="phone" placeholder="10-digit number" value={form.phone} onChange={handleChange} required className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#7D52F4] focus:ring-2 focus:ring-[#7D52F4]/50 transition-all font-medium" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-gray-700 ml-1">Class Seeking Admission *</label>
                    <select name="grade" value={form.grade} onChange={handleChange} required className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#7D52F4] focus:ring-2 focus:ring-[#7D52F4]/50 transition-all font-medium appearance-none cursor-pointer">
                      <option value="">Select Class</option>
                      <option value="Nursery">Nursery</option>
                      <option value="KG">KG</option>
                      <option value="Primary (1-5)">Primary (1-5)</option>
                      <option value="Middle (6-8)">Middle (6-8)</option>
                      <option value="Secondary (9-10)">Secondary (9-10)</option>
                      <option value="Senior Secondary (11-12)">Senior Secondary (11-12)</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-700 ml-1">Additional Message</label>
                  <textarea name="message" placeholder="Optional notes for the admission office..." rows={4} value={form.message} onChange={handleChange} className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none resize-none focus:border-[#7D52F4] focus:ring-2 focus:ring-[#7D52F4]/50 transition-all font-medium" />
                </div>

                <button type="submit" disabled={loading} className="bg-[#7D52F4] text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-[#6c43d9] disabled:opacity-70 transition-all shadow-lg shadow-[#7D52F4]/30 mt-2">
                  {loading ? (
                    <><svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Preparing Inquiry...</>
                  ) : (
                    <><Send size={18} /> Submit Application via WhatsApp</>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* MAP */}
          <div className="lg:col-span-2 rounded-3xl overflow-hidden border border-gray-100 shadow-sm relative h-full min-h-[300px] lg:min-h-0 bg-gray-50">
            <a
              href="https://www.google.com/maps/place/Biloda,+Rajasthan/@24.5516676,74.2891304,14z/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10"
            ></a>
            <iframe
              title="Wisdom Academy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29032.69318865052!2d74.289130398141!3d24.551667636204595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396633fe77344273%3A0x7e879efadfb11211!2sBiloda%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1776326709658!5m2!1sen!2sin"
              className="w-full h-full pointer-events-none absolute inset-0"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
