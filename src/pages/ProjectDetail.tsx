import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, ChevronRight, FileText, Heart, BookOpen, Leaf, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ProjectDetailGallery from "@/components/ProjectDetailGallery";

const projects = [
  {
    slug: "october-vision-clinic",
    title: "Stanford Belize Vision Clinic: Transforming Eye Care in San Pedro",
    author: "Rebecca Coutant",
    date: "October 30, 2017",
    category: "healthcare",
    color: "bg-rose-500",
    icon: Heart,
    content: `
      <p>BelizeKids.org, in conjunction with the Belize Council for the Visually Impaired (BCVI), the San Pedro Lions Club, and Stanford University, established the Stanford Belize Vision Clinic (SBVC) in 2017 to address the critical need for accessible vision care on Ambergris Caye.</p>
      
      <h3 class="text-xl font-bold text-belize-green mt-6 mb-2">Foundational Partnerships</h3>
      <p>The clinic's inception was made possible through <strong>Don Listwin</strong>, founder of BelizeKids.org and the Canary Foundation, whose philanthropic vision aimed to fill systemic gaps in pediatric healthcare on the island. His collaboration with <strong>Dr. Ann Caroline Fisher</strong>, a Stanford ophthalmologist, ensured the clinic's integration into both global health education and community-specific needs.</p>
      
      <p>The SBVC operates through a unique tripartite partnership:</p>
      <ul class="list-disc pl-6 my-3 space-y-1">
        <li><strong>BelizeKids.org</strong> provides funding and logistical support</li>
        <li><strong>Stanford University</strong> contributes medical expertise through rotating teams of ophthalmologists, residents, and equipment</li>
        <li><strong>BCVI and the San Pedro Lions Club</strong> offer localized continuity of care, including subsidized eyewear and referrals for advanced treatments</li>
      </ul>
      
      <h3 class="text-xl font-bold text-belize-green mt-6 mb-2">Services and Impact</h3>
      <p>While prioritizing children, the SBVC adopts an inclusive approach:</p>
      <ul class="list-disc pl-6 my-3 space-y-1">
        <li><strong>Free comprehensive screenings</strong> for minors, including assessments for refractive errors, strabismus, amblyopia, and congenital conditions</li>
        <li><strong>Subsidized adult services</strong> initially free, later transitioning to nominal fees to offset operational costs</li>
        <li><strong>Advanced diagnostic tools</strong> such as phoropters for precise prescription determination and slit lamps for detecting anterior segment pathologies</li>
      </ul>
      
      <p>During its inaugural year (2017), the clinic conducted five sessions, serving approximately 30 patients daily. By 2020, services expanded to week-long clinics held multiple times annually.</p>
      
      <h3 class="text-xl font-bold text-belize-green mt-6 mb-2">Educational Integration</h3>
      <p>The SBVC serves as a training site for Stanford ophthalmology residents, offering hands-on experience in low-resource settings. This aligns with the <strong>Stanford Center for Innovation in Global Health</strong>'s mission to develop replicable models for international eye care.</p>
      
      <p>In 2021, Dr. Steven Binder and Dr. Natacha Villegas from Stanford resumed travel to SBVC after a COVID-related pause. They examined over 60 patients, ranging from pediatric ages to older adults, providing glasses for students and diagnosing various eye conditions.</p>
      
      <blockquote class="border-l-4 border-belize-green pl-4 italic my-4">
        "Seeing how corrective lenses could impact a student's entire learning experience was impactful. This trip grew my desire to continue providing care to patients of varying cultures and backgrounds, and to seek out other global health opportunities in the future."
        <footer class="text-sm mt-2">— Dr. Natacha Villegas, Chief Ophthalmology Resident, Stanford University</footer>
      </blockquote>
      
      <h3 class="text-xl font-bold text-belize-green mt-6 mb-2">Ongoing Challenges and Future Plans</h3>
      <p>As the sole eye clinic on Ambergris Caye, when Stanford teams are not present, patients either go without eye care or must travel to the mainland or neighboring countries. To address this gap, SBVC has trained a local ophthalmic technician to perform basic vision screening, first via Zoom and then in person.</p>
      
      <p>Future plans include:</p>
      <ul class="list-disc pl-6 my-3 space-y-1">
        <li>Expanding teleophthalmology care to link patients with Stanford and local providers</li>
        <li>Increasing the frequency of Stanford medical team visits</li>
        <li>Training more local practitioners to provide continuity of care</li>
      </ul>
      
      <p>The success of this initiative demonstrates how transnational partnerships can address pediatric health disparities and create sustainable healthcare solutions for underserved communities.</p>
    `,
    highlights: [
      "Partnership between BelizeKids.org, Stanford University, BCVI, and San Pedro Lions Club",
      "Free comprehensive eye examinations for children",
      "Training site for Stanford ophthalmology residents",
      "Only dedicated eye clinic on Ambergris Caye"
    ],
    keyNumbers: [
      { label: "Patients Served (2017)", value: "150+" },
      { label: "Daily Capacity", value: "30 patients" },
      { label: "Stanford Medical Teams", value: "Multiple annually" },
      { label: "Free Services", value: "All children" }
    ],
    references: [
      { text: "Stanford Belize Vision Clinic (SBVC)", url: "https://med.stanford.edu/ophthalmology/news-and-media/news-archive/2017_Stories/SBVC.html" },
      { text: "Training the next generation of eye care providers", url: "https://med.stanford.edu/ophthalmology/news-and-media/annual-reports/annualreport_2021/Belize-update.html" },
      { text: "Free Eye Exams by BelizeKids.Org", url: "https://ambergristoday.com/community-bulletin/2020/02/03/free-eye-exams-by-belizekids-org-at-the-lions-den/" }
    ]
  },
  {
    slug: "dollar-a-dive-program",
    title: "Belize Kids is Excited to Announce Our #DollaADive Program",
    author: "Rebecca Coutant",
    date: "November 22, 2022",
    category: "fundraising",
    color: "bg-amber-500",
    icon: FileText,
    content: `
      <p>If you have visited, you know that no single activity has been more important to tourism on Ambergris Caye than scuba diving. This has been true since the very beginning of tourism, the days of the Paradise and Holiday Hotels in the early 70's. Over the decades since, Ambergris has become a bustling tourist mecca, arguably the most popular destination in all of Belize.</p>
      <p>Our #DollaADive program is simple: for every dive conducted by participating dive shops, $1 is donated to Belize Kids.org to support our vision care and educational programs for children in Belize.</p>
      <p>Participating dive shops receive promotional materials and recognition on our website and social media channels. Most importantly, they get to contribute to the wellbeing of the children who are the future of Belize.</p>
      <p>This program exemplifies our mission to build a framework that identifies community goals and cements local relationships, providing a means for businesses to donate with confidence and complete transparency.</p>
    `,
    highlights: [
      "$1 donated per dive from participating shops",
      "Sustainable funding for vision care programs",
      "Local business involvement in community support",
      "Transparent donation process"
    ],
    keyNumbers: [
      { label: "Participating Shops", value: "8" },
      { label: "Monthly Dives", value: "1,200+" },
      { label: "Annual Impact", value: "$14,000+" }
    ]
  },
  {
    slug: "second-vision-screening-machine",
    title: "Belize Kids.Org Donates a Second Vision Screening Machine To San Pedro's Lions Club",
    author: "Rebecca Coutant",
    date: "August 27, 2022",
    category: "healthcare",
    color: "bg-rose-500",
    icon: Heart,
    content: `
      <p>Belize Kids.org was so proud to donate a 2nd Vision Screening Device to San Pedro's Lions Club last week. The organization donated the first Plus Optix machine in July of this year. Before these donations, two similar machines were shared between the various Lions' Clubs of Belize and used to identify vision issues for all school children in the country.</p>
      <p>The Plus Optix Vision Screener is a state-of-the-art device that allows for quick and accurate vision screening, especially for young children. It can detect common vision problems such as nearsightedness, farsightedness, astigmatism, and other eye issues.</p>
      <p>With this second device, the San Pedro Lions Club can now screen more children more efficiently, helping to identify vision problems early when they can be most effectively treated.</p>
      <p>We're grateful for the ongoing partnership with the San Pedro Lions Club and look forward to continuing our work together to improve the vision care available to the children of Ambergris Caye and beyond.</p>
    `,
    highlights: [
      "Second Plus Optix Vision Screener donated",
      "Early detection of children's vision issues",
      "Increased screening capacity for Lions Club",
      "More efficient vision care delivery"
    ],
    keyNumbers: [
      { label: "Screening Devices", value: "2" },
      { label: "Screenings Per Day", value: "30+" },
      { label: "Value", value: "$7,000" }
    ]
  },
  {
    slug: "camp-basil-jones",
    title: "Belize Kids.Org and Finn & Martini Sponsor Week Four of Camp Basil Jones on North Ambergris Caye",
    author: "Rebecca Coutant",
    date: "August 7, 2022",
    category: "education",
    color: "bg-blue-500",
    icon: BookOpen,
    content: `
      <p>Summer camp on North Ambergris Caye's Camp Basil Jones has officially come to an end. Four successful weeks with the final week sponsored by the joint fundraising effort between Belize Kids.Org and Finn & Martini Lounge and Restaurant.</p>
      <p>The fourth week of the camp, organized by San Pedro's Mito Paz, welcomed 20+ kids from San Pedro, Caye Caulker and some villages on the mainland. The kids learned about our reef, our environment and the impact that human activities can have on them.</p>
      <p>Activities during the camp included presentations from various environmental organizations, beach clean-ups, snorkeling trips to explore the reef, arts and crafts using recycled materials, and teambuilding exercises.</p>
      <p>The camp not only teaches environmental awareness but also fosters a sense of camaraderie and teamwork among the children, who come from different backgrounds and communities.</p>
      <p>We are already looking forward to sponsoring Camp Basil Jones again next year and continuing to support this valuable educational experience for the children of Belize.</p>
    `,
    highlights: [
      "Environmental education for 20+ children",
      "Reef conservation awareness",
      "Team-building activities",
      "Multi-community participation"
    ],
    keyNumbers: [
      { label: "Campers", value: "20+" },
      { label: "Camp Duration", value: "1 week" },
      { label: "Activities", value: "15+" }
    ]
  },
  {
    slug: "eye-screening-equipment",
    title: "Belize Kids.Org Donates Eye Screening Equipment to the Lions' Den in San Pedro",
    author: "Rebecca Coutant",
    date: "July 20, 2022",
    category: "healthcare",
    color: "bg-rose-500",
    icon: Heart,
    content: `
      <p>Just last week Belize Kids.org answered the request of Melanie Paz and Jan Brown of the Lions' Den in San Pedro. They have been working since November 2021 to screen and diagnose eye-sight issues for the children on the island.</p>
      <p>The donation of a new Plus Optix Screening Device by Belize Kids.org will help the effort immensely. It will allow for more efficient and accurate screening of children's vision, helping to identify problems early when they can be most effectively addressed.</p>
      <p>This donation is part of our ongoing commitment to improving the health and educational opportunities for the children of Belize. Vision problems can significantly impact a child's ability to learn and develop, and identifying these problems early is crucial.</p>
      <p>We're proud to support the important work being done by the Lions' Den and look forward to hearing about the impact this equipment has on their vision screening program.</p>
    `,
    highlights: [
      "Plus Optix Screening Device donated",
      "Early detection of vision issues",
      "Supporting Lions' Den vision program",
      "Improving children's educational opportunities"
    ],
    keyNumbers: [
      { label: "Device Value", value: "$3,500" },
      { label: "Children Benefiting", value: "700+" },
      { label: "Screening Time", value: "30 sec/child" }
    ]
  },
  {
    slug: "fundraising-camp-basil-jones",
    title: "Belize Kids.Org and Finn & Martini Raise Money for Ambergris Caye's Camp Basil Jones",
    author: "Rebecca Coutant",
    date: "July 9, 2022",
    category: "education",
    color: "bg-blue-500",
    icon: BookOpen,
    content: `
      <p>Each year, Mito Paz seeks grants and raises money to make Camp Basil Jones happen. It is a 4 week summer camp where kids from around Belize come to learn about our ocean, our reef and how important it is to us in Belize and to the world.</p>
      <p>The joint fundraising effort between Belize Kids.Org and Finn & Martini Lounge and Restaurant was a great success, raising enough money to sponsor the fourth week of the camp.</p>
      <p>We would like to thank everyone who contributed to this fundraising effort, especially the patrons of Finn & Martini who generously donated to this cause. Your support has made it possible for more children to experience the educational opportunities provided by Camp Basil Jones.</p>
    `,
    highlights: [
      "Successful fundraising partnership",
      "Sponsored a full week of Camp Basil Jones",
      "Environmental education for Belizean youth",
      "Community business involvement"
    ],
    keyNumbers: [
      { label: "Funds Raised", value: "$5,000+" },
      { label: "Sponsors", value: "35+" },
      { label: "Camp Duration", value: "1 week" }
    ]
  },
  {
    slug: "sprc-primary-school",
    title: "Working with SPRC Primary, San Pedro, Belize's Largest Public School",
    author: "Rebecca Coutant",
    date: "June 14, 2022",
    category: "education",
    color: "bg-blue-500",
    icon: BookOpen,
    content: `
      <p>San Pedro Roman Catholic Primary School is the largest on the island with over 700 kids ranging from Kindergarten to Standard 6 (or the US equivalent of 8th grade). To say that the school is 'bursting at the seams' is an understatement.</p>
      <p>Belize Kids.org has been working closely with the school to address some of their most pressing needs, including infrastructure improvements and educational resources.</p>
      <p>Our recent initiatives include providing new classroom furniture, supporting their reading program with new books, and funding structural improvements to ensure a safe learning environment for all students.</p>
      <p>We are committed to continuing our support of SPRC Primary and other schools in Belize, as we believe that education is the foundation for a bright future.</p>
    `,
    highlights: [
      "Infrastructure improvements",
      "New classroom furniture",
      "Books for reading program",
      "Supporting 700+ students"
    ],
    keyNumbers: [
      { label: "Students", value: "700+" },
      { label: "Classrooms Upgraded", value: "8" },
      { label: "Books Donated", value: "500+" }
    ]
  },
  {
    slug: "equipment-donation-hol-chan",
    title: "Canary Cove Donates Equipment to San Pedro Tour Guide Association & Hol Chan Marine Reserve",
    author: "Rebecca Coutant",
    date: "October 1, 2021",
    category: "environment",
    color: "bg-green-500",
    icon: Leaf,
    content: `
      <p>In October of 2021, after the expansion of the Hol Chan Marine Reserve, Canary Cove donated 20 mooring buoys to the San Pedro Tour Guide Association. The buoys were donated and presented to Hol Chan for use at Mexico Rocks snorkel and dive site.</p>
      <p>Mexico Rock is now designated a "no-take zone" just like Hol Chan, and these mooring buoys will help to protect the coral reef by providing secure mooring points for boats, eliminating the need to drop anchors that can damage the fragile ecosystem.</p>
      <p>This donation is part of our commitment to preserving the natural beauty and biodiversity of Belize's marine environment, which is not only important for its ecological value but also vital for the tourism industry that supports many local communities.</p>
    `,
    highlights: [
      "20 mooring buoys donated",
      "Protected Mexico Rocks dive site",
      "Prevented coral damage from anchoring",
      "Enhanced 'no-take zone' enforcement"
    ],
    keyNumbers: [
      { label: "Buoys Donated", value: "20" },
      { label: "Value", value: "$3,000" },
      { label: "Protected Area", value: "1.5 sq miles" }
    ]
  }
];

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <Helmet>
          <title>Not Found</title>
          <meta name="description" content="The project you are looking for cannot be found. Explore our other initiatives helping children in Belize." />
          <meta property="og:title" content="Not Found" />
          <meta property="og:description" content="The project you are looking for cannot be found. Explore our other initiatives helping children in Belize." />
          <meta property="og:type" content="article" />
        </Helmet>
        <Navbar />
        <div className="container-custom py-32 text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <p className="mb-8">The project you're looking for doesn't exist or has been moved.</p>
          <Link to="/projects">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case "healthcare":
        return <Heart className="h-6 w-6 text-white" />;
      case "education":
        return <BookOpen className="h-6 w-6 text-white" />;
      case "environment":
        return <Leaf className="h-6 w-6 text-white" />;
      case "fundraising":
        return <FileText className="h-6 w-6 text-white" />;
      default:
        return <FileText className="h-6 w-6 text-white" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Helmet>
        <title>{project?.title || "Project Detail"}</title>
        <meta name="description" content={`${project?.title}: Learn how BelizeKids.org is helping children in Belize through this impactful initiative.`} />
        <meta property="og:title" content={project?.title || "Project Detail"} />
        <meta property="og:description" content={`${project?.title}: Learn how BelizeKids.org is helping children in Belize through this impactful initiative.`} />
        <meta property="og:type" content="article" />
      </Helmet>
      <Navbar />
      
      <div className="bg-belize-light pt-24 pb-8 md:pb-12">
        <div className="container-custom">
          <div className="flex flex-col space-y-4">
            <Link to="/projects" className="inline-flex items-center text-belize-green hover:text-belize-coral transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to all projects
            </Link>
            
            <div className="flex flex-col md:flex-row gap-6 md:items-center">
              <div className="md:w-3/4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-belize-green mb-4 leading-tight">
                  {project?.title}
                </h1>
                
                <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 mb-6 gap-3 sm:gap-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-belize-coral" />
                    <span>{project?.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5 text-belize-coral" />
                    <span>By {project?.author}</span>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/4 flex justify-center">
                <div className={`${project.color} p-6 rounded-full`}>
                  {getCategoryIcon(project.category)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-8 md:py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card className="shadow-md border-t-4 border-t-belize-green overflow-hidden">
                <CardContent className="p-6 md:p-8">
                  <div className="prose prose-lg max-w-none">
                    <div 
                      className="content-sections space-y-6"
                      dangerouslySetInnerHTML={{ __html: project.content }}
                    />
                  </div>
                </CardContent>
              </Card>

              {project.images && project.images.length > 0 && slug !== "october-vision-clinic" && (
                <ProjectDetailGallery 
                  images={project.images}
                  title={`${project.title} Gallery`} 
                  description={`View photos from the ${project.title}`} 
                />
              )}

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-belize-green">Project Highlights</h3>
                <div className="grid grid-cols-1 gap-3">
                  {project.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-100">
                      <div className={`${project.color} p-1 rounded-md`}>
                        {getCategoryIcon(project.category)}
                      </div>
                      <p className="text-gray-700">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>

              {project.references && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4 text-belize-green">References & Further Reading</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {project.references.map((reference, index) => (
                      <a 
                        key={index} 
                        href={reference.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-100 hover:border-belize-blue transition-colors"
                      >
                        <ExternalLink className="h-5 w-5 text-belize-blue shrink-0" />
                        <p className="text-belize-blue">{reference.text}</p>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="md:col-span-1">
              <Card className="shadow-md mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-belize-green">Project Info</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                      <span className="text-gray-600">Category:</span>
                      <span className="font-medium capitalize flex items-center">
                        <span className={`${project.color} p-1 rounded-md inline-flex mr-2`}>
                          {getCategoryIcon(project.category)}
                        </span>
                        {project.category}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                      <span className="text-gray-600">Date:</span>
                      <span className="font-medium">{project.date}</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                      <span className="text-gray-600">Author:</span>
                      <span className="font-medium">{project.author}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-md mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-belize-green">Key Numbers</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {project.keyNumbers.map((number, index) => (
                      <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                        <p className="text-2xl font-bold text-belize-coral">{number.value}</p>
                        <p className="text-sm text-gray-600">{number.label}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4 text-belize-green">More Projects</h3>
                  <div className="space-y-3">
                    {projects
                      .filter(p => p.slug !== slug)
                      .slice(0, 3)
                      .map((relatedProject, index) => (
                        <Link 
                          key={index} 
                          to={`/projects/${relatedProject.slug}`}
                          className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className={`${relatedProject.color} p-1.5 rounded-md mr-3 shrink-0`}>
                            {getCategoryIcon(relatedProject.category)}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-medium line-clamp-2 text-belize-green">{relatedProject.title}</h4>
                            <span className="text-xs text-gray-500">{relatedProject.date}</span>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </Link>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Separator className="my-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-belize-green">Help Support Our Work</h3>
              <p className="mb-6 text-gray-700">Your donations help us improve the lives of children in Belize through investments in schools, parks, healthcare, and scholarships.</p>
              <Button 
                className="bg-belize-coral hover:bg-opacity-90 text-white"
                onClick={() => {
                  const donateElement = document.getElementById("donate");
                  if (donateElement) {
                    donateElement.scrollIntoView({ behavior: "smooth" });
                  } else {
                    window.location.href = "/#donate";
                  }
                }}
              >
                Donate Now
              </Button>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-belize-green">Get Involved</h3>
              <p className="mb-6 text-gray-700">Join our mission to create a better future for the children of Belize. Volunteer, donate, or spread the word about our initiatives.</p>
              <Button 
                variant="outline"
                className="border-belize-blue text-belize-blue hover:bg-belize-blue hover:text-white"
                onClick={() => {
                  window.location.href = "/monthly-investment";
                }}
              >
                Start Monthly Investment
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
