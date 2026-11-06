import React from 'react';
import { Layers, Database, ShieldCheck, Cpu, Smartphone, RefreshCw, BarChart3, Lock } from 'lucide-react';

export default function BentoFeatures() {
  return (
    <section id="features" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-950/70 border border-teal-800/40 text-xs font-semibold text-teal-300">
          <Layers className="w-3.5 h-3.5" />
          <span>Platform Architecture</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Engineered from database schema to modern interface
        </h2>
        <p className="text-sm text-neutral-400">
          Built on solid object-oriented foundations with real-time relational data synchrony and atomic transaction safety.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
        
        {/* Bento Item 1: Large Span (7 cols) - Real-time Relational Data Sync */}
        <div className="lg:col-span-7 glass-card rounded-3xl p-8 flex flex-col justify-between border border-white/[0.08] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-teal-500/20 transition-all duration-500" />
          
          <div className="space-y-4 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-teal-950/80 border border-teal-700/50 flex items-center justify-center text-teal-400 shadow-inner">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white tracking-tight">
              Relational SQL Architecture with Live Cart Binding
            </h3>
            <p className="text-sm text-neutral-300 max-w-lg leading-relaxed">
              Every customer action maps directly to parameterized transactional queries. Foreign-key constraints guarantee item availability, cart row isolation, and automatic inventory decrements upon checkout confirmation.
            </p>
          </div>

          {/* Interactive Code / Mock Architecture Schema Visual */}
          <div className="mt-6 pt-6 border-t border-white/10 font-mono text-xs text-neutral-300 bg-neutral-950/70 p-4 rounded-xl border border-white/5 space-y-2">
            <div className="flex items-center justify-between text-neutral-500 text-[11px] pb-1 border-b border-white/5">
              <span>SQL Transaction Pipeline</span>
              <span className="text-emerald-400">● Live Connection</span>
            </div>
            <div className="text-neutral-400">
              <span className="text-teal-400">ALTER TABLE</span> [dbo].[Cart] <span className="text-teal-400">ADD CONSTRAINT</span> FK_Cart_Products
            </div>
            <div className="text-neutral-400">
              <span className="text-teal-400">FOREIGN KEY</span> (ProductID) <span className="text-teal-400">REFERENCES</span> Products(ID);
            </div>
          </div>
        </div>

        {/* Bento Item 2: Medium Span (5 cols) - Express Slide-Over Checkout */}
        <div className="lg:col-span-5 glass-card rounded-3xl p-8 flex flex-col justify-between border border-white/[0.08] relative overflow-hidden group">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-950/80 border border-amber-700/50 flex items-center justify-center text-amber-400 shadow-inner">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white tracking-tight">
              Sub-40ms Express Cart Pipeline
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Zero page reload latency. Dynamic slide-over drawer calculates tax, applies free-shipping incentives, and validates credentials asynchronously.
            </p>
          </div>

          <div className="mt-6 space-y-2.5">
            <div className="flex items-center justify-between text-xs text-neutral-300 bg-white/[0.04] p-3 rounded-xl border border-white/5">
              <span className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-teal-400 animate-spin" style={{ animationDuration: '4s' }} />
                <span>Optimistic UI State</span>
              </span>
              <span className="font-mono text-teal-300 font-bold">Instant</span>
            </div>
            <div className="flex items-center justify-between text-xs text-neutral-300 bg-white/[0.04] p-3 rounded-xl border border-white/5">
              <span className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-amber-400" />
                <span>Luhn Validated Checkout</span>
              </span>
              <span className="font-mono text-emerald-300 font-bold">Encrypted</span>
            </div>
          </div>
        </div>

        {/* Bento Item 3: Medium Span (4 cols) - Mobile-First Touch Dynamics */}
        <div className="lg:col-span-4 glass-card rounded-3xl p-7 space-y-4 border border-white/[0.08]">
          <div className="w-10 h-10 rounded-xl bg-teal-950/60 border border-teal-800/40 flex items-center justify-center text-teal-400">
            <Smartphone className="w-5 h-5" />
          </div>
          <h3 className="font-display text-lg font-bold text-white">
            60 FPS Touch Precision
          </h3>
          <p className="text-xs text-neutral-300 leading-relaxed">
            44px+ minimum tap surfaces, hardware-accelerated transforms, and adaptive gesture handling across iPhone, Android, and desktop browsers.
          </p>
        </div>

        {/* Bento Item 4: Medium Span (4 cols) - Admin Inventory Controls */}
        <div className="lg:col-span-4 glass-card rounded-3xl p-7 space-y-4 border border-white/[0.08]">
          <div className="w-10 h-10 rounded-xl bg-amber-950/60 border border-amber-800/40 flex items-center justify-center text-amber-400">
            <BarChart3 className="w-5 h-5" />
          </div>
          <h3 className="font-display text-lg font-bold text-white">
            Live Merchant Console
          </h3>
          <p className="text-xs text-neutral-300 leading-relaxed">
            Restock low inventory, edit pricing, and dispatch batch updates directly into the database without touching manual terminal scripts.
          </p>
        </div>

        {/* Bento Item 5: Medium Span (4 cols) - Verified Audited Security */}
        <div className="lg:col-span-4 glass-card rounded-3xl p-7 space-y-4 border border-white/[0.08]">
          <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-800/40 flex items-center justify-center text-emerald-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-display text-lg font-bold text-white">
            WCAG AA & Vercel Edge Ready
          </h3>
          <p className="text-xs text-neutral-300 leading-relaxed">
            Targeting 95+ Accessibility and 90+ Lighthouse Performance with automated edge caching and instant global asset distribution.
          </p>
        </div>

      </div>

    </section>
  );
}
