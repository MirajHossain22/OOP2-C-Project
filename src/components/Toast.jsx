import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  const isSuccess = toast.type === 'success';
  const isError = toast.type === 'error';

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 duration-300">
      <div className={`glass-panel rounded-2xl px-4 py-3 flex items-center gap-3 border shadow-2xl ${
        isSuccess ? 'border-teal-500/40 text-teal-200' :
        isError ? 'border-rose-500/40 text-rose-200' :
        'border-white/20 text-neutral-200'
      }`}>
        {isSuccess && <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />}
        {isError && <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />}
        {!isSuccess && !isError && <Info className="w-4 h-4 text-neutral-400 shrink-0" />}

        <span className="text-xs font-semibold">{toast.message}</span>

        <button 
          onClick={onClose}
          className="text-neutral-400 hover:text-white p-1 rounded transition-colors"
          aria-label="Dismiss toast"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
