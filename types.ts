
export interface Comment {
  id: string;
  author: string;
  text: string;
  date: string;
}

export interface JournalEntry {
  id: string;
  title: string;
  date: string;
  content: string;
  excerpt: string;
}

export interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  date: string;
}

export interface Track {
  id: number;
  title: string;
  artist: string;
  url: string;
}

export interface Project {
  id: string;
  name: string;
  category: string;
  year: string;
  description: string;
  tech: string[];
}
