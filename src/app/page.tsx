
'use client';

import LoadingLink from '@/components/loading-link';
import React from 'react';
import {
  ArrowRight,
  BarChart,
  Code,
  DollarSign,
  PenTool,
  Search,
  Users,
  MessageSquareQuote,
  Quote
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
   type CarouselApi,
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { placeholderImages } from '@/lib/data';
import { services, blogPosts, testimonials, clients } from '@/lib/data';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import FuturisticAnimation from '@/components/futuristic-animation';
import Logo from '@/components/icons/logo';
import { Starfield } from '@/components/starfield';
import Autoplay from "embla-carousel-autoplay";


export default function Home() {
  const featuredServices = services.filter(s => 
    ['business-website-development', 'portfolio-personal-branding-websites', 'ppc-advertising', 'seo-optimization'].includes(s.id)
  );
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  )
  
  const duplicatedClients = [...clients, ...clients];

  const [testimonialApi, setTestimonialApi] = React.useState<CarouselApi>()
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0)

  React.useEffect(() => {
    if (!testimonialApi) {
      return
    }
 
    const onSelect = (api: CarouselApi) => {
      setCurrentTestimonial(api.selectedScrollSnap())
    }

    testimonialApi.on("select", onSelect)
    onSelect(testimonialApi); // Set initial state
 
    return () => {
      testimonialApi.off("select", onSelect)
    }
  }, [testimonialApi])

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-background to-secondary/50 dark:from-background dark:to-secondary/20 overflow-hidden">
        <Starfield />
        <div className="container mx-auto grid grid-cols-1 items-center gap-8 px-4 text-center md:grid-cols-2 md:text-left">
          <div className="space-y-6">
            <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl glow-on-hover">
              Elevate Your Digital Presence
            </h1>
            <p className="max-w-[600px] text-base text-muted-foreground md:text-lg">
              We are a results-driven agency specializing in web development,
              SEO, and digital marketing. Let us build your success story.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center md:justify-start">
              <Button asChild size="lg">
                <LoadingLink href="/contact">Get a Free Quote</LoadingLink>
              </Button>
              <Button asChild size="lg" variant="outline">
                <LoadingLink href="/services">Our Services</LoadingLink>
              </Button>
            </div>
          </div>
          <div className="relative h-96 w-full flex flex-col items-center justify-center">
            <FuturisticAnimation />
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <Logo className="h-8 w-auto" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-secondary/70 dark:bg-secondary/20 py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <Users className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-primary" />
              <p className="mt-2 text-2xl sm:text-3xl font-bold font-headline">150+</p>
              <p className="text-muted-foreground text-sm sm:text-base">Happy Clients</p>
            </div>
            <div className="text-center">
              <Code className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-primary" />
              <p className="mt-2 text-2xl sm:text-3xl font-bold font-headline">200+</p>
              <p className="text-muted-foreground text-sm sm:text-base">Projects Completed</p>
            </div>
            <div className="text-center">
              <DollarSign className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-primary" />
              <p className="mt-2 text-2xl sm:text-3xl font-bold font-headline">300%</p>
              <p className="text-muted-foreground text-sm sm:text-base">Average ROI</p>
            </div>
            <div className="text-center">
              <BarChart className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-primary" />
              <p className="mt-2 text-2xl sm:text-3xl font-bold font-headline">5+</p>
              <p className="text-muted-foreground text-sm sm:text-base">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="bg-background py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <Badge variant="outline">Our Expertise</Badge>
            <h2 className="mt-2 font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              Services We Offer
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-muted-foreground">
              From crafting stunning websites to dominating search results, we have
              you covered.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((service, i) => {
              const serviceImages = service.imageIds.map(id => placeholderImages.find(p => p.id === id)).filter(Boolean);
              return (
                <motion.div
                  key={service.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  variants={cardVariants}
                  className="flex"
                >
                  <Card
                    className={cn("group overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl card-glow-on-hover h-full flex flex-col")}
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
                    <CardContent className="text-center flex-grow">
                      <p className="mb-4 text-muted-foreground text-sm">
                        {service.shortDescription}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" asChild className="w-full mt-auto">
                        <LoadingLink href={`/services/${service.slug}`}>
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </LoadingLink>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-secondary/50 dark:bg-secondary/20">
        <div className="container mx-auto px-4">
            <h3 className="mb-8 text-center text-base font-semibold text-muted-foreground">
                Trusted by leading companies worldwide
            </h3>
            <div
                className="group relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
                >
                <div className="flex animate-scroll group-hover:[animation-play-state:paused]">
                    {duplicatedClients.map((client, index) => {
                        const clientImage = placeholderImages.find(p => p.id === client.imageId);
                        return (
                            <div key={`${client.id}-${index}`} className="flex-shrink-0 w-1/2 sm:w-1/4 md:w-1/6 p-4">
                                {clientImage && (
                                    <Image
                                        src={clientImage.imageUrl}
                                        alt={client.name}
                                        width={150}
                                        height={50}
                                        className="object-contain h-10 w-auto mx-auto grayscale transition-all hover:grayscale-0"
                                        data-ai-hint={clientImage.imageHint}
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    </section>

      {/* Testimonials Section */}
      <section className="bg-background py-16 sm:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <Badge variant="outline">Client Feedback</Badge>
            <h2 className="mt-2 font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              What Our Clients Say
            </h2>
          </div>
          <Carousel
            setApi={setTestimonialApi}
            plugins={[plugin.current]}
            className="w-full max-w-6xl mx-auto"
            opts={{ 
              loop: true,
              align: 'center',
            }}
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => {
                 const avatarImage = placeholderImages.find(p => p.id === testimonial.avatarId);
                 const isActive = index === currentTestimonial;
                return (
                 <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <motion.div 
                        className="h-full p-1"
                        animate={{ 
                            scale: isActive ? 1 : 0.85,
                            opacity: isActive ? 1 : 0.5,
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    >
                      <div className="testimonial-card">
                          <div className="testimonial-card-content">
                            {avatarImage && (
                                <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 testimonial-avatar">
                                    <Image
                                        src={avatarImage.imageUrl}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                        data-ai-hint={avatarImage.imageHint}
                                    />
                                </div>
                            )}
                            <Quote className="absolute top-6 left-6 w-10 h-10 text-primary/10" />
                            <p className="text-muted-foreground text-center italic mb-6 text-sm sm:text-base">
                                &quot;{testimonial.quote}&quot;
                            </p>
                            <div className="text-center">
                                <p className="font-bold font-headline text-lg text-foreground">{testimonial.name}</p>
                                <p className="text-xs text-primary">{testimonial.title}</p>
                            </div>
                          </div>
                      </div>
                    </motion.div>
                </CarouselItem>
              )})}
            </CarouselContent>
             <div className="hidden sm:block">
                <CarouselPrevious className="-left-4 sm:-left-8 md:-left-12" />
                <CarouselNext className="-right-4 sm:-right-8 md:-right-12" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 sm:py-24 bg-secondary/50 dark:bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <Badge variant="outline">Our Insights</Badge>
            <h2 className="mt-2 font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              From Our Blog
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-muted-foreground">
              Stay ahead of the curve with our latest articles and insights.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, 3).map((post, i) => {
              const blogImage = placeholderImages.find(p => p.id === post.imageId);
              return (
              <motion.div
                key={post.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex"
              >
                <Card key={post.id} className={cn("overflow-hidden group card-glow-on-hover h-full flex flex-col")}>
                    <LoadingLink href={`/blog/${post.slug}`} className="block flex flex-col h-full">
                        <div className="aspect-video relative">
                          {blogImage && <Image
                            src={blogImage.imageUrl}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            data-ai-hint={blogImage.imageHint}
                          />}
                        </div>
                        <CardHeader>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>{post.date}</span>
                            <span>&bull;</span>
                            <span>{post.readTime}</span>
                          </div>
                          <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors">
                            {post.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <p className="text-muted-foreground line-clamp-2 text-sm">
                            {post.excerpt}
                          </p>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" asChild className="w-full mt-auto">
                                <LoadingLink href={`/blog/${post.slug}`}>
                                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                                </LoadingLink>
                            </Button>
                        </CardFooter>
                    </LoadingLink>
                </Card>
              </motion.div>
            )})}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4">
            <div className="relative rounded-lg bg-secondary/50 dark:bg-secondary/20 p-8 md:p-12 overflow-hidden">
                <div className="absolute -right-16 -top-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute -left-24 -bottom-24 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
                
                <div className="relative grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4 text-center md:text-left">
                        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-base text-muted-foreground max-w-md mx-auto md:mx-0">
                            Let's talk about how Trionex Digital can help you achieve your
                            goals. Schedule a free consultation today.
                        </p>
                        <motion.div
                          animate={{
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="inline-block"
                        >
                            <Button
                                size="lg"
                                asChild
                                className="shadow-lg shadow-primary/30"
                            >
                                <LoadingLink href="/contact">
                                Schedule a meeting <ArrowRight className="ml-2 h-5 w-5" />
                                </LoadingLink>
                            </Button>
                        </motion.div>
                    </div>
                    <div className="relative h-48 md:h-full flex items-center justify-center">
                         <motion.div
                            animate={{
                                y: [-10, 10, -10],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                         >
                            <MessageSquareQuote className="w-24 h-24 md:w-32 md:h-32 text-primary/20" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}

    

    