import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft } from "lucide-react";
import ProjectDetailGallery from "@/components/ProjectDetailGallery";

// This would come from a database or API in a real application
const projects = [
  {
    slug: "october-vision-clinic",
    title: "October Vision Clinic is a Huge Success",
    author: "Rebecca Coutant",
    date: "October 30, 2017",
    imageSrc: "https://belizekids.org/wp-content/uploads/2017/10/Belize-Kids-Pics-October-4.jpg",
    content: `
      <p>BelizeKids.org, in conjunction with BCVI (the Belize Council for the Visually Impaired) and the San Pedro Lions Den, just completed another very successful free clinic for San Pedro.</p>
      
      <div class="my-6">
        <img src="https://belizekids.org/wp-content/uploads/2017/10/Belize-Kids-Pics-October-1.jpg" alt="Eye examination with kids at the vision clinic" class="w-full rounded-lg" />
      </div>
      
      <p>Kids and adults came for examinations with doctors from <a href="https://med.stanford.edu/ophthalmology.html" target="_blank" rel="noopener" class="text-belize-blue hover:underline">Stanford Medicine</a> in the brand new office installed and operated by BelizeKids.</p>
      
      <div class="my-6">
        <img src="https://belizekids.org/wp-content/uploads/2017/10/Belize-Kids-Pics-October-9.jpg" alt="Stanford doctors providing eye care services" class="w-full rounded-lg" />
      </div>
      
      <p>For information on upcoming clinics, please see our <a href="https://www.facebook.com/belizekids/" target="_blank" rel="noopener" class="text-belize-blue hover:underline">Facebook page</a> and signs at the San Pedro Lions Den. The opthamalogists from Stanford plan to see our Belize patients every 2-3 months.</p>
      
      <div class="my-6">
        <img src="https://belizekids.org/wp-content/uploads/2017/10/IMG_1457.jpg" alt="Vision clinic team at the Lions Den" class="w-full rounded-lg" />
      </div>
      
      <p>BCVI continues to hold monthly clinics at the Lions Den.</p>
      
      <p>And a HUGE thank you to <a href="https://www.elfogonbelize.com/" target="_blank" rel="noopener" class="text-belize-blue hover:underline">El Fogon Restaurant</a> — just around the corner from the airstrip for donating lunch for our team.</p>
      
      <div class="my-6">
        <img src="https://belizekids.org/wp-content/uploads/2017/10/Belize-Kids-Pics-October-6.jpg" alt="Eye screening equipment being used" class="w-full rounded-lg" />
      </div>
    `,
    gallery: [
      {
        src: "https://belizekids.org/wp-content/uploads/2017/10/Belize-Kids-Pics-October-1.jpg",
        alt: "Eye examination with kids at the vision clinic"
      },
      {
        src: "https://belizekids.org/wp-content/uploads/2017/10/Belize-Kids-Pics-October-9.jpg",
        alt: "Stanford doctors providing eye care services"
      },
      {
        src: "https://belizekids.org/wp-content/uploads/2017/10/IMG_1457.jpg",
        alt: "Vision clinic team at the Lions Den"
      },
      {
        src: "https://belizekids.org/wp-content/uploads/2017/10/Belize-Kids-Pics-October-6.jpg",
        alt: "Eye screening equipment being used"
      },
      {
        src: "https://belizekids.org/wp-content/uploads/2017/10/Belize-Kids-Pics-October-4.jpg",
        alt: "Vision clinic activities"
      },
      {
        src: "https://belizekids.org/wp-content/uploads/2017/10/BKO-OCT-1-1.jpg",
        alt: "BelizeKids.org vision clinic activities"
      },
      {
        src: "https://belizekids.org/wp-content/uploads/2017/10/BKO-OCT-1-2.jpg",
        alt: "Eye examinations at vision clinic"
      },
      {
        src: "https://belizekids.org/wp-content/uploads/2017/10/BKO-OCT-1-3.jpg",
        alt: "Patient receiving vision care"
      },
      {
        src: "https://belizekids.org/wp-content/uploads/2017/10/BKO-OCT-1-4.jpg",
        alt: "Medical staff at vision clinic"
      },
      {
        src: "https://belizekids.org/wp-content/uploads/2017/10/BKO-OCT-1-5.jpg",
        alt: "BCVI and Stanford doctors collaboration"
      },
      {
        src: "https://belizekids.org/wp-content/uploads/2017/10/BKO-OCT-1-6.jpg",
        alt: "Vision clinic operations"
      },
      {
        src: "https://belizekids.org/wp-content/uploads/2017/10/Belize-Kids-Pics-October-2.jpg",
        alt: "Vision screening process"
      },
      {
        src: "https://belizekids.org/wp-content/uploads/2017/10/IMG_1455.jpg",
        alt: "Vision clinic setup at Lions Den"
      },
      {
        src: "https://belizekids.org/wp-content/uploads/2017/10/Belize-Kids-Pics-October-5.jpg",
        alt: "Vision care equipment and testing"
      },
      {
        src: "https://belizekids.org/wp-content/uploads/2017/10/Belize-Kids-Pics-October-7.jpg",
        alt: "BelizeKids vision care program"
      },
      {
        src: "https://belizekids.org/wp-content/uploads/2017/10/Belize-Kids-Pics-October-8.jpg",
        alt: "Patients waiting for vision screening"
      }
    ]
  },
  {
    slug: "dollar-a-dive-program",
    title: "Belize Kids is Excited to Announce Our #DollaADive Program",
    author: "Rebecca Coutant",
    date: "November 22, 2022",
    imageSrc: "/lovable-uploads/ca21c85a-e8be-48b2-8f9d-89e3983435ca.png",
    content: `
      <p>If you have visited, you know that no single activity has been more important to tourism on Ambergris Caye than scuba diving. This has been true since the very beginning of tourism, the days of the Paradise and Holiday Hotels in the early 70's. Over the decades since, Ambergris has become a bustling tourist mecca, arguably the most popular destination in all of Belize.</p>
      <p>Our #DollaADive program is simple: for every dive conducted by participating dive shops, $1 is donated to Belize Kids.org to support our vision care and educational programs for children in Belize.</p>
      <p>Participating dive shops receive promotional materials and recognition on our website and social media channels. Most importantly, they get to contribute to the wellbeing of the children who are the future of Belize.</p>
      <p>This program exemplifies our mission to build a framework that identifies community goals and cements local relationships, providing a means for businesses to donate with confidence and complete transparency.</p>
    `
  },
  {
    slug: "second-vision-screening-machine",
    title: "Belize Kids.Org Donates a Second Vision Screening Machine To San Pedro's Lions Club",
    author: "Rebecca Coutant",
    date: "August 27, 2022",
    imageSrc: "/lovable-uploads/f755368c-b8ff-40b1-aca5-54aa6838d570.png",
    content: `
      <p>Belize Kids.org was so proud to donate a 2nd Vision Screening Device to San Pedro's Lions Club last week. The organization donated the first Plus Optix machine in July of this year. Before these donations, two similar machines were shared between the various Lions' Clubs of Belize and used to identify vision issues for all school children in the country.</p>
      <p>The Plus Optix Vision Screener is a state-of-the-art device that allows for quick and accurate vision screening, especially for young children. It can detect common vision problems such as nearsightedness, farsightedness, astigmatism, and other eye issues.</p>
      <p>With this second device, the San Pedro Lions Club can now screen more children more efficiently, helping to identify vision problems early when they can be most effectively treated.</p>
      <p>We're grateful for the ongoing partnership with the San Pedro Lions Club and look forward to continuing our work together to improve the vision care available to the children of Ambergris Caye and beyond.</p>
    `
  },
  {
    slug: "camp-basil-jones",
    title: "Belize Kids.Org and Finn & Martini Sponsor Week Four of Camp Basil Jones on North Ambergris Caye",
    author: "Rebecca Coutant",
    date: "August 7, 2022",
    imageSrc: "/lovable-uploads/d0cf5c69-dc26-4c5e-9ebe-18ea1a2d19d5.png",
    content: `
      <p>Summer camp on North Ambergris Caye's Camp Basil Jones has officially come to an end. Four successful weeks with the final week sponsored by the joint fundraising effort between Belize Kids.Org and Finn & Martini Lounge and Restaurant.</p>
      <p>The fourth week of the camp, organized by San Pedro's Mito Paz, welcomed 20+ kids from San Pedro, Caye Caulker and some villages on the mainland. The kids learned about our reef, our environment and the impact that human activities can have on them.</p>
      <p>Activities during the camp included presentations from various environmental organizations, beach clean-ups, snorkeling trips to explore the reef, arts and crafts using recycled materials, and teambuilding exercises.</p>
      <p>The camp not only teaches environmental awareness but also fosters a sense of camaraderie and teamwork among the children, who come from different backgrounds and communities.</p>
      <p>We are already looking forward to sponsoring Camp Basil Jones again next year and continuing to support this valuable educational experience for the children of Belize.</p>
    `
  },
  {
    slug: "eye-screening-equipment",
    title: "Belize Kids.Org Donates Eye Screening Equipment to the Lions' Den in San Pedro",
    author: "Rebecca Coutant",
    date: "July 20, 2022",
    imageSrc: "/lovable-uploads/ef657229-fafe-4b76-83f7-88bce76133af.png",
    content: `
      <p>Just last week Belize Kids.org answered the request of Melanie Paz and Jan Brown of the Lions' Den in San Pedro. They have been working since November 2021 to screen and diagnose eye-sight issues for the children on the island.</p>
      <p>The donation of a new Plus Optix Screening Device by Belize Kids.org will help the effort immensely. It will allow for more efficient and accurate screening of children's vision, helping to identify problems early when they can be most effectively addressed.</p>
      <p>This donation is part of our ongoing commitment to improving the health and educational opportunities for the children of Belize. Vision problems can significantly impact a child's ability to learn and develop, and identifying these problems early is crucial.</p>
      <p>We're proud to support the important work being done by the Lions' Den and look forward to hearing about the impact this equipment has on their vision screening program.</p>
    `
  },
  {
    slug: "fundraising-camp-basil-jones",
    title: "Belize Kids.Org and Finn & Martini Raise Money for Ambergris Caye's Camp Basil Jones",
    author: "Rebecca Coutant",
    date: "July 9, 2022",
    imageSrc: "/lovable-uploads/66bc1aad-e548-47ce-b19f-13f78397aa0c.png",
    content: `
      <p>Each year, Mito Paz seeks grants and raises money to make Camp Basil Jones happen. It is a 4 week summer camp where kids from around Belize come to learn about our ocean, our reef and how important it is to us in Belize and to the world.</p>
      <p>The joint fundraising effort between Belize Kids.Org and Finn & Martini Lounge and Restaurant was a great success, raising enough money to sponsor the fourth week of the camp.</p>
      <p>We would like to thank everyone who contributed to this fundraising effort, especially the patrons of Finn & Martini who generously donated to this cause. Your support has made it possible for more children to experience the educational opportunities provided by Camp Basil Jones.</p>
    `
  },
  {
    slug: "sprc-primary-school",
    title: "Working with SPRC Primary, San Pedro, Belize's Largest Public School",
    author: "Rebecca Coutant",
    date: "June 14, 2022",
    imageSrc: "/lovable-uploads/5c98d9b7-c36a-4f65-a62f-e9a9f52e87f0.png",
    content: `
      <p>San Pedro Roman Catholic Primary School is the largest on the island with over 700 kids ranging from Kindergarten to Standard 6 (or the US equivalent of 8th grade). To say that the school is 'bursting at the seams' is an understatement.</p>
      <p>Belize Kids.org has been working closely with the school to address some of their most pressing needs, including infrastructure improvements and educational resources.</p>
      <p>Our recent initiatives include providing new classroom furniture, supporting their reading program with new books, and funding structural improvements to ensure a safe learning environment for all students.</p>
      <p>We are committed to continuing our support of SPRC Primary and other schools in Belize, as we believe that education is the foundation for a bright future.</p>
    `
  },
  {
    slug: "equipment-donation-hol-chan",
    title: "Canary Cove Donates Equipment to San Pedro Tour Guide Association & Hol Chan Marine Reserve",
    author: "Rebecca Coutant",
    date: "October 1, 2021",
    imageSrc: "/lovable-uploads/378a9d5e-a28f-46e3-b7b3-548b5d1bc855.png",
    content: `
      <p>In October of 2021, after the expansion of the Hol Chan Marine Reserve, Canary Cove donated 20 mooring buoys to the San Pedro Tour Guide Association. The buoys were donated and presented to Hol Chan for use at Mexico Rocks snorkel and dive site.</p>
      <p>Mexico Rock is now designated a "no-take zone" just like Hol Chan, and these mooring buoys will help to protect the coral reef by providing secure mooring points for boats, eliminating the need to drop anchors that can damage the fragile ecosystem.</p>
      <p>This donation is part of our commitment to preserving the natural beauty and biodiversity of Belize's marine environment, which is not only important for its ecological value but also vital for the tourism industry that supports many local communities.</p>
    `
  }
];

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen">
        <Helmet>
          <title>Not Found</title>
          <meta name="description" content="The project you are looking for cannot be found. Explore our other initiatives helping children in Belize." />
          <meta property="og:title" content="Not Found" />
          <meta property="og:description" content="The project you are looking for cannot be found. Explore our other initiatives helping children in Belize." />
          <meta property="og:image" content="/lovable-uploads/b627ac31-d9fd-4dbb-bb4d-8a4881b3813d.png" />
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

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{project?.title || "Project Detail"}</title>
        <meta name="description" content={`${project?.title}: Learn how BelizeKids.org is helping children in Belize through this impactful initiative.`} />
        <meta property="og:title" content={project?.title || "Project Detail"} />
        <meta property="og:description" content={`${project?.title}: Learn how BelizeKids.org is helping children in Belize through this impactful initiative.`} />
        <meta property="og:image" content={project?.imageSrc} />
        <meta property="og:type" content="article" />
      </Helmet>
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <Link to="/projects" className="inline-flex items-center text-belize-green hover:underline mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to all projects
          </Link>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-belize-green mb-4">
            {project?.title}
          </h1>
          
          <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 mb-8 gap-3 sm:gap-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>{project?.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span>By {project?.author}</span>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: project?.content || '' }} />
          </div>
          
          {project?.gallery && project.gallery.length > 0 && (
            <ProjectDetailGallery images={project.gallery} />
          )}
          
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold mb-4">Help Support Our Work</h3>
            <p className="mb-6">Your donations help us improve the lives of children in Belize through investments in schools, parks, healthcare, and scholarships.</p>
            <Button 
              className="bg-belize-yellow hover:bg-opacity-90 text-white"
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
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
