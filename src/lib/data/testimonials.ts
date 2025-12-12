import type { Testimonial, PlaceholderImage } from '../types';
import placeholderData from '../placeholder-images/testiminials.json';

export const placeholderImages: PlaceholderImage[] = placeholderData.testimonialsImages;

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rohan Sharma',
    title: 'Founder, LegalConnect',
    quote: 'Trionex Digital delivered a website that perfectly captured our firm\'s professional image. The increase in client consultations through the site was immediate and impressive. A truly fantastic team.',
    avatarId: 'avatar-testimonial-1'
  },
  {
    id: '2',
    name: 'Priya Singh',
    title: 'CEO, FitLife Nutrition',
    quote: 'Our new Shopify store is not only beautiful but also incredibly fast. The team\'s attention to detail and focus on user experience has directly resulted in a higher conversion rate. Highly recommended!',
    avatarId: 'avatar-testimonial-2'
  },
  {
    id: '3',
    name: 'Ankit Gupta',
    title: 'Owner, City Dental Care',
    quote: 'Thanks to their Local SEO efforts, we are now the top-ranked dental clinic in our area. Our appointment book is fuller than ever. Their digital marketing expertise is unmatched.',
    avatarId: 'avatar-testimonial-3'
  },
  {
    id: '4',
    name: 'Sameer Khan',
    title: 'CTO, InnovateTech',
    quote: 'The custom dashboard they built for us revolutionized our operations. It\'s intuitive, powerful, and has saved us countless hours of manual work. A game-changer for our business.',
    avatarId: 'avatar-testimonial-4'
  },
  {
    id: '5',
    name: 'Neha Desai',
    title: 'Marketing Head, Aura Fashion',
    quote: 'Their PPC campaigns are pure magic. We saw a 5X ROAS within the first quarter. They are strategic, transparent, and deliver on their promises.',
    avatarId: 'avatar-testimonial-5'
  }
];