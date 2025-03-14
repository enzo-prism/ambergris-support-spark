
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Eye, ChevronRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
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

  // Navigation structure with proper grouping and organization
  const mainNavItems = [
    {
      label: "About",
      type: "scroll",
      action: () => scrollToSection("about")
    },
    {
      label: "Programs",
      type: "scroll",
      action: () => scrollToSection("programs")
    },
    {
      label: "Projects",
      type: "link",
      to: "/projects"
    },
    {
      label: "Leadership",
      type: "link",
      to: "/leadership"
    },
    {
      label: "Doctors",
      type: "link",
      to: "/doctors",
      highlight: true
    },
    {
      label: "Membership",
      type: "link",
      to: "/membership"
    },
    {
      label: "Contact",
      type: "scroll",
      action: () => scrollToSection("contact")
    }
  ];

  // Resources dropdown content (simplified)
  const ResourcesDropdown = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className={cn(
          "flex items-center text-base font-medium text-gray-700 hover:text-belize-blue transition-colors px-4 py-2",
          location.pathname === "/resources" && "text-belize-blue font-semibold"
        )}>
          Resources
          <ChevronRight className="h-4 w-4 ml-1 rotate-90" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-[400px] p-0 rounded-md">
        <div className="grid grid-cols-2 gap-3 p-4">
          <Link to="/doctors" className="group flex h-full w-full select-none flex-col justify-between rounded-md bg-gradient-to-b from-blue-50 to-blue-100 p-4 no-underline outline-none transition-colors hover:from-blue-100 hover:to-blue-200">
            <div className="mb-2 mt-2 text-lg font-medium text-belize-blue">
              <Eye className="mb-1 h-5 w-5 inline-block mr-2" />
              Eye Health Services
            </div>
            <div className="text-sm leading-tight text-gray-600 group-hover:text-gray-700">
              Find available eye doctors and specialists in your area
            </div>
            <ChevronRight className="h-4 w-4 text-belize-blue mt-2 ml-auto" />
          </Link>
          <Link to="/projects" className="group flex h-full w-full select-none flex-col justify-between rounded-md bg-gradient-to-b from-green-50 to-green-100 p-4 no-underline outline-none transition-colors hover:from-green-100 hover:to-green-200">
            <div className="mb-2 mt-2 text-lg font-medium text-green-700">
              Community Projects
            </div>
            <div className="text-sm leading-tight text-gray-600 group-hover:text-gray-700">
              Explore our ongoing community initiatives and programs
            </div>
            <ChevronRight className="h-4 w-4 text-green-700 mt-2 ml-auto" />
          </Link>
        </div>
        <div className="p-4 pt-0">
          <Button asChild variant="outline" className="w-full justify-between">
            <Link to="/membership">
              <span>Join our membership program</span>
              <ChevronRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );

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

        {/* Desktop Navigation Menu */}
        {!isMobile && (
          <div className="hidden md:flex items-center space-x-1">
            {mainNavItems.map((item) => (
              <div key={item.label} className="inline-block">
                {item.type === "link" ? (
                  <Link 
                    to={item.to!}
                    className={cn(
                      "text-base font-medium px-4 py-2 transition-colors",
                      location.pathname === item.to 
                        ? "text-belize-blue font-semibold" 
                        : "text-gray-700 hover:text-belize-blue",
                      item.highlight && "text-belize-blue"
                    )}
                  >
                    {item.label}
                    {item.highlight && <Eye className="inline-block ml-1 h-4 w-4" />}
                  </Link>
                ) : (
                  <button 
                    onClick={item.action}
                    className="text-base font-medium px-4 py-2 text-gray-700 hover:text-belize-blue transition-colors"
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
            
            {/* Resources dropdown */}
            <div className="inline-block">
              <ResourcesDropdown />
            </div>
          </div>
        )}

        <div className="hidden md:flex items-center ml-4">
          <Button 
            onClick={() => scrollToSection("donate")}
            className="bg-belize-blue hover:bg-belize-blue/90 text-white transition-all hover:shadow-md"
          >
            Donate Now
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-belize-blue md:hidden">
              <Menu size={24} />
              <span className="sr-only">Open main menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="p-0 w-[90%] max-w-[300px] border-l-4 border-belize-blue">
            <div className="px-6 py-6 flex flex-col space-y-6">
              <div className="flex justify-between items-center">
                <Link to="/" className="flex items-center">
                  <img 
                    src="/lovable-uploads/cc1bb947-c2e0-4bd5-8ffc-d1667dfb614e.png" 
                    alt="BelizeKIDS.ORG Logo" 
                    className="h-8 w-auto"
                  />
                </Link>
                <SheetClose className="rounded-full h-9 w-9 flex items-center justify-center bg-belize-blue/10 text-belize-blue">
                  <X size={20} />
                  <span className="sr-only">Close menu</span>
                </SheetClose>
              </div>
              
              <div className="flex flex-col space-y-1">
                {mainNavItems.map((item) => (
                  <SheetClose
                    key={item.label}
                    asChild
                  >
                    {item.type === "link" ? (
                      <Link 
                        to={item.to!}
                        className={cn(
                          "flex w-full py-4 hover:text-belize-blue font-medium border-b border-gray-100",
                          location.pathname === item.to 
                            ? "text-belize-blue font-semibold" 
                            : "text-gray-700",
                          item.highlight && "text-belize-blue"
                        )}
                      >
                        {item.label}
                        {item.highlight && <Eye className="ml-2 h-4 w-4" />}
                      </Link>
                    ) : (
                      <button 
                        onClick={item.action}
                        className="flex w-full py-4 text-gray-700 hover:text-belize-blue font-medium text-left border-b border-gray-100"
                      >
                        {item.label}
                      </button>
                    )}
                  </SheetClose>
                ))}

                {/* Resource section on mobile */}
                <div className="pt-4 pb-2">
                  <div className="font-semibold text-gray-500 text-sm uppercase tracking-wider mb-2">Resources</div>
                  <Link to="/doctors" className="flex items-center py-3 text-belize-blue hover:text-belize-blue/80">
                    <Eye className="mr-2 h-4 w-4" />
                    <span>Eye Health Services</span>
                  </Link>
                  <Link to="/projects" className="flex items-center py-3 text-gray-700 hover:text-belize-blue">
                    Community Projects
                  </Link>
                </div>
              </div>
              
              <SheetClose asChild>
                <Button 
                  onClick={() => scrollToSection("donate")}
                  className="bg-belize-blue hover:bg-opacity-90 text-white w-full py-6"
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
