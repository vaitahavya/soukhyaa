'use client';

import { ArrowRight, Users } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Artistic Background with Multiple Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-400/20 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-indigo-500/15 rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-teal-400/10 rounded-full blur-xl animate-pulse delay-3000"></div>
      </div>

      {/* Premium Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M50 0L60 40L100 50L60 60L50 100L40 60L0 50L40 40Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Hero Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-transparent to-slate-900/60"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            {/* Premium Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-12 md:mb-16">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-cyan-200 text-sm font-medium tracking-wide">PREMIUM HEALTHCARE APPAREL</span>
            </div>

            {/* Main Tagline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
                Soukhyaa
              </span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-light text-cyan-200 mt-4 tracking-wide">
                Redefining Hospital Uniforms
              </span>
            </h1>
            
            {/* Subtext */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Where <span className="text-cyan-400 font-semibold">artistry meets functionality</span>. 
              Premium uniforms that elevate healthcare professionals with comfort, style, and uncompromising quality.
            </p>
          
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => scrollToSection('contact')}
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center gap-2 shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-1"
              >
                Ask for Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
              >
                Get Custom Quote
                <Users className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Visual Element */}
          <div className="relative">
            {/* Premium Product Showcase */}
            <div className="relative">
              {/* Main Product Card */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="relative rounded-2xl h-64 overflow-hidden">
                  {/* Doctor Uniform Image */}
                  <div className="absolute inset-0">
                    <Image
                      src="/images/doctor uniform 1.jpg"
                      alt="Premium Doctor Uniform - Professional Excellence"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-xl font-semibold text-white">Premium Doctor Uniform</div>
                      <div className="text-cyan-100 text-sm">Professional Excellence</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl p-4 transform -rotate-12 hover:rotate-0 transition-transform duration-500">
                <div className="text-white text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                    <div className="text-lg">👩‍⚕️</div>
                  </div>
                  <div className="text-xs font-semibold">Nursing</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-2xl p-4 transform rotate-12 hover:rotate-0 transition-transform duration-500">
                <div className="text-white text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                    <div className="text-lg">🧪</div>
                  </div>
                  <div className="text-xs font-semibold">Lab Tech</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">500+</div>
                <div className="text-cyan-200 font-medium">Hospitals Served</div>
                <div className="text-gray-400 text-sm mt-1">Nationwide Trust</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-2">10+</div>
                <div className="text-emerald-200 font-medium">Years Excellence</div>
                <div className="text-gray-400 text-sm mt-1">Proven Heritage</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-2">100%</div>
                <div className="text-purple-200 font-medium">Quality Assured</div>
                <div className="text-gray-400 text-sm mt-1">Premium Standards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
