import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ size = 'default', showTagline = true, centered = false }) {
  const isLarge = size === 'large';
  const isSmall = size === 'small';

  return (
    <>
    <Link 
      to="/" 
      className="logo-link"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: isSmall ? '0.5rem' : '0.85rem',
        textDecoration: 'none',
        justifyContent: centered ? 'center' : 'flex-start'
      }}
    >
      {/* Glowing Monogram Emblem */}
      <div 
        className="logo-emblem"
        style={{
          width: isLarge ? '56px' : isSmall ? '36px' : '44px',
          height: isLarge ? '56px' : isSmall ? '36px' : '44px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #2b1842 0%, #110d24 100%)',
          border: '1.5px solid rgba(244, 114, 182, 0.45)',
          boxShadow: '0 0 20px rgba(192, 132, 252, 0.35), inset 0 0 10px rgba(244, 114, 182, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          flexShrink: 0,
          transition: 'all 0.3s ease'
        }}
      >
        <span 
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: '700',
            fontSize: isLarge ? '1.8rem' : isSmall ? '1.1rem' : '1.35rem',
            background: 'linear-gradient(135deg, #fbcfe8 0%, #f472b6 40%, #c084fc 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1
          }}
        >
          M
        </span>
        {/* Subtle sparkle dot */}
        <span 
          style={{
            position: 'absolute',
            top: '4px',
            right: '6px',
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            backgroundColor: '#fde047',
            boxShadow: '0 0 6px #fde047'
          }}
        />
      </div>

      {/* Brand Text */}
      <div className="logo-text-wrap" style={{ display: 'flex', flexDirection: 'column', textAlign: centered ? 'center' : 'left' }}>
        <span 
          className="logo-brand-name"
          style={{
            fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif",
            fontSize: isLarge ? '1.85rem' : isSmall ? '1.15rem' : '1.45rem',
            fontWeight: '700',
            letterSpacing: '0.02em',
            background: 'linear-gradient(135deg, #ffffff 0%, #fbcfe8 45%, #e9d5ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1.15,
            whiteSpace: 'nowrap'
          }}
        >
          Mita's Creation
        </span>
        {showTagline && (
          <span 
            className="logo-tagline"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: isLarge ? '0.75rem' : isSmall ? '0.62rem' : '0.68rem',
              color: '#c084fc',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              fontWeight: '500',
              marginTop: '2px',
              opacity: 0.95
            }}
          >
            Exclusive &bull; Elegant &bull; Made For You
          </span>
        )}
      </div>
    </Link>
    <style>{`
      @media (max-width: 480px) {
        .logo-emblem {
          width: 36px !important;
          height: 36px !important;
        }
        .logo-brand-name {
          font-size: 1.15rem !important;
        }
        .logo-tagline {
          font-size: 0.58rem !important;
          letter-spacing: 0.08em !important;
        }
        .logo-link {
          gap: 0.5rem !important;
        }
      }
    `}</style>
    </>
  );
}

