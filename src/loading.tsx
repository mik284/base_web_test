import { useEffect, useState } from 'react';

// Shown while a route's code loads. Nothing appears for fast loads; slower ones
// get a thin bar along the top so the page never waits on a splash screen.
const SHOW_AFTER_MS = 300;

export default () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), SHOW_AFTER_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen" aria-busy="true">
      {visible && (
        <div
          role="progressbar"
          aria-label="Loading page"
          className="fixed inset-x-0 top-0 z-[9999] h-[3px]"
        >
          <div className="h-full origin-left bg-mint-dark animate-route-progress motion-reduce:animate-none motion-reduce:scale-x-50" />
        </div>
      )}
    </div>
  );
};
