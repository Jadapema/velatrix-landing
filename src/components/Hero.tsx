import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import {LandingLinks} from "@/lib/utils.ts";

const Hero = () => {
    const { handleLinkClick } = useSmoothScroll({ offset: 80 });
  return (
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background elements */}
        <div className="absolute inset-0 bg-neural-pattern bg-cover bg-center opacity-30"></div>
        <div
            className="absolute inset-0 bg-gradient-to-b from-velatrix-dark via-velatrix-dark/90 to-velatrix-darkBlue"></div>

        {/* Floating orbs for visual effect */}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-velatrix-blue/20 blur-3xl animate-float"></div>
        <div className="absolute top-3/3 right-1/4 w-40 h-40 rounded-full bg-velatrix-blue/20 blur-3xl animate-float"
             style={{animationDelay: '2s'}}></div>

        {/* Hero content */}
          <div className="container relative z-10 px-4 md:px-6 text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
                  <span className="text-gradient">Web3 Technology for</span>
                  <br />
                  <span className="text-gradient">the Next-Gen Creative IP</span>
              </h1>

              <p className="mt-6 text-lg md:text-xl lg:text-2xl text-velatrix-gray2 max-w-4xl mx-auto">
                  At Velatrix, we are architecting the technological backbone of the next digital content era, unlocking new possibilities for creators, audiences, and distributors, setting a standard for innovation in the industry.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                  <Button size="lg"
                          className="bg-gradient-to-r from-velatrix-blue to-velatrix-blue hover:opacity-70 opacity-90 text-black font-medium">
                      <a href={LandingLinks.watchitMovie.link} target="_blank" rel="noreferrer"
                         className="flex items-center">
                          Explore Watchit
                      </a>
                  </Button>
                  <Button variant="outline" size="lg"
                          className="border-velatrix-blue text-white opacity-90 hover:bg-velatrix-blue/10">
                      <a href={LandingLinks.github.link} target="_blank" rel="noreferrer" className="flex items-center">
                          View Protocol
                      </a>
                  </Button>
              </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
              <a href="#products" onClick={(e) => handleLinkClick(e, 'products')} aria-label="Scroll down">
                  <ArrowRight className="h-8 w-8 rotate-90 text-velatrix-blue"/>
              </a>
        </div>
      </div>
  );
};

export default Hero;
