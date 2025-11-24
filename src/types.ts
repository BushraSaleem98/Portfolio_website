export interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: 'CTF' | 'Learning' | 'Project' | 'Career';
  excerpt: string;
  // Structured content to allow mixed text and images easily
  content: Array<{
    type: 'paragraph' | 'heading' | 'image' | 'list';
    value: string | string[]; // string for text/src, array for list items
    alt?: string; // for images
  }>;
  readTime: string;
  imageUrl?: string; // Cover image
}

export interface Skill {
  id: string;
  name: string;
  progress: number; // 0 to 100
  category: 'Offensive' | 'Defensive' | 'Tools' | 'Languages';
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  status: 'In Progress' | 'Completed' | 'Planned';
  imageUrl: string;
  githubUrl?: string;
}

export enum ChatRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  role: ChatRole;
  text: string;
  timestamp: Date;
}
