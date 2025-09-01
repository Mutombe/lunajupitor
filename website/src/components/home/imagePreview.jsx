import React, { useState, useEffect } from 'react';
import { X, ZoomIn, ZoomOut, RotateCw, Download, Share2 } from 'lucide-react';

const ImagePreview = ({ 
  isOpen, 
  onClose, 
  src, 
  alt, 
  title, 
  description,
  showControls = true 
}) => {
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Reset transform values when opening
      setScale(1);
      setRotation(0);
      setPosition({ x: 0, y: 0 });
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      switch(e.key) {
        case 'Escape':
          onClose();
          break;
        case '=':
        case '+':
          e.preventDefault();
          handleZoomIn();
          break;
        case '-':
          e.preventDefault();
          handleZoomOut();
          break;
        case 'r':
        case 'R':
          e.preventDefault();
          handleRotate();
          break;
        default:
          break;
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.25, 0.5));
  };

  const handleRotate = () => {
    setRotation(prev => prev + 90);
  };

  const handleReset = () => {
    setScale(1);
    setRotation(0);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = src;
    link.download = alt || 'image';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title || alt,
          text: description,
          url: src
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(src);
      // You could add a toast notification here
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-90 transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full h-full flex flex-col">
        {/* Header */}
        <div className="relative z-10 flex items-center justify-between p-4 bg-black bg-opacity-50">
          <div className="flex-1">
            {title && (
              <h3 className="text-white text-lg font-semibold truncate">
                {title}
              </h3>
            )}
            {description && (
              <p className="text-gray-300 text-sm truncate">
                {description}
              </p>
            )}
          </div>
          
          {/* Control Buttons */}
          {showControls && (
            <div className="flex items-center space-x-2 ml-4">
              <button
                onClick={handleZoomOut}
                className="p-2 text-white hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
                title="Zoom Out (-)"
              >
                <ZoomOut size={20} />
              </button>
              
              <button
                onClick={handleZoomIn}
                className="p-2 text-white hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
                title="Zoom In (+)"
              >
                <ZoomIn size={20} />
              </button>
              
              <button
                onClick={handleRotate}
                className="p-2 text-white hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
                title="Rotate (R)"
              >
                <RotateCw size={20} />
              </button>
              
              <button
                onClick={handleReset}
                className="px-3 py-2 text-white text-sm hover:bg-white hover:bg-opacity-20 rounded transition-colors"
                title="Reset View"
              >
                Reset
              </button>
              
              <div className="w-px h-6 bg-white bg-opacity-30 mx-2" />
              
              <button
                onClick={handleDownload}
                className="p-2 text-white hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
                title="Download"
              >
                <Download size={20} />
              </button>
              
              <button
                onClick={handleShare}
                className="p-2 text-white hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
                title="Share"
              >
                <Share2 size={20} />
              </button>
            </div>
          )}
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="p-2 text-white hover:bg-white hover:bg-opacity-20 rounded-full transition-colors ml-4"
            title="Close (Esc)"
          >
            <X size={24} />
          </button>
        </div>

        {/* Image Container */}
        <div 
          className="flex-1 flex items-center justify-center p-4 overflow-hidden"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{ cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
        >
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-full object-contain transition-transform duration-200 select-none"
            style={{
              transform: `scale(${scale}) rotate(${rotation}deg) translate(${position.x}px, ${position.y}px)`,
              transformOrigin: 'center center'
            }}
            draggable={false}
          />
        </div>

        {/* Footer Info */}
        <div className="relative z-10 p-4 bg-black bg-opacity-50">
          <div className="flex items-center justify-between text-white text-sm">
            <div className="flex items-center space-x-4">
              <span>Scale: {Math.round(scale * 100)}%</span>
              <span>Rotation: {rotation % 360}°</span>
            </div>
            <div className="text-gray-300">
              Use mouse wheel or +/- to zoom • R to rotate • Drag to move when zoomed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Hook for managing image preview state
export const useImagePreview = () => {
  const [preview, setPreview] = useState({
    isOpen: false,
    src: '',
    alt: '',
    title: '',
    description: ''
  });

  const openPreview = (src, alt = '', title = '', description = '') => {
    setPreview({
      isOpen: true,
      src,
      alt,
      title,
      description
    });
  };

  const closePreview = () => {
    setPreview(prev => ({ ...prev, isOpen: false }));
  };

  return {
    preview,
    openPreview,
    closePreview
  };
};

export default ImagePreview;