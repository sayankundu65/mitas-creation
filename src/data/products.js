export const CATEGORIES = [
  { id: 'all', name: 'All Collection' },
  { id: 'ethnic', name: "Women's Ethnic" },
  { id: 'fusion', name: 'Cord Sets & Tops' },
  { id: 'nightwear', name: 'Nightwear & Kaftan' },
  { id: 'men', name: "Men's Collection" },
  { id: 'home-custom', name: 'Home & Custom Gifts' }
];

export const PRODUCTS = [
  {
    id: 'saree-banarasi-royal',
    name: 'Royal Heritage Banarasi Silk Saree',
    category: 'ethnic',
    categoryName: "Women's Ethnic",
    price: 3499,
    originalPrice: 4999,
    tag: 'Bestseller',
    rating: 4.9,
    reviewsCount: 42,
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80'
    ],
    shortDesc: 'Handcrafted pure Banarasi silk saree with intricate golden zari floral motifs, paired with an unstitched designer blouse piece.',
    fullDesc: 'Embrace timeless Indian royalty with this regal Banarasi Silk Saree from Mita’s Creation. Woven with utmost precision using fine silk threads and shimmering golden zari borders, this saree embodies the grace and opulence suitable for weddings, festive ceremonies, and grand occasions.',
    details: {
      fabric: 'Pure Banarasi Art Silk with Rich Zari Weave',
      length: '5.5 meters saree + 0.8 meter blouse piece',
      care: 'Dry Clean Recommended',
      occasion: 'Festive, Wedding, Celebrations',
      inclusions: 'Saree with Running Blouse Piece'
    },
    sizes: ['Free Size (5.5m + 0.8m)'],
    colors: [
      { name: 'Royal Crimson Red', hex: '#881337' },
      { name: 'Midnight Violet', hex: '#4c1d95' },
      { name: 'Peacock Teal', hex: '#0f766e' }
    ]
  },
  {
    id: 'cordset-velvet-embroidered',
    name: 'Lavish Velvet Floral Embroidered Cord Set',
    category: 'fusion',
    categoryName: 'Cord Sets & Tops',
    price: 2199,
    originalPrice: 2999,
    tag: 'Trending',
    rating: 4.8,
    reviewsCount: 29,
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80'
    ],
    shortDesc: 'Two-piece tailored luxury velvet co-ord set with delicate hand-embroidery along the collar, cuffs, and hemline.',
    fullDesc: 'Modern sophistication meets comfort. This plush velvet cord set by Mita’s Creation features a relaxed tunic top paired with tailored straight-fit trousers. Perfect for evening soirees, cocktail dinners, or chic casual get-togethers.',
    details: {
      fabric: 'Micro-Velvet blend with breathable inner lining',
      fit: 'Relaxed Tailored Fit',
      care: 'Gentle Machine Wash or Hand Wash',
      occasion: 'Partywear, Evening Lounging, Semi-Formal',
      inclusions: 'Tunic Shirt + Trousers'
    },
    sizes: ['S (36)', 'M (38)', 'L (40)', 'XL (42)', 'XXL (44)'],
    colors: [
      { name: 'Deep Amethyst Purple', hex: '#581c87' },
      { name: 'Midnight Navy', hex: '#1e1b4b' },
      { name: 'Dusty Rose Pink', hex: '#9d174d' }
    ]
  },
  {
    id: 'saree-chanderi-designer-blouse',
    name: 'Chanderi Zari Saree with Contrast Blouse',
    category: 'ethnic',
    categoryName: "Women's Ethnic",
    price: 2799,
    originalPrice: 3899,
    tag: 'Exclusive',
    rating: 4.9,
    reviewsCount: 35,
    images: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80'
    ],
    shortDesc: 'Lightweight, graceful Chanderi silk saree featuring pastel metallic sheen and a richly embellished contrast blouse fabric.',
    fullDesc: 'Step out in ethereal beauty. Crafted from authentic lightweight Chanderi weave, this saree drapes like a dream with a subtle lustrous finish that glimmers under soft lights.',
    details: {
      fabric: 'Chanderi Silk Cotton Blend',
      length: '5.5 meters + 0.8 meter blouse',
      care: 'Dry Clean Only',
      occasion: 'Engagement, Day Festive, Puja',
      inclusions: '1 Saree with contrast blouse fabric'
    },
    sizes: ['Free Size'],
    colors: [
      { name: 'Lavender Mist', hex: '#7c3aed' },
      { name: 'Pastel Blush Pink', hex: '#db2777' },
      { name: 'Sky Azure', hex: '#0284c7' }
    ]
  },
  {
    id: 'nightwear-pure-cotton-kaftan',
    name: 'Breezy Handblock Pure Cotton Kaftan Set',
    category: 'nightwear',
    categoryName: 'Nightwear & Kaftan',
    price: 1399,
    originalPrice: 1899,
    tag: 'Comfort Pick',
    rating: 4.7,
    reviewsCount: 18,
    images: [
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80'
    ],
    shortDesc: 'Ultra-soft 100% breathable cotton Kaftan with adjustable waist drawstring and matching lounge pants.',
    fullDesc: 'Experience blissful everyday lounging with our Artisanal Handblock Kaftan set. Featuring gentle pastel floral prints, breezy side slits, and a customizable drawstring waist for supreme comfort all day and night.',
    details: {
      fabric: '100% Organic Cambric Cotton',
      fit: 'Relaxed Kaftan Fit with Adjustable Drawstring',
      care: 'Machine Wash Normal',
      occasion: 'Home Lounging, Sleepwear, Resort Casual',
      inclusions: '1 Kaftan Top + 1 Pyjama Pants'
    },
    sizes: ['M (38-40)', 'L (42-44)', 'XL/XXL (46-48)'],
    colors: [
      { name: 'Pastel Indigo', hex: '#312e81' },
      { name: 'Soft Peach Bloom', hex: '#ea580c' },
      { name: 'Mint Sage', hex: '#047857' }
    ]
  },
  {
    id: 'saree-shapewear-petticoat-duo',
    name: 'Seamless Mermaid Saree Shapewear & Petticoat',
    category: 'ethnic',
    categoryName: "Women's Ethnic",
    price: 799,
    originalPrice: 1299,
    tag: 'Essential',
    rating: 4.9,
    reviewsCount: 64,
    images: [
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=80'
    ],
    shortDesc: 'High-stretch 4-way microfibre silhouette enhancer with side-slit for seamless saree pleating and effortless movement.',
    fullDesc: 'Get the perfect hourglass mermaid drape without the discomfort of traditional bulky petticoats. Made with premium stretchable polyamide-spandex fabric that supports the waist and hips while smoothing curves.',
    details: {
      fabric: '85% Micro Polyamide, 15% Elastane',
      features: 'Targeted compression, Side slit for mobility, Anti-chafing waistband',
      care: 'Hand Wash / Gentle Machine Wash',
      inclusions: '1 Mermaid Saree Shapewear'
    },
    sizes: ['S (26-28 in)', 'M (30-32 in)', 'L (34-36 in)', 'XL (38-40 in)', 'XXL (42-44 in)'],
    colors: [
      { name: 'Classic Jet Black', hex: '#0f172a' },
      { name: 'Rich Maroon', hex: '#831843' },
      { name: 'Champagne Beige', hex: '#d97706' },
      { name: 'Deep Navy', hex: '#1e3a8a' }
    ]
  },
  {
    id: 'men-kurta-pyjama-dhoti-set',
    name: 'Men’s Royal Silk Kurta & Dhoti/Pyjama Ensemble',
    category: 'men',
    categoryName: "Men's Collection",
    price: 2499,
    originalPrice: 3499,
    tag: 'Festive Hit',
    rating: 4.8,
    reviewsCount: 22,
    images: [
      'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80'
    ],
    shortDesc: 'Men’s Jacquard woven raw silk kurta with mandarin collar, paired with comfortable tailored Churidar pyjama.',
    fullDesc: 'A sharp, dignified ensemble for the contemporary gentleman. Featuring subtle tonal self-weaving, metallic button detailing, and tailored fit that brings out timeless heritage charm.',
    details: {
      fabric: 'Raw Silk Jacquard Blend',
      collar: 'Mandarin Neck with Placket Buttons',
      care: 'Dry Clean Recommended',
      occasion: 'Festive Celebrations, Weddings, Traditional Ceremonies',
      inclusions: '1 Kurta + 1 Churidar Pyjama'
    },
    sizes: ['38 (M)', '40 (L)', '42 (XL)', '44 (XXL)'],
    colors: [
      { name: 'Midnight Navy Blue', hex: '#1e1b4b' },
      { name: 'Wine Plum', hex: '#4a044e' },
      { name: 'Royal Ivory Gold', hex: '#ca8a04' }
    ]
  },
  {
    id: 'men-tailored-cotton-shirt',
    name: 'Men’s Premium Pure Linen-Cotton Shirt',
    category: 'men',
    categoryName: "Men's Collection",
    price: 1299,
    originalPrice: 1799,
    tag: 'New Arrival',
    rating: 4.7,
    reviewsCount: 15,
    images: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80'
    ],
    shortDesc: 'Breathable linen-cotton blended formal-casual shirt with mother-of-pearl buttons and crisp structured collar.',
    fullDesc: 'Crafted for effortless refinement. This lightweight yet structured shirt moves with you from daytime business meetings to evening beachside lounging.',
    details: {
      fabric: '60% Linen, 40% Long-Staple Cotton',
      fit: 'Slim / Regular Smart Fit',
      care: 'Gentle Machine Wash, Warm Iron',
      inclusions: '1 Men’s Long Sleeve Shirt'
    },
    sizes: ['38 (S)', '40 (M)', '42 (L)', '44 (XL)'],
    colors: [
      { name: 'Sky Pastel Blue', hex: '#38bdf8' },
      { name: 'Blush Rose Quartz', hex: '#f472b6' },
      { name: 'Crisp White', hex: '#f8fafc' },
      { name: 'Midnight Black', hex: '#0f172a' }
    ]
  },
  {
    id: 'home-premium-velvet-bedcover',
    name: 'Luxury Quilted Velvet King Bed Cover Set',
    category: 'home-custom',
    categoryName: 'Home & Custom Gifts',
    price: 2999,
    originalPrice: 4299,
    tag: 'Luxury Decor',
    rating: 5.0,
    reviewsCount: 31,
    images: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=900&q=80'
    ],
    shortDesc: 'Ultra-plush velvet quilted king size bedspread with 2 coordinating decorative pillow covers and 2 cushion covers.',
    fullDesc: 'Transform your bedroom into a 5-star presidential suite. Filled with hypoallergenic microfiber batting and topped with silky smooth diamond-quilted velvet that feels heavenly to touch.',
    details: {
      fabric: 'Heavy Luxury Velvet Top with Cotton Underlay',
      dimensions: 'Bedspread: 108" x 108" (King Size)',
      inclusions: '1 King Bedspread + 2 Pillow Shams + 2 Cushion Covers',
      care: 'Dry Clean or Gentle Cycle'
    },
    sizes: ['King Size (108" x 108")'],
    colors: [
      { name: 'Deep Royal Purple', hex: '#3b0764' },
      { name: 'Midnight Teal', hex: '#134e4a' },
      { name: 'Champagne Taupe', hex: '#a16207' }
    ]
  },
  {
    id: 'custom-personalized-gift-bundle',
    name: 'Custom Engraved & Printed Boutique Gift Bundle',
    category: 'home-custom',
    categoryName: 'Home & Custom Gifts',
    price: 1499,
    originalPrice: 2199,
    tag: 'Personalized',
    rating: 4.9,
    reviewsCount: 57,
    images: [
      'https://images.unsplash.com/photo-1514517521153-1be72277b32f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80'
    ],
    shortDesc: 'Personalized combo including Custom Name/Logo Coffee Mug, Laser-Engraved Stainless Bottle, and Hardcover Diary.',
    fullDesc: 'Celebrate your special moments or delight corporate clients with Mita’s Creation Customization Studio. We personalize your names, quotes, or corporate logos with pristine precision on premium daily essentials.',
    details: {
      customizationOptions: 'T-Shirts, Ceramic Mugs, Insulated Water Bottles, Leatherette Diaries, Hampers',
      orderType: 'Single Orders & Bulk Corporate Inquiries Welcome',
      howItWorks: 'Place order via WhatsApp and share your custom text/photo instantly with our design team',
      inclusions: '1 Mug + 1 Thermos Bottle + 1 Diary in Gift Packaging'
    },
    sizes: ['Standard Gift Hamper Box'],
    colors: [
      { name: 'Matte Obsidian Black', hex: '#18181b' },
      { name: 'Rose Gold & Blush', hex: '#fb7185' },
      { name: 'Deep Royal Navy', hex: '#1e3a8a' }
    ]
  },
  {
    id: 'fusion-designer-crop-top-skirt-set',
    name: 'Pastel Embroidered 3-Piece Crop Top & Shrug Set',
    category: 'fusion',
    categoryName: 'Cord Sets & Tops',
    price: 2699,
    originalPrice: 3599,
    tag: 'Partywear',
    rating: 4.8,
    reviewsCount: 26,
    images: [
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80'
    ],
    shortDesc: 'Chic 3-piece set featuring mirror-embroidered sweetheart bustier, flared palazzo trousers, and sheer flowing cape shrug.',
    fullDesc: 'The quintessential fusion statement for contemporary sangeet, cocktail nights, and festivities. Light as air georgette fabric adorned with delicate mirror-work and shimmering border lace.',
    details: {
      fabric: 'Fine Georgette with Shantoon lining',
      style: 'Bustier Crop Top + High-Rise Flared Palazzo + Long Cape Shrug',
      care: 'Dry Clean Recommended',
      inclusions: '3-Piece Full Ensemble'
    },
    sizes: ['S (36)', 'M (38)', 'L (40)', 'XL (42)'],
    colors: [
      { name: 'Lavender Starlight', hex: '#9333ea' },
      { name: 'Powder Sky Blue', hex: '#0284c7' },
      { name: 'Peach Blossom', hex: '#f97316' }
    ]
  }
];

export const BRAND_INFO = {
  name: "Mita's Creation",
  tagline: "Exclusive. Elegant. Made for You.",
  phone: "7908840948",
  phoneFormatted: "+91 7908840948",
  whatsappGroupLink: "https://chat.whatsapp.com/DMzinecRMvHIaM2p6O7xhz",
  whatsappNumberUrl: "https://wa.me/917908840948",
  description: "You will find everything here—an exclusive and amazing collection featuring sarees, outfits, cord set, blouses, saree shapewear, petticoats, nighties, kaftan, kurta, 2 & 3 piece sets, tops, shirts, trousers, shorts, night suits and more.",
  aboutStory: "Mita’s Creation is your one-stop destination for stylish, high-quality fashion and lifestyle essentials, designed with attention to detail and a touch of personalization.",
  pillars: [
    {
      title: "Handpicked Premium Fabrics",
      desc: "From authentic Banarasi silks to pure organic breathable cottons, each piece is individually inspected for flawless texture and durability."
    },
    {
      title: "Customization & Bespoke Care",
      desc: "Get personalized t-shirts, mugs, diaries, corporate hampers, and customized fittings tailored specifically to your preferences."
    },
    {
      title: "Direct WhatsApp Personal Shopping",
      desc: "Enjoy boutique-level personal assistance, instant order confirmation, video call inspections, and express doorstep delivery."
    }
  ],
  categoriesHighlights: [
    {
      title: "Women's Ethnic & Sarees",
      desc: "Exquisite Banarasi, Chanderi, ready-to-wear blouses & silhouette shapewear.",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=80",
      categoryKey: "ethnic"
    },
    {
      title: "Cord Sets & Fusion",
      desc: "Velvet co-ords, embroidered sets, kaftans, top & trouser combos.",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=80",
      categoryKey: "fusion"
    },
    {
      title: "Men's Heritage & Casuals",
      desc: "Kurta-pyjamas, dhotis, pure linen shirts, trousers & lounge wear.",
      image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=700&q=80",
      categoryKey: "men"
    },
    {
      title: "Luxury Bedding & Home Living",
      desc: "Quilted royal velvet king bed covers, pillow sets & aesthetic living essentials.",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=700&q=80",
      categoryKey: "home-custom"
    },
    {
      title: "Custom Gifts & Corporate Sets",
      desc: "Personalized printed mugs, engraved bottles, custom tees & luxury corporate hampers.",
      image: "https://images.unsplash.com/photo-1514517521153-1be72277b32f?auto=format&fit=crop&w=700&q=80",
      categoryKey: "home-custom"
    }
  ]
};
