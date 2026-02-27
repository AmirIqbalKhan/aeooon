import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream rounded-t-[4rem] px-8 md:px-16 pt-24 pb-12 mt-[-4rem] relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
        <div className="max-w-md">
          <div className="font-outfit font-bold text-3xl tracking-tight mb-6 hover:scale-105 transition-transform cursor-pointer origin-left w-fit">AEON</div>
          <p className="font-serif italic text-xl text-cream/60 leading-relaxed mb-8">
            Pioneering the frontier of human longevity and peak performance.
          </p>
          <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full w-fit border border-white/10">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-cream/70">
              System Operational
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 font-sans text-sm font-medium opacity-80">
          <div className="flex flex-col gap-4">
            <div className="font-mono text-xs uppercase tracking-widest text-clay mb-2">Platform</div>
            <a href="#" className="hover:text-clay transition-colors">Intelligence</a>
            <a href="#" className="hover:text-clay transition-colors">Telemetry</a>
            <a href="#" className="hover:text-clay transition-colors">Protocols</a>
          </div>
          <div className="flex flex-col gap-4">
            <div className="font-mono text-xs uppercase tracking-widest text-clay mb-2">Company</div>
            <a href="#" className="hover:text-clay transition-colors">Manifesto</a>
            <a href="#" className="hover:text-clay transition-colors">Research</a>
            <a href="#" className="hover:text-clay transition-colors">Careers</a>
          </div>
          <div className="flex flex-col gap-4">
            <div className="font-mono text-xs uppercase tracking-widest text-clay mb-2">Legal</div>
            <a href="#" className="hover:text-clay transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-clay transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-clay transition-colors">HIPAA Compliance</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs uppercase tracking-widest text-cream/40">
        <div>© {new Date().getFullYear()} Aeon Health Inc.</div>
        <div>All rights reserved.</div>
      </div>
    </footer>
  );
}
