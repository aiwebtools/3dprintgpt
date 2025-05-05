
import React from 'react';
import { Button } from '@/components/ui/button';
import PrinterAnimation from './PrinterAnimation';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center cyberpunk-grid pt-20">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:40px_40px] opacity-30 z-0"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-glow">
              <span className="text-white">Transform Your Ideas Into</span> 
              <span className="block text-cyber-purple">3D Printable Reality</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-xl">
              The ultimate AI assistant for 3D printing enthusiasts, engineers, and makers. 
              Convert concepts to printable models with expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <Button 
                asChild
                className="bg-cyber-purple hover:bg-cyber-purple/90 text-white shadow-neon-purple animate-pulse-glow text-lg px-8 py-6"
              >
                <a 
                  href="https://chatgpt.com/g/g-681904e586908191a5c9c936a02c1c59-3d-print-gpt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Start Creating Now
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="border-cyber-blue text-cyber-blue hover:text-cyber-blue-light hover:bg-cyber-blue/10 shadow-neon-blue text-lg px-8 py-6"
              >
                <a href="#how-it-works">Learn More</a>
              </Button>
            </div>
          </div>
          <div className="flex-1 md:min-h-[500px] relative animate-float">
            <div className="relative">
              <img 
                src="https://ideogram.ai/assets/image/lossless/response/hrCbx9msRiOfp5SaeLVyHA" 
                alt="3D Printing Concept Art" 
                className="rounded-lg shadow-lg border border-cyber-purple/30 max-w-full h-auto"
                style={{ maxHeight: '600px', objectFit: 'contain' }}
              />
              <div className="absolute inset-0 rounded-lg pointer-events-none border border-cyber-purple/50 shadow-[0_0_15px_rgba(155,135,245,0.3)]"></div>
              <PrinterAnimation />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
