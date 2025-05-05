
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const ConsentPopup = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('3dPrintGptConsent');
    if (!hasConsented) {
      // Show popup after a slight delay for better UX
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('3dPrintGptConsent', 'true');
    setShowConsent(false);
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="glass-card max-w-lg w-full rounded-lg border border-cyber-purple/30 shadow-neon-purple p-6 animate-scale-in">
        <h3 className="text-xl font-bold mb-4 text-cyber-purple">Important Notice</h3>
        <p className="text-gray-300 mb-6">
          By using 3D Print GPT, you acknowledge and agree to our Terms of Service and Privacy Policy. 
          You understand that 3D Print GPT provides general guidance only and is not a substitute for professional engineering advice.
          AI WEB TOOLS LLC is not liable for any damages resulting from the use of this service.
        </p>
        <div className="flex justify-end">
          <Button
            onClick={handleAccept}
            className="bg-cyber-purple hover:bg-cyber-purple/90 text-white shadow-neon-purple"
          >
            I Agree
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConsentPopup;
