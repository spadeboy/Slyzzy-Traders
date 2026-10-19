export interface Product {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  features: string[];
  images: string[];
  price: number;
  mrp: number;
  discount: string;
  weight: string;
  origin: string;
  rating: string;
  frontJarImage: string;
  bgLifestyleImage: string;
  infoImage: string;
  theme: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

export const businessInfo = {
  name: "Slyzzy Traders",
  tagline: "Authorized Distributor, Est. 2020",
  address: "Nadoorkolla, Amaravila, Thiruvananthapuram",
  phone: ["9567834610", "9400834610"],
  email: "slyzzy@gmail.com",
};

export const products: Product[] = [
  {
    id: "mabroom-dates",
    title: "Slyzzy Premium Mabroom Dates",
    subtitle: "Saudi Arabian Long Khajur | 100% Natural Soft & Chewy",
    category: "Dates",
    description: "Premium Mabroom dates sourced directly from the finest date farms in Saudi Arabia. Distinctive long, slender shape with a deep brown color.",
    features: [
      "Sourced directly from the finest date farms in Saudi Arabia.",
      "Distinctive long, slender shape with a deep brown color.",
      "100% natural, vegan, gluten-free, no added sugar.",
      "Nutrient-Rich Energy Booster packed with iron and fiber.",
    ],
    images: [
      "/images/products/611tydLHNlL._SL1024_.png",
      "/images/products/716maDGXwcL._SL1024_.jpg",
      "/images/products/61Iq-tBM1mL._SL1024_.jpg",
      "/images/products/71VdMsqv48L._SL1500_.jpg",
      "/images/products/61DfduOnoJL._SL1024_.jpg",
    ],
    price: 485,
    mrp: 540,
    discount: "10%",
    weight: "500g",
    origin: "Saudi Arabia",
    rating: "4.8/5 (1,240 Reviews)",
    frontJarImage: "/images/products/611tydLHNlL._SL1024_.png",
    bgLifestyleImage: "/images/products/716maDGXwcL._SL1024_.jpg",
    infoImage: "/images/products/61Iq-tBM1mL._SL1024_.jpg",
    theme: {
      primary: "#2A1610",
      secondary: "#4A2C1A",
      accent: "#D4A574",
    },
  },
  {
    id: "medjool-dates",
    title: "Slyzzy Premium Medjool Dates",
    subtitle: "Authentic Saudi Arabian Khajoor | Rich In Fiber & Iron",
    category: "Dates",
    description: "Known as the king of dates, prized for their large size and rich caramel-like flavour. Sourced directly from Saudi Arabia.",
    features: [
      "Authentic Saudi Arabian Origin.",
      "Known as the king of dates, prized for their large size and soft texture.",
      "Rich caramel-like flavour, naturally sweet.",
      "Generous 500g Pack, completely natural and vegan.",
    ],
    images: [
      "/images/products/51K+O+3ZkOL._SX679_.png",
      "/images/products/61nmfvGKHIL._SL1024_.jpg",
      "/images/products/61Qz5+Z9i7L._SL1024_.jpg",
    ],
    price: 519,
    mrp: 600,
    discount: "14%",
    weight: "500g",
    origin: "Saudi Arabia",
    rating: "4.9/5 (890 Reviews)",
    frontJarImage: "/images/products/51K+O+3ZkOL._SX679_.png",
    bgLifestyleImage: "/images/products/61nmfvGKHIL._SL1024_.jpg",
    infoImage: "/images/products/61Qz5+Z9i7L._SL1024_.jpg",
    theme: {
      primary: "#1A0B06",
      secondary: "#2D1810",
      accent: "#C4A060",
    },
  },
];

export const categories = ["All", "Dates"];

export const featuredProducts = products;
