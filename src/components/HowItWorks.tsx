
import React from 'react';
import { cn } from '@/lib/utils';

interface StepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

const Step: React.FC<StepProps> = ({ number, title, description, isLast = false }) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-6">
        <div className="w-12 h-12 rounded-full bg-cyber-purple/20 border border-cyber-purple flex items-center justify-center text-cyber-purple font-bold text-lg shadow-neon-purple">
          {number}
        </div>
        {!isLast && <div className="h-full w-0.5 bg-gradient-to-b from-cyber-purple to-transparent my-2"></div>}
      </div>
      <div className="pb-8">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Access 3D Print GPT",
      description: "Click on the 'Use 3D Print GPT' button to open the AI assistant directly in ChatGPT. No additional setup or installations required."
    },
    {
      number: 2,
      title: "Describe Your Project",
      description: "Tell the AI what you want to create, what problems you're facing, or what advice you need for your 3D printing project."
    },
    {
      number: 3,
      title: "Get Expert Guidance",
      description: "Receive detailed instructions, optimized parameters, design improvements, troubleshooting advice, and more based on your specific needs."
    },
    {
      number: 4,
      title: "Implement Recommendations",
      description: "Apply the AI's suggestions to your 3D modeling software, slicer settings, or printer setup to achieve optimal results."
    },
    {
      number: 5,
      title: "Print Your Successful Model",
      description: "Enjoy a successful 3D print with fewer failed attempts, optimized material usage, and professional-quality results."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 relative">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:40px_40px] opacity-20 z-0"></div>
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyber-blue text-glow-blue">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transform your 3D printing experience in just a few simple steps
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <Step
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://chatgpt.com/g/g-681904e586908191a5c9c936a02c1c59-3d-print-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-cyber-blue hover:bg-cyber-blue/90 text-white rounded-lg shadow-neon-blue transition-all duration-300 text-lg font-medium"
          >
            Start Your First Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
