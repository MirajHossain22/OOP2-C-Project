import React, { useState, useMemo } from 'react';
import { Search, ArrowUpDown, X, Check, ShieldCheck, Sparkles, LayoutGrid, List, MessageSquarePlus } from 'lucide-react';
import ProductCard from './ProductCard';
import { CATEGORIES, formatBDT } from '../data/products';

export default function ProductCatalog({ 
  products, 
  onAddToCart, 
  searchQuery, 
  onSearchChange, 
  catalogRef,
  onOpenExtractor
}) {
  const [selectedCategory, setSelectedCategory] = useState("All Items");
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' | 'list'
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Filter and sort items dynamically
  const filteredProducts = useMemo(() => {
    return products
      .filter((item) => {
        const matchesCategory = 
          selectedCategory === "All Items" || item.category === selectedCategory;
        const matchesSearch = 
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === "price-low") return a.price - b.price;
        if (sortBy === "price-high") return b.price - a.price;
        if (sortBy === "rating") return b.rating - a.rating;
        return a.id - b.id; // Default featured
      });
  }, [products, selectedCategory, searchQuery, sortBy]);

  return (
    <section ref={catalogRef} id="collection" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-[var(--border-subtle)]">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--primary-light)] text-xs font-bold text-[var(--primary)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Inventory</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Popular Gadgets in Bangladesh
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-muted)]">
            Verified authentic audio gear, desk setup accessories, and chargers with transparent BDT pricing and seller warranties.
          </p>
        </div>

        {/* Action Bar: Sort & F-Commerce Parser Trigger */}
        <div className="flex flex-wrap items-center gap-2.5">
          {onOpenExtractor && (
            <button
              onClick={onOpenExtractor}
              className="btn-secondary px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 min-h-[44px]"
              title="Paste order from Facebook/WhatsApp chat"
            >
              <MessageSquarePlus className="w-4 h-4 text-[var(--primary)]" />
              <span>Paste FB Order</span>
            </button>
          )}

          {/* Sort Dropdown */}
          <div className="relative flex items-center">
            <ArrowUpDown className="w-3.5 h-3.5 text-[var(--text-muted)] absolute left-3 pointer-events-none" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-xl pl-8 pr-4 py-2 text-xs font-semibold text-[var(--text-secondary)] focus:outline-none focus:border-[var(--border-focus)] transition-colors cursor-pointer appearance-none min-h-[44px]"
              aria-label="Sort products by"
            >
              <option value="featured">Featured First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none" role="tablist" aria-label="Product categories">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              role="tab"
              aria-selected={isActive}
              className={`px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 min-h-[44px] flex items-center justify-center ${
                isActive
                  ? 'bg-[var(--primary)] text-white shadow-md'
                  : 'bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface)] border border-[var(--border-subtle)]'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Search Filter Status */}
      {searchQuery && (
        <div className="flex items-center justify-between text-xs text-[var(--text-muted)] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] px-4 py-2.5 rounded-xl">
          <span>Showing results matching "<strong className="text-[var(--text-primary)]">{searchQuery}</strong>" ({filteredProducts.length} items)</span>
          <button 
            onClick={() => onSearchChange('')} 
            className="text-[var(--primary)] hover:underline font-bold min-h-[44px] px-2 flex items-center"
          >
            Clear Search
          </button>
        </div>
      )}

      {/* Product Results Grid */}
      {filteredProducts.length === 0 ? (
        <div className="surface-card rounded-3xl p-10 text-center space-y-4 max-w-md mx-auto">
          <div className="w-12 h-12 rounded-full bg-[var(--bg-surface-elevated)] flex items-center justify-center mx-auto text-[var(--text-muted)]">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">No gadgets found</h3>
          <p className="text-xs text-[var(--text-muted)]">
            We couldn't find matches for "{searchQuery}". Try selecting another category or resetting your query.
          </p>
          <button
            onClick={() => { setSelectedCategory("All Items"); onSearchChange(""); }}
            className="btn-primary px-5 py-2.5 rounded-xl text-xs font-bold min-h-[44px]"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onQuickView={(p) => setQuickViewProduct(p)}
            />
          ))}
        </div>
      )}

      {/* Specification Sheet Modal */}
      {quickViewProduct && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="quick-view-title"
        >
          <div className="relative surface-card rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-[var(--bg-surface-elevated)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Close specifications"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div className="aspect-square rounded-2xl overflow-hidden bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)]">
                <img
                  src={quickViewProduct.image}
                  alt={quickViewProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[11px] uppercase tracking-wider text-[var(--primary)] font-bold">
                    {quickViewProduct.category}
                  </span>
                  <h3 id="quick-view-title" className="font-display text-xl font-bold text-[var(--text-primary)]">
                    {quickViewProduct.name}
                  </h3>
                  <div className="font-mono text-xl font-bold text-[var(--text-primary)]">
                    {formatBDT(quickViewProduct.price)}
                  </div>
                </div>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {quickViewProduct.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-[var(--border-subtle)]">
                  <span className="text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wide">Key Specifications</span>
                  <ul className="space-y-1.5">
                    {quickViewProduct.specs?.map((spec, i) => (
                      <li key={i} className="text-xs text-[var(--text-secondary)] flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[var(--primary)] shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 text-[11px] text-[var(--text-muted)] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[var(--primary)]" />
                  <span>Verified Brand Warranty • Free Dhaka Delivery</span>
                </div>

                <button
                  onClick={() => {
                    onAddToCart(quickViewProduct);
                    setQuickViewProduct(null);
                  }}
                  className="w-full btn-primary py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 min-h-[44px]"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Add to Bag — {formatBDT(quickViewProduct.price)}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
