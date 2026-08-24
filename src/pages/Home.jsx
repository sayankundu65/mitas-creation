import React, { useState } from 'react';
import { ArrowRight, Sparkles, MessageCircle, ShoppingBag, Gift, Shirt, Scissors, Star, Search } from 'lucide-react';
import Logo from '../components/Logo';
import ProductCard from '../components/ProductCard';
import WhatsAppButton from '../components/WhatsAppButton';
import HeroSlideshow from '../components/HeroSlideshow';
import { PRODUCTS, BRAND_INFO } from '../data/products';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [giftingTab, setGiftingTab] = useState('all');

  const categories = [
    { id: 'all', label: '🌟 All Collections' },
    { id: 'bedsheets', label: '🛏️ Bedsheets & Home' },
    { id: 'gifting', label: '🎁 Gifting & Accessories' },
    { id: 'sarees', label: '🥻 Sarees & Handlooms' },
    { id: 'mens', label: "👔 Men's Collection" },
    { id: 'coords', label: '✨ Co-ord Sets' },
    { id: 'soaps', label: '🧼 Organic Soaps' }
  ];

  const giftingSubCategories = [
    { id: 'all', label: '✨ All Gifting & Essentials' },
    { id: 'bedsheets', label: '🛏️ Bed Covers & Home' },
    { id: 'vanity', label: '💄 Vanity Organisers & Mirror' },
    { id: 'kids', label: '🎒 Kids Chest Bags & Favors' },
    { id: 'totes', label: '👜 Canvas Totes & Combos' },
    { id: 'lunchbox', label: '🍱 Insulated Lunch Boxes' },
    { id: 'keychains', label: '🔑 Lipstick Keychains' }
  ];

  const filteredProducts = PRODUCTS.filter((product) => {
    const query = searchQuery.toLowerCase().trim();
    const matchesQuery = !query || 
      product.name.toLowerCase().includes(query) ||
      product.shortDesc.toLowerCase().includes(query);

    const matchesCategory = selectedCategory === 'all' || 
      (selectedCategory === 'bedsheets' && product.category === 'bedsheets') ||
      (selectedCategory === 'gifting' && product.isGifting) ||
      (selectedCategory === 'sarees' && (product.category === 'sarees' || product.name.toLowerCase().includes('saree'))) ||
      (selectedCategory === 'mens' && (product.category === 'mens' || product.category === 'men')) ||
      (selectedCategory === 'coords' && product.category === 'coords') ||
      (selectedCategory === 'soaps' && product.category === 'soaps');

    return matchesQuery && matchesCategory;
  });

  const giftingProducts = PRODUCTS.filter((product) => {
    if (!product.isGifting) return false;
    if (giftingTab === 'all') return true;
    if (giftingTab === 'bedsheets') return product.category === 'bedsheets' || product.id.includes('bed-cover');
    if (giftingTab === 'vanity') return product.id === 'digital-mini-makeup-organiser-mirror';
    if (giftingTab === 'kids') return product.id === 'children-cartoon-crossbody-chest-bag';
    if (giftingTab === 'totes') return product.id === 'aesthetic-handcrafted-canvas-tote-bag' || product.category === 'bags';
    if (giftingTab === 'lunchbox') return product.id === 'premium-insulated-thermal-lunch-box';
    if (giftingTab === 'keychains') return product.id === 'chic-leatherette-lipstick-keychain-mirror';
    return true;
  });

  const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToGifting = () => {
    const el = document.getElementById('gifting');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* ELEVATED LUXURY CLOTHING SLIDESHOW */}
      <HeroSlideshow />

      {/* 1. HERO SECTION */}
      <section
        className="hero-section"
        style={{
          minHeight: '82vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          padding: '4rem 0 5rem',
          background: 'radial-gradient(ellipse at 50% 20%, rgba(192, 132, 252, 0.15) 0%, rgba(9, 7, 20, 0) 70%)'
        }}
      >
        {/* Subtle decorative glow circles in background */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(244, 114, 182, 0.12) 0%, transparent 70%)',
            filter: 'blur(40px)',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '5%',
            width: '450px',
            height: '450px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(147, 197, 253, 0.1) 0%, transparent 70%)',
            filter: 'blur(50px)',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              maxWidth: '860px',
              margin: '0 auto',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            {/* Tagline / Monogram Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.45rem 1.25rem',
                borderRadius: '9999px',
                background: 'rgba(30, 21, 62, 0.75)',
                border: '1px solid rgba(244, 114, 182, 0.35)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 0 25px rgba(244, 114, 182, 0.2)',
                marginBottom: '1.75rem'
              }}
            >
              <Sparkles size={16} color="#f472b6" />
              <span
                style={{
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  background: 'linear-gradient(90deg, #fbcfe8, #c084fc, #93c5fd)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                {BRAND_INFO.tagline}
              </span>
            </div>

            {/* Main Brand Heading */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.2rem)',
                fontWeight: '700',
                lineHeight: 1.15,
                marginBottom: '1.5rem',
                letterSpacing: '-0.02em'
              }}
            >
              Discover the Elegance of <br />
              <span className="text-gradient font-serif">Mita’s Creation</span>
            </h1>

            {/* Brand Description */}
            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.18rem)',
                color: '#cbd5e1',
                lineHeight: 1.75,
                maxWidth: '780px',
                marginBottom: '2.5rem',
                fontWeight: '300'
              }}
            >
              {BRAND_INFO.description}
            </p>

            {/* Hero CTAs */}
            <div
              className="hero-ctas"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1.25rem'
              }}
            >
              <button
                onClick={scrollToProducts}
                className="btn btn-primary btn-lg"
                style={{ cursor: 'pointer' }}
              >
                <ShoppingBag size={20} />
                <span>Explore Boutique Catalog</span>
                <ArrowRight size={18} />
              </button>

              <WhatsAppButton
                text="Order via WhatsApp"
                size="lg"
                variant="outline"
              />
            </div>

            {/* Mini Trust Highlights */}
            <div
              className="trust-row"
              style={{
                marginTop: '3.5rem',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '2rem',
                fontSize: '0.86rem',
                color: '#94a3b8'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <span style={{ color: '#f472b6' }}>✦</span>
                <span>Handcrafted Exclusive Catalog</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <span style={{ color: '#c084fc' }}>✦</span>
                <span>Customization On-Demand</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <span style={{ color: '#25D366' }}>✦</span>
                <span>Instant WhatsApp Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRODUCTS SECTION (EXCLUSIVE BOUTIQUE CATALOG) */}
      <section
        id="products"
        style={{
          padding: '5rem 0',
          position: 'relative',
          borderTop: '1px solid rgba(192, 132, 252, 0.12)',
          background: 'rgba(14, 10, 31, 0.4)'
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              marginBottom: '3rem'
            }}
          >
            <span className="badge-luxury" style={{ marginBottom: '0.75rem' }}>
              <Sparkles size={12} />
              Featured Boutique Catalog
            </span>
            <h2 style={{ fontSize: '2.4rem', marginBottom: '0.75rem' }}>
              Exclusive &amp; Amazing Creations
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '0.98rem', maxWidth: '600px' }}>
              Browse through our handpicked signature pieces. Click "Buy Now" to order directly on WhatsApp or view detailed material specs.
            </p>

            {/* Search / Filter Input */}
            <div
              style={{
                position: 'relative',
                marginTop: '1.75rem',
                maxWidth: '440px',
                width: '100%'
              }}
            >
              <Search
                size={18}
                color="#94a3b8"
                style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  pointerEvents: 'none'
                }}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search boutique items..."
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem 0.75rem 2.75rem',
                  borderRadius: '9999px',
                  background: 'rgba(23, 17, 49, 0.8)',
                  border: '1px solid rgba(192, 132, 252, 0.25)',
                  color: '#f8fafc',
                  fontSize: '0.9rem',
                  outline: 'none',
                  backdropFilter: 'blur(8px)',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#f472b6';
                  e.target.style.boxShadow = '0 0 15px rgba(244, 114, 182, 0.3)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(192, 132, 252, 0.25)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            {/* Category Filter Tabs */}
            <div
              className="category-pills"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '0.65rem',
                marginTop: '1.5rem',
                maxWidth: '900px'
              }}
            >
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    style={{
                      padding: '0.45rem 1.1rem',
                      borderRadius: '9999px',
                      fontSize: '0.86rem',
                      fontWeight: isActive ? '700' : '500',
                      cursor: 'pointer',
                      border: isActive ? '1px solid #f472b6' : '1px solid rgba(192, 132, 252, 0.2)',
                      background: isActive ? 'linear-gradient(135deg, rgba(244, 114, 182, 0.35) 0%, rgba(192, 132, 252, 0.35) 100%)' : 'rgba(23, 17, 49, 0.6)',
                      color: isActive ? '#fbcfe8' : '#cbd5e1',
                      boxShadow: isActive ? '0 0 16px rgba(244, 114, 182, 0.3)' : 'none',
                      transition: 'all 0.2s ease',
                      backdropFilter: 'blur(8px)'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.borderColor = 'rgba(244, 114, 182, 0.5)';
                        e.currentTarget.style.color = '#ffffff';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.borderColor = 'rgba(192, 132, 252, 0.2)';
                        e.currentTarget.style.color = '#cbd5e1';
                      }
                    }}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div
              className="products-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
                gap: '2rem'
              }}
            >
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div
              style={{
                textAlign: 'center',
                padding: '4rem 1rem',
                background: 'rgba(23, 17, 49, 0.4)',
                borderRadius: '20px',
                border: '1px dashed rgba(192, 132, 252, 0.3)'
              }}
            >
              <p style={{ color: '#cbd5e1', fontSize: '1.1rem' }}>No products match your search or filter.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="btn btn-secondary btn-sm"
                style={{ marginTop: '1rem' }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 3. NEW DEDICATED GIFTING & LIFESTYLE STUDIO SECTION */}
      <section
        id="gifting"
        style={{
          padding: '5.5rem 0',
          position: 'relative',
          borderTop: '1px solid rgba(244, 114, 182, 0.25)',
          background: 'linear-gradient(180deg, rgba(26, 17, 56, 0.6) 0%, rgba(14, 10, 31, 0.85) 100%)'
        }}
      >
        {/* Subtle decorative pink glow */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '600px',
            height: '350px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(244, 114, 182, 0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              marginBottom: '3rem'
            }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.35rem 1rem',
                borderRadius: '9999px',
                background: 'linear-gradient(90deg, rgba(244, 114, 182, 0.2) 0%, rgba(192, 132, 252, 0.2) 100%)',
                border: '1px solid rgba(244, 114, 182, 0.45)',
                color: '#fbcfe8',
                fontSize: '0.8rem',
                fontWeight: '700',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '0.85rem',
                boxShadow: '0 0 20px rgba(244, 114, 182, 0.2)'
              }}
            >
              <Gift size={15} color="#f472b6" />
              Special Gifting &amp; Lifestyle Studio
            </span>

            <h2
              style={{
                fontSize: 'clamp(2rem, 4.5vw, 3rem)',
                marginBottom: '0.85rem',
                letterSpacing: '-0.01em'
              }}
            >
              Curated <span className="text-gradient">Gifting &amp; Home Essentials</span>
            </h2>

            <p style={{ color: '#cbd5e1', fontSize: '1.02rem', maxWidth: '720px', lineHeight: 1.7 }}>
              Discover our delightful collection of Beauty Bombay Dyeing king-size bed covers, 3D kids chest bags, handmade canvas everyday totes, thermal insulated lunch boxes, and mirror lipstick keychains.
            </p>

            {/* Bulk Order & Return Gift Callout Banner */}
            <div
              style={{
                marginTop: '1.75rem',
                padding: '0.85rem 1.4rem',
                borderRadius: '16px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px dashed rgba(244, 114, 182, 0.4)',
                display: 'inline-flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '0.75rem',
                fontSize: '0.88rem'
              }}
            >
              <span style={{ color: '#fde047', fontWeight: '700' }}>🎁 Bulk Orders &amp; Return Gifts:</span>
              <span style={{ color: '#e2e8f0' }}>Chest bags, tote bags, pouches &amp; soap hampers available for bulk ordering.</span>
              <a
                href={BRAND_INFO.whatsappGroupLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#4ade80',
                  fontWeight: '700',
                  textDecoration: 'underline',
                  cursor: 'pointer'
                }}
              >
                DM for Bulk Pricing &rarr;
              </a>
            </div>

            {/* Gifting Subcategory Tabs */}
            <div
              className="category-pills"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '0.6rem',
                marginTop: '1.75rem',
                maxWidth: '960px'
              }}
            >
              {giftingSubCategories.map((sub) => {
                const isActive = giftingTab === sub.id;
                return (
                  <button
                    key={sub.id}
                    onClick={() => setGiftingTab(sub.id)}
                    style={{
                      padding: '0.45rem 1.15rem',
                      borderRadius: '9999px',
                      fontSize: '0.84rem',
                      fontWeight: isActive ? '700' : '500',
                      cursor: 'pointer',
                      border: isActive ? '1.5px solid #f472b6' : '1px solid rgba(192, 132, 252, 0.2)',
                      background: isActive ? 'linear-gradient(135deg, #f472b6 0%, #c084fc 100%)' : 'rgba(20, 14, 46, 0.8)',
                      color: isActive ? '#110d24' : '#cbd5e1',
                      boxShadow: isActive ? '0 0 20px rgba(244, 114, 182, 0.4)' : 'none',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {sub.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Gifting Products Grid */}
          <div
            className="products-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
              gap: '2rem'
            }}
          >
            {giftingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Bottom Custom Gifting CTA Box */}
          <div
            style={{
              marginTop: '4rem',
              padding: '2rem',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(147, 51, 234, 0.15) 50%, rgba(244, 114, 182, 0.1) 100%)',
              border: '1px solid rgba(244, 114, 182, 0.35)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem'
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.35rem', color: '#f8fafc', marginBottom: '0.4rem' }}>
                Planning a Wedding, Birthday Party or Corporate Event?
              </h3>
              <p style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>
                Create customized gift hampers with personalized packaging, custom printed cards, and special bulk wholesale prices.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
              <WhatsAppButton text="Inquire for Gift Hampers" size="md" />
              <a href={`tel:${BRAND_INFO.phone}`} className="btn btn-secondary btn-sm">
                Call {BRAND_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CUSTOMIZATION & BESPOKE STUDIO BANNER */}
      <section
        id="customization"
        style={{
          padding: '5rem 0',
          position: 'relative'
        }}
      >
        <div className="container">
          <div
            style={{
              background: 'linear-gradient(135deg, #1b1238 0%, #281544 50%, #15102f 100%)',
              border: '1px solid rgba(244, 114, 182, 0.35)',
              borderRadius: '28px',
              padding: 'clamp(2rem, 5vw, 4rem)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 40px rgba(192, 132, 252, 0.15)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '2.5rem',
              alignItems: 'center'
            }}
          >
            <div>
              <span className="badge-luxury" style={{ marginBottom: '1rem' }}>
                <Scissors size={13} />
                Bespoke &amp; Custom Studio
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', marginBottom: '1rem' }}>
                Need Custom Printed T-Shirts, Mugs, Diaries or Tailored Fits?
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '0.98rem', lineHeight: 1.65, marginBottom: '1.75rem' }}>
                We specialize in individual personalized gifts as well as bulk corporate orders. Share your custom ideas, logos, and specific sizing directly on WhatsApp, and we’ll bring them to life!
              </p>
              <div className="custom-btn-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <WhatsAppButton
                  text="Inquire for Customization"
                  size="md"
                />
                <a
                  href={`tel:${BRAND_INFO.phone}`}
                  className="btn btn-secondary"
                >
                  Call {BRAND_INFO.phone}
                </a>
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 130px), 1fr))',
                gap: '1rem'
              }}
            >
              <div
                style={{
                  background: 'rgba(9, 7, 20, 0.6)',
                  padding: '1.5rem',
                  borderRadius: '18px',
                  border: '1px solid rgba(192, 132, 252, 0.2)',
                  textAlign: 'center'
                }}
              >
                <Shirt size={28} color="#f472b6" style={{ margin: '0 auto 0.5rem' }} />
                <h4 style={{ fontSize: '1rem', color: '#f8fafc' }}>Custom T-Shirts</h4>
                <p style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '0.25rem' }}>Prints, Embroidery, Uniforms</p>
              </div>

              <div
                style={{
                  background: 'rgba(9, 7, 20, 0.6)',
                  padding: '1.5rem',
                  borderRadius: '18px',
                  border: '1px solid rgba(192, 132, 252, 0.2)',
                  textAlign: 'center'
                }}
              >
                <Gift size={28} color="#c084fc" style={{ margin: '0 auto 0.5rem' }} />
                <h4 style={{ fontSize: '1rem', color: '#f8fafc' }}>Mugs &amp; Bottles</h4>
                <p style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '0.25rem' }}>Laser engraved &amp; photo mugs</p>
              </div>

              <div
                style={{
                  background: 'rgba(9, 7, 20, 0.6)',
                  padding: '1.5rem',
                  borderRadius: '18px',
                  border: '1px solid rgba(192, 132, 252, 0.2)',
                  textAlign: 'center'
                }}
              >
                <Star size={28} color="#fde047" style={{ margin: '0 auto 0.5rem' }} />
                <h4 style={{ fontSize: '1rem', color: '#f8fafc' }}>Diaries &amp; Kits</h4>
                <p style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '0.25rem' }}>Corporate &amp; festive gifts</p>
              </div>

              <div
                style={{
                  background: 'rgba(9, 7, 20, 0.6)',
                  padding: '1.5rem',
                  borderRadius: '18px',
                  border: '1px solid rgba(192, 132, 252, 0.2)',
                  textAlign: 'center'
                }}
              >
                <Scissors size={28} color="#93c5fd" style={{ margin: '0 auto 0.5rem' }} />
                <h4 style={{ fontSize: '1rem', color: '#f8fafc' }}>Custom Fitting</h4>
                <p style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '0.25rem' }}>Blouse &amp; shapewear sizing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ABOUT BRAND STORY PREVIEW */}
      <section
        style={{
          padding: '5rem 0',
          borderTop: '1px solid rgba(192, 132, 252, 0.12)'
        }}
      >
        <div className="container">
          <div
            style={{
              maxWidth: '820px',
              margin: '0 auto',
              textAlign: 'center'
            }}
          >
            <Logo size="large" centered={true} />
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                margin: '1.75rem 0 1rem',
                fontFamily: "'Playfair Display', serif"
              }}
            >
              "Exclusive. Elegant. Made for You."
            </h2>
            <p
              style={{
                fontSize: '1.1rem',
                color: '#cbd5e1',
                lineHeight: 1.8,
                marginBottom: '2rem'
              }}
            >
              {BRAND_INFO.aboutStory}
            </p>
            <div
              style={{
                display: 'inline-flex',
                gap: '1rem'
              }}
            >
              <WhatsAppButton
                text="Join WhatsApp Community"
                size="md"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

