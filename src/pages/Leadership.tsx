
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeaderCard from "@/components/leadership/LeaderCard";
import BoardSection from "@/components/leadership/BoardSection";
import SharedCommitment from "@/components/leadership/SharedCommitment";
import { Separator } from "@/components/ui/separator";
import { 
  Briefcase, 
  HeartHandshake, 
  GraduationCap, 
  Globe, 
  Lightbulb,
  UserCog
} from "lucide-react";

const Leadership: React.FC = () => {
  const boardMembers = [
    { name: "Don Listwin", role: "President" },
    { name: "Hilary Valentine", role: "Treasurer" },
    { name: "Mark Evans", role: "Secretary" },
  ];

  return (
    <>
      <Helmet>
        <title>Our Team</title>
        <meta name="description" content="Meet the leadership team dedicated to improving the lives of children in Belize" />
        <meta property="og:title" content="Our Team" />
        <meta property="og:description" content="Meet the leadership team dedicated to improving the lives of children in Belize" />
        <meta property="og:image" content="/lovable-uploads/812b0d25-46e7-4113-9dde-e057f9d49833.png" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20 bg-gradient-to-b from-white to-belize-light/30">
        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Introduction */}
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-belize-green mb-4">Leadership</h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Belize Kids, our leadership team is a diverse group of passionate individuals united by a shared 
                commitment to improving the lives of children in Belize. With backgrounds spanning technology, 
                philanthropy, education, and local business, our leaders bring a wealth of experience and a deep 
                connection to the communities we serve. Together, they work to ensure that every child on Ambergris 
                Caye—and beyond—has access to the education, healthcare, and opportunities they deserve.
              </p>
            </div>

            <div className="space-y-20">
              {/* Meet Our Leaders */}
              <div>
                <h2 className="text-3xl font-bold text-belize-green mb-12">Meet Our Leaders</h2>

                <div className="grid grid-cols-1 gap-8 mb-16">
                  {/* Don Listwin */}
                  <LeaderCard 
                    name="Don Listwin" 
                    role="Co-Founder"
                    icon={Briefcase}
                    bio={
                      <>
                        <p>
                          Don Listwin is the visionary behind Belize Kids. With a distinguished career in technology, 
                          including a decade at Cisco Systems and leadership in building the mobile internet at Openwave, 
                          Don has always been at the forefront of innovation. In 2004, he shifted his focus to philanthropy, 
                          founding the Canary Foundation, the world's largest research initiative for early cancer detection.
                        </p>
                        <p>
                          An avid scuba diver, Don and his wife fell in love with Ambergris Caye, where they now live part-time. 
                          Over the years, they have invested deeply in the island's children by building and refurbishing schools 
                          and parks. In founding Belize Kids, Don sought to partner more closely with local businesses to meet 
                          the needs of the community's youngest members. His leadership is driven by a passion for creating 
                          lasting, positive change.
                        </p>
                      </>
                    }
                  />

                  {/* Hilary Valentine */}
                  <LeaderCard 
                    name="Hilary Valentine" 
                    role="Co-Founder"
                    icon={HeartHandshake}
                    bio={
                      <>
                        <p>
                          Hilary Valentine brings a unique blend of design expertise and philanthropic leadership to Belize Kids. 
                          As a partner at Black & White Design, she has a keen eye for creating impactful solutions. Hilary's 
                          dedication to education and children's welfare is evident in her extensive board leadership, including 
                          serving as Chair of the Board of Directors for Room to Read from 2008 to 2010 and now as Emeritus Board Chair.
                        </p>
                        <p>
                          She also serves on the boards of the Valentine Family Foundation and the Canary Foundation. With a BS in 
                          Psychology from St. Lawrence University, Hilary's work is guided by a deep understanding of human needs and 
                          a commitment to fostering growth and opportunity for children around the world.
                        </p>
                      </>
                    }
                  />

                  {/* Rebecca Coutant */}
                  <LeaderCard 
                    name="Rebecca Coutant" 
                    role="Co-Executive Director in Belize"
                    icon={Globe}
                    bio={
                      <>
                        <p>
                          Rebecca Coutant's journey to Belize began after a successful career as a bond trader at Lehman Brothers 
                          in New York. At 32, she visited Ambergris Caye and was captivated by the island and its people. Now a 
                          full-time resident of 16 years, Rebecca has immersed herself in the community, managing a popular bar and 
                          restaurant before launching Belize's most widely read independent blog, SanPedroScoop.com.
                        </p>
                        <p>
                          Through her writing, she explores the island's hidden gems and champions local causes. Her deep connection 
                          to the people of Ambergris Caye and her passion for storytelling make her an invaluable leader in driving 
                          Belize Kids' mission forward.
                        </p>
                      </>
                    }
                  />

                  {/* Gil Nunez */}
                  <LeaderCard 
                    name="Gil Nunez" 
                    role="Treasurer in Belize"
                    icon={Lightbulb}
                    bio={
                      <>
                        <p>
                          With over 20 years of experience in Belize's diving industry, Gil Nunez is a true steward of the island's 
                          natural beauty and its people. Starting as a boat-hand at age 13, Gil quickly rose through the ranks, 
                          becoming a NAUI and PADI instructor by 1999. His expertise in diving instruction is unmatched, and he now 
                          manages Canary Cove and Poseidon Diving Adventures, where he specializes in private charters.
                        </p>
                        <p>
                          As treasurer, Gil brings not only his financial acumen but also his deep ties to the local community, 
                          ensuring that Belize Kids' resources are used effectively to benefit the children of Ambergris Caye.
                        </p>
                      </>
                    }
                  />

                  {/* Jeff Spiegel */}
                  <LeaderCard 
                    name="Jeff Spiegel" 
                    role="Co-Executive Director in Belize"
                    icon={GraduationCap}
                    bio={
                      <>
                        <p>
                          Jeff Spiegel's path to Belize was as unique as his contributions to the island. After a decade running a 
                          successful independent record label in San Francisco, Jeff moved to Ambergris Caye 14 years ago and opened 
                          Azul Resort & Rojo Lounge, where he served as executive chef for 10 years. Now, he is developing a remote 
                          fly-fishing camp on the island's northern leeward side.
                        </p>
                        <p>
                          Jeff's entrepreneurial spirit, creativity, and deep understanding of the local tourism industry make him 
                          a dynamic leader for Belize Kids, where he channels his passion for the island into creating opportunities 
                          for its children.
                        </p>
                      </>
                    }
                  />

                  {/* Mark Evans */}
                  <LeaderCard 
                    name="Mark Evans" 
                    role="Secretary (US Board)"
                    icon={UserCog}
                    bio={
                      <>
                        <p>
                          Mark Evans brings 40 years of experience in advertising, marketing, sales, and business analytics to the 
                          Belize Kids board. As a co-founder of an advertising agency and a former executive at tech giants like 
                          Netscape, eBay, and Google, Mark has a proven track record of driving strategic growth.
                        </p>
                        <p>
                          His expertise in marketing and business development is invaluable to Belize Kids as the organization 
                          expands its reach and impact. Mark's commitment to using his skills for social good ensures that 
                          Belize Kids remains focused on its mission while operating with transparency and efficiency.
                        </p>
                      </>
                    }
                  />
                </div>
              </div>

              {/* US Board of Directors */}
              <div className="mb-16">
                <BoardSection members={boardMembers} />
              </div>

              {/* Shared Commitment */}
              <div className="mb-16">
                <SharedCommitment />
              </div>

              {/* Contact Information */}
              <div className="text-center border-t border-belize-sand/30 pt-10 mt-16">
                <div className="inline-flex items-center justify-center gap-2 mb-6">
                  <HeartHandshake className="text-belize-green" />
                  <p className="font-bold text-xl text-belize-green">Belize Kids.Org</p>
                </div>
                <div className="mb-4">
                  <p className="text-gray-700">TAX ID 81-2841433</p>
                  <p className="text-gray-700">PO BOX 620134</p>
                  <p className="text-gray-700">Woodside, CA 94062</p>
                </div>
                <Separator className="max-w-xs mx-auto mb-4 bg-belize-sand/30" />
                <div className="text-sm text-gray-500">
                  Copyright © 2025 Belize Kids. All rights reserved.
                  <div className="flex justify-center space-x-4 mt-2">
                    <a href="/#" className="hover:text-belize-teal transition-colors">Privacy Policy</a>
                    <span>|</span>
                    <a href="/#" className="hover:text-belize-teal transition-colors">Cookie Policy</a>
                    <span>|</span>
                    <a href="/#" className="hover:text-belize-teal transition-colors">Privacy Settings</a>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Leadership;
