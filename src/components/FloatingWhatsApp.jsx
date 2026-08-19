import React, { useState } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/products';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1.75rem',
        right: '1.75rem',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '0.5rem'
      }}
    >
      {/* Friendly floating popup prompt - hidden on mobile */}
      {showTooltip && (
        <div
          className="whatsapp-tooltip"
          style={{
            background: 'rgba(23, 17, 51, 0.95)',
            border: '1px solid rgba(244, 114, 182, 0.35)',
            borderRadius: '16px',
            padding: '0.75rem 1rem',
            maxWidth: '240px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(192, 132, 252, 0.2)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.6rem',
            animation: 'floatSlow 4s ease-in-out infinite'
          }}
        >
          <Sparkles size={16} color="#f472b6" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div style={{ fontSize: '0.8rem', color: '#e2e8f0', lineHeight: 1.4 }}>
            <span style={{ fontWeight: '600', color: '#fbcfe8', display: 'block' }}>Order via WhatsApp!</span>
            Direct chat &amp; instant customized booking.
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#94a3b8',
              cursor: 'pointer',
              padding: '0',
              marginLeft: 'auto'
            }}
            aria-label="Close message"
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={BRAND_INFO.whatsappGroupLink}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-fab"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '0.85rem 1.4rem',
          borderRadius: '9999px',
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
          color: '#ffffff',
          textDecoration: 'none',
          fontWeight: '600',
          fontSize: '0.95rem',
          boxShadow: '0 8px 30px rgba(37, 211, 102, 0.45)',
          transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px) scale(1.04)';
          e.currentTarget.style.boxShadow = '0 12px 35px rgba(37, 211, 102, 0.65)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 30px rgba(37, 211, 102, 0.45)';
        }}
      >
        <MessageCircle size={24} fill="#ffffff" color="transparent" />
        <span className="whatsapp-fab-label" style={{ letterSpacing: '0.01em' }}>Chat on WhatsApp</span>
      </a>

      <style>{`
        @media (max-width: 640px) {
          .whatsapp-tooltip {
            display: none !important;
          }
          .whatsapp-fab {
            padding: 0.9rem !important;
            gap: 0 !important;
            width: 56px;
            height: 56px;
            justify-content: center;
          }
          .whatsapp-fab-label {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
