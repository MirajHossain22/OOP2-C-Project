import React from 'react';
import { Star, CheckCircle, Quote, Users, PackageCheck, Award, Zap } from 'lucide-react';
import { TESTIMONIALS } from '../data/products';

export default function SocialProof() {
  const stats = [
    { label: 'Orders Fulfilled', value: '14,200+', icon: PackageCheck, detail: 'Verified global deliveries' },
    { label: 'Customer Score', value: '4.9 / 5.0', icon: Star, detail: 'From 1,840+ real reviews' },
    { label: 'Catalog Sync Speed', value: '< 40ms', icon: Zap, detail: 'Real-time database updates' },
    { label: 'Warranty Claims Handled', value: '99.4%', icon: Award, detail: 'Hassle-free 2-year backing' }
  ];

  return (
    <section className="py-16 border-y border-white/[0.08] bg-neutral-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Key Metrics Ticker Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx}
                className="glass-card rounded-2xl p-5 border border-white/[0.07] hover:border-teal-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-2 text-teal-400">
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">{stat.label}</span>
                </div>
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[11px] text-neutral-400 mt-1">
                  {stat.detail}
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Lead for Reviews */}
        <div className="text-center max-w-xl mx-auto space-y-2 pt-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-neutral-300">
            <Users className="w-3.5 h-3.5 text-teal-400" />
            <span>Customer Testimonials</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Trusted by creators, founders, and collectors worldwide
          </h2>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div 
              key={item.id} 
              className="glass-card rounded-2xl p-6 flex flex-col justify-between border border-white/[0.07] hover:border-white/[0.14] transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-neutral-600 group-hover:text-teal-400 transition-colors" />
                </div>

                {/* Quote Text */}
                <p className="text-sm text-neutral-300 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Item Verified Badge */}
              <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-10 h-10 rounded-full object-cover border border-teal-500/40"
                    loading="lazy"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-white">{item.author}</span>
                      <CheckCircle className="w-3.5 h-3.5 text-teal-400" title="Verified Purchaser" />
                    </div>
                    <span className="text-[11px] text-neutral-400 block">{item.role}</span>
                  </div>
                </div>

                <span className="text-[10px] font-mono font-medium text-teal-400 bg-teal-950/70 border border-teal-800/40 px-2 py-1 rounded">
                  {item.itemPurchased.split(' ')[0]}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

