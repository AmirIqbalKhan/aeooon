import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DoubleHelixGear = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    gsap.to(svgRef.current, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: 'linear',
    });
  }, []);

  return (
    <div className="w-64 h-64 flex items-center justify-center border border-moss/20 rounded-full bg-cream/50 backdrop-blur-sm shadow-inner">
      <svg ref={svgRef} viewBox="0 0 100 100" className="w-32 h-32 stroke-moss fill-none" strokeWidth="2" strokeLinecap="round">
        <path d="M 20 50 Q 50 10 80 50 T 20 50" />
        <path d="M 20 50 Q 50 90 80 50 T 20 50" />
        <circle cx="50" cy="50" r="10" />
        <line x1="20" y1="50" x2="80" y2="50" />
        <line x1="50" y1="20" x2="50" y2="80" />
      </svg>
    </div>
  );
};

const ScanningLaserGrid = () => {
  const laserRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(laserRef.current, {
      y: 256,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });
  }, []);

  return (
    <div className="relative w-64 h-64 border border-clay/30 rounded-[2rem] bg-charcoal overflow-hidden flex flex-wrap content-start p-4 gap-2">
      {Array.from({ length: 16 }).map((_, i) => (
        <div key={i} className="w-[calc(25%-0.5rem)] aspect-square rounded-full bg-moss/20" />
      ))}
      <div
        ref={laserRef}
        className="absolute top-0 left-0 w-full h-1 bg-clay shadow-[0_0_15px_rgba(204,88,51,0.8)] z-10"
      />
    </div>
  );
};

const PulsingEKG = () => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const length = pathRef.current?.getTotalLength() || 0;
    gsap.set(pathRef.current, { strokeDasharray: length, strokeDashoffset: length });
    gsap.to(pathRef.current, {
      strokeDashoffset: 0,
      duration: 2,
      repeat: -1,
      ease: 'power1.inOut',
    });
  }, []);

  return (
    <div className="w-64 h-64 flex items-center justify-center border border-moss/20 rounded-[2rem] bg-cream/50 backdrop-blur-sm">
      <svg viewBox="0 0 100 50" className="w-48 h-24 stroke-clay fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path ref={pathRef} d="M 0 25 L 20 25 L 30 10 L 40 40 L 50 25 L 70 25 L 80 15 L 90 35 L 100 25" />
      </svg>
    </div>
  );
};

export default function Protocol() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        // Animation logic for cards underneath
        if (index < cardsRef.current.length - 1) {
          const nextCard = cardsRef.current[index + 1];
          if (nextCard) {
            gsap.to(card, {
              scale: 0.9,
              opacity: 0.5,
              filter: 'blur(20px)',
              scrollTrigger: {
                trigger: nextCard,
                start: 'top bottom',
                end: 'top top',
                scrub: true,
              },
            });
          }
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const protocols = [
    {
      title: 'Phase 01: Cellular Mapping',
      description: 'Comprehensive mapping of your genetic architecture. Uncovering hidden metabolic bottlenecks.',
      Artifact: DoubleHelixGear,
      bg: 'bg-cream',
      text: 'text-charcoal',
    },
    {
      title: 'Phase 02: Metabolic Tuning',
      description: 'Precision nutrient and peptide interventions designed to upregulate mitochondrial efficiency.',
      Artifact: ScanningLaserGrid,
      bg: 'bg-[#E5E3DC]',
      text: 'text-charcoal',
    },
    {
      title: 'Phase 03: Cognitive Calibration',
      description: 'Real-time neuro-feedback and nootropic cycling to sustain peak flow states.',
      Artifact: PulsingEKG,
      bg: 'bg-moss',
      text: 'text-cream',
    },
  ];

  return (
    <section id="protocol" ref={containerRef} className="relative w-full bg-charcoal">
      {protocols.map((protocol, index) => (
        <div
          key={index}
          ref={(el) => (cardsRef.current[index] = el)}
          className={`min-h-screen py-24 w-full flex items-center justify-center px-8 md:px-16 ${protocol.bg} ${protocol.text} sticky top-0`}
        >
          <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="font-mono text-sm uppercase tracking-widest opacity-60">
                Protocol Sequence
              </div>
              <h2 className="font-outfit font-bold text-4xl sm:text-5xl md:text-7xl tracking-tight">
                {protocol.title}
              </h2>
              <p className="font-serif italic text-2xl opacity-80 max-w-lg">
                {protocol.description}
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <protocol.Artifact />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
