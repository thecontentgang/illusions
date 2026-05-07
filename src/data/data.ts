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
  category: "Villa" | "Apartment" | "Commercial" | "Luxury Apartment";
  layout: string;
  client: string;
  area: string;
  year: string;
  duration: string;
  heroImage: string;
  story: string;
  quote: string;
  materials: Material[];
  gallery: GalleryImage[];
}

export const portfolioData: Project[] = [
  {
    id: "aparna-zicon",
    title: "Zicon Apartment",
    community: "Aparna Zicon",
    category: "Luxury Apartment",
    // 1. MASSIVE HERO CARD: Takes up 2 columns and 2 rows
    layout: "col-span-1 md:col-span-2 row-span-2",
    client: "Confidential",
    area: "4,500 sq.ft",
    year: "2026",
    duration: "8 Months",
    heroImage:
      "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778133973/IMG_8641_oryy1n.heic",
    story:
      "Perched high above the Hyderabad skyline in Aparna Zicon, this penthouse was designed to be a sanctuary of light and texture. The client requested a space that felt incredibly expansive yet intimate—a home where contemporary minimalism could coexist with the warmth of traditional Indian artistry.",
    quote:
      "A masterclass in restraint, using light and shadow as the primary materials of construction.",
    materials: [
      { name: "Italian Marble", hex: "#EAE6DF" },
      { name: "Walnut Wood", hex: "#4A3728" },
      { name: "Brushed Brass", hex: "#CBA135" },
      { name: "Lilac Accents", hex: "#C4B5FD" },
    ],
    gallery: [
      {
        src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778133984/IMG_8635_ejqaag.heic",
        layout: "col-span-1 aspect-square",
      },
      {
        src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778133981/IMG_8637_ayjad7.heic",
        layout: "col-span-1 aspect-square",
      },
      {
        src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778133972/Flow_IMG_20260425_172836_01_590_id2szc.jpg",
        layout: "col-span-1 aspect-square",
      },
      {
        src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778133965/Flow_IMG_20260419_214104_01_466_x1gftl.jpg",
        layout: "col-span-1 aspect-square",
      },
      {
        src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778133965/Flow_IMG_20260419_214916_01_496_bzpyya.jpg",
        layout: "col-span-1 aspect-square",
      },
      {
        src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778133981/IMG_8637_ayjad7.heic",
        layout: "col-span-1 aspect-square",
      },
    ],
  },
  {
    id: "cyber-wood-haven",
    title: "Cyber Wood Flat",
    community: "Cyber Wood",
    category: "Villa",
    // 2. STANDARD SQUARE: Tucks neatly next to the massive hero card
    layout: "col-span-1 row-span-1",
    client: "The Reddy Family",
    area: "6,200 sq.ft",
    year: "2025",
    duration: "12 Months",
    heroImage:
      "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778134821/IMG_3740_dtkjqs.jpg",
    story:
      "Nestled in the lush environs of Cyber Wood, this villa is an exercise in grounding architecture. We utilized massive raw stone slabs and sweeping teak wood ceilings to create a home that feels inherently connected to the earth, while providing ultra-modern, seamless smart-home integration.",
    quote:
      "True luxury is the absence of visual noise. This villa breathes with its inhabitants.",
    materials: [
      { name: "Kota Stone", hex: "#8B8C88" },
      { name: "Raw Teak", hex: "#8A5A44" },
      { name: "Matte Charcoal", hex: "#1F2937" },
      { name: "Linen White", hex: "#FDFDFF" },
    ],
    gallery: [
      {
        src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778134821/IMG_3734_klqxzl.jpg",
        layout: "col-span-1 aspect-square",
      },
      {
        src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778134820/IMG_3693_zhxvxm.jpg",
        layout: "col-span-1 aspect-square",
      },
      {
        src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778134815/IMG_3715_wpqvwm.jpg",
        layout: "col-span-1 aspect-square",
      },
      {
        src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778134814/IMG_3689_safuac.jpg",
        layout: "col-span-1 aspect-square",
      },
      {
        src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778134811/IMG_3682_wky5hc.jpg",
        layout: "col-span-1 aspect-square",
      },
      {
        src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778134810/IMG_3679_kqdfhm.jpg",
        layout: "col-span-1 aspect-square",
      },
      {
        src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778134813/IMG_3685_cm7nlw.jpg",
        layout: "col-span-1 aspect-square",
      },
      {
        src: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778134817/IMG_3727_xmezqg.jpg",
        layout: "col-span-1 aspect-square",
      },
    ],
  },
  {
    id: "asbl-spire-sanctuary",
    title: "Urban Sanctuary",
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
    materials: [
      { name: "Concrete Finish", hex: "#A3A3A3" },
      { name: "Smoked Oak", hex: "#3E362E" },
      { name: "Gunmetal", hex: "#2C3539" },
      { name: "Soft Greige", hex: "#D5D0C8" },
    ],
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
    id: "eipl-heritage",
    title: "EIPL Apartment",
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

    materials: [
      { name: "Rosewood", hex: "#5E2C24" },
      { name: "Travertine", hex: "#E4D5C7" },
      { name: "Aged Copper", hex: "#B87333" },
      { name: "Terracotta", hex: "#E2725B" },
    ],

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
    id: "asbl-spectra-light",
    title: "The Light Studio",
    community: "ASBL Spectra",
    category: "Commercial",
    // 5. STANDARD SQUARE: Fits into the remaining gaps
    layout: "col-span-1 row-span-1",
    client: "Creative Agency",
    area: "3,200 sq.ft",
    year: "2026",
    duration: "4 Months",
    heroImage: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778138063/IMG_4444_jpej61.jpg",
    story:
      "A commercial workspace designed to foster creativity. By knocking down restrictive walls, we transformed this ASBL Spectra unit into an open-plan powerhouse. We utilized fluted glass partitions to maintain privacy while allowing natural light to penetrate deep into the floor plate.",
    quote:
      "Productivity is directly correlated to the quality of light and space.",
    materials: [
      { name: "Fluted Glass", hex: "#E8F1F2" },
      { name: "Exposed Steel", hex: "#4B5563" },
      { name: "Birch Plywood", hex: "#DBC3A3" },
      { name: "Brand Lilac", hex: "#C4B5FD" },
    ],
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
    id: "my-home-bhooja-glass",
    title: "The Glass Residence",
    community: "My Home Bhooja",
    category: "Luxury Apartment",
    // 6. TALL PORTRAIT: Drops down elegantly to finish the grid
    layout: "col-span-1 row-span-2",
    client: "Confidential",
    area: "4,100 sq.ft",
    year: "2025",
    duration: "7 Months",
    heroImage: "https://res.cloudinary.com/dmabn7bjw/image/upload/q_auto/f_auto/v1778138961/Flow_IMG_20260314_192424_01_465_tgfy8o.jpg",
    story:
      "High in the towers of My Home Bhooja, this apartment commands sweeping views of the city. We designed the interior to defer to the view, utilizing highly reflective surfaces, low-profile Italian furniture, and seamless stretch ceilings to make the space feel boundless.",
    quote:
      "An interior that doesn't compete with the skyline, but rather invites it inside.",
    materials: [
      { name: "Calacatta Quartz", hex: "#F4F4F4" },
      { name: "Black Bronze", hex: "#2A2925" },
      { name: "Velvet Navy", hex: "#1D2A3B" },
      { name: "Warm LED Gold", hex: "#FFDFA6" },
    ],
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

  materials: [
    { name: "Ash Wood", hex: "#B08968" },
    { name: "Soft Concrete", hex: "#C9C5C1" },
    { name: "Champagne Gold", hex: "#D6B98C" },
    { name: "Muted Lilac", hex: "#C4B5FD" },
  ],

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
