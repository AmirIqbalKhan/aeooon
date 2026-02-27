import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Genesis',
    price: '$3,000',
    period: '/ quarter',
    description: 'Foundational recalibration and bi-annual systems analysis.',
    features: ['Quarterly Blood Panel', 'Basic Microbiome Analysis', 'Monthly Telehealth Check-in', 'Standard Supplement Stack'],
    highlighted: false,
  },
  {
    name: 'Apex',
    price: '$10,000',
    period: '/ quarter',
    description: 'Unrestricted telemetry and dynamic intervention protocols.',
    features: ['Continuous Glucose Monitoring', 'Advanced Epigenetic Aging Clock', 'Weekly Performance Review', 'Custom Nootropic Formulation', 'Priority Access to Specialists'],
    highlighted: true,
  },
  {
    name: 'Zenith',
    price: 'Custom',
    period: '',
    description: 'Limitless biological architecture for maximum lifespan extension.',
    features: ['Full Whole Genome Sequencing', 'Stem Cell Banking', 'Daily Concierge Physician', 'Experimental Peptide Access', 'Global Medical Evacuation'],
    highlighted: false,
  },
];

export default function Membership() {
  return (
    <section id="membership" className="py-32 px-8 md:px-16 bg-cream text-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-outfit font-bold text-4xl md:text-5xl tracking-tight mb-4">
            Membership Tiers
          </h2>
          <p className="font-serif italic text-2xl text-moss/70 max-w-2xl mx-auto">
            Select your level of biological intervention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`rounded-[3rem] p-8 md:p-10 transition-transform duration-500 hover:-translate-y-2 ${
                tier.highlighted
                  ? 'bg-moss text-cream shadow-2xl scale-105 z-10'
                  : 'bg-white text-charcoal shadow-xl border border-moss/5'
              }`}
            >
              <div className="font-mono text-xs uppercase tracking-widest opacity-60 mb-8">
                {tier.name}
              </div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-outfit font-bold text-4xl md:text-5xl tracking-tighter">{tier.price}</span>
                <span className="font-sans text-sm opacity-60 font-medium">{tier.period}</span>
              </div>
              <p className={`font-serif italic text-lg mb-10 ${tier.highlighted ? 'text-cream/80' : 'text-moss/70'}`}>
                {tier.description}
              </p>
              
              <div className="space-y-4 mb-12">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${tier.highlighted ? 'text-clay' : 'text-moss'}`} />
                    <span className="font-sans text-sm font-medium opacity-80">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-4 rounded-full font-sans text-sm font-bold transition-transform hover:scale-105 ${
                  tier.highlighted
                    ? 'bg-clay text-white shadow-[0_0_20px_rgba(204,88,51,0.4)]'
                    : 'bg-moss/5 text-moss hover:bg-moss/10'
                }`}
              >
                Apply for {tier.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
