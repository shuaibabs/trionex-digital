

export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  scope: string[];
  process: { step: number; title: string; description: string }[];
  priceRange: string;
  caseStudyIds: string[];
  category: 'Web Development' | 'Digital Marketing';
  imageIds: string[];
}

export interface Package {
  id: string;
  title: string;
  price: string;
  pricePeriod?: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface CaseStudy {
  id: number;
  slug: string;
  categoryId: string;
  img: string;
  challenge: string;
  solution: string;
  overview: {
    role: string;
    timeline: string;
    techStack: string;
  };
  testimonial: {
    text: string;
    author: string;
  };
  results: string[];
  preview: {
    links: { href: string; tooltipString: string; faIcon: string }[];
    screenshots: string[];
    screenshotsAspectRatio: string;
    youtubeVideo: string;
  };
  locales: {
    en: {
      title: string;
      text: string;
      tags: string[];
    };
  };
}


export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  imageId: string;
  author: {
    name: string;
    avatarId: string;
  };
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  quote: string;
  avatarId: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatarId: string;
}

export interface Client {
  id: string;
  name: string;
  imageId: string;
}

export interface PlaceholderImage {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
}
