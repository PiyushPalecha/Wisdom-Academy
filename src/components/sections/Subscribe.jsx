import Button from '../ui/Button';

export default function Subscribe() {
  return (
    <section className="relative z-20 w-full flex justify-center h-0 pointer-events-none">
      <div className="absolute top-0 w-full max-w-5xl px-6 transform -translate-y-1/2 pointer-events-auto">
        <div className="bg-[#f0f8ff] 
          rounded-tl-[100px] rounded-br-[100px] 
          rounded-tr-[30px] rounded-bl-[30px] 
          shadow-[0_20px_60px_rgba(0,0,0,0.1)] 
          p-10 md:p-14 text-center 
          border border-white overflow-hidden">

          <div className="mx-auto max-w-3xl mb-8 space-y-4">
            <h2 className="text-3xl font-bold text-blue-950">
              <span className="text-primary">Subscribe</span> to Our Mailing List
            </h2>

            <p className="text-gray-600 font-medium text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Join our team to receive updates, no matter the scale or scope, make the globe reach to you, anywhere, anytime, reach through everywhere.
              <br />
              Subscribe now and keep your learning journey free.
            </p>
          </div>

          <div className="mx-auto max-w-lg w-full flex items-center bg-white 
            rounded-full p-1.5 shadow border border-gray-100 
            focus-within:border-primary/50 transition-colors">

            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 bg-transparent px-5 py-3 border-none outline-none text-gray-700 w-full text-sm"
            />

            <Button className="rounded-full !px-6 md:!px-8 py-3 shrink-0 bg-primary/80 hover:bg-primary text-white font-medium">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
