
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, School, DollarSign, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";

const ClassroomDrive: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const scrollToDonate = () => {
    const donateElement = document.getElementById("donate");
    if (donateElement) {
      donateElement.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-belize-coral/10 px-4 py-2 rounded-full mb-4">
            <School className="h-5 w-5 text-belize-coral" />
            <span className="text-belize-coral font-semibold">Current Initiative</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-belize-blue mb-4">New Horizon School Classroom Addition</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Help us build an additional classroom at ACB school to support the growing educational needs in San Pedro.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-12 gap-8 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Content */}
          <motion.div className="md:col-span-7" variants={itemVariants}>
            <Card className="overflow-hidden shadow-lg border-none">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className="h-60 md:h-auto">
                    <Image 
                      src="https://imgur.com/44skZfu" 
                      alt="New Horizon School in Belize" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-60 md:h-auto">
                    <Image 
                      src="https://imgur.com/lQ7xSfS" 
                      alt="School Construction in Belize" 
                      className="w-full h-full object-cover"
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
          </motion.div>

          {/* Right Content */}
          <motion.div className="md:col-span-5" variants={itemVariants}>
            <Card className="overflow-hidden shadow-lg border-none h-full">
              <div className="bg-gradient-to-r from-belize-green to-belize-blue p-6">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <DollarSign className="h-6 w-6" />
                  Classroom Fundraiser
                </h3>
              </div>
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">Raised</span>
                    <span className="text-belize-green font-bold">$13,551</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                    <div className="bg-belize-green h-full rounded-full" style={{ width: '108%' }}></div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-700 font-medium">Goal</span>
                    <span className="text-gray-700 font-medium">$12,500</span>
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
                  className="w-full bg-belize-coral hover:bg-belize-coral/90 py-6 text-lg"
                  onClick={scrollToDonate}
                >
                  <DollarSign className="mr-2 h-5 w-5" />
                  Donate Now
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClassroomDrive;
