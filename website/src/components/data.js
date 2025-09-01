// data/products.js
export const products = [
  // UD Trucks (UD 100, UD Quon, UD Quester) Products
  {
    id: 1,
    name: "UD Service Kit Complete",
    part: "UD-SK-001",
    brand: "UD Trucks",
    price: 450.00,
    inStock: true,
    warranty: "12 months",
    rating: 4.8,
    reviews: 45,
    category: "service-kits",
    vehicles: ["UD 100", "UD Quon", "UD Quester"],
    image: "/UDservicekits.avif"
  },
  {
    id: 2,
    name: "UD Starter Motor",
    part: "UD-STM-002",
    brand: "UD Trucks",
    price: 320.00,
    inStock: true,
    warranty: "18 months",
    rating: 4.7,
    reviews: 32,
    category: "electrical",
    vehicles: ["UD 100", "UD Quon", "UD Quester"],
    image: "/UDstartermotor.webp"
  },
  {
    id: 3,
    name: "UD Alternator",
    part: "UD-ALT-003",
    brand: "UD Trucks",
    price: 280.00,
    inStock: true,
    warranty: "12 months",
    rating: 4.6,
    reviews: 28,
    category: "electrical",
    vehicles: ["UD 100", "UD Quon", "UD Quester"],
    image: "/Alternators.png"
  },
  {
    id: 4,
    name: "Fog Light Switch",
    part: "FL-SW-004",
    brand: "Universal",
    price: 35.00,
    inStock: true,
    warranty: "6 months",
    rating: 4.4,
    reviews: 67,
    category: "lighting",
    vehicles: ["UD 100", "UD Quon", "UD Quester"],
    image: "/foglight.jpg"
  },
  {
    id: 5,
    name: "Accelerator Pedal Sensor",
    part: "APS-005",
    brand: "OEM",
    price: 125.00,
    inStock: true,
    warranty: "12 months",
    rating: 4.5,
    reviews: 23,
    category: "sensors",
    vehicles: ["UD 100", "UD Quon", "UD Quester"],
    image: "/pedalsensor.avif"
  },
  {
    id: 6,
    name: "Air Dryer Repair Kit",
    part: "AD-RK-006",
    brand: "Universal",
    price: 85.00,
    inStock: true,
    warranty: "12 months",
    rating: 4.7,
    reviews: 19,
    category: "air-system",
    vehicles: ["UD 100", "UD Quon", "UD Quester"],
    image: "/airdryer.webp"
  },
  {
    id: 7,
    name: "UD Clutch Kit",
    part: "UD-CK-007",
    brand: "UD Trucks",
    price: 650.00,
    inStock: true,
    warranty: "24 months",
    rating: 4.9,
    reviews: 41,
    category: "transmission",
    vehicles: ["UD 100", "UD Quon", "UD Quester"],
    image: "/clutch.avif"
  },
  {
    id: 8,
    name: "Oil Separator Gasket",
    part: "OSG-008",
    brand: "OEM",
    price: 45.00,
    inStock: true,
    warranty: "6 months",
    rating: 4.3,
    reviews: 15,
    category: "engine",
    vehicles: ["UD 100", "UD Quon", "UD Quester"],
    image: "/Gasket.jpg"
  },

  // Freightliner FL70 Products
  {
    id: 9,
    name: "Freightliner Service Kit",
    part: "FL70-SK-009",
    brand: "Freightliner",
    price: 380.00,
    inStock: true,
    warranty: "12 months",
    rating: 4.6,
    reviews: 35,
    category: "service-kits",
    vehicles: ["Freightliner FL70"],
    image: "/freightlinerSTARTER.webp"
  },
  {
    id: 10,
    name: "Freightliner Shock Absorber",
    part: "FL70-SA-010",
    brand: "Freightliner",
    price: 180.00,
    inStock: true,
    warranty: "18 months",
    rating: 4.5,
    reviews: 27,
    category: "suspension",
    vehicles: ["Freightliner FL70"],
    image: "/shockAbsorber.jpg"
  },
  {
    id: 11,
    name: "Freightliner Clutch Kit",
    part: "FL70-CK-011",
    brand: "Freightliner",
    price: 720.00,
    inStock: true,
    warranty: "24 months",
    rating: 4.8,
    reviews: 33,
    category: "transmission",
    vehicles: ["Freightliner FL70"],
    image: "/freightlinerClutchkits.jpg"
  },
  {
    id: 12,
    name: "Freightliner Starter Motor",
    part: "FL70-STM-012",
    brand: "Freightliner",
    price: 350.00,
    inStock: true,
    warranty: "18 months",
    rating: 4.7,
    reviews: 29,
    category: "electrical",
    vehicles: ["Freightliner FL70"],
    image: "/freightlinerServicekit.jpg"
  },

  // Hino Products (Hino 300, 500, Dutro)
  {
    id: 13,
    name: "Hino Service Kit",
    part: "HINO-SK-013",
    brand: "Hino",
    price: 420.00,
    inStock: true,
    warranty: "12 months",
    rating: 4.8,
    reviews: 52,
    category: "service-kits",
    vehicles: ["Hino 300", "Hino 500", "Hino Dutro"],
    image: "/hinoServiceKits.webp"
  },
  {
    id: 14,
    name: "Hino Hub Seal",
    part: "HINO-HS-014",
    brand: "Hino",
    price: 65.00,
    inStock: true,
    warranty: "12 months",
    rating: 4.4,
    reviews: 38,
    category: "seals",
    vehicles: ["Hino 300", "Hino 500", "Hino Dutro"],
    image: "/HinoHubSeal.jpg"
  },
  {
    id: 15,
    name: "Hino Starter Motor",
    part: "HINO-STM-015",
    brand: "Hino",
    price: 290.00,
    inStock: true,
    warranty: "18 months",
    rating: 4.6,
    reviews: 44,
    category: "electrical",
    vehicles: ["Hino 300", "Hino 500", "Hino Dutro"],
    image: "/hinoStarter.jpg"
  },
  {
    id: 16,
    name: "Hino Alternator",
    part: "HINO-ALT-016",
    brand: "Hino",
    price: 340.00,
    inStock: true,
    warranty: "12 months",
    rating: 4.7,
    reviews: 36,
    category: "electrical",
    vehicles: ["Hino 300", "Hino 500", "Hino Dutro"],
    image: "/HinoAlternator.webp"
  },
  {
    id: 17,
    name: "Hino Starter Motor (Alternative)",
    part: "HINO-STM-017",
    brand: "Hino",
    price: 310.00,
    inStock: true,
    warranty: "18 months",
    rating: 4.5,
    reviews: 31,
    category: "electrical",
    vehicles: ["Hino 300", "Hino 500", "Hino Dutro"],
    image: "/hinoStartermotor.webp"
  },

  // Universal/Common Parts
  {
    id: 18,
    name: "24V 5-Pin Relay",
    part: "REL-24V-018",
    brand: "Universal",
    price: 25.00,
    inStock: true,
    warranty: "6 months",
    rating: 4.3,
    reviews: 89,
    category: "electrical",
    vehicles: ["Universal"],
    image: "/PINrelays.jpg"
  },
  {
    id: 19,
    name: "Corner Lamp Assembly",
    part: "CL-019",
    brand: "Universal",
    price: 55.00,
    inStock: true,
    warranty: "12 months",
    rating: 4.2,
    reviews: 76,
    category: "lighting",
    vehicles: ["Universal"],
    image: "/cornerlambs.jpg"
  }
];

// Product categories for filtering
export const categories = [
  { id: 'service-kits', name: 'Service Kits', icon: '🔧' },
  { id: 'electrical', name: 'Electrical', icon: '⚡' },
  { id: 'transmission', name: 'Transmission', icon: '⚙️' },
  { id: 'lighting', name: 'Lighting', icon: '💡' },
  { id: 'sensors', name: 'Sensors', icon: '📡' },
  { id: 'air-system', name: 'Air System', icon: '💨' },
  { id: 'engine', name: 'Engine', icon: '🔩' },
  { id: 'suspension', name: 'Suspension', icon: '🏗️' },
  { id: 'seals', name: 'Seals & Gaskets', icon: '🔒' }
];

// Vehicle brands for filtering
export const brands = [
  { id: 'ud-trucks', name: 'UD Trucks', models: ['UD 100', 'UD Quon', 'UD Quester'] },
  { id: 'freightliner', name: 'Freightliner', models: ['FL70'] },
  { id: 'hino', name: 'Hino', models: ['Hino 300', 'Hino 500', 'Hino Dutro'] },
  { id: 'universal', name: 'Universal', models: ['Universal'] }
];