export const routes = {
    home: "", 
    Achievements: "achievements",
    Aboutus: "Aboutus",
    faq: "faq",
    Features: "Features",
    features: "features",
    promo: "promotion",
    footer: "footer",
};

export const appLinks = Object.values(routes);

import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
