import React from 'react';
import { Sparkles, ShoppingBag, CreditCard, Truck, CheckCircle2 } from 'lucide-react';

export default function HowItWorks({ onStartShopping }) {
  const steps = [
    {
      step: '01',
      title: 'Discover & Configure',
      description: 'Explore curated precision gear with live stock counts and verified technical specifications. Select variants and add to bag in a single click.',
      icon: ShoppingBag,
      tag: 'Zero Friction'
    },
    {
      step: '02',
      title: 'Slide-Over Express Review',
      description: 'Dynamic cart slide-over automatically applies free express delivery thresholds, calculates local taxes, and validates inputs without page reloads.',
      icon: CreditCard,
      tag: 'Instant Calculation'
    },
    {
      step: '03',
      title: 'Guaranteed 48h Dispatch',
      description: 'Orders are immediately allocated in the central inventory table, generated with a cryptographically unique receipt, and handed to express couriers.',
      icon: Truck,
      tag: 'Tracked & Insured'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-teal-300">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>The Purchase Lifecycle</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How seamless commerce feels
          </h2>
          <p className="text-sm text-neutral-400">
            A frictionless three-stage workflow connecting customer desires with warehouse fulfillment.
          </p>
        </div>

        {/* Steps Grid with Progressive Visual Line */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="glass-card rounded-3xl p-8 relative flex flex-col justify-between border border-white/[0.08] hover:border-teal-500/40 transition-all duration-300 group"
              >
                <div className="space-y-6">
                  {/* Step badge & Tag */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-3xl font-extrabold text-teal-400/80 group-hover:text-teal-300 transition-colors">
                      {item.step}
                    </span>
                    <span className="text-[11px] font-semibold text-neutral-400 bg-white/[0.05] border border-white/[0.08] px-2.5 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>

                  {/* Icon Circle */}
                  <div className="w-12 h-12 rounded-2xl bg-teal-950/80 border border-teal-800/50 flex items-center justify-center text-teal-300 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title and Description */}
                  <div className="space-y-2">
                    <h3 className="font-display text-xl font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center gap-2 text-xs text-teal-400 font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Stage Verified</span>
                </div>
              </div>
            );
          })}

        </div>

        {/* Bottom CTA Banner */}
        <div className="glass-card rounded-3xl p-8 sm:p-10 text-center max-w-3xl mx-auto space-y-6 border border-teal-500/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-emerald-500/5 to-transparent pointer-events-none" />
          
          <div className="relative space-y-2">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Ready to elevate your daily gear?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-lg mx-auto">
              Complimentary worldwide shipping unlocked on all initial orders above $150.
            </p>
          </div>

          <div className="relative">
            <button
              onClick={onStartShopping}
              className="btn-primary px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-xl shadow-teal-900/50"
            >
              Browse Curated Collection
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

