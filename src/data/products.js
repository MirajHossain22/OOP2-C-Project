export const INITIAL_PRODUCTS = [
  {
    id: 1,
    name: "Apex Precision Chronometer",
    category: "Accessories",
    price: 349,
    originalPrice: 420,
    rating: 4.9,
    reviewsCount: 148,
    stock: 14,
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    description: "Aircraft-grade titanium chassis with sapphire glass, 100m water resistance, and automatic movement.",
    specs: ["Titanium Grade 5", "Sapphire Crystal", "48h Reserve"]
  },
  {
    id: 2,
    name: "AeroPulse Studio ANC Headphones",
    category: "Electronics",
    price: 289,
    originalPrice: 349,
    rating: 4.8,
    reviewsCount: 230,
    stock: 22,
    badge: "Editor's Pick",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    description: "Active acoustic cancellation with 40mm beryllium drivers, spatial audio tracking, and 45h playtime.",
    specs: ["Active Noise Canceling", "45h Battery", "Lossless Bluetooth 5.4"]
  },
  {
    id: 3,
    name: "Vanguard Minimalist Leather Pack",
    category: "Footwear & Bags",
    price: 195,
    originalPrice: 240,
    rating: 4.9,
    reviewsCount: 92,
    stock: 8,
    badge: "Low Stock",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    description: "Handcrafted full-grain Italian leather with dedicated 16-inch padded laptop sleeve and magnetic Fidlock clasps.",
    specs: ["Full-Grain Leather", "Fidlock Magnetic", "Water-Repellent"]
  },
  {
    id: 4,
    name: "Strata Lumina Desk Lamp",
    category: "Home & Office",
    price: 160,
    originalPrice: 195,
    rating: 4.7,
    reviewsCount: 76,
    stock: 35,
    badge: "New Release",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    description: "Circadian rhythm adaptive lighting, anodized matte aluminum armature with touchless gesture dimming.",
    specs: ["98+ CRI LED", "Gesture Dimming", "Qi 15W Base"]
  },
  {
    id: 5,
    name: "Helios Mechanical Keyboard",
    category: "Electronics",
    price: 215,
    originalPrice: 260,
    rating: 4.9,
    reviewsCount: 312,
    stock: 19,
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
    description: "Gasket-mounted hot-swappable tactile switches, CNC milled brass weight plate, and PBT dye-sub keycaps.",
    specs: ["Gasket Mount", "Hot-Swap PCB", "Wireless 2.4G & BT"]
  },
  {
    id: 6,
    name: "Equinox Matte Ceramic Vessel Set",
    category: "Home & Office",
    price: 85,
    originalPrice: 110,
    rating: 4.6,
    reviewsCount: 54,
    stock: 42,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=800&q=80",
    description: "Double-walled artisanal ceramic brew set with dripper, heat retention glaze, and walnut coaster.",
    specs: ["Hand-Thrown Stoneware", "Thermal Retention", "Walnut Trim"]
  }
];

export const CATEGORIES = ["All Items", "Electronics", "Accessories", "Footwear & Bags", "Home & Office"];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "The checkout took less than 15 seconds, and the Apex Chronometer was at my door in two days. The design aesthetic is leagues above any standard shop.",
    author: "Elena Rostova",
    role: "Architect & Industrial Designer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    verified: true,
    rating: 5,
    itemPurchased: "Apex Precision Chronometer"
  },
  {
    id: 2,
    quote: "Switching from messy spreadsheet inventory to this integrated live manager and customer front saved our team 12 hours every week.",
    author: "Marcus Sterling",
    role: "Founder, Sterling Goods",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    verified: true,
    rating: 5,
    itemPurchased: "AeroPulse Studio ANC"
  },
  {
    id: 3,
    quote: "The tactile feel of the interface matches the physical quality of the products. Instant cart, micro-animations, and zero clutter.",
    author: "Devon Chen",
    role: "Creative Director",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    verified: true,
    rating: 5,
    itemPurchased: "Helios Mechanical Keyboard"
  }
];

export const FAQS = [
  {
    question: "How does the live inventory and admin synchronization operate?",
    answer: "Products updated in the Admin Console (price, title, image, or stock counts) reflect across the customer storefront instantly in real-time without requiring a page reload."
  },
  {
    question: "What payment methods and checkout validations are simulated?",
    answer: "The checkout flow incorporates live Luhn algorithm card validation, expiry format checking, CVV masking, and immediate confirmation with instant transaction reference generation."
  },
  {
    question: "How fast is shipping, and how do I track my order?",
    answer: "All orders placed before 3:00 PM EST ship same-day via express insured freight. Real-time GPS tracking and SMS milestone alerts are provided upon order confirmation."
  },
  {
    question: "What is your return and warranty guarantee?",
    answer: "We offer a 30-day risk-free return window with complimentary return shipping labels, along with a comprehensive 2-year manufacturer warranty on all electronics and accessories."
  }
];

