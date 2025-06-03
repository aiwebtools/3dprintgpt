
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "3D Print GPT",
    "description": "AI-powered 3D printing assistant that helps transform ideas into printable models with expert guidance, troubleshooting, and optimization.",
    "url": "https://3dprintgpt.lovable.app",
    "applicationCategory": "DesignApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "creator": {
      "@type": "Organization",
      "name": "AI WEB TOOLS LLC",
      "url": "https://www.aiwebtools.ai"
    },
    "keywords": "3D printing, AI assistant, 3D modeling, additive manufacturing, print optimization, troubleshooting, CAD, STL files",
    "featureList": [
      "AI-powered 3D printing guidance",
      "Print troubleshooting assistance", 
      "Model optimization recommendations",
      "Material selection advice",
      "Printer settings optimization"
    ]
  };

  return (
    <div className="min-h-screen bg-cyber-dark relative overflow-hidden">
      <Helmet>
        <title>3D Print GPT - AI-Powered 3D Printing Assistant | Transform Ideas to Reality</title>
        <meta name="description" content="Transform your 3D printing experience with AI-powered guidance. Get expert help with troubleshooting, optimization, design improvements, and printing parameters from 3D Print GPT." />
        <meta name="keywords" content="3D printing AI, 3D print assistant, additive manufacturing, 3D modeling help, print troubleshooting, STL optimization, FDM printing, SLA printing, 3D printer settings" />
        <meta name="author" content="AI WEB TOOLS LLC" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://3dprintgpt.lovable.app" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="3D Print GPT" />
        <meta property="og:title" content="3D Print GPT - AI-Powered 3D Printing Assistant" />
        <meta property="og:description" content="Transform your 3D printing experience with AI-powered guidance, troubleshooting, and optimization from 3D Print GPT." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1600" />
        <meta property="og:image:alt" content="3D Print GPT - AI assistant for 3D printing optimization and troubleshooting" />
        <meta property="og:url" content="https://3dprintgpt.lovable.app" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="3D Print GPT - AI-Powered 3D Printing Assistant" />
        <meta name="twitter:description" content="Transform your 3D printing experience with AI-powered guidance, troubleshooting, and optimization from 3D Print GPT." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1600" />
        <meta name="twitter:image:alt" content="3D Print GPT - AI assistant for 3D printing" />
        
        {/* Additional SEO tags */}
        <meta name="theme-color" content="#9b87f5" />
        <meta name="msapplication-TileColor" content="#9b87f5" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <Disclaimer />
        <CTA />
      </main>
      <Footer />
      <ConsentPopup />
    </div>
  );
};

export default Index;
