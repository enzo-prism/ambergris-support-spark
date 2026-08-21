
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronDown, ChevronRight, Home, Users, BookOpen, Folder, Mail, Info, Menu, PiggyBank } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import {
  trackContactClick,
  trackDoctorAppointmentClick,
  trackInvestmentClick,
} from "@/lib/analytics";

type NavItemBase = {
  label: string;
  icon?: React.ReactNode;
  onSelect?: () => void;
}

type NavItemLink = NavItemBase & {
  type: "link";
  to: string;
  hasHighlight?: boolean;
}

type NavItemScroll = NavItemBase & {
  type: "scroll";
  action: () => void;
  href: string;
  hasHighlight?: boolean;
}

type NavItemDropdown = NavItemBase & {
  type: "dropdown";
  items: (NavItemLink | NavItemScroll)[];
}

type NavItem = NavItemLink | NavItemScroll | NavItemDropdown;

const isNavDropdown = (item: NavItem): item is NavItemDropdown => item.type === "dropdown";
const isNavLink = (item: NavItemLink | NavItemScroll): item is NavItemLink =>
  item.type === "link";

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

  const mainNavItems: NavItem[] = [
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
          href: "/#about",
          icon: <Info className="h-5 w-5" />
        },
        {
          label: "Programs",
          type: "scroll",
          action: () => scrollToSection("programs"),
          href: "/#programs",
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
          label: "Vision Clinic Updates",
          type: "link",
          to: "/doctors",
          hasHighlight: true,
          icon: <Calendar className="h-5 w-5" />,
          onSelect: () =>
            trackDoctorAppointmentClick("navbar_resources", "doctors"),
        },
        {
          label: "Invest",
          type: "link",
          to: "/monthly-investment",
          icon: <PiggyBank className="h-5 w-5" />,
          onSelect: () => trackInvestmentClick("navbar_resources", "monthly_investment"),
        }
      ]
    },
    {
      label: "Contact",
      type: "scroll",
      action: () => scrollToSection("contact"),
      href: "/#contact",
      icon: <Mail className="h-5 w-5" />,
      onSelect: () => trackContactClick("navbar", "contact_section"),
    }
  ];

  const NavDropdown = ({ item }: { item: NavItemDropdown }) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className={cn(
          "group flex items-center gap-1 rounded-full px-4 py-2 text-[15px] font-medium text-gray-700 transition-colors hover:bg-belize-green/5 hover:text-belize-green",
          item.items.some((subItem) => subItem.type === "link" && subItem.to === location.pathname) &&
            "text-belize-green"
        )}>
          {item.label}
          <ChevronDown className="h-4 w-4 opacity-70 transition-transform duration-200 group-data-[state=open]:rotate-180" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-[250px] rounded-2xl border-belize-green/10 p-2 shadow-glow">
        <div className="space-y-1">
          {item.items.map((subItem, index) => (
            <DropdownMenuItem key={index} className="p-0">
              {subItem.type === "link" ? (
                <Link 
                  to={subItem.to}
                  onClick={subItem.onSelect}
                  className="w-full flex items-center gap-2 py-2 px-3 rounded-md hover:bg-gray-50"
                >
                  {subItem.icon && <span className="text-belize-blue">{subItem.icon}</span>}
                  <span className={cn(
                    "flex-1",
                    subItem.hasHighlight && "text-belize-blue font-medium"
                  )}>
                    {subItem.label}
                  </span>
                </Link>
              ) : (
                <a
                  href={subItem.href}
                  onClick={(event) => {
                    subItem.onSelect?.();
                    if (location.pathname === "/") {
                      event.preventDefault();
                      subItem.action();
                    }
                  }}
                  className="w-full flex items-center gap-2 py-2 px-3 rounded-md hover:bg-gray-50 text-left"
                >
                  {subItem.icon && <span className="text-belize-blue">{subItem.icon}</span>}
                  <span className="flex-1">{subItem.label}</span>
                </a>
              )}
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const MobileMenuItem = ({ 
    icon, 
    children, 
    to, 
    href,
    onClick, 
    hasHighlight = false,
    hasSubmenu = false,
    submenuItems = []
  }: { 
    icon?: React.ReactNode; 
    children: React.ReactNode; 
    to?: string; 
    href?: string;
    onClick?: () => void; 
    hasHighlight?: boolean;
    hasSubmenu?: boolean;
    submenuItems?: (NavItemLink | NavItemScroll)[];
  }) => {
    const [isOpen, setIsOpen] = useState(false);

    if (hasSubmenu) {
      const submenuId = `mobile-submenu-${String(children).toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
      return (
        <div className="space-y-1">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls={submenuId}
            className={cn(
              "flex w-full items-center justify-between gap-3 py-3 px-3 rounded-md transition-colors cursor-pointer",
              hasHighlight ? "text-belize-blue font-medium" : "text-gray-700",
              "hover:bg-gray-50 active:bg-gray-100"
            )}
          >
            <div className="flex items-center gap-3">
              {icon && <span className="text-belize-blue">{icon}</span>}
              <span className="flex-1">{children}</span>
            </div>
            <ChevronRight className={cn("h-4 w-4 text-gray-400 transition-transform", isOpen && "rotate-90")} />
          </button>
          
          {isOpen && (
            <div id={submenuId} className="pl-10 space-y-1">
              {submenuItems.map((item, index) => (
                <MobileMenuItem
                  key={index}
                  icon={item.icon}
                  to={item.type === "link" ? item.to : undefined}
                  href={item.type === "scroll" ? item.href : undefined}
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
        !(to || href) && "hover:bg-gray-50 active:bg-gray-100"
      )}>
        {icon && <span className="text-belize-blue">{icon}</span>}
        <span className="flex-1">{children}</span>
        {(to || href) && <ChevronRight className="h-4 w-4 text-gray-400" />}
      </div>
    );

    if (to) {
      return (
        <SheetClose asChild>
          <Link to={to} className="block" onClick={onClick}>
            {content}
          </Link>
        </SheetClose>
      );
    }

    if (href) {
      return (
        <SheetClose asChild>
          <a href={href} className="block" onClick={onClick}>
            {content}
          </a>
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

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "border-b border-belize-green/10 bg-white/85 shadow-soft backdrop-blur-md py-2" 
          : "bg-white/70 backdrop-blur-md py-3 md:py-4"
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
                      "rounded-full px-4 py-2 text-[15px] font-medium transition-colors",
                      location.pathname === item.to 
                        ? "text-belize-green" 
                        : "text-gray-700 hover:bg-belize-green/5 hover:text-belize-green"
                    )}
                  >
                    {item.label}
                  </Link>
                ) : item.type === "dropdown" ? (
                  <NavDropdown item={item} />
                ) : (
                  <a
                    href={item.href}
                    onClick={(event) => {
                      item.onSelect?.();
                      if (location.pathname === "/") {
                        event.preventDefault();
                        item.action();
                      }
                    }}
                    className="rounded-full px-4 py-2 text-[15px] font-medium text-gray-700 transition-colors hover:bg-belize-green/5 hover:text-belize-green"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="hidden md:flex items-center ml-4 space-x-2">
          <Button asChild variant="belizeGradient">
            <Link
              to="/monthly-investment"
              onClick={() => trackInvestmentClick("navbar_primary", "monthly_investment")}
            >
              <PiggyBank className="h-4 w-4" />
              Invest Today
            </Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-belize-blue md:hidden">
              <Menu size={24} />
              <span className="sr-only">Open main menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="p-0 w-[85%] max-w-[300px] border-none"
            aria-labelledby="mobile-nav-title"
            aria-describedby="mobile-nav-description"
          >
            <SheetHeader className="sr-only">
              <SheetTitle id="mobile-nav-title">Main navigation</SheetTitle>
              <SheetDescription id="mobile-nav-description">
                Browse Belize Kids pages, projects, clinic updates, and contact links.
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col h-full bg-white">
              <div className="flex items-center justify-between border-b p-4">
                <Link to="/" className="flex items-center">
                  <img 
                    src="/lovable-uploads/cc1bb947-c2e0-4bd5-8ffc-d1667dfb614e.png" 
                    alt="BelizeKIDS.ORG Logo" 
                    className="h-8 w-auto"
                  />
                </Link>
              </div>
              
              <div className="flex-1 overflow-auto py-2 px-1">
                <div className="space-y-1">
                  {mainNavItems.map((item, index) => {
                    if (isNavDropdown(item)) {
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
                          to={isNavLink(item) ? item.to : undefined}
                          href={!isNavLink(item) ? item.href : undefined}
                          onClick={
                            isNavLink(item)
                              ? item.onSelect
                              : () => {
                                  item.onSelect?.();
                                  if (location.pathname === "/") {
                                    item.action();
                                  }
                                }
                          }
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
                  <Button asChild variant="belizeGradient" size="lg" className="w-full">
                    <Link
                      to="/monthly-investment"
                      className="block w-full"
                      onClick={() => trackInvestmentClick("navbar_mobile_footer", "monthly_investment")}
                    >
                      Invest Today
                    </Link>
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
