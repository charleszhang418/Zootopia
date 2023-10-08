import { type StaticImageData } from "next/image";

// a database/mondel entry
export type Entry = {
  id: string;
  title: string;
  description?: string;
  image: StaticImageData;
  date?: string;
  fileCount?: number;
};

export type Tag = {
  id: string;
  title: string;
  iconType: string;
  iconName: string;
};


// TODO: REMOVE

export type Resource = {
  id: string;
  title: string;
  description: string;
  link: string;
};

export type Subteam = {
  id: string;
  name: string;
  members: Member[];
};

export type Member = {
  id: string;
  name: string;
  position: string;
  image: StaticImageData;
  email?: string;
  website?: string;
  linkedin?: string;
  instagram?: string;
};

export type ContactField = {
  id: string;
  name: string;
  type: "input" | "textarea" | "dropdown";
  placeholder: string;
  options?: string[];
};

export type QandA = {
  id: string;
  question: string;
  answer: string;
};

export type Stat = {
  id: string;
  title: string;
  stat: number;
  suffix: string;
};

export type SponsorTier = {
  id: string;
  name: string;
  color: string;
  description: string;
  perks: string[];
  value: number;
};

export type ContactForm = {
  name: string;
  email: string;
  purpose: "Sponsorship" | "General Inquiry" | "Other";
  message?: string;
};

export type SponsorForm = {
  name: string;
  company: string;
  email: string;
  message?: string;
};