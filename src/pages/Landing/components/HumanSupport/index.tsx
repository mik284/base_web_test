import { ArrowRightOutlined, TeamOutlined } from '@ant-design/icons';
import { history } from '@umijs/max';
import { Button } from 'antd';
import React from 'react';

const HumanSupport: React.FC = () => {
  return (
    <section className="py-24 bg-surface font-sans border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[2.5rem] p-10 lg:p-16 border border-gray-100 shadow-sm max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy/5 text-navy font-bold text-xs mb-4">
              <TeamOutlined />
              <span>BASE COLLABS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Better tools. People who understand the work.
            </h2>
            <p className="text-base text-navy/70 leading-relaxed mb-4">
              Base Collabs brings experts, advisors and resellers into
              Basepoint&apos;s network. Tell us what help you need, and we can
              discuss available support for your setup.
            </p>
            <p className="text-xs text-navy/50 font-medium m-0">
              Availability, scope and any fees are confirmed before support
              begins.
            </p>
          </div>

          <div className="flex flex-col gap-3 w-full sm:w-auto shrink-0">
            <Button
              type="primary"
              size="large"
              onClick={() => history.push('/demo?intent=support')}
              className="px-8 py-3.5 h-auto rounded-full font-bold bg-navy border-navy hover:bg-navy/90 text-base"
            >
              Ask about support <ArrowRightOutlined className="ml-1" />
            </Button>
            <Button
              size="large"
              onClick={() => history.push('/collabs')}
              className="px-8 py-3.5 h-auto rounded-full font-semibold border-gray-200 text-navy hover:border-navy text-base"
            >
              Learn about Base Collabs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanSupport;
