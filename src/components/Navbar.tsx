
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const isMobile = useIsMobile();

  // Track scroll position to apply different styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    // Only scroll if we're on the home page
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If we're not on the homepage, go to homepage and then scroll
      window.location.href = `/#${id}`;
    }
  };

  const toggleMobileSubmenu = (menu: string) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  // Navigation items structure
  const navItems = [
    {
      label: "About",
      action: () => scrollToSection("about"),
      type: "scroll"
    },
    {
      label: "Programs",
      action: () => scrollToSection("programs"),
      type: "scroll"
    },
    {
      label: "Projects",
      to: "/projects",
      type: "link"
    },
    {
      label: "Leadership",
      to: "/leadership",
      type: "link"
    },
    {
      label: "Membership",
      to: "/membership",
      type: "link"
    },
    {
      label: "Impact",
      action: () => scrollToSection("impact"),
      type: "scroll"
    },
    {
      label: "Contact",
      action: () => scrollToSection("contact"),
      type: "scroll"
    }
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 shadow-md backdrop-blur-sm py-2" 
          : "bg-white/90 backdrop-blur-sm py-3 md:py-4"
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center z-20">
          <img 
            src="/lovable-uploads/cc1bb947-c2e0-4bd5-8ffc-d1667dfb614e.png" 
            alt="BelizeKIDS.ORG Logo" 
            className="h-8 w-auto md:h-10"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <React.Fragment key={item.label}>
              {item.type === "link" && (
                <Link 
                  to={item.to!}
                  className={cn(
                    "text-gray-700 hover:text-belize-blue font-medium transition-colors relative group",
                    location.pathname === item.to && "text-belize-blue font-semibold"
                  )}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-belize-blue transition-all group-hover:w-full"></span>
                </Link>
              )}
              
              {item.type === "scroll" && (
                <button 
                  onClick={item.action}
                  className="text-gray-700 hover:text-belize-blue font-medium transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-belize-blue transition-all group-hover:w-full"></span>
                </button>
              )}
            </React.Fragment>
          ))}
          
          <Button 
            onClick={() => scrollToSection("donate")}
            className="bg-belize-blue hover:bg-belize-blue/90 text-white transition-all hover:shadow-md"
          >
            Donate Now
          </Button>
        </div>

        {/* Mobile Menu with Sheet Component */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-belize-blue">
              <Menu size={24} />
              <span className="sr-only">Open main menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="p-0 w-[85%] max-w-[300px] border-l-4 border-belize-blue">
            <div className="px-6 py-4 flex flex-col space-y-6">
              <div className="flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-2">
                  <img 
                    src="/lovable-uploads/cc1bb947-c2e0-4bd5-8ffc-d1667dfb614e.png" 
                    alt="BelizeKIDS.ORG Logo" 
                    className="h-8 w-auto"
                  />
                </Link>
                <SheetClose className="rounded-full h-7 w-7 flex items-center justify-center bg-belize-blue/10 text-belize-blue">
                  <X size={18} />
                  <span className="sr-only">Close</span>
                </SheetClose>
              </div>
              
              <div className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <SheetClose
                    key={item.label}
                    asChild
                    className="w-full"
                  >
                    {item.type === "link" ? (
                      <Link 
                        to={item.to!}
                        className={cn(
                          "flex w-full py-3 text-gray-700 hover:text-belize-blue font-medium border-b border-gray-100",
                          location.pathname === item.to && "text-belize-blue font-semibold"
                        )}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <button 
                        onClick={item.action}
                        className="flex w-full py-3 text-gray-700 hover:text-belize-blue font-medium text-left border-b border-gray-100"
                      >
                        {item.label}
                      </button>
                    )}
                  </SheetClose>
                ))}
              </div>
              
              <SheetClose asChild>
                <Button 
                  onClick={() => scrollToSection("donate")}
                  className="bg-belize-blue hover:bg-opacity-90 text-white w-full"
                >
                  Donate Now
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
