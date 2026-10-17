/**
 * Captures permitted attribution context from the landing URL and keeps it in
 * memory for the rest of the visit. Nothing is written to persistent storage.
 */
const PARAMS: Record<string, string> = {
  utm_source: 'utm_source',
  utm_medium: 'utm_medium',
  utm_campaign: 'utm_campaign',
  utm_content: 'utm_content',
  ref: 'referral_code',
};

const SAFE_VALUE = /^[\w.-]{1,100}$/;

let captured: Record<string, string> | null = null;

export const captureAttribution = () => {
  if (captured) return;
  const query = new URLSearchParams(window.location.search);
  captured = { landing_page: window.location.pathname };
  Object.entries(PARAMS).forEach(([param, field]) => {
    const value = query.get(param);
    if (value && SAFE_VALUE.test(value)) {
      captured![field] = value;
    }
  });
};

export const getAttribution = (): Record<string, string> => captured ?? {};
