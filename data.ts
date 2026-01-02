
import { JournalEntry, Track, Project } from './types';

export const JOURNAL_ENTRIES: JournalEntry[] = [
  {
    id: '1',
    title: 'Migrating to table-less layouts',
    date: '2003.04.12',
    excerpt: 'Spent the weekend refactoring my core project architecture to use float-based CSS instead of nested tables...',
    content: 'Spent the weekend refactoring my core project architecture to use float-based CSS instead of nested tables. It is a steep learning curve, but the code is so much cleaner. Netscape 4 support is getting trickier, but I believe the "standards-compliant" movement is the future of the web.\n\nI also updated my client dashboard with a new PHP backend. The speed improvements in version 4.3 are noticeable.'
  },
  {
    id: '2',
    title: 'Visual Design and Accessibility',
    date: '2003.04.18',
    excerpt: 'Attended a small local workshop on web accessibility. It is fascinating how simple adjustments can change everything...',
    content: 'Attended a small local workshop on web accessibility. It is fascinating how simple adjustments—like ensuring high contrast and using descriptive ALT tags—can make a site usable for everyone. I have started auditing all my current portfolio projects to meet these new standards.\n\nDesign is not just how it looks, but how it works for all users.'
  },
  {
    id: '3',
    title: 'Building a custom CMS',
    date: '2003.05.01',
    excerpt: 'The quest for the perfect Content Management System continues. I started coding my own lightweight engine...',
    content: 'The quest for the perfect Content Management System continues. I started coding my own lightweight engine called "PaperPlane." It uses flat-files for data storage to maximize speed on shared hosting environments. No MySQL required for simple sites!\n\nThis portfolio is currently running on a prototype version of that engine.'
  }
];

export const TRACK_LIST: Track[] = [
  { id: 1, title: 'Development Flow', artist: 'Code Beats', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
  { id: 2, title: 'Office Atmosphere', artist: 'Focus Group', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
  { id: 3, title: 'Syntax Highlighting', artist: 'Lofi Pulse', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    name: 'Nebula Site Engine',
    category: 'Web Tool',
    year: '2003',
    description: 'A revolutionary template engine for building faster, table-less websites.',
    tech: ['HTML', 'CSS', 'PHP']
  },
  {
    id: 'p2',
    name: 'CyberStream Portal',
    category: 'Commercial',
    year: '2002',
    description: 'Corporate portal for a mid-sized technology firm focused on networking.',
    tech: ['Flash', 'ActionScript', 'Classic ASP']
  },
  {
    id: 'p3',
    name: 'Pixel Art Gallery v2',
    category: 'Experimental',
    year: '2003',
    description: 'An online showcase for high-quality pixel art and sprite design.',
    tech: ['JS', 'CSS', 'XML']
  }
];
