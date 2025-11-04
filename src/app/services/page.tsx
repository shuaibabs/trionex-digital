
'use client';
import React from 'react';
import { ArrowRight, BarChart, Code, PenTool, Search, Users } from 'lucide-react';
import LoadingLink from '@/components/loading-link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { services, placeholderImages } from '@/lib/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { cn } from '@/lib/utils';

const serviceIcons: { [key: string]: React.ElementType } = {
  'business-website-development': Code,
  'seo-optimization': Search,
  'ppc-advertising': BarChart,
  'content-marketing': PenTool,
  'ecommerce-website': Code,
  'social-media-marketing': Users,
  'real-estate-website-development': Code,
  'college-school-website-development': Code,
  'healthcare-clinic-website-development': Code,
  'portfolio-personal-branding-websites': Code,
  'startup-mvp-development': Code,
  'landing-page-design-development': Code,
};


export default function ServicesPage() {
  const webDevServices = services.filter(s => s.category === 'Web Development');
  const marketingServices = services.filter(s => s.category === 'Digital Marketing');
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
            We provide a comprehensive suite of digital services to elevate your brand and accelerate your growth, from web development to digital marketing.
          </p>
        </div>

        {/* Web Development Services */}
        <section className="mb-20">
          <h2 className="font-headline text-3xl font-bold tracking-tight mb-8 text-center sm:text-4xl">Web Development Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webDevServices.map((service, i) => {
              const serviceImages = service.imageIds.map(id => placeholderImages.find(p => p.id === id)).filter(Boolean);
              const Icon = serviceIcons[service.id] || Code;
              return (
              <motion.div
                key={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="h-full"
              >
                <Card
                  className={cn("flex flex-col transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl h-full group overflow-hidden card-glow-on-hover")}
                >
                  <Carousel 
                      className="w-full" 
                      plugins={[
                        Autoplay({
                          delay: 2000 + Math.random() * 1000,
                          stopOnInteraction: true,
                        }),
                      ]}
                      opts={{ loop: true }}
                    >
                    <CarouselContent>
                        {serviceImages.length > 0 ? serviceImages.map((img, index) => (
                            <CarouselItem key={index}>
                                <div className="aspect-video relative overflow-hidden">
                                <Image
                                    src={img!.imageUrl}
                                    alt={img!.description}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    data-ai-hint={img!.imageHint}
                                />
                                </div>
                            </CarouselItem>
                        )) : (
                              <CarouselItem>
                                <div className="aspect-video relative overflow-hidden bg-secondary flex items-center justify-center">
                                  <Icon className="h-10 w-10 text-muted-foreground" />
                                </div>
                            </CarouselItem>
                        )}
                    </CarouselContent>
                  </Carousel>
                  <CardHeader className="items-center text-center">
                    <CardTitle className="font-headline text-xl">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-6 flex-grow text-sm text-center">
                      {service.shortDescription}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild className="w-full mt-auto">
                        <LoadingLink href={`/services/${service.slug}`}>
                            View Details <ArrowRight className="ml-2 h-4 w-4" />
                        </LoadingLink>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            )})}
          </div>
        </section>

        {/* Digital Marketing Services */}
        <section>
          <h2 className="font-headline text-3xl font-bold tracking-tight mb-8 text-center sm:text-4xl">Digital Marketing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingServices.map((service, i) => {
              const serviceImages = service.imageIds.map(id => placeholderImages.find(p => p.id === id)).filter(Boolean);
               const Icon = serviceIcons[service.id] || Code;
              return (
              <motion.div
                  key={service.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="h-full"
              >
                  <Card
                  className={cn("flex flex-col transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl h-full group overflow-hidden card-glow-on-hover")}
                  >
                    <Carousel 
                      className="w-full" 
                      plugins={[
                        Autoplay({
                          delay: 2000 + Math.random() * 1000,
                          stopOnInteraction: true,
                        }),
                      ]}
                      opts={{ loop: true }}
                    >
                    <CarouselContent>
                        {serviceImages.length > 0 ? serviceImages.map((img, index) => (
                            <CarouselItem key={index}>
                                <div className="aspect-video relative overflow-hidden">
                                <Image
                                    src={img!.imageUrl}
                                    alt={img!.description}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    data-ai-hint={img!.imageHint}
                                />
                                </div>
                            </CarouselItem>
                        )) : (
                            <CarouselItem>
                                <div className="aspect-video relative overflow-hidden bg-secondary flex items-center justify-center">
                                  <Icon className="h-10 w-10 text-muted-foreground" />
                                </div>
                            </CarouselItem>
                        )}
                    </CarouselContent>
                  </Carousel>
                    <CardHeader className="items-center text-center">
                      <CardTitle className="font-headline text-xl">
                      {service.title}
                      </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                      <p className="text-muted-foreground mb-6 flex-grow text-sm text-center">
                      {service.shortDescription}
                      </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild className="w-full mt-auto">
                        <LoadingLink href={`/services/${service.slug}`}>
                            View Details <ArrowRight className="ml-2 h-4 w-4" />
                        </LoadingLink>
                    </Button>
                  </CardFooter>
                  </Card>
              </motion.div>
            )})}
          </div>
        </section>

      </div>
    </div>
  );
}

    