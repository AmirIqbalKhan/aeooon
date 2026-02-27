import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLHeadingElement>(null);
  const text2Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax Background
      gsap.to(bgRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Text Reveal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'top 20%',
          scrub: 1,
        },
      });

      tl.fromTo(
        text1Ref.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      ).fromTo(
        text2Ref.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 },
        '+=0.5'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="relative w-full min-h-[120vh] flex items-center justify-center overflow-hidden bg-charcoal text-cream py-32"
    >
      {/* Parallax Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 w-full h-[130%] -top-[15%] bg-cover bg-center opacity-30 mix-blend-luminosity"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop")',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-8 md:px-16 text-center flex flex-col items-center gap-16">
        <h2
          ref={text1Ref}
          className="font-outfit font-light text-3xl md:text-6xl lg:text-7xl tracking-tight text-cream/60"
        >
          Traditional care asks: <br />
          <span className="font-serif italic text-cream">How do we fix it?</span>
        </h2>
        
        <div className="w-[1px] h-24 bg-clay/50" />

        <h2
          ref={text2Ref}
          className="font-outfit font-bold text-4xl md:text-7xl lg:text-8xl tracking-tighter text-moss-light"
        >
          We ask: <br />
          <span className="font-serif italic text-clay">How far can we push it?</span>
        </h2>
      </div>
    </section>
  );
}
