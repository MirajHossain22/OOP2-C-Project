import React from 'react';
import { Layers, Database, ShieldCheck, Cpu, Smartphone, RefreshCw, BarChart3, Lock, CheckCircle2 } from 'lucide-react';

export default function BentoFeatures() {
  return (
    <section id="features" className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--primary-light)] text-xs font-bold text-[var(--primary)]">
          <Layers className="w-3.5 h-3.5" />
          <span>Platform Architecture</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
          Engineered for reliability from database to mobile screen
        </h2>
        <p className="text-xs sm:text-sm text-[var(--text-muted)]">
          Combines a modern high-performance web storefront with an atomic SQL transactional backbone and verified Bangladeshi logistics.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-5 sm:gap-6">
        
        {/* Bento 1: Large Span (7 cols) - Relational SQL Engine */}
        <div className="lg:col-span-7 surface-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
          <div className="space-y-4">
            <div className="w-11 h-11 rounded-2xl bg-[var(--primary-light)] border border-[var(--primary)]/30 flex items-center justify-center text-[var(--primary)] shadow-sm">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight">
              Relational Database Schema with Foreign-Key Integrity
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              Every customer cart action and checkout maps directly to parameterized transactional queries. Foreign-key constraints guarantee real-time stock allocation and automatic inventory deduction across both web and desktop panels.
            </p>
          </div>

          <div className="mt-6 pt-5 border-t border-[var(--border-subtle)] font-mono text-[11px] text-[var(--text-secondary)] bg-[var(--bg-surface-elevated)] p-3.5 rounded-xl border border-[var(--border-subtle)] space-y-1.5">
            <div className="flex items-center justify-between text-[10px] text-[var(--text-muted)] pb-1 border-b border-[var(--border-subtle)]">
              <span>SQL Transaction Pipeline</span>
              <span className="text-[var(--primary)] font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse" /> Live Schema
              </span>
            </div>
            <div className="text-[var(--text-muted)]">
              <span className="text-[var(--primary)] font-bold">ALTER TABLE</span> [dbo].[Cart] <span className="text-[var(--primary)] font-bold">ADD CONSTRAINT</span> FK_Cart_Products
            </div>
            <div className="text-[var(--text-muted)]">
              <span className="text-[var(--primary)] font-bold">FOREIGN KEY</span> (ProductID) <span className="text-[var(--primary)] font-bold">REFERENCES</span> Products(ID);
            </div>
          </div>
        </div>

        {/* Bento 2: Medium Span (5 cols) - Sub-40ms Mobile Pipeline */}
        <div className="lg:col-span-5 surface-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
          <div className="space-y-3.5">
            <div className="w-11 h-11 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight">
              Sub-40ms Express Mobile Flow
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              Zero page reload overhead. Dynamic slide-over drawer calculates accurate Dhaka vs Outside Dhaka shipping thresholds and validates orders asynchronously.
            </p>
          </div>

          <div className="mt-5 space-y-2">
            <div className="flex items-center justify-between text-xs text-[var(--text-secondary)] bg-[var(--bg-surface-elevated)] p-2.5 rounded-xl border border-[var(--border-subtle)]">
              <span className="flex items-center gap-2">
                <RefreshCw className="w-3.5 h-3.5 text-[var(--primary)]" />
                <span>Optimistic UI State</span>
              </span>
              <span className="font-mono text-[var(--primary)] font-bold">Instant</span>
            </div>
            <div className="flex items-center justify-between text-xs text-[var(--text-secondary)] bg-[var(--bg-surface-elevated)] p-2.5 rounded-xl border border-[var(--border-subtle)]">
              <span className="flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-amber-500" />
                <span>Cash on Delivery Verification</span>
              </span>
              <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">Secured</span>
            </div>
          </div>
        </div>

        {/* Bento 3: 4 cols - Mobile-First Touch */}
        <div className="lg:col-span-4 surface-card rounded-3xl p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center">
            <Smartphone className="w-5 h-5" />
          </div>
          <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">
            44px+ Touch Optimization
          </h3>
          <p className="text-xs text-[var(--text-muted)] leading-relaxed">
            All tap targets, quantity steppers, and filters are sized for comfortable one-handed mobile navigation on any phone.
          </p>
        </div>

        {/* Bento 4: 4 cols - F-Commerce Parser */}
        <div className="lg:col-span-4 surface-card rounded-3xl p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center">
            <BarChart3 className="w-5 h-5" />
          </div>
          <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">
            F-Commerce Order Parser
          </h3>
          <p className="text-xs text-[var(--text-muted)] leading-relaxed">
            Copy text from Facebook or WhatsApp chats and automatically extract customer names, phone numbers, and products with 1 click.
          </p>
        </div>

        {/* Bento 5: 4 cols - WCAG AA & Vercel Edge */}
        <div className="lg:col-span-4 surface-card rounded-3xl p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">
            Vercel Edge & a11y Ready
          </h3>
          <p className="text-xs text-[var(--text-muted)] leading-relaxed">
            Built with accessible contrast ratios, keyboard navigability, and edge-caching for instant sub-second page loads.
          </p>
        </div>

      </div>

    </section>
  );
}
