/**
 * Thin wrapper around gtag. Events follow the vocabulary in the website
 * specification (§22.4). Never pass raw form text, email, phone or financial
 * data as event parameters.
 */
type EventParams = Record<string, string | number | boolean | undefined>;

export const track = (event: string, params: EventParams = {}) => {
  const gtag = (window as any).gtag;
  if (typeof gtag === 'function') {
    gtag('event', event, params);
  }
};
