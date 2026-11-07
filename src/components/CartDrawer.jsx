import React, { useEffect } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Truck } from 'lucide-react';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem, 
  onProceedToCheckout 
}) {
  // Lock body scroll when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const freeShippingThreshold = 150;
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const estimatedTax = Math.round(subtotal * 0.08 * 100) / 100;
  const shippingFee = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 15;
  const finalTotal = subtotal + estimatedTax + shippingFee;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-hidden" 
      aria-labelledby="cart-drawer-title" 
      role="dialog" 
      aria-modal="true"
    >
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity animate-in fade-in duration-300" 
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-neutral-950 border-l border-white/10 shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h2 id="cart-drawer-title" className="font-display text-lg font-bold text-white">
                  Your Shopping Bag
                </h2>
                <p className="text-[11px] text-neutral-400">
                  {cartItems.length} unique {cartItems.length === 1 ? 'item' : 'items'}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
              aria-label="Close shopping bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Dynamic Progress Tracker */}
          {cartItems.length > 0 && (
            <div className="bg-neutral-900/90 px-6 py-3 border-b border-white/[0.06] space-y-1.5">
              <div className="flex items-center justify-between text-xs font-medium">
                <span className="flex items-center gap-1.5 text-neutral-300">
                  <Truck className="w-3.5 h-3.5 text-teal-400" />
                  {amountToFreeShipping > 0 ? (
                    <span>Add <strong className="text-teal-300 font-mono">${amountToFreeShipping.toFixed(2)}</strong> for Free Express</span>
                  ) : (
                    <span className="text-emerald-400 font-semibold">🎉 Free Express Shipping Unlocked!</span>
                  )}
                </span>
                <span className="text-[11px] font-mono text-neutral-400">{progressPercent}%</span>
              </div>
              <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          )}

          {/* Cart Items Scrollable Container */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-neutral-500">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-display text-lg font-bold text-white">Your bag is empty</h3>
                  <p className="text-xs text-neutral-400 max-w-xs">
                    Explore our engineered hardware, studio audio, and daily essentials.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="btn-primary px-6 py-2.5 rounded-xl text-xs font-bold"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div 
                    key={item.id}
                    className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.07] flex items-center gap-3.5 hover:border-white/[0.12] transition-colors"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-xl object-cover bg-neutral-900 border border-white/10 shrink-0"
                    />

                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-xs font-bold text-white truncate">{item.name}</h4>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-neutral-500 hover:text-rose-400 transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-[11px] text-neutral-400">
                        {item.category}
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <div className="font-mono text-xs font-bold text-white">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>

                        {/* Quantity Stepper */}
                        <div className="flex items-center gap-2 bg-neutral-900 border border-white/10 rounded-lg p-0.5">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="p-1 rounded text-neutral-400 hover:text-white transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-mono font-bold px-1 text-white">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="p-1 rounded text-neutral-400 hover:text-white transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Subtotal & Action */}
          {cartItems.length > 0 && (
            <div className="p-5 sm:p-6 border-t border-white/[0.08] bg-neutral-950/80 space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-neutral-400">
                  <span>Subtotal</span>
                  <span className="font-mono text-white font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Estimated Tax (8%)</span>
                  <span className="font-mono text-white font-medium">${estimatedTax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Express Freight Shipping</span>
                  <span className="font-mono text-teal-400 font-semibold">
                    {shippingFee === 0 ? 'FREE' : `$${shippingFee.toFixed(2)}`}
                  </span>
                </div>
                <div className="pt-2 border-t border-white/[0.08] flex justify-between text-sm font-bold text-white">
                  <span>Order Total</span>
                  <span className="font-mono text-base text-teal-300">${finalTotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={onProceedToCheckout}
                className="w-full btn-primary py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-teal-900/50"
              >
                <span>Proceed to Express Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-neutral-500">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                <span>256-bit Encrypted Checkout • 30-Day Free Returns</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

