import React from 'react';
import { Sparkles, Heart, Award, ShieldCheck, CheckCircle2, MessageCircle } from 'lucide-react';
import Logo from '../components/Logo';
import WhatsAppButton from '../components/WhatsAppButton';
import { BRAND_INFO } from '../data/products';

export default function About() {
  return (
    <div style={{ padding: '3.5rem 0 6rem' }}>
      <div className="container">
        {/* Header Hero */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
          <span className="badge-luxury" style={{ marginBottom: '1rem' }}>
            <Sparkles size={12} />
            Our Boutique Heritage
          </span>
          <h1
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              fontFamily: "'Playfair Display', serif",
              lineHeight: 1.2,
              marginBottom: '1.25rem'
            }}
          >
            The Story Behind <span className="text-gradient">Mita’s Creation</span>
          </h1>
          <p
            style={{
              fontSize: '1.15rem',
              color: '#cbd5e1',
              lineHeight: 1.8,
              fontWeight: '300'
            }}
          >
            {BRAND_INFO.aboutStory}
          </p>
        </div>

        {/* Narrative Card */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(30, 21, 62, 0.7) 0%, rgba(17, 13, 38, 0.8) 100%)',
            border: '1px solid rgba(192, 132, 252, 0.25)',
            borderRadius: '28px',
            padding: 'clamp(2rem, 5vw, 4rem)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 35px rgba(192, 132, 252, 0.15)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '3rem',
            alignItems: 'center',
            marginBottom: '5rem'
          }}
        >
          <div>
            <span style={{ fontSize: '0.85rem', color: '#f472b6', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '600' }}>
              Crafted With Passion
            </span>
            <h2 style={{ fontSize: '2.2rem', marginTop: '0.5rem', marginBottom: '1.25rem' }}>
              Exclusive & Amazing Fashion For Every Soul
            </h2>
            <p style={{ color: '#cbd5e1', lineHeight: 1.8, fontSize: '0.96rem', marginBottom: '1.25rem' }}>
              At Mita’s Creation, we believe luxury should be both intimate and accessible. Every collection is curated to bring together traditional Indian heritage and contemporary silhouettes.
            </p>
            <p style={{ color: '#cbd5e1', lineHeight: 1.8, fontSize: '0.96rem', marginBottom: '2rem' }}>
              Whether you are looking for an exquisite Banarasi silk saree, a plush velvet cord set, seamless saree shapewear, comfortable everyday nightwear, men’s ethnic attire, or customized corporate gift sets, we have something made just for you.
            </p>

            <WhatsAppButton
              text="Connect with Our Designer on WhatsApp"
              size="md"
            />
          </div>

          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid rgba(244, 114, 182, 0.35)',
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.6)'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80"
                alt="Mita's Creation boutique aesthetic"
                style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: '-1.5rem',
                left: '-1.5rem',
                background: 'rgba(15, 11, 33, 0.95)',
                border: '1px solid rgba(192, 132, 252, 0.4)',
                borderRadius: '16px',
                padding: '1rem 1.5rem',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)'
              }}
            >
              <span style={{ fontSize: '1.6rem', fontWeight: '700', color: '#fbcfe8', display: 'block' }}>100%</span>
              <span style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>Hand-curated Quality</span>
            </div>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem' }}>
            <h3 style={{ fontSize: '2rem', color: '#f8fafc', marginBottom: '0.5rem' }}>
              Why Choose Mita’s Creation?
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.92rem' }}>
              The hallmarks of our commitment to you
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '2rem'
            }}
          >
            {BRAND_INFO.pillars.map((pillar, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(23, 17, 49, 0.65)',
                  border: '1px solid rgba(192, 132, 252, 0.18)',
                  borderRadius: '20px',
                  padding: '2rem',
                  transition: 'all 0.3s ease'
                }}
                className="glass-card"
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(244, 114, 182, 0.15)',
                    border: '1px solid rgba(244, 114, 182, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem'
                  }}
                >
                  <Sparkles size={22} color="#f472b6" />
                </div>
                <h4 style={{ fontSize: '1.2rem', color: '#f8fafc', marginBottom: '0.75rem' }}>
                  {pillar.title}
                </h4>
                <p style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: 1.65 }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* What We Offer Highlights */}
        <div
          style={{
            background: 'rgba(18, 14, 40, 0.7)',
            border: '1px solid rgba(192, 132, 252, 0.2)',
            borderRadius: '24px',
            padding: '3rem',
            textAlign: 'center'
          }}
        >
          <h3 style={{ fontSize: '1.8rem', color: '#f8fafc', marginBottom: '1.5rem' }}>
            Comprehensive Boutique Catalog
          </h3>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1rem',
              maxWidth: '900px',
              margin: '0 auto 2.5rem'
            }}
          >
            {[
              'Banarasi & Chanderi Sarees',
              'Velvet & Casual Cord Sets',
              'Saree Shapewear & Petticoats',
              'Pure Cotton Kaftans & Nighties',
              'Designer Tops & Kurtas',
              'Men’s Kurta & Dhoti Ensembles',
              'Men’s Linen & Cotton Shirts',
              'Quilted Velvet Bed Covers',
              'Customized Photo Mugs & Bottles',
              'Corporate Gift Bundles'
            ].map((item, i) => (
              <span
                key={i}
                style={{
                  padding: '0.5rem 1.1rem',
                  borderRadius: '9999px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(192, 132, 252, 0.2)',
                  fontSize: '0.85rem',
                  color: '#e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                <CheckCircle2 size={14} color="#4ade80" />
                {item}
              </span>
            ))}
          </div>

          <WhatsAppButton
            text="Inquire or Request Catalog on WhatsApp"
            size="lg"
          />
        </div>
      </div>
    </div>
  );
}
