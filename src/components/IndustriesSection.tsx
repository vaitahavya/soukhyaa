'use client';

import { Building2, Home, Microscope, GraduationCap, Ambulance, Stethoscope } from 'lucide-react';

const IndustriesSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const industries = [
    {
      icon: Building2,
      title: 'Hospitals & Clinics',
      description: 'Comprehensive uniform solutions for large hospitals and private clinics.',
      features: ['Doctor coats', 'Nursing scrubs', 'Support staff uniforms', 'Custom branding'],
      color: 'from-blue-500 to-blue-600',
      stats: '200+ Hospitals'
    },
    {
      icon: Home,
      title: 'Nursing Homes',
      description: 'Comfortable and professional uniforms for long-term care facilities.',
      features: ['Comfortable designs', 'Easy care materials', 'Professional appearance', 'Durable construction'],
      color: 'from-green-500 to-green-600',
      stats: '150+ Facilities'
    },
    {
      icon: Microscope,
      title: 'Diagnostic Labs',
      description: 'Specialized protective wear for laboratory and diagnostic centers.',
      features: ['Lab coats', 'Protective gear', 'Sterile materials', 'Safety compliance'],
      color: 'from-purple-500 to-purple-600',
      stats: '100+ Labs'
    },
    {
      icon: GraduationCap,
      title: 'Medical Colleges',
      description: 'Educational uniforms for medical students and teaching staff.',
      features: ['Student uniforms', 'Faculty wear', 'Clinical attire', 'Institutional branding'],
      color: 'from-orange-500 to-orange-600',
      stats: '50+ Institutions'
    },
    {
      icon: Ambulance,
      title: 'Paramedical Services',
      description: 'Emergency and paramedical uniform solutions.',
      features: ['Emergency wear', 'High visibility', 'Durable materials', 'Quick response design'],
      color: 'from-red-500 to-red-600',
      stats: '75+ Services'
    },
    {
      icon: Stethoscope,
      title: 'Support Services',
      description: 'Uniforms for healthcare support and administrative staff.',
      features: ['Administrative wear', 'Support staff uniforms', 'Professional appearance', 'Comfortable fit'],
      color: 'from-indigo-500 to-indigo-600',
      stats: '300+ Organizations'
    }
  ];

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Industries We Serve
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From large hospitals to small clinics, we provide tailored uniform solutions for every healthcare setting
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${industry.color} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <industry.icon className="w-12 h-12" />
                      <div className="text-right">
                        <div className="text-sm opacity-90">Serving</div>
                        <div className="text-lg font-bold">{industry.stats}</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold">{industry.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {industry.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 mb-3">What We Provide:</h4>
                    {industry.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6">
                    <button 
                      onClick={() => scrollToSection('contact')}
                      className="w-full bg-gray-100 hover:bg-blue-600 text-gray-700 hover:text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 group-hover:shadow-lg"
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">
                Don&apos;t See Your Industry?
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We work with healthcare organizations of all sizes and types. 
                Contact us to discuss your specific uniform requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">Custom Solutions</div>
                <div className="text-gray-300">Tailored to your specific needs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">Bulk Orders</div>
                <div className="text-gray-300">Competitive pricing for large quantities</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">Quick Delivery</div>
                <div className="text-gray-300">Fast turnaround times</div>
              </div>
            </div>

            <div className="text-center mt-8">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Contact Us Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
