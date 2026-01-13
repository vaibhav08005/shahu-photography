import React from 'react';

const Statement: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-[#0a0a0a] py-32 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.3] text-gray-600">
          <span className="text-white">Shahu Photography</span> has been Nanded's premier choice since <span className="text-white">2017</span>.
          We specialize in destination weddings, candid photography, and capturing life's
          <span className="italic text-white hover-trigger transition-colors duration-300"> special moments</span> with
          <span className="text-white hover-trigger transition-colors duration-300"> professional excellence</span>.
        </p>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          {[
            { title: "Trusted Legacy", desc: "Serving Nanded since 2017 with expertise in destination weddings, pre-wedding, and maternity shoots. Rated 4.9/5 by 100+ happy customers." },
            { title: "Creative Vision", desc: "From candid wedding moments to newborn photography, we bring heartfelt stories to life through our unique creative perspective." },
            { title: "Excellence", desc: "Specializing in portrait, wedding, maternity, and cinematic videography with professional expertise that celebrates life's milestones." }
          ].map((item) => (
            <div key={item.title} className="border-t border-white/20 pt-6">
              <h4 className="text-sm uppercase tracking-widest mb-4">{item.title}</h4>
              <p className="text-gray-400 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statement;