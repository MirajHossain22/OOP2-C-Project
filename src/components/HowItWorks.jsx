import React from 'react';
import { Sparkles, ShoppingBag, CreditCard, Truck, CheckCircle2 } from 'lucide-react';

export default function HowItWorks({ onStartShopping }) {
  const steps = [
    {
      step: '01',
      title: 'Browse or Paste Order',
      description: 'Find your gadget in the catalog or paste a chat message from Facebook/WhatsApp using our instant AI order parser.',
      icon: ShoppingBag,
      tag: 'Zero Hassle'
    },
    {
      step: '02',
      title: 'Confirm Delivery Zone',
      description: 'Choose Inside Dhaka (Free on ৳2,000+) or Outside Dhaka, select Cash on Delivery or bKash, and place your order in seconds.',
      icon: CreditCard,
      tag: 'No Card Needed'
    },
    {
      step: '03',
      title: 'Fast Doorstep Delivery',
      description: 'Your package is inspected, securely boxed with an invoice, and handed to express couriers with live SMS tracking.',
      icon: Truck,
      tag: '24–48h Dispatch'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-24 border-t border-[var(--border-subtle)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--primary-light)] text-[var(--primary)] text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Delivery Workflow</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
            How simple shopping feels
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-muted)]">
            A transparent 3-step fulfillment pipeline from order placement to doorstep handover.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="surface-card rounded-3xl p-6 sm:p-7 relative flex flex-col justify-between group"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-3xl font-extrabold text-[var(--primary)]">
                      {item.step}
                    </span>
                    <span className="text-[11px] font-bold text-[var(--text-muted)] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] px-2.5 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-5 border-t border-[var(--border-subtle)] flex items-center gap-2 text-xs text-[var(--primary)] font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Guaranteed Service</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
