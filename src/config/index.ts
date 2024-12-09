import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Birendra Pandey — Senior VP at CNI",
  author: "Birendra Raj Pandey",
  description:
    "Managing director of Nepal Adarsha Nirman Company, Mr Pandey has been a leader in the private sector for x number of years...",
  lang: "en",
  siteLogo: "/birendra-small.jpg",
  navLinks: [
    { text: "About", href: "#about" },
    { text: "Experience", href: "#experience" },
    { text: "Awards", href: "#projects" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/birendra-pandey-ab745114/" },
    { text: "Company Website", href: "https://www.nepaladarsha.com/" },
    { text: "CNI Website", href: "https://cni.org.np/" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Birendra Pandey",
    specialty: "Senior VP at the Confederation of Nepalese Industries (CNI)",
    summary:
      "Mr. Birendra Raj Pandey is a visionary leader with a proven track record in business strategy and organizational growth. With a deep commitment to innovation and community development, he has consistently delivered impactful results across various industries.",
    email: "birendra.pandey@gmail.com",
  },
  experience: [
    {
      company: "Confederation of Nepalese Industries (CNI)",
      position: "Vice President",
      startDate: "Mar 2019",
      endDate: "Present",
      summary:
        "During my time at the Confederation of Nepalese Industries (CNI), I focused on promoting industrial growth and building strong partnerships between businesses and the government. I worked on initiatives to attract investments, improve policies, and make it easier to do business in Nepal. My goal was to support innovation and sustainable development, contributing to a stronger industrial sector in the country.",
    },
    {
      company: "Nepal Adarsha Nirman Company (NANC)",
      position: "Managing Director",
      startDate: "May 2011",
      endDate: "Present",
      summary:
        "During my time at Nepal Adarsha Nirman Company (NANC), I focused on leading innovative civil engineering projects that contributed to Nepal’s infrastructure development. I managed key projects involving roads, bridges, and urban construction, ensuring they were completed efficiently and met high-quality standards. By fostering a culture of teamwork and excellence, I helped establish NANC as a trusted name in the civil engineering sector, delivering sustainable and impactful solutions for the country’s development."
    },
    {
      company: "International Federation of Asian and Western Pacific Contractors' Associations (IFAWPCA)",
      position: "Secretary General",
      startDate: "Nov 2022",
      endDate: "Nov 2023",
      summary:
        "During my tenure as Secretary General of the International Federation of Asian and Western Pacific Contractors’ Associations (IFAWPCA), I worked to strengthen collaboration among member countries and advance the interests of the construction industry on a global scale. I facilitated international conferences and networking opportunities, encouraging knowledge sharing and fostering partnerships between contractors across regions. My focus was on promoting innovation, sustainable construction practices, and mutual growth, while ensuring that IFAWPCA remained a platform for addressing key industry challenges and opportunities."
    },
  ],
  projects: [
    {
      name: "Spotifu Music",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `Hello, I’m Birendra Raj Pandey, a passionate leader and strategist dedicated to driving growth and making a positive difference in the world. With years of experience in business development and organizational leadership, I thrive on turning challenges into opportunities. My journey has been fueled by a deep commitment to fostering innovation, empowering teams, and contributing to meaningful change in the community. Beyond work, I enjoy exploring new ideas, connecting with people, and sharing my learnings to inspire others.`,
    image: "/birendra-big.jpg",
  },
};

// #5755ff
