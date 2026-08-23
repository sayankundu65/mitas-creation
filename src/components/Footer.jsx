import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, Heart, Mail, MapPin, ShieldCheck, Truck, Sparkles } from 'lucide-react';
import Logo from './Logo';
import { BRAND_INFO } from '../data/products';

export default function Footer() {
  return (
    <footer
      style={{
        background: 'linear-gradient(180deg, #090714 0%, #06040d 100%)',
        borderTop: '1px solid rgba(192, 132, 252, 0.15)',
        marginTop: '5rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Top Value Propositions */}
      <div 
        style={{
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          padding: '2.5rem 0',
          background: 'rgba(21, 16, 47, 0.4)'
        }}
      >
        <div className="container">
          <div 
            className="footer-perks"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
              gap: '2rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div 
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'rgba(244, 114, 182, 0.12)',
                  border: '1px solid rgba(244, 114, 182, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Sparkles size={22} color="#f472b6" />
              </div>
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: '600', color: '#f8fafc' }}>Handpicked Luxury</h4>
                <p style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Premium quality fabrics & custom finishing</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div 
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'rgba(37, 211, 102, 0.12)',
                  border: '1px solid rgba(37, 211, 102, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <MessageCircle size={22} color="#25D366" />
              </div>
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: '600', color: '#f8fafc' }}>Direct WhatsApp Ordering</h4>
                <p style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Fast instant booking & personal assistance</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div 
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'rgba(147, 197, 253, 0.12)',
                  border: '1px solid rgba(147, 197, 253, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Truck size={22} color="#93c5fd" />
              </div>
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: '600', color: '#f8fafc' }}>Reliable Delivery</h4>
                <p style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Carefully packaged & safely dispatched</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div 
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'rgba(192, 132, 252, 0.12)',
                  border: '1px solid rgba(192, 132, 252, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <ShieldCheck size={22} color="#c084fc" />
              </div>
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: '600', color: '#f8fafc' }}>100% Genuine Products</h4>
                <p style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Crafted with attention to detail</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container" style={{ padding: '4rem 1.5rem 2.5rem' }}>
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: '3rem'
          }}
        >
          {/* Brand Info Column */}
          <div style={{ gridColumn: 'span 1' }}>
            <Logo size="default" showTagline={false} />
            <p 
              style={{
                fontSize: '0.88rem',
                color: '#94a3b8',
                marginTop: '1.25rem',
                lineHeight: 1.6
              }}
            >
              {BRAND_INFO.aboutStory}
            </p>

            {/* Social Placeholder icons */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
              <a 
                href={BRAND_INFO.whatsappGroupLink} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(37, 211, 102, 0.15)',
                  border: '1px solid rgba(37, 211, 102, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#25D366',
                  transition: 'all 0.2s ease'
                }}
                title="WhatsApp Group"
              >
                <MessageCircle size={18} />
              </a>

              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(244, 114, 182, 0.15)',
                  border: '1px solid rgba(244, 114, 182, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#f472b6',
                  transition: 'all 0.2s ease'
                }}
                title="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>

              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(147, 197, 253, 0.15)',
                  border: '1px solid rgba(147, 197, 253, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#93c5fd',
                  transition: 'all 0.2s ease'
                }}
                title="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: '#f8fafc', marginBottom: '1.25rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li>
                <Link to="/" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.target.style.color = '#f472b6')} onMouseLeave={(e) => (e.target.style.color = '#cbd5e1')}>
                  Home
                </Link>
              </li>
              <li>
                <a href="/#products" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.target.style.color = '#f472b6')} onMouseLeave={(e) => (e.target.style.color = '#cbd5e1')}>
                  Boutique Catalog
                </a>
              </li>
              <li>
                <a href="/#gifting" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.target.style.color = '#f472b6')} onMouseLeave={(e) => (e.target.style.color = '#cbd5e1')}>
                  🎁 Gifting Studio &amp; Hampers
                </a>
              </li>
              <li>
                <a href="/#customization" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.target.style.color = '#f472b6')} onMouseLeave={(e) => (e.target.style.color = '#cbd5e1')}>
                  Custom Studio
                </a>
              </li>
              <li>
                <Link to="/about" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.target.style.color = '#f472b6')} onMouseLeave={(e) => (e.target.style.color = '#cbd5e1')}>
                  About Brand
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.target.style.color = '#f472b6')} onMouseLeave={(e) => (e.target.style.color = '#cbd5e1')}>
                  Contact & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Boutique Offerings Showcase */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: '#f8fafc', marginBottom: '1.25rem' }}>Boutique Creations</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li style={{ color: '#cbd5e1', fontSize: '0.88rem' }}>&bull; Bombay Dyeing King Bed Covers</li>
              <li style={{ color: '#cbd5e1', fontSize: '0.88rem' }}>&bull; Designer Sarees & Handlooms</li>
              <li style={{ color: '#cbd5e1', fontSize: '0.88rem' }}>&bull; Kids Cartoon Chest Bags & Favors</li>
              <li style={{ color: '#cbd5e1', fontSize: '0.88rem' }}>&bull; Insulated Thermal Lunch Boxes</li>
              <li style={{ color: '#cbd5e1', fontSize: '0.88rem' }}>&bull; Aesthetic Canvas Everyday Totes</li>
              <li style={{ color: '#cbd5e1', fontSize: '0.88rem' }}>&bull; Lipstick Mirror Keychains & Pouches</li>
              <li style={{ color: '#cbd5e1', fontSize: '0.88rem' }}>&bull; Handcrafted Block Print Bags</li>
              <li style={{ color: '#cbd5e1', fontSize: '0.88rem' }}>&bull; Custom Mugs, T-Shirts & Hampers</li>
            </ul>
          </div>

          {/* Contact & WhatsApp Column */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: '#f8fafc', marginBottom: '1.25rem' }}>Order & Enquiries</h4>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1rem' }}>
              Connect directly with our boutique team for bookings, custom designs, and orders:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href={`tel:${BRAND_INFO.phone}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  color: '#93c5fd',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '600'
                }}
              >
                <Phone size={16} />
                <span>+91 {BRAND_INFO.phone}</span>
              </a>

              <a
                href={BRAND_INFO.whatsappGroupLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '0.88rem',
                  marginTop: '0.5rem',
                  boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)'
                }}
              >
                <MessageCircle size={18} fill="#ffffff" color="transparent" />
                <span>Join WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div
          className="footer-bottom"
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            marginTop: '3.5rem',
            paddingTop: '1.75rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.82rem',
            color: '#64748b'
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} <strong>Mita’s Creation</strong>. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span>Handcrafted with</span>
            <Heart size={14} fill="#f472b6" color="#f472b6" />
            <span>for fashion and lifestyle connoisseurs.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
