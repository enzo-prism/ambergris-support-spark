
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Leadership: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Leadership - Belize Kids.org</title>
        <meta name="description" content="Meet the leadership team dedicated to improving the lives of children in Belize" />
        <meta property="og:title" content="Leadership - Belize Kids.org" />
        <meta property="og:description" content="Meet the leadership team dedicated to improving the lives of children in Belize" />
        <meta property="og:image" content="/lovable-uploads/812b0d25-46e7-4113-9dde-e057f9d49833.png" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      <main className="pt-20">
        <section className="py-16 bg-white">
          <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Introduction */}
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-belize-green">Leadership</h1>
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
                <h2 className="text-3xl font-bold mb-12 text-belize-green text-center">Meet Our Leaders</h2>

                {/* Don Listwin */}
                <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md p-8 mb-12">
                  <h3 className="text-2xl font-bold mb-2 text-belize-green">Don Listwin, Co-Founder</h3>
                  <div className="prose prose-lg max-w-none text-gray-700">
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
                  </div>
                </div>

                {/* Hilary Valentine */}
                <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md p-8 mb-12">
                  <h3 className="text-2xl font-bold mb-2 text-belize-green">Hilary Valentine, Co-Founder</h3>
                  <div className="prose prose-lg max-w-none text-gray-700">
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
                  </div>
                </div>

                {/* Rebecca Coutant */}
                <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md p-8 mb-12">
                  <h3 className="text-2xl font-bold mb-2 text-belize-green">Rebecca Coutant, Co-Executive Director in Belize</h3>
                  <div className="prose prose-lg max-w-none text-gray-700">
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
                  </div>
                </div>

                {/* Gil Nunez */}
                <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md p-8 mb-12">
                  <h3 className="text-2xl font-bold mb-2 text-belize-green">Gil Nunez, Treasurer in Belize</h3>
                  <div className="prose prose-lg max-w-none text-gray-700">
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
                  </div>
                </div>

                {/* Jeff Spiegel */}
                <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md p-8 mb-12">
                  <h3 className="text-2xl font-bold mb-2 text-belize-green">Jeff Spiegel, Co-Executive Director in Belize</h3>
                  <div className="prose prose-lg max-w-none text-gray-700">
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
                  </div>
                </div>

                {/* Mark Evans */}
                <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md p-8 mb-12">
                  <h3 className="text-2xl font-bold mb-2 text-belize-green">Mark Evans, Secretary (US Board)</h3>
                  <div className="prose prose-lg max-w-none text-gray-700">
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
                  </div>
                </div>
              </div>

              {/* US Board of Directors */}
              <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md p-8 mb-12">
                <h2 className="text-3xl font-bold mb-6 text-belize-green">Our US Board of Directors</h2>
                <div className="prose prose-lg max-w-none text-gray-700 mb-6">
                  <p>
                    Belize Kids is proudly registered as a 501(c)(3) non-profit organization in the United States. 
                    Our US board of directors plays a crucial role in guiding the organization's strategic direction 
                    and ensuring financial transparency. The board includes:
                  </p>
                </div>
                <ul className="list-none space-y-2 mb-6 text-lg">
                  <li className="flex items-center">
                    <span className="font-bold text-belize-green mr-2">•</span>
                    <span className="font-bold">Don Listwin</span> – President
                  </li>
                  <li className="flex items-center">
                    <span className="font-bold text-belize-green mr-2">•</span>
                    <span className="font-bold">Hilary Valentine</span> – Treasurer
                  </li>
                  <li className="flex items-center">
                    <span className="font-bold text-belize-green mr-2">•</span>
                    <span className="font-bold">Mark Evans</span> – Secretary
                  </li>
                </ul>
                <p className="text-lg text-gray-700">
                  Together, they bring a wealth of experience and a shared passion for making 
                  a difference in the lives of Belizean children.
                </p>
              </div>

              {/* Shared Commitment */}
              <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md p-8 mb-12">
                <h2 className="text-3xl font-bold mb-6 text-belize-green">A Shared Commitment to Community</h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>
                    Our leaders are not just figureheads—they are deeply involved in the day-to-day work of Belize Kids. 
                    From partnering with local businesses to spearheading projects like free eye clinics and school 
                    refurbishments, they are hands-on in their approach. Each leader's unique background and personal 
                    connection to Belize enrich our ability to serve the community effectively.
                  </p>
                  <p>
                    Whether through global expertise or local knowledge, our leadership team is united by one goal: 
                    to create a brighter future for the children of Belize.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="text-center border-t pt-10">
                <div className="mb-6">
                  <p className="font-bold text-xl text-belize-green">Belize Kids.Org</p>
                  <p className="text-gray-700">TAX ID 81-2841433</p>
                  <p className="text-gray-700">PO BOX 620134</p>
                  <p className="text-gray-700">Woodside, CA 94062</p>
                </div>
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
