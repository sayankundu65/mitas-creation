import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, Sparkles } from 'lucide-react';
import Logo from './Logo';
import { BRAND_INFO } from '../data/products';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Collection', path: '/#products' },
    { name: 'Categories', path: '/#categories' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: isScrolled ? 'rgba(11, 8, 26, 0.88)' : 'rgba(9, 7, 20, 0.65)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: isScrolled ? '1px solid rgba(192, 132, 252, 0.2)' : '1px solid rgba(255, 255, 255, 0.05)',
          boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.5)' : 'none',
          transition: 'all 0.3s ease'
        }}
      >
        {/* Top Announcement Bar */}
        <div
          className="header-announcement"
          style={{
            background: 'linear-gradient(90deg, #1f143a 0%, #31194e 50%, #1f143a 100%)',
            borderBottom: '1px solid rgba(244, 114, 182, 0.15)',
            padding: '0.4rem 1rem',
            textAlign: 'center',
            fontSize: '0.78rem',
            color: '#fbcfe8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
          }}
        >
          <Sparkles size={13} color="#fde047" />
          <span className="announce-full">Direct WhatsApp Orders &amp; Custom Personalization Available &bull; Call: <strong>{BRAND_INFO.phone}</strong></span>
          <span className="announce-short" style={{ display: 'none' }}>WhatsApp Orders &bull; Call: <strong>{BRAND_INFO.phone}</strong></span>
        </div>

        <div className="container header-nav-container" style={{ padding: '0.75rem 1.5rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              position: 'relative'
            }}
          >
            {/* Desktop / Mobile Logo Container */}
            <div 
              style={{
                flex: '0 0 auto',
                display: 'flex',
                alignItems: 'center'
              }}
              className="brand-logo-wrapper"
            >
              <Logo size="default" />
            </div>

            {/* Desktop Navigation Links */}
            <nav 
              className="desktop-nav"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2rem'
              }}
            >
              {navLinks.map((link) => {
                const isHash = link.path.includes('#');
                if (isHash) {
                  return (
                    <a
                      key={link.name}
                      href={link.path}
                      style={{
                        color: '#cbd5e1',
                        textDecoration: 'none',
                        fontSize: '0.92rem',
                        fontWeight: '500',
                        letterSpacing: '0.01em',
                        transition: 'color 0.2s ease',
                        position: 'relative'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#f472b6')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
                    >
                      {link.name}
                    </a>
                  );
                }
                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    style={({ isActive }) => ({
                      color: isActive ? '#f472b6' : '#cbd5e1',
                      textDecoration: 'none',
                      fontSize: '0.92rem',
                      fontWeight: isActive ? '600' : '500',
                      letterSpacing: '0.01em',
                      transition: 'color 0.2s ease',
                      position: 'relative'
                    })}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#f472b6')}
                    onMouseLeave={(e) => {
                      if (!e.currentTarget.classList.contains('active')) {
                        e.currentTarget.style.color = '#cbd5e1';
                      }
                    }}
                  >
                    {link.name}
                  </NavLink>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div 
              className="desktop-actions"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem'
              }}
            >
              <a
                href={`tel:${BRAND_INFO.phone}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: '#93c5fd',
                  textDecoration: 'none',
                  fontSize: '0.86rem',
                  fontWeight: '500',
                  padding: '0.45rem 0.85rem',
                  borderRadius: '9999px',
                  background: 'rgba(147, 197, 253, 0.08)',
                  border: '1px solid rgba(147, 197, 253, 0.2)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(147, 197, 253, 0.18)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(147, 197, 253, 0.08)';
                }}
              >
                <Phone size={14} />
                <span>{BRAND_INFO.phone}</span>
              </a>

              <a
                href={BRAND_INFO.whatsappGroupLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.55rem 1.15rem',
                  borderRadius: '9999px',
                  background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontSize: '0.88rem',
                  fontWeight: '600',
                  boxShadow: '0 4px 15px rgba(37, 211, 102, 0.35)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.35)';
                }}
              >
                <MessageCircle size={16} fill="#ffffff" color="transparent" />
                <span>WhatsApp Order</span>
              </a>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <div className="mobile-toggle" style={{ display: 'none' }}>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(192, 132, 252, 0.3)',
                  color: '#f8fafc',
                  padding: '0.5rem',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X size={22} color="#f472b6" /> : <Menu size={22} color="#f8fafc" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            style={{
              background: 'rgba(14, 10, 33, 0.98)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(192, 132, 252, 0.25)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.8)'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {navLinks.map((link) => {
                const isHash = link.path.includes('#');
                if (isHash) {
                  return (
                    <a
                      key={link.name}
                      href={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        color: '#f8fafc',
                        textDecoration: 'none',
                        fontSize: '1.05rem',
                        fontWeight: '500',
                        padding: '0.6rem 0.8rem',
                        borderRadius: '8px',
                        background: 'rgba(255, 255, 255, 0.03)'
                      }}
                    >
                      {link.name}
                    </a>
                  );
                }
                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    style={({ isActive }) => ({
                      color: isActive ? '#f472b6' : '#f8fafc',
                      textDecoration: 'none',
                      fontSize: '1.05rem',
                      fontWeight: isActive ? '600' : '500',
                      padding: '0.6rem 0.8rem',
                      borderRadius: '8px',
                      background: isActive ? 'rgba(244, 114, 182, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                      borderLeft: isActive ? '3px solid #f472b6' : 'none'
                    })}
                  >
                    {link.name}
                  </NavLink>
                );
              })}
            </div>

            <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', margin: '0.5rem 0' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href={BRAND_INFO.whatsappGroupLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.6rem',
                  padding: '0.8rem',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '0.95rem'
                }}
              >
                <MessageCircle size={18} fill="#ffffff" color="transparent" />
                <span>Order on WhatsApp</span>
              </a>

              <a
                href={`tel:${BRAND_INFO.phone}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem',
                  borderRadius: '12px',
                  background: 'rgba(147, 197, 253, 0.1)',
                  border: '1px solid rgba(147, 197, 253, 0.25)',
                  color: '#93c5fd',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '0.9rem'
                }}
              >
                <Phone size={16} />
                <span>Direct Call: {BRAND_INFO.phone}</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Media Queries Styling for Header */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav, .desktop-actions {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
          .brand-logo-wrapper {
            margin: 0;
          }
        }

        @media (max-width: 640px) {
          .header-announcement {
            font-size: 0.72rem !important;
            padding: 0.35rem 0.75rem !important;
          }
          .header-announcement .announce-full {
            display: none;
          }
          .header-announcement .announce-short {
            display: inline !important;
          }
        }
      `}</style>
    </>
  );
}
