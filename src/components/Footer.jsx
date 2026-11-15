import React, { useState } from 'react';
import { ShoppingBag, ArrowRight, Check, ShieldCheck, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer({ onNotify }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    onNotify?.("Thank you for subscribing to GadgetLoop updates!", "success");
    setEmail('');
  };

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] pt-14 pb-12 text-xs text-[var(--text-muted)] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-3.5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <span className="font-display text-lg font-bold text-[var(--text-primary)] tracking-tight">
                GadgetLoop BD
              </span>
            </div>

            <p className="text-[var(--text-muted)] text-xs leading-relaxed max-w-sm">
              Your trusted store for genuine branded earbuds, headphones, microphones, monitors, and chargers across Bangladesh with Cash on Delivery and official warranty support.
            </p>

            <div className="flex items-center gap-2 text-[11px] text-[var(--primary)] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
              <span>Dhaka Hub Fulfillment & Dispatch Operational</span>
            </div>
          </div>

          {/* Catalog Categories */}
          <div className="space-y-3">
            <h4 className="font-bold text-[var(--text-primary)] uppercase tracking-wider text-[11px]">Popular Categories</h4>
            <ul className="space-y-2">
              <li><a href="#collection" className="hover:text-[var(--primary)] transition-colors">TWS Earbuds</a></li>
              <li><a href="#collection" className="hover:text-[var(--primary)] transition-colors">Wireless Headphones</a></li>
              <li><a href="#collection" className="hover:text-[var(--primary)] transition-colors">Microphones</a></li>
              <li><a href="#collection" className="hover:text-[var(--primary)] transition-colors">Gaming Monitors</a></li>
              <li><a href="#collection" className="hover:text-[var(--primary)] transition-colors">Power & Chargers</a></li>
            </ul>
          </div>

          {/* Delivery & Hubs */}
          <div className="space-y-3">
            <h4 className="font-bold text-[var(--text-primary)] uppercase tracking-wider text-[11px]">Help & Service</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[var(--primary)]" /> <span>Dhaka City: 24h Express</span></li>
              <li className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[var(--primary)]" /> <span>Outside Dhaka: 2–4 Days</span></li>
              <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-[var(--primary)]" /> <span>7-Day Replacement</span></li>
              <li><a href="#faq" className="hover:text-[var(--primary)] transition-colors">Warranty Claim Steps</a></li>
            </ul>
          </div>

          {/* Newsletter Input */}
          <div className="space-y-3">
            <h4 className="font-bold text-[var(--text-primary)] uppercase tracking-wider text-[11px]">Price Drop Alerts</h4>
            <p className="text-[11px] text-[var(--text-muted)] leading-normal">
              Get notified when top earbuds, monitors, or chargers go on sale.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative flex items-center">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@gmail.com"
                  className="w-full bg-[var(--bg-base)] border border-[var(--border-subtle)] rounded-xl px-3 py-2 text-xs text-[var(--text-primary)] placeholder-[var(--text-faint)] focus:outline-none focus:border-[var(--border-focus)] min-h-[44px]"
                />
                <button
                  type="submit"
                  className="absolute right-1 p-2 rounded-lg btn-primary font-bold transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center"
                  aria-label="Subscribe"
                >
                  {subscribed ? <Check className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </button>
              </div>
              <span className="text-[10px] text-[var(--text-faint)] block">Zero spam. Only authentic price updates.</span>
            </form>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[var(--text-muted)]">
          <div>
            © {new Date().getFullYear()} GadgetLoop BD • Built for high-conversion F-commerce.
          </div>
          <div className="flex items-center gap-4">
            <a href="#faq" className="hover:text-[var(--text-primary)] transition-colors">Privacy</a>
            <a href="#faq" className="hover:text-[var(--text-primary)] transition-colors">Terms</a>
            <a href="#faq" className="hover:text-[var(--text-primary)] transition-colors">Warranty Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
