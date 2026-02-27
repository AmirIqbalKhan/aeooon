import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { MousePointer2 } from 'lucide-react';

// Card 1: Diagnostic Shuffler
const DiagnosticShuffler = () => {
  const [cards, setCards] = useState([
    { id: 1, label: 'Biological Age', value: '31.2 yrs', trend: '-2.4 yrs' },
    { id: 2, label: 'Gut Symbiosis', value: '98/100', trend: '+6 pts' },
    { id: 3, label: 'Stress Resilience', value: 'Peak', trend: 'Elevated' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prev) => {
        const newCards = [...prev];
        const last = newCards.pop();
        if (last) newCards.unshift(last);
        return newCards;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-64 w-full flex items-center justify-center perspective-1000">
      {cards.map((card, index) => {
        const isTop = index === 0;
        const isMiddle = index === 1;
        const isBottom = index === 2;

        let yOffset = isTop ? 0 : isMiddle ? 20 : 40;
        let scale = isTop ? 1 : isMiddle ? 0.95 : 0.9;
        let opacity = isTop ? 1 : isMiddle ? 0.7 : 0.4;
        let zIndex = 3 - index;

        return (
          <div
            key={card.id}
            className="absolute w-64 p-6 bg-white rounded-2xl shadow-xl border border-moss/5 transition-all duration-700"
            style={{
              transform: `translateY(${yOffset}px) scale(${scale})`,
              opacity,
              zIndex,
              transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            <div className="font-mono text-xs text-moss/50 uppercase tracking-widest mb-2">
              {card.label}
            </div>
            <div className="font-outfit text-3xl font-bold text-charcoal mb-1">
              {card.value}
            </div>
            <div className="font-sans text-sm text-clay font-medium">
              {card.trend}
            </div>
          </div>
        );
      })}
    </div>
  );
};

// Card 2: Telemetry Typewriter
const TelemetryTypewriter = () => {
  const messages = [
    'Sequencing Genomic Data...',
    'Synthesizing Peptides...',
    'Regulating Dopamine...',
    'Enhancing Neuroplasticity...',
  ];
  const [text, setText] = useState('');
  const [msgIndex, setMsgIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentMsg = messages[msgIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && text === currentMsg) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setMsgIndex((prev) => (prev + 1) % messages.length);
    } else {
      const nextText = isDeleting
        ? currentMsg.substring(0, text.length - 1)
        : currentMsg.substring(0, text.length + 1);
      
      timeout = setTimeout(() => setText(nextText), isDeleting ? 30 : 80);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, msgIndex, messages]);

  return (
    <div className="h-full w-full flex flex-col justify-between p-8 bg-charcoal rounded-[2rem] text-cream">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-clay animate-pulse" />
        <span className="font-mono text-xs uppercase tracking-widest text-cream/50">Live Feed</span>
      </div>
      <div className="font-mono text-lg md:text-xl text-moss-light mt-auto">
        <span className="text-cream/80">{'> '}</span>
        {text}
        <span className="inline-block w-2 h-5 bg-clay ml-1 animate-pulse align-middle" />
      </div>
    </div>
  );
};

// Card 3: Adaptive Regimen
const AdaptiveRegimen = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const [activeDay, setActiveDay] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      
      // Reset
      tl.set(cursorRef.current, { x: 200, y: 200, opacity: 0 });
      
      // Enter
      tl.to(cursorRef.current, { x: 120, y: 80, opacity: 1, duration: 1, ease: 'power2.out' });
      
      // Move to Wednesday (index 3)
      tl.to(cursorRef.current, { x: 145, y: 40, duration: 0.8, ease: 'power2.inOut' });
      
      // Click
      tl.to(cursorRef.current, { scale: 0.8, duration: 0.1, onComplete: () => setActiveDay(3) });
      tl.to(cursorRef.current, { scale: 1, duration: 0.1 });
      
      // Move to Save
      tl.to(cursorRef.current, { x: 180, y: 120, duration: 0.8, ease: 'power2.inOut', delay: 0.5 });
      
      // Click Save
      tl.to(cursorRef.current, { scale: 0.8, duration: 0.1 });
      tl.to(cursorRef.current, { scale: 1, duration: 0.1 });
      
      // Exit
      tl.to(cursorRef.current, { x: 250, y: 200, opacity: 0, duration: 1, ease: 'power2.in', onComplete: () => setActiveDay(null) });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative h-full w-full bg-cream border border-moss/10 rounded-[2rem] p-8 overflow-hidden flex flex-col">
      <div className="font-mono text-xs uppercase tracking-widest text-moss/50 mb-6">Intervention Matrix</div>
      
      <div className="flex justify-between w-full max-w-[200px] mb-8">
        {days.map((day, i) => (
          <div
            key={i}
            className={`w-6 h-6 rounded-full flex items-center justify-center font-sans text-xs font-medium transition-colors duration-300 ${
              activeDay === i ? 'bg-clay text-white' : 'bg-moss/5 text-moss/40'
            }`}
          >
            {day}
          </div>
        ))}
      </div>

      <div className="mt-auto flex justify-end">
        <div className="px-4 py-2 bg-moss text-cream rounded-full font-sans text-xs font-medium">
          Deploy Matrix
        </div>
      </div>

      {/* Mock Cursor */}
      <div
        ref={cursorRef}
        className="absolute top-0 left-0 pointer-events-none z-10 text-charcoal"
        style={{ transform: 'translate(200px, 200px)', opacity: 0 }}
      >
        <MousePointer2 className="w-6 h-6 fill-charcoal" />
      </div>
    </div>
  );
};

export default function Features() {
  return (
    <section id="features" className="py-32 px-8 md:px-16 bg-cream text-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="font-outfit font-bold text-4xl md:text-5xl tracking-tight mb-4">
            Clinical Telemetry
          </h2>
          <p className="font-serif italic text-xl md:text-2xl text-moss/70">
            Real-time interfaces for cellular mastery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-auto md:h-[400px]">
          {/* Card 1 */}
          <div className="bg-moss/5 rounded-[3rem] p-8 flex flex-col items-center justify-center">
            <div className="font-mono text-xs uppercase tracking-widest text-moss/50 mb-8 self-start">Biomarker Synthesis</div>
            <DiagnosticShuffler />
          </div>

          {/* Card 2 */}
          <div className="rounded-[3rem] overflow-hidden shadow-2xl">
            <TelemetryTypewriter />
          </div>

          {/* Card 3 */}
          <div className="rounded-[3rem] bg-white shadow-xl">
            <AdaptiveRegimen />
          </div>
        </div>
      </div>
    </section>
  );
}
