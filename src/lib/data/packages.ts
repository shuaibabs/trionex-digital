import type { Package } from '../types';

export const packages: Package[] = [
  {
    id: 'basic-sites',
    title: 'Basic Sites',
    price: '10K - 30K',
    pricePeriod: 'one-time',
    description: 'Perfect for freelancers and small businesses needing a sharp, professional online identity.',
    features: ['Landing Pages', 'Portfolio Sites', 'Responsive Design', 'Contact Form'],
    ctaText: 'Get Started',
  },
  {
    id: 'business-sites',
    title: 'Business Sites',
    price: '30K - 80K',
    pricePeriod: 'one-time',
    description: 'The complete package for established businesses, clinics, and schools.',
    features: ['5-10 Pages', 'Blog & CMS', 'Basic SEO Setup', 'Analytics Integration'],
    isPopular: true,
    ctaText: 'Choose Business',
  },
  {
    id: 'web-apps',
    title: 'Web Apps',
    price: '1L - 5L+',
    pricePeriod: 'one-time',
    description: 'For startups and enterprises that need powerful, custom-built web applications.',
    features: ['SaaS & MVP Builds', 'E-commerce Platforms', 'Custom CRM/ERP', 'Database & API Development'],
    ctaText: 'Build Your App',
  },
  {
    id: 'monthly-retainers',
    title: 'Monthly Retainers',
    price: '8K - 75K',
    pricePeriod: '/month',
    description: 'Ongoing support for businesses that want continuous growth and peace of mind.',
    features: ['Maintenance & Support', 'SEO & PPC Management', 'Social Media Marketing', 'Content Creation'],
    ctaText: 'Contact Us',
  },
];