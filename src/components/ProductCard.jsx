import React, { useState } from 'react';
import { ShoppingBag, Star, Eye, Plus, Check } from 'lucide-react';

export default function ProductCard({ product, onAddToCart, onQuickView }) {
  const [isAdding, setIsAdding] = useState(false);

  const handleAdd = () => {
    setIsAdding(true);
    onAddToCart(product);
    setTimeout(() => {
      setIsAdding(false);
    }, 600);
  };

  const isLowStock = product.stock <= 10;

  return (
    <article className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between border border-white/[0.08] hover:border-teal-500/30 transition-all duration-300 group">
      
      {/* Product Image Container */}
      <div className="relative aspect-square overflow-hidden bg-neutral-900">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="px-2.5 py-1 rounded-full bg-neutral-950/80 backdrop-blur-md text-[10px] font-semibold tracking-wide uppercase text-teal-300 border border-teal-500/30">
            {product.category}
          </span>
          
          {product.badge && (
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase backdrop-blur-md ${
              isLowStock
                ? 'bg-amber-950/90 text-amber-300 border border-amber-600/50'
                : 'bg-neutral-900/90 text-neutral-200 border border-white/10'
            }`}>
              {product.badge}
            </span>
          )}
        </div>

        {/* Quick View Floating Pill (Hover) */}
        {onQuickView && (
          <button
            onClick={() => onQuickView(product)}
            className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 glass-pill px-3.5 py-1.5 rounded-full text-xs font-semibold text-white flex items-center gap-1.5 shadow-lg hover:bg-white/20 focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
            aria-label={`Quick view specifications for ${product.name}`}
          >
            <Eye className="w-3.5 h-3.5 text-teal-400" />
            <span>Specifications</span>
          </button>
        )}
      </div>

      {/* Content Details */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          
          {/* Rating & Stock */}
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1 text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-semibold text-neutral-200">{product.rating}</span>
              <span className="text-neutral-500">({product.reviewsCount})</span>
            </div>

            <span className={`font-mono text-[11px] ${
              isLowStock ? 'text-amber-400 font-semibold' : 'text-neutral-400'
            }`}>
              {product.stock} units left
            </span>
          </div>

          {/* Product Name */}
          <h3 className="font-display text-base font-bold text-white group-hover:text-teal-300 transition-colors line-clamp-1">
            {product.name}
          </h3>

          {/* Short description */}
          <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Price & Add to Cart Footer */}
        <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between gap-2">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-mono text-lg font-bold text-white">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="font-mono text-xs text-neutral-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            <span className="text-[10px] text-teal-400/90 font-medium">Free 48h express</span>
          </div>

          <button
            onClick={handleAdd}
            disabled={product.stock === 0}
            className={`btn-primary px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 ${
              isAdding ? 'bg-emerald-600 scale-95' : ''
            } ${product.stock === 0 ? 'opacity-50 cursor-not-allowed bg-neutral-800' : ''}`}
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
                <span>{product.stock === 0 ? 'Out of Stock' : 'Add to Bag'}</span>
              </>
            )}
          </button>
        </div>

      </div>

    </article>
  );
}

