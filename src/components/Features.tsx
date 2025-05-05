
import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: 'purple' | 'blue' | 'orange';
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, color }) => {
  const colorStyles = {
    purple: 'border-cyber-purple/30 shadow-neon-purple',
    blue: 'border-cyber-blue/30 shadow-neon-blue',
    orange: 'border-cyber-orange/30 shadow-neon-orange',
  };

  const titleColors = {
    purple: 'text-cyber-purple text-glow',
    blue: 'text-cyber-blue text-glow-blue',
    orange: 'text-cyber-orange text-glow-orange',
  };

  const iconColors = {
    purple: 'bg-cyber-purple/10 text-cyber-purple',
    blue: 'bg-cyber-blue/10 text-cyber-blue',
    orange: 'bg-cyber-orange/10 text-cyber-orange',
  };

  return (
    <div className={cn(
      'glass-card rounded-lg p-6 transition-all duration-300 hover:scale-105',
      colorStyles[color]
    )}>
      <div className={cn(
        'w-12 h-12 rounded-lg flex items-center justify-center mb-4',
        iconColors[color]
      )}>
        {icon}
      </div>
      <h3 className={cn('text-xl font-bold mb-3', titleColors[color])}>
        {title}
      </h3>
      <p className="text-gray-300">
        {description}
      </p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      title: 'Expert Design Guidance',
      description: 'Get professional advice on optimizing your 3D models for successful printing, including wall thickness, support structures, and material selection.',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
      color: 'purple' as const,
    },
    {
      title: 'Model Troubleshooting',
      description: 'Solve common 3D printing issues like warping, stringing, layer separation, and dimensional accuracy with AI-powered solutions.',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
      color: 'blue' as const,
    },
    {
      title: 'Slicing Parameter Optimization',
      description: 'Get recommended print settings for your specific printer, material, and model requirements to achieve the best possible print quality.',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
      color: 'orange' as const,
    },
    {
      title: 'Material Selection Guide',
      description: 'Learn which materials are best suited for your project based on durability, appearance, cost, and specific application requirements.',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
      color: 'purple' as const,
    },
    {
      title: 'Cost Estimation',
      description: 'Calculate material usage, print time, and overall production costs before starting your print to ensure efficiency and budget management.',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      color: 'blue' as const,
    },
    {
      title: 'Custom Model Generation',
      description: 'Transform your concepts into printable 3D models with detailed instructions for creating STL files ready for slicing and printing.',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>,
      color: 'orange' as const,
    },
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyber-purple text-glow">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            3D Print GPT combines expert knowledge with AI capabilities to revolutionize your 3D printing workflow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              color={feature.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
