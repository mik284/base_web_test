import React from 'react';

import SEO from '@/components/SEO';

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Privacy Policy | BasepointCloud"
        description="BasepointCloud Privacy Policy explaining how we collect, use, safeguard, and process your business and personal data."
        canonical="/privacy"
      />
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1
          className="text-4xl md:text-5xl font-bold mb-8 font-outfit"
          style={{ color: '#1F2B5D' }}
        >
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-8 font-outfit leading-relaxed">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-8 font-outfit">
          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: '#1F2B5D' }}
            >
              Introduction
            </h2>
            <p className="text-gray-600 leading-relaxed">
              BasepointCloud Ltd (&quot;we&quot;, &quot;our&quot;, or
              &quot;us&quot;) is committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you use our services.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: '#1F2B5D' }}
            >
              Information We Collect
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We collect information you provide directly to us, such as when
              you create an account, contact us, or use our services. This may
              include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Name and contact information</li>
              <li>Business information</li>
              <li>Payment information</li>
              <li>Usage data and analytics</li>
            </ul>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: '#1F2B5D' }}
            >
              How We Use Your Information
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices and support messages</li>
              <li>Respond to comments and questions</li>
              <li>Monitor and analyze trends, usage, and activities</li>
            </ul>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: '#1F2B5D' }}
            >
              Data Security
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: '#1F2B5D' }}
            >
              Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about this Privacy Policy, please
              contact us at info@basepoint.co.ke
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
