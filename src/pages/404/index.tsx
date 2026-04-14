import React from 'react';
import { history } from '@umijs/max';
import { Button, Result } from 'antd';
import { HomeOutlined, ArrowLeftOutlined } from '@ant-design/icons';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-24 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[30%] h-[30%] bg-electric/30 blur-[100px] rounded-full animate-float" />
        <div className="absolute bottom-[20%] right-[10%] w-[40%] h-[40%] bg-mint/20 blur-[120px] rounded-full animate-float-delayed" />
      </div>

      <div className="max-w-2xl w-full text-center relative z-10">
        <div className="mb-10 flex items-center justify-center">
          <span className="text-[120px] font-black text-navy font-outfit leading-none opacity-20">404</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-navy font-outfit mb-6 tracking-tight">
          Oops! Page Not Found.
        </h1>
        
        <p className="text-lg text-navy/60 font-medium font-outfit mb-12 max-w-md mx-auto leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            type="primary" 
            size="large" 
            icon={<HomeOutlined />}
            onClick={() => history.push('/')}
            className="w-full sm:w-auto h-14 px-8 rounded-2xl font-bold font-outfit shadow-lg shadow-navy/20"
          >
            Back to Home
          </Button>
          <Button 
            size="large" 
            icon={<ArrowLeftOutlined />}
            onClick={() => history.back()}
            className="w-full sm:w-auto h-14 px-8 rounded-2xl font-bold font-outfit bg-surface border-transparent hover:border-navy/10 transition-all"
          >
            Go Back
          </Button>
        </div>

        {/* Brand Text */}
        <div className="mt-20 pt-10 border-t border-navy/5">
          <div className="flex items-center justify-center gap-2 opacity-40 grayscale">
            <img src="/logo.png" alt="Base Logo" className="w-6 h-6 object-contain" />
            <span className="font-bold text-sm tracking-tight font-outfit text-navy">BasepointCloud</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
