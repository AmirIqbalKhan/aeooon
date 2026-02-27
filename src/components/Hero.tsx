import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef1 = useRef<HTMLDivElement>(null);
  const textRef2 = useRef<HTMLDivElement>(null);
  const textRef3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [textRef1.current, textRef2.current, textRef3.current],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: 'power3.out',
          delay: 0.2,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100dvh] flex items-end pb-24 px-8 md:px-16 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?q=80&w=2000&auto=format&fit=crop")',
        }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-charcoal via-moss/80 to-moss/40 mix-blend-multiply" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-charcoal/90 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-20 max-w-4xl text-cream">
        <div className="overflow-hidden">
          <h1
            ref={textRef1}
            className="font-outfit font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-none mb-2"
          >
            Evolution is the
          </h1>
        </div>
        <div className="overflow-hidden">
          <h2
            ref={textRef2}
            className="font-serif italic font-light text-6xl sm:text-7xl md:text-9xl lg:text-[10rem] leading-none text-clay"
          >
            Baseline.
          </h2>
        </div>
        <div className="overflow-hidden mt-8 max-w-md">
          <p
            ref={textRef3}
            className="font-sans text-base sm:text-lg md:text-xl text-cream/80 font-light leading-relaxed"
          >
            Architecting human longevity through epigenetic mastery and clinical precision.
          </p>
        </div>
      </div>
    </section>
  );
}
