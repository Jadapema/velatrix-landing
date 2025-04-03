
import React from 'react';
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import GradientDivider from "@/components/ui/GradientDivider.tsx";

const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <img src="/src/assets/images/logo_large.png" alt="Velatrix logo" className="h-10 mb-2"/>
            <p className="text-sm text-gray-400 max-w-sm">
              Web3 technology company providing solutions for intellectual property management and monetization.
            </p>
            <p className="text-sm text-gray-500 mt-8">
              &copy; {new Date().getFullYear()} Velatrix. All rights reserved.
            </p>
          </div>

          <div className="grid grid-cols-2 md:flex gap-8 md:gap-16 w-full px-8 md:px-0 md:w-auto">
            <div>
            <h3 className="text-sm font-medium text-velatrix-blue mb-4 uppercase tracking-wider">Products</h3>
              <ul className="space-y-1">
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
              <ul className="space-y-1">
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
                <li>
                  <a href="https://www.linkedin.com/company/velatrix/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
