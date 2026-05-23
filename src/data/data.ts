import zenonHero from "../assets/zenon/living-12.webp";
import living1 from "../assets/zenon/living-1.webp";
import living2 from "../assets/zenon/living-2.webp";
import living3 from "../assets/zenon/living-3.webp";
import living4 from "../assets/zenon/living-4.webp";
import living5 from "../assets/zenon/living-5.webp";
import living6 from "../assets/zenon/living-6.webp";
import living7 from "../assets/zenon/living-7.webp";
import living8 from "../assets/zenon/living-8.webp";
import living9 from "../assets/zenon/living-9.webp";
import living10 from "../assets/zenon/living-10.webp";
import living11 from "../assets/zenon/living-11.webp";
import living13 from "../assets/zenon/living-13.webp";
import living15 from "../assets/zenon/living-15.webp";

import hall1 from "../assets/zenon/hall-1.webp";
import hall2 from "../assets/zenon/hall-2.webp";
import hall3 from "../assets/zenon/hall-3.webp";

import kitchen1 from "../assets/zenon/kitchen-1.webp";
import kitchen2 from "../assets/zenon/kitchen-2.webp";
import kitchen3 from "../assets/zenon/kitchen-3.webp";
import kitchen4 from "../assets/zenon/kitchen-4.webp";

import bed1 from "../assets/zenon/bed-1.webp";
import bed2 from "../assets/zenon/bed-2.webp";
import bed3 from "../assets/zenon/bed-3.webp";
import bed4 from "../assets/zenon/bed-4.webp";
import bed5 from "../assets/zenon/bed-5.webp";
import bed7 from "../assets/zenon/bed-7.webp";
import bed8 from "../assets/zenon/bed-8.webp";


//cyberwoods
import cyberHero from "../assets/cyberwoods/IMG_3740.webp";
import cyber3682 from "../assets/cyberwoods/IMG_3682.webp";
import cyber3683 from "../assets/cyberwoods/IMG_3683.webp";
import cyber3684 from "../assets/cyberwoods/IMG_3684.webp";
import cyber3685 from "../assets/cyberwoods/IMG_3685.webp";
import cyber3687 from "../assets/cyberwoods/IMG_3687.webp";
import cyber3688 from "../assets/cyberwoods/IMG_3688.webp";
import cyber3689 from "../assets/cyberwoods/IMG_3689.webp";
import cyber3693 from "../assets/cyberwoods/IMG_3693.webp";
import cyber3694 from "../assets/cyberwoods/IMG_3694.webp";
import cyber3702 from "../assets/cyberwoods/IMG_3702.webp";
import cyber3704 from "../assets/cyberwoods/IMG_3704.webp";
import cyber3708 from "../assets/cyberwoods/IMG_3708.webp";
import cyber3709 from "../assets/cyberwoods/IMG_3709.webp";
import cyber3712 from "../assets/cyberwoods/IMG_3712.webp";
import cyber3721 from "../assets/cyberwoods/IMG_3721.webp";
import cyber3727 from "../assets/cyberwoods/IMG_3727.webp";
import cyber3742 from "../assets/cyberwoods/IMG_3742.webp";
import cyber3750 from "../assets/cyberwoods/IMG_3750.webp";


export interface Material {
  name: string;
  hex: string;
}

export interface GalleryImage {
  src: string;
  layout: string;
}

export interface Project {
  id: string;
  title: string;
  community: string;
  category:  "Apartment" | "Commercial" | "Luxury Apartment";
  layout: string;
  client: string;
  area: string;
  year: string;
  duration: string;
  heroImage: string;
  story: string;
  quote: string;

  gallery: GalleryImage[];
}

export const portfolioData: Project[] = [
 {
    id: "aparna-zenon",
    title: "Aparna Zenon",
    community: "Aparna Zicon",
    category: "Luxury Apartment",
    layout: "col-span-1 md:col-span-2 row-span-2",
    client: "Confidential",
    area: "4,500 sq.ft",
    year: "2026",
    duration: "5 Months",
    heroImage: zenonHero,
    story:
      "Perched high above the Hyderabad skyline in Aparna Zicon, this penthouse was designed to be a sanctuary of light and texture. The client requested a space that felt incredibly expansive yet intimate—a home where contemporary minimalism could coexist with the warmth of traditional Indian artistry.",
    quote:
      "A masterclass in restraint, using light and shadow as the primary materials of construction.",
    
    gallery: [
      // Living Room Spaces
      { src: living1, layout: "col-span-1 aspect-square" },
      { src: living2, layout: "col-span-1 aspect-square" },
      { src: living3, layout: "col-span-1 aspect-square" },
      { src: living4, layout: "col-span-1 aspect-square" },
      { src: living5, layout: "col-span-1 aspect-square" },
      { src: living6, layout: "col-span-1 aspect-square" },
      { src: living7, layout: "col-span-1 aspect-square" },
      { src: living8, layout: "col-span-1 aspect-square" },
      { src: living9, layout: "col-span-1 aspect-square" },
      { src: living10, layout: "col-span-1 aspect-square" },
      { src: living11, layout: "col-span-1 aspect-square" },
      { src: living13, layout: "col-span-1 aspect-square" },
      { src: living15, layout: "col-span-1 aspect-square" },

      // Hall / Common Areas
      { src: hall1, layout: "col-span-1 aspect-square" },
      { src: hall2, layout: "col-span-1 aspect-square" },
      { src: hall3, layout: "col-span-1 aspect-square" },

      // Kitchen / Dining Spaces
      { src: kitchen1, layout: "col-span-1 aspect-square" },
      { src: kitchen2, layout: "col-span-1 aspect-square" },
      { src: kitchen3, layout: "col-span-1 aspect-square" },
      { src: kitchen4, layout: "col-span-1 aspect-square" },

      // Bedroom Spaces
      { src: bed1, layout: "col-span-1 aspect-square" },
      { src: bed2, layout: "col-span-1 aspect-square" },
      { src: bed3, layout: "col-span-1 aspect-square" },
      { src: bed4, layout: "col-span-1 aspect-square" },
      { src: bed5, layout: "col-span-1 aspect-square" },
      { src: bed7, layout: "col-span-1 aspect-square" },
      { src: bed8, layout: "col-span-1 aspect-square" },
    ],
  },
  {
    id: "bricks-infra-cyberwoods",
    title: "Brick infra Cyberwoods",
    community: "Cyber Wood",
    category: "Apartment",
    layout: "col-span-1 row-span-1",
    client: "The Reddy Family",
    area: "6,200 sq.ft",
    year: "2025",
    duration: "4 Months",
    heroImage: cyberHero,
    story:
      "Nestled in the lush environs of Cyber Wood, this Apartment is an exercise in grounding architecture. We utilized massive raw stone slabs and sweeping teak wood ceilings to create a home that feels inherently connected to the earth, while providing ultra-modern, seamless smart-home integration.",
    quote:
      "True luxury is the absence of visual noise. This Apartment breathes with its inhabitants.",
    
    gallery: [
      { src: cyber3682, layout: "col-span-1 aspect-square" },
      { src: cyber3683, layout: "col-span-1 aspect-square" },
      { src: cyber3684, layout: "col-span-1 aspect-square" },
      { src: cyber3685, layout: "col-span-1 aspect-square" },
      { src: cyber3687, layout: "col-span-1 aspect-square" },
      { src: cyber3688, layout: "col-span-1 aspect-square" },
      { src: cyber3689, layout: "col-span-1 aspect-square" },
      { src: cyber3693, layout: "col-span-1 aspect-square" },
      { src: cyber3694, layout: "col-span-1 aspect-square" },
      { src: cyber3702, layout: "col-span-1 aspect-square" },
      { src: cyber3704, layout: "col-span-1 aspect-square" },
      { src: cyber3708, layout: "col-span-1 aspect-square" },
      { src: cyber3709, layout: "col-span-1 aspect-square" },
      { src: cyber3712, layout: "col-span-1 aspect-square" },
      { src: cyber3721, layout: "col-span-1 aspect-square" },
      { src: cyber3727, layout: "col-span-1 aspect-square" },
      { src: cyber3742, layout: "col-span-1 aspect-square" },
      { src: cyber3750, layout: "col-span-1 aspect-square" },
    ],
  },
  {
    id: "asbl-spire",
    title: "Asbl Spire",
    community: "ASBL Spire",
    category: "Apartment",
    // 3. TALL PORTRAIT: Takes up 1 column but stretches down 2 rows
    layout: "col-span-1 row-span-2",
    client: "Private Tech Executive",
    area: "2,800 sq.ft",
    year: "2025",
    duration: "5 Months",
    heroImage:
      "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778136576/Flow_IMG_20260313_152549_01_079_bjyb1x.jpg",
    story:
      "Designed for a fast-paced tech executive, this ASBL Spire apartment acts as a decompression zone. We employed a monochromatic palette, deep textures, and acoustic treatments to create a completely silent, serene escape right in the heart of Hyderabad's IT corridor.",
    quote:
      "We didn't just design rooms; we engineered a daily retreat from the urban rush.",
   
    gallery: [
      {
        src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778136580/IMG_8736_ylflkz.jpg",
        layout: "col-span-1 aspect-square",
      },
      {
        src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778136577/IMG_8699_xntzy9.jpg",
        layout: "col-span-1 aspect-square",
      },
      {
        src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778136579/IMG_8733_puypaa.jpg",
        layout: "col-span-1 aspect-square",
      },
      {
        src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778136576/Flow_IMG_20260313_152652_01_084_jnmszy.jpg",
        layout: "col-span-1 aspect-square",
      },
      {
        src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778136575/Flow_IMG_20260313_152623_01_082_lwiruz.jpg",
        layout: "col-span-1 aspect-square",
      },
      {
        src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778136574/Flow_IMG_20260313_152509_01_075_ieqhjy.jpg",
        layout: "col-span-1 aspect-square",
      },
      {
        src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778136576/Flow_IMG_20260313_152652_01_084_jnmszy.jpg",
        layout: "col-span-1 aspect-square",
      },
      {
        src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778136574/Flow_IMG_20260313_152429_01_073_r7xbrz.jpg",
        layout: "col-span-1 aspect-square",
      },
    ],
  },
  {
    id: "eipl-cornerstone",
    title: "Eipl cornerstone",
    community: "EIPL Cornerstone",
    category: "Apartment",

    // Featured Card Layout
    layout: "col-span-1 md:col-span-2 row-span-1",

    client: "The Rao Family",
    area: "5,500 sq.ft",
    year: "2024",
    duration: "20 Days",

    heroImage:
      "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778137114/IMG_8540_egtieu.jpg",

    story:
      "This project was a delicate balancing act. The clients owned heirloom antique furniture from Coastal Andhra, which we integrated into a hyper-modern architectural shell at EIPL Cornerstone. The result is a striking juxtaposition of centuries-old craftsmanship against clean, brutalist lines.",

    quote:
      "A dialogue between the past and the future, held together by impeccable design logic.",

    gallery: [
      {
        src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778137115/IMG_8541_w13xyy.jpg",
        layout: "col-span-1 aspect-square",
      },
      {
        src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778137115/IMG_8543_li9wyv.jpg",
        layout: "col-span-1 aspect-square",
      },
      {
        src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778137113/IMG_8539_r6len9.jpg",
        layout: "col-span-1 aspect-square",
      },
    ],
  },
  {
    id: "asbl-spire",
    title: "Apartment asbl spire.",
    community: "ASBL Spectra",
    category: "Apartment",

    layout: "col-span-1 row-span-1",
    client: "Creative Agency",
    area: "3,200 sq.ft",
    year: "2026",
    duration: "4 Months",
    heroImage: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778138063/IMG_4444_jpej61.jpg",
    story:
      "A Apartment workspace designed to foster creativity. By knocking down restrictive walls, we transformed this ASBL Spectra unit into an open-plan powerhouse. We utilized fluted glass partitions to maintain privacy while allowing natural light to penetrate deep into the floor plate.",
    quote:
      "Productivity is directly correlated to the quality of light and space.",
  
    gallery: [
      {
        src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778138070/IMG_4456_g4w1fv.jpg",
        layout: "col-span-1 aspect-square",
      },
      {
        src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778138068/IMG_4454_gdtqcs.jpg",
        layout: "col-span-1 aspect-square",
      },
      { src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778138064/IMG_4438_bqlxoe.jpg", layout: "col-span-1 aspect-square" },
      {
        src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778137971/IMG_4425_efvyyj.jpg",
       layout: "col-span-1 aspect-square",
      },
      {
        src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778137940/IMG_4421_tpjdlj.jpg",
        layout: "col-span-1 aspect-square",
      },
      {
        src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778137939/IMG_4416_cl51dw.jpg",
        layout: "col-span-1 aspect-square",
      },
      { src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778137938/IMG_4411_cibiyq.jpg", layout: "col-span-1 aspect-square" },
      {
        src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778137937/IMG_4405_ek0owl.jpg",
        layout: "col-span-1 aspect-square",
      },
    ],
  },
  {
    id: "team-4-nyla",
    title: "Apartment - team 4 nyla",
    community: "team 4 nyla",
    category: "Luxury Apartment",
    // 6. TALL PORTRAIT: Drops down elegantly to finish the grid
    layout: "col-span-1 row-span-2",
    client: "Confidential",
    area: "4,100 sq.ft",
    year: "2025",
    duration: "7 Months",
    heroImage: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778138961/Flow_IMG_20260314_192424_01_465_tgfy8o.jpg",
    story:
      "High in the towers of team 4 nyla, this apartment commands sweeping views of the city. We designed the interior to defer to the view, utilizing highly reflective surfaces, low-profile Italian furniture, and seamless stretch ceilings to make the space feel boundless.",
    quote:
      "An interior that doesn't compete with the skyline, but rather invites it inside.",
  
    gallery: [
  {
    src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778138971/Flow_IMG_20260314_200100_01_573_a62ycu.jpg",
    layout: "col-span-1 aspect-square",
  },
  {
    src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778138970/Flow_IMG_20260314_193631_01_509_s6rvup.jpg",
    layout: "col-span-1 aspect-square",
  },
  {
    src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778138969/Flow_IMG_20260314_201303_01_618_blhzg5.jpg",
    layout: "col-span-1 aspect-square",
  },
  {
    src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778138965/Flow_IMG_20260314_193558_01_506_uboayo.jpg",
    layout: "col-span-1 aspect-square",
  },
  {
    src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778138962/Flow_IMG_20260314_192509_01_467_smbj6i.jpg",
    layout: "col-span-1 aspect-square",
  },
  {
    src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778138959/Flow_IMG_20260314_201310_01_619_ok5t5r.jpg",
    layout: "col-span-1 aspect-square",
  },
  {
    src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778138957/Flow_IMG_20260314_200052_01_572_ovjvbb.jpg",
    layout: "col-span-1 aspect-square",
  },
  {
    src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778138934/Flow_IMG_20260314_184650_01_316_2_akosjr.jpg",
    layout: "col-span-1 aspect-square",
  },
  {
    src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778138969/Flow_IMG_20260314_201303_01_618_blhzg5.jpg",
    layout: "col-span-1 aspect-square",
  },
  {
    src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778138936/Flow_IMG_20260314_192351_01_463_bpxgdm.jpg",
    layout: "col-span-1 aspect-square",
  },
  {
    src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778138961/Flow_IMG_20260314_192424_01_465_tgfy8o.jpg",
    layout: "col-span-1 aspect-square",
  },
  
],
  },
  {
  id: "smr-signature",
  title: "SMR Apartment",
  community: "SMR Vinay Iconia",
  category: "Apartment",

  // Featured Card Layout
  layout: "col-span-1 row-span-1",

  client: "The Sharma Family",
  area: "4,200 sq.ft",
  year: "2025",
  duration: "2 Months",

  heroImage:
    "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778139714/IMG_0768_vkuqst.jpg",

  story:
    "Located within the prestigious SMR Vinay Iconia community, this apartment was envisioned as a sophisticated urban retreat. The design language balances soft contemporary textures with bold architectural detailing, creating a space that feels luxurious, warm, and deeply personal.",

  quote:
    "Luxury lies not in excess, but in the harmony of thoughtful details.",

 
  gallery: [
    {
      src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778139712/IMG_0766_qocegu.jpg",
      layout: "col-span-1 aspect-square",
    },
    {
      src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778139711/IMG_0762_v7eqdp.jpg",
      layout: "col-span-1 aspect-square",
    },
    {
      src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778139705/IMG_0761_ygoc3r.jpg",
      layout: "col-span-1 aspect-square",
    },
    {
      src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778139704/IMG_0759_c0rfgk.jpg",
      layout: "col-span-1 aspect-square",
    },
  ],
},
];
