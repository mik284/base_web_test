import { HOMEPAGE_ROUTINE_STEPS } from '@/constants/landingData';
import React from 'react';

const OperatingRoutine: React.FC = () => {
  return (
    <section className="py-24 bg-white font-sans border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-navy/60 block mb-3">
            HOW TO USE THE INFORMATION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-5">
            Build a clearer routine, one day at a time.
          </h2>
          <p className="text-base sm:text-lg text-navy/70 leading-relaxed">
            Good records don&apos;t fix a business on their own. They give you a
            reliable starting point to review what happened and decide what to
            do next.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {HOMEPAGE_ROUTINE_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-8 rounded-3xl bg-surface border border-gray-100 hover:border-navy/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-navy text-white font-bold flex items-center justify-center text-sm mb-6">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-navy/70 leading-relaxed m-0">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <span className="inline-block py-2 px-5 rounded-full bg-surfaceAlt/60 text-xs font-semibold text-navy/70">
            A suggested operating routine. Planning and review remain your
            responsibility.
          </span>
        </div>
      </div>
    </section>
  );
};

export default OperatingRoutine;
