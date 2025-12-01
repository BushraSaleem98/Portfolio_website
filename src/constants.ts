// src/constants.ts

import { Skill, Certificate } from './types';

// Navigation links
export const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Journey", path: "/journey" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

// Technical skills
export const SKILLS: Skill[] = [
  { id: '1', name: 'Network Security', progress: 75, category: 'Defensive' },
  { id: '2', name: 'Penetration Testing', progress: 45, category: 'Offensive' },
  { id: '3', name: 'Python Scripting', progress: 80, category: 'Languages' },
  { id: '4', name: 'Linux Administration', progress: 90, category: 'Tools' },
  { id: '5', name: 'Wireshark', progress: 60, category: 'Tools' },
  { id: '6', name: 'Web App Security (OWASP)', progress: 40, category: 'Offensive' },
  { id: '7', name: 'SIEM (Splunk/Elastic)', progress: 30, category: 'Defensive' },
  { id: '8', name: 'SQL', progress: 95, category: 'Languages' },
];

// Certifications
export const CERTIFICATES: Certificate[] = [
  {
    id: '1',
    title: 'Associate Data Analyst in SQL',
    issuer: 'DataCamp',
    date: 'Sep 03, 2025',
    imageUrl: 'https://placehold.co/600x400/22c55e/ffffff?text=DataCamp+Certificate',
    credentialUrl: 'https://www.datacamp.com/completed/statement-of-accomplishment/track/d46d339faa4b65a6e3c24f2657ff175e917586c6?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa&utm_source=linkedin'
  },
  {
    id: '2',
    title: 'Example Certificate (Manual Upload)',
    issuer: 'Course Provider',
    date: 'Aug 2024',
    imageUrl: 'https://placehold.co/600x400/1e293b/ffffff?text=Certificate+Image'
  }
];
