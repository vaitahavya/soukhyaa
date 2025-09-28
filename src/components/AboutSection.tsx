import { Heart, Shield, Award, Users } from 'lucide-react';
import Image from 'next/image';

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We understand the demanding nature of healthcare work and design our uniforms with care and empathy.'
    },
    {
      icon: Shield,
      title: 'Quality',
      description: 'Every piece is crafted with premium materials and rigorous quality standards.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our service and product delivery.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We build lasting relationships with healthcare institutions and professionals.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-r from-cyan-100/40 to-blue-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-indigo-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-slate-600 to-blue-600 text-white rounded-full px-6 py-2 mb-8">
            <span className="text-sm font-semibold tracking-wide">OUR STORY</span>
          </div>
          
          {/* Logo */}
          <div className="relative h-20 w-60 mx-auto mb-8">
            <Image
              src="/logos/Soukhyaa logo.png"
              alt="Soukhyaa Logo - Premium Hospital Uniforms Manufacturer in India"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-8">
            About Soukhyaa
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div>
            <h3 className="text-3xl font-semibold text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Soukhyaa, we believe comfort, professionalism, and hygiene should go hand in hand. 
              With years of experience, we have become a trusted partner for hospitals, clinics, 
              and individual healthcare providers.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our commitment extends beyond just providing uniforms. We understand the critical 
              role healthcare professionals play in society, and we&apos;re dedicated to supporting 
              them with apparel that enhances their performance and confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold">
                Trusted by 500+ Hospitals
              </div>
              <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-xl font-semibold">
                ISO Certified Quality
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-10 text-white relative overflow-hidden">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/20 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/20 rounded-full translate-y-16 -translate-x-16"></div>
              
              <div className="relative z-10 text-center">
                <div className="text-7xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">10+</div>
                <div className="text-2xl mb-8 text-cyan-200">Years of Excellence</div>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                    <div className="text-3xl font-bold text-cyan-400">50K+</div>
                    <div className="text-sm text-gray-300">Uniforms Delivered</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                    <div className="text-3xl font-bold text-emerald-400">99%</div>
                    <div className="text-sm text-gray-300">Customer Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/20">
                <div className="bg-gradient-to-br from-cyan-100 to-blue-100 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:from-cyan-500 group-hover:to-blue-600 transition-all duration-300 shadow-lg">
                  <value.icon className="w-10 h-10 text-cyan-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lifestyle Image Gallery */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Healthcare Professionals in Action
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how our uniforms enhance the daily work of healthcare professionals across different departments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Lifestyle Images */}
            <div className="group">
              <div className="relative rounded-2xl h-64 overflow-hidden">
                <Image
                  src="/images/doctor uniform 2.jpg"
                  alt="Doctor in professional uniform providing consultation"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-lg font-semibold text-white">Doctor Consultation</div>
                  <div className="text-blue-100 text-sm">Professional Excellence</div>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="relative rounded-2xl h-64 overflow-hidden">
                <Image
                  src="/images/Nurses uniform.jpg"
                  alt="Nurse in uniform providing patient care"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-lg font-semibold text-white">Nursing Care</div>
                  <div className="text-green-100 text-sm">Comfort & Mobility</div>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="relative rounded-2xl h-64 overflow-hidden">
                <Image
                  src="/images/lab coat 2.jpg"
                  alt="Lab technician in protective lab coat"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-lg font-semibold text-white">Lab Work</div>
                  <div className="text-purple-100 text-sm">Precision & Safety</div>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="relative rounded-2xl h-64 overflow-hidden">
                <Image
                  src="/images/patient room bedding.jpg"
                  alt="Hospital patient room with premium bedding"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-lg font-semibold text-white">Patient Comfort</div>
                  <div className="text-orange-100 text-sm">Premium Bedding</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
