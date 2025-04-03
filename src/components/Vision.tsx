
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCheck } from "lucide-react";

const Vision = () => {
  return (
      <>
    <section id="vision" className="py-20 pb-40 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-neural-pattern bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-velatrix-dark to-velatrix-darkBlue opacity-95"></div>
      
      {/* Glowing orbs */}
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-velatrix-purple/10 blur-3xl"></div>
      <div className="absolute top-20 right-10 w-60 h-60 rounded-full bg-velatrix-blue/10 blur-3xl"></div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto rounded-2xl shadow-2xl shadow-slate-950 border border-velatrix-blue/20 cyber-card-border-vision">
          <div className="animate-border px-10 p-4">

          <div
              className="flex relative w-full items-center justify-center mt-8 z-50">
            <Badge className="mb-8 bg-velatrix-blue/20 text-velatrix-blue hover:bg-velatrix-blue/30">Our Vision</Badge>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-10 px-24 leading-tight ">
            <span className="text-gradient text-center block mt-2">The future of content is a fairer, decentralized, creator-first media economy.</span>
          </h2>
          
          <div className="space-y-6 text-lg">
            <p className="text-velatrix-gray2 text-center">
              We are building infrastructure for the next era of digital content. Tools for creators to truly own their work, define their revenue models, and connect directly with audiences in an environment that incentivizes content quality over virality.
            </p>
            
            <div className="pl-4 border-l-2 border-velatrix-blue my-8 opacity-90 bg-white/20 rounded-[5px] py-4">
              <p className="italic text-xl">
                "At Velatrix, we believe in a digital ecosystem where creators have true autonomy, transparent compensation, and direct relationships with their audiences."
              </p>
            </div>
            
            <div className="space-y-4 mt-16 opacity-70 pl-8">
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
              <div className="flex items-start pb-6">
                <CheckCheck className="text-velatrix-blue mr-3 h-6 w-6 mt-0.5 flex-shrink-0" />
                <p>Content discovery based on quality rather than engagement metrics alone</p>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className='absolute top-0 left-1/2 transform -translate-x-1/2 z-40'>
          <img src="/src/assets/images/vision-top.svg" alt="Vision" className="w-full h-28 object-cover"/>
        </div>
      </div>

      <div className="mt-24 pt-10 text-center opacity-90">
        <h3 className="text-2xl font-bold mb-4">Owned by creators. Powered by fans. Enabled by Velatrix.</h3>
        <a
            href="https://medium.com/@watchit.app"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-white/80 hover:text-white hover:underline mt-2"
        >
          Read more about our vision
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </section>

  </>
  );
};

export default Vision;
