
import { Service, Project, Testimonial } from './types';

export const PHONE_NUMBER = '+91 9981271065';
export const WHATSAPP_LINK = 'https://wa.me/919981271065';
export const EMAIL = 'kavishsocial57@gmail.com';
export const PORTFOLIO_LINK = 'https://drive.google.com/drive/u/0/folders/1GNVLtpa9eUAbrXLx-3oXpgVVrjUkeoD_';
export const CINEMATIC_GUIDE_LINK = 'https://www.insta360.com/blog/tips/cinematic-videography.html';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Cinematic Shoots',
    description: 'High-end cinematography using 4K/6K equipment for commercials, music videos, and luxury events.',
    icon: 'Camera'
  },
  {
    id: '2',
    title: 'Professional Editing',
    description: 'Masterful post-production including pacing, narrative flow, and high-quality motion graphics.',
    icon: 'Video'
  },
  {
    id: '3',
    title: 'Color Grading',
    description: 'Transforming raw footage with cinematic LUTs and precision correction to achieve a premium "film" look.',
    icon: 'Palette'
  },
  {
    id: '5',
    title: 'Social Media Management & Video Production',
    description: 'Complete end-to-end management of your social channels combined with high-impact video content designed to go viral.',
    icon: 'Smartphone'
  },
  {
    id: '6',
    title: 'Sound Design',
    description: 'Immersive audio post-production including foley, mixing, and licensing for the perfect atmosphere.',
    icon: 'Music'
  }
];

export const PRICING_PLANS = [
  {
    id: 'yt-long',
    title: 'YouTube Long Video',
    price: '800',
    unit: 'per min edit',
    features: [
      'Professional Storytelling',
      'Advanced Color Grading',
      'Sound Design & Mix',
      'Motion Graphics',
      'Thumbnail Assistance'
    ],
    popular: false,
    icon: 'Youtube'
  },
  {
    id: 'yt-shorts',
    title: 'YouTube Shorts',
    price: '1,200',
    unit: 'per video',
    features: [
      'High Retention Editing',
      'Viral Captioning',
      'SFX & Sound Hooks',
      'Vertical Optimization',
      '48-Hour Delivery'
    ],
    popular: false,
    icon: 'Zap'
  },
  {
    id: 'ig-reels',
    title: 'Premium IG Reels',
    price: '1,200',
    unit: 'per video',
    options: [
      { label: 'Without Model', price: '1,200' },
      { label: 'With Model', price: '2,000' }
    ],
    features: [
      'Eye-Catching Transitions',
      'Premium Film Aesthetic',
      'Trending Music Sync',
      'Hook Optimization',
      'High-End Export'
    ],
    popular: true,
    icon: 'Instagram'
  },
  {
    id: 'ig-monthly',
    title: 'Monthly IG Bundle',
    price: '9,000',
    unit: 'per month',
    options: [
      { label: 'Without Model (10 Videos)', price: '9,000' },
      { label: 'With Model (10 Videos)', price: '15,000' }
    ],
    features: [
      '10 Premium Reels per Month',
      'Strategic Content Planning',
      'Dedicated Editor',
      'Consistent Branding',
      'Priority Turnaround'
    ],
    popular: false,
    icon: 'Calendar'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Marketing Director',
    content: 'The cinematic quality BuildView Studios delivered for our brand film was beyond our expectations. Their attention to detail in editing is unmatched.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Content Creator',
    content: "I've worked with many editors, but BuildView understands pacing like no one else. My YouTube retention rates have skyrocketed since we started collaborating.",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  }
];

export const CONTACT_WEBHOOK = 'https://hook.eu1.make.com/i24fdp5vahfk7kljhphg2l6q4ubo_1o2';
