
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar, ChevronRight, Home, Users, BookOpen, Briefcase, Folder, CreditCard, Mail } from "lucide-react";
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
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
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
      action: () => scrollToSection("about"),
      icon: <Home className="h-5 w-5" />
    },
    {
      label: "Programs",
      type: "scroll",
      action: () => scrollToSection("programs"),
      icon: <BookOpen className="h-5 w-5" />
    },
    {
      label: "Projects",
      type: "link",
      to: "/projects",
      icon: <Folder className="h-5 w-5" />
    },
    {
      label: "Leadership",
      type: "link",
      to: "/leadership",
      icon: <Users className="h-5 w-5" />
    },
    {
      label: "Schedule",
      type: "link",
      to: "/doctors",
      highlight: true,
      icon: <Calendar className="h-5 w-5" />
    },
    {
      label: "Membership",
      type: "link",
      to: "/membership",
      icon: <CreditCard className="h-5 w-5" />
    },
    {
      label: "Contact",
      type: "scroll",
      action: () => scrollToSection("contact"),
      icon: <Mail className="h-5 w-5" />
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
              <Calendar className="mb-1 h-5 w-5 inline-block mr-2" />
              Schedule Eye Care
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

  // New mobile menu item component for better visual consistency
  const MobileMenuItem = ({ 
    icon, 
    children, 
    to, 
    onClick, 
    highlight = false 
  }: { 
    icon?: React.ReactNode; 
    children: React.ReactNode; 
    to?: string; 
    onClick?: () => void; 
    highlight?: boolean;
  }) => {
    const content = (
      <div className={cn(
        "flex items-center gap-3 py-3 px-3 rounded-md transition-colors",
        highlight ? "text-belize-blue font-medium" : "text-gray-700",
        !to && "hover:bg-gray-50 active:bg-gray-100"
      )}>
        {icon && <span className="text-belize-blue">{icon}</span>}
        <span className="flex-1">{children}</span>
        {to && <ChevronRight className="h-4 w-4 text-gray-400" />}
      </div>
    );

    if (to) {
      return (
        <SheetClose asChild>
          <Link to={to} className="block">
            {content}
          </Link>
        </SheetClose>
      );
    }

    if (onClick) {
      return (
        <SheetClose asChild>
          <button onClick={onClick} className="w-full text-left">
            {content}
          </button>
        </SheetClose>
      );
    }

    return content;
  };

  // Mobile section header component
  const MobileSectionHeader = ({ children }: { children: React.ReactNode }) => (
    <div className="text-xs uppercase tracking-wider font-semibold text-gray-500 px-3 pt-5 pb-2">
      {children}
    </div>
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
                    {item.highlight && <Calendar className="inline-block ml-1 h-4 w-4" />}
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
          <SheetContent side="right" className="p-0 w-[85%] max-w-[300px] border-none">
            <div className="flex flex-col h-full bg-white">
              {/* Header */}
              <div className="flex items-center justify-between border-b p-4">
                <Link to="/" className="flex items-center">
                  <img 
                    src="/lovable-uploads/cc1bb947-c2e0-4bd5-8ffc-d1667dfb614e.png" 
                    alt="BelizeKIDS.ORG Logo" 
                    className="h-8 w-auto"
                  />
                </Link>
                <SheetClose className="rounded-full h-8 w-8 flex items-center justify-center text-gray-500 hover:bg-gray-100">
                  <X size={20} />
                  <span className="sr-only">Close menu</span>
                </SheetClose>
              </div>
              
              {/* Navigation Items */}
              <div className="flex-1 overflow-auto py-2 px-1">
                <div className="space-y-1">
                  {mainNavItems.map((item) => (
                    <MobileMenuItem 
                      key={item.label}
                      icon={item.icon}
                      to={item.type === "link" ? item.to : undefined}
                      onClick={item.type === "scroll" ? item.action : undefined}
                      highlight={item.highlight}
                    >
                      {item.label}
                    </MobileMenuItem>
                  ))}
                </div>
                
                {/* Resources Section */}
                <div className="mt-2">
                  <MobileSectionHeader>Resources</MobileSectionHeader>
                  <div className="space-y-1 mt-1">
                    <MobileMenuItem 
                      icon={<Calendar className="h-5 w-5" />}
                      to="/doctors"
                    >
                      Schedule Eye Care
                    </MobileMenuItem>
                    <MobileMenuItem 
                      icon={<Briefcase className="h-5 w-5" />}
                      to="/projects"
                    >
                      Community Projects
                    </MobileMenuItem>
                  </div>
                </div>
              </div>
              
              {/* Donate Button */}
              <div className="p-4 border-t mt-auto">
                <SheetClose asChild>
                  <Button 
                    onClick={() => scrollToSection("donate")}
                    className="bg-belize-blue hover:bg-belize-blue/90 text-white w-full py-5"
                  >
                    Donate Now
                  </Button>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
