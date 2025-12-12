import type { CaseStudy } from '../types';
export const caseStudies: CaseStudy[] = [
    {
        id: 1,
        slug: 'hashmi-vip-numbers-management-system',
        categoryId: 'category_web',
        img: '/assets/images/case-studies/hashmi-1.png',
        challenge: 'Managing thousands of VIP mobile numbers with varying statuses, ownership types, sales records, and locations was becoming extremely difficult. Manual workflows led to human errors, inefficient operations, lack of centralized data control, and no reliable way to track employees, sales, or system-wide activities.',
        solution: 'Developed a full-fledged Number Management System using Next.js, Firebase, and ShadCN UI to centralize the entire lifecycle of VIP numbers. The system provides real-time data access, role-based controls, automated workflows, bulk operations, and complete audit logging for secure and efficient inventory management.',
        testimonial: {
            text: 'This system completely transformed how we manage our number inventory. It reduced errors, improved speed, and gave us full control over our operations. Everything is streamlined now.',
            author: 'Owner, Hashmi VIP Numbers'
        },
        results: [
            '80% reduction in manual data entry errors',
            'Fully centralized and real-time inventory visibility',
            'Faster workflows through bulk operations and role-based automation'
        ],
        overview: {
            role: 'Full-Stack Developer',
            timeline: '3 Months',
            techStack: 'Next.js, Firebase (Firestore, Auth), ShadCN UI, CSV Utilities'
        },
        preview: {
            links: [],
            screenshots: [
                '/assets/images/case-studies/hashmi-1.png',
                '/assets/images/case-studies/hashmi-5.png',
                '/assets/images/case-studies/hashmi-2.png',
                '/assets/images/case-studies/hashmi-3.png',
                '/assets/images/case-studies/hashmi-4.png'
            ],
            screenshotsAspectRatio: '16:9',
            youtubeVideo: ''
        },
        locales: {
            en: {
                title: 'Hashmi VIP Numbers – Number Management System',
                text: 'A powerful <b>Number Management System</b> built with Next.js and Firebase, featuring centralized inventory, lifecycle tracking, role-based access, bulk operations, and complete activity logging.',
                tags: [
                    'Next.js',
                    'Firebase',
                    'Firestore',
                    'ShadCN UI',
                    'Admin Panel',
                    'Inventory System',
                    'Management System'
                ]
            }
        }
    },
    {
        id: 2,
        slug: 'alpine-college-education-web-app',
        categoryId: 'category_web',
        img: '/assets/images/case-studies/alpine/alpine-1.jpg',
        challenge: 'The college needed a modern, responsive website to showcase courses, faculty, and campus facilities. They also required digital admission forms, event management tools, and a student portal to streamline communication and resource sharing.',
        solution: 'Built a fully responsive web application using modern web technologies, featuring dynamic course pages, faculty profiles, online admission forms, event listings, and a secure student portal with access to study materials and announcements.',
        testimonial: {
            text: 'Our new website has transformed how students and parents interact with our college. It is fast, professional, and incredibly easy to manage.',
            author: 'Administrator, Alpine College of Education'
        },
        results: [
            '40% increase in online admission inquiries',
            'Student portal accessed by 1,500+ active users',
            'Improved visibility and branding across digital platforms'
        ],
        overview: {
            role: 'Full-Stack Web Developer',
            timeline: '6 Weeks',
            techStack: 'React, Node.js, Express, MongoDB'
        },
        preview: {
            links: [],
            screenshots: [
                '/assets/images/case-studies/alpine/alpine-1.jpg',
                '/assets/images/case-studies/alpine/alpine-2.jpg',
                '/assets/images/case-studies/alpine/alpine-3.jpg',
                '/assets/images/case-studies/alpine/alpine-4.jpg',
                '/assets/images/case-studies/alpine/alpine-5.jpg'
            ],
            screenshotsAspectRatio: '16:9',
            youtubeVideo: ''
        },
        locales: {
            en: {
                title: 'Alpine College of Education',
                text: 'A fully responsive <b>college web application</b> featuring course details, faculty profiles, digital admissions, event management, and a dedicated student portal.',
                tags: ['Web App', 'React', 'Node.js', 'MongoDB', 'Education', 'Responsive Design']
            }
        }
    },
    {
        id: 3,
        slug: 'tripbookkar',
        categoryId: 'category_web',
        img: '/assets/images/case-studies/trip-1.jpg',
        challenge: 'TripBookKar aimed to disrupt the travel market with a one-stop booking platform but faced challenges with integrating various travel APIs and offering personalized recommendations in a competitive space.',
        solution: 'Developed a comprehensive travel portal using React for a dynamic frontend and Node.js for the backend. The platform integrates multiple third-party APIs for flights, hotels, and buses. An AI model was integrated to provide users with personalized travel suggestions based on their search history and preferences.',
        testimonial: { text: 'Trionex Digital brought our vision to life. The AI-powered recommendations are a huge hit with our users, and the platform is incredibly robust and scalable.', author: 'CEO, TripBookKar' },
        results: ['Unified 5+ travel booking APIs into one platform', 'Increased user engagement by 40% with AI recommendations', 'Processed over 10,000 bookings in the first six months'],
        overview: {
            role: 'Lead Architect',
            timeline: '9 Months',
            techStack: 'React, Node.js, MongoDB, AI/ML'
        },
        preview: {
            links: [{ href: '#', tooltipString: 'open_website', faIcon: 'fa-solid fa-link' }],
            screenshots: [
                '/assets/images/case-studies/trip-1.png',
                '/assets/images/case-studies/trip-2.png',
                '/assets/images/case-studies/trip-3.png',
                '/assets/images/case-studies/trip-4.png'
            ],
            screenshotsAspectRatio: '16:9',
            youtubeVideo: ''
        },
        locales: {
            en: {
                title: 'TripBookKar',
                text: '<b>TripBookKar</b> is a one-stop travel booking platform for <b>holiday packages, flights, hotels, trains, buses, cabs, and more.</b>',
                tags: ['React', 'ExpressJS', 'NodeJS', 'MongoDB', 'AI/ML']
            }
        }
    },
    {
        id: 4,
        slug: 'json-to-excel-converter',
        categoryId: 'category_utilities',
        img: '/assets/images/case-studies/json-to-excel.jpg',
        challenge: 'Client needed an efficient way to convert large, complex JSON files into structured Excel spreadsheets for non-technical team members to analyze. Manual conversion was time-consuming and prone to errors.',
        solution: 'Developed a standalone Java-based command-line tool (JAR) that parses any JSON file and converts it into a well-formatted Excel file. The tool automatically creates tables with filtering and sorting enabled, making data exploration intuitive.',
        testimonial: { text: 'This tool saved our team countless hours. What used to take half a day now takes seconds. A real game-changer for our workflow!', author: 'Data Analyst, FinCorp' },
        results: ['99% reduction in data conversion time', 'Eliminated manual data entry errors', 'Enabled self-serve data analysis for business teams'],
        overview: {
            role: 'Lead Developer',
            timeline: '2 Weeks',
            techStack: 'Java'
        },
        preview: {
            links: [],
            screenshots: [
                '/assets/images/case-studies/json-to-excel-1.jpg',
                '/assets/images/case-studies/json-to-excel-2.png'
            ],
            screenshotsAspectRatio: '16:9',
            youtubeVideo: ''
        },
        locales: {
            en: {
                title: 'JSON to Excel Converter',
                text: 'A <b>Java-based JAR tool</b> that converts JSON data into Excel with <b>default filtering, sorting, and structured formatting</b> for efficient data management and reporting.',
                tags: ['JAVA', 'JAR', 'JSON', 'Excel']
            }
        }
    },
    
    {
        id: 5,
        slug: 'local-bakery-seo',
        categoryId: 'category_seo',
        img: '/assets/images/case-studies/bakery-seo-1.jpg',
        challenge: 'A local bakery with delicious products was struggling to attract foot traffic and online orders. They were virtually invisible on local Google searches and Google Maps.',
        solution: 'Executed a hyper-local SEO strategy. This included optimizing their Google Business Profile, building local citations, creating location-specific landing pages, and generating content around local events and keywords like "best cakes in [City]".',
        testimonial: { text: 'We went from obscurity to the #1 spot on Google Maps for "bakery near me". Our phone is ringing off the hook, and online orders have tripled. It\'s been transformative!', author: 'Owner, The Sweet Spot Bakery' },
        results: ['Achieved #1 ranking in Google Map Pack for target keywords', '300% increase in online orders', '50% increase in daily foot traffic'],
        overview: {
            role: 'SEO Strategist',
            timeline: '3 Months',
            techStack: 'Google Business Profile, SEMrush, Ahrefs'
        },
        preview: {
            links: [{ href: '#', tooltipString: 'open_website', faIcon: 'fa-solid fa-link' }],
            screenshots: [
                '/assets/images/case-studies/bakery-seo-1.jpg',
                '/assets/images/case-studies/bakery-seo-2.jpg'
            ],
            screenshotsAspectRatio: '16:9',
            youtubeVideo: ''
        },
        locales: {
            en: {
                title: 'Local Bakery SEO Dominance',
                text: 'A hyper-local SEO campaign that took a bakery from obscurity to the <b>top of local search results</b>, driving a massive increase in both foot traffic and online sales.',
                tags: ['Local SEO', 'Google Business Profile', 'Content Marketing', 'Keyword Research']
            }
        }
    },
    {
        id: 6,
        slug: 'b2b-saas-ppc-campaign',
        categoryId: 'category_marketing',
        img: '/assets/images/case-studies/b2b-saas-1.png',
        challenge: 'A B2B SaaS startup had a groundbreaking product but struggled to generate qualified leads. Their initial ad campaigns were attracting the wrong audience and had a high cost-per-acquisition (CPA).',
        solution: 'Restructured their Google and LinkedIn Ads campaigns. Focused on high-intent keywords, competitor targeting, and precise audience segmentation on LinkedIn based on job titles and company size. Created highly-targeted ad copy and landing pages for each segment.',
        testimonial: { text: 'Their PPC strategy was a game-changer. Our lead quality improved overnight, and our CPA dropped by 60%. We\'re now signing clients we could only dream of before.', author: 'CMO, DataStream Innovations' },
        results: ['Reduced Cost-Per-Acquisition (CPA) by 60%', 'Increased qualified marketing leads by 150%', 'Achieved a 4x Return on Ad Spend (ROAS)'],
        overview: {
            role: 'PPC Manager',
            timeline: 'Ongoing (6+ months)',
            techStack: 'Google Ads, LinkedIn Ads, Google Analytics'
        },
        preview: {
            links: [],
            screenshots: [
                '/assets/images/case-studies/b2b-saas-1.png',
                '/assets/images/case-studies/b2b-saas-2.jpg'
            ],
            screenshotsAspectRatio: '16:9',
            youtubeVideo: ''
        },
        locales: {
            en: {
                title: 'B2B SaaS PPC Lead Generation',
                text: 'A targeted PPC campaign on Google and LinkedIn that <b>slashed the Cost-Per-Acquisition</b> and dramatically increased the volume of qualified leads for a B2B SaaS startup.',
                tags: ['PPC', 'Google Ads', 'LinkedIn Ads', 'Conversion Rate Optimization']
            }
        }
    },
    {
        id: 7,
        slug: 'zenith-fitness-tracker',
        categoryId: 'category_mobile_app',
        img: '/assets/images/case-studies/fitness-1.png',
        challenge: 'A fitness startup wanted to create a mobile app with a clean UI and strong motivational features to stand out in a crowded market. They needed a cross-platform solution to reach both iOS and Android users quickly.',
        solution: 'Developed a cross-platform fitness tracking app using React Native. The app featured real-time GPS tracking for activities, personalized workout plans, and social sharing capabilities to boost user engagement and motivation.',
        testimonial: { text: 'The app is incredibly smooth and intuitive. Our users love the design and the social features have created a real sense of community. The launch was a huge success!', author: 'Founder, Zenith Fitness' },
        results: ['Launched on iOS & Android in 4 months', 'Achieved 50,000+ downloads in the first year', '4.8-star average rating on both app stores'],
        overview: {
            role: 'Lead Mobile Developer',
            timeline: '4 Months',
            techStack: 'React Native, Firebase, Mapbox'
        },
        preview: {
            links: [],
            screenshots: [
                '/assets/images/case-studies/fitness-1.png',
                '/assets/images/case-studies/fitness-2.png',
                '/assets/images/case-studies/fitness-3.png'
            ],
            screenshotsAspectRatio: '9:16',
            youtubeVideo: ''
        },
        locales: {
            en: {
                title: 'Zenith Fitness Tracker',
                text: 'A cross-platform <b>mobile fitness app</b> built with React Native, featuring real-time activity tracking, workout plans, and social sharing.',
                tags: ['React Native', 'Firebase', 'Mobile App', 'iOS', 'Android']
            }
        }
    },
    {
        id: 8,
        slug: 'ecommerce-store-mobile-app',
        categoryId: 'category_mobile_app',
        img: '/assets/images/case-studies/e-commerce-01.jpg',
        challenge: 'A retail business needed a modern, fast, and scalable mobile solution to sell products online. They required a smooth shopping experience, secure checkout, and real-time updates for orders and inventory.',
        solution: 'Developed a full-stack e-commerce mobile app using React (Vite) for a fast and responsive UI and Node.js with Express for server-side operations. Integrated MongoDB as the main database for managing products, orders, and users, while Firebase handled authentication and real-time notifications.',
        testimonial: {
            text: 'The mobile app streamlined our entire online sales process. Customers love the speed and UI, and inventory management has become effortless.',
            author: 'CEO, RetailCo'
        },
        results: [
            'Launched on Android in under 5 months',
            '50% increase in online sales within the first quarter',
            'Over 25,000+ active users in the first year'
        ],
        overview: {
            role: 'Full-Stack Developer',
            timeline: '5 Months',
            techStack: 'React (Vite), Node.js, Express, MongoDB, Firebase'
        },
        preview: {
            links: [],
            screenshots: [
                '/assets/images/case-studies/e-com-1.jpg',
                '/assets/images/case-studies/e-com-2.jpg',
                '/assets/images/case-studies/e-com-3.jpg'
            ],
            screenshotsAspectRatio: '9:16',
            youtubeVideo: ''
        },
        locales: {
            en: {
                title: 'E-Commerce Store Mobile App',
                text: 'A modern, full-stack <b>e-commerce mobile application</b> built using React (Vite), Node.js, MongoDB, and Firebase for authentication and real-time notifications.',
                tags: ['React', 'Vite', 'Node.js', 'MongoDB', 'Firebase', 'E-Commerce', 'Android']
            }
        }
    }
    
    

]
