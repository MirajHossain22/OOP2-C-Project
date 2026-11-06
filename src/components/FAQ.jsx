import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/products';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-teal-300">
          <HelpCircle className="w-3.5 h-3.5 text-teal-400" />
          <span>Clarity & Support</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Frequently Answered Questions
        </h2>
        <p className="text-sm text-neutral-400">
          Everything you need to know about our logistics, inventory synchronization, and return policies.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-3.5">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className="glass-card rounded-2xl border border-white/[0.08] overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggleIndex(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
                aria-expanded={isOpen}
              >
                <span className="font-display text-sm sm:text-base font-bold text-white">
                  {faq.question}
                </span>
                <span className={`p-1.5 rounded-full bg-white/[0.05] text-neutral-300 transition-transform duration-200 shrink-0 ${
                  isOpen ? 'rotate-180 bg-teal-500/20 text-teal-300' : ''
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-white/[0.04] pt-3 animate-in fade-in duration-200">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </section>
  );
}
