import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar, ChevronRight, Home, Users, BookOpen, Briefcase, Folder, CreditCard, Mail, Info, Menu as MenuIcon, PiggyBank } from "lucide-react";
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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = `/#${id}`;
    }
  };

  const mainNavItems = [
    {
      label: "Home",
      type: "link",
      to: "/",
      icon: <Home className="h-5 w-5" />
    },
    {
      label: "About",
      type: "dropdown",
      icon: <Info className="h-5 w-5" />,
      items: [
        {
          label: "About Us",
          type: "scroll",
          action: () => scrollToSection("about"),
          icon: <Info className="h-5 w-5" />
        },
        {
          label: "Programs",
          type: "scroll",
          action: () => scrollToSection("programs"),
          icon: <BookOpen className="h-5 w-5" />
        },
        {
          label: "Leadership",
          type: "link",
          to: "/leadership",
          icon: <Users className="h-5 w-5" />
        }
      ]
    },
    {
      label: "Resources",
      type: "dropdown",
      icon: <Folder className="h-5 w-5" />,
      items: [
        {
          label: "Projects",
          type: "link",
          to: "/projects",
          icon: <Folder className="h-5 w-5" />
        },
        {
          label: "Schedule",
          type: "link",
          to: "/doctors",
          hasHighlight: true,
          icon: <Calendar className="h-5 w-5" />
        },
        {
          label: "Membership",
          type: "link",
          to: "/membership",
          hasHighlight: false,
          icon: <CreditCard className="h-5 w-5" />
        }
      ]
    },
    {
      label: "Contact",
      type: "scroll",
      action: () => scrollToSection("contact"),
      icon: <Mail className="h-5 w-5" />
    }
  ];

  const NavDropdown = ({ item }: { item: any }) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className={cn(
          "flex items-center text-base font-medium text-gray-700 hover:text-belize-blue transition-colors px-4 py-2 gap-1",
          location.pathname === item.to && "text-belize-blue font-semibold"
        )}>
          {item.label}
          <ChevronRight className="h-4 w-4 ml-1 rotate-90" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-[250px] p-2 rounded-md">
        <div className="space-y-1">
          {item.items.map((subItem: any, index: number) => (
            <DropdownMenuItem key={index} className="p-0">
              {subItem.type === "link" ? (
                <Link 
                  to={subItem.to} 
                  className="w-full flex items-center gap-2 py-2 px-3 rounded-md hover:bg-gray-50"
                >
                  {subItem.icon && <span className="text-belize-blue">{subItem.icon}</span>}
                  <span className={cn(
                    "flex-1",
                    subItem.highlight && "text-belize-blue font-medium"
                  )}>
                    {subItem.label}
                  </span>
                </Link>
              ) : (
                <button
                  onClick={subItem.action}
                  className="w-full flex items-center gap-2 py-2 px-3 rounded-md hover:bg-gray-50 text-left"
                >
                  {subItem.icon && <span className="text-belize-blue">{subItem.icon}</span>}
                  <span className="flex-1">{subItem.label}</span>
                </button>
              )}
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const ResourcesDropdown = () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="hidden lg:flex items-center gap-2">
          <Folder className="h-4 w-4" />
          <span>Resources</span>
          <ChevronRight className="h-4 w-4 rotate-90" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="center" className="w-[400px] p-0 rounded-md">
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
          <Link to="/membership" className="group flex h-full w-full select-none flex-col justify-between rounded-md bg-gradient-to-b from-blue-100 to-blue-200 p-4 no-underline outline-none transition-colors hover:from-blue-200 hover:to-blue-300">
            <div className="mb-2 mt-2 text-lg font-medium text-belize-blue">
              <CreditCard className="mb-1 h-5 w-5 inline-block mr-2" />
              Monthly Membership
            </div>
            <div className="text-sm leading-tight text-gray-600 group-hover:text-gray-700">
              Join our exclusive monthly membership community
            </div>
            <ChevronRight className="h-4 w-4 text-belize-blue mt-2 ml-auto" />
          </Link>
        </div>
        <div className="p-4 pt-0">
          <Button asChild variant="outline" className="w-full justify-between">
            <Link to="/projects">
              <span>View Our Projects</span>
              <ChevronRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );

  const MobileMenuItem = ({ 
    icon, 
    children, 
    to, 
    onClick, 
    hasHighlight = false,
    hasSubmenu = false,
    submenuItems = []
  }: { 
    icon?: React.ReactNode; 
    children: React.ReactNode; 
    to?: string; 
    onClick?: () => void; 
    hasHighlight?: boolean;
    hasSubmenu?: boolean;
    submenuItems?: any[];
  }) => {
    const [isOpen, setIsOpen] = useState(false);

    if (hasSubmenu) {
      return (
        <div className="space-y-1">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "flex items-center justify-between gap-3 py-3 px-3 rounded-md transition-colors cursor-pointer",
              hasHighlight ? "text-belize-blue font-medium" : "text-gray-700",
              "hover:bg-gray-50 active:bg-gray-100"
            )}
          >
            <div className="flex items-center gap-3">
              {icon && <span className="text-belize-blue">{icon}</span>}
              <span className="flex-1">{children}</span>
            </div>
            <ChevronRight className={cn("h-4 w-4 text-gray-400 transition-transform", isOpen && "rotate-90")} />
          </div>
          
          {isOpen && (
            <div className="pl-10 space-y-1">
              {submenuItems.map((item, index) => (
                <MobileMenuItem
                  key={index}
                  icon={item.icon}
                  to={item.type === "link" ? item.to : undefined}
                  onClick={item.type === "scroll" ? item.action : undefined}
                  hasHighlight={item.hasHighlight}
                >
                  {item.label}
                </MobileMenuItem>
              ))}
            </div>
          )}
        </div>
      );
    }
    
    const content = (
      <div className={cn(
        "flex items-center gap-3 py-3 px-3 rounded-md transition-colors",
        hasHighlight ? "text-belize-blue font-medium" : "text-gray-700",
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

        {!isMobile && (
          <div className="hidden md:flex items-center space-x-1">
            {mainNavItems.map((item, index) => (
              <div key={index} className="inline-block">
                {item.type === "link" ? (
                  <Link 
                    to={item.to}
                    className={cn(
                      "text-base font-medium px-4 py-2 transition-colors flex items-center gap-1",
                      location.pathname === item.to 
                        ? "text-belize-blue font-semibold" 
                        : "text-gray-700 hover:text-belize-blue"
                    )}
                  >
                    {item.icon && <span className="inline-block">{item.icon}</span>}
                    {item.label}
                  </Link>
                ) : item.type === "dropdown" ? (
                  <NavDropdown item={item} />
                ) : (
                  <button 
                    onClick={item.action}
                    className="text-base font-medium px-4 py-2 text-gray-700 hover:text-belize-blue transition-colors flex items-center gap-1"
                  >
                    {item.icon && <span className="inline-block">{item.icon}</span>}
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="hidden md:flex items-center ml-4 space-x-2">
          <ResourcesDropdown />
          
          <Button 
            onClick={() => scrollToSection("donate")}
            className="bg-belize-coral hover:bg-belize-coral/90 text-white transition-all hover:shadow-md flex items-center gap-2"
          >
            <PiggyBank className="h-4 w-4" />
            Invest Today
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-belize-blue md:hidden">
              <Menu size={24} />
              <span className="sr-only">Open main menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="p-0 w-[85%] max-w-[300px] border-none">
            <div className="flex flex-col h-full bg-white">
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
              
              <div className="flex-1 overflow-auto py-2 px-1">
                <div className="space-y-1">
                  {mainNavItems.map((item, index) => {
                    if (item.type === "dropdown") {
                      return (
                        <MobileMenuItem 
                          key={index}
                          icon={item.icon}
                          hasSubmenu={true}
                          submenuItems={item.items}
                        >
                          {item.label}
                        </MobileMenuItem>
                      );
                    } else {
                      return (
                        <MobileMenuItem 
                          key={index}
                          icon={item.icon}
                          to={item.type === "link" ? item.to : undefined}
                          onClick={item.type === "scroll" ? item.action : undefined}
                          hasHighlight={item.hasHighlight}
                        >
                          {item.label}
                        </MobileMenuItem>
                      );
                    }
                  })}
                </div>
              </div>
              
              <div className="p-4 border-t mt-auto">
                <SheetClose asChild>
                  <Button 
                    onClick={() => scrollToSection("donate")}
                    className="bg-belize-coral hover:bg-belize-coral/90 text-white w-full py-5"
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
