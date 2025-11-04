
'use client';
import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import { caseStudies } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Link as LinkIcon, Youtube, ArrowLeft, CheckCircle, Target, Trophy, MessageSquareQuote, Briefcase, Clock, Code, ChevronLeft, ChevronRight } from 'lucide-react';
import LoadingLink from '@/components/loading-link';
import { Button } from '@/components/ui/button';
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const iconMap: { [key: string]: React.ElementType } = {
  'fa-brands fa-github': Github,
  'fa-solid fa-link': LinkIcon,
};

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [open, setOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  const study = caseStudies.find((p) => p.slug === slug);

  if (!study) {
    notFound();
  }
  
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  const getYouTubeEmbedUrl = (url: string) => {
    if (!url) return null;
    let videoId;
    if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1];
    } else if (url.includes('watch?v=')) {
        videoId = url.split('watch?v=')[1];
    } else {
        return null; // Not a standard YouTube URL
    }

    const ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition !== -1) {
        videoId = videoId.substring(0, ampersandPosition);
    }
    return `https://www.youtube.com/embed/${videoId}`;
  };


  const youtubeEmbedUrl = getYouTubeEmbedUrl(study.preview.youtubeVideo);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setOpen(true);
  };
  
  const hasMedia = study.preview.screenshots.length > 0;

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % study.preview.screenshots.length);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + study.preview.screenshots.length) % study.preview.screenshots.length);
  };

  return (
    <article className="py-16 sm:py-24 bg-background">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl w-full p-0 border-0 bg-transparent flex items-center justify-center">
            {study.preview.screenshots.length > 1 && (
                <Button variant="outline" size="icon" className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/75 text-white" onClick={handlePrevImage}>
                    <ChevronLeft className="h-6 w-6" />
                </Button>
            )}
            <Image
                src={study.preview.screenshots[selectedImageIndex]}
                alt="Selected Screenshot"
                width={1920}
                height={1080}
                className="w-auto h-auto max-w-full max-h-[90vh] rounded-lg object-contain"
            />
            {study.preview.screenshots.length > 1 && (
                <Button variant="outline" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/75 text-white" onClick={handleNextImage}>
                    <ChevronRight className="h-6 w-6" />
                </Button>
            )}
        </DialogContent>

        <div className="container mx-auto px-4 max-w-6xl">
          <header className="mb-12">
              <Button variant="ghost" asChild className="mb-4">
                  <LoadingLink href="/portfolio">
                      <ArrowLeft className="mr-2 h-4 w-4"/>
                      Back to Portfolio
                  </LoadingLink>
              </Button>
            <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
              {study.locales.en.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
              {study.locales.en.text.replace(/<[^>]*>?/gm, '')}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {study.locales.en.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-sm">{tag}</Badge>
              ))}
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className='lg:col-span-2 space-y-12'>
                  {hasMedia && (
                      <Card className="overflow-hidden">
                        <CardContent className="p-0">
                            <Carousel 
                            plugins={[plugin.current]}
                            className="w-full"
                            opts={{ loop: true }}
                            onMouseEnter={plugin.current.stop}
                            onMouseLeave={plugin.current.reset}
                            >
                              <CarouselContent>
                                  {study.preview.screenshots.map((screenshot, index) => (
                                    <CarouselItem key={index}>
                                        <DialogTrigger asChild>
                                          <div className="aspect-video relative cursor-pointer" onClick={() => handleImageClick(index)}>
                                          <Image
                                              src={screenshot}
                                              alt={`${study.locales.en.title} screenshot ${index + 1}`}
                                              fill
                                              className="object-cover"
                                          />
                                          </div>
                                        </DialogTrigger>
                                    </CarouselItem>
                                  ))}
                              </CarouselContent>
                              {study.preview.screenshots.length > 1 && <>
                                <CarouselPrevious className="left-4" />
                                <CarouselNext className="right-4" />
                              </>}
                            </Carousel>
                        </CardContent>
                      </Card>
                  )}

                  {youtubeEmbedUrl && (
                        <section>
                            <h2 className="font-headline text-3xl font-bold tracking-tight mb-4 flex items-center gap-3"><Youtube className="h-7 w-7 text-red-500"/>Project Demo</h2>
                            <Card className="overflow-hidden">
                                <div className="aspect-video relative bg-black">
                                    <iframe
                                        src={youtubeEmbedUrl}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full"
                                    ></iframe>
                                </div>
                            </Card>
                        </section>
                    )}
                  
                  <section>
                      <h2 className="font-headline text-3xl font-bold tracking-tight mb-4 flex items-center gap-3"><Trophy className="h-7 w-7 text-amber-500"/>Key Results</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {study.results.map((result, index) => (
                              <Card key={index} className="bg-secondary/50 dark:bg-secondary/20">
                                  <CardContent className="p-4 flex items-center gap-3">
                                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                                      <p className="font-medium">{result}</p>
                                  </CardContent>
                              </Card>
                          ))}
                      </div>
                  </section>
                  
                  <section>
                      <h2 className="font-headline text-3xl font-bold tracking-tight mb-4 flex items-center gap-3"><Target className="h-7 w-7 text-destructive"/>The Challenge</h2>
                      <div className="prose prose-lg dark:prose-invert max-w-none">
                          <p>{study.challenge}</p>
                      </div>
                  </section>
                  
                  <section>
                      <h2 className="font-headline text-3xl font-bold tracking-tight mb-4 flex items-center gap-3"><CheckCircle className="h-7 w-7 text-primary"/>The Solution</h2>
                      <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p>{study.solution}</p>
                      </div>
                  </section>
              </div>

              <aside className="lg:sticky lg:top-24 h-min space-y-8">
                  <Card>
                      <CardHeader>
                          <CardTitle className="font-headline">Project Overview</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4 text-sm">
                          <div className="flex items-center">
                              <Clock className="h-5 w-5 mr-3 text-muted-foreground"/>
                              <div>
                                  <span className="font-semibold">Timeline:</span>
                                  <p className="text-muted-foreground">{study.overview.timeline}</p>
                              </div>
                          </div>
                          <div className="flex items-start">
                              <Code className="h-5 w-5 mr-3 text-muted-foreground mt-0.5"/>
                              <div>
                                  <span className="font-semibold">Tech Stack:</span>
                                  <p className="text-muted-foreground">{study.overview.techStack}</p>
                              </div>
                          </div>
                      </CardContent>
                  </Card>
              
                  <Card>
                      <CardHeader>
                          <CardTitle className="font-headline">Project Links</CardTitle>
                      </CardHeader>
                      <CardContent>
                          {study.preview.links.length > 0 && (
                          <div className="flex flex-col gap-3">
                              {study.preview.links.map((link, index) => {
                              const Icon = iconMap[link.faIcon] || LinkIcon;
                              return (
                                  <Button asChild key={index} variant="outline" className="justify-start">
                                  <LoadingLink href={link.href} target="_blank" rel="noopener noreferrer">
                                      <Icon className="mr-2" />
                                      {link.tooltipString === 'see_on_github' ? 'View on GitHub' : 'Visit Website'}
                                  </LoadingLink>
                                  </Button>
                              )
                              })}
                          </div>
                          )}
                          {study.preview.youtubeVideo && (
                              <Button asChild variant="outline" className="justify-start w-full mt-3">
                                  <LoadingLink href={study.preview.youtubeVideo} target="_blank" rel="noopener noreferrer">
                                      <Youtube className="mr-2 text-red-500" />
                                  Watch on YouTube
                                  </LoadingLink>
                              </Button>
                          )}
                          {!study.preview.links.length && !study.preview.youtubeVideo && (
                              <p className="text-muted-foreground text-sm">No external links available.</p>
                          )}
                      </CardContent>
                  </Card>

                  {study.testimonial && (
                      <Card className="border-primary bg-gradient-to-br from-primary/10 to-background">
                          <CardHeader>
                              <CardTitle className="font-headline flex items-center gap-3"><MessageSquareQuote className="h-6 w-6 text-primary"/>Client Testimonial</CardTitle>
                          </CardHeader>
                          <CardContent>
                              <blockquote className="text-lg italic border-l-4 border-primary pl-4">
                                  <p>{study.testimonial.text}</p>
                                  <footer className="mt-4 text-base not-italic font-semibold text-foreground">
                                      &mdash; {study.testimonial.author}
                                  </footer>
                              </blockquote>
                          </CardContent>
                      </Card>
                  )}
              </aside>
          </div>
        </div>
      </Dialog>
    </article>
  );
}
