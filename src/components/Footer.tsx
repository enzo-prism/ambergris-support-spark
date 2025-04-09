
import React from "react";
import { Link } from "react-router-dom";
import { Facebook } from "lucide-react";
import { Image } from "@/components/ui/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo + About */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <Image 
                src="https://imgur.com/BWTq83b" 
                alt="Belize Kids Logo" 
                className="h-12 w-auto" 
              />
            </Link>
            <p className="text-sm text-gray-600 max-w-xs">
              Belize Kids enhances educational opportunities for children in Belize through sustainable infrastructure projects.
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
            <div className="flex">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-500 hover:text-belize-green transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Belize Kids. All rights reserved.
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
