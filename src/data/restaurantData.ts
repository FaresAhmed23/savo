// src/data/restaurantData.ts
import { OpeningHours, Testimonial } from "@/types";

export const openingHours: OpeningHours[] = [
  { day: "Monday", hours: "11:00 AM - 10:00 PM" },
  { day: "Tuesday", hours: "11:00 AM - 10:00 PM" },
  { day: "Wednesday", hours: "11:00 AM - 10:00 PM" },
  { day: "Thursday", hours: "11:00 AM - 10:00 PM" },
  { day: "Friday", hours: "11:00 AM - 11:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 11:00 PM" },
  { day: "Sunday", hours: "10:00 AM - 10:00 PM" },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    rating: 5,
    comment:
      "Absolutely divine! The best Italian food I've had outside of Italy.",
    date: "2024-01-15",
  },
  {
    id: "2",
    name: "Gordon Ramsay",
    rating: 5,
    comment:
      "Bloody brilliant! The risotto is cooked to perfection and the service is exceptional. This is how Italian cuisine should be done!",
    date: "2024-01-20",
  },
  {
    id: "3",
    name: "Emma Wilson",
    rating: 5,
    comment: "The atmosphere is romantic and the food is exceptional.",
    date: "2024-01-25",
  },
];
