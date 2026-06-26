export interface Message {
  id: string;
  role: "user" | "model";
  content: string;
  timestamp: Date;
}

export interface Course {
  id: string;
  title: { en: string; ar: string };
  duration: { en: string; ar: string };
  level: { en: string; ar: string };
  description: { en: string; ar: string };
  syllabus: { en: string[]; ar: string[] };
  icon: string;
}

export type Language = "en" | "ar";
