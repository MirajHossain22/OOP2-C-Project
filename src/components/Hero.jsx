import React from 'react';
import { ArrowRight, Star, ShieldCheck, Zap, Sparkles, CheckCircle2, TrendingUp } from 'lucide-react';

export default function Hero({ onExploreClick, heroProduct, onAddToCart }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial gradient glow (anodized teal and warm ambient) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] md:w-[900px] md:h-[450px] bg-gradient-to-tr from-teal-500/15 via-teal-900/10 to-transparent blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-orange-500/10 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Social proof badge, Actions */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Pill Announcement / Trust tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/60 border border-teal-800/50 text-teal-300 text-xs font-medium backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
              <span>Spring 2026 Collection Available</span>
              <span className="text-neutral-500">•</span>
              <span className="text-neutral-300 font-semibold flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 inline" /> 4.9/5 Rating
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
              Engineered for aesthetics. <br />
              <span className="bg-gradient-to-r from-teal-200 via-teal-400 to-emerald-300 bg-clip-text text-transparent">
                Perfected for everyday living.
              </span>
            </h1>

            {/* Benefit-Driven Value Proposition */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Experience modern commerce without compromises. Explore meticulously crafted hardware, 
              studio sound gear, and everyday accessories backed by real-time inventory and instant frictionless checkout.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto btn-primary px-7 py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2.5 shadow-xl shadow-teal-950/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
              >
                <span>Explore Curated Drops</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#admin-console"
                className="w-full sm:w-auto btn-secondary px-6 py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 text-neutral-200 hover:text-white"
              >
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Live Admin Console</span>
              </a>
            </div>

            {/* Trust Markers Bar */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-y-3 gap-x-6 text-xs text-neutral-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Insured 48h Express Shipping</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
                <span>2-Year Manufacturer Warranty</span>
              </div>
              <div className="flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Real-Time Stock Verification</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Featured Product Hero Card (Borrowing high-converting landdding & 60fps patterns) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md group">
              
              {/* Outer decorative ambient glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-teal-500/30 via-emerald-500/20 to-orange-500/20 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative glass-card rounded-2xl overflow-hidden p-5 space-y-4">
                
                {/* Product Media Container */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900">
                  <img
                    src={heroProduct.image}
                    alt={heroProduct.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="eager"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-neutral-950/80 backdrop-blur-md text-[11px] font-semibold text-teal-300 border border-teal-500/30">
                      {heroProduct.badge || 'Flagship Item'}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-950/80 text-[10px] text-emerald-300 font-mono border border-emerald-600/40">
                      {heroProduct.stock} in stock
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-neutral-950/85 backdrop-blur-md border border-white/10 text-right">
                    <span className="text-[10px] text-neutral-400 block line-through leading-none">${heroProduct.originalPrice}</span>
                    <span className="text-base font-bold text-white font-mono leading-none">${heroProduct.price}</span>
                  </div>
                </div>

                {/* Information and Quick Specs */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-teal-400 tracking-wide uppercase">{heroProduct.category}</span>
                    <div className="flex items-center gap-1 text-xs text-amber-300">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span className="font-semibold">{heroProduct.rating}</span>
                      <span className="text-neutral-500">({heroProduct.reviewsCount})</span>
                    </div>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white leading-tight">
                    {heroProduct.name}
                  </h3>

                  <p className="text-xs text-neutral-300 line-clamp-2">
                    {heroProduct.description}
                  </p>

                  {/* Micro tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {heroProduct.specs?.map((spec, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-white/[0.04] text-neutral-300 border border-white/[0.06]">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quick Add Action Button */}
                <button
                  onClick={() => onAddToCart(heroProduct)}
                  className="w-full btn-primary py-3 rounded-xl text-xs font-bold tracking-wide uppercase flex items-center justify-center gap-2 shadow-lg shadow-teal-900/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
                >
                  <Sparkles className="w-4 h-4 text-teal-200" />
                  <span>Quick Add to Bag — ${heroProduct.price}</span>
                </button>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

