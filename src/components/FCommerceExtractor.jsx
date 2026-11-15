import React, { useState } from 'react';
import { Sparkles, MessageSquareText, ArrowRight, CheckCircle2, User, Phone, MapPin, Package, X, Copy } from 'lucide-react';
import { formatBDT } from '../data/products';

export default function FCommerceExtractor({ isOpen, onClose, products, onApplyOrder }) {
  const [rawText, setRawText] = useState('');
  const [parsedData, setParsedData] = useState(null);

  if (!isOpen) return null;

  const sampleMessages = [
    `Hi brother, I want to order 1 Soundcore R50i TWS Earbuds.
Name: Miraj Hossain
Phone: 01712-345678
Address: House 24, Road 7, Sector 4, Uttara, Dhaka
Payment: Cash on delivery`,
    `Need 1x JBL Tune 510BT Wireless Headphones.
Send to Tanvir Ahmed, 01819998877, GEC Circle, Chattogram. I will pay via bKash.`
  ];

  const handleParse = (textToParse = rawText) => {
    if (!textToParse.trim()) return;

    // Extract Bangladeshi Phone number (013/014/015/016/017/018/019 or +880)
    const phoneMatch = textToParse.match(/(?:\+8801|01)[3-9]\d{8}|01[3-9]\d{2}[-\s]?\d{6}/);
    const phone = phoneMatch ? phoneMatch[0].replace(/[-\s]/g, '') : '';

    // Extract Name
    let name = '';
    const nameMatch = textToParse.match(/(?:Name|Customer|Amar naam|Name:)\s*[:\-]?\s*([A-Za-z\s.]{3,30})/i);
    if (nameMatch) {
      name = nameMatch[1].trim();
    } else {
      const lines = textToParse.split('\n').map(l => l.trim()).filter(Boolean);
      const possibleNameLine = lines.find(l => /^(?:I am|send to)\s+([A-Za-z\s]+)/i.test(l));
      if (possibleNameLine) {
        name = possibleNameLine.replace(/^(?:I am|send to)\s+/i, '').split(',')[0].trim();
      }
    }

    // Match Product from Catalog
    let matchedProduct = null;
    let matchedQty = 1;
    for (const p of products) {
      const searchTerms = [p.name.toLowerCase(), ...p.name.toLowerCase().split(' ').slice(0, 2)];
      if (searchTerms.some(term => textToParse.toLowerCase().includes(term))) {
        matchedProduct = p;
        break;
      }
    }
    // Default to first product if not found
    if (!matchedProduct && products.length > 0) {
      matchedProduct = products[0];
    }

    // Quantity match
    const qtyMatch = textToParse.match(/(\d+)\s*(?:x|pcs|ta|piece)/i) || textToParse.match(/(?:order|want)\s*(\d+)/i);
    if (qtyMatch) {
      matchedQty = Math.max(1, parseInt(qtyMatch[1], 10));
    }

    // Address extraction
    let address = '';
    const addressMatch = textToParse.match(/(?:Address|Thikana|Location|Address:)\s*[:\-]?\s*([^\n\r]+)/i);
    if (addressMatch) {
      address = addressMatch[1].trim();
    } else {
      const lines = textToParse.split('\n').map(l => l.trim()).filter(Boolean);
      const addrLine = lines.find(l => /road|house|sector|dhaka|chattogram|sylhet|block|lane/i.test(l) && !phoneMatch?.[0]?.includes(l));
      if (addrLine) address = addrLine;
    }

    // Payment detection
    const isBkash = /bkash|bikash/i.test(textToParse);
    const isNagad = /nagad/i.test(textToParse);
    const paymentMode = isBkash ? 'bKash' : isNagad ? 'Nagad' : 'Cash on Delivery';

    // City determination for delivery charge
    const isDhaka = /dhaka|uttara|mirpur|dhanmondi|gulshan|banani|mohammadpur/i.test(address || textToParse);
    const deliveryCharge = isDhaka ? 0 : 80;

    setParsedData({
      name: name || 'Valued Customer',
      phone: phone || '01700-000000',
      address: address || 'Dhaka, Bangladesh',
      product: matchedProduct,
      quantity: matchedQty,
      paymentMode,
      deliveryCity: isDhaka ? 'Inside Dhaka (Free)' : 'Outside Dhaka (+৳80)',
      deliveryCharge
    });
  };

  const handleApply = () => {
    if (!parsedData || !parsedData.product) return;
    onApplyOrder({
      ...parsedData.product,
      quantity: parsedData.quantity,
      customerDetails: {
        name: parsedData.name,
        phone: parsedData.phone,
        address: parsedData.address,
        paymentMode: parsedData.paymentMode
      }
    });
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="extractor-title"
    >
      <div className="relative surface-card rounded-3xl max-w-2xl w-full p-5 sm:p-7 space-y-6 max-h-[92vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-3 border-b border-[var(--border-subtle)]">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] text-[11px] font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>F-Commerce AI Parser</span>
            </div>
            <h2 id="extractor-title" className="font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
              Paste Customer Message / Order Note
            </h2>
            <p className="text-xs text-[var(--text-muted)]">
              Directly parses customer messages from Facebook Messenger, WhatsApp, or Instagram DM into structured order data.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[var(--bg-surface-elevated)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close parser"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Sample Load Chips */}
        <div className="space-y-2">
          <span className="text-[11px] font-semibold text-[var(--text-secondary)]">
            Try with an example F-Commerce chat snippet:
          </span>
          <div className="flex flex-wrap gap-2">
            {sampleMessages.map((sample, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setRawText(sample);
                  handleParse(sample);
                }}
                className="text-xs px-3 py-1.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] hover:border-[var(--primary)] text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors text-left font-medium min-h-[44px] flex items-center gap-1.5"
              >
                <MessageSquareText className="w-3.5 h-3.5 text-[var(--primary)] shrink-0" />
                <span>Example #{idx + 1} ({idx === 0 ? 'Dhaka COD' : 'Chattogram bKash'})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Input Textarea */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-[var(--text-secondary)] block">
            Customer Message Text:
          </label>
          <textarea
            rows="4"
            value={rawText}
            onChange={(e) => setRawText(e.target.value)}
            placeholder="Paste text like: I want to order 1 Soundcore R50i, send to Miraj, 01712345678, Dhanmondi Dhaka..."
            className="w-full bg-[var(--bg-base)] border border-[var(--border-subtle)] rounded-2xl p-3.5 text-xs text-[var(--text-primary)] placeholder-[var(--text-faint)] focus:outline-none focus:border-[var(--border-focus)] transition-colors"
          />
          <button
            type="button"
            onClick={() => handleParse()}
            className="btn-secondary px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 min-h-[44px]"
          >
            <Sparkles className="w-4 h-4 text-[var(--primary)]" />
            <span>Extract Customer & Product Details</span>
          </button>
        </div>

        {/* Extracted Structured Card */}
        {parsedData && (
          <div className="p-4 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] space-y-4 animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[var(--primary)] uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Parsed Order Structure</span>
              </span>
              <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-[var(--primary-light)] text-[var(--primary)]">
                {parsedData.paymentMode}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-1">
                <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wide flex items-center gap-1">
                  <User className="w-3 h-3 text-[var(--primary)]" /> Customer
                </span>
                <div className="font-bold text-[var(--text-primary)]">{parsedData.name}</div>
              </div>

              <div className="p-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-1">
                <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wide flex items-center gap-1">
                  <Phone className="w-3 h-3 text-[var(--primary)]" /> Phone
                </span>
                <div className="font-mono font-bold text-[var(--text-primary)]">{parsedData.phone}</div>
              </div>

              <div className="p-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-1">
                <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wide flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[var(--primary)]" /> Shipping Address
                </span>
                <div className="text-[var(--text-primary)] leading-tight">{parsedData.address}</div>
                <div className="text-[10px] text-[var(--primary)] font-semibold">{parsedData.deliveryCity}</div>
              </div>

              <div className="p-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-1">
                <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wide flex items-center gap-1">
                  <Package className="w-3 h-3 text-[var(--primary)]" /> Item Selected
                </span>
                <div className="font-bold text-[var(--text-primary)] truncate">{parsedData.product.name}</div>
                <div className="text-[11px] font-mono text-[var(--text-secondary)]">
                  {parsedData.quantity}x • {formatBDT(parsedData.product.price * parsedData.quantity)}
                </div>
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={handleApply}
              className="w-full btn-primary py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 min-h-[44px]"
            >
              <span>Add to Bag & Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
