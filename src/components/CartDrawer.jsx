import React, { useEffect, useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Truck, MapPin } from 'lucide-react';
import { formatBDT } from '../data/products';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem, 
  onProceedToCheckout 
}) {
  const [deliveryZone, setDeliveryZone] = useState('dhaka'); // 'dhaka' | 'outside'

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
  const freeShippingThreshold = 2000;
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  
  // Bangladeshi delivery fees: Dhaka is ৳60 (free on ৳2,000+), Outside Dhaka is ৳120 (or ৳80 with discount)
  const baseShippingFee = deliveryZone === 'dhaka' ? (subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 60) : 100;
  const finalTotal = subtotal + baseShippingFee;

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
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity animate-in fade-in duration-200" 
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-md surface-card shadow-2xl flex flex-col justify-between border-l border-[var(--border-subtle)]">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-[var(--border-subtle)] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h2 id="cart-drawer-title" className="font-display text-base sm:text-lg font-bold text-[var(--text-primary)]">
                  Shopping Bag
                </h2>
                <p className="text-[11px] text-[var(--text-muted)] font-medium">
                  {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[var(--bg-surface-elevated)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Dynamic Progress Tracker */}
          {cartItems.length > 0 && (
            <div className="bg-[var(--bg-surface-elevated)] px-4 sm:px-5 py-3 border-b border-[var(--border-subtle)] space-y-1.5">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="flex items-center gap-1.5 text-[var(--text-secondary)]">
                  <Truck className="w-3.5 h-3.5 text-[var(--primary)]" />
                  {amountToFreeShipping > 0 ? (
                    <span>Add <strong className="text-[var(--primary)] font-mono">{formatBDT(amountToFreeShipping)}</strong> for Free Dhaka Delivery</span>
                  ) : (
                    <span className="text-[var(--primary)] font-bold">🎉 Free Dhaka Delivery Unlocked!</span>
                  )}
                </span>
                <span className="text-[11px] font-mono text-[var(--text-muted)]">{progressPercent}%</span>
              </div>
              <div className="w-full h-1.5 bg-[var(--border-subtle)] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[var(--primary)] rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          )}

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-muted)]">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-display text-base font-bold text-[var(--text-primary)]">Your bag is empty</h3>
                  <p className="text-xs text-[var(--text-muted)] max-w-xs">
                    Explore genuine smart gadgets with transparent BDT pricing and warranty backing.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="btn-primary px-5 py-2.5 rounded-xl text-xs font-bold min-h-[44px]"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div 
                    key={item.id}
                    className="p-3 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center gap-3 hover:border-[var(--border-medium)] transition-colors"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] shrink-0"
                    />

                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="text-xs font-bold text-[var(--text-primary)] truncate">{item.name}</h4>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-[var(--text-muted)] hover:text-rose-500 transition-colors p-1 min-h-[36px] min-w-[36px] flex items-center justify-center"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-[11px] text-[var(--text-muted)]">
                        {item.category}
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <div className="font-mono text-xs font-bold text-[var(--text-primary)]">
                          {formatBDT(item.price * item.quantity)}
                        </div>

                        {/* Quantity Stepper (min 44px hitboxes) */}
                        <div className="flex items-center gap-1 bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] rounded-lg p-0.5">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="p-1 rounded text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors min-h-[32px] min-w-[32px] flex items-center justify-center"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-mono font-bold px-1.5 text-[var(--text-primary)]">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="p-1 rounded text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors min-h-[32px] min-w-[32px] flex items-center justify-center"
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
            <div className="p-4 sm:p-5 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] space-y-4">
              
              {/* Delivery Zone Toggle */}
              <div className="p-2.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] space-y-1.5">
                <span className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[var(--primary)]" /> Delivery Destination:
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setDeliveryZone('dhaka')}
                    className={`py-2 px-2.5 rounded-lg font-bold text-center border transition-all min-h-[44px] flex flex-col justify-center items-center ${
                      deliveryZone === 'dhaka'
                        ? 'border-[var(--primary)] bg-[var(--bg-surface)] text-[var(--primary)] shadow-sm'
                        : 'border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    <span>Inside Dhaka</span>
                    <span className="text-[10px] font-normal">{subtotal >= freeShippingThreshold ? 'FREE' : '৳60'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDeliveryZone('outside')}
                    className={`py-2 px-2.5 rounded-lg font-bold text-center border transition-all min-h-[44px] flex flex-col justify-center items-center ${
                      deliveryZone === 'outside'
                        ? 'border-[var(--primary)] bg-[var(--bg-surface)] text-[var(--primary)] shadow-sm'
                        : 'border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    <span>Outside Dhaka</span>
                    <span className="text-[10px] font-normal">৳100</span>
                  </button>
                </div>
              </div>

              {/* Subtotal summary */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[var(--text-muted)]">
                  <span>Subtotal</span>
                  <span className="font-mono text-[var(--text-primary)] font-semibold">{formatBDT(subtotal)}</span>
                </div>
                <div className="flex justify-between text-[var(--text-muted)]">
                  <span>Delivery Charge</span>
                  <span className="font-mono text-[var(--primary)] font-bold">
                    {baseShippingFee === 0 ? 'FREE' : formatBDT(baseShippingFee)}
                  </span>
                </div>
                <div className="pt-2 border-t border-[var(--border-subtle)] flex justify-between text-sm font-bold text-[var(--text-primary)]">
                  <span>Total Amount</span>
                  <span className="font-mono text-base text-[var(--primary)]">{formatBDT(finalTotal)}</span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={() => onProceedToCheckout({ deliveryZone, shippingFee: baseShippingFee, total: finalTotal })}
                className="w-full btn-primary py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 min-h-[44px]"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-[var(--text-muted)]">
                <ShieldCheck className="w-3.5 h-3.5 text-[var(--primary)]" />
                <span>Cash on Delivery • bKash • 7-Day Easy Return</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
