
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-cyber-dark/80 backdrop-blur-md shadow-neon-purple' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Logo />
        
        {/* Desktop menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <Button 
            asChild
            variant="ghost" 
            className="text-white hover:bg-cyber-purple/10 hover:text-cyber-purple transition-all duration-300 rounded-full px-5"
          >
            <a 
              href="https://chatgpt.com/g/g-681904e586908191a5c9c936a02c1c59-3d-print-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              USE 3D Print GPT
            </a>
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('faq')} 
            className="text-white hover:bg-cyber-purple/10 hover:text-cyber-purple transition-all duration-300 rounded-full px-5"
          >
            FAQ
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('disclaimer')} 
            className="text-white hover:bg-cyber-purple/10 hover:text-cyber-purple transition-all duration-300 rounded-full px-5"
          >
            Disclaimer
          </Button>
          <Button 
            asChild
            variant="ghost" 
            className="text-white hover:bg-cyber-purple/10 hover:text-cyber-purple transition-all duration-300 rounded-full px-5"
          >
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              More AI Tools
            </a>
          </Button>
          <Button 
            asChild
            className="bg-cyber-purple hover:bg-cyber-purple/90 text-white shadow-neon-purple ml-2 rounded-full px-6 py-5 relative overflow-hidden group"
          >
            <a 
              href="https://chatgpt.com/g/g-681904e586908191a5c9c936a02c1c59-3d-print-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyber-purple via-cyber-blue to-cyber-purple bg-[length:200%_100%] opacity-0 group-hover:opacity-30 transition-opacity duration-500 animate-[gradient_3s_ease-in-out_infinite]"></span>
              Get Started
            </a>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white p-2 bg-cyber-purple/10 rounded-full hover:bg-cyber-purple/20 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={cn(
          "md:hidden overflow-hidden transition-all duration-200 ease-out",
          isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-cyber-dark/95 backdrop-blur-md border-t border-cyber-purple/20">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <Button 
              asChild
              variant="ghost" 
              className="text-white hover:bg-cyber-purple/10 hover:text-cyber-purple transition-colors justify-start rounded-lg"
            >
              <a 
                href="https://chatgpt.com/g/g-681904e586908191a5c9c936a02c1c59-3d-print-gpt" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                USE 3D Print GPT
              </a>
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('faq')} 
              className="text-white hover:bg-cyber-purple/10 hover:text-cyber-purple transition-colors justify-start rounded-lg"
            >
              FAQ
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('disclaimer')} 
              className="text-white hover:bg-cyber-purple/10 hover:text-cyber-purple transition-colors justify-start rounded-lg"
            >
              Disclaimer
            </Button>
            <Button 
              asChild
              variant="ghost" 
              className="text-white hover:bg-cyber-purple/10 hover:text-cyber-purple transition-colors justify-start rounded-lg"
            >
              <a 
                href="https://aiwebtools.lovable.app/?via=aiwebtools" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                More AI Tools
              </a>
            </Button>
            <Button 
              asChild
              className="bg-cyber-purple hover:bg-cyber-purple/90 text-white shadow-neon-purple w-full mt-2 rounded-lg"
            >
              <a 
                href="https://chatgpt.com/g/g-681904e586908191a5c9c936a02c1c59-3d-print-gpt" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            </Button>
          </div>
        </div>
      </div>
  );
};

export default Navbar;
