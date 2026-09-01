import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  ArrowLeft, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Play,
  Maximize2
} from 'lucide-react';

const isVideoFile = (url) => typeof url === 'string' && /\.(mp4|webm|mov|ogg)$/i.test(url);

export default function FullscreenMediaModal({
  isOpen,
  onClose,
  mediaList = [],
  initialIndex = 0,
  productName = '',
  onIndexChange,
  backButtonLabel = 'Back to Product'
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Sync index when initialIndex changes or modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setZoomLevel(1);
      setPanPosition({ x: 0, y: 0 });
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, initialIndex]);

  const handleIndexChange = useCallback((newIndex) => {
    setCurrentIndex(newIndex);
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
    if (onIndexChange) {
      onIndexChange(newIndex);
    }
  }, [onIndexChange]);

  const handlePrev = useCallback(() => {
    if (mediaList.length <= 1) return;
    const nextIdx = (currentIndex - 1 + mediaList.length) % mediaList.length;
    handleIndexChange(nextIdx);
  }, [currentIndex, mediaList.length, handleIndexChange]);

  const handleNext = useCallback(() => {
    if (mediaList.length <= 1) return;
    const nextIdx = (currentIndex + 1) % mediaList.length;
    handleIndexChange(nextIdx);
  }, [currentIndex, mediaList.length, handleIndexChange]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === '+' || e.key === '=') {
        setZoomLevel((prev) => Math.min(prev + 0.5, 3));
      } else if (e.key === '-') {
        setZoomLevel((prev) => {
          const next = Math.max(prev - 0.5, 1);
          if (next === 1) setPanPosition({ x: 0, y: 0 });
          return next;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

  // Zoom controls
  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => {
      const next = Math.max(prev - 0.5, 1);
      if (next === 1) setPanPosition({ x: 0, y: 0 });
      return next;
    });
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
  };

  // Drag to pan when zoomed
  const handleMouseDown = (e) => {
    if (zoomLevel <= 1) return;
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX - panPosition.x,
      y: e.clientY - panPosition.y
    };
  };

  const handleMouseMove = (e) => {
    if (!isDragging || zoomLevel <= 1) return;
    setPanPosition({
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Double click toggles zoom
  const handleDoubleClick = () => {
    if (zoomLevel > 1) {
      handleResetZoom();
    } else {
      setZoomLevel(2);
    }
  };

  if (!isOpen || !mediaList || mediaList.length === 0) return null;

  const currentMedia = mediaList[currentIndex] || mediaList[0];
  const isVideo = isVideoFile(currentMedia);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Full screen picture viewer"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        backgroundColor: 'rgba(5, 3, 13, 0.96)',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        userSelect: isDragging ? 'none' : 'auto',
        animation: 'fullscreenFadeIn 0.25s ease-out'
      }}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Top Bar Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem 1.5rem',
          background: 'linear-gradient(180deg, rgba(10, 7, 24, 0.95) 0%, rgba(10, 7, 24, 0) 100%)',
          zIndex: 10,
          gap: '1rem'
        }}
      >
        {/* Back Button (Prominent return to product) */}
        <button
          onClick={onClose}
          id="fullscreen-back-button"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.6rem 1.25rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(244, 114, 182, 0.15)',
            border: '1px solid rgba(244, 114, 182, 0.5)',
            color: '#fdf2f8',
            fontSize: '0.92rem',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(244, 114, 182, 0.2)',
            transition: 'all 0.2s ease',
            backdropFilter: 'blur(8px)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(244, 114, 182, 0.95)';
            e.currentTarget.style.color = '#0e0a21';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(244, 114, 182, 0.45)';
            e.currentTarget.style.transform = 'translateX(-3px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(244, 114, 182, 0.15)';
            e.currentTarget.style.color = '#fdf2f8';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(244, 114, 182, 0.2)';
            e.currentTarget.style.transform = 'translateX(0)';
          }}
          title="Return to Product"
        >
          <ArrowLeft size={18} strokeWidth={2.4} />
          <span>{backButtonLabel}</span>
        </button>

        {/* Title & Counter */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '50%'
          }}
        >
          {productName && (
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                color: '#f8fafc',
                fontSize: '1rem',
                fontWeight: '600',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '100%'
              }}
            >
              {productName}
            </span>
          )}
          <span
            style={{
              fontSize: '0.8rem',
              color: '#c084fc',
              fontWeight: '500',
              marginTop: '0.15rem'
            }}
          >
            Picture {currentIndex + 1} of {mediaList.length}
            {zoomLevel > 1 && ` • ${Math.round(zoomLevel * 100)}% Zoom`}
          </span>
        </div>

        {/* Action Controls: Zoom & Close */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {!isVideo && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                backgroundColor: 'rgba(23, 17, 49, 0.75)',
                padding: '0.3rem 0.5rem',
                borderRadius: '9999px',
                border: '1px solid rgba(192, 132, 252, 0.25)'
              }}
            >
              <button
                onClick={handleZoomIn}
                disabled={zoomLevel >= 3}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: zoomLevel >= 3 ? '#64748b' : '#f8fafc',
                  cursor: zoomLevel >= 3 ? 'not-allowed' : 'pointer',
                  padding: '0.35rem',
                  display: 'flex',
                  alignItems: 'center',
                  borderRadius: '50%',
                  transition: 'background 0.2s ease'
                }}
                title="Zoom In (+)"
              >
                <ZoomIn size={17} />
              </button>
              <button
                onClick={handleZoomOut}
                disabled={zoomLevel <= 1}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: zoomLevel <= 1 ? '#64748b' : '#f8fafc',
                  cursor: zoomLevel <= 1 ? 'not-allowed' : 'pointer',
                  padding: '0.35rem',
                  display: 'flex',
                  alignItems: 'center',
                  borderRadius: '50%',
                  transition: 'background 0.2s ease'
                }}
                title="Zoom Out (-)"
              >
                <ZoomOut size={17} />
              </button>
              {zoomLevel > 1 && (
                <button
                  onClick={handleResetZoom}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#f472b6',
                    cursor: 'pointer',
                    padding: '0.35rem',
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: '50%',
                    transition: 'background 0.2s ease'
                  }}
                  title="Reset Zoom"
                >
                  <RotateCcw size={15} />
                </button>
              )}
            </div>
          )}

          {/* Close button */}
          <button
            onClick={onClose}
            id="fullscreen-close-button"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'rgba(23, 17, 49, 0.85)',
              border: '1px solid rgba(192, 132, 252, 0.3)',
              color: '#cbd5e1',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.85)';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(23, 17, 49, 0.85)';
              e.currentTarget.style.color = '#cbd5e1';
              e.currentTarget.style.borderColor = 'rgba(192, 132, 252, 0.3)';
            }}
            title="Close (Esc)"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Main Center Media Display Area */}
      <div
        style={{
          position: 'relative',
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          padding: '1rem',
          cursor: zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
        }}
        onMouseDown={handleMouseDown}
      >
        {/* Navigation Previous Button */}
        {mediaList.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            style={{
              position: 'absolute',
              left: '1.25rem',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: 'rgba(15, 11, 33, 0.8)',
              border: '1px solid rgba(192, 132, 252, 0.4)',
              color: '#f8fafc',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(244, 114, 182, 0.95)';
              e.currentTarget.style.color = '#0e0a21';
              e.currentTarget.style.borderColor = '#f472b6';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(15, 11, 33, 0.8)';
              e.currentTarget.style.color = '#f8fafc';
              e.currentTarget.style.borderColor = 'rgba(192, 132, 252, 0.4)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
            title="Previous Picture (Left Arrow)"
          >
            <ChevronLeft size={28} />
          </button>
        )}

        {/* Media Container */}
        <div
          style={{
            maxWidth: '92vw',
            maxHeight: '76vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: isDragging ? 'none' : 'transform 0.2s cubic-bezier(0.2, 0, 0.2, 1)',
            transform: `scale(${zoomLevel}) translate(${panPosition.x / zoomLevel}px, ${panPosition.y / zoomLevel}px)`
          }}
          onDoubleClick={handleDoubleClick}
        >
          {isVideo ? (
            <video
              src={currentMedia}
              controls
              autoPlay
              playsInline
              style={{
                maxWidth: '90vw',
                maxHeight: '72vh',
                borderRadius: '16px',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7), 0 0 40px rgba(192, 132, 252, 0.2)',
                border: '1px solid rgba(192, 132, 252, 0.3)',
                backgroundColor: '#000000'
              }}
            />
          ) : (
            <img
              src={currentMedia}
              alt={productName || `Media ${currentIndex + 1}`}
              style={{
                maxWidth: '90vw',
                maxHeight: '72vh',
                objectFit: 'contain',
                borderRadius: '16px',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.75), 0 0 35px rgba(244, 114, 182, 0.18)',
                border: '1px solid rgba(192, 132, 252, 0.25)',
                display: 'block'
              }}
              draggable={false}
            />
          )}
        </div>

        {/* Navigation Next Button */}
        {mediaList.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            style={{
              position: 'absolute',
              right: '1.25rem',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: 'rgba(15, 11, 33, 0.8)',
              border: '1px solid rgba(192, 132, 252, 0.4)',
              color: '#f8fafc',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(244, 114, 182, 0.95)';
              e.currentTarget.style.color = '#0e0a21';
              e.currentTarget.style.borderColor = '#f472b6';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(15, 11, 33, 0.8)';
              e.currentTarget.style.color = '#f8fafc';
              e.currentTarget.style.borderColor = 'rgba(192, 132, 252, 0.4)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
            title="Next Picture (Right Arrow)"
          >
            <ChevronRight size={28} />
          </button>
        )}
      </div>

      {/* Bottom Thumbnail Strip & Back Bar */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '1rem 1.5rem 1.25rem',
          background: 'linear-gradient(0deg, rgba(10, 7, 24, 0.98) 0%, rgba(10, 7, 24, 0) 100%)',
          zIndex: 10
        }}
      >
        {/* Thumbnails Row */}
        {mediaList.length > 1 && (
          <div
            style={{
              display: 'flex',
              gap: '0.6rem',
              overflowX: 'auto',
              maxWidth: '92vw',
              padding: '0.4rem 0.6rem',
              scrollbarWidth: 'thin'
            }}
          >
            {mediaList.map((item, idx) => {
              const isThumbVideo = isVideoFile(item);
              const isActive = idx === currentIndex;
              return (
                <button
                  key={idx}
                  onClick={() => handleIndexChange(idx)}
                  style={{
                    flex: '0 0 62px',
                    width: '62px',
                    height: '62px',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    border: isActive ? '2px solid #f472b6' : '1px solid rgba(192, 132, 252, 0.25)',
                    padding: 0,
                    cursor: 'pointer',
                    background: '#130e2c',
                    position: 'relative',
                    boxShadow: isActive ? '0 0 16px rgba(244, 114, 182, 0.6)' : 'none',
                    transform: isActive ? 'scale(1.08)' : 'scale(1)',
                    transition: 'all 0.2s ease',
                    opacity: isActive ? 1 : 0.65
                  }}
                  title={`View picture ${idx + 1}`}
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
                          background: 'rgba(0, 0, 0, 0.35)'
                        }}
                      >
                        <Play size={16} color="#ffffff" fill="#ffffff" />
                      </div>
                    </div>
                  ) : (
                    <img
                      src={item}
                      alt={`Thumbnail ${idx + 1}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      loading="lazy"
                    />
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Bottom Hint and Back to Product Action */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
            fontSize: '0.8rem',
            color: '#94a3b8'
          }}
        >
          <span>Use <strong style={{ color: '#cbd5e1' }}>←</strong> / <strong style={{ color: '#cbd5e1' }}>→</strong> to browse • <strong style={{ color: '#cbd5e1' }}>Esc</strong> or click Back to exit</span>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#f472b6',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              fontWeight: '600',
              textDecoration: 'underline',
              textUnderlineOffset: '3px'
            }}
          >
            <ArrowLeft size={14} />
            <span>{backButtonLabel}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
