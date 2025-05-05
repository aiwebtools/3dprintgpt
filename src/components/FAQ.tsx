
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What exactly is 3D Print GPT?",
      answer: "3D Print GPT is an AI-powered assistant specifically designed for 3D printing enthusiasts, engineers, and makers. It provides expert guidance on model design, printer setup, material selection, troubleshooting, and optimization of print parameters to help you achieve successful 3D prints."
    },
    {
      question: "Do I need to have a 3D printer to use this tool?",
      answer: "No, you don't need to own a 3D printer to use 3D Print GPT. It's valuable for anyone interested in learning about 3D printing, designing models, or planning future projects. It can help you understand what printer might be best for your needs if you're considering a purchase."
    },
    {
      question: "Does 3D Print GPT create 3D models for me?",
      answer: "3D Print GPT doesn't directly create 3D models. Instead, it provides detailed guidance on how to create models using popular 3D modeling software, suggests improvements to existing designs, and helps optimize models for successful printing. It can provide step-by-step instructions and technical advice for your specific model needs."
    },
    {
      question: "Which 3D printers does 3D Print GPT support?",
      answer: "3D Print GPT has knowledge about a wide range of consumer and professional 3D printers, including FDM, SLA, SLS, and other technologies. It can provide specific advice for popular brands and models, but its principles apply to virtually any 3D printer on the market."
    },
    {
      question: "Is 3D Print GPT suitable for beginners?",
      answer: "Absolutely! 3D Print GPT is designed to be helpful for users of all skill levels. For beginners, it explains terminology, offers basic principles, and provides straightforward guidance. For advanced users, it can dive deep into technical optimizations and complex problem-solving."
    },
    {
      question: "How accurate is the advice provided by 3D Print GPT?",
      answer: "3D Print GPT provides advice based on established 3D printing best practices and technical knowledge. While it offers high-quality guidance, it's always recommended to verify critical settings with your specific printer's documentation, especially for specialized equipment or materials."
    },
    {
      question: "Can 3D Print GPT help me troubleshoot printing problems?",
      answer: "Yes! Troubleshooting is one of 3D Print GPT's strengths. It can help diagnose and solve common issues like stringing, warping, layer adhesion problems, dimensional inaccuracy, and many other typical 3D printing challenges."
    },
    {
      question: "Do I need a ChatGPT Plus subscription to use 3D Print GPT?",
      answer: "Yes, 3D Print GPT is a specialized GPT that requires a ChatGPT Plus subscription to access. This subscription gives you access not only to 3D Print GPT but also to many other specialized AI tools in the GPT Store."
    }
  ];

  return (
    <section id="faq" className="py-20 relative">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:40px_40px] opacity-20 z-0"></div>
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyber-purple text-glow">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about 3D Print GPT
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-cyber-purple/30 rounded-lg bg-cyber-darker/50 backdrop-blur-sm"
              >
                <AccordionTrigger className="px-6 text-left text-white hover:text-cyber-purple">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
