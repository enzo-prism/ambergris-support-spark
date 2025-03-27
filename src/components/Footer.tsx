import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo + About */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src="/lovable-uploads/cc1bb947-c2e0-4bd5-8ffc-d1667dfb614e.png" 
                alt="BelizeKids.org Logo" 
                className="h-12 w-auto" 
              />
            </Link>
            <p className="text-sm text-gray-600 max-w-xs">
              BelizeKids.org enhances educational opportunities for children in Belize through sustainable infrastructure projects.
            </p>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading font-medium mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-belize-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/leadership" className="text-sm text-gray-600 hover:text-belize-blue transition-colors">
                  Leadership
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm text-gray-600 hover:text-belize-blue transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <a href="/#contact" className="text-sm text-gray-600 hover:text-belize-blue transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Resources */}
          <div>
            <h3 className="font-heading font-medium mb-4 text-gray-900">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/projects" className="text-sm text-gray-600 hover:text-belize-blue transition-colors">
                  Current Projects
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-sm text-gray-600 hover:text-belize-blue transition-colors">
                  Eye Care Appointments
                </Link>
              </li>
              <li>
                <Link to="/monthly-investment" className="text-sm text-gray-600 hover:text-belize-blue transition-colors">
                  Monthly Investment
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Connect */}
          <div>
            <h3 className="font-heading font-medium mb-4 text-gray-900">Connect With Us</h3>
            <div className="flex space-x-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-500 hover:text-belize-green transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-500 hover:text-belize-green transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-500 hover:text-belize-green transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="mailto:info@belizekids.org" 
                className="text-gray-500 hover:text-belize-green transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium text-gray-900 mb-3">Subscribe to our Newsletter</h4>
              <div className="flex flex-col sm:flex-row">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="input-donate mb-2 sm:mb-0 sm:mr-2" 
                />
                <Button className="bg-belize-blue hover:bg-belize-blue/90 text-white">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} BelizeKIDS.org. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center">
            <Link to="/privacy" className="text-xs text-gray-500 hover:underline mr-4">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-gray-500 hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
