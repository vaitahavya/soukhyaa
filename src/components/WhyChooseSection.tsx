'use client';

import { Shield, Ruler, Thermometer, DollarSign, Palette, Award } from 'lucide-react';

const WhyChooseSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const features = [
    {
      icon: Shield,
      title: 'Premium Fabric',
      description: 'Breathable, antibacterial materials that ensure comfort and hygiene throughout long shifts.',
      details: 'Our fabrics are specially treated with antimicrobial properties and designed for healthcare environments.'
    },
    {
      icon: Ruler,
      title: 'Perfect Fit',
      description: 'Tailored for long hours with ergonomic design that moves with your body.',
      details: 'Every uniform is designed with healthcare professionals in mind, ensuring comfort during extended wear.'
    },
    {
      icon: Thermometer,
      title: 'Hygienic & Safe',
      description: 'High-temperature wash resistant materials that maintain quality and safety standards.',
      details: 'All our uniforms can withstand high-temperature washing and sterilization processes.'
    },
    {
      icon: DollarSign,
      title: 'Affordable & Reliable',
      description: 'Cost-effective quality that provides excellent value for healthcare institutions.',
      details: 'We offer competitive pricing without compromising on quality, making us the smart choice for healthcare facilities.'
    },
    {
      icon: Palette,
      title: 'Customization',
      description: 'Personalized with logos, embroidery, and hospital branding to match your identity.',
      details: 'Full customization services including embroidery, screen printing, and color matching to your brand guidelines.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes ensure every piece meets our high standards.',
      details: 'ISO certified manufacturing processes with comprehensive quality checks at every stage.'
    }
  ];

  return (
    <section id="why-choose" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Soukhyaa?
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine quality, comfort, and innovation to deliver uniforms that healthcare professionals trust
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                    <feature.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {feature.details}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Healthcare Professionals
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence has earned us the trust of healthcare institutions across the country
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Hospitals Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">50K+</div>
              <div className="text-gray-600 font-medium">Uniforms Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">99%</div>
              <div className="text-gray-600 font-medium">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Support Available</div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <div className="text-2xl">👨‍⚕️</div>
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Dr. Sarah Johnson</div>
                    <div className="text-blue-200 text-sm">Chief Medical Officer</div>
                  </div>
                </div>
                <blockquote className="text-lg leading-relaxed">
                  &ldquo;Soukhyaa has been our trusted partner for over 5 years. Their uniforms are comfortable, 
                  durable, and maintain their professional appearance even after countless washes.&rdquo;
                </blockquote>
                <div className="text-blue-200 text-sm mt-4">City General Hospital</div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gradient-to-br from-emerald-600 to-green-800 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <div className="text-2xl">👩‍⚕️</div>
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Nurse Maria Rodriguez</div>
                    <div className="text-emerald-200 text-sm">Head Nurse</div>
                  </div>
                </div>
                <blockquote className="text-lg leading-relaxed">
                  &ldquo;The quality and service are unmatched. Our nursing staff loves the comfort and style 
                  of Soukhyaa uniforms. They make us feel confident and professional.&rdquo;
                </blockquote>
                <div className="text-emerald-200 text-sm mt-4">Metro Health Center</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-6">
                Ready to Experience the Difference?
              </h3>
              <p className="text-blue-100 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                Join hundreds of healthcare institutions that trust Soukhyaa for their uniform needs. 
                Get a <span className="text-cyan-300 font-semibold">free consultation and quote</span> today.
              </p>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-white/25 transform hover:-translate-y-1"
              >
                Get Your Quote Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
