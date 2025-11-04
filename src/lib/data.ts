

import type { Service, Package, CaseStudy, BlogPost, Testimonial, TeamMember, Client, PlaceholderImage } from './types';
import placeholderData from './placeholder-images.json';

export const placeholderImages: PlaceholderImage[] = placeholderData.placeholderImages;

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
    imageIds: ['service-image-1', 'service-image-1-2', 'service-image-1-3']
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
    imageIds: ['service-image-2', 'service-image-2-2', 'service-image-2-3']
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
    imageIds: ['service-image-3', 'service-image-3-2', 'service-image-3-3']
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
    imageIds: ['service-image-4', 'service-image-4-2', 'service-image-4-3']
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
    imageIds: ['service-image-5', 'service-image-5-2', 'service-image-5-3']
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
    imageIds: ['service-image-6', 'service-image-6-2', 'service-image-6-3']
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
    imageIds: ['service-image-7', 'service-image-7-2', 'service-image-7-3']
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
    imageIds: ['service-image-8', 'service-image-8-2', 'service-image-8-3']
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
    imageIds: ['service-image-9', 'service-image-9-2', 'service-image-9-3']
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
    imageIds: ['service-image-10', 'service-image-10-2', 'service-image-10-3']
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
    imageIds: ['service-image-11', 'service-image-11-2', 'service-image-11-3']
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
    imageIds: ['service-image-12', 'service-image-12-2', 'service-image-12-3']
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
    imageIds: ['service-image-13', 'service-image-13-2', 'service-image-13-3']
  },
];

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

export const caseStudies: CaseStudy[] = [
    {
        "id": 1,
        "slug": "json-to-excel-converter",
        "categoryId": "category_utilities",
        "img": "https://picsum.photos/seed/cs1/600/400",
        "challenge": "Client needed an efficient way to convert large, complex JSON files into structured Excel spreadsheets for non-technical team members to analyze. Manual conversion was time-consuming and prone to errors.",
        "solution": "Developed a standalone Java-based command-line tool (JAR) that parses any JSON file and converts it into a well-formatted Excel file. The tool automatically creates tables with filtering and sorting enabled, making data exploration intuitive.",
        "testimonial": { "text": "This tool saved our team countless hours. What used to take half a day now takes seconds. A real game-changer for our workflow!", "author": "Data Analyst, FinCorp" },
        "results": ["99% reduction in data conversion time", "Eliminated manual data entry errors", "Enabled self-serve data analysis for business teams"],
        "overview": {
            "role": "Lead Developer",
            "timeline": "2 Weeks",
            "techStack": "Java, Apache POI"
        },
        "preview": {
            "links": [
                {"href": "#", "tooltipString": "see_on_github", "faIcon": "fa-brands fa-github"}
            ],
            "screenshots": [
                 "https://picsum.photos/seed/cs1-ss1/1280/720",
                 "https://picsum.photos/seed/cs1-ss2/1280/720",
                 "https://picsum.photos/seed/cs1-ss3/1280/720"
            ],
            "screenshotsAspectRatio": "16:9",
            "youtubeVideo": ""
        },
        "locales": {
            "en": {
                "title": "JSON to Excel Converter",
                "text": "A <b>Java-based JAR tool</b> that converts JSON data into Excel with <b>default filtering, sorting, and structured formatting</b> for efficient data management and reporting.",
                "tags": ["JAVA", "JAR", "JSON", "Excel", "Apache POI"]
            }
        }
    },
    {
        "id": 5,
        "slug": "scholar-counter",
        "categoryId": "category_web",
        "img": "https://picsum.photos/seed/cs5/600/400",
        "challenge": "An academic publisher required a COUNTER-compliant reporting platform to provide libraries with standardized usage statistics for their digital resources. The system needed to process massive log files and present data in a clear, filterable dashboard.",
        "solution": "Built a full-stack web application using Angular for the frontend and a Node.js/Express backend. The system processes and aggregates usage data into a MySQL database, exposing it through a GraphQL API for detailed and flexible reporting.",
        "testimonial": { "text": "The Scholar Counter platform has been invaluable for our institutional clients. The reliability and accuracy of the data have greatly improved our relationships with libraries.", "author": "Head of Publishing, Academic Press" },
        "results": ["Achieved 100% COUNTER Code of Practice compliance", "Provided data analytics for over 500 institutions", "Reduced report generation time by 85%"],
        "overview": {
            "role": "Full-Stack Developer",
            "timeline": "6 Months",
            "techStack": "Angular, Node.js, MySQL, GraphQL"
        },
        "preview": {
            "links": [
                {"href": "#", "tooltipString": "open_website", "faIcon": "fa-solid fa-link"}
            ],
            "screenshots": [
                "https://picsum.photos/seed/cs5-ss1/1280/720",
                "https://picsum.photos/seed/cs5-ss2/1280/720",
                "https://picsum.photos/seed/cs5-ss3/1280/720"
            ],
            "screenshotsAspectRatio": "16:9",
            "youtubeVideo": ""
        },
        "locales": {
            "en": {
                "title": "Scholar Counter",
                "text": "<b>Scholar Counter</b> follows the <b>COUNTER Code of Practice</b> to provide standardized, credible, and comparable usage data for scholarly electronic resources.",
                "tags": ["Angular", "MySQL", "NodeJS", "ExpressJS", "GraphQL"]
            }
        }
    },
     {
        "id": 7,
        "slug": "tripbookkar",
        "categoryId": "category_web",
        "img": "https://picsum.photos/seed/cs7/600/400",
        "challenge": "TripBookKar aimed to disrupt the travel market with a one-stop booking platform but faced challenges with integrating various travel APIs and offering personalized recommendations in a competitive space.",
        "solution": "Developed a comprehensive travel portal using React for a dynamic frontend and Node.js for the backend. The platform integrates multiple third-party APIs for flights, hotels, and buses. An AI model was integrated to provide users with personalized travel suggestions based on their search history and preferences.",
        "testimonial": { "text": "Trionex Digital brought our vision to life. The AI-powered recommendations are a huge hit with our users, and the platform is incredibly robust and scalable.", "author": "CEO, TripBookKar" },
        "results": ["Unified 5+ travel booking APIs into one platform", "Increased user engagement by 40% with AI recommendations", "Processed over 10,000 bookings in the first six months"],
        "overview": {
            "role": "Lead Architect",
            "timeline": "9 Months",
            "techStack": "React, Node.js, MongoDB, AI/ML"
        },
        "preview": {
            "links": [
                {"href": "#", "tooltipString": "open_website", "faIcon": "fa-solid fa-link"}
            ],
            "screenshots": [
                "https://picsum.photos/seed/cs7-ss1/1280/720",
                "https://picsum.photos/seed/cs7-ss2/1280/720"
            ],
            "screenshotsAspectRatio": "16:9",
            "youtubeVideo": ""
        },
        "locales": {
            "en": {
                "title": "TripBookKar",
                "text": "<b>TripBookKar</b> is a one-stop travel booking platform for <b>holiday packages, flights, hotels, trains, buses, cabs, and more.</b>",
                "tags": ["React", "ExpressJS", "NodeJS", "MongoDB", "AI/ML"]
            }
        }
    },
    {
        "id": 8,
        "slug": "finnone-neo-cas",
        "categoryId": "category_web",
        "img": "https://picsum.photos/seed/cs8/600/400",
        "challenge": "A leading financial software provider needed to modernize their loan origination system (CAS) to create a more efficient, digital-first experience for banks and lending institutions.",
        "solution": "As part of the core team, I contributed to the development of FinnOne Neo CAS, a web-based platform using React and Java. My role involved developing key UI components, integrating with the backend PL/SQL engine, and conducting penetration testing to ensure enterprise-grade security.",
         "testimonial": { "text": "The new CAS platform has reduced loan processing times by over 50% for our clients. The user interface is modern, intuitive, and highly secure.", "author": "Product Manager, Nucleus Software" },
        "results": ["Contributed to a platform used by top-tier banks globally", "Improved UI performance and responsiveness", "Identified and patched critical security vulnerabilities"],
        "overview": {
            "role": "Software Engineer",
            "timeline": "2 Years (Team Contribution)",
            "techStack": "React, Java, Spring, PL/SQL"
        },
        "preview": {
            "links": [
                {"href": "#", "tooltipString": "open_website", "faIcon": "fa-solid fa-link"}
            ],
            "screenshots": [
                "https://picsum.photos/seed/cs8-ss1/1280/720",
                "https://picsum.photos/seed/cs8-ss2/1280/720"
            ],
            "screenshotsAspectRatio": "16:9",
            "youtubeVideo": "https://youtu.be/-JbofnRpV0U?si=KAIuvSvjF2K07lVM"
        },
        "locales": {
            "en": {
                "title": "FinnOne Neo CAS",
                "text": "<b>FinnOne Neo CAS</b> is a digital loan origination platform for banks and NBFCs, covering the entire journey from lead capture to disbursement.",
                "tags": ["React", "NodeJS", "Java", "PL/SQL", "Security Testing"]
            }
        }
    },
    {
        "id": 13,
        "slug": "local-bakery-seo",
        "categoryId": "category_seo",
        "img": "https://picsum.photos/seed/cs13/600/400",
        "challenge": "A local bakery with delicious products was struggling to attract foot traffic and online orders. They were virtually invisible on local Google searches and Google Maps.",
        "solution": "Executed a hyper-local SEO strategy. This included optimizing their Google Business Profile, building local citations, creating location-specific landing pages, and generating content around local events and keywords like 'best cakes in [City]'.",
        "testimonial": { "text": "We went from obscurity to the #1 spot on Google Maps for 'bakery near me'. Our phone is ringing off the hook, and online orders have tripled. It's been transformative!", "author": "Owner, The Sweet Spot Bakery" },
        "results": ["Achieved #1 ranking in Google Map Pack for target keywords", "300% increase in online orders", "50% increase in daily foot traffic"],
        "overview": {
            "role": "SEO Strategist",
            "timeline": "3 Months",
            "techStack": "Google Business Profile, SEMrush, Ahrefs"
        },
        "preview": {
            "links": [
                {"href": "#", "tooltipString": "open_website", "faIcon": "fa-solid fa-link"}
            ],
            "screenshots": [
                "https://picsum.photos/seed/cs13-ss1/1280/720",
                "https://picsum.photos/seed/cs13-ss2/1280/720"
            ],
            "screenshotsAspectRatio": "16:9",
            "youtubeVideo": ""
        },
        "locales": {
            "en": {
                "title": "Local Bakery SEO Dominance",
                "text": "A hyper-local SEO campaign that took a bakery from obscurity to the <b>top of local search results</b>, driving a massive increase in both foot traffic and online sales.",
                "tags": ["Local SEO", "Google Business Profile", "Content Marketing", "Keyword Research"]
            }
        }
    },
    {
        "id": 14,
        "slug": "b2b-saas-ppc-campaign",
        "categoryId": "category_marketing",
        "img": "https://picsum.photos/seed/cs14/600/400",
        "challenge": "A B2B SaaS startup had a groundbreaking product but struggled to generate qualified leads. Their initial ad campaigns were attracting the wrong audience and had a high cost-per-acquisition (CPA).",
        "solution": "Restructured their Google and LinkedIn Ads campaigns. Focused on high-intent keywords, competitor targeting, and precise audience segmentation on LinkedIn based on job titles and company size. Created highly-targeted ad copy and landing pages for each segment.",
         "testimonial": { "text": "Their PPC strategy was a game-changer. Our lead quality improved overnight, and our CPA dropped by 60%. We're now signing clients we could only dream of before.", "author": "CMO, DataStream Innovations" },
        "results": ["Reduced Cost-Per-Acquisition (CPA) by 60%", "Increased qualified marketing leads by 150%", "Achieved a 4x Return on Ad Spend (ROAS)"],
        "overview": {
            "role": "PPC Manager",
            "timeline": "Ongoing (6+ months)",
            "techStack": "Google Ads, LinkedIn Ads, Google Analytics"
        },
        "preview": {
            "links": [],
            "screenshots": [
                "https://picsum.photos/seed/cs14-ss1/1280/720",
                "https://picsum.photos/seed/cs14-ss2/1280/720",
                "https://picsum.photos/seed/cs14-ss3/1280/720"
            ],
            "screenshotsAspectRatio": "16:9",
            "youtubeVideo": ""
        },
        "locales": {
            "en": {
                "title": "B2B SaaS PPC Lead Generation",
                "text": "A targeted PPC campaign on Google and LinkedIn that <b>slashed the Cost-Per-Acquisition</b> and dramatically increased the volume of qualified leads for a B2B SaaS startup.",
                "tags": ["PPC", "Google Ads", "LinkedIn Ads", "Conversion Rate Optimization"]
            }
        }
    },
    {
        "id": 15,
        "slug": "zenith-fitness-tracker",
        "categoryId": "category_mobile_app",
        "img": "https://picsum.photos/seed/cs15/600/400",
        "challenge": "A fitness startup wanted to create a mobile app with a clean UI and strong motivational features to stand out in a crowded market. They needed a cross-platform solution to reach both iOS and Android users quickly.",
        "solution": "Developed a cross-platform fitness tracking app using React Native. The app featured real-time GPS tracking for activities, personalized workout plans, and social sharing capabilities to boost user engagement and motivation.",
        "testimonial": { "text": "The app is incredibly smooth and intuitive. Our users love the design and the social features have created a real sense of community. The launch was a huge success!", "author": "Founder, Zenith Fitness" },
        "results": ["Launched on iOS & Android in 4 months", "Achieved 50,000+ downloads in the first year", "4.8-star average rating on both app stores"],
        "overview": {
            "role": "Lead Mobile Developer",
            "timeline": "4 Months",
            "techStack": "React Native, Firebase, Mapbox"
        },
        "preview": {
            "links": [],
            "screenshots": [
                "https://picsum.photos/seed/cs15-ss1/1280/720",
                "https://picsum.photos/seed/cs15-ss2/1280/720"
            ],
            "screenshotsAspectRatio": "9:16",
            "youtubeVideo": ""
        },
        "locales": {
            "en": {
                "title": "Zenith Fitness Tracker",
                "text": "A cross-platform <b>mobile fitness app</b> built with React Native, featuring real-time activity tracking, workout plans, and social sharing.",
                "tags": ["React Native", "Firebase", "Mobile App", "iOS", "Android"]
            }
        }
    },
    {
        "id": 16,
        "slug": "orderly-task-manager",
        "categoryId": "category_mobile_app",
        "img": "https://picsum.photos/seed/cs16/600/400",
        "challenge": "The client wanted a minimalist, easy-to-use task manager for iOS that avoided the feature bloat of existing productivity apps. The key was to focus on simplicity and a delightful user experience.",
        "solution": "Designed and built a native iOS application using Swift and SwiftUI. The app featured a clean, gesture-based interface, smart reminders, and iCloud sync. The focus was on intuitive design and fast performance.",
        "testimonial": { "text": "They perfectly understood our vision for a simple, elegant task manager. The final product is a joy to use and has become an essential part of my daily routine.", "author": "Solo Entrepreneur" },
        "results": ["Featured on the App Store as 'App of the Day'", "Reached 100,000 active users", "Maintained a 4.9-star rating with over 5,000 reviews"],
        "overview": {
            "role": "iOS Developer & UI/UX Designer",
            "timeline": "5 Months",
            "techStack": "Swift, SwiftUI, Core Data, iCloud"
        },
        "preview": {
            "links": [],
            "screenshots": [
                "https://picsum.photos/seed/cs16-ss1/1280/720",
                "https://picsum.photos/seed/cs16-ss2/1280/720"
            ],
            "screenshotsAspectRatio": "9:16",
            "youtubeVideo": ""
        },
        "locales": {
            "en": {
                "title": "Orderly Task Manager",
                "text": "A native <b>iOS productivity app</b> with a focus on minimalist design, intuitive gestures, and seamless iCloud synchronization.",
                "tags": ["iOS", "Swift", "SwiftUI", "Mobile App", "Productivity"]
            }
        }
    }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Why Your Business Needs a Professional Website in 2024 (Not Just a Social Media Page)',
    slug: 'why-you-need-a-professional-website',
    tags: ['Business', 'Web Development', 'Marketing'],
    excerpt: 'In the age of social media, many businesses wonder if they still need a traditional website. The answer is a resounding YES. Discover why a professional website is the cornerstone of your digital presence.',
    content: 'While social media platforms are excellent for engagement, they are rented land. Your website is your digital headquarters—an asset you fully own and control. It establishes credibility, allows for deep storytelling, and serves as the central hub for all your marketing efforts, from SEO to email marketing. A professional website allows you to capture leads, showcase your products or services without limitation, and build a brand that stands the test of time.',
    date: 'August 01, 2024',
    readTime: '6 min read',
    imageId: 'blog-5',
    author: {
      name: 'Alex Thompson',
      avatarId: 'avatar-5'
    }
  },
  {
    id: '2',
    title: 'SEO vs. PPC: Which is Right for Your Business?',
    slug: 'seo-vs-ppc',
    tags: ['SEO', 'PPC', 'Digital Marketing'],
    excerpt: 'Should you invest in long-term organic growth with SEO, or do you need the immediate traffic from PPC ads? We break down the pros and cons of each to help you decide.',
    content: 'SEO (Search Engine Optimization) is the process of optimizing your website to rank higher in organic search results. It\'s a long-term strategy that builds trust and sustainable traffic. PPC (Pay-Per-Click) advertising, on the other hand, allows you to pay for top positions on search engines instantly. The best strategy often involves a combination of both. Use PPC for quick wins and testing, while building a strong SEO foundation for lasting, cost-effective growth.',
    date: 'July 25, 2024',
    readTime: '8 min read',
    imageId: 'blog-2',
    author: {
      name: 'Carlos Rodriguez',
      avatarId: 'avatar-2'
    }
  },
  {
    id: '3',
    title: '5 Signs Your Website Needs a Redesign',
    slug: 'signs-your-website-needs-redesign',
    tags: ['Web Design', 'UX', 'Conversion Rate Optimization'],
    excerpt: 'Your website is your 24/7 salesperson. If it\'s slow, outdated, or not mobile-friendly, it could be costing you business. Here are 5 clear signs it\'s time for a revamp.',
    content: '1. It\'s not mobile-friendly: Over half of all web traffic comes from mobile devices. If your site is not responsive, you are alienating a huge portion of your audience. 2. It\'s slow to load: Modern users expect pages to load in under 3 seconds. 3. Your bounce rate is high: If visitors leave your site immediately, it\'s a sign of poor user experience. 4. It doesn\'t reflect your current brand: Your business evolves, and your website should too. 5. You\'re not getting leads: A modern website should be a lead generation machine. If it\'s not, it\'s time for an upgrade.',
    date: 'July 20, 2024',
    readTime: '5 min read',
    imageId: 'blog-6',
    author: {
      name: 'Diana Miller',
      avatarId: 'avatar-1'
    }
  },
  {
    id: '4',
    title: 'The Art of the Landing Page: How to Boost Conversions',
    slug: 'art-of-the-landing-page',
    tags: ['CRO', 'Web Design', 'Marketing'],
    excerpt: 'A great landing page is a masterpiece of persuasion. Learn the key elements that turn visitors into customers and how to design pages that convert.',
    content: 'Your landing page has one job: to convert. This means every element, from the headline to the call-to-action, must be laser-focused. We explore the psychology of color, the power of persuasive copywriting, and the importance of a single, clear CTA. We\'ll also look at A/B testing strategies to continuously refine your pages for maximum impact.',
    date: 'August 05, 2024',
    readTime: '7 min read',
    imageId: 'service-image-9',
    author: {
      name: 'Diana Miller',
      avatarId: 'avatar-1'
    }
  },
  {
    id: '5',
    title: 'From Idea to MVP: A Startup\'s Guide to Lean Development',
    slug: 'idea-to-mvp-guide',
    tags: ['Startups', 'Web Development', 'Business'],
    excerpt: 'Have a great app idea? Don\'t spend a year building it in secret. Learn how the Minimum Viable Product (MVP) approach can help you validate your concept faster and with less risk.',
    content: 'The MVP is your first step to market. It\'s not about building a perfect product; it\'s about building a product that solves a core problem for a specific audience. This guide walks you through defining your core features, choosing the right tech stack, and gathering crucial user feedback to iterate and grow.',
    date: 'August 10, 2024',
    readTime: '9 min read',
    imageId: 'service-image-4',
    author: {
      name: 'Brenda Chen',
      avatarId: 'avatar-4'
    }
  },
  {
    id: '6',
    title: 'Unlocking Local SEO: How to Dominate Your Neighborhood',
    slug: 'unlocking-local-seo',
    tags: ['SEO', 'Local Business', 'Marketing'],
    excerpt: 'For brick-and-mortar businesses, local SEO isn\'t just important—it\'s everything. Discover the proven strategies to get your business on the map and attract more local customers.',
    content: 'Dominating local search means optimizing your Google Business Profile, gathering reviews, building local citations, and creating content that speaks directly to your community. This post provides a step-by-step checklist for local businesses to improve their visibility and drive foot traffic.',
    date: 'August 12, 2024',
    readTime: '7 min read',
    imageId: 'service-image-10',
    author: {
      name: 'Carlos Rodriguez',
      avatarId: 'avatar-2'
    }
  },
  {
    id: '7',
    title: 'Content is King, But Distribution is Queen',
    slug: 'content-distribution-is-queen',
    tags: ['Content Marketing', 'Social Media', 'Marketing'],
    excerpt: 'You\'ve created an amazing piece of content. Now what? Learn why a smart distribution strategy is just as important as the content itself for reaching your target audience.',
    content: 'Creating great content is only half the battle. Without a solid distribution plan, it won\'t reach the people who need to see it. This article covers how to leverage social media, email newsletters, paid promotion, and community outreach to amplify your content\'s impact.',
    date: 'August 15, 2024',
    readTime: '5 min read',
    imageId: 'service-image-13',
    author: {
      name: 'Alex Thompson',
      avatarId: 'avatar-5'
    }
  },
  {
    id: '8',
    title: 'The Future is Headless: Is a Headless CMS Right for You?',
    slug: 'headless-cms-guide',
    tags: ['Web Development', 'CMS', 'Technology'],
    excerpt: 'Headless CMS architecture is gaining popularity for its flexibility and performance. But what is it, and how do you know if it\'s the right choice for your next project?',
    content: 'A headless CMS decouples the content backend from the presentation layer (the "head"). This allows you to use your content across multiple platforms—a website, a mobile app, a smart watch—all from one place. We explore the pros and cons of going headless versus a traditional CMS like WordPress.',
    date: 'August 18, 2024',
    readTime: '8 min read',
    imageId: 'service-image-2',
    author: {
      name: 'Brenda Chen',
      avatarId: 'avatar-4'
    }
  },
  {
    id: '9',
    title: 'Building Brand Trust Through Authentic Social Media Marketing',
    slug: 'building-brand-trust-social-media',
    tags: ['Social Media', 'Branding', 'Marketing'],
    excerpt: 'In a world of sponsored posts and influencers, authenticity stands out. Learn how to build a genuine connection with your audience and turn followers into loyal brand advocates.',
    content: 'Authenticity in social media means being transparent, showcasing behind-the-scenes moments, and engaging in real conversations. It\'s about building a community, not just collecting followers. This post shares practical tips for creating an authentic social media presence that resonates with today\'s consumers.',
    date: 'August 20, 2024',
    readTime: '6 min read',
    imageId: 'service-image-12',
    author: {
      name: 'Alex Thompson',
      avatarId: 'avatar-5'
    }
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rohan Sharma',
    title: 'Founder, LegalConnect',
    quote: 'Trionex Digital delivered a website that perfectly captured our firm\'s professional image. The increase in client consultations through the site was immediate and impressive. A truly fantastic team.',
    avatarId: 'avatar-testimonial-2'
  },
  {
    id: '2',
    name: 'Priya Singh',
    title: 'CEO, FitLife Nutrition',
    quote: 'Our new Shopify store is not only beautiful but also incredibly fast. The team\'s attention to detail and focus on user experience has directly resulted in a higher conversion rate. Highly recommended!',
    avatarId: 'avatar-testimonial-4'
  },
  {
    id: '3',
    name: 'Ankit Gupta',
    title: 'Owner, City Dental Care',
    quote: 'Thanks to their Local SEO efforts, we are now the top-ranked dental clinic in our area. Our appointment book is fuller than ever. Their digital marketing expertise is unmatched.',
    avatarId: 'avatar-testimonial-5'
  },
   {
    id: '4',
    name: 'Sameer Khan',
    title: 'CTO, InnovateTech',
    quote: 'The custom dashboard they built for us revolutionized our operations. It\'s intuitive, powerful, and has saved us countless hours of manual work. A game-changer for our business.',
    avatarId: 'avatar-testimonial-3'
  },
  {
    id: '5',
    name: 'Neha Desai',
    title: 'Marketing Head, Aura Fashion',
    quote: 'Their PPC campaigns are pure magic. We saw a 5X ROAS within the first quarter. They are strategic, transparent, and deliver on their promises.',
    avatarId: 'avatar-testimonial-1'
  }
];

export const team: TeamMember[] = [
  {
    id: '1',
    name: 'Alex Thompson',
    role: 'Founder & CEO',
    bio: 'With over a decade of experience in digital strategy, Alex leads the team with a passion for innovation and a commitment to client success.',
    avatarId: 'avatar-5'
  },
  {
    id: '2',
    name: 'Brenda Chen',
    role: 'Head of Development',
    bio: 'Brenda is a master of code, leading our development team to build high-performance websites and applications with cutting-edge technology.',
    avatarId: 'avatar-4'
  },
  {
    id: '3',
    name: 'Carlos Rodriguez',
    role: 'Director of Marketing',
    bio: 'Carlos is a data-driven marketer who excels at creating strategies that drive growth and deliver a measurable return on investment.',
    avatarId: 'avatar-2'
  },
  {
    id: '4',
    name: 'Diana Miller',
    role: 'Lead Designer',
    bio: 'Diana has a keen eye for aesthetics and user experience, ensuring every project we deliver is both beautiful and intuitive.',
    avatarId: 'avatar-1'
  },
];

export const clients: Client[] = [
  { id: '1', name: 'TechCorp', imageId: 'client-logo-1' },
  { id: '2', name: 'InnovateX', imageId: 'client-logo-2' },
  { id: '3', name: 'Shopify', imageId: 'client-logo-3' },
  { id: '4', name: 'QuantumFin', imageId: 'client-logo-4' },
  { id: '5', name: 'Wellness+', imageId: 'client-logo-5' },
  { id: '6', name: 'GlobeTrek', imageId: 'client-logo-6' },
  { id: '7', name: 'StartUpCo', imageId: 'client-logo-1' },
  { id: '8', name: 'FutureGadget', imageId: 'client-logo-2' },
];




    