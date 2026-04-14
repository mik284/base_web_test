import React from 'react';
import { CloudUploadOutlined } from '@ant-design/icons';

const PageLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        {/* Animated Logo Container */}
        <div className="relative mb-8">
          {/* Pulsing rings */}
          <div className="absolute inset-0 animate-ping rounded-full bg-mint/20" style={{ animationDuration: '2s' }} />
          <div className="absolute inset-0 animate-ping rounded-full bg-electric/10" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />

          <div
            className="relative w-24 h-24 flex items-center justify-center z-10"
          >
            <img
              src="/logo.png"
              alt="Loading..."
              className="w-full h-full object-contain animate-float"
            />
          </div>
        </div>

        {/* Text/Status */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-xl font-black text-navy font-outfit tracking-tight">BasepointCloud</h2>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse" />
            <div className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-navy/40 mt-4">
            Preparing your experience
          </span>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
