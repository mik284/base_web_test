/**
 * Approved homepage imagery (spec §2.3, §6.1). Each slot stays `null` until an
 * owned or licensed asset is approved; components fall back to the existing
 * illustration or icon treatment while a slot is empty.
 *
 * Put files in `public/images/` and export AVIF + WebP at the stated size.
 * Product screens must use sample data and say so in `caption`. Photos of
 * identifiable people or customer businesses need written permission.
 */

export interface MediaAsset {
  /** Path without extension, e.g. `/images/duka-sale`; `.avif` and `.webp` must exist. */
  src: string;
  /** Describes the workflow shown, not marketing adjectives (spec §6.1). */
  alt: string;
  width: number;
  height: number;
  caption?: string;
  /** Source and licence, for the asset register. Not rendered. */
  credit?: string;
}

export const HOME_MEDIA: {
  /** Verified Duka screen, shown in the hero in place of the illustration. */
  heroScreen: MediaAsset | null;
  /** Owner at a shop counter, beside the practical-problem section. */
  shopPhoto: MediaAsset | null;
  /** Photo strip of everyday counters; the section is omitted when empty. */
  counters: MediaAsset[];
  /** One screen per step card: record the sale, track the stock, issue the receipt. */
  steps: {
    sale: MediaAsset | null;
    stock: MediaAsset | null;
    receipt: MediaAsset | null;
  };
} = {
  heroScreen: null,
  // Placeholder stock photography (Unsplash License). Replace with an owned
  // shoot with signed releases before launch (spec §2.3).
  shopPhoto: {
    src: '/images/duka-owner-counter',
    alt: 'A shop owner behind her counter, with stocked shelves behind her and a phone on the counter',
    width: 1200,
    height: 800,
    credit: 'Ali Mkumbwa, Unsplash (EOkN2pRjFsg)',
  },
  counters: [
    {
      src: '/images/nyama-choma-vendor',
      alt: 'A nyama choma vendor in an apron checking his phone beside the grill counter',
      width: 1200,
      height: 900,
      credit: 'Ali Mkumbwa, Unsplash (uk3ey_vhDKA)',
    },
    {
      src: '/images/fruit-seller',
      alt: 'A fruit seller at her stall holding a phone',
      width: 1200,
      height: 900,
      credit: 'Ali Mkumbwa, Unsplash (5dFuO02OHh0)',
    },
    {
      src: '/images/cafe-barista',
      alt: 'A barista preparing coffee at a counter in a small shop',
      width: 1200,
      height: 900,
      credit: 'Mugabi Owen, Unsplash (g0-VSbPrOnc)',
    },
    {
      src: '/images/butcher-shopfront',
      alt: 'A butcher standing at the door of his shop',
      width: 1200,
      height: 900,
      credit: 'Ali Mkumbwa, Unsplash (r0kv1S72CPw)',
    },
  ],
  steps: {
    sale: null,
    stock: null,
    receipt: null,
  },
};
