import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Truck, Lock, ArrowRight, Phone, MapPin, User, Wallet, DollarSign } from 'lucide-react';
import { formatBDT } from '../data/products';

export default function CheckoutModal({ 
  isOpen, 
  onClose, 
  cartItems, 
  onSuccess,
  checkoutMeta
}) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    district: 'Dhaka',
    paymentMethod: 'Cash on Delivery', // 'Cash on Delivery' | 'bKash' | 'Nagad'
    notes: ''
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const isDhaka = formData.district.toLowerCase().includes('dhaka');
  const deliveryCharge = isDhaka ? (subtotal >= 2000 ? 0 : 60) : 100;
  const grandTotal = subtotal + deliveryCharge;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) return;

    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      const generatedId = `GL-BD-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderId(generatedId);
      setOrderConfirmed(true);
      onSuccess?.(generatedId);
    }, 900);
  };

  const handleResetAndClose = () => {
    setOrderConfirmed(false);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-modal-title"
    >
      <div className="relative surface-card rounded-3xl max-w-lg w-full p-5 sm:p-7 space-y-6 max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-[var(--bg-surface-elevated)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Close checkout"
        >
          <X className="w-5 h-5" />
        </button>

        {orderConfirmed ? (
          /* Confirmation Success Screen */
          <div className="text-center py-6 space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-2xl bg-[var(--primary-light)] text-[var(--primary)] border border-[var(--primary)]/30 flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1.5">
              <span className="text-[11px] font-mono font-bold uppercase text-[var(--primary)] bg-[var(--primary-light)] px-2.5 py-1 rounded-full border border-[var(--border-subtle)]">
                Order Placed Successfully
              </span>
              <h3 className="font-display text-2xl font-bold text-[var(--text-primary)]">
                Dhaka Hub Dispatch Queued
              </h3>
              <p className="text-xs text-[var(--text-muted)] max-w-sm mx-auto">
                Invoice & tracking code: <strong className="font-mono text-[var(--text-primary)]">{orderId}</strong>. We will confirm via call/SMS before parcel dispatch.
              </p>
            </div>

            <div className="bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] rounded-2xl p-4 text-left space-y-2 text-xs">
              <div className="flex justify-between text-[var(--text-muted)]">
                <span>Customer</span>
                <span className="text-[var(--text-primary)] font-bold">{formData.name} ({formData.phone})</span>
              </div>
              <div className="flex justify-between text-[var(--text-muted)]">
                <span>Delivery Address</span>
                <span className="text-[var(--text-primary)] font-medium text-right max-w-[200px] truncate">{formData.address}, {formData.district}</span>
              </div>
              <div className="flex justify-between text-[var(--text-muted)]">
                <span>Payment Mode</span>
                <span className="text-[var(--primary)] font-bold">{formData.paymentMethod}</span>
              </div>
              <div className="pt-2 border-t border-[var(--border-subtle)] flex justify-between font-bold text-sm">
                <span>Total Payable</span>
                <span className="font-mono text-base text-[var(--primary)]">{formatBDT(grandTotal)}</span>
              </div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="w-full btn-primary py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider min-h-[44px]"
            >
              Back to Storefront
            </button>
          </div>
        ) : (
          /* Checkout Input Form */
          <div className="space-y-5">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-[var(--primary)] text-xs font-bold uppercase tracking-wider">
                <Lock className="w-3.5 h-3.5" />
                <span>Fast Mobile Checkout</span>
              </div>
              <h3 id="checkout-modal-title" className="font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                Delivery & Payment Details
              </h3>
              <p className="text-xs text-[var(--text-muted)]">
                No credit card required for Cash on Delivery. Fill in your delivery details below.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              {/* Customer Info */}
              <div className="space-y-3">
                <div>
                  <label className="text-[var(--text-secondary)] font-bold block mb-1">
                    Your Full Name *
                  </label>
                  <div className="relative flex items-center">
                    <User className="w-4 h-4 text-[var(--text-muted)] absolute left-3 pointer-events-none" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tanvir Ahmed"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[var(--bg-base)] border border-[var(--border-subtle)] rounded-xl pl-9 pr-3 py-2.5 text-[var(--text-primary)] focus:outline-none focus:border-[var(--border-focus)] min-h-[44px]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[var(--text-secondary)] font-bold block mb-1">
                      Mobile Number (01XXXXXXXXX) *
                    </label>
                    <div className="relative flex items-center">
                      <Phone className="w-4 h-4 text-[var(--text-muted)] absolute left-3 pointer-events-none" />
                      <input
                        type="tel"
                        required
                        placeholder="01712-345678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[var(--bg-base)] border border-[var(--border-subtle)] rounded-xl pl-9 pr-3 py-2.5 text-[var(--text-primary)] font-mono focus:outline-none focus:border-[var(--border-focus)] min-h-[44px]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[var(--text-secondary)] font-bold block mb-1">
                      District *
                    </label>
                    <select
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      className="w-full bg-[var(--bg-base)] border border-[var(--border-subtle)] rounded-xl px-3 py-2.5 text-[var(--text-primary)] focus:outline-none focus:border-[var(--border-focus)] min-h-[44px] cursor-pointer"
                    >
                      <option value="Dhaka">Dhaka (৳0–৳60 delivery)</option>
                      <option value="Chattogram">Chattogram (৳100)</option>
                      <option value="Sylhet">Sylhet (৳100)</option>
                      <option value="Rajshahi">Rajshahi (৳100)</option>
                      <option value="Khulna">Khulna (৳100)</option>
                      <option value="Barishal">Barishal (৳100)</option>
                      <option value="Rangpur">Rangpur (৳100)</option>
                      <option value="Mymensingh">Mymensingh (৳100)</option>
                      <option value="Other District">Other District (৳100)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[var(--text-secondary)] font-bold block mb-1">
                    Full Delivery Address (House, Road, Area) *
                  </label>
                  <div className="relative flex items-center">
                    <MapPin className="w-4 h-4 text-[var(--text-muted)] absolute left-3 pointer-events-none" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. House 12, Road 4, Sector 7, Uttara"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full bg-[var(--bg-base)] border border-[var(--border-subtle)] rounded-xl pl-9 pr-3 py-2.5 text-[var(--text-primary)] focus:outline-none focus:border-[var(--border-focus)] min-h-[44px]"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="space-y-2 pt-2 border-t border-[var(--border-subtle)]">
                <label className="text-[var(--text-secondary)] font-bold block">
                  Select Payment Method:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Cash on Delivery', 'bKash', 'Nagad'].map((method) => {
                    const isSelected = formData.paymentMethod === method;
                    return (
                      <button
                        key={method}
                        type="button"
                        onClick={() => setFormData({ ...formData, paymentMethod: method })}
                        className={`p-2.5 rounded-xl border text-center transition-all min-h-[44px] flex flex-col items-center justify-center ${
                          isSelected 
                            ? 'border-[var(--primary)] bg-[var(--primary-light)] text-[var(--primary)] font-bold shadow-sm'
                            : 'border-[var(--border-subtle)] bg-[var(--bg-base)] text-[var(--text-secondary)]'
                        }`}
                      >
                        <span className="text-xs">{method}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Order Breakdown */}
              <div className="p-3.5 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] space-y-1 text-xs">
                <div className="flex justify-between text-[var(--text-muted)]">
                  <span>Items Total ({cartItems.length} items)</span>
                  <span className="font-mono text-[var(--text-primary)]">{formatBDT(subtotal)}</span>
                </div>
                <div className="flex justify-between text-[var(--text-muted)]">
                  <span>Delivery ({isDhaka ? 'Dhaka City' : 'Outside Dhaka'})</span>
                  <span className="font-mono text-[var(--primary)] font-semibold">
                    {deliveryCharge === 0 ? 'FREE' : formatBDT(deliveryCharge)}
                  </span>
                </div>
                <div className="pt-2 border-t border-[var(--border-subtle)] flex justify-between font-bold text-sm text-[var(--text-primary)]">
                  <span>Total Amount</span>
                  <span className="font-mono text-base text-[var(--primary)]">{formatBDT(grandTotal)}</span>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full btn-primary py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 min-h-[44px] shadow-lg shadow-[var(--primary-glow)]"
              >
                {isProcessing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Confirming Order...</span>
                  </>
                ) : (
                  <>
                    <Truck className="w-4 h-4" />
                    <span>Confirm Order ({formData.paymentMethod === 'Cash on Delivery' ? 'Pay upon Delivery' : formData.paymentMethod})</span>
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
