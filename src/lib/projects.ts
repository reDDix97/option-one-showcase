import duplex from "@/assets/project-duplex.jpg";
import office from "@/assets/project-office.jpg";
import bedroom from "@/assets/project-bedroom.jpg";
import kitchen from "@/assets/project-kitchen.jpg";
import restaurant from "@/assets/project-restaurant.jpg";
import villa from "@/assets/project-villa.jpg";

export type Project = {
  slug: string;
  title: string;
  type: string;
  location: string;
  year: string;
  area: string;
  summary: string;
  description: string;
  image: string;
  category: "Residential" | "Commercial" | "Architectural";
};

export const projects: Project[] = [
  {
    slug: "the-marble-duplex",
    title: "The Marble Duplex",
    type: "Duplex Residence",
    location: "Gulshan-2, Dhaka",
    year: "2024",
    area: "5,400 sq ft",
    summary: "A two-storey private residence sculpted around a sweeping black-steel staircase and Calacatta marble floors.",
    description: "Designed for a young family who wanted a calm sanctuary above the city, The Marble Duplex pairs warm walnut joinery with cool stone and a restrained palette of ink, cream and brass. Every detail — from the recessed coves to the custom railings — was developed in-house and produced by our craftsmen.",
    image: duplex,
    category: "Residential",
  },
  {
    slug: "meridian-corporate-hq",
    title: "Meridian Corporate HQ",
    type: "Corporate Office",
    location: "Banani, Dhaka",
    year: "2024",
    area: "12,800 sq ft",
    summary: "An executive headquarters that balances boardroom gravitas with the openness of a modern workplace.",
    description: "A full-floor corporate fit-out for a holding company, organised around a curved walnut boardroom, glass-walled cabins and a generous reception in honed stone. Acoustic ceilings, integrated AV and concealed lighting deliver a workplace that feels effortless to operate.",
    image: office,
    category: "Commercial",
  },
  {
    slug: "rosewood-master-suite",
    title: "Rosewood Master Suite",
    type: "Luxury Apartment",
    location: "Baridhara, Dhaka",
    year: "2023",
    area: "1,200 sq ft (suite)",
    summary: "A hotel-grade primary suite layered in velvet, brass and bespoke joinery.",
    description: "Carved out of an existing apartment, the suite folds bedroom, dressing room and bath into a single quiet sequence. Hand-tufted upholstery, ribbed brass sconces and a deep tonal palette create a room that feels both intimate and ceremonial.",
    image: bedroom,
    category: "Residential",
  },
  {
    slug: "atelier-kitchen",
    title: "Atelier Kitchen",
    type: "Custom Kitchen",
    location: "Uttara, Dhaka",
    year: "2024",
    area: "420 sq ft",
    summary: "A handleless, gallery-style kitchen anchored by a single block of black marble.",
    description: "Built around the way a serious home cook actually works. Floor-to-ceiling oak veneer cabinetry, integrated appliances and a continuous black-stone island with a single brass pendant. Every joint, reveal and seam was drafted at full scale before fabrication.",
    image: kitchen,
    category: "Residential",
  },
  {
    slug: "verdant-supper-club",
    title: "Verdant Supper Club",
    type: "Restaurant",
    location: "Dhanmondi, Dhaka",
    year: "2023",
    area: "3,200 sq ft",
    summary: "A members-style dining room dressed in forest velvet, brass and walnut.",
    description: "Inspired by the European supper clubs of the 1920s, the room is built from deep green wainscoting, custom banquettes, antique-brass pendants and a long marble bar. A carefully tuned lighting scheme keeps the room warm at dinner and operable at brunch.",
    image: restaurant,
    category: "Commercial",
  },
  {
    slug: "stone-and-cedar-villa",
    title: "Stone & Cedar Villa",
    type: "Private Villa",
    location: "Purbachal, Dhaka",
    year: "2024",
    area: "8,600 sq ft",
    summary: "A ground-up architectural villa in stone, cedar and glass overlooking the lake.",
    description: "From master planning to interior styling, Stone & Cedar Villa is a complete architectural commission. Cantilevered roofs shade full-height glazing, while the interior is anchored by warm timber ceilings, honed limestone floors and a quiet, layered material palette.",
    image: villa,
    category: "Architectural",
  },
];