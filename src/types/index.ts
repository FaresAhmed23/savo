export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "appetizer" | "main" | "dessert" | "beverage";
  image: string;
  dietary?: string[];
  popular?: boolean;
}

export interface OpeningHours {
  day: string;
  hours: string;
  closed?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}
