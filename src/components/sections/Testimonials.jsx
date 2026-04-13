import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    { name: "John Doe", role: "Student", text: "Wisdom Academy has truly changed my life. The courses are well structured and the instructors are incredibly knowledgeable.", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
    { name: "Jane Smith", role: "UI/UX Designer", text: "The UI/UX Bootcamp gave me the practical skills I needed to land my first job. Highly recommended!", avatar: "https://randomuser.me/api/portraits/women/2.jpg" },
    { name: "Mike Johnson", role: "Software Developer", text: "Exceptional platform with a vast variety of courses. The one-on-one tutoring feature is a game changer.", avatar: "https://randomuser.me/api/portraits/men/3.jpg" },
  ];

  return (
    <section className="py-24 pb-48">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl font-extrabold text-blue-950">
            Student <span className="text-primary">Testimonials</span>
          </h2>
          <p className="text-gray-600 text-lg font-medium">
            Don't just take our word for it. See what our students have to say about their learning experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow relative">
              <div className="flex gap-1 text-accent mb-6">
                 {[...Array(5)].map((_, idx) => <Star key={idx} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-gray-600 font-medium italic mb-8">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full ring-2 ring-primary/20 object-cover" />
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
