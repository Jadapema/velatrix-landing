
import React from 'react';
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-velatrix-blue/20 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <img src="/src/assets/images/logo_large.png" alt="Velatrix logo" className="h-10 mb-2"/>
            <p className="text-sm text-gray-400 max-w-sm">
              Web3 technology company providing solutions for intellectual property management and monetization.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16">
            <div>
              <h3 className="text-sm font-medium text-velatrix-blue mb-4 uppercase tracking-wider">Products</h3>
              <ul className="space-y-3">
                <li>
                  <a href="https://github.com/Synaps3Protocol" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    Synapse Protocol
                  </a>
                </li>
                <li>
                  <a href="https://watchit.movie" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    Watchit Platform
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-velatrix-blue mb-4 uppercase tracking-wider">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="https://medium.com/@watchit.app" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Synaps3Protocol" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-velatrix-blue/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Velatrix. All rights reserved.
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-velatrix-blue transition-colors" aria-label="Twitter">
              <TwitterLogoIcon className="h-5 w-5" />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-velatrix-blue transition-colors" aria-label="GitHub">
              <GitHubLogoIcon className="h-5 w-5" />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-velatrix-blue transition-colors" aria-label="LinkedIn">
              <LinkedInLogoIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
