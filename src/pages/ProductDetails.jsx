import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Sparkles, Check, MessageCircle, ShieldCheck, Truck, Ban, Share2, Play, CreditCard, Gift, RefreshCw, XCircle, CheckCircle2 } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import WhatsAppButton from '../components/WhatsAppButton';
import { PRODUCTS, BRAND_INFO } from '../data/products';

const isVideoFile = (url) => typeof url === 'string' && /\.(mp4|webm|mov|ogg)$/i.test(url);

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
  const isHangingSoap = product.id === 'm-glow-organik-hanging-soap';
  const isPomPomPotli = product.id === 'beautiful-pom-pom-potli-with-zip';
  const minQty = isHangingSoap ? 2 : 1;
  const freeShippingThreshold = isPomPomPotli ? 5 : 2;

  const [selectedImg, setSelectedImg] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product?.sizes ? product.sizes[0] : 'Standard');
  const [selectedColor, setSelectedColor] = useState(product?.colors ? product.colors[0]?.name : 'Default');
  const [quantity, setQuantity] = useState(minQty);
  const [copied, setCopied] = useState(false);

  // Scroll to top when product ID changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSelectedImg(0);
    setQuantity(minQty);
    if (product?.sizes && product.sizes.length > 0) setSelectedSize(product.sizes[0]);
    if (product?.colors && product.colors.length > 0) setSelectedColor(product.colors[0].name);
  }, [id, minQty, product]);

  // Related products from remaining catalog listings
  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const currentMedia = product.images && product.images[selectedImg] ? product.images[selectedImg] : product.images[0];
  const isCurrentVideo = isVideoFile(currentMedia);

  const videoCount = product.images?.filter(isVideoFile).length || 0;
  const photoCount = (product.images?.length || 0) - videoCount;

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
          <Link to="/" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <Link to="/#products" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Boutique Collection</Link>
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
          {/* Left Column: Media Gallery */}
          <div>
            {/* Main Featured Media */}
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
              {isCurrentVideo ? (
                <video
                  src={currentMedia}
                  controls
                  autoPlay
                  loop
                  playsInline
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '560px',
                    objectFit: 'contain',
                    display: 'block',
                    backgroundColor: '#0a0716'
                  }}
                />
              ) : (
                <img
                  src={currentMedia}
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '560px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              )}

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
                    backdropFilter: 'blur(8px)',
                    zIndex: 2
                  }}
                >
                  <Sparkles size={13} />
                  {product.tag}
                </span>
              )}
            </div>

            {/* Thumbnails Row */}
            {product.images.length > 1 && (
              <div style={{ marginTop: '1.25rem' }}>
                <div 
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    marginBottom: '0.6rem', 
                    fontSize: '0.82rem', 
                    color: '#94a3b8' 
                  }}
                >
                  <span>
                    Media (<strong style={{ color: '#fbcfe8' }}>{selectedImg + 1}</strong> of {product.images.length})
                    {videoCount > 0 && (
                      <span style={{ marginLeft: '0.5rem', color: '#c084fc' }}>
                        • {videoCount} Video{videoCount > 1 ? 's' : ''}, {photoCount} Photos
                      </span>
                    )}
                  </span>
                  {product.images.length > 5 && (
                    <span style={{ color: '#c084fc', fontSize: '0.78rem' }}>
                      ← Scroll to browse all media →
                    </span>
                  )}
                </div>
                <div 
                  style={{ 
                    display: 'flex', 
                    gap: '0.65rem', 
                    overflowX: 'auto',
                    paddingBottom: '0.6rem',
                    scrollbarWidth: 'thin'
                  }}
                >
                  {product.images.map((item, idx) => {
                    const isThumbVideo = isVideoFile(item);
                    return (
                      <button
                        key={idx}
                        onClick={() => setSelectedImg(idx)}
                        style={{
                          flex: '0 0 74px',
                          width: '74px',
                          height: '74px',
                          borderRadius: '12px',
                          overflow: 'hidden',
                          border: selectedImg === idx ? '2px solid #f472b6' : '1px solid rgba(192, 132, 252, 0.2)',
                          padding: 0,
                          cursor: 'pointer',
                          background: '#130e2c',
                          position: 'relative',
                          boxShadow: selectedImg === idx ? '0 0 15px rgba(244, 114, 182, 0.4)' : 'none',
                          transition: 'all 0.2s ease'
                        }}
                        title={`View media item ${idx + 1}`}
                      >
                        {isThumbVideo ? (
                          <div style={{ position: 'relative', width: '100%', height: '100%', background: '#090714' }}>
                            <video
                              src={item}
                              muted
                              playsInline
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div
                              style={{
                                position: 'absolute',
                                inset: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'rgba(0, 0, 0, 0.4)'
                              }}
                            >
                              <Play size={20} color="#ffffff" fill="#ffffff" />
                            </div>
                          </div>
                        ) : (
                          <img
                            src={item}
                            alt={`Thumbnail ${idx + 1}`}
                            loading="lazy"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Product Info & Order CTAs */}
          <div>
            {/* Boutique Badge & Rating */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.82rem', color: '#c084fc', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '600' }}>
                Mita's Exclusive Boutique
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#fde047', fontSize: '0.88rem' }}>
                <Star size={16} fill="#fde047" color="#fde047" />
                <span style={{ color: '#f8fafc', fontWeight: '600' }}>{product.rating}</span>
                <span style={{ color: '#94a3b8' }}>({product.reviewsCount} reviews)</span>
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
                flexWrap: 'wrap',
                gap: '1rem',
                padding: '1rem 1.25rem',
                background: 'rgba(26, 20, 58, 0.65)',
                border: '1px solid rgba(192, 132, 252, 0.2)',
                borderRadius: '16px',
                marginBottom: '1.25rem'
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

              {isHangingSoap && (
                <span
                  style={{
                    padding: '0.3rem 0.75rem',
                    borderRadius: '9999px',
                    background: 'rgba(244, 114, 182, 0.15)',
                    border: '1px solid rgba(244, 114, 182, 0.35)',
                    color: '#f472b6',
                    fontSize: '0.8rem',
                    fontWeight: '600'
                  }}
                >
                  Minimum 2 articles required
                </span>
              )}
            </div>

            {/* HIGH-CONVERTING SPECIAL OFFER & POLICY HIGHLIGHT CARD */}
            <div
              style={{
                marginBottom: '1.75rem',
                padding: '1.15rem 1.25rem',
                borderRadius: '18px',
                background: 'linear-gradient(135deg, rgba(30, 21, 62, 0.9) 0%, rgba(45, 20, 55, 0.85) 100%)',
                border: '1.5px solid rgba(244, 114, 182, 0.45)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4), 0 0 25px rgba(244, 114, 182, 0.18)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem'
              }}
            >
              {/* Policy Badges Ribbon: Exchange ✅ | No Refund ❌ | No Return ❌ */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  padding: '0.6rem 0.85rem',
                  borderRadius: '12px',
                  background: 'rgba(9, 7, 20, 0.65)',
                  border: '1px solid rgba(192, 132, 252, 0.3)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.84rem', fontWeight: '700', color: '#86efac' }}>
                  <CheckCircle2 size={16} color="#4ade80" />
                  <span>Exchange ✅</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.84rem', fontWeight: '700', color: '#fca5a5' }}>
                  <XCircle size={16} color="#f87171" />
                  <span>No Refund ❌</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.84rem', fontWeight: '700', color: '#fca5a5' }}>
                  <XCircle size={16} color="#f87171" />
                  <span>No Return ❌</span>
                </div>
              </div>

              {/* Highlight 1: Free shipping */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 0 12px rgba(16, 185, 129, 0.4)'
                  }}
                >
                  <Truck size={17} color="#ffffff" />
                </div>
                <div>
                  <div style={{ fontSize: '0.92rem', fontWeight: '700', color: '#86efac', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <span>{isPomPomPotli ? 'FREE SHIPPING ON BUYING 5 ARTICLES' : 'FREE SHIPPING ON ANY 2+ ARTICLES'}</span>
                    <span style={{ fontSize: '0.7rem', padding: '0.15rem 0.45rem', borderRadius: '4px', background: 'rgba(16, 185, 129, 0.25)', border: '1px solid rgba(16, 185, 129, 0.5)', color: '#4ade80' }}>LIMITED OFFER</span>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: '#e2e8f0', marginTop: '0.15rem', lineHeight: 1.4 }}>
                    {isPomPomPotli 
                      ? 'Order 5 or more Pom Pom Potlis to enjoy 100% Free Shipping across India!'
                      : 'Buy any two or more articles from our boutique collection & enjoy 100% Free Shipping across India!'}
                  </p>
                </div>
              </div>

              <div style={{ height: '1px', background: 'rgba(244, 114, 182, 0.2)' }} />

              {/* Highlight 2: No COD / 100% Prepaid */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 0 12px rgba(239, 68, 68, 0.4)'
                  }}
                >
                  <Ban size={16} color="#ffffff" />
                </div>
                <div>
                  <div style={{ fontSize: '0.92rem', fontWeight: '700', color: '#fca5a5', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <span>NO CASH ON DELIVERY (COD)</span>
                    <span style={{ fontSize: '0.7rem', padding: '0.15rem 0.45rem', borderRadius: '4px', background: 'rgba(239, 68, 68, 0.2)', border: '1px solid rgba(239, 68, 68, 0.4)', color: '#f87171' }}>PREPAID ONLY</span>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: '#cbd5e1', marginTop: '0.15rem', lineHeight: 1.4 }}>
                    We accept secure <strong>UPI (GPay / PhonePe / Paytm), Net Banking &amp; Bank Transfers</strong> prior to dispatch for swift doorstep delivery.
                  </p>
                </div>
              </div>
            </div>

            {/* Short Description */}
            <p style={{ color: '#cbd5e1', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
              {product.shortDesc}
            </p>

            {/* Variant / Color Options (UI Only) */}
            {product.colors && product.colors.length > 0 && (
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.6rem', fontWeight: '600' }}>
                  Select Tone / Fragrance: <span style={{ color: '#f472b6' }}>{selectedColor}</span>
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

            {/* Quantity Selector */}
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
                    onClick={() => setQuantity(Math.max(minQty, quantity - 1))}
                    style={{
                      padding: '0.4rem 0.8rem',
                      background: 'transparent',
                      border: 'none',
                      color: '#f8fafc',
                      cursor: 'pointer',
                      fontSize: '1rem'
                    }}
                    title={quantity <= minQty ? `Minimum ${minQty} items required` : 'Decrease'}
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

              {/* Free Shipping Qualification Helper */}
              {quantity >= freeShippingThreshold ? (
                <span style={{ fontSize: '0.8rem', color: '#86efac', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Truck size={14} /> Free Shipping Applied!
                </span>
              ) : (
                <span style={{ fontSize: '0.78rem', color: '#cbd5e1' }}>
                  (Add {freeShippingThreshold - quantity} more for <strong style={{ color: '#86efac' }}>FREE Shipping</strong>)
                </span>
              )}

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
                  fontSize: '0.82rem',
                  marginLeft: 'auto'
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
                productName={`${product.name} (Qty: ${quantity}, Tone: ${selectedColor})`}
                size="lg"
                fullWidth={true}
              />

              {product.bulkOrderAvailable && (
                <WhatsAppButton
                  text="🎁 Inquire for Bulk Order / Return Gifts"
                  productName={`Bulk Order Enquiry for ${product.name}`}
                  size="md"
                  variant="outline"
                  fullWidth={true}
                />
              )}

              <p style={{ textAlign: 'center', fontSize: '0.78rem', color: '#94a3b8' }}>
                ⚡ Click redirects to our official WhatsApp chat for instant checkout, color choice &amp; delivery address confirmation.
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
                <CheckCircle2 size={20} color="#4ade80" style={{ margin: '0 auto 0.35rem' }} />
                <span style={{ fontSize: '0.75rem', color: '#e2e8f0', display: 'block', fontWeight: '600' }}>Exchange Policy</span>
                <span style={{ fontSize: '0.7rem', color: '#86efac' }}>Exchange ✅ (No Refund/Return ❌)</span>
              </div>
              <div>
                <Truck size={20} color="#93c5fd" style={{ margin: '0 auto 0.35rem' }} />
                <span style={{ fontSize: '0.75rem', color: '#e2e8f0', display: 'block', fontWeight: '600' }}>Free Shipping</span>
                <span style={{ fontSize: '0.7rem', color: '#93c5fd' }}>{isPomPomPotli ? 'On Buy 5 Articles' : 'On Any 2+ Articles'}</span>
              </div>
              <div>
                <Ban size={20} color="#f87171" style={{ margin: '0 auto 0.35rem' }} />
                <span style={{ fontSize: '0.75rem', color: '#e2e8f0', display: 'block', fontWeight: '600' }}>No COD</span>
                <span style={{ fontSize: '0.7rem', color: '#fca5a5' }}>Prepaid Only</span>
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
            Product Story &amp; Craftsmanship
          </h3>
          <p style={{ color: '#cbd5e1', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '2rem', whiteSpace: 'pre-line' }}>
            {product.fullDesc}
          </p>

          <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#fbcfe8' }}>
            Specifications &amp; Details:
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

            {/* Highlighted Policy Badges in Specs */}
            <div
              style={{
                padding: '1rem',
                borderRadius: '12px',
                background: 'rgba(168, 85, 247, 0.12)',
                border: '1px solid rgba(168, 85, 247, 0.35)'
              }}
            >
              <span style={{ fontSize: '0.75rem', color: '#c084fc', textTransform: 'capitalize', display: 'block', fontWeight: '600' }}>
                Store Policy
              </span>
              <span style={{ fontSize: '0.88rem', color: '#ffffff', fontWeight: '600', marginTop: '0.2rem', display: 'block' }}>
                🔄 Exchange ✅ &bull; ❌ No Refund &bull; ❌ No Return
              </span>
            </div>

            <div
              style={{
                padding: '1rem',
                borderRadius: '12px',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)'
              }}
            >
              <span style={{ fontSize: '0.75rem', color: '#86efac', textTransform: 'capitalize', display: 'block', fontWeight: '600' }}>
                Shipping Policy
              </span>
              <span style={{ fontSize: '0.88rem', color: '#ffffff', fontWeight: '500', marginTop: '0.2rem', display: 'block' }}>
                🚚 {isPomPomPotli ? 'Free Shipping on buying 5 articles' : 'Free Shipping on any 2+ articles'}
              </span>
            </div>

            <div
              style={{
                padding: '1rem',
                borderRadius: '12px',
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.3)'
              }}
            >
              <span style={{ fontSize: '0.75rem', color: '#fca5a5', textTransform: 'capitalize', display: 'block', fontWeight: '600' }}>
                Payment Policy
              </span>
              <span style={{ fontSize: '0.88rem', color: '#ffffff', fontWeight: '500', marginTop: '0.2rem', display: 'block' }}>
                💳 100% Prepaid Only (No COD)
              </span>
            </div>
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
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
