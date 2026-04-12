export interface Property {
  id: string;
  image: string;
  title: string;
  location: string;
  price: string;
  description: string;
  bedrooms: number;
  bathrooms: number;
  sqft: string;
  year: number;
  features: string[];
  gallery: string[];
  buildingType: "tower" | "villa" | "highrise";
}

export const properties: Property[] = [
  {
    id: "meridian-estate",
    image: "/Image/synergy.jpeg",
    title: "SYNERGY",
    location: "Mumbai, India",
    price: "On Request",
    description: "Signature by Shirodkar Developers stands as a prominent residential project nestled in Mulund East, renowned for its low-budget apartments. Designed to cater to the needs of modern living, Signature encompasses a range of essential amenities, ensuring a comfortable lifestyle for its residents. Residents of Signature can enjoy a serene environment coupled with the convenience of nearby amenities, making it an ideal choice for families and individuals alike. Whether it’s recreational facilities, educational institutions, or healthcare services, everything is within easy reach, enhancing the overall quality of life.Shirodkar Developers’ commitment to excellence is evident in every aspect of Signature, from its architectural design to its attention to detail. By offering attractive yet affordable housing solutions, Signature aims to fulfill the aspirations of those seeking a cozy abode in Mulund East. It’s not just a residential project; it’s a testament to affordability, quality, and modern living. ",
    bedrooms: 6,
    bathrooms: 8,
    sqft: "560- 1746 sq.ft",
    year: 2029,
    features: ["KITCHEN", "PLUMBING & SANITARY", "DOORS", "WINDOWS", "FLOORING", "WALL AND CEILING FINISHING", "ELEVATORS", "ENTRANCE LOBBY", "BANQUET HALL", "JOGGING TRACK", "YOGA & MEDITATION CENTER", "FITNESS CENTER", "CHILDREN'S PARK", "SENIOR SIT OUT", "CRICKET TURF", "SOLAR POWER", "EV CHARGE SYSTEM"],
    gallery: [
      "/Image/synergy.jpeg",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop",
    ],
    buildingType: "tower",
  },
  {
    id: "azure-waterfront",
    image: "/Image/SIGNATURE.webp",
    title: "SIGNATURE",
    location: "Mumbai, India",
    price: "On Request",
    description: "Perched on the waterfront with panoramic ocean views, this contemporary villa blends indoor and outdoor living seamlessly. Private dock, expansive terraces, and resort-style amenities.",
    bedrooms: 5,
    bathrooms: 6,
    sqft: "9,800",
    year: 2022,
    features: ["Private Dock", "Ocean Views", "Chef's Kitchen", "Spa Suite", "Guest House", "Outdoor Kitchen"],
    gallery: [
      "/Image/SIGNATURE.webp",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
    ],
    buildingType: "tower",
  },
  {
    id: "pinnacle-penthouse",
    image: "/Image/CV.jpeg",
    title: "Chembur Villa",
    location: "Mumbai, India",
    price: "On Request",
    description: "The crown jewel of Manhattan living. This full-floor penthouse offers 360-degree views from Central Park to the Hudson River, with bespoke finishes by world-renowned designers.",
    bedrooms: 4,
    bathrooms: 5,
    sqft: "8,200",
    year: 2024,
    features: ["KITCHEN", "PLUMBING & SANITARY", "360° Views", "Private Elevator", "Gallery Wall", "Butler's Pantry", "Climate-Controlled Wine Room", "Terrace Garden"],
    gallery: [
      "/Image/CV.jpeg",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    ],
    buildingType: "villa",
  },
  // {
  //   id: "oasis-retreat",
  //   image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop",
  //   title: "Oasis Modern Retreat",
  //   location: "Scottsdale, Arizona",
  //   price: "$6.2M",
  //   description: "Desert luxury at its finest. Clean lines and natural materials create harmony with the surrounding landscape. Expansive glass walls dissolve the boundary between interior and exterior.",
  //   bedrooms: 5,
  //   bathrooms: 5,
  //   sqft: "7,600",
  //   year: 2023,
  //   features: ["Desert Views", "Heated Pool", "Fire Pit Lounge", "Meditation Garden", "Solar Powered", "Art Studio"],
  //   gallery: [
  //     "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop",
  //   ],
  //   buildingType: "villa",
  // },
  // {
  //   id: "grand-chateau",
  //   image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
  //   title: "The Grand Chateau",
  //   location: "Aspen, Colorado",
  //   price: "$18.7M",
  //   description: "An alpine masterpiece combining European grandeur with mountain modern design. Ski-in/ski-out access, with every room offering views of the majestic Rockies.",
  //   bedrooms: 7,
  //   bathrooms: 9,
  //   sqft: "15,200",
  //   year: 2021,
  //   features: ["Ski-In/Ski-Out", "Mountain Views", "Indoor Pool", "Library", "Wine Vault", "Heated Driveway"],
  //   gallery: [
  //     "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
  //   ],
  //   buildingType: "tower",
  // },
  // {
  //   id: "serenity-bay",
  //   image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=400&fit=crop",
  //   title: "Serenity Bay House",
  //   location: "Malibu, California",
  //   price: "$15.3M",
  //   description: "Where the Pacific meets perfection. This beachfront sanctuary features walls of glass that open to private decks, capturing the rhythm of the ocean in every room.",
  //   bedrooms: 5,
  //   bathrooms: 6,
  //   sqft: "8,900",
  //   year: 2024,
  //   features: ["Beachfront", "Surf Room", "Outdoor Shower", "Green Roof", "EV Charging", "Smart Glass"],
  //   gallery: [
  //     "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
  //   ],
  //   buildingType: "highrise",
  // },
];
