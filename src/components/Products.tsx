import React from 'react';
import { GitHubLogoIcon, VideoIcon } from "@radix-ui/react-icons";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import XIcon from '@/components/icons/XIcon';
import MediumIcon from '@/components/icons/MediumIcon';
import {LandingLinks} from "@/lib/utils.ts";
import synapse from '@/assets/images/synapse.png';
import watchit from '@/assets/images/watchit.png';

const Products = () => {
  return (
      <section id="products" className="py-40 bg-velatrix-darkBlue relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-velatrix-darkBlue to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-velatrix-dark to-transparent"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Our Ecosystem</span>
            </h2>
            <p className="mt-6 text-lg md:text-xl lg:text-2xl text-velatrix-gray2 max-w-5xl mx-auto">
              Velatrix orchestrates a modular, secure, and scalable ecosystem of infrastructure, protocols, standards, and applications, providing the foundation for creators, developers, distributors, and communities to build, govern, and exchange value around creative intellectual property
            </p>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto group">
          {/* Synapse Card */}
          <Card className="cyber-card cyber-card-border-animated-alt overflow-hidden group-hover:animate-border group-hover:animate-border-reverse">
            <CardHeader className="pb-4 flex align-middle justify-center text-center">
              <div className="flex items-center justify-between">
                <img src={synapse} alt="Synapse logo" className="h-10"/>
                <span className="text-xs text-velatrix-blue px-2 py-1 rounded-full border border-velatrix-blue opacity-70">
                  Blockchain Protocol
                </span>
              </div>
              <CardTitle className="text-3xl mt-4">Synapse</CardTitle>
              <CardDescription className="text-gray-400">
                Foundational blockchain layer
              </CardDescription>
            </CardHeader>
            <Separator className="bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <CardContent className="pt-6">
              <p className="text-gray-300">
                Blockchain protocol designed as the foundational layer to enable decentralized, scalable, and secure IP management.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between mt-auto">
              <Button variant="outline" size="sm" className="border-velatrix-blue text-velatrix-blue bg-transparent hover:bg-velatrix-blue/10">
                <a href={LandingLinks.github.link} target="_blank" rel="noreferrer" className="flex items-center">
                  <GitHubLogoIcon className="mr-2 h-4 w-4" />
                  Protocol Repository
                </a>
              </Button>

              <div className="flex space-x-4 items-center">
                <a href={LandingLinks.xSynapse.link} target="_blank" rel="noreferrer" aria-label="X" className="text-white opacity-60 group/x">
                  <XIcon className="w-[20px] h-[20px] group-hover/x:text-gray-400" />
                </a>
              </div>
            </CardFooter>
          </Card>
          
          {/* Watchit Card */}
          <Card className="cyber-card cyber-card-border-animated animate-border overflow-hidden ">
            <CardHeader className="pb-4 flex align-middle justify-center text-center">
              <div className="flex items-center justify-between">
                <img src={watchit} alt="watchit logo" className="h-10"/>
                <span className="text-xs text-velatrix-blue px-2 py-1 rounded-full border border-velatrix-blue opacity-70">
                  Video Platform
                </span>
              </div>
              <CardTitle className="text-3xl mt-4">Watchit</CardTitle>
              <CardDescription className="text-gray-400">
                Flagship creator platform
              </CardDescription>
            </CardHeader>
            <Separator className="bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <CardContent className="pt-6">
              <p className="text-gray-300">
                Our flagship video platform, where creators control their IP rights, choose their revenue model, and connect with fans directly. Without ads nor opaque algorithms.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm"
                      className="border-velatrix-blue text-velatrix-blue bg-transparent hover:bg-velatrix-blue/10">
                <a href={LandingLinks.watchitMovie.link} target="_blank" rel="noreferrer" className="flex items-center">
                  <VideoIcon className="mr-2 h-4 w-4"/>
                  Explore Platform
                </a>
              </Button>
              <div className="flex space-x-4 items-center">
                <a href={LandingLinks.x.link} target="_blank" rel="noreferrer" aria-label="X" className="text-white opacity-60 group/x">
                  <XIcon className="w-[20px] h-[20px] group-hover/x:text-gray-400" />
                </a>

                <a href={LandingLinks.medium.link} target="_blank" rel="noreferrer" aria-label="Medium" className="text-white opacity-60 group/medium">
                  <MediumIcon className="w-[22px] h-[22px] group-hover/medium:text-gray-400" />
                </a>
              </div>
            </CardFooter>
          </Card>
        </div>
        </div>
      </section>
  );
};

export default Products;
