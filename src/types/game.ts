export interface GameSpec {
  icon: string;
  label: string;
  value: string;
  subtext?: string;
}

export interface GameComponentItem {
  id: string;
  name: string;
  count: string;
  category: "board" | "cards" | "figures" | "tokens" | "boards";
  description: string;
  features: string[];
  imageUrl?: string;
  badge?: string;
}

export interface TechCard {
  id: string;
  title: string;
  era: "Паровая эра" | "Эра ДВС" | "Электрическая эра" | "Эра Автономии";
  cost: number;
  vp: number;
  type: "Транспорт" | "Инфраструктура" | "Инновация" | "Экология";
  effect: string;
  flavor: string;
  tagColor: string;
}

export interface GamePhase {
  number: number;
  name: string;
  summary: string;
  details: string[];
  tip?: string;
}

export interface GameEdition {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  isPopular?: boolean;
  description: string;
  includes: string[];
}

export interface Testimonial {
  author: string;
  role: string;
  avatar?: string;
  quote: string;
  rating: number;
  channel?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: "gameplay" | "shipping" | "components";
}
