
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCheck } from "lucide-react";
import {LandingLinks} from "@/lib/utils.ts";

const Vision = () => {
  return (
      <>
    <section id="vision" className="py-20 pb-40 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-neural-pattern bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-velatrix-dark to-velatrix-darkBlue opacity-95"></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute top-32 right-10 w-60 h-60 rounded-full bg-white/10 blur-3xl"></div>

      <div id="parent" className="container z-10 mx-auto px-0 md:px-8 overflow-hidden">
        <div className="max-w-5xl mx-auto rounded-2xl relative">
          <div className="p-4">
            <div className="flex relative w-full items-start justify-start mt-8 z-20">
              <Badge className="mb-8 bg-velatrix-orange/50 text-velatrix-blue hover:bg-velatrix-orange/30 cursor-default">Our Vision</Badge>
            </div>

            <h2 className="text-xl md:text-5xl font-bold mb-10 leading-tight w-full">
              <span className="text-gradient block w-full mt-2">The future of content is a fairer, decentralized, creator-first media economy</span>
            </h2>

            <div className="space-y-6 text-lg">
              <p className="text-velatrix-gray2">
                We are building infrastructure for the next era of digital content. Tools for creators to truly own their work, define their revenue models, and connect directly with audiences. An ecosystem where governance, economic freedom, and market dynamics transparently shape content quality and value distribution.
              </p>

              <div className="pl-4 border-l-2 border-velatrix-orange my-8 py-4">
                <p className="italic text-xl">
                  "At Velatrix, we believe it’s time for decentralized ecosystems to redefine the incentives that shape today’s online economy."
                </p>
              </div>

              <div className="space-y-4 mt-16">
                <div className="flex items-center">
                  <CheckCheck className="text-velatrix-orange mr-3 h-6 w-6 mt-0.5 flex-shrink-0" />
                  <p className="opacity-70">Creator-owned intellectual property with blockchain verification and protection</p>
                </div>
                <div className="flex items-start">
                  <CheckCheck className="text-velatrix-orange mr-3 h-6 w-6 mt-0.5 flex-shrink-0" />
                  <p className="opacity-70">Transparent revenue models without intermediaries taking excessive cuts</p>
                </div>
                <div className="flex items-start">
                  <CheckCheck className="text-velatrix-orange mr-3 h-6 w-6 mt-0.5 flex-shrink-0" />
                  <p className="opacity-70">Direct creator-audience connections free from algorithmic manipulation</p>
                </div>
                <div className="flex items-start pb-6">
                  <CheckCheck className="text-velatrix-orange mr-3 h-6 w-6 mt-0.5 flex-shrink-0" />
                  <p className="opacity-70">Content discovery based on quality rather than engagement metrics alone</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-18 text-center opacity-90">
        <h3 className="text-2xl font-bold mb-4 px-4 md:px-0 text-velatrix-orange">Owned by creators. Powered by fans. Enabled by Velatrix.</h3>
        <a
            href={LandingLinks.medium.link}
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
