"use client";
import Image from 'next/image';
import { useState } from 'react';

/**
 * OptimizedImage - A wrapper around Next.js Image component
 * Provides automatic optimization, lazy loading, and responsive images
 * 
 * Usage:
 * <OptimizedImage 
 *   src="/assets/img/logo.png" 
 *   alt="Logo" 
 *   width={200} 
 *   height={100}
 *   priority={false} // Set to true for above-the-fold images
 * />
 */
const OptimizedImage = ({
  src,
  alt = '',
  width,
  height,
  className = '',
  priority = false,
  fill = false,
  sizes,
  quality = 85,
  objectFit = 'cover',
  ...props
}) => {
  const [imageError, setImageError] = useState(false);

  // If image failed to load, fallback to regular img tag
  if (imageError) {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        {...props}
      />
    );
  }

  // If fill is true, use fill layout
  if (fill) {
    return (
      <div className={`relative ${className}`} style={{ width, height }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
          quality={quality}
          className={`object-${objectFit}`}
          priority={priority}
          onError={() => setImageError(true)}
          {...props}
        />
      </div>
    );
  }

  // Regular Image component with width/height
  if (!width || !height) {
    console.warn(`OptimizedImage: width and height are required for ${src}`);
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        {...props}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      quality={quality}
      priority={priority}
      sizes={sizes || `(max-width: 768px) 100vw, ${width}px`}
      onError={() => setImageError(true)}
      {...props}
    />
  );
};

export default OptimizedImage;

