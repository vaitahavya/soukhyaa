'use client';

import { Stethoscope, Heart, Microscope, Users, Palette, Shield } from 'lucide-react';
import Image from 'next/image';

const ProductsSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const products = [
    {
      icon: Stethoscope,
      title: 'Doctor Uniforms',
      description: 'Crisp, professional, stain-resistant doctor uniforms designed for comfort during long shifts.',
      features: ['Stain-resistant fabric', 'Multiple sizes', 'Professional appearance', 'Easy care'],
      color: 'from-blue-500 to-blue-600',
      image: '/images/doctor uniform 1.jpg',
      emoji: '👨‍⚕️'
    },
    {
      icon: Heart,
      title: 'Nursing Uniforms',
      description: 'Lightweight, multiple colors, long-shift friendly nursing uniforms for healthcare professionals.',
      features: ['Lightweight material', 'Multiple colors', 'Comfortable fit', 'Durable construction'],
      color: 'from-green-500 to-green-600',
      image: '/images/nurses uniform 1.jpg',
      emoji: '👩‍⚕️'
    },
    {
      icon: Microscope,
      title: 'Lab Coats',
      description: 'Protective and practical lab coats for laboratory and technical staff.',
      features: ['Protective design', 'Practical pockets', 'Easy maintenance', 'Professional look'],
      color: 'from-purple-500 to-purple-600',
      image: '/images/lab coat 1.jpg',
      emoji: '🧪'
    },
    {
      icon: Users,
      title: 'Theatre Coats',
      description: 'Specialized theatre coats for surgical and operating room staff.',
      features: ['Sterile design', 'High-quality material', 'Comfortable fit', 'Professional appearance'],
      color: 'from-orange-500 to-orange-600',
      image: '/images/theatre coat2.jpg',
      emoji: '🏥'
    },
    {
      icon: Palette,
      title: 'Patient Gowns',
      description: 'Comfortable and functional patient gowns for healthcare facilities.',
      features: ['Comfortable design', 'Easy care', 'Multiple sizes', 'Durable material'],
      color: 'from-pink-500 to-pink-600',
      image: '/images/patient gown.jpg',
      emoji: '🩺'
    },
    {
      icon: Shield,
      title: 'Hospital Bedding',
      description: 'Premium hospital bedding and linens for patient comfort and care.',
      features: ['Hypoallergenic material', 'Easy cleaning', 'Comfortable design', 'Durable construction'],
      color: 'from-indigo-500 to-indigo-600',
      image: '/images/hospital bedding.jpg',
      emoji: '🛏️'
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-semibold tracking-wide">PREMIUM COLLECTION</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-6">
            Our Products
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Where <span className="text-cyan-600 font-semibold">artistry meets functionality</span>. 
            Each piece is crafted with precision, designed for the modern healthcare professional who demands both style and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-white/20">
                {/* Header with product image */}
                <div className="relative h-48 overflow-hidden">
                  {/* Product Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={product.image}
                      alt={`${product.title} - Premium ${product.title.toLowerCase()} for healthcare professionals by Soukhyaa`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      unoptimized
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                  
                  {/* Icon overlay */}
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-2xl p-3">
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">{product.title}</h3>
                    <div className="text-white/80 text-sm">Premium Quality</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mr-3"></div>
                      Key Features
                    </h4>
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mr-3"></div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8">
                    <button 
                      onClick={() => scrollToSection('contact')}
                      className="w-full bg-gradient-to-r from-slate-100 to-gray-100 hover:from-cyan-500 hover:to-blue-600 text-gray-700 hover:text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 group-hover:shadow-lg transform group-hover:scale-105"
                    >
                      Ask for Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6">
                <span className="text-cyan-200 text-sm font-semibold tracking-wide">CUSTOM SOLUTIONS</span>
              </div>
              <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                Need Custom Solutions?
              </h3>
              <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                We offer <span className="text-cyan-400 font-semibold">tailored uniform solutions</span> for specific requirements, 
                including custom sizing, specialized materials, and unique design elements that reflect your brand identity.
              </p>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-1"
              >
                Request Custom Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
