import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Plus, 
  Edit3, 
  Save, 
  Check, 
  Trash2, 
  Package, 
  Database, 
  TrendingUp,
  AlertTriangle
} from 'lucide-react';
import { formatBDT } from '../data/products';

export default function AdminConsolePreview({ 
  products, 
  onUpdateProduct, 
  onAddProduct, 
  onDeleteProduct,
  onNotify
}) {
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ price: 0, stock: 0 });
  const [showAddModal, setShowAddModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: 'TWS Earbuds',
    price: '',
    stock: '',
    description: '',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80'
  });

  const handleStartEdit = (product) => {
    setEditingId(product.id);
    setEditForm({ price: product.price, stock: product.stock });
  };

  const handleSaveEdit = (id) => {
    onUpdateProduct(id, {
      price: Number(editForm.price),
      stock: Number(editForm.stock)
    });
    setEditingId(null);
    onNotify?.("Product updated in live catalog", "success");
  };

  const handleCreateProduct = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price || !newProduct.stock) {
      onNotify?.("Please fill all required fields", "error");
      return;
    }

    onAddProduct({
      id: Date.now(),
      name: newProduct.name,
      category: newProduct.category,
      price: Number(newProduct.price),
      originalPrice: Number(newProduct.price) * 1.2,
      stock: Number(newProduct.stock),
      rating: 5.0,
      reviewsCount: 1,
      badge: "Newly Listed",
      image: newProduct.image,
      description: newProduct.description || "Premium addition to the collection.",
      specs: ["Authentic Sourced", "Warranty Backed"]
    });

    setShowAddModal(false);
    setNewProduct({
      name: '',
      category: 'TWS Earbuds',
      price: '',
      stock: '',
      description: '',
      image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80'
    });
    onNotify?.("Product successfully added to live storefront!", "success");
  };

  const totalInventoryValue = products.reduce((acc, p) => acc + (p.price * p.stock), 0);
  const totalUnits = products.reduce((acc, p) => acc + p.stock, 0);

  return (
    <section id="admin-console" className="py-20 border-t border-[var(--border-subtle)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header with Admin Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-xs font-bold text-emerald-600 dark:text-emerald-400">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Seller Inventory & Catalog Manager</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
              Live Store Inventory & Control Suite
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)]">
              Directly mirrors the C# Windows Forms <code className="text-[var(--primary)] font-mono text-xs">AdminPanel.cs</code> and <code className="text-[var(--primary)] font-mono text-xs">ProductControl.cs</code> operations. Any adjustment made here immediately syncs across the storefront.
            </p>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="btn-primary px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 self-start md:self-auto min-h-[44px]"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Product</span>
          </button>
        </div>

        {/* Telemetry Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="surface-card rounded-2xl p-5 border border-[var(--border-subtle)]">
            <div className="flex items-center gap-2 text-xs font-bold text-[var(--text-muted)] mb-1">
              <Package className="w-4 h-4 text-[var(--primary)]" />
              <span>Active Catalog SKUs</span>
            </div>
            <div className="font-display text-2xl font-bold text-[var(--text-primary)] font-mono">
              {products.length} Products
            </div>
            <div className="text-[11px] text-[var(--primary)] mt-1 font-medium">100% Synced with Storefront</div>
          </div>

          <div className="surface-card rounded-2xl p-5 border border-[var(--border-subtle)]">
            <div className="flex items-center gap-2 text-xs font-bold text-[var(--text-muted)] mb-1">
              <TrendingUp className="w-4 h-4 text-emerald-500" />
              <span>Total Units in Stock</span>
            </div>
            <div className="font-display text-2xl font-bold text-[var(--text-primary)] font-mono">
              {totalUnits} Units
            </div>
            <div className="text-[11px] text-[var(--text-muted)] mt-1">Automatic depletion on checkout</div>
          </div>

          <div className="surface-card rounded-2xl p-5 border border-[var(--border-subtle)]">
            <div className="flex items-center gap-2 text-xs font-bold text-[var(--text-muted)] mb-1">
              <span className="text-[var(--primary)] font-bold text-sm">৳</span>
              <span>Warehouse Valuation</span>
            </div>
            <div className="font-display text-2xl font-bold text-[var(--text-primary)] font-mono">
              {formatBDT(totalInventoryValue)}
            </div>
            <div className="text-[11px] text-[var(--text-muted)] mt-1">Live BDT inventory assessment</div>
          </div>
        </div>

        {/* Live Editable Inventory Table */}
        <div className="surface-card rounded-2xl border border-[var(--border-subtle)] overflow-hidden shadow-sm">
          <div className="p-4 sm:p-5 border-b border-[var(--border-subtle)] flex items-center justify-between bg-[var(--bg-surface-elevated)]">
            <div className="flex items-center gap-2 text-xs font-bold text-[var(--text-primary)]">
              <Database className="w-4 h-4 text-[var(--primary)]" />
              <span>Live Table: [dbo].[Products]</span>
            </div>
            <span className="text-[11px] text-[var(--text-muted)]">Click Edit to alter price or stock inline</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-[var(--text-secondary)]">
              <thead className="bg-[var(--bg-surface-elevated)] text-[11px] uppercase tracking-wider text-[var(--text-muted)] font-bold border-b border-[var(--border-subtle)]">
                <tr>
                  <th scope="col" className="py-3.5 px-4 sm:px-6">Product</th>
                  <th scope="col" className="py-3.5 px-4">Category</th>
                  <th scope="col" className="py-3.5 px-4">Price (BDT)</th>
                  <th scope="col" className="py-3.5 px-4">Stock</th>
                  <th scope="col" className="py-3.5 px-4">Status</th>
                  <th scope="col" className="py-3.5 px-4 sm:px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-subtle)]">
                {products.map((item) => {
                  const isEditing = editingId === item.id;
                  const isLow = item.stock <= 10;

                  return (
                    <tr key={item.id} className="hover:bg-[var(--bg-surface-elevated)] transition-colors">
                      {/* Product Thumbnail & Name */}
                      <td className="py-3 px-4 sm:px-6 flex items-center gap-3">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-10 h-10 rounded-lg object-cover bg-[var(--bg-surface-elevated)] shrink-0 border border-[var(--border-subtle)]"
                        />
                        <div>
                          <div className="font-bold text-[var(--text-primary)]">{item.name}</div>
                          <div className="text-[10px] text-[var(--text-muted)] font-mono">ID: #{item.id}</div>
                        </div>
                      </td>

                      {/* Category */}
                      <td className="py-3 px-4">
                        <span className="px-2 py-0.5 rounded bg-[var(--bg-surface-elevated)] text-[10px] font-bold text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                          {item.category}
                        </span>
                      </td>

                      {/* Price */}
                      <td className="py-3 px-4 font-mono font-bold text-[var(--text-primary)]">
                        {isEditing ? (
                          <input
                            type="number"
                            value={editForm.price}
                            onChange={(e) => setEditForm({ ...editForm, price: e.target.value })}
                            className="w-24 bg-[var(--bg-base)] border border-[var(--border-focus)] rounded px-2 py-1 text-[var(--text-primary)] text-xs"
                          />
                        ) : (
                          formatBDT(item.price)
                        )}
                      </td>

                      {/* Stock */}
                      <td className="py-3 px-4 font-mono font-bold text-[var(--text-primary)]">
                        {isEditing ? (
                          <input
                            type="number"
                            value={editForm.stock}
                            onChange={(e) => setEditForm({ ...editForm, stock: e.target.value })}
                            className="w-20 bg-[var(--bg-base)] border border-[var(--border-focus)] rounded px-2 py-1 text-[var(--text-primary)] text-xs"
                          />
                        ) : (
                          `${item.stock} units`
                        )}
                      </td>

                      {/* Status */}
                      <td className="py-3 px-4">
                        {item.stock === 0 ? (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-rose-600 bg-rose-500/10 border border-rose-500/30 px-2 py-0.5 rounded">
                            Sold Out
                          </span>
                        ) : isLow ? (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded">
                            <AlertTriangle className="w-3 h-3" /> Low Stock
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded">
                            <Check className="w-3 h-3" /> In Stock
                          </span>
                        )}
                      </td>

                      {/* Actions */}
                      <td className="py-3 px-4 sm:px-6 text-right">
                        {isEditing ? (
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => handleSaveEdit(item.id)}
                              className="p-1.5 rounded-lg bg-[var(--primary-light)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-colors"
                              title="Save Changes"
                            >
                              <Save className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => setEditingId(null)}
                              className="text-[var(--text-muted)] hover:text-[var(--text-primary)] text-xs px-1"
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => handleStartEdit(item)}
                              className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center"
                              title="Edit product"
                            >
                              <Edit3 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => {
                                onDeleteProduct(item.id);
                                onNotify?.("Product deleted from catalog", "info");
                              }}
                              className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-rose-500 hover:bg-rose-500/10 transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center"
                              title="Delete product"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Add New Product Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative surface-card rounded-3xl max-w-lg w-full p-6 sm:p-7 space-y-5 border border-[var(--border-subtle)] shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
              <h3 className="font-display text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                <Plus className="w-5 h-5 text-[var(--primary)]" />
                <span>Add Product to Catalog</span>
              </h3>
              <button 
                onClick={() => setShowAddModal(false)}
                className="text-[var(--text-muted)] hover:text-[var(--text-primary)] text-lg font-bold min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleCreateProduct} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="text-[var(--text-secondary)] font-bold">Product Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Soundcore Life P3 Earbuds"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  className="w-full bg-[var(--bg-base)] border border-[var(--border-subtle)] rounded-xl px-3.5 py-2.5 text-[var(--text-primary)] focus:outline-none focus:border-[var(--border-focus)] min-h-[44px]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[var(--text-secondary)] font-bold">Category *</label>
                  <select
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                    className="w-full bg-[var(--bg-base)] border border-[var(--border-subtle)] rounded-xl px-3 py-2.5 text-[var(--text-primary)] focus:outline-none focus:border-[var(--border-focus)] min-h-[44px]"
                  >
                    <option value="TWS Earbuds">TWS Earbuds</option>
                    <option value="Wireless Headphones">Wireless Headphones</option>
                    <option value="Microphones">Microphones</option>
                    <option value="Monitors">Monitors</option>
                    <option value="Monitor Lights">Monitor Lights</option>
                    <option value="Power & Chargers">Power & Chargers</option>
                    <option value="Desk Setup">Desk Setup</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[var(--text-secondary)] font-bold">Price (BDT) *</label>
                  <input
                    type="number"
                    required
                    min="1"
                    placeholder="2500"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                    className="w-full bg-[var(--bg-base)] border border-[var(--border-subtle)] rounded-xl px-3.5 py-2.5 text-[var(--text-primary)] focus:outline-none focus:border-[var(--border-focus)] min-h-[44px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[var(--text-secondary)] font-bold">Initial Stock *</label>
                  <input
                    type="number"
                    required
                    min="1"
                    placeholder="20"
                    value={newProduct.stock}
                    onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                    className="w-full bg-[var(--bg-base)] border border-[var(--border-subtle)] rounded-xl px-3.5 py-2.5 text-[var(--text-primary)] focus:outline-none focus:border-[var(--border-focus)] min-h-[44px]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[var(--text-secondary)] font-bold">Image URL</label>
                  <input
                    type="url"
                    value={newProduct.image}
                    onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                    className="w-full bg-[var(--bg-base)] border border-[var(--border-subtle)] rounded-xl px-3.5 py-2.5 text-[var(--text-primary)] focus:outline-none focus:border-[var(--border-focus)] min-h-[44px]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[var(--text-secondary)] font-bold">Short Description</label>
                <textarea
                  rows="2"
                  placeholder="Engineered for clear sound and active daily use."
                  value={newProduct.description}
                  onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                  className="w-full bg-[var(--bg-base)] border border-[var(--border-subtle)] rounded-xl px-3.5 py-2 text-[var(--text-primary)] focus:outline-none focus:border-[var(--border-focus)]"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-[var(--border-subtle)]">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="btn-secondary px-4 py-2.5 rounded-xl font-bold min-h-[44px]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-primary font-bold px-6 py-2.5 rounded-xl min-h-[44px]"
                >
                  Publish to Store
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
}
