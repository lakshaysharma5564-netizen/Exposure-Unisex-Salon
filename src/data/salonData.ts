import { ServiceCategory, PortfolioItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Exposure Unisex Salon',
  shortName: 'Exposure',
  category: 'Unisex Hair and Beauty Salon',
  tagline: 'Your Style. Your Identity. Your Exposure.',
  taglineNotice: 'Proposed brand tagline for Exposure Unisex Salon',
  address: {
    street: '1656, Nangal Raya Extension, Block WZ',
    locality: 'Nangal Raya, Janakpuri',
    city: 'New Delhi',
    state: 'Delhi',
    pincode: '110046',
    country: 'India',
    fullFormatted: '1656, Nangal Raya Extension, Block WZ, Nangal Raya, Janakpuri, New Delhi, Delhi 110046, India.',
  },
  phone: {
    primaryDisplay: '+91 99114 11248',
    primaryRaw: '919911411248',
    primaryTel: 'tel:+919911411248',
    alternativeDisplay: '011-2852 3674',
    alternativeTel: 'tel:+911128523674',
  },
  whatsapp: {
    number: '919911411248',
    defaultMessage: 'Hello Exposure Unisex Salon, I would like to enquire about an appointment. Please share the available services and timings.',
    getUrl: (customText?: string) => {
      const msg = customText || 'Hello Exposure Unisex Salon, I would like to enquire about an appointment. Please share the available services and timings.';
      return `https://wa.me/919911411248?text=${encodeURIComponent(msg)}`;
    },
  },
  googleMaps: {
    searchUrl: 'https://www.google.com/maps/search/?api=1&query=Exposure+Unisex+Salon%2C+1656%2C+Nangal+Raya%2C+Janakpuri%2C+New+Delhi+110046',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=1656,+Nangal+Raya+Extension,+Block+WZ,+Nangal+Raya,+Janakpuri,+New+Delhi,+Delhi+110046',
  },
  hours: {
    display: 'Approx. 9:30 AM – 9:00 PM',
    status: 'Subject to owner verification (third-party listings show ~9 AM/9:30 AM – 9 PM)',
    isConfirmed: false,
  },
  targetAreas: ['Nangal Raya', 'Janakpuri', 'Sagarpur', 'Hari Nagar', 'Mayapuri', 'West Delhi'],
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'hair-styling',
    title: 'Hair Styling',
    subtitle: 'Precision cuts, contemporary washing, custom textures, and professional hair colouring.',
    isConfirmed: true,
    imageSrc: '/images/hair_styling.jpg',
    imageAlt: 'Professional stylist cutting hair with precision scissors at Exposure Unisex Salon',
    items: [
      {
        id: 'haircut',
        name: 'Haircut & Restyling',
        description: 'Tailored haircut designed according to your face profile, hair texture, and daily lifestyle.',
        highlights: ['Consultation', 'Precision Scissor Work', 'Finishing Blow-dry'],
        isConfirmed: true,
      },
      {
        id: 'hair-wash',
        name: 'Hair Wash & Conditioning',
        description: 'Deep cleansing scalp wash with salon-grade conditioners leaving hair light, fresh, and revitalized.',
        highlights: ['Scalp Cleanse', 'Hydrating Rinse', 'Gentle Blow-dry'],
        isConfirmed: true,
      },
      {
        id: 'hair-styling-item',
        name: 'Hair Styling & Blowout',
        description: 'Daily, corporate, or special occasion styling crafted with professional heat tools and setting sprays.',
        highlights: ['Volume Blowout', 'Straightening or Soft Waves', 'All-Day Hold'],
        isConfirmed: true,
      },
      {
        id: 'hair-colouring',
        name: 'Hair Colouring',
        description: 'Root touch-ups, global colour, highlights, and grey coverage tailored to your skin tone and tone preference.',
        highlights: ['Shade Consultation', 'Even Coverage', 'Colour Protection'],
        isConfirmed: true,
      },
    ],
  },
  {
    id: 'mens-grooming',
    title: "Men's Grooming",
    subtitle: 'Refined beard sculpting, sharp contouring, and comfortable salon shaving rituals.',
    isConfirmed: true,
    imageSrc: '/images/mens_grooming.jpg',
    imageAlt: 'Professional barber shaping beard contour at Exposure Unisex Salon grooming station',
    items: [
      {
        id: 'beard-styling',
        name: 'Beard Styling & Shaping',
        description: 'Custom beard architectural shaping with sharp jawline definition and length blending.',
        highlights: ['Cheek Line Shaping', 'Neckline Fade', 'Beard Conditioning'],
        isConfirmed: true,
      },
      {
        id: 'beard-trimming',
        name: 'Beard Trimming & Maintenance',
        description: 'Even length trimming, stray hair cleanup, and precision mustache detailing.',
        highlights: ['Length Uniformity', 'Mustache Detailing', 'Skin Soothing'],
        isConfirmed: true,
      },
      {
        id: 'shaving',
        name: 'Classic Clean Shave',
        description: 'Smooth, close facial shave accompanied by warm preparation and post-shave balm application.',
        highlights: ['Skin Prep', 'Close Razor Shave', 'Soothing Aftershave'],
        isConfirmed: true,
      },
    ],
  },
  {
    id: 'hair-care',
    title: 'Hair Care & Conditioning',
    subtitle: 'Nourishing care treatments to restore hair softness, manageability, and scalp health.',
    isConfirmed: false,
    confirmationNotice: 'Proposed service category — specific treatment menu requires salon owner confirmation.',
    imageSrc: '/images/hair_care.jpg',
    imageAlt: 'Sleek salon hair wash basins and hair nourishment treatment bottles at Exposure Unisex Salon',
    items: [
      {
        id: 'hair-care-treatments',
        name: 'Hair Care Treatments',
        description: 'Targeted hydration, repair, and conditioning therapies to address frizz and environmental stress.',
        highlights: ['Moisture Infusion', 'Strand Strengthening', 'Silky Texture'],
        isConfirmed: false,
      },
      {
        id: 'hair-treatment-consultation',
        name: 'Hair Treatment Consultation',
        description: 'One-on-one evaluation of your scalp health and hair texture to recommend the ideal care regimen.',
        highlights: ['Texture Assessment', 'Regimen Advice', 'Personalized Plan'],
        isConfirmed: false,
      },
    ],
  },
  {
    id: 'beauty-occasion',
    title: 'Beauty & Occasion Styling',
    subtitle: 'Special event styling, occasion makeup, and skin rejuvenation rituals.',
    isConfirmed: false,
    confirmationNotice: 'Proposed service category — specific beauty and bridal menu requires salon owner confirmation.',
    imageSrc: '/images/hero_salon.jpg',
    imageAlt: 'Spacious salon interior setup for beauty and event styling consultations at Exposure Unisex Salon',
    items: [
      {
        id: 'makeup',
        name: 'Occasion & Party Makeup',
        description: 'Enhance your natural beauty for family functions, festivals, and parties with balanced makeup artistry.',
        highlights: ['Skin-Matching Base', 'Eye Artistry', 'Natural Finish'],
        isConfirmed: false,
      },
      {
        id: 'bridal-styling',
        name: 'Bridal Styling Consultation',
        description: 'Comprehensive styling session for brides and grooms preparing for wedding ceremonies.',
        highlights: ['Look Consultation', 'Hair & Face Prep', 'Custom Scheduling'],
        isConfirmed: false,
      },
      {
        id: 'skin-treatments',
        name: 'Skin & Beauty Treatments',
        description: 'Facial cleansing, gentle exfoliation, and glow-boosting skin therapies for men and women.',
        highlights: ['Deep Cleansing', 'Hydration Mask', 'Radiance Boost'],
        isConfirmed: false,
      },
    ],
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'Contemporary Layered Cut & Blowout',
    category: 'styling',
    tag: 'Hair Styling Inspiration',
    imageSrc: '/images/hair_styling.jpg',
    imageAlt: 'Stylist finishing a smooth layered haircut and blowout',
    caption: 'Soft dimensional layers with fluid natural movement and healthy shine.',
  },
  {
    id: 'port-2',
    title: 'Sharp Beard Fade & Contour',
    category: 'grooming',
    tag: "Men's Grooming Inspiration",
    imageSrc: '/images/mens_grooming.jpg',
    imageAlt: 'Beard trimming and cheek line contouring on client in barber chair',
    caption: 'Precision jawline shaping and defined mustache contour for a clean, masculine look.',
  },
  {
    id: 'port-3',
    title: 'Relaxing Scalp Wash & Nourishing Care',
    category: 'colour',
    tag: 'Hair Care Inspiration',
    imageSrc: '/images/hair_care.jpg',
    imageAlt: 'Client receiving relaxing hair treatment and scalp massage in salon wash station',
    caption: 'Rejuvenating hair bath and deep conditioning ritual in our dedicated wash lounge.',
  },
  {
    id: 'port-4',
    title: 'Spacious Salon Interior & Styling Mirrors',
    category: 'interior',
    tag: 'Salon Ambience',
    imageSrc: '/images/hero_salon.jpg',
    imageAlt: 'Exposure Unisex Salon spacious interior with illuminated styling stations',
    caption: 'Comfortable seating, ambient warm lighting, and dedicated stations for men and women.',
  },
];

export const SALON_HIGHLIGHTS = [
  {
    title: 'Welcoming Unisex Environment',
    description: 'A thoughtfully designed, comfortable salon space catering to both men and women with equal expertise.',
  },
  {
    title: 'Dedicated Hair & Grooming Focus',
    description: 'Specialized in precision haircuts, beard styling, fresh hair washes, and tailored hair colouring.',
  },
  {
    title: 'Prime Nangal Raya Location',
    description: 'Conveniently situated in Nangal Raya Extension (Block WZ), serving Janakpuri, Sagarpur, and West Delhi.',
  },
  {
    title: 'Personalized Consultation',
    description: 'Every appointment begins with understanding your face shape, style goals, and hair care routine.',
  },
  {
    title: 'Spacious & Comfortable Ambience',
    description: 'Clean, well-lit styling stations with ergonomic seating designed for a relaxed salon visit.',
  },
];
