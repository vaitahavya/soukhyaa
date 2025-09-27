'use client';

import { Phone, Mail, Globe, MapPin } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'About Us', id: 'about' },
    { name: 'Products', id: 'products' },
    { name: 'Why Choose Us', id: 'why-choose' },
    { name: 'Industries', id: 'industries' },
    { name: 'Contact', id: 'contact' },
  ];

  const contactInfo = [
    { icon: Phone, text: '8885048090', link: 'tel:8885048090' },
    { icon: Mail, text: 'info@soukhyaa.com', link: 'mailto:info@soukhyaa.com' },
    { icon: Globe, text: 'soukhyaa.com', link: 'https://soukhyaa.com' },
    { icon: MapPin, text: 'India', link: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="relative h-12 w-40 mb-4">
              <Image
                src="/logos/w&b.png"
                alt="Soukhyaa Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Redefining hospital uniforms with comfort, professionalism, and hygiene. 
              Your trusted partner in healthcare apparel.
            </p>
            <div className="flex space-x-4">
              <div className="bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
                <Phone className="w-5 h-5" />
              </div>
              <div className="bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
                <Mail className="w-5 h-5" />
              </div>
              <div className="bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
                <Globe className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Our Products
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li>Doctor Coats</li>
              <li>Nursing Scrubs</li>
              <li>Lab Coats</li>
              <li>Support Staff Uniforms</li>
              <li>Customized Uniforms</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Info
            </h4>
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center">
                  <info.icon className="w-5 h-5 text-blue-400 mr-3" />
                  <a 
                    href={info.link}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {info.text}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Soukhyaa. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
