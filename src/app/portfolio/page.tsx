
'use client';

import Image from 'next/image';
import LoadingLink from '@/components/loading-link';
import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { caseStudies } from '@/lib/data';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { cn } from '@/lib/utils';

const categoryIdToName: Record<string, string> = {
  'category_web': 'Web App',
  'category_mobile_app': 'Mobile App',
  'category_utilities': 'Utilities',
  'category_seo': 'SEO',
  'category_marketing': 'Marketing',
};

export default function PortfolioPage() {
  const [filter, setFilter] = useState<string>('all');
  
  const plugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: true })
  )

  const categories = useMemo(() => {
    const allCategories = caseStudies.reduce((acc, study) => {
      if (study.categoryId && !acc.some(c => c.id === study.categoryId)) {
        acc.push({
          id: study.categoryId,
          name: categoryIdToName[study.categoryId] || study.categoryId,
        });
      }
      return acc;
    }, [] as { id: string; name: string }[]);
    
    return [{ id: 'all', name: 'All' }, ...allCategories];
  }, []);

  const filteredCaseStudies =
    filter === 'all'
      ? caseStudies
      : caseStudies.filter((study) => study.categoryId === filter);
      
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl">
            Case Studies
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
            Explore my portfolio of success stories and see how I've helped businesses like yours thrive.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? 'default' : 'outline'}
              onClick={() => setFilter(category.id)}
              className="px-4 py-2 text-sm"
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCaseStudies.map((study, i) => {
            const categoryName = categories.find(c => c.id === study.categoryId)?.name;
            return (
              <motion.div
                key={study.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex"
              >
                <Card className={cn("overflow-hidden group flex flex-col h-full w-full transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl card-glow-on-hover")}>
                  <LoadingLink href={`/portfolio/${study.slug}`} className="block h-full flex flex-col">
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
                          {study.preview.screenshots.length > 0 ? study.preview.screenshots.map((ss, index) => (
                              <CarouselItem key={index}>
                                  <div className="aspect-video relative overflow-hidden">
                                  <Image
                                      src={ss}
                                      alt={`${study.locales.en.title} screenshot ${index + 1}`}
                                      fill
                                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                                  />
                                  </div>
                              </CarouselItem>
                          )) : (
                               <CarouselItem>
                                  <div className="aspect-video relative overflow-hidden">
                                      <Image
                                          src={study.img}
                                          alt={study.locales.en.title}
                                          fill
                                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                                      />
                                  </div>
                              </CarouselItem>
                          )}
                      </CarouselContent>
                    </Carousel>
                    <CardHeader>
                        <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors">
                          {study.locales.en.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className='flex-grow'>
                      <div
                        className="text-muted-foreground line-clamp-3 text-sm"
                        dangerouslySetInnerHTML={{ __html: study.locales.en.text }}
                      />
                    </CardContent>
                    <CardFooter>
                        <Button variant="outline" asChild className="w-full mt-auto">
                            <LoadingLink href={`/portfolio/${study.slug}`}>
                                View Details <ArrowRight className="ml-2 h-4 w-4" />
                            </LoadingLink>
                        </Button>
                    </CardFooter>
                  </LoadingLink>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
