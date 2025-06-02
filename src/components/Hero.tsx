
import React from 'react';
import { Button } from '@/components/ui/button';
import PrinterAnimation from './PrinterAnimation';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center cyberpunk-grid pt-20 divine-container">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:60px_60px] opacity-20 z-0"></div>
      
      {/* Divine floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-cyber-purple rounded-full animate-ethereal-float opacity-60 shadow-divine"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-cyber-blue rounded-full animate-ethereal-float opacity-50 shadow-divine" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-5 h-5 bg-cyber-orange rounded-full animate-ethereal-float opacity-40 shadow-divine" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-60 right-1/3 w-2 h-2 bg-cyber-gold rounded-full animate-ethereal-float opacity-70 shadow-divine" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 left-3/4 w-3 h-3 bg-cyber-silver rounded-full animate-ethereal-float opacity-50 shadow-divine" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white block mb-2">Transform Your Ideas Into</span> 
              <span className="block text-cyber-purple bg-gradient-to-r from-cyber-purple via-cyber-blue to-cyber-orange bg-clip-text text-transparent animate-divine-shimmer bg-[length:200%_100%]">3D Printable Reality</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              The ultimate AI assistant for 3D printing enthusiasts, engineers, and makers. 
              Convert concepts to printable models with expert guidance.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
              <Button 
                asChild
                className="bg-gradient-to-r from-cyber-purple via-cyber-blue to-cyber-purple hover:from-cyber-purple-light hover:via-cyber-blue-light hover:to-cyber-purple-light text-white shadow-divine animate-divine-pulse text-lg px-10 py-7 rounded-full font-semibold transition-all duration-500 hover-divine bg-[length:200%_100%] hover:bg-[length:100%_100%]"
              >
                <a 
                  href="https://chatgpt.com/g/g-681904e586908191a5c9c936a02c1c59-3d-print-gpt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  ✨ Start Creating Now ✨
                </a>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                className="border-2 border-cyber-blue text-cyber-blue hover:text-white hover:bg-gradient-to-r hover:from-cyber-blue/20 hover:to-cyber-purple/20 shadow-ethereal text-lg px-10 py-7 rounded-full font-semibold transition-all duration-500 hover-divine"
              >
                <a href="#how-it-works">Learn More</a>
              </Button>
            </div>
          </div>
          
          <div className="flex-1 md:min-h-[600px] relative animate-ethereal-float">
            <div className="absolute -inset-8 bg-gradient-to-r from-cyber-purple/20 via-cyber-blue/20 to-cyber-orange/20 rounded-3xl blur-2xl opacity-60 animate-cosmic-spin"></div>
            <PrinterAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
