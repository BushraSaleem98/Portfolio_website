
import { BlogPost, Project, Skill } from './types';

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

// ORDER RULE: Add NEW posts to the END of this array.
// The website will automatically show the last item at the top (Newest).
// The first item (ID 0) will be at the bottom (Number 1).

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '0',
    title: 'From Data Curiosity to Cyber Vigilance: The Pivot',
    date: '2024-05-12',
    category: 'Career',
    readTime: '8 min',
    excerpt: 'How my path shifted toward security. Why I am trading SQL queries for SIEM logs and how my data background helps.',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
    content: [
      {
        type: 'heading',
        value: 'From Data Curiosity to Cyber Vigilance'
      },
      {
        type: 'paragraph',
        value: 'In the world of technology, most career journeys begin with fascination — fascination with trends, tools, or new possibilities. Mine began with data. I loved uncovering patterns, finding explanations behind numbers, and turning raw information into insights. Data analytics felt like solving puzzles with real-life impact, and I enjoyed every moment of working with Python, SQL, dashboards, and models.'
      },
      {
        type: 'paragraph',
        value: 'But while I was mastering the art of exploring and interpreting data, another question kept tugging at my mind — one that ultimately changed my path.'
      },
      {
        type: 'heading',
        value: 'What Got Me Started: Curiosity About Safety, Not Just Statistics'
      },
      {
        type: 'paragraph',
        value: 'My interest in data didn’t begin with numbers. It began with a thought that wouldn’t leave me alone: **“How safe is my data?”**'
      },
      {
        type: 'image',
        value: 'https://cdn-icons-png.flaticon.com/512/4348/4348490.png', // Placeholder for Fox reading manual
        alt: 'Fox reading a manual'
      },
      {
        type: 'paragraph',
        value: 'Everywhere around me, scams were multiplying — phishing attempts, suspicious links, stolen identities, compromised devices. Cyber incidents weren’t just happening to big companies; they were happening to ordinary people, every day.'
      },
      {
        type: 'paragraph',
        value: 'And the more I worked with datasets, the more uneasy I became. I wasn’t just analyzing information; I was receiving, storing, cleaning, and delivering files on my own computer. I started asking myself:'
      },
      {
        type: 'list',
        value: [
          'How secure is the data I’m analyzing?',
          'What loopholes exist in the tools I rely on?',
          'And how can I protect the information I’m responsible for?'
        ]
      },
      {
        type: 'paragraph',
        value: 'What started as simple curiosity turned into concern — and that concern pushed me into action.'
      },
      {
        type: 'heading',
        value: 'When Cyber Security Entered the Picture'
      },
      {
        type: 'paragraph',
        value: 'To protect myself, I began searching for basic security tips. But the deeper I went, the clearer it became that I had opened a door into a vast, urgent, and often alarming world.'
      },
      {
        type: 'list',
        value: [
          'Attackers break into systems',
          'Malware hides inside files',
          'Devices become vulnerable',
          'Modern hacking tools evolve faster than our defenses'
        ]
      },
      {
        type: 'paragraph',
        value: 'It was eye-opening — and honestly, a little frightening. I realized vulnerabilities aren’t always dramatic. Sometimes they’re tiny cracks: an outdated application, an exposed port, a careless download, a weak password. And with today’s tools, attackers don’t even need your permission. Silent surveillance, data sniffing, and background monitoring are far more common than we want to admit.'
      },
      {
        type: 'paragraph',
        value: 'The more I learned, the clearer the connection became: **Analyzing data and protecting data should never exist separately. They must go hand in hand.**'
      },
      {
        type: 'heading',
        value: 'Where My Skills Came Together'
      },
      {
        type: 'paragraph',
        value: 'That realization helped me see my own strengths in a new light. I had the curiosity to ask questions, the analytical mindset to dig deeper, the patience to research, and the desire to protect information — not just interpret it. So instead of choosing between data analytics and cyber security, I decided to merge them.'
      },
      {
        type: 'list',
        value: [
          '**Cyber security** gave me tools to understand risks, prevent attacks, and secure my digital environment.',
          '**Data analytics** trained me to investigate patterns, understand systems, and recognize anomalies.'
        ]
      },
      {
        type: 'paragraph',
        value: 'Together, they form a powerful combination: protection backed by insight.'
      },
      {
        type: 'heading',
        value: 'The Path Forward'
      },
      {
        type: 'image',
        value: 'https://cdn-icons-png.flaticon.com/512/2315/2315445.png', // Placeholder for Fox with headset
        alt: 'Fox with headset'
      },
      {
        type: 'paragraph',
        value: 'Today, I pursue both fields with clarity and purpose:'
      },
      {
        type: 'list',
        value: [
          '**Data analytics** helps me understand the story behind the numbers.',
          '**Cyber security** helps me ensure the story is protected.'
        ]
      },
      {
        type: 'paragraph',
        value: 'My background in data teaches me how information behaves, what normal activity looks like, and how anomalies can signal something dangerous — skills that are incredibly valuable in SOC analysis, incident response, and threat hunting.'
      },
      {
        type: 'paragraph',
        value: 'This pivot isn’t a departure from my data roots. **It’s an evolution.**'
      },
      {
        type: 'paragraph',
        value: 'A path where I can analyze smarter, defend better, and contribute to a safer digital environment — for myself, for my work, and for anyone who trusts technology with their information.'
      },
      {
        type: 'paragraph',
        value: 'It’s a journey that began with curiosity, grew with awareness, and continues with purpose. **And I’m just getting started.**'
      }
    ]
  },
  {
    id: '1',
    title: 'Understanding the OSI Model',
    date: '2024-06-02',
    category: 'Learning',
    readTime: '8 min',
    excerpt: 'Back to basics. Why understanding the 7 layers of the OSI model is crucial for any aspiring security professional.',
    content: [
      { type: 'paragraph', value: 'Full content coming soon...' }
    ]
  },
  {
    id: '2',
    title: 'My First CTF Experience: PicoCTF',
    date: '2024-07-15',
    category: 'CTF',
    readTime: '5 min',
    excerpt: 'Diving into the world of Capture The Flag. How I solved the binary exploitation challenges and what I learned about buffer overflows.',
    content: [
      { type: 'paragraph', value: 'Full content coming soon...' }
    ]
  },
  {
    id: '3',
    title: 'Building a Home Lab with Proxmox',
    date: '2024-08-20',
    category: 'Project',
    readTime: '12 min',
    excerpt: 'Setting up a safe environment to practice hacking. Installing Kali Linux, Metasploitable, and configuring virtual networks.',
    content: [
      { type: 'paragraph', value: 'Full content coming soon...' }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Python Port Scanner',
    description: 'A multi-threaded port scanner built with Python sockets. Features include banner grabbing and service version detection.',
    techStack: ['Python', 'TCP/IP', 'Threading'],
    status: 'Completed',
    imageUrl: 'https://picsum.photos/seed/scanner/400/250',
    githubUrl: '#'
  },
  {
    id: '2',
    title: 'Home Lab Dashboard',
    description: 'A React-based dashboard to monitor the health and status of my virtual machines in the home lab.',
    techStack: ['React', 'Node.js', 'InfluxDB'],
    status: 'In Progress',
    imageUrl: 'https://picsum.photos/seed/dashboard/400/250',
    githubUrl: '#'
  },
  {
    id: '3',
    title: 'Malware Analysis Sandbox',
    description: 'Automated sandbox environment for analyzing suspicious files safely.',
    techStack: ['Cuckoo', 'Python', 'VirtualBox'],
    status: 'Planned',
    imageUrl: 'https://picsum.photos/seed/malware/400/250',
    githubUrl: '#'
  }
];
