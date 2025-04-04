import React from 'react';
import {LandingLinks} from "@/lib/utils.ts";
import logo from '@/assets/images/logo_large.png';

const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <img src={logo} alt="Velatrix logo" className="h-10 mb-2"/>
            <p className="text-sm text-gray-400 max-w-sm">
              Web3 technology company providing solutions for intellectual property management and monetization.
            </p>
            <p className="hidden md:block text-sm text-gray-500 mt-8">
              &copy; {new Date().getFullYear()} Velatrix. All rights reserved.
            </p>
          </div>

          <div className="grid grid-cols-2 md:flex gap-8 md:gap-16 w-full px-8 md:px-0 md:w-auto">
            <div>
            <h3 className="text-sm font-medium text-velatrix-blue mb-4 uppercase tracking-wider">Products</h3>
              <ul className="space-y-1">
                <li>
                  <a href={LandingLinks.github.link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    Synapse Protocol
                  </a>
                </li>
                <li>
                  <a href={LandingLinks.watchitMovie.link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    Watchit Platform
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-velatrix-blue mb-4 uppercase tracking-wider">Resources</h3>
              <ul className="space-y-1">
                <li>
                  <a href={LandingLinks.medium.link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href={LandingLinks.github.link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href={LandingLinks.linkedin.link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="md:hidden text-sm text-left text-gray-500 mt-8">
            &copy; {new Date().getFullYear()} Velatrix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
