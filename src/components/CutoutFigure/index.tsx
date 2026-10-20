import React from 'react';

import { MediaAsset } from '@/constants/media';

/**
 * A background-removed photo standing on a brand-coloured panel, with the
 * subject's head breaking out of the top edge. The asset must be a
 * transparent WebP/AVIF cut-out.
 */
const CutoutFigure: React.FC<{
  asset: MediaAsset;
  panel?: 'mint' | 'cyan' | 'orange';
  priority?: boolean;
}> = ({ asset, panel = 'mint', priority }) => {
  const panelClass = {
    mint: 'bg-mint',
    cyan: 'bg-cyan',
    orange: 'bg-orange',
  }[panel];
  return (
    <figure className="m-0 w-full">
      <div className="relative pt-8 lg:pt-16">
        <div
          aria-hidden="true"
          className={`absolute inset-x-0 bottom-0 top-16 lg:top-24 rounded-[2.5rem] ${panelClass}`}
        />
        <div
          aria-hidden="true"
          className="absolute right-4 top-8 lg:top-16 w-20 h-20 lg:w-24 lg:h-24 rounded-full border-[10px] border-solid border-navy/10"
        />
        <picture className="relative z-10 block">
          <source srcSet={`${asset.src}.avif`} type="image/avif" />
          <source srcSet={`${asset.src}.webp`} type="image/webp" />
          <img
            src={`${asset.src}.webp`}
            alt={asset.alt}
            width={asset.width}
            height={asset.height}
            loading={priority ? 'eager' : 'lazy'}
            decoding={priority ? 'sync' : 'async'}
            className="block mx-auto w-full max-w-sm lg:max-w-md h-auto"
          />
        </picture>
      </div>
      {asset.caption && (
        <figcaption className="mt-4 text-xs text-navy/70 text-center">
          {asset.caption}
        </figcaption>
      )}
    </figure>
  );
};

export default CutoutFigure;
