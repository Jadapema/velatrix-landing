
import React from 'react';
import { GitHubLogoIcon, VideoIcon } from "@radix-ui/react-icons";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Database, Film } from "lucide-react";

const Products = () => {
  return (
    <section id="products" className="py-20 bg-velatrix-darkBlue relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-velatrix-dark to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-velatrix-dark to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Our Ecosystem</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            At the core of Velatrix, we're building a comprehensive ecosystem to revolutionize how creators manage, monetize, and share their content.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Synapse Card */}
          <Card className="cyber-card overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <Database className="h-10 w-10 text-velatrix-blue" />
                <span className="text-xs text-velatrix-gray px-2 py-1 rounded-full border border-velatrix-blue/30">
                  Blockchain Protocol
                </span>
              </div>
              <CardTitle className="text-2xl mt-4">Synapse</CardTitle>
              <CardDescription className="text-gray-400">
                Foundational blockchain layer
              </CardDescription>
            </CardHeader>
            <Separator className="bg-velatrix-blue/20" />
            <CardContent className="pt-6">
              <p className="text-gray-300">
                A blockchain protocol designed as the foundational layer to enable decentralized, scalable, secure IP management for the creator economy.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" className="border-velatrix-blue text-velatrix-blue hover:bg-velatrix-blue/10">
                <a href="https://github.com/Synaps3Protocol" target="_blank" rel="noreferrer" className="flex items-center">
                  <GitHubLogoIcon className="mr-2 h-4 w-4" />
                  Protocol Repository
                </a>
              </Button>
            </CardFooter>
          </Card>
          
          {/* Watchit Card */}
          <Card className="cyber-card overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <Film className="h-10 w-10 text-velatrix-purple" />
                <span className="text-xs text-velatrix-gray px-2 py-1 rounded-full border border-velatrix-purple/30">
                  Video Platform
                </span>
              </div>
              <CardTitle className="text-2xl mt-4">Watchit</CardTitle>
              <CardDescription className="text-gray-400">
                Flagship creator platform
              </CardDescription>
            </CardHeader>
            <Separator className="bg-velatrix-purple/20" />
            <CardContent className="pt-6">
              <p className="text-gray-300">
                Our flagship video platform, where creators control their IP rights, choose their revenue model, and connect with fans directly. Without ads nor opaque algorithms.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" className="border-velatrix-purple text-velatrix-purple hover:bg-velatrix-purple/10">
                <a href="https://watchit.movie" target="_blank" rel="noreferrer" className="flex items-center">
                  <VideoIcon className="mr-2 h-4 w-4" />
                  Explore Platform
                </a>
              </Button>
              <Button variant="ghost" size="sm">
                <a href="https://medium.com/@watchit.app" target="_blank" rel="noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Read Our Vision
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Products;
