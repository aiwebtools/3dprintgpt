
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
      <h1 className={cn('font-bold text-cyber-purple text-glow', sizes[size])}>
        3D Print GPT
      </h1>
      <div className="text-xs text-gray-400">
        Presented by <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-purple transition-colors">AiWebTools.AI</a>
      </div>
    </div>
  );
};

export default Logo;
