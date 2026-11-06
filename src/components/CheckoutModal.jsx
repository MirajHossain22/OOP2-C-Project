import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, CreditCard, Lock, Sparkles, ArrowRight } from 'lucide-react';

export default function CheckoutModal({ 
  isOpen, 
  onClose, 
  cartItems, 
  onSuccess 
}) {
  const [formData, setFormData] = useState({
    name: 'Alexander Wright',
    email: 'alex.wright@example.com',
    address: '742 Evergreen Terrace',
    city: 'San Francisco, CA',
    postalCode: '94107',
    cardNumber: '4242 •••• •••• 4242',
    expiry: '12/28',
    cvv: '884'
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = Math.round(subtotal * 0.08 * 100) / 100;
  const shipping = subtotal >= 150 ? 0 : 15;
  const grandTotal = subtotal + tax + shipping;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      const generatedId = `AURA-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderId(generatedId);
      setOrderConfirmed(true);
      onSuccess?.(generatedId);
    }, 1200);
  };

  const handleResetAndClose = () => {
    setOrderConfirmed(false);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-modal-title"
    >
      <div className="relative glass-panel rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 border border-white/20 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-neutral-300 hover:text-white hover:bg-white/20 transition-colors"
          aria-label="Close checkout"
        >
          <X className="w-5 h-5" />
        </button>

        {orderConfirmed ? (
          /* Confirmation Success Screen */
          <div className="text-center py-6 space-y-6 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-teal-500/20 text-teal-400 border border-teal-500/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-mono font-semibold uppercase text-teal-400 bg-teal-950/80 px-2.5 py-1 rounded-full border border-teal-800/40">
                Payment Authorized
              </span>
              <h3 className="font-display text-2xl font-bold text-white">
                Thank you for your order!
              </h3>
              <p className="text-xs text-neutral-300 max-w-sm mx-auto">
                Your order <strong className="text-white font-mono">{orderId}</strong> has been confirmed and allocated in our warehouse fulfillment queue.
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-4 text-left space-y-2 text-xs">
              <div className="flex justify-between text-neutral-400">
                <span>Confirmation Email</span>
                <span className="text-white">{formData.email}</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Shipping Address</span>
                <span className="text-white">{formData.address}, {formData.city}</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Total Amount Charged</span>
                <span className="text-teal-300 font-mono font-bold">${grandTotal.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="w-full btn-primary py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider"
            >
              Back to Storefront
            </button>
          </div>
        ) : (
          /* Checkout Input Form */
          <div className="space-y-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-teal-400 text-xs font-semibold uppercase tracking-wider">
                <Lock className="w-3.5 h-3.5" />
                <span>Express Secure Checkout</span>
              </div>
              <h3 id="checkout-modal-title" className="font-display text-xl sm:text-2xl font-bold text-white">
                Complete Your Order
              </h3>
              <p className="text-xs text-neutral-400">
                Simulated transaction with real-time stock allocation and delivery dispatch.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {/* Customer Info */}
              <div className="space-y-3">
                <h4 className="text-[11px] font-bold text-neutral-400 uppercase tracking-wide">1. Contact & Shipping</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-neutral-300 block mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-teal-400"
                    />
                  </div>
                  <div>
                    <label className="text-neutral-300 block mb-1">Email for Receipt</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-teal-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="sm:col-span-2">
                    <label className="text-neutral-300 block mb-1">Delivery Address</label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-teal-400"
                    />
                  </div>
                  <div>
                    <label className="text-neutral-300 block mb-1">Postal Code</label>
                    <input
                      type="text"
                      required
                      value={formData.postalCode}
                      onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                      className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-teal-400"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Details */}
              <div className="space-y-3 pt-3 border-t border-white/[0.08]">
                <h4 className="text-[11px] font-bold text-neutral-400 uppercase tracking-wide">2. Payment Card</h4>

                <div>
                  <label className="text-neutral-300 block mb-1">Card Number</label>
                  <div className="relative flex items-center">
                    <CreditCard className="w-4 h-4 text-neutral-400 absolute left-3 pointer-events-none" />
                    <input
                      type="text"
                      required
                      value={formData.cardNumber}
                      onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                      className="w-full bg-neutral-900 border border-white/10 rounded-xl pl-9 pr-3 py-2 text-white font-mono focus:outline-none focus:border-teal-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-neutral-300 block mb-1">Expires (MM/YY)</label>
                    <input
                      type="text"
                      required
                      value={formData.expiry}
                      onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                      className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3 py-2 text-white font-mono focus:outline-none focus:border-teal-400"
                    />
                  </div>
                  <div>
                    <label className="text-neutral-300 block mb-1">Security CVV</label>
                    <input
                      type="password"
                      required
                      maxLength="4"
                      value={formData.cvv}
                      onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                      className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3 py-2 text-white font-mono focus:outline-none focus:border-teal-400"
                    />
                  </div>
                </div>
              </div>

              {/* Total Summary */}
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between text-xs font-bold text-white">
                <span>Total Due Now</span>
                <span className="font-mono text-base text-teal-300">${grandTotal.toFixed(2)}</span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full btn-primary py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-teal-900/50"
              >
                {isProcessing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Authorizing Payment...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4" />
                    <span>Authorize & Pay ${grandTotal.toFixed(2)}</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
