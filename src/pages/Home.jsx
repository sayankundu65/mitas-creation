import React, { useState } from 'react';
import { ArrowRight, Sparkles, MessageCircle, ShoppingBag, Gift, Shirt, Scissors, ChevronRight, Star } from 'lucide-react';
import Logo from '../components/Logo';
import ProductCard from '../components/ProductCard';
import WhatsAppButton from '../components/WhatsAppButton';
import { PRODUCTS, CATEGORIES, BRAND_INFO } from '../data/products';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* 1. HERO SECTION */}
      <section
        className="hero-section"
        style={{
          minHeight: '88vh',
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
                <span>Shop Now</span>
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
                <span>Exclusive Sarees & Outfits</span>
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

      {/* 2. SPECIALTY HIGHLIGHTS / CATEGORY CAROUSEL */}
      <section
        id="categories"
        style={{
          padding: '5rem 0 4rem',
          borderTop: '1px solid rgba(192, 132, 252, 0.12)',
          background: 'rgba(14, 10, 31, 0.4)'
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 3.5rem' }}>
            <span className="badge-luxury" style={{ marginBottom: '0.75rem' }}>
              <Sparkles size={12} />
              Curated Collections
            </span>
            <h2 style={{ fontSize: '2.25rem', marginBottom: '0.75rem' }}>
              Designed For Every Special Moment
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
              Explore our diverse lifestyle range crafted with love, fine aesthetics, and supreme comfort.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '1.75rem'
            }}
          >
            {BRAND_INFO.categoriesHighlights.map((item, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setActiveCategory(item.categoryKey);
                  scrollToProducts();
                }}
                style={{
                  position: 'relative',
                  height: '320px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: '1px solid rgba(192, 132, 252, 0.2)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.4)'
                }}
                className="category-showcase-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = 'rgba(244, 114, 182, 0.5)';
                  e.currentTarget.style.boxShadow = '0 16px 40px rgba(192, 132, 252, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(192, 132, 252, 0.2)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.4)';
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease'
                  }}
                  className="cat-img"
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(14, 10, 31, 0.2) 0%, rgba(14, 10, 31, 0.92) 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '1.75rem'
                  }}
                >
                  <h3 style={{ fontSize: '1.35rem', color: '#f8fafc', marginBottom: '0.4rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.4, marginBottom: '1rem' }}>
                    {item.desc}
                  </p>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      color: '#f472b6'
                    }}
                  >
                    <span>View Collection</span>
                    <ChevronRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRODUCTS SECTION (GRID LAYOUT WITH 10 DUMMY PRODUCTS) */}
      <section
        id="products"
        style={{
          padding: '6rem 0 5rem',
          position: 'relative'
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
              Exclusive & Amazing Creations
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '0.98rem', maxWidth: '600px' }}>
              Browse through our handpicked signature pieces. Click "Buy Now" to order directly on WhatsApp or view detailed material specs.
            </p>

            {/* Category Filter Pills */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '0.65rem',
                marginTop: '2.25rem',
                maxWidth: '900px'
              }}
            >
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    style={{
                      padding: '0.55rem 1.25rem',
                      borderRadius: '9999px',
                      fontSize: '0.88rem',
                      fontWeight: isActive ? '600' : '500',
                      cursor: 'pointer',
                      border: isActive ? '1px solid #f472b6' : '1px solid rgba(192, 132, 252, 0.2)',
                      background: isActive 
                        ? 'linear-gradient(135deg, rgba(244, 114, 182, 0.25) 0%, rgba(192, 132, 252, 0.25) 100%)' 
                        : 'rgba(23, 17, 49, 0.6)',
                      color: isActive ? '#fbcfe8' : '#cbd5e1',
                      backdropFilter: 'blur(8px)',
                      boxShadow: isActive ? '0 0 18px rgba(244, 114, 182, 0.3)' : 'none',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    {cat.name}
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
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
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
              <p style={{ color: '#cbd5e1', fontSize: '1.1rem' }}>No products found in this category.</p>
              <button
                onClick={() => setActiveCategory('all')}
                className="btn btn-secondary btn-sm"
                style={{ marginTop: '1rem' }}
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 4. CUSTOMIZATION & BESPOKE BANNER */}
      <section
        style={{
          padding: '4.5rem 0',
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
                Bespoke & Custom Studio
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
                  Call 7908840948
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
                <h4 style={{ fontSize: '1rem', color: '#f8fafc' }}>Mugs & Bottles</h4>
                <p style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '0.25rem' }}>Laser engraved & photo mugs</p>
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
                <h4 style={{ fontSize: '1rem', color: '#f8fafc' }}>Diaries & Kits</h4>
                <p style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '0.25rem' }}>Corporate & festive gifts</p>
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
                <p style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '0.25rem' }}>Blouse & shapewear sizing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ABOUT BRAND STORY PREVIEW */}
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

      <style>{`
        .category-showcase-card:hover .cat-img {
          transform: scale(1.08);
        }
      `}</style>
    </div>
  );
}
