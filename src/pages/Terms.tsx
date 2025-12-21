
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Website Usage & Donation Terms | Belize Kids</title>
        <meta name="description" content="Read our terms of service covering website usage, donation policies, intellectual property rights, and legal agreements for supporters of Belize Kids nonprofit organization." />
        <meta property="og:title" content="Terms of Service - Website Usage & Donation Terms | Belize Kids" />
        <meta property="og:description" content="Read our terms of service covering website usage, donation policies, intellectual property rights, and legal agreements for supporters of Belize Kids nonprofit organization." />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="terms of service, donation terms, website terms, legal agreement, nonprofit terms, user agreement" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://belizekids.org/terms" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Navbar />
        
        <main className="pt-20 pb-16">
          <div className="container-custom max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
              
              <div className="space-y-8 text-gray-700 leading-relaxed">
                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
                  <p>
                    Welcome to the Belize Kids website (the "Site"), located at https://belizekids.org/. By accessing and using this Site, you agree to be bound by the following Terms of Service ("Terms") and all applicable laws and regulations. If you do not agree with any part of these Terms, you are prohibited from using or accessing this Site. The materials contained in this Site are protected by applicable copyright and trademark law.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Use of the Site</h2>
                  <p>
                    Belize Kids grants you a limited, non-exclusive, revocable license to access and make personal, non-commercial use of the Site. This license does not include any resale or commercial use of this Site or its contents.
                  </p>
                  <p>
                    You agree not to use the Site for any purpose that is unlawful or prohibited by these Terms. You may not:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Use the Site in any manner that could damage, disable, overburden, or impair the Site or interfere with any other party's use and enjoyment of the Site.</li>
                    <li>Attempt to gain unauthorized access to any part of the Site, or any systems or networks connected to the Site.</li>
                    <li>Use any automated device, process, or means to access the Site for any purpose, including monitoring or copying any of the material on the Site.</li>
                    <li>Reproduce, duplicate, copy, sell, resell, or otherwise exploit for any commercial purposes any portion of the Site, use of the Site, or access to the Site without express written consent from us.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Intellectual Property Rights</h2>
                  <p>
                    All content included on the Site, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the Site, is the property of Belize Kids or its content suppliers and is protected by copyright, trademark, and other laws that protect intellectual property and proprietary rights.
                  </p>
                  <p>
                    You may print or download a single copy of materials from the Site for your personal, non-commercial use only, provided you keep intact all copyright and other proprietary notices.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Donations</h2>
                  <p>
                    All donations made through the Site are voluntary and non-refundable. Belize Kids is a registered 501(c)(3) non-profit organization, and all donations are tax-deductible to the extent allowed by law. We use secure, third-party payment processors to handle all donation transactions. While we strive to ensure all donations are used effectively to support our mission, we cannot guarantee that donations will be used for a specific project unless explicitly stated.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Links to Third-Party Websites</h2>
                  <p>
                    The Site may contain links to other websites ("Linked Sites"). The Linked Sites are not under the control of Belize Kids, and Belize Kids is not responsible for the contents of any Linked Site, including without limitation any link contained in a Linked Site, or any changes or updates to a Linked Site. Belize Kids is providing these links to you only as a convenience, and the inclusion of any link does not imply endorsement by Belize Kids of the site or any association with its operators. We encourage you to be aware when you leave our Site and to read the terms and conditions and privacy policies of any other site that you visit.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Disclaimer of Warranties</h2>
                  <p className="uppercase font-medium">
                    THE SITE AND ALL INFORMATION, CONTENT, MATERIALS, AND SERVICES INCLUDED ON OR OTHERWISE MADE AVAILABLE TO YOU THROUGH THIS SITE ARE PROVIDED BY BELIZE KIDS ON AN "AS IS" AND "AS AVAILABLE" BASIS. BELIZE KIDS MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THE SITE OR THE INFORMATION, CONTENT, MATERIALS, OR SERVICES INCLUDED ON OR OTHERWISE MADE AVAILABLE TO YOU THROUGH THE SITE. YOU EXPRESSLY AGREE THAT YOUR USE OF THIS SITE IS AT YOUR SOLE RISK.
                  </p>
                  <p className="uppercase font-medium">
                    TO THE FULL EXTENT PERMISSIBLE BY APPLICABLE LAW, BELIZE KIDS DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. BELIZE KIDS DOES NOT WARRANT THAT THE SITE, ITS SERVERS, OR E-MAIL SENT FROM BELIZE KIDS ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
                  <p className="uppercase font-medium">
                    IN NO EVENT SHALL BELIZE KIDS, ITS DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING, BUT NOT LIMITED TO, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (I) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SITE; (II) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SITE; (III) ANY CONTENT OBTAINED FROM THE SITE; AND (IV) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY, WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Indemnification</h2>
                  <p>
                    You agree to indemnify, defend, and hold harmless Belize Kids, its officers, directors, employees, agents, and third parties, for any losses, costs, liabilities, and expenses (including reasonable attorney's fees) relating to or arising out of your use of or inability to use the Site or services, your violation of any terms of this Agreement or your violation of any rights of a third party, or your violation of any applicable laws, rules, or regulations.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Governing Law and Jurisdiction</h2>
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions. You agree that any legal action or proceeding between you and Belize Kids for any purpose concerning these Terms or the parties' obligations hereunder shall be brought exclusively in a federal or state court of competent jurisdiction sitting in Santa Clara County, California.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to Terms</h2>
                  <p>
                    Belize Kids reserves the right, in its sole discretion, to change the Terms under which the Site is offered. The most current version of the Terms will supersede all previous versions. We encourage you to periodically review the Terms to stay informed of our updates. Your continued use of the Site following the posting of revised Terms means that you accept and agree to the changes.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Terms;
