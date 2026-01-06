import { Leaf, Droplet, Wind, ShieldCheck, Sun, Coffee } from 'lucide-react';


// Asset URLs - Curated to fit the "Zen/Minimal" aesthetic
export const ASSETS = {
  heroBg: "/images/hero/hero.jpeg", // Elegant tea ceremony/pouring
  hojicha: "/images/products/hojicha.jpg",
  premiumatcha: "/images/products/premium.jpg", // High texture powder
  teaField: "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?q=80&w=1974&auto=format&fit=crop", // Misty hills
  culinarymatcha: "/images/products/culinary.jpg", // Matcha latte
  minimalWhisk: "https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=2070&auto=format&fit=crop", // Bamboo whisk
  guizhou: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop", // Mountains
  jingshan: "/images/origin/jingshan.jpg", // Misty mountains
};

export const NAV_ITEMS = [
  { label: 'Our Story', href: '#origin' },
  { label: 'Products', href: '#products' },
  { label: 'Applications', href: '#applications' },
  { label: 'Wholesale', href: '#wholesale' },
];

export const HIGHLIGHTS  = [
  {
    icon: Sun,
    title: "Vibrant Color",
    description: "Vibrant green color and clean visual clarity."
  },
  {
    icon: Droplet,
    title: "Smooth Umami",
    description: "Balanced umami with a soft finish, no bitterness."
  },
  {
    icon: Wind,
    title: "Effortless Mixing",
    description: "Fine, consistent texture for zero clumps."
  },
  {
    icon: ShieldCheck,
    title: "EU Tested Clean",
    description: "Lab-tested for safety, purity, and consistency." // 600+ pesticides screened.
  },
  {
    icon: Leaf,
    title: "High L-Theanine",
    description: "Naturally high L-theanine for calm, focused energy."
  },
  {
    icon: Coffee,
    title: "Versatile Aroma",
    description: "Fresh aroma that elevates beverages and bakery."
  }
];

export const PRODUCTS = [
  {
    id: 'premium',
    name: 'Premium Organic Matcha',
    description: 'Ideal for matcha tea and café-style lattes. Smooth, bright, and balanced.',
    tags: ['Best Seller', 'Lattes', 'Tea'],
    
    powderImage: "/images/products/ppowder.png",
    
    image: ASSETS.premiumatcha
  },
  {
    id: 'culinary',
    name: 'Culinary Matcha',
    description: 'Designed for lattes, smoothies, bakery, desserts, and all-round kitchen use. High versatility and excellent value.',
    tags: ['Bakery', 'Smoothies', 'Value'],
    
    powderImage: "/images/products/cpowder.png",

    image: ASSETS.culinarymatcha
  },
  {
    id: 'hojicha',
    name: 'Premium Hojicha Powder',
    description: 'Roasted green tea powder with warm, nutty notes—perfect for lattes, bakery, and pastry.',
    tags: ['Roasted', 'Nutty', 'Warm'],
    
    powderImage: "/images/products/hpowder.png",

    image: ASSETS.hojicha
  },
];
 /* 
 {
    id: 'ceremonial',
    name: 'Limited Ceremonial (2026)',
    description: 'First-flush spring harvest. Higher amino acids, fresher sweetness, and refined flavor.',
    tags: ['First Flush', 'Pre-order'],
    image: ASSETS.minimalWhisk,
    status: 'Coming Soon'
  }
];
*/

export const ORIGINS = [
  {
     id: "jingshan",
    enabled: true,
    region: 'Zhejiang · Jingshan',
    title: 'The Golden Tea Belt (30°N)',
    description: 'One of China’s most renowned ecological tea regions and the historical birthplace of steamed green tea.',
    details: [
      'Located near 30°N Golden Tea Belt',
      'Misty mountains and fertile soil',
      'Over 1,000 years of tea culture heritage'
    ],
    image: ASSETS.jingshan,
  },
  {
    id: "guizhou",
    enabled: false,
    region: 'Guizhou · Northern Highlands',
    title: 'High Altitude, Pure Ecology',
    description: 'A high-altitude, low-latitude region with soft, diffused sunlight and mineral-rich, pollution-free soil.',
    details: [
      'Exceptionally clean air and year-round mist',
      'Higher amino acids for smoother umami',
      'Vivid green color development'
    ]
  }
];

export const BREWING_GUIDE = [
  "3g sifted matcha",
  "20–30 ml warm water (70–80°C)",
  "Whisk or electric frother until smooth",
  "Add milk and ice"
];
