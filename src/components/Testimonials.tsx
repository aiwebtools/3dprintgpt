
import React from 'react';
import { cn } from '@/lib/utils';

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  color: 'purple' | 'blue' | 'orange';
}

const Testimonial: React.FC<TestimonialProps> = ({ content, author, role, color }) => {
  const colorStyles = {
    purple: 'border-cyber-purple/30 shadow-neon-purple',
    blue: 'border-cyber-blue/30 shadow-neon-blue',
    orange: 'border-cyber-orange/30 shadow-neon-orange',
  };

  const authorColors = {
    purple: 'text-cyber-purple',
    blue: 'text-cyber-blue',
    orange: 'text-cyber-orange',
  };

  return (
    <div className={cn(
      'glass-card rounded-lg p-6 transition-all duration-300 hover:scale-105',
      colorStyles[color]
    )}>
      <div className="mb-4">
        {/* Quote icon */}
        <svg width="45" height="36" className={cn('mb-2 opacity-50', authorColors[color])} viewBox="0 0 45 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 36H0V22.5C0 16.5 1.125 11.625 3.375 7.875C5.625 4.125 9.375 1.5 14.625 0L18 6.75C14.25 7.5 11.625 9 10.125 11.25C8.625 13.5 7.875 16.5 7.875 20.25H13.5V36ZM40.5 36H27V22.5C27 16.5 28.125 11.625 30.375 7.875C32.625 4.125 36.375 1.5 41.625 0L45 6.75C41.25 7.5 38.625 9 37.125 11.25C35.625 13.5 34.875 16.5 34.875 20.25H40.5V36Z" />
        </svg>
        <p className="text-gray-300">{content}</p>
      </div>
      <div>
        <p className={cn('font-bold', authorColors[color])}>{author}</p>
        <p className="text-gray-400 text-sm">{role}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      content: "3D Print GPT helped me solve a persistent stringing issue I'd been fighting with for weeks. The suggested slicer settings fixed my problem immediately and the prints look amazing now!",
      author: "Michael T.",
      role: "Hobbyist Maker",
      color: "purple" as const,
    },
    {
      content: "As someone new to 3D printing, this tool was invaluable. It guided me through setting up my first printer and helped me understand all the terminology and settings. Couldn't have started without it!",
      author: "Sarah L.",
      role: "3D Printing Beginner",
      color: "blue" as const,
    },
    {
      content: "I run a small business selling 3D printed products, and 3D Print GPT has become my go-to consultant. Its material recommendations and cost optimization advice have significantly improved my margins.",
      author: "David K.",
      role: "Small Business Owner",
      color: "orange" as const,
    },
    {
      content: "The support structure recommendations from 3D Print GPT saved me countless hours of post-processing. My complex models now print with minimal supports that are easy to remove.",
      author: "Jennifer R.",
      role: "Product Designer",
      color: "blue" as const,
    },
    {
      content: "I was skeptical at first, but the print optimization advice was spot-on! My print times decreased by 30% while maintaining excellent quality. This tool pays for itself quickly.",
      author: "Robert M.",
      role: "Engineering Student",
      color: "purple" as const,
    },
    {
      content: "Teaching 3D printing to students became much easier with this tool. It explains complex concepts clearly and helps troubleshoot when students encounter problems with their designs.",
      author: "Lisa J.",
      role: "Technology Teacher",
      color: "orange" as const,
    },
  ];

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyber-orange text-glow-orange">
            Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Hear from 3D printing enthusiasts who have transformed their projects with 3D Print GPT
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              role={testimonial.role}
              color={testimonial.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
