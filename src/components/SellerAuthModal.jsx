import React, { useState } from 'react';
import { KeyRound, ShieldCheck, X, Check, Copy, ArrowRight, AlertCircle, Sparkles } from 'lucide-react';

export default function SellerAuthModal({ 
  isOpen, 
  onClose, 
  onAuthenticate, 
  onNotify 
}) {
  const [inputKey, setInputKey] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const DEMO_KEY = 'demo-seller-key';

  if (!isOpen) return null;

  const handleCopyDemoKey = () => {
    navigator.clipboard?.writeText(DEMO_KEY);
    setInputKey(DEMO_KEY);
    setCopied(true);
    setError('');
    onNotify?.("Demo key copied and pasted into input!", "info");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanKey = inputKey.trim().toLowerCase();

    if (cleanKey === DEMO_KEY.toLowerCase()) {
      setError('');
      onAuthenticate(true);
      onClose();
      onNotify?.("Demo seller key verified! Full management suite unlocked.", "success");
    } else {
      setError(`Invalid key. Please paste the official demo key: "${DEMO_KEY}"`);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="seller-auth-title"
    >
      <div className="relative glass-panel rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-6 border border-white/20 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-neutral-300 hover:text-white hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 text-center">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center mx-auto shadow-lg shadow-amber-950/30">
            <KeyRound className="w-7 h-7" />
          </div>
          <h3 id="seller-auth-title" className="font-display text-2xl font-bold text-white tracking-tight">
            Seller & Admin Access
          </h3>
          <p className="text-xs text-neutral-300 max-w-xs mx-auto leading-relaxed">
            Enter the authorized seller key to unlock the live catalog manager, inventory editor, and store metrics.
          </p>
        </div>

        {/* Demo Key Quick Copy Chip */}
        <div className="p-3.5 rounded-2xl bg-amber-950/40 border border-amber-800/40 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-amber-300 font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Demo Seller Key:
            </span>
            <span className="text-[10px] text-neutral-400 uppercase tracking-wider font-mono">Evaluation</span>
          </div>

          <div className="flex items-center justify-between bg-neutral-950/80 px-3 py-2 rounded-xl border border-white/10">
            <code className="text-amber-300 font-mono text-xs font-bold tracking-wider">
              {DEMO_KEY}
            </code>
            <button
              type="button"
              onClick={handleCopyDemoKey}
              className="flex items-center gap-1 text-[11px] font-semibold text-teal-400 hover:text-teal-300 transition-colors px-2 py-1 rounded-md hover:bg-white/5"
              title="Click to copy and autofill"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Pasted!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Autofill</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Key Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div className="space-y-1.5">
            <label className="text-neutral-300 font-semibold block">
              Paste Access Key:
            </label>
            <div className="relative flex items-center">
              <input
                type="text"
                required
                value={inputKey}
                onChange={(e) => {
                  setInputKey(e.target.value);
                  setError('');
                }}
                placeholder="e.g. demo-seller-key"
                className="w-full bg-neutral-900 border border-white/15 rounded-xl px-3.5 py-2.5 text-white font-mono placeholder-neutral-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-xs transition-colors"
                autoFocus
              />
            </div>
            {error && (
              <p className="text-rose-400 text-[11px] flex items-center gap-1 pt-1 animate-in fade-in duration-150">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{error}</span>
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full btn-primary bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold py-3 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-amber-950/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <span>Unlock Seller Management</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="pt-2 text-center text-[11px] text-neutral-500 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
          <span>Demo credential configured for instant evaluation</span>
        </div>

      </div>
    </div>
  );
}
