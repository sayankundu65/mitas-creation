import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Star, Sparkles, MessageCircle } from 'lucide-react';
import { BRAND_INFO } from '../data/products';

export default function ProductCard({ product }) {
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div
      style={{
        background: 'rgba(23, 17, 49, 0.7)',
        borderRadius: '20px',
        border: '1px solid rgba(192, 132, 252, 0.16)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)'
      }}
      className="product-card"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.borderColor = 'rgba(244, 114, 182, 0.45)';
        e.currentTarget.style.boxShadow = '0 16px 36px rgba(192, 132, 252, 0.2), 0 0 20px rgba(244, 114, 182, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'rgba(192, 132, 252, 0.16)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.3)';
      }}
    >
      {/* Product Image Container */}
      <div 
        style={{
          position: 'relative',
          width: '100%',
          paddingTop: '115%', // 1:1.15 aspect ratio
          overflow: 'hidden',
          backgroundColor: '#100c24'
        }}
      >
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.6s cubic-bezier(0.33, 1, 0.68, 1)'
          }}
          className="product-image"
        />

        {/* Top Badges */}
        <div
          style={{
            position: 'absolute',
            top: '0.75rem',
            left: '0.75rem',
            right: '0.75rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 2
          }}
        >
          {product.tag ? (
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: '700',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                padding: '0.3rem 0.65rem',
                borderRadius: '9999px',
                background: 'rgba(17, 11, 35, 0.85)',
                color: '#f472b6',
                border: '1px solid rgba(244, 114, 182, 0.4)',
                backdropFilter: 'blur(8px)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem'
              }}
            >
              <Sparkles size={11} />
              {product.tag}
            </span>
          ) : <span />}

          <span
            style={{
              fontSize: '0.72rem',
              fontWeight: '700',
              padding: '0.25rem 0.55rem',
              borderRadius: '9999px',
              background: 'rgba(34, 197, 94, 0.9)',
              color: '#052e16',
              backdropFilter: 'blur(8px)'
            }}
          >
            {discount}% OFF
          </span>
        </div>

        {/* Quick View Details Overlay Button */}
        <Link
          to={`/product/${product.id}`}
          style={{
            position: 'absolute',
            bottom: '0.75rem',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(15, 11, 33, 0.85)',
            border: '1px solid rgba(192, 132, 252, 0.4)',
            color: '#f8fafc',
            padding: '0.45rem 1rem',
            borderRadius: '9999px',
            fontSize: '0.8rem',
            fontWeight: '600',
            textDecoration: 'none',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            opacity: 0.9,
            transition: 'all 0.25s ease',
            zIndex: 2
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(244, 114, 182, 0.95)';
            e.currentTarget.style.color = '#110d24';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(15, 11, 33, 0.85)';
            e.currentTarget.style.color = '#f8fafc';
          }}
        >
          <Eye size={14} />
          <span>View Details</span>
        </Link>
      </div>

      {/* Product Content Details */}
      <div
        style={{
          padding: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          flex: '1 0 auto',
          gap: '0.6rem'
        }}
      >
        {/* Photo Count & Rating */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.75rem', color: '#c084fc', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600' }}>
            {product.images?.length > 1 ? `${product.images.length} Photos` : "Exclusive Piece"}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.78rem', color: '#fde047' }}>
            <Star size={13} fill="#fde047" color="#fde047" />
            <span style={{ color: '#e2e8f0', fontWeight: '600' }}>{product.rating}</span>
            <span style={{ color: '#94a3b8', fontSize: '0.7rem' }}>({product.reviewsCount})</span>
          </div>
        </div>

        {/* Title */}
        <Link 
          to={`/product/${product.id}`}
          style={{
            textDecoration: 'none',
            color: 'inherit'
          }}
        >
          <h3
            style={{
              fontSize: '1.05rem',
              fontWeight: '600',
              fontFamily: "'Playfair Display', serif",
              lineHeight: 1.35,
              color: '#f8fafc',
              minHeight: '2.7rem',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#f472b6')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#f8fafc')}
          >
            {product.name}
          </h3>
        </Link>

        {/* Price Row */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginTop: '0.25rem' }}>
          <span style={{ fontSize: '1.25rem', fontWeight: '700', color: '#fbcfe8' }}>
            ₹{product.price.toLocaleString('en-IN')}
          </span>
          <span style={{ fontSize: '0.85rem', color: '#94a3b8', textDecoration: 'line-through' }}>
            ₹{product.originalPrice.toLocaleString('en-IN')}
          </span>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
          {/* Primary Buy Now WhatsApp CTA */}
          <a
            href={BRAND_INFO.whatsappGroupLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem',
              padding: '0.65rem 0.8rem',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
              color: '#ffffff',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '0.86rem',
              boxShadow: '0 4px 14px rgba(37, 211, 102, 0.3)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = '0 6px 18px rgba(37, 211, 102, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(37, 211, 102, 0.3)';
            }}
          >
            <MessageCircle size={15} fill="#ffffff" color="transparent" />
            <span>Buy Now</span>
          </a>

          {/* View Details Link */}
          <Link
            to={`/product/${product.id}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.65rem 0.85rem',
              borderRadius: '12px',
              background: 'rgba(192, 132, 252, 0.1)',
              border: '1px solid rgba(192, 132, 252, 0.25)',
              color: '#c084fc',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '0.84rem',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(192, 132, 252, 0.2)';
              e.currentTarget.style.color = '#fbcfe8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(192, 132, 252, 0.1)';
              e.currentTarget.style.color = '#c084fc';
            }}
            title="View Details"
          >
            Details
          </Link>
        </div>
      </div>

      <style>{`
        .product-card:hover .product-image {
          transform: scale(1.06);
        }
      `}</style>
    </div>
  );
}
