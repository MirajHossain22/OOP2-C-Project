import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Plus, 
  Edit3, 
  Save, 
  Check, 
  Trash2, 
  Package, 
  DollarSign, 
  Database, 
  TrendingUp,
  AlertTriangle
} from 'lucide-react';

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
    category: 'Electronics',
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
      specs: ["Precision Built", "Verified Stock"]
    });

    setShowAddModal(false);
    setNewProduct({
      name: '',
      category: 'Electronics',
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
    <section id="admin-console" className="py-24 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header with Admin Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-800/40 text-xs font-semibold text-amber-300">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
              <span>Interactive Management Console</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Live Store Inventory & Control Suite
            </h2>
            <p className="text-sm text-neutral-300">
              Directly mirrors the C# Windows Forms <code className="text-amber-400 font-mono text-xs">AdminPanel.cs</code> and <code className="text-amber-400 font-mono text-xs">ProductControl.cs</code> operations. Any adjustment made here immediately syncs with the customer storefront above!
            </p>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="btn-primary bg-amber-600 hover:bg-amber-500 text-neutral-950 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 self-start md:self-auto shadow-lg shadow-amber-950/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Product</span>
          </button>
        </div>

        {/* Telemetry Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="glass-card rounded-2xl p-5 border border-white/[0.08]">
            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400 mb-1">
              <Package className="w-4 h-4 text-teal-400" />
              <span>Active Catalog SKUs</span>
            </div>
            <div className="font-display text-2xl font-bold text-white font-mono">
              {products.length} Products
            </div>
            <div className="text-[11px] text-teal-400 mt-1">100% Synced with Storefront</div>
          </div>

          <div className="glass-card rounded-2xl p-5 border border-white/[0.08]">
            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400 mb-1">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span>Total Stock On Hand</span>
            </div>
            <div className="font-display text-2xl font-bold text-white font-mono">
              {totalUnits} Units
            </div>
            <div className="text-[11px] text-emerald-400 mt-1">Automatic depletion on checkout</div>
          </div>

          <div className="glass-card rounded-2xl p-5 border border-white/[0.08]">
            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400 mb-1">
              <DollarSign className="w-4 h-4 text-amber-400" />
              <span>Warehouse Valuation</span>
            </div>
            <div className="font-display text-2xl font-bold text-white font-mono">
              ${totalInventoryValue.toLocaleString()}
            </div>
            <div className="text-[11px] text-amber-400 mt-1">Live market calculation</div>
          </div>
        </div>

        {/* Live Editable Inventory Table */}
        <div className="glass-card rounded-2xl border border-white/[0.08] overflow-hidden shadow-2xl">
          <div className="p-4 sm:p-5 border-b border-white/[0.08] flex items-center justify-between bg-white/[0.02]">
            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-300">
              <Database className="w-4 h-4 text-teal-400" />
              <span>Live Table: [dbo].[Products]</span>
            </div>
            <span className="text-[11px] text-neutral-400">Click Edit to alter price or stock inline</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-neutral-300">
              <thead className="bg-neutral-900/80 text-[11px] uppercase tracking-wider text-neutral-400 font-semibold border-b border-white/[0.06]">
                <tr>
                  <th scope="col" className="py-3.5 px-4 sm:px-6">Product</th>
                  <th scope="col" className="py-3.5 px-4">Category</th>
                  <th scope="col" className="py-3.5 px-4">Price ($)</th>
                  <th scope="col" className="py-3.5 px-4">Available Stock</th>
                  <th scope="col" className="py-3.5 px-4">Status</th>
                  <th scope="col" className="py-3.5 px-4 sm:px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.05]">
                {products.map((item) => {
                  const isEditing = editingId === item.id;
                  const isLow = item.stock <= 10;

                  return (
                    <tr key={item.id} className="hover:bg-white/[0.02] transition-colors">
                      {/* Product Thumbnail & Name */}
                      <td className="py-3 px-4 sm:px-6 flex items-center gap-3">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-10 h-10 rounded-lg object-cover bg-neutral-900 shrink-0 border border-white/10"
                        />
                        <div>
                          <div className="font-semibold text-white">{item.name}</div>
                          <div className="text-[10px] text-neutral-500 font-mono">ID: #{item.id}</div>
                        </div>
                      </td>

                      {/* Category */}
                      <td className="py-3 px-4">
                        <span className="px-2 py-0.5 rounded bg-white/[0.05] text-[10px] font-medium text-neutral-300">
                          {item.category}
                        </span>
                      </td>

                      {/* Price */}
                      <td className="py-3 px-4 font-mono font-semibold">
                        {isEditing ? (
                          <input
                            type="number"
                            value={editForm.price}
                            onChange={(e) => setEditForm({ ...editForm, price: e.target.value })}
                            className="w-20 bg-neutral-900 border border-teal-400 rounded px-2 py-1 text-white text-xs"
                          />
                        ) : (
                          `$${item.price}`
                        )}
                      </td>

                      {/* Stock */}
                      <td className="py-3 px-4 font-mono font-semibold">
                        {isEditing ? (
                          <input
                            type="number"
                            value={editForm.stock}
                            onChange={(e) => setEditForm({ ...editForm, stock: e.target.value })}
                            className="w-20 bg-neutral-900 border border-teal-400 rounded px-2 py-1 text-white text-xs"
                          />
                        ) : (
                          `${item.stock} units`
                        )}
                      </td>

                      {/* Stock Status Indicator */}
                      <td className="py-3 px-4">
                        {item.stock === 0 ? (
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-rose-400 bg-rose-950/60 border border-rose-800/40 px-2 py-0.5 rounded">
                            Sold Out
                          </span>
                        ) : isLow ? (
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-amber-400 bg-amber-950/60 border border-amber-800/40 px-2 py-0.5 rounded">
                            <AlertTriangle className="w-3 h-3" /> Low Stock
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">
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
                              className="p-1.5 rounded-lg bg-teal-500/20 text-teal-300 hover:bg-teal-500/30 transition-colors"
                              title="Save Changes"
                            >
                              <Save className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => setEditingId(null)}
                              className="text-neutral-400 hover:text-white text-xs px-1"
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => handleStartEdit(item)}
                              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                              title="Edit product"
                            >
                              <Edit3 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => {
                                onDeleteProduct(item.id);
                                onNotify?.("Product deleted from catalog", "info");
                              }}
                              className="p-1.5 rounded-lg text-neutral-500 hover:text-rose-400 hover:bg-rose-950/30 transition-colors"
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
          <div className="relative glass-panel rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 border border-white/20 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 className="font-display text-xl font-bold text-white flex items-center gap-2">
                <Plus className="w-5 h-5 text-amber-400" />
                <span>Add Product to Catalog</span>
              </h3>
              <button 
                onClick={() => setShowAddModal(false)}
                className="text-neutral-400 hover:text-white text-lg font-bold"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleCreateProduct} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="text-neutral-300 font-semibold">Product Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Titanium Wireless Mouse"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-neutral-300 font-semibold">Category *</label>
                  <select
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                    className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="Electronics">Electronics</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Footwear & Bags">Footwear & Bags</option>
                    <option value="Home & Office">Home & Office</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-neutral-300 font-semibold">Price ($ USD) *</label>
                  <input
                    type="number"
                    required
                    min="1"
                    placeholder="149"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                    className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-neutral-300 font-semibold">Initial Stock *</label>
                  <input
                    type="number"
                    required
                    min="1"
                    placeholder="25"
                    value={newProduct.stock}
                    onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                    className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-neutral-300 font-semibold">Image URL</label>
                  <input
                    type="url"
                    value={newProduct.image}
                    onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                    className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-neutral-300 font-semibold">Short Description</label>
                <textarea
                  rows="2"
                  placeholder="Engineered for ergonomic performance with precision optical sensors."
                  value={newProduct.description}
                  onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                  className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3.5 py-2 text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="btn-secondary px-4 py-2.5 rounded-xl font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-primary bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold px-6 py-2.5 rounded-xl shadow-lg"
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
