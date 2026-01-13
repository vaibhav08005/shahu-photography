import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white text-black pt-20 pb-10 px-6 min-h-[80vh] flex flex-col justify-between sticky bottom-0 z-0">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="max-w-md">
          <h2 className="text-xs font-bold uppercase tracking-widest mb-6">Studio Address</h2>
          <address className="not-italic text-lg font-serif mb-6 leading-relaxed">
            Shop No.5, Patiala Market,<br />
            Vazirabad, Nanded, Maharashtra 431601
          </address>
          <h2 className="text-xs font-bold uppercase tracking-widest mb-2">Contact Us</h2>
          <p className="text-lg font-serif opacity-70 mb-2">
            <a href="tel:+919972239278" className="hover:opacity-100 transition-opacity">+91 99722 39278</a> | <a href="tel:+919689203030" className="hover:opacity-100 transition-opacity">+91 96892 03030</a>
          </p>
          <p className="text-lg font-serif opacity-70">
            <a href="mailto:shahuphotography@gmail.com" className="hover:opacity-100 transition-opacity">shahuphotography@gmail.com</a>
          </p>
          <p className="text-sm font-serif opacity-50 mt-4">Open 24 Hours</p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-xs font-bold uppercase tracking-widest">Connect</h2>
          <div className="flex gap-8">
            <a href="https://instagram.com/shahu_photography" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest hover:line-through transition-all hover-trigger">Instagram</a>
            <a href="https://facebook.com/shahuphotography" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest hover:line-through transition-all hover-trigger">Facebook</a>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h1 className="font-serif italic text-[8vw] md:text-[10vw] leading-[1.1] tracking-tighter text-center opacity-100">
          Shahu Photography
        </h1>
        <div className="flex justify-between items-end mt-4 text-[10px] uppercase tracking-widest border-t border-black pt-4">
          <span>© 2024 Shahu Photography</span>
          <span>Established 2017</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;