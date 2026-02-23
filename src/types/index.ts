/* ─── Project / Portfolio types ─── */
export interface Project {
  id: number;
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  area: string;
  style: string;
  concept: string;
  materials: string;
  features: string;
  location?: string;
  images: string[];       // TODO: replace with real image paths
  thumbnail: string;      // TODO: replace with real image path
  featured: boolean;
}

export type ProjectCategory =
  | "سكني"
  | "تجاري"
  | "داخلي"
  | "مكتبي"
  | "ضيافة";

import { LucideIcon } from "lucide-react";

/* ─── Service type ─── */
export interface Service {
  id: number;
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

/* ─── Testimonial type ─── */
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
}

/* ─── Navigation link ─── */
export interface NavLink {
  label: string;
  href: string;
}
