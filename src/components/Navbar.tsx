
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container-custom flex justify-between items-center py-4">
        <Link to="/" className="flex items-center space-x-2">
          <Heart className="h-6 w-6 text-belize-coral" />
          <span className="font-heading font-bold text-2xl text-belize-blue">BelizeKids</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection("about")}
            className="text-gray-700 hover:text-belize-blue font-medium"
          >
            About Us
          </button>
          <button 
            onClick={() => scrollToSection("programs")}
            className="text-gray-700 hover:text-belize-blue font-medium"
          >
            Programs
          </button>
          <Link 
            to="/projects"
            className="text-gray-700 hover:text-belize-blue font-medium"
          >
            Projects
          </Link>
          <Link 
            to="/leadership"
            className="text-gray-700 hover:text-belize-blue font-medium"
          >
            Leadership
          </Link>
          <button 
            onClick={() => scrollToSection("impact")}
            className="text-gray-700 hover:text-belize-blue font-medium"
          >
            Our Impact
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            className="text-gray-700 hover:text-belize-blue font-medium"
          >
            Contact
          </button>
          <Button 
            onClick={() => scrollToSection("donate")}
            className="bg-belize-coral hover:bg-opacity-90 text-white"
          >
            Donate Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pt-2 pb-4 px-4 shadow-md">
          <div className="flex flex-col space-y-3">
            <button 
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-belize-blue py-2 font-medium"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection("programs")}
              className="text-gray-700 hover:text-belize-blue py-2 font-medium"
            >
              Programs
            </button>
            <Link 
              to="/projects"
              className="text-gray-700 hover:text-belize-blue py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              to="/leadership"
              className="text-gray-700 hover:text-belize-blue py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Leadership
            </Link>
            <button 
              onClick={() => scrollToSection("impact")}
              className="text-gray-700 hover:text-belize-blue py-2 font-medium"
            >
              Our Impact
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-belize-blue py-2 font-medium"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection("donate")}
              className="bg-belize-coral hover:bg-opacity-90 text-white w-full mt-2"
            >
              Donate Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
