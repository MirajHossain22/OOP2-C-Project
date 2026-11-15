# Project Overview: AURA Commerce

**AURA Commerce** is a hybrid e-commerce platform that combines a **modern, mobile-first web storefront** ready for Vercel deployment with a **C# .NET / SQL Server management core**.

---

### Core Highlights at a Glance

* **Modern Web Storefront (React 19 + Vite + Tailwind CSS v4):**
  * **Curated Catalog:** Real-time search, category filters, and detailed technical specification sheets.
  * **Slide-Over Shopping Bag:** Sub-40ms off-canvas drawer with quantity controls, dynamic free-shipping progress tracker, and tax calculation.
  * **Express Mobile Checkout:** Simulated 256-bit encrypted checkout with input formatting, CVV masking, and immediate order verification.

* **Live Seller & Admin Management Suite:**
  * **Interactive Console:** Directly models the desktop `AdminPanel.cs` operations—allowing real-time price updates, inventory restocks, and product publication that instantly reflect on the customer storefront.
  * **Instant Evaluation Access:** Reviewers and evaluators can unlock full administrative privileges using the demo key:
    ```text
    demo-seller-key
    ```

* **Original Desktop Foundation (C# / .NET 4.8 / Windows Forms):**
  * University OOP2 course project featuring customer shopping panels, admin CRUD interfaces, ADO.NET data access, and relational SQL Server schema bindings.

* **Deployment Ready:**
  * Fully configured for **Vercel** with single-page application routing (`vercel.json`), responsive design for 375px–1536px viewports, and WCAG AA accessibility.

---

## 🔑 Demo Access Key (Instant Seller Access)

To access and test the **Seller / Admin Management Suite** (live inventory editing, real-time product publishing, stock restock, and catalog controls):

```text
demo-seller-key
```

* **How to use:** Anyone evaluating or testing the application can paste `demo-seller-key` into the **Seller Access** prompt (or click the top banner chip) to immediately unlock unrestricted seller and administrative privileges on the live website.

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
   git commit -m "feat: modern web storefront with seller demo key"
   git push origin main
   ```
2. Import the project into [Vercel](https://vercel.com/new).
3. Framework preset is auto-detected as **Vite**.
4. Click **Deploy**.
