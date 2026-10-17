import React from 'react';

import SEO from '@/components/SEO';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Terms of Service | Basepoint"
        description="BasepointCloud Terms of Service governing the access and usage of our commerce operating system products and services."
        canonical="/terms"
      />
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1
          className="text-4xl md:text-5xl font-bold mb-8"
          style={{ color: '#1F2B5D' }}
        >
          Terms of Service
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-8">
          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: '#1F2B5D' }}
            >
              Acceptance of Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing or using BasepointCloud services, you agree to be
              bound by these Terms of Service. If you do not agree to these
              terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: '#1F2B5D' }}
            >
              Services
            </h2>
            <p className="text-gray-600 leading-relaxed">
              BasepointCloud provides business management solutions including
              but not limited to inventory management, payment processing, HR
              management, property management, and customer relationship
              management tools.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: '#1F2B5D' }}
            >
              User Responsibilities
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">You agree to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized use</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>
                Not use our services for any illegal or unauthorized purpose
              </li>
            </ul>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: '#1F2B5D' }}
            >
              Payment Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Payment for our services is due as specified in your service
              agreement. We reserve the right to modify our pricing at any time
              with prior notice to active subscribers.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: '#1F2B5D' }}
            >
              Intellectual Property
            </h2>
            <p className="text-gray-600 leading-relaxed">
              All content, features, and functionality of our services are owned
              by BasepointCloud Ltd and are protected by international
              copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: '#1F2B5D' }}
            >
              Limitation of Liability
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To the fullest extent permitted by law, BasepointCloud shall not
              be liable for any indirect, incidental, special, consequential, or
              punitive damages arising out of or related to your use of our
              services.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: '#1F2B5D' }}
            >
              Termination
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to suspend or terminate your access to our
              services at any time, with or without cause, with or without
              notice.
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
              If you have any questions about these Terms of Service, please
              contact us at info@basepoint.co.ke
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
