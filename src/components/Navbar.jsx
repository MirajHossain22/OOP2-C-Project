import React, { useEffect, useState } from 'react';
import { Search, ShoppingBag, X, MessageSquarePlus, KeyRound, Check, Copy } from 'lucide-react';

export default function Navbar({ 
  cartCount, 
  onOpenCart, 
  onScrollToCatalog, 
  searchQuery, 
  onSearchChange, 
  theme, 
  onToggleTheme,
  onOpenExtractor,
  isSellerAuthenticated,
  onOpenSellerAuth,
  onNotify
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [copiedKey, setCopiedKey] = useState(false);

  const DEMO_KEY = 'demo-seller-key';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
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

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-3 py-2 sm:px-6 sm:py-3 lg:px-8">
      {/* Top Demo Key Banner Bar */}
      <div className="max-w-7xl mx-auto mb-1.5 flex items-center justify-between px-3 py-1 bg-[var(--primary-light)] border border-[var(--border-subtle)] rounded-full text-[11px] text-[var(--primary)] shadow-sm">
        <div className="flex items-center gap-1.5 truncate">
          <KeyRound className="w-3.5 h-3.5 shrink-0" />
          <span className="font-bold text-[var(--text-primary)] hidden sm:inline">Seller Demo Key:</span>
          <code className="bg-[var(--bg-surface)] px-1.5 py-0.5 rounded text-[var(--primary)] font-mono font-bold text-[10px] sm:text-xs border border-[var(--border-subtle)]">
            {DEMO_KEY}
          </code>
          <span className="text-[var(--text-muted)] text-[10px] hidden md:inline">• Paste this key to unlock live store admin</span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleCopyKey}
            className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[var(--primary)] hover:underline px-2 py-0.5 rounded-full"
            title="Copy demo key to clipboard"
          >
            {copiedKey ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
            <span>{copiedKey ? 'Copied' : 'Copy Key'}</span>
          </button>
          
          {onOpenSellerAuth && (
            <button
              onClick={onOpenSellerAuth}
              className="text-[10px] font-bold text-[var(--text-primary)] hover:text-[var(--primary)] underline underline-offset-2"
            >
              {isSellerAuthenticated ? 'Admin Active' : 'Unlock Seller'}
            </button>
          )}
        </div>
      </div>

      <div className={`mx-auto max-w-7xl rounded-2xl transition-all duration-300 ${
        isScrolled 
          ? 'glass-panel px-3 sm:px-6 py-2 shadow-lg border border-[var(--border-subtle)]' 
          : 'bg-transparent px-2 py-2 sm:py-3'
      }`}>
        <div className="flex items-center justify-between gap-3">
          
          {/* Brand Logo */}
          <a href="#" className="group flex items-center gap-2.5 rounded-lg p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-focus)]">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-md transition-transform duration-200 group-hover:scale-105 sm:h-10 sm:w-10">
              <ShoppingBag className="h-5 w-5" strokeWidth={2.2} />
            </div>
            <div>
              <span className="font-display flex items-center gap-1.5 text-base sm:text-xl font-bold tracking-tight text-[var(--text-primary)]">
                GadgetLoop <span className="rounded border border-emerald-500/30 bg-[var(--primary-light)] px-1.5 py-0.5 font-mono text-[10px] font-bold text-[var(--primary)]">BD</span>
              </span>
              <p className="text-[9px] font-medium uppercase tracking-wide text-[var(--text-muted)] sm:text-[10px]">Smart gadgets · Fair prices</p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-1 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 py-1.5 lg:flex shadow-sm" aria-label="Main Navigation">
            <button onClick={onScrollToCatalog} className="rounded-full px-3.5 py-1.5 text-xs font-semibold text-[var(--text-secondary)] transition-colors hover:text-[var(--primary)] hover:bg-[var(--bg-surface-elevated)]">
              Collection
            </button>
            <a href="#features" className="rounded-full px-3.5 py-1.5 text-xs font-semibold text-[var(--text-secondary)] transition-colors hover:text-[var(--primary)] hover:bg-[var(--bg-surface-elevated)]">
              Why GadgetLoop
            </a>
            <a href="#how-it-works" className="rounded-full px-3.5 py-1.5 text-xs font-semibold text-[var(--text-secondary)] transition-colors hover:text-[var(--primary)] hover:bg-[var(--bg-surface-elevated)]">
              Delivery Workflow
            </a>
            <a href="#admin-console" className="rounded-full px-3.5 py-1.5 text-xs font-semibold text-[var(--text-secondary)] transition-colors hover:text-[var(--primary)] hover:bg-[var(--bg-surface-elevated)]">
              Seller Suite
            </a>
            <a href="#faq" className="rounded-full px-3.5 py-1.5 text-xs font-semibold text-[var(--text-secondary)] transition-colors hover:text-[var(--primary)] hover:bg-[var(--bg-surface-elevated)]">
              FAQ
            </a>
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* F-Commerce Chat Order Trigger Button */}
            {onOpenExtractor && (
              <button
                onClick={onOpenExtractor}
                className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--primary)] text-xs font-bold text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors shadow-sm min-h-[44px]"
                title="Paste order from Facebook or WhatsApp chat"
              >
                <MessageSquarePlus className="w-3.5 h-3.5 text-[var(--primary)]" />
                <span>FB Order</span>
              </button>
            )}

            {/* Theme Toggle Button */}
            <label id="theme-toggle-button" title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
              <input id="toggle" type="checkbox" checked={theme === 'dark'} onChange={onToggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`} />
              <svg viewBox="0 0 69.667 44" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                  <filter id="theme-container-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="1" stdDeviation="1.5" floodOpacity=".2" /></filter>
                  <filter id="theme-sun-shadow" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="1" stdDeviation="1.5" floodOpacity=".25" /></filter>
                  <filter id="theme-moon-shadow" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="1" stdDeviation="1.5" floodOpacity=".2" /></filter>
                </defs>
                <g transform="translate(3.5 3.5)">
                  <rect fill="#83cbd8" filter="url(#theme-container-shadow)" rx="17.5" height="35" width="60.667" id="container" />
                  <g transform="translate(2.333 2.333)" id="button">
                    <g id="sun"><circle fill="#f8e664" filter="url(#theme-sun-shadow)" r="15.167" cy="15.167" cx="15.167" /><circle fill="#fcf4b9" r="7" cy="15.167" cx="15.167" /></g>
                    <g id="moon"><circle fill="#cce6ee" filter="url(#theme-moon-shadow)" r="15.167" cy="15.167" cx="15.167" /><g fill="#a6cad0" transform="translate(-24.415 -1.009)" id="patches"><circle r="2" cy="6.496" cx="45.009" /><circle r="2" cy="19.952" cx="41.366" /><circle r="1" cy="9.044" cx="34.016" /><circle r="1" cy="19.888" cx="52.081" /><circle r="1" cy="23.503" cx="34.016" /><circle r="1.5" cy="11.53" cx="51.081" /></g></g>
                  </g>
                  <path fill="#fff" id="cloud" d="M46.34 12.875a4.463 4.463 0 0 1 2.243.62.95.95 0 0 1 .72-1.281 4.852 4.852 0 0 1 2.623.519c.034.02-.5-1.968.281-2.716a2.117 2.117 0 0 1 2.829-.274 1.821 1.821 0 0 1 .854 1.858c.063.037 2.594-.049 3.285 1.273s-.865 2.544-.807 2.626a12.192 12.192 0 0 1 2.278.892c.553.448 1.106 1.992-1.62 2.927a7.742 7.742 0 0 1-3.762-.3c-1.28-.49-1.181-2.65-1.137-2.624s-1.417 2.2-2.623 2.2a4.172 4.172 0 0 1-2.394-1.206 3.825 3.825 0 0 1-2.771.774c-3.429-.46-2.333-3.267-2.2-3.55a3.721 3.721 0 0 1 2.394-1.738Z" />
                  <g fill="#def8ff" transform="translate(3.585 1.325)" id="stars"><path d="m.774 0-.208.559L0 .539.458.933.25 1.492l.485-.361.458.394L1.024.953 1.509.592.943.572Z" /><path d="m1.341.529-.505-.057L.736 0 .505.46 0 .4l.4.329-.231.46.436-.257.4.326L.9.786Z" transform="translate(20 8)" /></g>
                </g>
              </svg>
            </label>

            {/* Search Toggle */}
            <div className="relative">
              {showSearch ? (
                <div className="flex items-center rounded-full border border-[var(--border-medium)] bg-[var(--bg-surface)] px-3 py-1.5 text-xs shadow-md">
                  <Search className="mr-2 h-3.5 w-3.5 text-[var(--primary)]" />
                  <input 
                    autoFocus 
                    value={searchQuery} 
                    onChange={(e) => onSearchChange(e.target.value)} 
                    placeholder="Search earbuds, monitors..." 
                    className="w-28 sm:w-40 bg-transparent text-[var(--text-primary)] placeholder-[var(--text-faint)] outline-none" 
                    onBlur={() => !searchQuery && setShowSearch(false)} 
                  />
                  <button 
                    onClick={() => { onSearchChange(''); setShowSearch(false); }} 
                    className="ml-1 rounded p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)]" 
                    aria-label="Close search"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowSearch(true)}
                  className="p-2 sm:p-2.5 rounded-full text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Open search"
                >
                  <Search className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Shopping Bag Button */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 btn-primary px-3 sm:px-4 py-2 rounded-full text-xs font-bold shadow-md min-h-[44px]"
              aria-label={`Open shopping cart with ${cartCount} items`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Bag</span>
              <span className="min-w-[20px] h-5 px-1.5 bg-black/20 text-white rounded-full flex items-center justify-center text-[11px] font-mono font-bold">
                {cartCount}
              </span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
