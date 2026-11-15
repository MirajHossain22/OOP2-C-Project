# Project Overview: AURA & GadgetLoop BD Commerce

A hybrid e-commerce platform that combines a **modern, mobile-first web storefront** ready for Vercel deployment with a **C# .NET / SQL Server management core**.

---

### Core Highlights at a Glance

* **Modern Web Storefront (React 19 + Vite + Tailwind CSS v4):**
  * **Curated Catalog:** Real-time search, category filters, and detailed technical specification sheets.
  * **F-Commerce Order Extractor:** One-click parsing of customer chat messages from Facebook / WhatsApp into structured orders.
  * **Slide-Over Shopping Bag:** Sub-40ms off-canvas drawer with quantity controls, dynamic free-shipping progress tracker, and BDT currency formatting.
  * **Express Mobile Checkout:** Streamlined checkout with Cash on Delivery (COD), bKash, and Nagad options.

* **Live Seller & Admin Management Suite:**
  * **Interactive Console:** Directly models the desktop `AdminPanel.cs` operations—allowing real-time price updates, inventory restocks, and product publication that instantly reflect on the customer storefront.

* **Original Desktop Foundation (C# / .NET 4.8 / Windows Forms):**
  * University OOP2 course project featuring customer shopping panels, admin CRUD interfaces, ADO.NET data access, and relational SQL Server schema bindings.

* **Deployment Ready:**
  * Fully configured for **Vercel** with single-page application routing (`vercel.json`), responsive design for 375px–1536px viewports, and WCAG AA accessibility.

---

## 🚀 Quick Start (Local Development)

```bash
# Install dependencies
npm install

# Start the live development server
npm run dev

# Build for production
npm run build
```

Open `http://localhost:5173` in your browser.

---

## 🌐 Deploy to Vercel

1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: modern web storefront"
   git push origin main
   ```
2. Import the project into [Vercel](https://vercel.com/new).
3. Framework preset is auto-detected as **Vite**.
4. Click **Deploy**.
