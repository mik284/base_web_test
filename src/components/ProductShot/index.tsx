import React from 'react';

import { MediaAsset } from '@/constants/media';

/**
 * Responsive AVIF/WebP image with reserved dimensions (spec §1128). Pass
 * `priority` for the hero image so it is not lazy-loaded.
 */
const ProductShot: React.FC<{
  asset: MediaAsset;
  priority?: boolean;
  framed?: boolean;
  className?: string;
}> = ({ asset, priority, framed = true, className = '' }) => (
  <figure className={`m-0 w-full ${className}`}>
    <picture
      className={`block overflow-hidden ${
        framed
          ? 'rounded-3xl border border-solid border-surfaceAlt bg-white shadow-soft'
          : 'rounded-[2rem]'
      }`}
    >
      <source srcSet={`${asset.src}.avif`} type="image/avif" />
      <source srcSet={`${asset.src}.webp`} type="image/webp" />
      <img
        src={`${asset.src}.webp`}
        alt={asset.alt}
        width={asset.width}
        height={asset.height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        className="block w-full h-auto"
      />
    </picture>
    {asset.caption && (
      <figcaption className="mt-4 text-xs text-navy/70 text-center">
        {asset.caption}
      </figcaption>
    )}
  </figure>
);

export default ProductShot;
