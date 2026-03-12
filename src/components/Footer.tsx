import React from 'react';
import { cn } from '@/lib/utils';
import Logo from './Logo';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-cyber-darker relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:40px_40px] opacity-10 z-0"></div>
      
      {/* Divine floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-2 h-2 bg-cyber-purple rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-cyber-blue rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-cyber-orange rounded-full animate-bounce opacity-50"></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-cyber-purple rounded-full animate-pulse opacity-70"></div>
        <div className="absolute top-1/3 left-3/4 w-2 h-2 bg-cyber-blue rounded-full animate-ping opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo size="lg" />
            <p className="text-gray-400 mt-4">
              AI-powered 3D printing assistant for experts and beginners alike.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://chatgpt.com/g/g-681904e586908191a5c9c936a02c1c59-3d-print-gpt" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-cyber-purple transition-colors"
                >
                  USE 3D Print GPT
                </a>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('faq')} 
                  className="text-gray-400 hover:text-cyber-purple transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('disclaimer')} 
                  className="text-gray-400 hover:text-cyber-purple transition-colors"
                >
                  Disclaimer
                </button>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/?via=aiwebtools" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-cyber-purple transition-colors"
                >
                  More AI Tools
                </a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-cyber-purple transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/disclaimers" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-cyber-purple transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="tel:4758008096" 
                  className="text-gray-400 hover:text-cyber-purple transition-colors"
                >
                  (475) 800-8096
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="text-gray-400 hover:text-cyber-purple transition-colors"
                >
                  Contact@ai-webtools.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <a 
                href="https://www.aiwebtools.ai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block px-6 py-2 bg-cyber-purple hover:bg-cyber-purple/90 text-white rounded-full shadow-neon-purple transition-all duration-300"
              >
                More AI Tools
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-cyber-purple transition-colors"
            >
              © 2025 AI WEB TOOLS LLC All rights reserved.
            </a>
          </p>
          <div className="flex space-x-4">
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-cyber-purple transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
