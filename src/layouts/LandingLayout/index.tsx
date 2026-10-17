import CookieBanner from '@/components/CookieBanner';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { track } from '@/utils/analytics';
import { captureAttribution } from '@/utils/attribution';
import { Outlet, useLocation } from '@umijs/max';
import React, { useEffect, useRef } from 'react';

const LandingLayout: React.FC = () => {
  const { pathname } = useLocation();
  const firstRender = useRef(true);

  useEffect(() => {
    captureAttribution();
  }, []);

  // Scroll to top and record a page view on client-side route changes.
  // The initial page view is sent by the gtag config.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (!window.location.hash) window.scrollTo(0, 0);
    track('page_view', { page_path: pathname });
  }, [pathname]);

  return (
    <div className="antialiased w-full min-h-screen relative overflow-x-hidden font-sans bg-white text-navy">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-white focus:text-navy focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default LandingLayout;
