import {
  BookOpen,
  FileText,
  Heart,
  Leaf,
  type LucideIcon,
} from "lucide-react";

export type ProjectCategory =
  | "healthcare"
  | "education"
  | "environment"
  | "fundraising";

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectReference {
  text: string;
  url: string;
}

export interface ProjectKeyNumber {
  label: string;
  value: string;
}

export interface ProjectRecord {
  id: number;
  slug: string;
  title: string;
  previewTitle?: string;
  metaDescription: string;
  author: string;
  date: string;
  category: ProjectCategory;
  excerpt: string;
  previewExcerpt?: string;
  content: string;
  highlights: string[];
  keyNumbers: ProjectKeyNumber[];
  references?: ProjectReference[];
  images?: ProjectImage[];
  featuredRank?: number;
}

export const projectCategoryConfig: Record<
  ProjectCategory,
  { color: string; icon: LucideIcon }
> = {
  healthcare: {
    color: "bg-rose-500",
    icon: Heart,
  },
  education: {
    color: "bg-blue-500",
    icon: BookOpen,
  },
  environment: {
    color: "bg-green-500",
    icon: Leaf,
  },
  fundraising: {
    color: "bg-amber-500",
    icon: FileText,
  },
};

export const projectCategories: ProjectCategory[] = [
  "healthcare",
  "education",
  "environment",
  "fundraising",
];

export const projects: ProjectRecord[] = [
  {
    id: 1,
    slug: "october-vision-clinic",
    title: "Stanford Belize Vision Clinic: Transforming Eye Care in San Pedro",
    previewTitle: "October Vision Clinic is a Huge Success",
    metaDescription:
      "Discover how the Stanford Belize Vision Clinic provides free eye screenings and subsidized eyewear through Belize Kids, Stanford, BCVI, and the Lions Club.",
    author: "Rebecca Coutant",
    date: "October 30, 2017",
    category: "healthcare",
    excerpt:
      "BelizeKids.org, in conjunction with BCVI, the San Pedro Lions Den, and Stanford Medicine, completed another highly successful free clinic for children and adults in San Pedro.",
    previewExcerpt:
      "BelizeKids.org, in conjunction with BCVI and the San Pedro Lions Den, just completed another very successful free clinic for San Pedro.",
    featuredRank: 1,
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
      "Only dedicated eye clinic on Ambergris Caye",
    ],
    keyNumbers: [
      { label: "Patients Served (2017)", value: "150+" },
      { label: "Daily Capacity", value: "30 patients" },
      { label: "Stanford Medical Teams", value: "Multiple annually" },
      { label: "Free Services", value: "All children" },
    ],
    references: [
      {
        text: "Free Eye Exams by BelizeKids.Org",
        url: "https://ambergristoday.com/community-bulletin/2020/02/03/free-eye-exams-by-belizekids-org-at-the-lions-den/",
      },
    ],
  },
  {
    id: 2,
    slug: "dollar-a-dive-program",
    title: "Belize Kids is Excited to Announce Our #DollaADive Program",
    metaDescription:
      "Dive shops donate $1 per dive to Belize Kids, funding vision care and education programs while supporting local businesses on Ambergris Caye.",
    author: "Rebecca Coutant",
    date: "November 22, 2022",
    category: "fundraising",
    excerpt:
      "Participating dive shops donate $1 per dive to Belize Kids, creating a simple recurring funding stream for children’s healthcare and education programs.",
    previewExcerpt:
      "If you have visited, you know that no single activity has been more important to tourism on Ambergris Caye than scuba diving.",
    featuredRank: 2,
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
      "Transparent donation process",
    ],
    keyNumbers: [
      { label: "Participating Shops", value: "8" },
      { label: "Monthly Dives", value: "1,200+" },
      { label: "Annual Impact", value: "$14,000+" },
    ],
  },
  {
    id: 3,
    slug: "second-vision-screening-machine",
    title:
      "Belize Kids.Org Donates a Second Vision Screening Machine To San Pedro's Lions Club",
    previewTitle:
      "Belize Kids.Org Donates a Second Vision Screening Machine",
    metaDescription:
      "Belize Kids donated a second Plus Optix screener to the San Pedro Lions Club, expanding fast, accurate vision checks for children.",
    author: "Rebecca Coutant",
    date: "August 27, 2022",
    category: "healthcare",
    excerpt:
      "A second Plus Optix vision screener expanded local screening capacity and made it easier to catch children’s vision issues early.",
    previewExcerpt:
      "Belize Kids.org was so proud to donate a 2nd Vision Screening Device to San Pedro's Lions Club last week.",
    featuredRank: 3,
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
      "More efficient vision care delivery",
    ],
    keyNumbers: [
      { label: "Screening Devices", value: "2" },
      { label: "Screenings Per Day", value: "30+" },
      { label: "Value", value: "$7,000" },
    ],
  },
  {
    id: 4,
    slug: "camp-basil-jones",
    title:
      "Belize Kids.Org and Finn & Martini Sponsor Week Four of Camp Basil Jones on North Ambergris Caye",
    metaDescription:
      "A week of Camp Basil Jones delivered reef education, conservation lessons, and teamwork for Belizean kids through Belize Kids and Finn & Martini.",
    author: "Rebecca Coutant",
    date: "August 7, 2022",
    category: "education",
    excerpt:
      "Belize Kids helped sponsor Camp Basil Jones, bringing environmental education, reef awareness, and team-building to children from several Belize communities.",
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
      "Multi-community participation",
    ],
    keyNumbers: [
      { label: "Campers", value: "20+" },
      { label: "Camp Duration", value: "1 week" },
      { label: "Activities", value: "15+" },
    ],
  },
  {
    id: 5,
    slug: "eye-screening-equipment",
    title:
      "Belize Kids.Org Donates Eye Screening Equipment to the Lions' Den in San Pedro",
    metaDescription:
      "A new Plus Optix device helps the Lions' Den screen hundreds of children in San Pedro for vision issues and early treatment.",
    author: "Rebecca Coutant",
    date: "July 20, 2022",
    category: "healthcare",
    excerpt:
      "A donated screening device gave the Lions’ Den better tools to identify sight issues earlier and support children’s learning outcomes.",
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
      "Improving children's educational opportunities",
    ],
    keyNumbers: [
      { label: "Device Value", value: "$3,500" },
      { label: "Children Benefiting", value: "700+" },
      { label: "Screening Time", value: "30 sec/child" },
    ],
  },
  {
    id: 6,
    slug: "fundraising-camp-basil-jones",
    title:
      "Belize Kids.Org and Finn & Martini Raise Money for Ambergris Caye's Camp Basil Jones",
    metaDescription:
      "Community fundraising sponsored Camp Basil Jones, bringing environmental education, snorkeling trips, and creative activities to Belizean youth.",
    author: "Rebecca Coutant",
    date: "July 9, 2022",
    category: "education",
    excerpt:
      "A fundraising partnership with Finn & Martini helped sponsor a full week of Camp Basil Jones and extend access to environmental learning.",
    content: `
      <p>Each year, Mito Paz seeks grants and raises money to make Camp Basil Jones happen. It is a 4 week summer camp where kids from around Belize come to learn about our ocean, our reef and how important it is to us in Belize and to the world.</p>
      <p>The joint fundraising effort between Belize Kids.Org and Finn & Martini Lounge and Restaurant was a great success, raising enough money to sponsor the fourth week of the camp.</p>
      <p>We would like to thank everyone who contributed to this fundraising effort, especially the patrons of Finn & Martini who generously donated to this cause. Your support has made it possible for more children to experience the educational opportunities provided by Camp Basil Jones.</p>
    `,
    highlights: [
      "Successful fundraising partnership",
      "Sponsored a full week of Camp Basil Jones",
      "Environmental education for Belizean youth",
      "Community business involvement",
    ],
    keyNumbers: [
      { label: "Funds Raised", value: "$5,000+" },
      { label: "Sponsors", value: "35+" },
      { label: "Camp Duration", value: "1 week" },
    ],
  },
  {
    id: 7,
    slug: "sprc-primary-school",
    title:
      "Working with SPRC Primary, San Pedro, Belize's Largest Public School",
    metaDescription:
      "Belize Kids supports SPRC Primary with classroom improvements and resources for more than 700 students in San Pedro.",
    author: "Rebecca Coutant",
    date: "June 14, 2022",
    category: "education",
    excerpt:
      "Belize Kids partnered with San Pedro Roman Catholic Primary School to improve classrooms, add resources, and support more than 700 students.",
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
      "Supporting 700+ students",
    ],
    keyNumbers: [
      { label: "Students", value: "700+" },
      { label: "Classrooms Upgraded", value: "8" },
      { label: "Books Donated", value: "500+" },
    ],
  },
  {
    id: 8,
    slug: "equipment-donation-hol-chan",
    title:
      "Canary Cove Donates Equipment to San Pedro Tour Guide Association & Hol Chan Marine Reserve",
    metaDescription:
      "Canary Cove donated 20 mooring buoys to protect Hol Chan Marine Reserve and support San Pedro tour guides.",
    author: "Rebecca Coutant",
    date: "October 1, 2021",
    category: "environment",
    excerpt:
      "Mooring buoy donations helped protect coral habitats and supported more sustainable tourism around Mexico Rocks and Hol Chan.",
    content: `
      <p>In October of 2021, after the expansion of the Hol Chan Marine Reserve, Canary Cove donated 20 mooring buoys to the San Pedro Tour Guide Association. The buoys were donated and presented to Hol Chan for use at Mexico Rocks snorkel and dive site.</p>
      <p>Mexico Rock is now designated a "no-take zone" just like Hol Chan, and these mooring buoys will help to protect the coral reef by providing secure mooring points for boats, eliminating the need to drop anchors that can damage the fragile ecosystem.</p>
      <p>This donation is part of our commitment to preserving the natural beauty and biodiversity of Belize's marine environment, which is not only important for its ecological value but also vital for the tourism industry that supports many local communities.</p>
    `,
    highlights: [
      "20 mooring buoys donated",
      "Protected Mexico Rocks dive site",
      "Prevented coral damage from anchoring",
      "Enhanced 'no-take zone' enforcement",
    ],
    keyNumbers: [
      { label: "Buoys Donated", value: "20" },
      { label: "Value", value: "$3,000" },
      { label: "Protected Area", value: "1.5 sq miles" },
    ],
  },
];

export const featuredProjects = projects
  .filter((project) => typeof project.featuredRank === "number")
  .sort((left, right) => (left.featuredRank ?? 0) - (right.featuredRank ?? 0));

export const getProjectBySlug = (slug?: string) =>
  projects.find((project) => project.slug === slug);
