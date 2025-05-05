
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Disclaimer from '@/components/Disclaimer';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import ConsentPopup from '@/components/ConsentPopup';
import AnimatedBackground from '@/components/AnimatedBackground';
import { Helmet } from 'react-helmet';

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-dark relative overflow-hidden">
      <Helmet>
        <title>3D Print GPT - AI-Powered 3D Printing Assistant</title>
        <meta name="description" content="AI-powered assistant for 3D printing enthusiasts, engineers, and makers." />
      </Helmet>
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Disclaimer />
      <CTA />
      <Footer />
      <ConsentPopup />
    </div>
  );
};

export default Index;
