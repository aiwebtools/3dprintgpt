
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
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-dark relative overflow-hidden">
      <Helmet>
        <title>3D Print GPT - AI-Powered 3D Printing Assistant</title>
        <meta name="description" content="Transform your 3D printing experience with AI-powered guidance, troubleshooting, and optimization from 3D Print GPT." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="3D Print GPT - AI-Powered 3D Printing Assistant" />
        <meta property="og:description" content="Transform your 3D printing experience with AI-powered guidance, troubleshooting, and optimization from 3D Print GPT." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1600" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="3D Print GPT - AI-Powered 3D Printing Assistant" />
        <meta name="twitter:description" content="Transform your 3D printing experience with AI-powered guidance, troubleshooting, and optimization from 3D Print GPT." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1600" />
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
