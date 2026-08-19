import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BRAND_INFO } from '../data/products';

export default function WhatsAppButton({ 
  text = 'Buy Now on WhatsApp',
  productName,
  className = '',
  size = 'md',
  fullWidth = false,
  variant = 'primary', // 'primary' | 'outline' | 'pill'
  style = {}
}) {
  const whatsappUrl = BRAND_INFO.whatsappGroupLink;

  const sizeStyles = {
    sm: { padding: '0.45rem 0.9rem', fontSize: '0.82rem', gap: '0.4rem' },
    md: { padding: '0.75rem 1.4rem', fontSize: '0.92rem', gap: '0.5rem' },
    lg: { padding: '0.95rem 2rem', fontSize: '1.05rem', gap: '0.65rem' }
  };

  const getVariantStyles = () => {
    if (variant === 'outline') {
      return {
        background: 'rgba(37, 211, 102, 0.08)',
        color: '#4ade80',
        border: '1.5px solid rgba(37, 211, 102, 0.45)',
        boxShadow: 'none'
      };
    }
    return {
      background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
      color: '#ffffff',
      border: 'none',
      boxShadow: '0 4px 18px rgba(37, 211, 102, 0.35)'
    };
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn ${className}`}
      title={productName ? `Inquire or Buy ${productName} on WhatsApp` : 'Chat on WhatsApp'}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: fullWidth ? '100%' : 'auto',
        borderRadius: '9999px',
        fontWeight: '600',
        textDecoration: 'none',
        transition: 'all 0.25s ease',
        cursor: 'pointer',
        ...sizeStyles[size],
        ...getVariantStyles(),
        ...style
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(37, 211, 102, 0.55)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        if (variant === 'outline') {
          e.currentTarget.style.boxShadow = 'none';
        } else {
          e.currentTarget.style.boxShadow = '0 4px 18px rgba(37, 211, 102, 0.35)';
        }
      }}
    >
      <MessageCircle size={size === 'sm' ? 16 : size === 'lg' ? 22 : 18} fill="#ffffff" color="transparent" style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))' }} />
      <span>{text}</span>
    </a>
  );
}
