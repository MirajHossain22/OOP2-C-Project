import React from 'react';
import { Star, CheckCircle, Quote, Users, PackageCheck, Award, Zap, Truck, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS } from '../data/products';

export default function SocialProof() {
  const stats = [
    { label: 'Orders Delivered', value: '18,400+', icon: PackageCheck, detail: 'Across 64 districts in Bangladesh' },
    { label: 'Customer Rating', value: '4.8 / 5.0', icon: Star, detail: 'From 3,200+ verified buyers' },
    { label: 'Dhaka Delivery', value: '24 Hours', icon: Truck, detail: 'Same-day dispatch on stock items' },
    { label: 'Warranty Support', value: '100% Official', icon: ShieldCheck, detail: 'Replacement claim assistance' }
  ];

  return (
    <section className="py-14 sm:py-16 border-y border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Metric Tickers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx}
                className="surface-card rounded-2xl p-4 sm:p-5 border border-[var(--border-subtle)]"
              >
                <div className="flex items-center gap-1.5 mb-1.5 text-[var(--primary)]">
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                    {stat.label}
                  </span>
                </div>
                <div className="font-display text-xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs text-[var(--text-muted)] mt-1">
                  {stat.detail}
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto space-y-2 pt-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--primary-light)] text-[var(--primary)] text-xs font-bold">
            <Users className="w-3.5 h-3.5" />
            <span>Verified Customer Feedback</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight">
            Loved by gadget enthusiasts across Bangladesh
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((item) => (
            <div 
              key={item.id} 
              className="surface-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between group"
            >
              <div className="space-y-3.5">
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <Quote className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--primary)] transition-colors" />
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Verification */}
              <div className="pt-4 mt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-9 h-9 rounded-full object-cover border border-[var(--primary)]/40"
                    loading="lazy"
                  />
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-bold text-[var(--text-primary)]">{item.author}</span>
                      <CheckCircle className="w-3 h-3 text-[var(--primary)]" title="Verified Purchaser" />
                    </div>
                    <span className="text-[10px] text-[var(--text-muted)] block">{item.role}</span>
                  </div>
                </div>

                <span className="text-[10px] font-mono font-semibold text-[var(--primary)] bg-[var(--primary-light)] px-2 py-0.5 rounded border border-[var(--border-subtle)]">
                  {item.itemPurchased}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
