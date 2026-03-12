
import React from 'react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-purple/10 to-cyber-blue/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Ready to </span>
            <span className="text-cyber-purple text-glow">Revolutionize</span>
            <span className="text-white"> Your 3D Printing?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join thousands of makers who are transforming their ideas into perfect prints with AI-powered guidance.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              asChild
              className="bg-cyber-purple hover:bg-cyber-purple/90 text-white shadow-neon-purple animate-pulse-glow text-lg px-8 py-6 w-full sm:w-auto"
            >
              <a 
                href="https://chatgpt.com/g/g-681904e586908191a5c9c936a02c1c59-3d-print-gpt" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Start Using 3D Print GPT
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              className="border-cyber-blue text-cyber-blue hover:text-cyber-blue-light hover:bg-cyber-blue/10 shadow-neon-blue text-lg px-8 py-6 w-full sm:w-auto"
            >
              <a href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer">
                Explore More AI Tools
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
