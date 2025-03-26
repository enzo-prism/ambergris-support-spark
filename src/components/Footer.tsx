
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const isMobile = useIsMobile();
  
  return (
    <footer className="bg-white text-gray-700 pt-10 sm:pt-16 pb-6 sm:pb-8 shadow-sm border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 pb-6 sm:pb-10 border-b border-gray-200">
          <div>
            <div className="mb-4 text-center sm:text-left">
              <img 
                src="/lovable-uploads/cc1bb947-c2e0-4bd5-8ffc-d1667dfb614e.png" 
                alt="BelizeKIDS.ORG Logo" 
                className="h-10 sm:h-12 w-auto mx-auto sm:mx-0"
              />
            </div>
            <p className="text-gray-600 mb-4 text-sm sm:text-base text-center sm:text-left">
              Improving the lives of children in Belize through investments in education, healthcare, parks, and scholarships.
            </p>
            <div className="text-center sm:text-left">
              <p className="text-gray-600 mb-1 text-sm">501(c)(3) Non-Profit Organization</p>
              <p className="text-gray-600 mb-1 text-sm">TAX ID: 81-2841433</p>
              <address className="text-gray-600 not-italic text-sm">
                PO BOX 620134<br/>
                Woodside, CA 94062
              </address>
            </div>
          </div>
          
          <div className="mt-6 sm:mt-0 text-center sm:text-left">
            <h3 className="font-bold text-lg mb-3 sm:mb-6 text-belize-green relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 right-0 sm:right-auto sm:w-12 h-1 bg-belize-green"></span>
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#about" className="text-gray-600 hover:text-belize-green transition-colors text-sm sm:text-base">
                  About Us
                </a>
              </li>
              <li>
                <a href="#programs" className="text-gray-600 hover:text-belize-green transition-colors text-sm sm:text-base">
                  Our Programs
                </a>
              </li>
              <li>
                <a href="#impact" className="text-gray-600 hover:text-belize-green transition-colors text-sm sm:text-base">
                  Our Impact
                </a>
              </li>
              <li>
                <a href="#donate" className="text-gray-600 hover:text-belize-green transition-colors text-sm sm:text-base">
                  Donate
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-belize-green transition-colors text-sm sm:text-base">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          <div className="mt-6 sm:mt-0 text-center sm:text-left">
            <h3 className="font-bold text-lg mb-3 sm:mb-6 text-belize-green relative inline-block">
              Legal
              <span className="absolute -bottom-2 left-0 right-0 sm:right-auto sm:w-12 h-1 bg-belize-green"></span>
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-belize-green transition-colors text-sm sm:text-base">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-belize-green transition-colors text-sm sm:text-base">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-belize-green transition-colors text-sm sm:text-base">
                  Financial Reports
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-belize-green transition-colors text-sm sm:text-base">
                  Annual Reports
                </a>
              </li>
            </ul>
          </div>
          
          <div className="mt-6 sm:mt-0 text-center sm:text-left">
            <h3 className="font-bold text-lg mb-3 sm:mb-6 text-belize-green relative inline-block">
              Newsletter
              <span className="absolute -bottom-2 left-0 right-0 sm:right-auto sm:w-12 h-1 bg-belize-green"></span>
            </h3>
            <p className="text-gray-600 mb-3 text-sm sm:text-base">
              Subscribe to receive updates about our projects and impact.
            </p>
            <div className="flex items-center max-w-xs mx-auto sm:mx-0">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-100 text-gray-700 px-3 py-2 rounded-l-md flex-grow focus:outline-none focus:ring-1 focus:ring-belize-green border border-gray-200 text-sm"
              />
              <button className="bg-belize-green text-white px-3 py-2 rounded-r-md hover:bg-opacity-90 transition-colors text-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center text-gray-500 text-xs sm:text-sm">
          <p>© {currentYear} BelizeKids.org. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
