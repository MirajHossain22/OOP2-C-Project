import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, ArrowUpDown, X, Check, ShieldCheck, Sparkles } from 'lucide-react';
import ProductCard from './ProductCard';
import { CATEGORIES } from '../data/products';

export default function ProductCatalog({ 
  products, 
  onAddToCart, 
  searchQuery, 
  onSearchChange, 
  catalogRef 
}) {
  const [selectedCategory, setSelectedCategory] = useState("All Items");
  const [sortBy, setSortBy] = useState("featured");
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
    <section ref={catalogRef} id="collection" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-white/[0.08]">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-950/60 border border-teal-800/40 text-xs font-semibold text-teal-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Inventory</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Designed for durability. Tuned for precision.
          </h2>
          <p className="text-sm text-neutral-400">
            Every item in the AURA catalog is synced with our live relational database, with immediate inventory allocation.
          </p>
        </div>

        {/* Sort & Filter Controls */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center">
            <ArrowUpDown className="w-3.5 h-3.5 text-neutral-400 absolute left-3 pointer-events-none" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-neutral-900 border border-white/10 rounded-xl pl-8 pr-4 py-2 text-xs font-medium text-neutral-200 focus:outline-none focus:border-teal-400 transition-colors cursor-pointer appearance-none"
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

      {/* Category Pills Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none" role="tablist" aria-label="Product categories">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              role="tab"
              aria-selected={isActive}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 ${
                isActive
                  ? 'bg-teal-500 text-neutral-950 shadow-md shadow-teal-500/20 font-bold'
                  : 'bg-white/[0.04] text-neutral-300 hover:bg-white/[0.08] border border-white/[0.06]'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Search status if filtering */}
      {searchQuery && (
        <div className="flex items-center justify-between text-xs text-neutral-400 bg-white/[0.03] border border-white/[0.07] px-4 py-2.5 rounded-xl">
          <span>Showing results matching "<strong className="text-white">{searchQuery}</strong>" ({filteredProducts.length} items)</span>
          <button 
            onClick={() => onSearchChange('')} 
            className="text-teal-400 hover:text-teal-300 font-semibold"
          >
            Clear Search
          </button>
        </div>
      )}

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="glass-card rounded-2xl p-12 text-center space-y-4 max-w-md mx-auto">
          <div className="w-12 h-12 rounded-full bg-white/[0.05] flex items-center justify-center mx-auto text-neutral-400">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="font-display text-lg font-bold text-white">No products found</h3>
          <p className="text-xs text-neutral-400">
            We couldn't find matches for your current category and search query. Try resetting your filters.
          </p>
          <button
            onClick={() => { setSelectedCategory("All Items"); onSearchChange(""); }}
            className="btn-primary px-4 py-2 rounded-xl text-xs font-semibold"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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

      {/* Quick View / Specification Sheet Modal */}
      {quickViewProduct && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="quick-view-title"
        >
          <div className="relative glass-panel rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 border border-white/20 shadow-2xl overflow-hidden">
            <button
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-neutral-300 hover:text-white hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
              aria-label="Close specification sheet"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div className="aspect-square rounded-2xl overflow-hidden bg-neutral-900 border border-white/10">
                <img
                  src={quickViewProduct.image}
                  alt={quickViewProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-wider text-teal-400 font-bold">
                    {quickViewProduct.category}
                  </span>
                  <h3 id="quick-view-title" className="font-display text-xl font-bold text-white">
                    {quickViewProduct.name}
                  </h3>
                  <div className="font-mono text-xl font-bold text-white">
                    ${quickViewProduct.price}
                  </div>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed">
                  {quickViewProduct.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-white/10">
                  <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wide">Key Technical Specs</span>
                  <ul className="space-y-1.5">
                    {quickViewProduct.specs?.map((spec, i) => (
                      <li key={i} className="text-xs text-neutral-200 flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => {
                    onAddToCart(quickViewProduct);
                    setQuickViewProduct(null);
                  }}
                  className="w-full btn-primary py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 mt-4"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Add to Bag — ${quickViewProduct.price}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

