
import React from 'react';

const Disclaimer = () => {
  return (
    <section id="disclaimer" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyber-blue text-glow-blue">
            Legal Disclaimer
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Important information about the use of 3D Print GPT
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto glass-card rounded-lg p-8 border border-cyber-blue/30">
          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-bold mb-4 text-cyber-blue">General Disclaimer</h3>
            <p className="mb-4">
              3D Print GPT is an AI assistant designed to provide suggestions and information about 3D printing. While we strive for accuracy, all advice, recommendations, and information provided are for general informational purposes only. AI WEB TOOLS LLC makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics provided.
            </p>
            
            <h3 className="text-xl font-bold mb-4 text-cyber-blue">No Professional Advice</h3>
            <p className="mb-4">
              The information provided by 3D Print GPT should not be considered professional engineering, design, or manufacturing advice. Users should consult with qualified professionals for specific advice tailored to their situation before taking any action based on the information provided.
            </p>
            
            <h3 className="text-xl font-bold mb-4 text-cyber-blue">Safety Considerations</h3>
            <p className="mb-4">
              3D printing involves equipment that operates at high temperatures and with moving parts that can cause injury. Users are solely responsible for ensuring they follow appropriate safety procedures and manufacturer guidelines when operating 3D printers and handling materials. AI WEB TOOLS LLC is not liable for any injuries, damages, or losses resulting from the use of 3D printing equipment or materials.
            </p>
            
            <h3 className="text-xl font-bold mb-4 text-cyber-blue">Intellectual Property</h3>
            <p className="mb-4">
              Users are responsible for ensuring they have the appropriate rights to create, modify, reproduce, or distribute any 3D models or designs. 3D Print GPT does not check for potential intellectual property infringement, and AI WEB TOOLS LLC is not liable for any copyright, trademark, patent, or other intellectual property violations that may result from using the service.
            </p>
            
            <h3 className="text-xl font-bold mb-4 text-cyber-blue">Third-Party References</h3>
            <p className="mb-4">
              3D Print GPT may refer to specific 3D printing products, software, or services. These references do not constitute endorsement, recommendation, or guarantee of quality. AI WEB TOOLS LLC is not affiliated with the manufacturers or providers of these products or services unless explicitly stated.
            </p>
            
            <h3 className="text-xl font-bold mb-4 text-cyber-blue">Limitation of Liability</h3>
            <p className="mb-4">
              To the maximum extent permitted by law, AI WEB TOOLS LLC shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with the use or inability to use 3D Print GPT, even if advised of the possibility of such damages.
            </p>
            
            <h3 className="text-xl font-bold mb-4 text-cyber-blue">Accuracy of Information</h3>
            <p className="mb-4">
              3D Print GPT uses AI technology to generate responses based on its training data. While we strive for accuracy, the information provided may not always be complete, accurate, or up-to-date. Users should verify critical information from authoritative sources before making decisions based on 3D Print GPT's outputs.
            </p>
            
            <h3 className="text-xl font-bold mb-4 text-cyber-blue">Terms of Service & Privacy Policy</h3>
            <p className="mb-4">
              Use of 3D Print GPT is subject to the <a href="https://aiwebtools.ai/terms-of-services" target="_blank" rel="noopener noreferrer" className="text-cyber-blue hover:text-cyber-blue-light underline">Terms of Service</a> and <a href="https://openai.com/policies/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-cyber-blue hover:text-cyber-blue-light underline">Privacy Policy</a>. By using this service, you acknowledge and agree to these terms.
            </p>
            
            <p className="mt-8 text-sm text-gray-400">
              Last updated: May 5, 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
