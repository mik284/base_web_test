import {
  ClockCircleOutlined,
  CustomerServiceOutlined,
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
  WhatsAppOutlined,
} from '@ant-design/icons';
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = '254746665877';
    const text = `Hello BasepointCloud,

*Name:* ${formData.firstName} ${formData.lastName}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Subject:* ${formData.subject}

*Message:*
${formData.message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text,
    )}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1F2B5D] via-[#1F2B5D]/95 to-[#0a0f2e]">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#8AFEA7] rounded-full filter blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8AFEA7] rounded-full filter blur-3xl" />
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-outfit mb-6 text-white">
              Let&apos;s Start a Conversation
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-outfit max-w-3xl mx-auto leading-relaxed">
              Have questions about our solutions? We&apos;re here to help you
              transform your business with BasepointCloud
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
              style={{ backgroundColor: 'rgba(138,254,167,0.15)' }}
            >
              <MailOutlined style={{ fontSize: 28, color: '#8AFEA7' }} />
            </div>
            <h3
              className="font-bold text-xl mb-3 font-outfit"
              style={{ color: '#1F2B5D' }}
            >
              Email Us
            </h3>
            <p className="text-gray-600 font-outfit">info@basepoint.co.ke</p>
            <p className="text-gray-600 font-outfit">
              community@basepoint.co.ke
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
              style={{ backgroundColor: 'rgba(138,254,167,0.15)' }}
            >
              <PhoneOutlined style={{ fontSize: 28, color: '#8AFEA7' }} />
            </div>
            <h3
              className="font-bold text-xl mb-3 font-outfit"
              style={{ color: '#1F2B5D' }}
            >
              Call Us
            </h3>
            <p className="text-gray-600 font-outfit">+254 746 665 877</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
              style={{ backgroundColor: 'rgba(138,254,167,0.15)' }}
            >
              <EnvironmentOutlined style={{ fontSize: 28, color: '#8AFEA7' }} />
            </div>
            <h3
              className="font-bold text-xl mb-3 font-outfit"
              style={{ color: '#1F2B5D' }}
            >
              Visit Us
            </h3>
            <p className="text-gray-600 font-outfit">CMS Africa</p>
            <p className="text-gray-600 font-outfit">Chania Avenue, Kilimani</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
              style={{ backgroundColor: 'rgba(138,254,167,0.15)' }}
            >
              <ClockCircleOutlined style={{ fontSize: 28, color: '#8AFEA7' }} />
            </div>
            <h3
              className="font-bold text-xl mb-3 font-outfit"
              style={{ color: '#1F2B5D' }}
            >
              Working Hours
            </h3>
            <p className="text-gray-600 font-outfit">Mon - Fri: 8AM - 6PM</p>
            <p className="text-gray-600 font-outfit">Sat: 9AM - 1PM</p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="mb-8">
              <h2
                className="text-3xl md:text-4xl font-bold font-outfit mb-4"
                style={{ color: '#1F2B5D' }}
              >
                Send us a message
              </h2>
              <p className="text-gray-600 font-outfit text-lg">
                Fill out the form below and we&apos;ll get back to you within 24
                hours
              </p>
            </div>
            <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-sm font-semibold mb-3 font-outfit"
                    style={{ color: '#1F2B5D' }}
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#8AFEA7] focus:ring-4 focus:ring-[#8AFEA7]/10 font-outfit transition-all duration-300"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-semibold mb-3 font-outfit"
                    style={{ color: '#1F2B5D' }}
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#8AFEA7] focus:ring-4 focus:ring-[#8AFEA7]/10 font-outfit transition-all duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-sm font-semibold mb-3 font-outfit"
                  style={{ color: '#1F2B5D' }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#8AFEA7] focus:ring-4 focus:ring-[#8AFEA7]/10 font-outfit transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-semibold mb-3 font-outfit"
                  style={{ color: '#1F2B5D' }}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#8AFEA7] focus:ring-4 focus:ring-[#8AFEA7]/10 font-outfit transition-all duration-300"
                  placeholder="+254 700 000 000"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-semibold mb-3 font-outfit"
                  style={{ color: '#1F2B5D' }}
                >
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#8AFEA7] focus:ring-4 focus:ring-[#8AFEA7]/10 font-outfit transition-all duration-300 bg-white"
                >
                  <option value="">Select a topic</option>
                  <option value="sales">Sales Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership</option>
                  <option value="careers">Careers</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  className="block text-sm font-semibold mb-3 font-outfit"
                  style={{ color: '#1F2B5D' }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#8AFEA7] focus:ring-4 focus:ring-[#8AFEA7]/10 font-outfit resize-none transition-all duration-300"
                  placeholder="Tell us about your needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-8 rounded-xl font-bold text-white transition-all duration-300 font-outfit text-lg hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2"
                style={{ backgroundColor: '#25D366' }}
              >
                <WhatsAppOutlined style={{ fontSize: 20 }} />
                Send via WhatsApp
              </button>
            </form>
          </div>

          {/* Side Content */}
          <div className="space-y-8">
            {/* Why Contact Us */}
            <div className="bg-gradient-to-br from-[#1F2B5D] to-[#0a0f2e] rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#8AFEA7] rounded-full filter blur-3xl opacity-10" />
              <div className="relative z-10">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'rgba(138,254,167,0.2)' }}
                >
                  <CustomerServiceOutlined
                    style={{ fontSize: 32, color: '#8AFEA7' }}
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold font-outfit mb-4">
                  Why Choose BasepointCloud?
                </h3>
                <ul className="space-y-4 font-outfit">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#8AFEA7] flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-[#1F2B5D] text-sm font-bold">
                        ✓
                      </span>
                    </div>
                    <span className="text-white/90">
                      24/7 customer support available
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#8AFEA7] flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-[#1F2B5D] text-sm font-bold">
                        ✓
                      </span>
                    </div>
                    <span className="text-white/90">
                      Tailored solutions for your business
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#8AFEA7] flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-[#1F2B5D] text-sm font-bold">
                        ✓
                      </span>
                    </div>
                    <span className="text-white/90">
                      Expert team with local knowledge
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#8AFEA7] flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-[#1F2B5D] text-sm font-bold">
                        ✓
                      </span>
                    </div>
                    <span className="text-white/90">
                      Quick response within 24 hours
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* FAQ Preview */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h3
                className="text-2xl font-bold font-outfit mb-6"
                style={{ color: '#1F2B5D' }}
              >
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                  <h4
                    className="font-semibold font-outfit"
                    style={{ color: '#1F2B5D' }}
                  >
                    How quickly can I get started?
                  </h4>
                  <p className="text-gray-600 font-outfit text-sm mt-2">
                    Most businesses are up and running within 24-48 hours
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                  <h4
                    className="font-semibold font-outfit"
                    style={{ color: '#1F2B5D' }}
                  >
                    Do you offer training?
                  </h4>
                  <p className="text-gray-600 font-outfit text-sm mt-2">
                    Yes, we provide comprehensive training for all our solutions
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                  <h4
                    className="font-semibold font-outfit"
                    style={{ color: '#1F2B5D' }}
                  >
                    What payment methods do you accept?
                  </h4>
                  <p className="text-gray-600 font-outfit text-sm mt-2">
                    We accept M-Pesa, card payments, and bank transfers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
