import { ArrowRightOutlined, RobotOutlined } from '@ant-design/icons';
import { history } from '@umijs/max';
import { Button } from 'antd';
import React from 'react';

const BiasharaTeaser: React.FC = () => {
  return (
    <section className="py-24 bg-white font-sans border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="rounded-[2.5rem] p-10 lg:p-16 relative overflow-hidden shadow-sm"
          style={{ backgroundColor: '#F0F3F8' }}
        >
          <div className="max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy/10 text-navy font-bold text-xs mb-4">
              <RobotOutlined />
              <span>BIASHARA AI — IN DEVELOPMENT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-5">
              From business records to better decisions.
            </h2>
            <p className="text-base sm:text-lg text-navy/70 leading-relaxed mb-8">
              We&apos;re exploring how Biashara AI could help organisations turn
              business signals into proposed actions, coordinate follow-through
              and learn from results. Explore the concept and register your
              interest.
            </p>
            <Button
              type="primary"
              size="large"
              onClick={() => history.push('/solutions/biashara-ai')}
              className="px-8 py-3.5 h-auto rounded-full font-bold bg-navy border-navy hover:bg-navy/90 text-base"
            >
              Explore Biashara AI <ArrowRightOutlined className="ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiasharaTeaser;
