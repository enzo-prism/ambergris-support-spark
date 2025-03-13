
import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft } from "lucide-react";

// This would come from a database or API in a real application
const projects = [
  {
    slug: "october-vision-clinic",
    title: "October Vision Clinic is a Huge Success",
    author: "Rebecca Coutant",
    date: "October 30, 2023",
    imageSrc: "/lovable-uploads/57ae58c7-c275-4a3f-b33d-6f120282c94f.png",
    content: `
      <p>BelizeKids.org, in conjunction with BCVI (the Belize Council for the Visually Impaired) and the San Pedro Lions Den, just completed another very successful free clinic for San Pedro. Kids and adults came for examinations with doctors from Stanford Medicine in the brand new office installed and operated by BelizeKids.</p>
      <p>The clinic was held over three days at the San Pedro Community Center, with volunteer optometrists from the United States and Belize working tirelessly to serve as many children as possible.</p>
      <p>One of the most rewarding moments was seeing the expressions on children's faces when they put on their new glasses for the first time and could see clearly. For many, it was a life-changing experience that will significantly improve their ability to learn and participate in school.</p>
      <p>We'd like to extend a special thank you to Dr. James Wilson and his team for donating their time and expertise, as well as to our donors who made this event possible by funding the equipment and glasses.</p>
      <p>Based on the success of this clinic, we're planning to expand this program to other communities in Belize in the coming year.</p>
    `
  },
  {
    slug: "dollar-a-dive-program",
    title: "BelizeKids is Excited to Announce Our #DollaADive Program",
    author: "Rebecca Coutant",
    date: "November 22, 2022",
    imageSrc: "https://images.unsplash.com/photo-1482275548304-a58859dc31b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    content: `
      <p>If you have visited, you know that no single activity has been more important to tourism on Ambergris Caye than scuba diving. This has been true since the very beginning of tourism, the days of the Paradise and Holiday Hotels in the early 70's. Over the decades since, Ambergris has become a bustling tourist mecca, arguably the most popular destination in all of Belize.</p>
      <p>Our #DollaADive program is simple: for every dive conducted by participating dive shops, $1 is donated to BelizeKids.org to support our vision care and educational programs for children in Belize.</p>
      <p>Participating dive shops receive promotional materials and recognition on our website and social media channels. Most importantly, they get to contribute to the wellbeing of the children who are the future of Belize.</p>
      <p>If you're a dive shop owner interested in participating in the #DollaADive program, please contact us for more information. Together, we can make a difference in the lives of children in Belize.</p>
    `
  },
  {
    slug: "second-vision-screening-machine",
    title: "BelizeKids.Org Donates a Second Vision Screening Machine To San Pedro's Lions Club",
    author: "Rebecca Coutant",
    date: "August 27, 2022",
    imageSrc: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    content: `
      <p>BelizeKids.org was so proud to donate a 2nd Vision Screening Device to San Pedro's Lions Club last week. The organization donated the first Plus Optix machine in July of this year. Before these donations, two similar machines were shared between the various Lions' Clubs of Belize and used to identify vision issues for all school children in the country.</p>
      <p>The Plus Optix Vision Screener is a state-of-the-art device that allows for quick and accurate vision screening, especially for young children. It can detect common vision problems such as nearsightedness, farsightedness, astigmatism, and other eye issues.</p>
      <p>With this second device, the San Pedro Lions Club can now screen more children more efficiently, helping to identify vision problems early when they can be most effectively treated.</p>
      <p>We're grateful for the ongoing partnership with the San Pedro Lions Club and look forward to continuing our work together to improve the vision care available to the children of Ambergris Caye and beyond.</p>
    `
  },
  {
    slug: "camp-basil-jones",
    title: "BelizeKids.Org and Finn & Martini Sponsor Week Four of Camp Basil Jones on North Ambergris Caye",
    author: "Rebecca Coutant",
    date: "August 7, 2022",
    imageSrc: "https://images.unsplash.com/photo-1472898965229-f9b06b9c9bbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    content: `
      <p>Summer camp on North Ambergris Caye's Camp Basil Jones has officially come to an end. Four successful weeks with the final week sponsored by the joint fundraising effort between BelizeKids.Org and Finn & Martini Lounge and Restaurant.</p>
      <p>The fourth week of the camp, organized by San Pedro's Mito Paz, welcomed 20+ kids from San Pedro, Caye Caulker and some villages on the mainland. The kids learned about our reef, our environment and the impact that human activities can have on them.</p>
      <p>Activities during the camp included presentations from various environmental organizations, beach clean-ups, snorkeling trips to explore the reef, arts and crafts using recycled materials, and teambuilding exercises.</p>
      <p>The camp not only teaches environmental awareness but also fosters a sense of camaraderie and teamwork among the children, who come from different backgrounds and communities.</p>
      <p>We are already looking forward to sponsoring Camp Basil Jones again next year and continuing to support this valuable educational experience for the children of Belize.</p>
    `
  },
  {
    slug: "eye-screening-equipment",
    title: "BelizeKids.Org Donates Eye Screening Equipment to the Lions' Den in San Pedro",
    author: "Rebecca Coutant",
    date: "July 20, 2022",
    imageSrc: "https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    content: `
      <p>Just last week BelizeKids.org answered the request of Melanie Paz and Jan Brown of the Lions' Den in San Pedro. They have been working since November 2021 to screen and diagnose eye-sight issues for the children on the island.</p>
      <p>The donation of a new Plus Optix Screening Device by BelizeKids.org will help the effort immensely. It will allow for more efficient and accurate screening of children's vision, helping to identify problems early when they can be most effectively addressed.</p>
      <p>This donation is part of our ongoing commitment to improving the health and educational opportunities for the children of Belize. Vision problems can significantly impact a child's ability to learn and develop, and identifying these problems early is crucial.</p>
      <p>We're proud to support the important work being done by the Lions' Den and look forward to hearing about the impact this equipment has on their vision screening program.</p>
    `
  },
  // Additional project details would be included here
];

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen">
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
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <Link to="/projects" className="inline-flex items-center text-belize-blue hover:underline mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to all projects
          </Link>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-belize-blue mb-4">
            {project.title}
          </h1>
          
          <div className="flex items-center text-gray-600 mb-8 gap-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>{project.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span>By {project.author}</span>
            </div>
          </div>
          
          <div className="aspect-video mb-10 rounded-lg overflow-hidden shadow-lg">
            <img 
              src={project.imageSrc} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: project.content }} />
          </div>
          
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold mb-4">Help Support Our Work</h3>
            <p className="mb-6">Your donations allow us to continue providing essential services to children in Belize.</p>
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
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
