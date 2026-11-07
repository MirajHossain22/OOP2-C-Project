import React, { useState, useEffect } from 'react';
import { ShoppingBag, ShieldCheck, Search, KeyRound, Check, Copy, UserCheck, Lock, Unlock } from 'lucide-react';

export default function Navbar({ 
  cartCount, 
  onOpenCart, 
  onScrollToCatalog, 
  isAdminMode, 
  onToggleAdminMode,
  isSellerAuthenticated,
  onOpenSellerAuth,
  searchQuery,
  onSearchChange,
  onNotify
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [copiedKey, setCopiedKey] = useState(false);

  const DEMO_KEY = 'demo-seller-key';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyKey = (e) => {
    e.stopPropagation();
    navigator.clipboard?.writeText(DEMO_KEY);
    setCopiedKey(true);
    onNotify?.(`Demo Key copied: "${DEMO_KEY}"`, 'info');
    setTimeout(() => setCopiedKey(false), 2000);
  };

  const handleSellerButtonClick = () => {
    if (!isSellerAuthenticated) {
      onOpenSellerAuth();
    } else {
      onToggleAdminMode();
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-2 sm:py-3 px-3 sm:px-6 lg:px-8">
      {/* Top Demo Key Banner Pill */}
      <div className="max-w-7xl mx-auto mb-1.5 flex items-center justify-between px-3 py-1 bg-amber-500/10 border border-amber-500/25 rounded-full text-[11px] text-amber-300 backdrop-blur-md">
        <div className="flex items-center gap-1.5 truncate">
          <KeyRound className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span className="font-semibold text-white hidden sm:inline">Seller Demo Key:</span>
          <code className="bg-black/40 px-1.5 py-0.5 rounded text-amber-300 font-mono font-bold text-[10px] sm:text-xs">
            {DEMO_KEY}
          </code>
          <span className="text-neutral-400 text-[10px] hidden md:inline">• Paste this key to unlock full store management</span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleCopyKey}
            className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-teal-400 hover:text-teal-300 transition-colors bg-white/5 hover:bg-white/10 px-2 py-0.5 rounded-full"
            title="Copy demo key to clipboard"
          >
            {copiedKey ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
            <span>{copiedKey ? 'Copied' : 'Copy Key'}</span>
          </button>
          
          {!isSellerAuthenticated && (
            <button
              onClick={onOpenSellerAuth}
              className="text-[10px] font-bold text-amber-400 hover:text-amber-300 underline underline-offset-2"
            >
              Unlock Now
            </button>
          )}
        </div>
      </div>

      <div className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
        isScrolled 
          ? 'glass-panel shadow-2xl py-2 px-4 sm:px-6 border border-white/10' 
          : 'bg-transparent py-3 px-2'
      }`}>
        <div className="flex items-center justify-between gap-3">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-lg p-1">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-teal-600 to-teal-400 flex items-center justify-center text-white shadow-lg shadow-teal-900/30 group-hover:scale-105 transition-transform duration-200">
              <ShoppingBag className="w-5 h-5" strokeWidth={2.2} />
            </div>
            <div>
              <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                AURA <span className="text-teal-400 text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-teal-950/80 border border-teal-800/60 font-semibold tracking-wider">v2.4</span>
              </span>
              <p className="text-[9px] sm:text-[10px] text-neutral-400 font-medium tracking-wide uppercase">Precision Store & Admin</p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] p-1.5 rounded-full px-3" aria-label="Main Navigation">
            <button 
              onClick={onScrollToCatalog}
              className="text-xs font-semibold text-neutral-300 hover:text-white px-3 py-1.5 rounded-full transition-colors hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
            >
              Collection
            </button>
            <a 
              href="#features" 
              className="text-xs font-semibold text-neutral-300 hover:text-white px-3 py-1.5 rounded-full transition-colors hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
            >
              Architecture
            </a>
            <a 
              href="#how-it-works" 
              className="text-xs font-semibold text-neutral-300 hover:text-white px-3 py-1.5 rounded-full transition-colors hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
            >
              Workflow
            </a>
            <a 
              href="#admin-console" 
              className="text-xs font-semibold text-neutral-300 hover:text-white px-3 py-1.5 rounded-full transition-colors hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
            >
              Seller Suite
            </a>
            <a 
              href="#faq" 
              className="text-xs font-semibold text-neutral-300 hover:text-white px-3 py-1.5 rounded-full transition-colors hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
            >
              FAQ
            </a>
          </nav>

          {/* Right Controls: Search, Seller Key Button, Bag */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Search Input Toggle */}
            <div className="relative">
              {showSearch ? (
                <div className="flex items-center bg-neutral-900 border border-teal-500/50 rounded-full px-3 py-1.5 text-xs">
                  <Search className="w-3.5 h-3.5 text-teal-400 mr-2 shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="Search chronometer, audio..."
                    autoFocus
                    className="bg-transparent text-white placeholder-neutral-500 focus:outline-none w-32 sm:w-44 text-xs"
                    onBlur={() => !searchQuery && setShowSearch(false)}
                  />
                  <button 
                    onClick={() => { onSearchChange(''); setShowSearch(false); }}
                    className="text-neutral-500 hover:text-white text-xs ml-1 px-1"
                    aria-label="Close search"
                  >
                    ×
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowSearch(true)}
                  className="p-2 sm:p-2.5 rounded-full text-neutral-400 hover:text-white hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
                  aria-label="Open product search"
                >
                  <Search className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Seller Key Access Button */}
            <button
              onClick={handleSellerButtonClick}
              className={`flex items-center gap-1.5 px-3 py-1.5 sm:py-2 rounded-full text-xs font-medium border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                isSellerAuthenticated && isAdminMode
                  ? 'bg-amber-500/20 border-amber-500/50 text-amber-300 shadow-sm shadow-amber-500/20'
                  : isSellerAuthenticated
                  ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
                  : 'bg-white/5 border-amber-400/30 text-amber-300 hover:bg-amber-500/10'
              }`}
              title={isSellerAuthenticated ? "Toggle Seller Dashboard" : "Enter Demo Key 'demo-seller-key' to unlock"}
            >
              {isSellerAuthenticated ? (
                <>
                  <Unlock className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="hidden sm:inline">{isAdminMode ? 'Seller Mode: Active' : 'Seller Mode: Ready'}</span>
                  <span className="sm:hidden font-bold">Seller</span>
                </>
              ) : (
                <>
                  <KeyRound className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden sm:inline">Seller Access</span>
                  <span className="sm:hidden font-bold">Key</span>
                </>
              )}
            </button>

            {/* Shopping Cart Pill Button with 60fps Micro-bounce Badge */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 btn-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
              aria-label={`Open shopping cart with ${cartCount} items`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Bag</span>
              <span className="min-w-[20px] h-5 px-1.5 bg-neutral-950/80 text-teal-300 rounded-full flex items-center justify-center text-[11px] font-mono font-bold border border-teal-400/30">
                {cartCount}
              </span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
