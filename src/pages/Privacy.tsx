
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Data Protection & Security | BelizeKIDS.ORG</title>
        <meta name="description" content="Read our comprehensive privacy policy outlining how Belize Kids protects donor information, website data collection practices, and your rights regarding personal information." />
        <meta property="og:title" content="Privacy Policy - Data Protection & Security | BelizeKIDS.ORG" />
        <meta property="og:description" content="Read our comprehensive privacy policy outlining how Belize Kids protects donor information, website data collection practices, and your rights regarding personal information." />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <meta name="keywords" content="privacy policy, data protection, donor privacy, information security, GDPR compliance" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://belizekids.org/privacy" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <div className="bg-gradient-to-b from-belize-green/10 to-white py-16">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-belize-green mb-8">Privacy Policy</h1>
                <p className="text-gray-600 mb-8">Last Updated: December 2024</p>
                
                <div className="prose prose-lg max-w-none space-y-8">
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Our Commitment to Your Privacy</h2>
                    <p className="text-gray-700 leading-relaxed">
                      Belize Kids ("we," "us," or "our") is committed to protecting the privacy of our website visitors, donors, and supporters. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website, https://belizekids.org/ (the "Site"). We value your trust and are dedicated to being transparent about our data practices. As a registered 501(c)(3) non-profit organization, maintaining your trust is a cornerstone of our mission.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We collect information that you voluntarily provide to us and information that is automatically collected when you use our Site.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">a. Information You Provide to Us:</h3>
                    <div className="mb-4">
                      <p className="text-gray-700 leading-relaxed mb-2">
                        <strong>Personal Information:</strong> We may collect personally identifiable information such as your name, email address, postal address, and telephone number when you:
                      </p>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Make a donation.</li>
                        <li>Sign up for our newsletter or mailing list.</li>
                        <li>Contact us through our online forms or by email.</li>
                      </ul>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>Donation Information:</strong> When you make a donation, we collect information necessary to process your payment, such as your credit card information. Please note that we use secure, third-party payment processors to handle these transactions, and we do not store your full credit card details on our servers.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3">b. Information We Collect Automatically:</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>Log and Usage Data:</strong> Like most websites, we may automatically collect information that your browser sends whenever you visit our Site. This may include your computer's Internet Protocol (IP) address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages, and other statistics.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Cookies and Tracking Technologies:</strong> We may use "cookies" and similar tracking technologies to collect information about your activity on our Site. Cookies are small data files stored on your device that help us improve our Site and your experience. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We use the information we collect for various purposes, including to:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>Process and acknowledge your donations.</li>
                      <li>Send you tax receipts and other relevant information about your contributions.</li>
                      <li>Communicate with you about our work, upcoming events, and other news.</li>
                      <li>Respond to your inquiries and provide support.</li>
                      <li>Improve and personalize your experience on our Site.</li>
                      <li>Analyze website traffic and usage to improve our services.</li>
                      <li>Comply with legal and regulatory requirements.</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Sharing Your Information</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Belize Kids will not sell, rent, or trade your personal information with any third parties. We may share your information only in the following limited circumstances:
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>With Service Providers:</strong> We may share your information with trusted third-party vendors who perform services on our behalf, such as payment processing, data analysis, email delivery, and website hosting. These service providers are obligated to protect your information and are not authorized to use it for any other purpose.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>For Legal Reasons:</strong> We may disclose your information if we are required to do so by law or in the good faith belief that such action is necessary to comply with a legal obligation, protect and defend our rights or property, or protect the personal safety of our users or the public.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
                    <p className="text-gray-700 leading-relaxed">
                      We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. We use a variety of security technologies and procedures to help protect your personal information, including secure socket layer (SSL) technology for processing donations. However, no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee its absolute security.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Data Protection Rights</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Depending on your location, you may have the following rights regarding your personal information:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li><strong>The right to access:</strong> You have the right to request copies of your personal data that we hold.</li>
                      <li><strong>The right to rectification:</strong> You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
                      <li><strong>The right to erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
                      <li><strong>The right to restrict processing:</strong> You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                      <li><strong>The right to object to processing:</strong> You have the right to object to our processing of your personal data, under certain conditions.</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      To exercise any of these rights, please contact us at the email address provided below.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Links to Other Websites</h2>
                    <p className="text-gray-700 leading-relaxed">
                      Our Site may contain links to other websites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children's Privacy</h2>
                    <p className="text-gray-700 leading-relaxed">
                      Our Site is not intended for children under the age of 13, and we do not knowingly collect personally identifiable information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete that information from our servers.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Privacy Policy</h2>
                    <p className="text-gray-700 leading-relaxed">
                      We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this policy. We encourage you to review this Privacy Policy periodically for any changes.
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Privacy;
