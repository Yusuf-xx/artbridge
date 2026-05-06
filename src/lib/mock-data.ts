export type Event = {
  id: string;
  title: string;
  date: string;
  city: string;
  venue: string;
  genre: string;
  capacity: number;
  ticketsSold: number;
  budget: number;
  raised: number;
  image: string;
  description: string;
  artists: string[];
  sponsors: string[];
  roiEstimate: number;
  impactScore: number;
  status: "upcoming" | "selling" | "sold-out";
};

export type Artist = {
  id: string;
  name: string;
  stageName: string;
  genre: string[];
  region: string;
  followers: number;
  bio: string;
  image: string;
  feeRange: string;
  bookingStatus: "available" | "booked" | "limited";
  rating: number;
};

export const events: Event[] = [
  {
    id: "harmoni-nusantara-2026",
    title: "Harmoni Nusantara Festival",
    date: "2026-06-12",
    city: "Kuala Lumpur",
    venue: "Merdeka Square",
    genre: "World / Fusion",
    capacity: 25000,
    ticketsSold: 18420,
    budget: 2400000,
    raised: 1850000,
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1200&q=80",
    description: "A three-night celebration of Southeast Asia's most vibrant cultural voices, blending tradition with cutting-edge production.",
    artists: ["a1", "a2", "a3", "a4"],
    sponsors: ["Petronas", "Maybank", "Astro"],
    roiEstimate: 22,
    impactScore: 92,
    status: "selling",
  },
  {
    id: "kuala-jazz-summit",
    title: "Kuala Jazz Summit",
    date: "2026-07-04",
    city: "Penang",
    venue: "George Town Esplanade",
    genre: "Jazz / Contemporary",
    capacity: 8000,
    ticketsSold: 7100,
    budget: 880000,
    raised: 720000,
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=1200&q=80",
    description: "Intimate showcases featuring rising jazz collectives alongside legendary headliners.",
    artists: ["a2", "a5"],
    sponsors: ["Heineken", "MAS"],
    roiEstimate: 18,
    impactScore: 78,
    status: "selling",
  },
  {
    id: "borneo-rising",
    title: "Borneo Rising",
    date: "2026-08-22",
    city: "Kota Kinabalu",
    venue: "Likas Bay Arena",
    genre: "Indigenous / Electronic",
    capacity: 15000,
    ticketsSold: 4300,
    budget: 1500000,
    raised: 980000,
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1200&q=80",
    description: "Indigenous voices of Borneo amplified through immersive stagecraft and electronic production.",
    artists: ["a3", "a6"],
    sponsors: ["Sarawak Tourism", "Digi"],
    roiEstimate: 28,
    impactScore: 96,
    status: "upcoming",
  },
  {
    id: "national-arts-gala",
    title: "National Arts Gala",
    date: "2026-09-16",
    city: "Putrajaya",
    venue: "Istana Budaya",
    genre: "Classical / Heritage",
    capacity: 4500,
    ticketsSold: 4500,
    budget: 1200000,
    raised: 1200000,
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=1200&q=80",
    description: "A black-tie celebration of national heritage and the country's most prestigious classical performers.",
    artists: ["a4", "a5"],
    sponsors: ["Government of Malaysia", "Khazanah"],
    roiEstimate: 12,
    impactScore: 88,
    status: "sold-out",
  },
  {
    id: "indie-wave-fest",
    title: "Indie Wave Fest",
    date: "2026-10-09",
    city: "Johor Bahru",
    venue: "Danga Bay",
    genre: "Indie / Alternative",
    capacity: 12000,
    ticketsSold: 6200,
    budget: 950000,
    raised: 540000,
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&q=80",
    description: "Two days of bold new voices in indie, alternative and experimental music.",
    artists: ["a1", "a6"],
    sponsors: ["Spotify", "Grab"],
    roiEstimate: 24,
    impactScore: 81,
    status: "selling",
  },
  {
    id: "diwali-lights",
    title: "Diwali of Lights",
    date: "2026-11-01",
    city: "Ipoh",
    venue: "Stadium Perak",
    genre: "Cultural / Heritage",
    capacity: 18000,
    ticketsSold: 9100,
    budget: 1100000,
    raised: 760000,
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1200&q=80",
    description: "An evening of dance, devotion and dazzling pyrotechnics celebrating the festival of lights.",
    artists: ["a4"],
    sponsors: ["Tourism Malaysia"],
    roiEstimate: 19,
    impactScore: 84,
    status: "selling",
  },
];

export const artists: Artist[] = [
  {
    id: "a1",
    name: "Aisha Rahman",
    stageName: "AISHA R.",
    genre: ["Indie", "Electronic"],
    region: "Selangor",
    followers: 482000,
    bio: "Genre-blending vocalist whose work braids traditional pantun lyricism with electronic textures.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
    feeRange: "$15K – $40K",
    bookingStatus: "limited",
    rating: 4.9,
  },
  {
    id: "a2",
    name: "The Strait Collective",
    stageName: "STRAIT",
    genre: ["Jazz", "Fusion"],
    region: "Penang",
    followers: 128000,
    bio: "Seven-piece jazz collective fusing Peranakan rhythms with bebop sensibility.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80",
    feeRange: "$8K – $22K",
    bookingStatus: "available",
    rating: 4.7,
  },
  {
    id: "a3",
    name: "Kavi Subramaniam",
    stageName: "KAVI S.",
    genre: ["Classical", "World"],
    region: "Sabah",
    followers: 96000,
    bio: "Veena master and composer redefining classical traditions for modern stages.",
    image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=600&q=80",
    feeRange: "$12K – $30K",
    bookingStatus: "available",
    rating: 4.8,
  },
  {
    id: "a4",
    name: "Putri Larasati",
    stageName: "PUTRI L.",
    genre: ["Heritage", "Vocal"],
    region: "Putrajaya",
    followers: 720000,
    bio: "National heritage vocalist, recipient of the Anugerah Seni Negara.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80",
    feeRange: "$30K – $80K",
    bookingStatus: "booked",
    rating: 5.0,
  },
  {
    id: "a5",
    name: "Daniel Tan Quartet",
    stageName: "DTQ",
    genre: ["Jazz"],
    region: "Kuala Lumpur",
    followers: 54000,
    bio: "Pianist-led quartet pushing the boundaries of contemporary Asian jazz.",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&q=80",
    feeRange: "$6K – $15K",
    bookingStatus: "available",
    rating: 4.6,
  },
  {
    id: "a6",
    name: "Lumen Borneo",
    stageName: "LUMEN",
    genre: ["Electronic", "Indigenous"],
    region: "Sarawak",
    followers: 210000,
    bio: "Audio-visual collective sampling indigenous Borneo soundscapes for the global dancefloor.",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600&q=80",
    feeRange: "$10K – $28K",
    bookingStatus: "limited",
    rating: 4.8,
  },
];

export const surveyTrends = [
  { artist: "AISHA R.", votes: 18420 },
  { artist: "PUTRI L.", votes: 15310 },
  { artist: "LUMEN", votes: 12980 },
  { artist: "STRAIT", votes: 9420 },
  { artist: "KAVI S.", votes: 7820 },
  { artist: "DTQ", votes: 5210 },
];

export const heroStats = [
  { label: "Artists Registered", value: 2840, suffix: "+" },
  { label: "Events Hosted", value: 186, suffix: "" },
  { label: "Investors Connected", value: 412, suffix: "" },
  { label: "Economic Impact", value: 84, suffix: "M" },
];

export const investmentTiers = [
  { name: "Bronze", min: 5000, perks: ["Logo placement", "VIP tickets x2", "Quarterly report"] },
  { name: "Silver", min: 25000, perks: ["Premium logo", "VIP tickets x6", "Backstage access", "Advisory voting"] },
  { name: "Gold", min: 100000, perks: ["Co-branding", "Hospitality suite", "Naming rights option", "Direct artist access"] },
  { name: "Platinum", min: 500000, perks: ["Title sponsor", "National media", "Theme co-creation", "Lifetime board seat"] },
];

export const sponsorPackages = [
  { name: "Booth Activation", price: 12000, reach: "5K – 15K" },
  { name: "Stage Naming Rights", price: 80000, reach: "100K+" },
  { name: "Digital Bundle", price: 24000, reach: "1M+ impressions" },
  { name: "Merchandise Co-Brand", price: 35000, reach: "20K units" },
];

export const collaborations = [
  { id: "c1", artist: "AISHA R.", lookingFor: "Jazz vocalist for Penang summit", date: "Jul 2026", genre: "Jazz / Vocal" },
  { id: "c2", artist: "LUMEN", lookingFor: "Traditional percussionist for Borneo Rising", date: "Aug 2026", genre: "Percussion / Indigenous" },
  { id: "c3", artist: "DTQ", lookingFor: "Strings ensemble for chamber set", date: "Sep 2026", genre: "Classical / Jazz" },
  { id: "c4", artist: "STRAIT", lookingFor: "Indie producer for studio EP", date: "Open", genre: "Indie / Production" },
];

export const testimonials = [
  { quote: "ArtBridge gave my collective access to a national stage we'd only dreamed of.", author: "Aisha Rahman", role: "Artist" },
  { quote: "The economic impact data finally lets us measure cultural ROI with confidence.", author: "Datuk Hassan", role: "Government Liaison" },
  { quote: "We sponsored two events last quarter — both exceeded projected reach by 30%.", author: "Lina Cheong", role: "Sponsor — Brand Director" },
  { quote: "As an investor, I get transparency I never had in private arts funding.", author: "Marcus Wong", role: "Investor" },
];
