import React, { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import ProductCatalog from './components/ProductCatalog';
import BentoFeatures from './components/BentoFeatures';
import HowItWorks from './components/HowItWorks';
import AdminConsolePreview from './components/AdminConsolePreview';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import SellerAuthModal from './components/SellerAuthModal';
import Toast from './components/Toast';
import { INITIAL_PRODUCTS } from './data/products';

export default function App() {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [cartItems, setCartItems] = useState([
    {
      ...INITIAL_PRODUCTS[0],
      quantity: 1
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSellerAuthOpen, setIsSellerAuthOpen] = useState(false);
  const [isSellerAuthenticated, setIsSellerAuthenticated] = useState(() => {
    try {
      return localStorage.getItem('aura_seller_auth') === 'true';
    } catch {
      return false;
    }
  });
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [toast, setToast] = useState(null);

  const catalogRef = useRef(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3200);
  };

  const handleSellerAuthenticated = (status) => {
    setIsSellerAuthenticated(status);
    setIsAdminMode(status);
    try {
      if (status) {
        localStorage.setItem('aura_seller_auth', 'true');
      } else {
        localStorage.removeItem('aura_seller_auth');
      }
    } catch {
      // Ignore storage errors in restricted contexts
    }

    if (status) {
      setTimeout(() => {
        document.getElementById('admin-console')?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  const handleLockSeller = () => {
    handleSellerAuthenticated(false);
    showToast("Seller management locked.", "info");
  };

  const handleAddToCart = (product) => {
    if (product.stock <= 0) {
      showToast(`${product.name} is currently out of stock`, 'error');
      return;
    }

    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });

    // Optimistically update stock count in live catalog
    setProducts((prev) =>
      prev.map((p) => (p.id === product.id ? { ...p, stock: Math.max(0, p.stock - 1) } : p))
    );

    showToast(`Added ${product.name} to your bag`);
  };

  const handleUpdateCartQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveCartItem(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveCartItem = (id) => {
    const item = cartItems.find((i) => i.id === id);
    setCartItems((prev) => prev.filter((i) => i.id !== id));
    if (item) {
      showToast(`Removed ${item.name} from bag`, 'info');
    }
  };

  const handleUpdateProduct = (id, updatedFields) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updatedFields } : p))
    );
  };

  const handleAddProduct = (newProd) => {
    setProducts((prev) => [newProd, ...prev]);
  };

  const handleDeleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const handleCheckoutSuccess = (orderId) => {
    setCartItems([]);
    showToast(`Order #${orderId} verified and confirmed!`, 'success');
  };

  const scrollToCatalog = () => {
    catalogRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col justify-between selection:bg-teal-500/25 selection:text-teal-200">
      
      {/* Sticky Pill Navigation with Demo Key Access */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onScrollToCatalog={scrollToCatalog}
        isAdminMode={isAdminMode}
        onToggleAdminMode={() => {
          if (!isSellerAuthenticated) {
            setIsSellerAuthOpen(true);
          } else {
            setIsAdminMode(!isAdminMode);
          }
        }}
        isSellerAuthenticated={isSellerAuthenticated}
        onOpenSellerAuth={() => setIsSellerAuthOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onNotify={showToast}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreClick={scrollToCatalog}
          heroProduct={products[0]}
          onAddToCart={handleAddToCart}
        />

        {/* Social Proof & Trust Metrics */}
        <SocialProof />

        {/* Curated Product Catalog */}
        <ProductCatalog
          products={products}
          onAddToCart={handleAddToCart}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          catalogRef={catalogRef}
        />

        {/* Bento Features Grid */}
        <BentoFeatures />

        {/* 3-Step Workflow */}
        <HowItWorks onStartShopping={scrollToCatalog} />

        {/* Live Admin & Seller Console Suite */}
        <AdminConsolePreview
          products={products}
          onUpdateProduct={handleUpdateProduct}
          onAddProduct={handleAddProduct}
          onDeleteProduct={handleDeleteProduct}
          onNotify={showToast}
          isSellerAuthenticated={isSellerAuthenticated}
          onOpenSellerAuth={() => setIsSellerAuthOpen(true)}
          onLockSeller={handleLockSeller}
        />

        {/* FAQ Accordion */}
        <FAQ />
      </main>

      {/* Modern Footer */}
      <Footer onNotify={showToast} />

      {/* Off-canvas Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      {/* Express Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        onSuccess={handleCheckoutSuccess}
      />

      {/* Seller Demo Key Authorization Modal */}
      <SellerAuthModal
        isOpen={isSellerAuthOpen}
        onClose={() => setIsSellerAuthOpen(false)}
        onAuthenticate={handleSellerAuthenticated}
        onNotify={showToast}
      />

      {/* Floating Toast Notification */}
      <Toast toast={toast} onClose={() => setToast(null)} />

    </div>
  );
}
