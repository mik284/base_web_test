import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import PageLoader from '@/components/PageLoader';
import { Outlet, useLocation } from '@umijs/max';

const LandingLayout: React.FC = () => {
  const { pathname } = useLocation();
  const [initialLoading, setInitialLoading] = useState(true);

  // Initial mount loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 1200); // 1.2s for the brand to "pop"
    return () => clearTimeout(timer);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (initialLoading) {
    return <PageLoader />;
  }

  return (
    <div
      className="antialiased w-full min-h-screen relative overflow-x-hidden font-outfit"
      style={{
        backgroundColor: '#ffffff',
        color: '#1F2B5D',
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      {/* Shared Navigation */}
      <Navbar />

      {/* Page Content */}
      <main className="animate-fade-in">
        <Outlet />
      </main>

      {/* Shared CTA Section */}
      <CTASection />

      {/* Shared Footer */}
      <Footer />
    </div>
  );
};

export default LandingLayout;
