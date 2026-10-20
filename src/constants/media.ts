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
}

export const HOME_MEDIA: {
  /** Verified Duka screen, shown in the hero in place of the illustration. */
  heroScreen: MediaAsset | null;
  /** Owner at a shop counter using Duka, beside the practical-problem section. */
  shopPhoto: MediaAsset | null;
  /** One screen per step card: record the sale, track the stock, issue the receipt. */
  steps: {
    sale: MediaAsset | null;
    stock: MediaAsset | null;
    receipt: MediaAsset | null;
  };
} = {
  heroScreen: null,
  shopPhoto: null,
  steps: {
    sale: null,
    stock: null,
    receipt: null,
  },
};
