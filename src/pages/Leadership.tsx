
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Leadership: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Leadership - BelizeKids.org</title>
        <meta name="description" content="Meet the leadership team behind BelizeKids.org" />
      </Helmet>
      <Navbar />
      <main className="pt-20">
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto mb-12 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-belize-blue">Our Leadership</h1>
              <p className="text-lg text-gray-700">
                Meet the dedicated team behind BelizeKids.org who are committed to improving the lives 
                of children in Belize through education, healthcare, and community development.
              </p>
            </div>

            <div className="grid gap-12 mb-20">
              {/* Founders Section */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-belize-blue text-center">Co-Founders</h2>
                <div className="grid md:grid-cols-2 gap-10">
                  {/* Don Listwin */}
                  <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-belize-blue">Don Listwin</h3>
                      <p className="text-belize-teal font-medium mb-4">Co-Founder</p>
                      <div className="text-gray-700 space-y-4">
                        <p>
                          Don Listwin is founder of BelizeKids.Org. Don spent his career building the Internet 
                          highlighted by a decade at Cisco Systems. Following a public company stint at Openwave 
                          building the mobile Internet, Don left the high-tech world to focus on cancer research 
                          in the field of early detection.
                        </p>
                        <p>
                          In 2004, Don created the Canary Foundation which has emerged as the world's largest 
                          research initiative in early cancer detection. An avid scuba diver, Don and his wife 
                          bought property on Ambergris Caye and now live part time in Belize.
                        </p>
                        <p>
                          Over the past 5 years, Don and his wife have invested in the children on the island by 
                          building and refurbishing schools and parks. In an effort to partner more closely with 
                          businesses on the island to support kids needs, Don founded BelizeKids.Org.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Hilary Valentine */}
                  <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-belize-blue">Hilary Valentine</h3>
                      <p className="text-belize-teal font-medium mb-4">Co-Founder</p>
                      <div className="text-gray-700 space-y-4">
                        <p>
                          Hilary is a partner at Black & White Design and currently serves on the Board of 
                          Directors of the Valentine Family Foundation and the Canary Foundation.
                        </p>
                        <p>
                          Hilary served on the Room to Read Board of Directors from 2003 to 2012 and was Co-Chair 
                          of the Board of Directors from 2005 to 2008 and was Chair of the Board of Directors 
                          from 2008 to 2010. Hilary is currently the Room to Read Emeritus Board Chair.
                        </p>
                        <p>
                          She also serves on the Emeritus Board of Breast Cancer Connections. Hilary graduated 
                          with a BS in Psychology from St. Lawrence University.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Belize Leadership */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-belize-blue text-center">Leadership in Belize</h2>
                <p className="text-center text-lg mb-8">
                  In Belize, the founders have enthusiastically enlisted the input and assistance of the following community members.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Rebecca Coutant */}
                  <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-belize-blue">Rebecca Coutant</h3>
                      <p className="text-belize-teal font-medium mb-4">Co-Executive Director in Belize</p>
                      <div className="text-gray-700 space-y-4">
                        <p>
                          After working as a New York bond trader at Lehman Brothers, Rebecca visited to Ambergris 
                          Caye at age 32 and fell in love with the island and the people. Soon, she was living here full-time.
                        </p>
                        <p>
                          She managed a busy bar & restaurant and now writes Belize's most popular independent blog, 
                          SanPedroScoop.com. It gives her a chance to travel Belize and meet people doing some really 
                          incredible things – on and off the radar.
                        </p>
                        <p>
                          Rebecca has lived, full time, in San Pedro for 9 years.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Gil Nunez */}
                  <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-belize-blue">Gil Nunez</h3>
                      <p className="text-belize-teal font-medium mb-4">Treasurer in Belize</p>
                      <div className="text-gray-700 space-y-4">
                        <p>
                          Gil has been working in the diving business for over 20 years in Belize. He started 
                          working part-time when he was 13 years old with Mr. Pedro as a boat-hand and first mate.
                        </p>
                        <p>
                          Over his teenage years, he became very fond of diving and completed multiple certifications 
                          including his Open Water and advanced, to Rescue Diver, Medic and Dive master before the age of 20.
                        </p>
                        <p>
                          Gil's instructional capabilities are unmatched on the island. Now he manages Canary Cove 
                          and Poseidon Diving Adventures Dive shop where they specialize in Private charters.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Jeff Spiegel */}
                  <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-belize-blue">Jeff Spiegel</h3>
                      <p className="text-belize-teal font-medium mb-4">Co-Executive Director in Belize</p>
                      <div className="text-gray-700 space-y-4">
                        <p>
                          After a decade of running a successful independent record label, Jeff moved from San 
                          Francisco down to Belize and opened a small boutique resort and restaurant, Azul Resort & Rojo Lounge.
                        </p>
                        <p>
                          He served as the executive chef of the latter for 10 years up until the spring of 2015. 
                          Currently, he is in the final stages of opening a small remote fly fishing camp on the 
                          northern leeward side of the island.
                        </p>
                        <p>
                          Jeff has lived full time on Ambergris Caye for 14 years.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* US Board */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-belize-blue text-center">U.S. Board of Directors</h2>
                <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md p-6 max-w-3xl mx-auto">
                  <p className="text-gray-700 mb-4">
                    In the USA, BelizeKids.org is a 501c(3) non-profit organization.
                  </p>
                  <p className="text-gray-700 mb-4">
                    The US board of Directors are:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li className="mb-2"><span className="font-semibold">Don Listwin</span> (President)</li>
                    <li className="mb-2"><span className="font-semibold">Hilary Valentine</span> (Treasurer)</li>
                    <li><span className="font-semibold">Mark Evans</span> (Secretary)</li>
                  </ul>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h3 className="text-xl font-bold mb-2 text-belize-blue">Mark Evans</h3>
                    <p className="text-gray-700">
                      Mark has 40 years experience in Advertising, Marketing, Sales, Business Development and 
                      Business Analytics. In addition to co-founding an advertising agency specializing in 
                      marketing strategy, public relations and advertising Mr. Evans has been an executive with 
                      various software startups as well as larger Internet tech companies such as Netscape, 
                      eBay and Google.
                    </p>
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
