import type { Service, PlaceholderImage } from '../types';
import placeholderData from '../placeholder-images/services.json';

export const placeholderImages: PlaceholderImage[] = placeholderData.servicesImages;

export const services: Service[] = [
  {
    id: 'business-website-development',
    slug: 'business-website-development',
    title: 'Business Website Development',
    shortDescription: 'Professional, responsive websites for startups, companies, and local businesses.',
    longDescription: 'Professional, responsive websites for startups, companies, and local businesses — crafted for branding, performance, and lead generation.',
    priceRange: '₹25,000 – ₹80,000',
    scope: ['Up to 10 pages', 'Contact Forms', 'Blog Setup', 'SEO Tags', 'Analytics Integration', '1 Month Maintenance'],
    process: [
      { step: 1, title: 'Discovery', description: 'Understand your brand, goals, and audience.' },
      { step: 2, title: 'Design', description: 'Create wireframes and mockups for a stunning, user-friendly interface.' },
      { step: 3, title: 'Development', description: 'Build a high-performance, responsive website with clean code.' },
      { step: 4, title: 'Launch', description: 'Deploy the site and ensure everything is running smoothly.' }
    ],
    caseStudyIds: ['1'],
    category: 'Web Development',
    imageIds: ['service-image-1-1', 'service-image-1-2', 'service-image-1-3', 'service-image-1-4']
  },
  {
    id: 'custom-web-application',
    slug: 'custom-web-application',
    title: 'Custom Web Application Development',
    shortDescription: 'End-to-end dynamic web apps with frontend, backend, and database.',
    longDescription: 'End-to-end dynamic web apps with frontend, backend, and database — built for startups, SaaS, dashboards, and automation.',
    priceRange: '₹1,00,000 – ₹5,00,000',
    scope: ['Role-based Login', 'Admin Panels', 'Data Management', 'API Integrations', 'Reporting Features'],
    process: [
        { step: 1, title: 'Requirement Analysis', description: 'Deep dive into your application requirements and technical needs.' },
        { step: 2, title: 'Architecture Design', description: 'Plan the system architecture, database schema, and technology stack.' },
        { step: 3, title: 'Agile Development', description: 'Develop the application in sprints with regular feedback and iterations.' },
        { step: 4, title: 'Deployment & Scaling', description: 'Deploy to the cloud and set up for scalability and performance.' }
    ],
    caseStudyIds: ['2'],
    category: 'Web Development',
    imageIds: ['service-image-2-1', 'service-image-2-2', 'service-image-2-3', 'service-image-2-4']
  },
  {
    id: 'ecommerce-website',
    slug: 'ecommerce-website',
    title: 'E-Commerce Website',
    shortDescription: 'Powerful online stores with inventory, payment, and delivery management.',
    longDescription: 'Powerful online stores with inventory, payment, and delivery management, using platforms like Shopify, WooCommerce, or custom solutions.',
    priceRange: '₹60,000 – ₹3,00,000',
    scope: ['Product Catalog Setup', 'Shopping Cart & Checkout', 'Payment Gateway Integration', 'Admin Dashboard', 'SEO-ready Structure'],
    process: [
        { step: 1, title: 'Platform Selection', description: 'Choose the right e-commerce platform (Shopify, WooCommerce, or custom) for your needs.' },
        { step: 2, title: 'Store Design', description: 'Design a beautiful and intuitive online store that reflects your brand.' },
        { step: 3, title: 'Development & Setup', description: 'Build and configure the store, products, and payment systems.' },
        { step: 4, title: 'Launch & Marketing', description: 'Go live and start driving traffic to your new online store.' }
    ],
    caseStudyIds: ['3'],
    category: 'Web Development',
    imageIds: ['service-image-3-1', 'service-image-3-2', 'service-image-3-3', 'service-image-3-4', 'service-image-3-5']
  },
  {
    id: 'startup-mvp-development',
    slug: 'startup-mvp-development',
    title: 'Startup MVP Development',
    shortDescription: 'Fast, scalable Minimum Viable Products (MVPs) for tech startups.',
    longDescription: 'Fast, scalable Minimum Viable Products (MVPs) for tech startups — to validate your idea quickly and efficiently.',
    priceRange: '₹1,00,000 – ₹5,00,000',
    scope: ['User Authentication', 'Core Feature Dashboard', 'Database Setup', 'Cloud Deployment', 'Analytics Integration'],
    process: [
        { step: 1, title: 'Idea Validation', description: 'Work with you to refine the core features and value proposition of your MVP.' },
        { step: 2, title: 'Rapid Prototyping', description: 'Design and prototype the user flow and key screens.' },
        { step: 3, title: 'Lean Development', description: 'Build the essential features required to launch and test your idea with real users.' },
        { step: 4, title: 'Launch & Iterate', description: 'Deploy the MVP, gather user feedback, and plan the next phase of development.' }
    ],
    caseStudyIds: [],
    category: 'Web Development',
    imageIds: ['service-image-4-1', 'service-image-4-2', 'service-image-4-3', 'service-image-4-4']
  },
   {
    id: 'real-estate-website-development',
    slug: 'real-estate-website-development',
    title: 'Real Estate Website Development',
    shortDescription: 'Feature-rich websites for real estate agencies with property listings and search.',
    longDescription: 'Feature-rich websites for real estate agencies with dynamic property listings, advanced search filters, and agent profiles.',
    priceRange: '₹50,000 – ₹1,50,000',
    scope: ['Property Listing Management', 'Advanced Search Filters', 'Agent Profiles', 'Lead Capture Forms', 'Map Integration'],
    process: [
        { step: 1, title: 'Discovery', description: 'Understand your agency’s brand and specific needs for property showcasing.' },
        { step: 2, title: 'Design', description: 'Create an intuitive design that makes property searching easy and visually appealing.' },
        { step: 3, title: 'Development', description: 'Build the website with a robust backend for managing listings and leads.' },
        { step: 4, title: 'Launch', description: 'Deploy the site and provide training for your team to manage it effectively.' }
    ],
    caseStudyIds: [],
    category: 'Web Development',
    imageIds: ['service-image-5-1', 'service-image-5-2', 'service-image-5-3', 'service-image-5-4']
  },
    {
    id: 'college-school-website-development',
    slug: 'college-school-website-development',
    title: 'College & School Website Development',
    shortDescription: 'Informative and accessible websites for educational institutions.',
    longDescription: 'Informative and accessible websites for educational institutions, featuring course details, event calendars, and admission forms.',
    priceRange: '₹40,000 – ₹1,00,000',
    scope: ['Course & Department Pages', 'Event Calendar', 'Admission Forms', 'Faculty Profiles', 'News & Announcements'],
    process: [
        { step: 1, title: 'Consultation', description: 'Gather requirements from stakeholders including administration, faculty, and students.' },
        { step: 2, title: 'Design', description: 'Design a professional and easy-to-navigate website structure.' },
        { step: 3, title: 'Development', description: 'Build the website with a content management system for easy updates.' },
        { step: 4, title: 'Training & Launch', description: 'Train staff on how to manage content and launch the new website.' }
    ],
    caseStudyIds: [],
    category: 'Web Development',
    imageIds: ['service-image-6-1', 'service-image-6-2', 'service-image-6-3', 'service-image-6-4']
  },
  {
    id: 'healthcare-clinic-website-development',
    slug: 'healthcare-clinic-website-development',
    title: 'Healthcare & Clinic Website Development',
    shortDescription: 'HIPAA-compliant websites for doctors and clinics with appointment booking.',
    longDescription: 'Professional, HIPAA-compliant websites for doctors and clinics, featuring appointment booking, service details, and patient resources.',
    priceRange: '₹45,000 – ₹1,20,000',
    scope: ['Appointment Booking System', 'Doctor Profiles', 'Patient Testimonials', 'Secure Contact Forms', 'Health Blog'],
    process: [
        { step: 1, title: 'Requirement Gathering', description: 'Understand the clinic’s specialities and patient communication needs, ensuring HIPAA compliance.' },
        { step: 2, title: 'Design', description: 'Create a reassuring and professional design that builds patient trust.' },
        { step: 3, title: 'Development', description: 'Develop the website with secure features for handling patient information.' },
        { step: 4, title: 'Launch & Support', description: 'Deploy the website and provide ongoing support to ensure security and performance.' }
    ],
    caseStudyIds: [],
    category: 'Web Development',
    imageIds: ['service-image-7-1', 'service-image-7-2', 'service-image-7-3', 'service-image-7-4']
  },
  {
    id: 'portfolio-personal-branding-websites',
    slug: 'portfolio-personal-branding-websites',
    title: 'Portfolio & Personal Branding Websites',
    shortDescription: 'Stunning portfolio websites for creatives and professionals.',
    longDescription: 'Stunning portfolio websites for artists, photographers, designers, and professionals to showcase their work and build a personal brand.',
    priceRange: '₹15,000 – ₹40,000',
    scope: ['Visual Gallery', 'About Me Page', 'Contact Form', 'Blog Integration', 'Responsive Design'],
    process: [
        { step: 1, title: 'Vision', description: 'Understand your personal brand and the story you want to tell with your work.' },
        { step: 2, title: 'Design', description: 'Create a unique design that makes your work the star of the show.' },
        { step: 3, title: 'Development', description: 'Build a pixel-perfect, fast-loading website to house your portfolio.' },
        { step: 4, title: 'Launch', description: 'Go live and help you share your new portfolio with the world.' }
    ],
    caseStudyIds: [],
    category: 'Web Development',
    imageIds: ['service-image-8-1', 'service-image-8-2', 'service-image-8-3', 'service-image-8-4']
  },
   {
    id: 'landing-page-design-development',
    slug: 'landing-page-design-development',
    title: 'Landing Page Design & Development',
    shortDescription: 'High-converting landing pages for marketing campaigns and product launches.',
    longDescription: 'High-converting landing pages for marketing campaigns and product launches, designed to maximize leads and sales.',
    priceRange: '₹10,000 – ₹30,000',
    scope: ['A/B Testing Variants', 'Lead Capture Form', 'Clear Call-to-Action', 'Fast Load Times', 'Analytics Integration'],
    process: [
        { step: 1, title: 'Goal Definition', description: 'Define the single, primary goal of the landing page (e.g., sign-up, purchase).' },
        { step: 2, title: 'Design & Copy', description: 'Craft persuasive copy and a clean design that guides the user towards the goal.' },
        { step: 3, title: 'Development', description: 'Build a lightning-fast, mobile-first landing page.' },
        { step: 4, title: 'Optimize', description: 'Launch the page and use analytics and A/B testing to continuously improve conversion rates.' }
    ],
    caseStudyIds: [],
    category: 'Web Development',
    imageIds: ['service-image-9-1', 'service-image-9-2', 'service-image-9-3', 'service-image-9-4']
  },
  {
    id: 'seo-optimization',
    slug: 'seo-optimization',
    title: 'SEO Optimization',
    shortDescription: 'Improve your website’s visibility on Google with on-page and technical SEO.',
    longDescription: 'Improve your website’s visibility on Google with on-page and technical SEO. We help you rank higher, attract more organic traffic, and grow your business.',
    priceRange: '₹8,000 – ₹75,000/month',
    scope: ['On-page & Off-page SEO', 'Technical SEO Audits', 'Keyword Research', 'Content Strategy', 'Backlink Building'],
    process: [
        { step: 1, title: 'SEO Audit', description: 'We conduct a comprehensive audit to identify technical issues and growth opportunities.' },
        { step: 2, title: 'Strategy', description: 'We develop a customized SEO strategy targeting high-value keywords.' },
        { step: 3, title: 'Implementation', description: 'We execute on-page, off-page, and technical optimizations.' },
        { step: 4, title: 'Reporting', description: 'We provide detailed monthly reports on performance and rankings.' }
    ],
    caseStudyIds: ['4'],
    category: 'Digital Marketing',
    imageIds: ['service-image-10-1', 'service-image-10-2', 'service-image-10-3']
  },
  {
    id: 'ppc-advertising',
    slug: 'ppc-advertising',
    title: 'PPC Advertising',
    shortDescription: 'Manage paid ad campaigns on Google & Meta to get instant, targeted traffic.',
    longDescription: 'Setup and manage paid ad campaigns on Google, Facebook/Instagram, including ad creation, bidding, tracking and optimization to maximize your return on investment.',
    priceRange: '₹10,000 – ₹1,00,000/month',
    scope: ['Google Ads Management', 'Meta (Facebook & Instagram) Ads', 'Ad Copy & Creative', 'A/B Testing', 'Conversion Tracking'],
    process: [
        { step: 1, title: 'Audience Research', description: 'We identify your ideal customer and where to find them online.' },
        { step: 2, title: 'Campaign Setup', description: 'We create compelling ad copy and visuals, and set up your campaigns for success.' },
        { step: 3, title: 'Optimization', description: 'We constantly monitor and tweak your campaigns to improve performance and lower costs.' },
        { step: 4, title: 'Reporting', description: 'You get clear, concise reports on what matters most: your ROI.' }
    ],
    caseStudyIds: ['5'],
    category: 'Digital Marketing',
    imageIds: ['service-image-11-1', 'service-image-11-2', 'service-image-11-3']
  },
  {
    id: 'social-media-marketing',
    slug: 'social-media-marketing',
    title: 'Social Media Marketing',
    shortDescription: 'Content creation, posting, and community management for social platforms.',
    longDescription: 'Content creation, posting, community management and paid social campaigns across platforms like Facebook, Instagram, LinkedIn, etc., to build your brand and engage your audience.',
    priceRange: '₹8,000 – ₹40,000/month',
    scope: ['Content Calendar', 'Post Creation & Scheduling', 'Community Engagement', 'Paid Social Campaigns', 'Performance Analytics'],
    process: [
        { step: 1, title: 'Strategy', description: 'We define your brand voice, content pillars, and target platforms.' },
        { step: 2, title: 'Content Creation', description: 'Our team creates engaging visuals and copy tailored to each platform.' },
        { step: 3, title: 'Management', description: 'We schedule posts, engage with your audience, and monitor conversations.' },
        { step: 4, title: 'Growth', description: 'We analyze performance to refine the strategy and grow your following.' }
    ],
    caseStudyIds: ['6'],
    category: 'Digital Marketing',
    imageIds: ['service-image-12-1', 'service-image-12-2', 'service-image-12-3']
  },
  {
    id: 'content-marketing',
    slug: 'content-marketing',
    title: 'Content Marketing',
    shortDescription: 'Creating valuable content (blogs, videos) to attract and engage your audience.',
    longDescription: 'Creating and distributing valuable content (blogs, videos, infographics) to attract and engage target audiences, supporting SEO, and building your brand authority.',
    priceRange: '₹2,000 – ₹10,000 per piece',
    scope: ['Blog Writing', 'Video Scripts', 'Infographics', 'E-books & Whitepapers', 'Content Distribution'],
    process: [
        { step: 1, title: 'Topic Ideation', description: 'We research topics your target audience is actively searching for.' },
        { step: 2, title: 'Content Creation', description: 'Our expert writers and designers produce high-quality, engaging content.' },
        { step: 3, title: 'SEO Optimization', description: 'Every piece of content is optimized to rank on search engines.' },
        { step: 4, title: 'Promotion', description: 'We help distribute your content across channels to maximize its reach.' }
    ],
    caseStudyIds: [],
    category: 'Digital Marketing',
    imageIds: ['service-image-13-1', 'service-image-13-2', 'service-image-13-3']
  },
];