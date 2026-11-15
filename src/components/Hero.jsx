import React from 'react';
import { ArrowRight, Star, ShieldCheck, Truck, Sparkles, CheckCircle2, MessageSquarePlus, RefreshCw } from 'lucide-react';
import { formatBDT } from '../data/products';

export default function Hero({ onExploreClick, heroProduct, onAddToCart, onOpenExtractor }) {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary-light)] border border-[var(--border-subtle)] text-[var(--primary)] text-xs font-bold">
              <span className="flex h-2 w-2 rounded-full bg-[var(--primary)] animate-pulse" />
              <span>Authentic Gadgets in Bangladesh</span>
              <span className="text-[var(--text-muted)]">•</span>
              <span className="flex items-center gap-1 text-[var(--text-primary)]">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> 4.8 Rating
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.12]">
              Everyday smart tech. <br />
              <span className="text-[var(--primary)]">
                Fair prices. Honest delivery.
              </span>
            </h1>

            {/* Value Proposition */}
            <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Skip unverified marketplace listings. We source branded TWS earbuds, headphones, monitors, and chargers with transparent BDT pricing and full warranty coverage.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto btn-primary px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 min-h-[44px]"
              >
                <span>Browse Best Sellers</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {onOpenExtractor && (
                <button
                  onClick={onOpenExtractor}
                  className="w-full sm:w-auto btn-secondary px-5 py-3.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 min-h-[44px]"
                >
                  <MessageSquarePlus className="w-4 h-4 text-[var(--primary)]" />
                  <span>Paste Chat / FB Order</span>
                </button>
              )}
            </div>

            {/* Value Highlights */}
            <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-5 text-xs text-[var(--text-muted)]">
              <div className="flex items-center gap-1.5 font-medium">
                <Truck className="w-4 h-4 text-[var(--primary)] shrink-0" />
                <span>Free Dhaka Delivery on ৳2,000+</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-[var(--primary)] shrink-0" />
                <span>Cash on Delivery Available</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <RefreshCw className="w-4 h-4 text-[var(--primary)] shrink-0" />
                <span>7-Day Replacement Guarantee</span>
              </div>
            </div>

          </div>

          {/* Right Editorial Product Staging */}
          {heroProduct && (
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md surface-card rounded-3xl p-5 space-y-4">
                
                {/* Media Container */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)]">
                  <img
                    src={heroProduct.image}
                    alt={heroProduct.name}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-[var(--bg-surface)] text-[11px] font-bold text-[var(--primary)] shadow-sm border border-[var(--border-subtle)]">
                      {heroProduct.badge || 'Editor Pick'}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-[10px] text-emerald-600 dark:text-emerald-400 font-mono font-bold">
                      {heroProduct.stock} left in Dhaka hub
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm text-right">
                    {heroProduct.originalPrice && (
                      <span className="text-[10px] text-[var(--text-muted)] block line-through font-mono">
                        {formatBDT(heroProduct.originalPrice)}
                      </span>
                    )}
                    <span className="text-base font-bold text-[var(--text-primary)] font-mono">
                      {formatBDT(heroProduct.price)}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[var(--primary)] uppercase tracking-wider">
                      {heroProduct.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-amber-500">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      <span className="font-bold text-[var(--text-primary)]">{heroProduct.rating}</span>
                      <span className="text-[var(--text-muted)]">({heroProduct.reviewsCount})</span>
                    </div>
                  </div>

                  <h3 className="font-display text-base font-bold text-[var(--text-primary)]">
                    {heroProduct.name}
                  </h3>

                  <p className="text-xs text-[var(--text-muted)] line-clamp-2">
                    {heroProduct.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {heroProduct.specs?.map((spec, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)] font-medium">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quick Add */}
                <button
                  onClick={() => onAddToCart(heroProduct)}
                  className="w-full btn-primary py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 min-h-[44px]"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Order Now — {formatBDT(heroProduct.price)}</span>
                </button>

              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
