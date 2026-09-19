import React from "react";
import { Link } from "react-router-dom";
import { Facebook, ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { Button } from "@/components/ui/button";
import { trackInvestmentClick, trackSocialClick } from "@/lib/analytics";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Leadership", to: "/leadership" },
  { label: "Projects", to: "/projects" },
];

const resourceLinks = [
  { label: "Current Projects", to: "/projects" },
  { label: "Vision Clinic Updates", to: "/doctors" },
  { label: "Monthly Investment", to: "/monthly-investment" },
];

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-belize-green/10 bg-gradient-to-b from-white to-belize-light/40">
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8">
          {/* Column 1: Logo + About */}
          <div className="space-y-4 md:pr-4">
            <Link to="/" className="inline-block">
              <Image
                src="/lovable-uploads/cc1bb947-c2e0-4bd5-8ffc-d1667dfb614e.png"
                alt="Belize Kids Logo"
                className="h-12 w-auto"
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-gray-600">
              Belize Kids enhances educational opportunities for children in Belize
              through sustainable infrastructure projects and complete transparency.
            </p>
            <p className="text-xs text-gray-500">
              A US 501(c)(3) nonprofit · Tax ID 81-2841433
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-gray-900">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-600 transition-colors hover:text-belize-green"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/#contact"
                  className="text-sm text-gray-600 transition-colors hover:text-belize-green"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-gray-900">
              Resources
            </h3>
            <ul className="space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-600 transition-colors hover:text-belize-green"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect + CTA */}
          <div className="space-y-4">
            <h3 className="mb-1 font-heading text-sm font-semibold uppercase tracking-wider text-gray-900">
              Get Involved
            </h3>
            <p className="text-sm text-gray-600">
              Your monthly investment goes 100% to programs for Belizean children.
            </p>
            <Button asChild variant="belizeGradient" size="sm">
              <Link
                to="/monthly-investment"
                onClick={() =>
                  trackInvestmentClick("footer", "monthly_investment")
                }
              >
                Invest Today
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/profile.php?id=100064824399858"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-belize-green/20 text-belize-green transition-colors hover:bg-belize-green hover:text-white"
                aria-label="Facebook"
                onClick={() => trackSocialClick("facebook", "footer")}
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200/70 pt-6 md:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Belize Kids. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-xs text-gray-500 transition-colors hover:text-belize-green">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-gray-500 transition-colors hover:text-belize-green">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
