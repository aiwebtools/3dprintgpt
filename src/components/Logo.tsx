
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className, size = 'md' }) => {
  const sizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <div className={cn('flex flex-col items-start', className)}>
      <h1 className={cn('font-bold text-glow relative', sizes[size])}>
        <span className="text-cyber-purple">3D Print</span>{' '}
        <span className="text-white">GPT</span>
        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyber-purple via-cyber-blue to-cyber-purple rounded-full"></span>
      </h1>
      <div className="text-xs text-gray-400 mt-1">
        Presented by <a href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-purple transition-colors">AiWebTools.AI</a>
      </div>
    </div>
  );
};

export default Logo;
