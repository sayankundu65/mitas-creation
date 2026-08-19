import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Sparkles, Check, MessageCircle, ShieldCheck, Truck, RotateCcw, Share2, Heart, Info } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import WhatsAppButton from '../components/WhatsAppButton';
import { PRODUCTS, BRAND_INFO } from '../data/products';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Scroll to top when product ID changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
  const [selectedImg, setSelectedImg] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product?.sizes ? product.sizes[0] : 'Standard');
  const [selectedColor, setSelectedColor] = useState(product?.colors ? product.colors[0]?.name : 'Default');
  const [quantity, setQuantity] = useState(1);
  const [copied, setCopied] = useState(false);

  // Related products from same category or fallback to other products
  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 3);
  const fallbackProducts = relatedProducts.length < 3 
    ? [...relatedProducts, ...PRODUCTS.filter(p => p.id !== product.id && p.category !== product.category).slice(0, 3 - relatedProducts.length)]
    : relatedProducts;

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div style={{ padding: '2.5rem 0 6rem' }}>
      <div className="container">
        {/* Navigation Breadcrumb */}
        <div 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            fontSize: '0.86rem', 
            color: '#94a3b8', 
            marginBottom: '2rem' 
          }}
        >
          <Link to="/" style={{ color: '#94a3b8', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <Link to="/#products" style={{ color: '#94a3b8', textDecoration: 'none' }}>{product.categoryName}</Link>
          <span>/</span>
          <span style={{ color: '#f472b6', fontWeight: '500' }}>{product.name}</span>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: 'transparent',
            border: 'none',
            color: '#cbd5e1',
            cursor: 'pointer',
            fontSize: '0.9rem',
            marginBottom: '1.5rem'
          }}
        >
          <ArrowLeft size={16} />
          <span>Back to Collection</span>
        </button>

        {/* Main Product Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '3.5rem',
            alignItems: 'flex-start'
          }}
        >
          {/* Left Column: Image Gallery */}
          <div>
            {/* Main Featured Image */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid rgba(192, 132, 252, 0.25)',
                backgroundColor: '#130e2c',
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.4), 0 0 25px rgba(192, 132, 252, 0.15)'
              }}
            >
              <img
                src={product.images[selectedImg] || product.images[0]}
                alt={product.name}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '560px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />

              {/* Tag pill */}
              {product.tag && (
                <span
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '9999px',
                    background: 'rgba(15, 11, 33, 0.85)',
                    color: '#f472b6',
                    border: '1px solid rgba(244, 114, 182, 0.4)',
                    fontSize: '0.78rem',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    backdropFilter: 'blur(8px)'
                  }}
                >
                  <Sparkles size={13} />
                  {product.tag}
                </span>
              )}
            </div>

            {/* Thumbnails Row */}
            {product.images.length > 1 && (
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImg(idx)}
                    style={{
                      width: '76px',
                      height: '76px',
                      borderRadius: '14px',
                      overflow: 'hidden',
                      border: selectedImg === idx ? '2px solid #f472b6' : '1px solid rgba(192, 132, 252, 0.2)',
                      padding: 0,
                      cursor: 'pointer',
                      background: '#130e2c',
                      boxShadow: selectedImg === idx ? '0 0 15px rgba(244, 114, 182, 0.4)' : 'none',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Info & Order CTAs */}
          <div>
            {/* Category & Rating */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.82rem', color: '#c084fc', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '600' }}>
                {product.categoryName}
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#fde047', fontSize: '0.88rem' }}>
                <Star size={16} fill="#fde047" color="#fde047" />
                <span style={{ color: '#f8fafc', fontWeight: '600' }}>{product.rating}</span>
                <span style={{ color: '#94a3b8' }}>({product.reviewsCount} customer reviews)</span>
              </div>
            </div>

            {/* Title */}
            <h1
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                fontFamily: "'Playfair Display', serif",
                color: '#f8fafc',
                lineHeight: 1.25,
                marginBottom: '1rem'
              }}
            >
              {product.name}
            </h1>

            {/* Price Badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '1rem',
                padding: '1rem 1.25rem',
                background: 'rgba(26, 20, 58, 0.65)',
                border: '1px solid rgba(192, 132, 252, 0.2)',
                borderRadius: '16px',
                marginBottom: '1.5rem'
              }}
            >
              <span style={{ fontSize: '2rem', fontWeight: '700', color: '#fbcfe8' }}>
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              <span style={{ fontSize: '1.1rem', color: '#94a3b8', textDecoration: 'line-through' }}>
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
              <span
                style={{
                  marginLeft: 'auto',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '9999px',
                  background: 'rgba(34, 197, 94, 0.15)',
                  border: '1px solid rgba(34, 197, 94, 0.35)',
                  color: '#4ade80',
                  fontSize: '0.82rem',
                  fontWeight: '700'
                }}
              >
                Save {discount}% Today
              </span>
            </div>

            {/* Short Description */}
            <p style={{ color: '#cbd5e1', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
              {product.shortDesc}
            </p>

            {/* Variant / Color Options (UI Only) */}
            {product.colors && product.colors.length > 0 && (
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.6rem', fontWeight: '600' }}>
                  Select Color Tone: <span style={{ color: '#f472b6' }}>{selectedColor}</span>
                </label>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  {product.colors.map((color) => {
                    const isSelected = selectedColor === color.name;
                    return (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          padding: '0.45rem 0.9rem',
                          borderRadius: '9999px',
                          border: isSelected ? '1.5px solid #f472b6' : '1px solid rgba(255, 255, 255, 0.12)',
                          background: isSelected ? 'rgba(244, 114, 182, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                          color: isSelected ? '#fbcfe8' : '#cbd5e1',
                          cursor: 'pointer',
                          fontSize: '0.84rem',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        <span
                          style={{
                            width: '14px',
                            height: '14px',
                            borderRadius: '50%',
                            backgroundColor: color.hex,
                            border: '1px solid rgba(255,255,255,0.4)',
                            display: 'inline-block'
                          }}
                        />
                        <span>{color.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Size Options (UI Only) */}
            {product.sizes && product.sizes.length > 0 && (
              <div style={{ marginBottom: '1.75rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.6rem', fontWeight: '600' }}>
                  Select Size / Dimension: <span style={{ color: '#c084fc' }}>{selectedSize}</span>
                </label>
                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                  {product.sizes.map((size) => {
                    const isSelected = selectedSize === size;
                    return (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        style={{
                          padding: '0.5rem 1.1rem',
                          borderRadius: '12px',
                          border: isSelected ? '1.5px solid #c084fc' : '1px solid rgba(255, 255, 255, 0.12)',
                          background: isSelected ? 'rgba(192, 132, 252, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                          color: isSelected ? '#ffffff' : '#cbd5e1',
                          cursor: 'pointer',
                          fontSize: '0.86rem',
                          fontWeight: isSelected ? '600' : '400',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quantity Selector (UI Only) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.85rem', color: '#cbd5e1', fontWeight: '600' }}>Qty:</label>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    border: '1px solid rgba(192, 132, 252, 0.3)',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.04)'
                  }}
                >
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    style={{
                      padding: '0.4rem 0.8rem',
                      background: 'transparent',
                      border: 'none',
                      color: '#f8fafc',
                      cursor: 'pointer',
                      fontSize: '1rem'
                    }}
                  >
                    -
                  </button>
                  <span style={{ padding: '0 0.8rem', fontSize: '0.92rem', fontWeight: '600', color: '#fbcfe8' }}>
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    style={{
                      padding: '0.4rem 0.8rem',
                      background: 'transparent',
                      border: 'none',
                      color: '#f8fafc',
                      cursor: 'pointer',
                      fontSize: '1rem'
                    }}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Share Button */}
              <button
                onClick={handleShare}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.5rem 0.9rem',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: copied ? '#4ade80' : '#cbd5e1',
                  cursor: 'pointer',
                  fontSize: '0.82rem'
                }}
              >
                <Share2 size={14} />
                <span>{copied ? 'Link Copied!' : 'Share'}</span>
              </button>
            </div>

            {/* PRIMARY CTA: BUY NOW ON WHATSAPP */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2.5rem' }}>
              <WhatsAppButton
                text={`Buy Now on WhatsApp (₹${(product.price * quantity).toLocaleString('en-IN')})`}
                productName={product.name}
                size="lg"
                fullWidth={true}
              />
              <p style={{ textAlign: 'center', fontSize: '0.78rem', color: '#94a3b8' }}>
                ⚡ Click redirects to our official WhatsApp chat for instant checkout, color choice & delivery address confirmation.
              </p>
            </div>

            {/* Guarantee / Perks Badges */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.75rem',
                padding: '1.25rem',
                borderRadius: '16px',
                background: 'rgba(21, 16, 47, 0.5)',
                border: '1px solid rgba(192, 132, 252, 0.15)',
                textAlign: 'center'
              }}
            >
              <div>
                <ShieldCheck size={20} color="#f472b6" style={{ margin: '0 auto 0.35rem' }} />
                <span style={{ fontSize: '0.75rem', color: '#e2e8f0', display: 'block', fontWeight: '600' }}>100% Genuine</span>
                <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Quality Verified</span>
              </div>
              <div>
                <Truck size={20} color="#93c5fd" style={{ margin: '0 auto 0.35rem' }} />
                <span style={{ fontSize: '0.75rem', color: '#e2e8f0', display: 'block', fontWeight: '600' }}>Express Dispatch</span>
                <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Safe Doorstep Care</span>
              </div>
              <div>
                <MessageCircle size={20} color="#25D366" style={{ margin: '0 auto 0.35rem' }} />
                <span style={{ fontSize: '0.75rem', color: '#e2e8f0', display: 'block', fontWeight: '600' }}>Direct Support</span>
                <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Chat with Mita's</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Product Specifications */}
        <div
          style={{
            marginTop: '4rem',
            padding: '2.5rem',
            borderRadius: '24px',
            background: 'rgba(26, 20, 58, 0.5)',
            border: '1px solid rgba(192, 132, 252, 0.2)'
          }}
        >
          <h3 style={{ fontSize: '1.45rem', marginBottom: '1.25rem', color: '#f8fafc' }}>
            Product Story & Craftsmanship
          </h3>
          <p style={{ color: '#cbd5e1', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '2rem' }}>
            {product.fullDesc}
          </p>

          <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#fbcfe8' }}>
            Specifications & Details:
          </h4>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
              gap: '1rem'
            }}
          >
            {Object.entries(product.details).map(([key, value]) => (
              <div
                key={key}
                style={{
                  padding: '1rem',
                  borderRadius: '12px',
                  background: 'rgba(9, 7, 20, 0.4)',
                  border: '1px solid rgba(192, 132, 252, 0.1)'
                }}
              >
                <span style={{ fontSize: '0.75rem', color: '#c084fc', textTransform: 'capitalize', display: 'block' }}>
                  {key.replace(/([A-Z])/g, ' $1')}
                </span>
                <span style={{ fontSize: '0.88rem', color: '#f8fafc', fontWeight: '500', marginTop: '0.2rem', display: 'block' }}>
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products Section */}
        <div style={{ marginTop: '5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <div>
              <span className="badge-luxury" style={{ marginBottom: '0.4rem' }}>
                <Sparkles size={11} /> You May Also Love
              </span>
              <h3 style={{ fontSize: '1.8rem', color: '#f8fafc' }}>Related Boutique Pieces</h3>
            </div>
            <Link
              to="/#products"
              style={{
                color: '#f472b6',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: '600'
              }}
            >
              View All &rarr;
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
              gap: '2rem'
            }}
          >
            {fallbackProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
