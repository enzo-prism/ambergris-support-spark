import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarClock, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";
import {
  trackDoctorAppointmentClick,
  trackInvestmentClick,
} from "@/lib/analytics";

const trustChips = [
  { icon: HeartHandshake, label: "100% to programs" },
  { icon: Sparkles, label: "3,266+ scholarships" },
  { icon: ShieldCheck, label: "501(c)(3) nonprofit" },
];

const Hero: React.FC = () => {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-gradient-to-b from-belize-light via-white to-white pt-24 pb-16 md:pt-28">
      {/* Decorative background (pure CSS, no extra network request) */}
      <div className="pointer-events-none absolute inset-0 bg-grid-belize opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-belize-green/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-belize-teal/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-custom relative z-10 flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
        <div className="flex-1 text-center lg:text-left">
          <span className="section-eyebrow mb-5">
            <Sparkles className="h-3.5 w-3.5" />
            Transforming children&apos;s lives in Belize
          </span>

          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Empowering Belizean Children to Build a{" "}
            <span className="text-gradient-belize">Brighter Future</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg text-gray-600 md:text-xl lg:mx-0">
            Investing in Belizean children&apos;s education, health, and well-being
            with complete transparency and care.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Button asChild variant="belizeGradient" size="lg">
              <Link
                to="/monthly-investment"
                onClick={() => trackInvestmentClick("hero_primary", "monthly_investment")}
              >
                Invest Today
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outlineBelize" size="lg">
              <a href="/#about">Our Impact</a>
            </Button>
            <Button asChild variant="outlineTeal" size="lg">
              <Link
                to="/doctors"
                onClick={() => trackDoctorAppointmentClick("hero_secondary", "doctors")}
              >
                <CalendarClock className="h-4 w-4" />
                Vision Clinic Updates
              </Link>
            </Button>
          </div>

          <ul className="mt-9 flex flex-wrap justify-center gap-x-6 gap-y-3 lg:justify-start">
            {trustChips.map((chip) => (
              <li key={chip.label} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-belize-green/10 text-belize-green">
                  <chip.icon className="h-4 w-4" />
                </span>
                {chip.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative w-full flex-1">
          <div className="relative mx-auto w-full max-w-md animate-float">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-white/60 shadow-glow">
              <Image
                src="https://imgur.com/aFMdr3v"
                alt="Belizean children at school"
                className="h-full w-full object-cover"
                width={640}
                height={480}
                loading="eager"
                fallbackSrc="/placeholder.svg"
              />
            </div>
            <div className="absolute -bottom-5 -right-3 rounded-2xl border-l-4 border-belize-green bg-white/95 p-4 shadow-lg backdrop-blur sm:-right-6">
              <p className="text-sm font-bold text-belize-green sm:text-base">100% of Investment</p>
              <p className="text-xs text-gray-600 sm:text-sm">Directly to programs</p>
            </div>
            <div className="absolute -top-5 -left-3 hidden rounded-2xl border-l-4 border-belize-teal bg-white/95 p-4 shadow-lg backdrop-blur sm:block">
              <p className="text-sm font-bold text-belize-teal">Since 2013</p>
              <p className="text-xs text-gray-600">Serving Ambergris Caye</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
