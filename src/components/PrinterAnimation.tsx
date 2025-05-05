
import React from 'react';

const PrinterAnimation = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-full max-w-md mx-auto">
        {/* Simplified 3D printer representation with CSS */}
        <div className="relative bg-cyber-darker rounded-lg p-8 glass-card">
          {/* Printer frame */}
          <div className="w-full h-64 border-2 border-cyber-purple/50 rounded-lg relative overflow-hidden">
            {/* Printer head */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-16 h-8 bg-cyber-blue rounded-md shadow-neon-blue animate-pulse-glow">
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-6 bg-cyber-orange"></div>
            </div>
            
            {/* Build plate */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-3 bg-gray-600 rounded-md">
              {/* 3D object being printed */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-20 h-20">
                <div className="w-full h-full bg-gradient-to-tr from-cyber-purple to-cyber-blue opacity-70 rounded-md"></div>
                <div className="absolute inset-0 w-full h-full flex items-center justify-center text-white text-xs">3D MODEL</div>
              </div>
            </div>
            
            {/* Nozzle animation */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-px h-20 bg-cyber-orange-light opacity-50">
              <div className="absolute w-1 h-1 rounded-full bg-cyber-orange-light shadow-neon-orange animate-pulse top-full"></div>
            </div>
          </div>
          
          {/* Control panel */}
          <div className="mt-4 flex justify-between">
            <div className="flex-1 space-y-2">
              <div className="h-2 w-16 bg-cyber-purple/40 rounded-full"></div>
              <div className="h-2 w-24 bg-cyber-blue/40 rounded-full"></div>
              <div className="h-2 w-10 bg-cyber-orange/40 rounded-full"></div>
            </div>
            <div className="w-12 h-12 rounded-full border-2 border-cyber-purple flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-cyber-purple/30 animate-pulse"></div>
            </div>
          </div>
          
          {/* Glowing accents */}
          <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-cyber-purple animate-glow"></div>
          <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-cyber-blue animate-glow"></div>
          <div className="absolute top-1/2 left-2 w-2 h-2 rounded-full bg-cyber-orange animate-glow"></div>
        </div>
        
        {/* Glow effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-cyber-purple/20 via-cyber-blue/20 to-cyber-orange/20 rounded-xl blur-xl -z-10"></div>
      </div>
    </div>
  );
};

export default PrinterAnimation;
