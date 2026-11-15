import React, { useState } from 'react';
import { ShoppingBag, Star, Eye, Check, ShieldCheck, Truck } from 'lucide-react';
import { formatBDT } from '../data/products';

export default function ProductCard({ product, onAddToCart, onQuickView }) {
  const [isAdding, setIsAdding] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    setIsAdding(true);
    onAddToCart(product);
    setTimeout(() => {
      setIsAdding(false);
    }, 600);
  };

  const isLowStock = product.stock <= 10;

  return (
    <article className="surface-card rounded-2xl overflow-hidden flex flex-col justify-between group relative">
      
      {/* Product Image Container */}
      <div className="relative aspect-square overflow-hidden bg-[var(--bg-surface-elevated)]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 ease-out"
          loading="lazy"
        />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
          <span className="px-2.5 py-1 rounded-full bg-[var(--bg-surface)] text-[var(--primary)] text-[10px] font-bold tracking-wide uppercase shadow-sm border border-[var(--border-subtle)]">
            {product.category}
          </span>
          
          {product.badge && (
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase shadow-sm ${
              isLowStock
                ? 'bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30'
                : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)]'
            }`}>
              {product.badge}
            </span>
          )}
        </div>

        {/* Quick View Button */}
        {onQuickView && (
          <button
            onClick={() => onQuickView(product)}
            className="absolute bottom-2.5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 glass-panel px-3.5 py-1.5 rounded-full text-xs font-semibold text-[var(--text-primary)] flex items-center gap-1.5 shadow-md hover:border-[var(--primary)] focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-focus)] min-h-[44px]"
            aria-label={`View technical specifications for ${product.name}`}
          >
            <Eye className="w-3.5 h-3.5 text-[var(--primary)]" />
            <span>Specifications</span>
          </button>
        )}
      </div>

      {/* Details & Copy */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3.5">
        <div className="space-y-2">
          
          {/* Rating & Stock */}
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span className="font-bold text-[var(--text-primary)]">{product.rating}</span>
              <span className="text-[var(--text-muted)] text-[11px]">({product.reviewsCount})</span>
            </div>

            <span className={`font-mono text-[11px] font-semibold ${
              isLowStock ? 'text-amber-600 dark:text-amber-400' : 'text-[var(--text-muted)]'
            }`}>
              {product.stock} in stock
            </span>
          </div>

          {/* Product Name */}
          <h3 className="font-display text-sm sm:text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors line-clamp-1">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-xs text-[var(--text-muted)] line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Micro Specs Tags */}
        <div className="flex flex-wrap gap-1">
          {product.specs?.slice(0, 2).map((spec, i) => (
            <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)] font-medium">
              {spec}
            </span>
          ))}
        </div>

        {/* Price & Primary Action */}
        <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between gap-2">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-mono text-base sm:text-lg font-bold text-[var(--text-primary)]">
                {formatBDT(product.price)}
              </span>
              {product.originalPrice && (
                <span className="font-mono text-xs text-[var(--text-muted)] line-through">
                  {formatBDT(product.originalPrice)}
                </span>
              )}
            </div>
            <div className="flex items-center gap-1 text-[10px] text-[var(--primary)] font-semibold">
              <ShieldCheck className="w-3 h-3" />
              <span>Official Warranty</span>
            </div>
          </div>

          <button
            onClick={handleAdd}
            disabled={product.stock === 0}
            className={`btn-primary px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 min-h-[44px] min-w-[44px] justify-center ${
              isAdding ? 'bg-emerald-700' : ''
            } ${product.stock === 0 ? 'opacity-50 cursor-not-allowed bg-[var(--border-medium)]' : ''}`}
            aria-label={`Add ${product.name} to shopping bag`}
          >
            {isAdding ? (
              <>
                <Check className="w-4 h-4 text-white" />
                <span className="hidden sm:inline">Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>{product.stock === 0 ? 'Sold Out' : 'Add'}</span>
              </>
            )}
          </button>
        </div>

      </div>

    </article>
  );
}
