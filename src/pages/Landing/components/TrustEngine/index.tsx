import React from 'react';

const TrustEngine: React.FC = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 font-outfit">
            We engineer trust
          </h2>
          <p className="text-xl text-navy/70 max-w-3xl mx-auto font-outfit leading-relaxed">
            Transforming raw data into actionable insights that unlock financial
            opportunities for African businesses
          </p>
        </div>

        {/* Simple 3-Step Flow */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Step 1 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-mint rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy mb-3 font-outfit">
              Data Ingestion
            </h3>
            <p className="text-navy/60 font-outfit leading-relaxed">
              We collect and process transaction data from multiple sources
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-electric rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy mb-3 font-outfit">
              Insights
            </h3>
            <p className="text-navy/60 font-outfit leading-relaxed">
              Advanced analytics transform raw data into meaningful patterns
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy mb-3 font-outfit">
              Financial Enablement
            </h3>
            <p className="text-navy/60 font-outfit leading-relaxed">
              Data-driven trust scores unlock access to financing
            </p>
          </div>
        </div>

        {/* Simple Stats */}
        {/* <div className="text-center py-12 border-t border-surfaceAlt">
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-navy mb-2 font-outfit">10K+</div>
              <div className="text-navy/60 font-outfit">Businesses</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-navy mb-2 font-outfit">$50M+</div>
              <div className="text-navy/60 font-outfit">Capital</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-navy mb-2 font-outfit">95%</div>
              <div className="text-navy/60 font-outfit">Accuracy</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default TrustEngine;
