import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, MapPin, Send, Sparkles, CheckCircle2, Clock } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';
import { BRAND_INFO } from '../data/products';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phoneOrEmail: '',
    category: "Women's Ethnic / Saree",
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phoneOrEmail) return;
    setFormSubmitted(true);
  };

  return (
    <div style={{ padding: '3.5rem 0 6rem' }}>
      <div className="container">
        {/* Page Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem' }}>
          <span className="badge-luxury" style={{ marginBottom: '1rem' }}>
            <Sparkles size={12} />
            We’d Love To Hear From You
          </span>
          <h1
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              fontFamily: "'Playfair Display', serif",
              lineHeight: 1.2,
              marginBottom: '1rem'
            }}
          >
            Get In Touch With <span className="text-gradient">Mita’s Creation</span>
          </h1>
          <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Have a question about a product, custom styling, bespoke fitting, or bulk order? Connect with us via WhatsApp, phone, or drop a message below.
          </p>
        </div>

        {/* 2 Column Layout: Quick Contact Methods & Contact Form */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '3rem',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Direct Action Channels */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* WhatsApp Priority Box */}
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.12) 0%, rgba(18, 140, 126, 0.15) 100%)',
                border: '1px solid rgba(37, 211, 102, 0.35)',
                borderRadius: '24px',
                padding: '2rem',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '16px',
                    background: '#25D366',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)'
                  }}
                >
                  <MessageCircle size={28} fill="#ffffff" color="#25D366" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: '#f8fafc' }}>WhatsApp Instant Support</h3>
                  <span style={{ fontSize: '0.8rem', color: '#4ade80', fontWeight: '600' }}>Fastest Response & Order Booking</span>
                </div>
              </div>

              <p style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Join our official WhatsApp group & chat to view the live latest inventory, request custom product photos, and confirm orders directly.
              </p>

              <WhatsAppButton
                text="Join WhatsApp Chat"
                size="lg"
                fullWidth={true}
              />
            </div>

            {/* Click-to-call Phone Box */}
            <div
              style={{
                background: 'rgba(23, 17, 49, 0.65)',
                border: '1px solid rgba(147, 197, 253, 0.25)',
                borderRadius: '24px',
                padding: '2rem',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '16px',
                    background: 'rgba(147, 197, 253, 0.15)',
                    border: '1px solid rgba(147, 197, 253, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Phone size={24} color="#93c5fd" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: '#f8fafc' }}>Call Us Directly</h3>
                  <span style={{ fontSize: '0.82rem', color: '#93c5fd', fontWeight: '500' }}>Direct Helpline & Order Enquiries</span>
                </div>
              </div>

              <p style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Speak directly with Mita for urgent orders, bespoke saree sizing, or corporate gift inquiries.
              </p>

              <a
                href={`tel:${BRAND_INFO.phone}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.6rem',
                  padding: '0.85rem',
                  borderRadius: '14px',
                  background: 'rgba(147, 197, 253, 0.12)',
                  border: '1px solid rgba(147, 197, 253, 0.4)',
                  color: '#93c5fd',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1rem',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(147, 197, 253, 0.22)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(147, 197, 253, 0.12)';
                }}
              >
                <Phone size={18} />
                <span>Call Now: {BRAND_INFO.phoneFormatted}</span>
              </a>
            </div>

            {/* Availability & Hours */}
            <div
              style={{
                background: 'rgba(23, 17, 49, 0.4)',
                border: '1px solid rgba(192, 132, 252, 0.15)',
                borderRadius: '18px',
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              <Clock size={22} color="#c084fc" />
              <div>
                <h4 style={{ fontSize: '0.92rem', color: '#f8fafc' }}>Operating Hours</h4>
                <p style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Mon - Sun: 9:00 AM – 10:00 PM IST</p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form (UI Only) */}
          <div
            style={{
              background: 'rgba(26, 20, 58, 0.75)',
              border: '1px solid rgba(192, 132, 252, 0.25)',
              borderRadius: '28px',
              padding: 'clamp(1.75rem, 4vw, 2.75rem)',
              boxShadow: '0 15px 40px rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(14px)'
            }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#f8fafc' }}>
              Send an Online Inquiry
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#94a3b8', marginBottom: '2rem' }}>
              Fill in your inquiry below and we will get back to you shortly.
            </p>

            {formSubmitted ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '3rem 1.5rem',
                  background: 'rgba(34, 197, 94, 0.08)',
                  borderRadius: '20px',
                  border: '1px solid rgba(34, 197, 94, 0.3)'
                }}
              >
                <CheckCircle2 size={48} color="#4ade80" style={{ margin: '0 auto 1rem' }} />
                <h4 style={{ fontSize: '1.3rem', color: '#f8fafc', marginBottom: '0.5rem' }}>
                  Thank you, {formData.name}!
                </h4>
                <p style={{ color: '#cbd5e1', fontSize: '0.92rem', marginBottom: '1.5rem' }}>
                  Your message has been received. You can also chat with us right now on WhatsApp for instant confirmation.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <WhatsAppButton
                    text="Open WhatsApp to Chat Directly"
                    size="md"
                  />
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', phoneOrEmail: '', category: "Women's Ethnic / Saree", message: '' });
                    }}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: '#c084fc',
                      cursor: 'pointer',
                      fontSize: '0.85rem'
                    }}
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', color: '#cbd5e1', marginBottom: '0.4rem', fontWeight: '500' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '12px',
                      background: 'rgba(14, 10, 31, 0.7)',
                      border: '1px solid rgba(192, 132, 252, 0.25)',
                      color: '#ffffff',
                      fontSize: '0.92rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', color: '#cbd5e1', marginBottom: '0.4rem', fontWeight: '500' }}>
                    Phone Number or Email *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. +91 9876543210 or name@example.com"
                    value={formData.phoneOrEmail}
                    onChange={(e) => setFormData({ ...formData, phoneOrEmail: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '12px',
                      background: 'rgba(14, 10, 31, 0.7)',
                      border: '1px solid rgba(192, 132, 252, 0.25)',
                      color: '#ffffff',
                      fontSize: '0.92rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', color: '#cbd5e1', marginBottom: '0.4rem', fontWeight: '500' }}>
                    Interest / Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '12px',
                      background: '#130e2c',
                      border: '1px solid rgba(192, 132, 252, 0.25)',
                      color: '#ffffff',
                      fontSize: '0.92rem',
                      outline: 'none'
                    }}
                  >
                    <option value="Women's Ethnic / Saree">Women's Ethnic & Sarees</option>
                    <option value="Designer Blouses">Designer Blouses & Padded Tops</option>
                    <option value="Nightwear & Loungewear">Plus Size Satin Nightwear & Kaftans</option>
                    <option value="Bags & Gifting Potlis">Handcrafted Bags, Slings & Pearl Potlis</option>
                    <option value="Cord Sets & Outfits">Co-ord Sets & Tops</option>
                    <option value="Saree Shapewear & Petticoats">Saree Shapewear & Petticoats</option>
                    <option value="Men's Collection">Men’s Kurta, Dhoti & Shirts</option>
                    <option value="Luxury Bed Covers">Luxury Bed Covers & Home</option>
                    <option value="Custom T-shirt / Mug / Gifts">Customized T-shirt, Mug, Diary, Bottle</option>
                    <option value="General Inquiry">General Inquiry / Feedback</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', color: '#cbd5e1', marginBottom: '0.4rem', fontWeight: '500' }}>
                    Your Message / Specific Request
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about the product, color preference, size requirements, or custom logo ideas..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '12px',
                      background: 'rgba(14, 10, 31, 0.7)',
                      border: '1px solid rgba(192, 132, 252, 0.25)',
                      color: '#ffffff',
                      fontSize: '0.92rem',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    padding: '0.85rem',
                    borderRadius: '12px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  <Send size={16} />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
