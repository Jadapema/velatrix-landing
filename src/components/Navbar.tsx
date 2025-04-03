import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import {LandingLinks} from "@/lib/utils.ts";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { handleLinkClick } = useSmoothScroll({
    offset: 80,
    onScroll: () => {
      if (isOpen) setIsOpen(false);
    }
  });

  return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-velatrix-dark/80 backdrop-blur-lg py-4">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img src="/src/assets/images/logo_large.png" alt="Velatrix logo" className="h-10"/>
          </a>

          {isMobile ? (
              <div>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>

                {isOpen && (
                    <div className="absolute top-16 left-0 right-0 bg-velatrix-dark/95 backdrop-blur-lg shadow-lg border-t border-velatrix-blue/20 py-4">
                      <div className="flex flex-col space-y-4 px-6">
                        <a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="text-foreground hover:text-velatrix-blue transition-colors">Products</a>
                        <a href="#vision" onClick={(e) => handleLinkClick(e, 'vision')} className="text-foreground hover:text-velatrix-blue transition-colors">Vision</a>
                        <a href={LandingLinks.watchitMovie.link} target="_blank" rel="noreferrer" className="text-foreground hover:text-velatrix-blue transition-colors">Platform</a>
                        <Button variant="outline" className="border-velatrix-blue text-velatrix-blue hover:bg-velatrix-blue/10">
                          <a href={LandingLinks.github.link} target="_blank" rel="noreferrer">
                            GitHub
                          </a>
                        </Button>
                      </div>
                    </div>
                )}
              </div>
          ) : (
              <div className="flex items-center space-x-8">
                <a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="text-foreground hover:text-velatrix-blue transition-colors">Products</a>
                <a href="#vision" onClick={(e) => handleLinkClick(e, 'vision')} className="text-foreground hover:text-velatrix-blue transition-colors">Vision</a>
                <a href={LandingLinks.watchitMovie.link} target="_blank" rel="noreferrer" className="text-foreground hover:text-velatrix-blue transition-colors">Platform</a>
                <Button variant="outline" className="border-velatrix-blue text-velatrix-blue hover:bg-velatrix-blue/10">
                  <a href={LandingLinks.github.link} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </Button>
              </div>
          )}
        </div>
      </nav>
  );
};

export default Navbar;
