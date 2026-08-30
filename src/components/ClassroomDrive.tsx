
import React from "react";
import { Button } from "@/components/ui/button";
import { trackDonateClick } from "@/lib/analytics";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, School, DollarSign, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Image } from "@/components/ui/image";

const RAISED_USD = 13551;
const GOAL_USD = 12500;

const ClassroomDrive: React.FC = () => {
  const scrollToDonate = () => {
    const donateElement = document.getElementById("donate");
    if (donateElement) {
      donateElement.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  const fundedPercent = Math.round((RAISED_USD / GOAL_USD) * 100);
  const barPercent = Math.min(fundedPercent, 100);
  const goalMet = RAISED_USD >= GOAL_USD;

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <Reveal className="mb-10 text-center">
          <Badge variant="coral" className="mb-4 gap-2 px-4 py-2 text-sm font-semibold">
            <School className="h-5 w-5" />
            Current Initiative
          </Badge>
          <h2 className="mb-4 text-3xl font-bold text-belize-blue md:text-4xl">New Horizon School Classroom Addition</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-700">
            Help us build an additional classroom at ACB school to support the growing educational needs in San Pedro.
          </p>
        </Reveal>

        <div className="grid items-start gap-8 md:grid-cols-12">
          {/* Left Content */}
          <Reveal className="md:col-span-7">
            <Card className="overflow-hidden border-none shadow-soft">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className="relative h-56 md:h-72">
                    <Image 
                      src="https://imgur.com/IJKaTAA" 
                      alt="New Horizon School in Belize" 
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="relative h-56 md:h-72">
                    <Image 
                      src="https://imgur.com/44skZfu" 
                      alt="School Construction in Belize" 
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <p className="text-gray-700 mb-4">
                    <span className="font-bold">Hello Belize Kids supporters,</span><br />
                    This is Don Listwin, founder of BKO. I want to thank you for all the support we received during the pandemic. 
                    Together we fed 175 families every week for over 2 years. Gratitude!
                  </p>
                  <p className="text-gray-700 mb-4">
                    The island is back on the move and growing.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Together, we have built four kindergarten rooms, refurbished two schools, and built a community park.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Most recently, my wife and I built the BELIZE STANFORD EYE CLINIC to give free eyecare to San Pedro residents.
                  </p>
                  <p className="text-gray-700 mb-4">
                    As the island is growing, the need for more classrooms is also growing.
                  </p>
                  <p className="text-gray-700 font-bold text-lg mb-4 text-center">
                    WE ARE ASKING FOR YOUR HELP.
                  </p>
                </div>
              </CardContent>
            </Card>
          </Reveal>

          {/* Right Content */}
          <Reveal className="md:col-span-5" delay={120}>
            <Card className="h-full overflow-hidden border-none shadow-soft">
              <div className="bg-gradient-to-r from-belize-green to-belize-blue p-6">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <DollarSign className="h-6 w-6" />
                  Classroom Fundraiser
                </h3>
              </div>
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-medium text-gray-700">Raised</span>
                    <span className="font-bold text-belize-green">${RAISED_USD.toLocaleString()}</span>
                  </div>
                  <div className="h-4 w-full overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="h-full rounded-full bg-belize-green"
                      style={{ width: `${barPercent}%` }}
                      role="progressbar"
                      aria-valuenow={barPercent}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`Classroom fundraiser ${fundedPercent}% funded`}
                    />
                  </div>
                  <div className="mt-2 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
                    <span className="font-medium text-gray-700">Goal ${GOAL_USD.toLocaleString()}</span>
                    {goalMet && (
                      <Badge variant="default" className="whitespace-nowrap bg-belize-green text-white">
                        Goal reached · {fundedPercent}% funded
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 bg-belize-green text-white p-2 rounded-full shadow-md mt-1">
                      <School className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        The town needs the support of $12,500 USD to build an additional classroom at ACB school.
                        As you know, when classrooms are available, the federal government funds the teachers.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 bg-belize-coral text-white p-2 rounded-full shadow-md mt-1">
                      <Heart className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        My wife and I have contributed $2,500 USD to kickstart the project, and we are asking for your support to complete.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 bg-belize-blue text-white p-2 rounded-full shadow-md mt-1">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        And, as always, your donation is tax-deductible as BKO is a US 501(c)(3) organization.
                        <br />
                        <span className="font-semibold">Belize Kids TAX ID 81-2841433</span>
                        <br />
                        PO BOX 620134
                        <br />
                        Woodside, CA 94062
                      </p>
                    </div>
                  </div>
                </div>

                <Button 
                  variant="belizeCoral"
                  size="lg"
                  className="w-full"
                  onClick={() => {
                    trackDonateClick("classroom_drive", "donate_section");
                    scrollToDonate();
                  }}
                >
                  <DollarSign className="h-5 w-5" />
                  Donate Now
                </Button>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ClassroomDrive;
