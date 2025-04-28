import { ServiceCategory } from '../types';

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'website',
    title: 'Website Development',
    services: [
      {
        id: 'web-basic',
        category: 'website',
        title: 'Website Coding (3-5 pages)',
        description: 'Professional website development with responsive design, optimized for all devices.',
        price: '₹3,999-₹5,999',
        discountPrice: '₹2,499-₹4,599'
      },
      {
        id: 'web-seo',
        category: 'website',
        title: 'SEO',
        description: 'Search engine optimization to improve your website\'s visibility.',
        price: '₹299',
        disclaimer: 'Optional'
      },
      {
        id: 'web-content',
        category: 'website',
        title: 'Content Writing',
        description: 'Professional content writing for your website.',
        price: '₹799',
        discountPrice: '₹499',
        disclaimer: 'Optional'
      },
      {
        id: 'web-video',
        category: 'website',
        title: 'Free Video',
        description: 'Get a free promotional video for your website.',
        price: 'Free',
        disclaimer: 'Subject to availability'
      },
      {
        id: 'web-hosting',
        category: 'website',
        title: 'Website Hosting',
        description: 'Reliable hosting for your website with technical support.',
        price: '₹265/mo',
        disclaimer: 'Cancellation fees ₹2,000'
      },
      {
        id: 'web-custom-domain',
        category: 'website',
        title: 'Custom Domain',
        description: 'Get a domain that matches your company name.',
        price: 'Varies',
        disclaimer: 'Subject to availability'
      },
      {
        id: 'web-random-domain',
        category: 'website',
        title: 'Random Domain',
        description: 'Get a domain close to your company name at the lowest cost.',
        price: 'Varies',
        disclaimer: 'Subject to availability'
      }
    ]
  },
  {
    id: 'video',
    title: 'Video Editing',
    services: [
      {
        id: 'video-long',
        category: 'video',
        title: 'Long Form Video (8-30 min)',
        description: 'Professional editing for long-form content. Price per minute from non-edited length.',
        price: '₹1,599-₹6,000',
        disclaimer: '₹200 per minute starting from 8 min'
      },
      {
        id: 'video-short',
        category: 'video',
        title: 'Shorts (0-8 min)',
        description: 'Quick and engaging edits for short-form content.',
        price: '₹199-₹1,599',
        disclaimer: 'Based on non-edited length'
      }
    ]
  },
  {
    id: 'photo',
    title: 'Photo Editing',
    services: [
      {
        id: 'photo-basic',
        category: 'photo',
        title: 'Basic Photo Corrections',
        description: 'Color correction, lighting adjustments, and basic enhancements.',
        price: '₹699',
        disclaimer: 'Per picture'
      },
      {
        id: 'photo-advanced',
        category: 'photo',
        title: 'Advanced Photo Manipulations',
        description: 'Complex edits, object removal, compositing, and creative effects.',
        price: '₹899',
        disclaimer: 'Per picture'
      },
      {
        id: 'photo-thumbnail',
        category: 'photo',
        title: 'Thumbnail Creation',
        description: 'Eye-catching thumbnails designed to increase clicks and engagement.',
        price: '₹1,249',
        disclaimer: 'Set of 4'
      }
    ]
  },
  {
    id: 'social',
    title: 'Social Media Marketing',
    services: [
      {
        id: 'social-posts',
        category: 'social',
        title: 'Social Media Posts & Advertising',
        description: 'Content creation for your channels plus promotion on our platforms.',
        price: '₹1,599',
        disclaimer: 'Subject to availability'
      },
      {
        id: 'social-management',
        category: 'social',
        title: 'Account Management & Growth',
        description: 'Complete handling of your social media presence to increase followers and engagement.',
        price: '₹699',
        disclaimer: 'Subject to availability'
      }
    ]
  },
  {
    id: 'advertising',
    title: 'Advertising',
    services: [
      {
        id: 'advertising-general',
        category: 'advertising',
        title: 'Comprehensive Advertising',
        description: 'Promotion through various physical and digital channels for maximum reach.',
        price: 'Varies',
        disclaimer: 'Price depends on specific services'
      }
    ]
  }
];