import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/products';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--primary-light)] text-[var(--primary)] text-xs font-bold">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Support & Transparency</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-xs sm:text-sm text-[var(--text-muted)]">
          Everything you need to know about delivery timelines, official warranties, and Cash on Delivery.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className="surface-card rounded-2xl border border-[var(--border-subtle)] overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggleIndex(idx)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-focus)] min-h-[44px]"
                aria-expanded={isOpen}
              >
                <span className="font-display text-sm sm:text-base font-bold text-[var(--text-primary)]">
                  {faq.question}
                </span>
                <span className={`p-1.5 rounded-full bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] transition-transform duration-200 shrink-0 ${
                  isOpen ? 'rotate-180 bg-[var(--primary-light)] text-[var(--primary)]' : ''
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              {isOpen && (
                <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed border-t border-[var(--border-subtle)] pt-3 animate-in fade-in duration-150">
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
