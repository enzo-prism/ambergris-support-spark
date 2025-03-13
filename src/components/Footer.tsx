
import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-gray-700">
          <div>
            <div className="mb-6">
              <img 
                src="/lovable-uploads/cc1bb947-c2e0-4bd5-8ffc-d1667dfb614e.png" 
                alt="BelizeKIDS.ORG Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6">
              Supporting children in Belize through education, healthcare, and community programs.
            </p>
            <p className="text-gray-300 mb-1">501(c)(3) Non-Profit Organization</p>
            <p className="text-gray-300">EIN: 12-3456789</p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6 text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-belize-blue"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors hover:text-belize-blue">
                  About Us
                </a>
              </li>
              <li>
                <a href="#programs" className="text-gray-300 hover:text-white transition-colors hover:text-belize-blue">
                  Our Programs
                </a>
              </li>
              <li>
                <a href="#impact" className="text-gray-300 hover:text-white transition-colors hover:text-belize-blue">
                  Our Impact
                </a>
              </li>
              <li>
                <a href="#donate" className="text-gray-300 hover:text-white transition-colors hover:text-belize-blue">
                  Donate
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors hover:text-belize-blue">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6 text-white relative inline-block">
              Legal
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-belize-blue"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors hover:text-belize-blue">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors hover:text-belize-blue">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors hover:text-belize-blue">
                  Financial Reports
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors hover:text-belize-blue">
                  Annual Reports
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6 text-white relative inline-block">
              Newsletter
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-belize-blue"></span>
            </h3>
            <p className="text-gray-300 mb-4">
              Subscribe to receive updates about our programs and impact.
            </p>
            <div className="flex items-center">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-700 text-white px-4 py-2 rounded-l-md flex-grow focus:outline-none focus:ring-1 focus:ring-belize-blue"
              />
              <button className="bg-belize-blue px-4 py-2 rounded-r-md hover:bg-opacity-90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-400">
          <p>© {currentYear} BelizeKids.org. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
