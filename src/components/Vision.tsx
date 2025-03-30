
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCheck } from "lucide-react";

const Vision = () => {
  return (
    <section id="vision" className="py-20 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-neural-pattern bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-velatrix-dark to-velatrix-darkBlue opacity-95"></div>
      
      {/* Glowing orbs */}
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-velatrix-purple/10 blur-3xl"></div>
      <div className="absolute top-20 right-10 w-60 h-60 rounded-full bg-velatrix-blue/10 blur-3xl"></div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-8 bg-velatrix-blue/20 text-velatrix-blue hover:bg-velatrix-blue/30">Our Vision</Badge>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-tight">
            The future of content is a fairer, decentralized, 
            <span className="text-gradient block mt-2">creator-first media economy.</span>
          </h2>
          
          <div className="space-y-6 text-gray-300 text-lg">
            <p>
              We are building infrastructure for the next era of digital content. Tools for creators to truly own their work, define their revenue models, and connect directly with audiences in an environment that incentivizes content quality over virality.
            </p>
            
            <div className="pl-4 border-l-2 border-velatrix-blue my-8">
              <p className="italic text-xl">
                "At Velatrix, we believe in a digital ecosystem where creators have true autonomy, transparent compensation, and direct relationships with their audiences."
              </p>
            </div>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-start">
                <CheckCheck className="text-velatrix-blue mr-3 h-6 w-6 mt-0.5 flex-shrink-0" />
                <p>Creator-owned intellectual property with blockchain verification and protection</p>
              </div>
              <div className="flex items-start">
                <CheckCheck className="text-velatrix-blue mr-3 h-6 w-6 mt-0.5 flex-shrink-0" />
                <p>Transparent revenue models without intermediaries taking excessive cuts</p>
              </div>
              <div className="flex items-start">
                <CheckCheck className="text-velatrix-blue mr-3 h-6 w-6 mt-0.5 flex-shrink-0" />
                <p>Direct creator-audience connections free from algorithmic manipulation</p>
              </div>
              <div className="flex items-start">
                <CheckCheck className="text-velatrix-blue mr-3 h-6 w-6 mt-0.5 flex-shrink-0" />
                <p>Content discovery based on quality rather than engagement metrics alone</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Owned by creators. Powered by fans. Enabled by Velatrix.</h3>
            <a 
              href="https://medium.com/@watchit.app" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center text-velatrix-blue hover:underline mt-2"
            >
              Read more about our vision
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
