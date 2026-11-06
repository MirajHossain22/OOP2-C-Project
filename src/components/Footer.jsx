import React, { useState } from 'react';
import { ShoppingBag, ArrowRight, ShieldCheck, Heart, Sparkles, Check } from 'lucide-react';

export default function Footer({ onNotify }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    onNotify?.("Thank you for subscribing to the AURA Dispatch!", "success");
    setEmail('');
  };

  return (
    <footer className="border-t border-white/[0.08] bg-neutral-950 pt-16 pb-12 text-xs text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-teal-600 flex items-center justify-center text-white">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <span className="font-display text-lg font-bold text-white tracking-tight">
                AURA COMMERCE
              </span>
            </div>

            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              Engineered hardware, studio audio, and everyday accessories. Built with modern web performance, 
              real-time SQL inventory sync, and atomic checkout integrity.
            </p>

            <div className="flex items-center gap-2 text-[11px] text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All backend database services operational</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Collection</h4>
            <ul className="space-y-2">
              <li><a href="#collection" className="hover:text-white transition-colors">Precision Timepieces</a></li>
              <li><a href="#collection" className="hover:text-white transition-colors">Studio ANC Audio</a></li>
              <li><a href="#collection" className="hover:text-white transition-colors">Tactile Keyboards</a></li>
              <li><a href="#collection" className="hover:text-white transition-colors">Ceramic Vessels</a></li>
            </ul>
          </div>

          {/* Architecture Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Architecture</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-white transition-colors">SQL Schema Design</a></li>
              <li><a href="#admin-console" className="hover:text-white transition-colors">Admin Console Suite</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">Fulfillment Pipeline</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Vercel Deployment</a></li>
            </ul>
          </div>

          {/* Newsletter Input */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">The Dispatch</h4>
            <p className="text-[11px] text-neutral-400 leading-normal">
              Receive limited run notifications and design system engineering breakdowns.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative flex items-center">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="designer@domain.com"
                  className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-teal-400"
                />
                <button
                  type="submit"
                  className="absolute right-1 p-1.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-neutral-950 font-bold transition-colors"
                  aria-label="Subscribe"
                >
                  {subscribed ? <Check className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </button>
              </div>
              <span className="text-[10px] text-neutral-500 block">Strictly zero spam. Unsubscribe anytime.</span>
            </form>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            © {new Date().getFullYear()} AURA Commerce Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-neutral-300 transition-colors">Privacy Notice</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">Terms of Commerce</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">Accessibility Statement</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
