import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-11/12 max-w-5xl">
      <div
        ref={navRef}
        className={`flex items-center justify-between px-8 py-4 rounded-full transition-all duration-500 ${
          isScrolled
            ? 'bg-white/60 backdrop-blur-md border border-moss/10 text-moss shadow-sm'
            : 'bg-transparent text-white'
        }`}
      >
        <div className="font-outfit font-bold text-xl tracking-tight hover:scale-110 transition-transform cursor-pointer origin-left">AEON</div>
        <div className="hidden md:flex items-center gap-8 font-medium text-sm">
          <a href="#features" className="hover:opacity-70 transition-opacity">Intelligence</a>
          <a href="#philosophy" className="hover:opacity-70 transition-opacity">Philosophy</a>
          <a href="#protocol" className="hover:opacity-70 transition-opacity">Protocol</a>
          <a href="#membership" className="hover:opacity-70 transition-opacity">Membership</a>
        </div>
        <button className={`btn-magnetic px-6 py-2 rounded-full text-sm font-medium transition-colors ${
          isScrolled ? 'bg-moss text-cream' : 'bg-white text-moss'
        }`}>
          <span>Access Portal</span>
        </button>
      </div>
    </nav>
  );
}
