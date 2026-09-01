import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import FullscreenMediaModal from './FullscreenMediaModal';

const SLIDES = [
  {
    id: 1,
    image: '/banner/1 (1).jpeg',
    alt: "Mita's Creation Boutique Banner 1"
  },
  {
    id: 2,
    image: '/banner/1 (2).jpeg',
    alt: "Mita's Creation Boutique Banner 2"
  },
  {
    id: 3,
    image: '/banner/1 (3).jpeg',
    alt: "Mita's Creation Boutique Banner 3"
  }
];

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = (e) => {
    e?.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNext();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      handlePrev();
    }
  };

  return (
    <div
      className="hero-image-slideshow"
      style={{
        position: 'relative',
        width: '100%',
        padding: '1.5rem 0 2rem',
        background: 'linear-gradient(180deg, rgba(14, 10, 31, 0.95) 0%, rgba(9, 7, 20, 0.7) 100%)',
        borderBottom: '1px solid rgba(192, 132, 252, 0.15)'
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="container">
        {/* Slideshow Display Frame */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '480px',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 35px rgba(192, 132, 252, 0.2)',
            border: '1px solid rgba(244, 114, 182, 0.3)',
            backgroundColor: '#0c081e'
          }}
          className="slideshow-frame"
        >
          {SLIDES.map((slide, idx) => {
            const isActive = idx === currentSlide;
            return (
              <div
                key={slide.id}
                style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: isActive ? 1 : 0,
                  visibility: isActive ? 'visible' : 'hidden',
                  transition: 'opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1), transform 0.9s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: isActive ? 'scale(1)' : 'scale(1.04)'
                }}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 30%'
                  }}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                />

                {/* Subtle vignette gradient for luxury feel */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(ellipse at center, rgba(9, 7, 20, 0) 50%, rgba(9, 7, 20, 0.5) 100%), linear-gradient(180deg, rgba(9, 7, 20, 0.1) 0%, rgba(9, 7, 20, 0.4) 100%)'
                  }}
                />
              </div>
            );
          })}

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            aria-label="Previous slide"
            style={{
              position: 'absolute',
              left: '1.25rem',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              background: 'rgba(15, 11, 33, 0.75)',
              border: '1px solid rgba(192, 132, 252, 0.4)',
              backdropFilter: 'blur(10px)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.5)',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(244, 114, 182, 0.4)';
              e.currentTarget.style.borderColor = '#f472b6';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(15, 11, 33, 0.75)';
              e.currentTarget.style.borderColor = 'rgba(192, 132, 252, 0.4)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next slide"
            style={{
              position: 'absolute',
              right: '1.25rem',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              background: 'rgba(15, 11, 33, 0.75)',
              border: '1px solid rgba(192, 132, 252, 0.4)',
              backdropFilter: 'blur(10px)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.5)',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(244, 114, 182, 0.4)';
              e.currentTarget.style.borderColor = '#f472b6';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(15, 11, 33, 0.75)';
              e.currentTarget.style.borderColor = 'rgba(192, 132, 252, 0.4)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div
            style={{
              position: 'absolute',
              bottom: '1.25rem',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.45rem 0.9rem',
              borderRadius: '9999px',
              background: 'rgba(15, 11, 33, 0.7)',
              border: '1px solid rgba(192, 132, 252, 0.3)',
              backdropFilter: 'blur(12px)',
              zIndex: 10
            }}
          >
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                style={{
                  width: idx === currentSlide ? '26px' : '8px',
                  height: '8px',
                  borderRadius: '9999px',
                  backgroundColor: idx === currentSlide ? '#f472b6' : 'rgba(255, 255, 255, 0.4)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.35s ease',
                  boxShadow: idx === currentSlide ? '0 0 10px rgba(244, 114, 182, 0.8)' : 'none'
                }}
              />
            ))}
          </div>
          {/* Full Screen Button */}
          <button
            onClick={() => setIsFullscreenOpen(true)}
            className="fullscreen-open-btn"
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              zIndex: 10,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.45rem 0.9rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(15, 11, 33, 0.8)',
              border: '1px solid rgba(192, 132, 252, 0.45)',
              color: '#fdf2f8',
              fontSize: '0.8rem',
              fontWeight: '600',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)'
            }}
            title="View banner in full screen"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(244, 114, 182, 0.95)';
              e.currentTarget.style.color = '#0e0a21';
              e.currentTarget.style.borderColor = '#f472b6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(15, 11, 33, 0.8)';
              e.currentTarget.style.color = '#fdf2f8';
              e.currentTarget.style.borderColor = 'rgba(192, 132, 252, 0.45)';
            }}
          >
            <Maximize2 size={13} strokeWidth={2.4} />
            <span>Full Screen</span>
          </button>
        </div>
      </div>

      {/* Full Screen Banner Lightbox */}
      <FullscreenMediaModal
        isOpen={isFullscreenOpen}
        onClose={() => setIsFullscreenOpen(false)}
        mediaList={SLIDES.map((s) => s.image)}
        initialIndex={currentSlide}
        productName="Mita's Creation Boutique"
        onIndexChange={(idx) => setCurrentSlide(idx)}
        backButtonLabel="Back"
      />

      <style>{`
        @media (max-width: 768px) {
          .slideshow-frame {
            height: 320px !important;
            border-radius: 18px !important;
          }
        }
        @media (max-width: 480px) {
          .slideshow-frame {
            height: 260px !important;
          }
        }
      `}</style>
    </div>
  );
}
