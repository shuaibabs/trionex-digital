
'use client';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import LoadingLink from '@/components/loading-link';
import { services, caseStudies, placeholderImages } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { Check, ArrowRight, Wallet, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const relatedCaseStudies = caseStudies.filter(cs => service.caseStudyIds.includes(String(cs.id)));
  const serviceImageId = `service-${service.id}`;
  const serviceImage = placeholderImages.find(p => p.id === serviceImageId);
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <Button variant="ghost" asChild className="mb-4">
            <LoadingLink href="/services">
                <ArrowLeft className="mr-2 h-4 w-4"/>
                Back to Services
            </LoadingLink>
        </Button>
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline">{service.category}</Badge>
          <h1 className="mt-2 font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg text-muted-foreground">
            {service.longDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">

            {/* What's Included Section */}
            <section>
              <h2 className="font-headline text-2xl font-bold mb-4 sm:text-3xl">What's Included</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.scope.map((item, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    variants={cardVariants}
                  >
                    <div className="flex items-center gap-3 bg-secondary/50 dark:bg-secondary/20 p-4 rounded-lg h-full">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
            
            {/* Our Process Section */}
            <section>
              <h2 className="font-headline text-2xl font-bold mb-6 sm:text-3xl">Our Process</h2>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-border before:-translate-x-px">
                {service.process.map((step, index) => (
                   <motion.div
                    key={step.step}
                    className="relative flex items-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    variants={cardVariants}
                  >
                    <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold font-headline flex-shrink-0">
                      {step.step}
                    </div>
                    <div className="ml-6">
                      <h3 className="font-headline text-lg font-semibold">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Related Case Studies Section */}
            {relatedCaseStudies.length > 0 && (
              <section>
                <h2 className="font-headline text-2xl font-bold mb-4 sm:text-3xl">Related Case Studies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedCaseStudies.map((study, i) => {
                    return (
                      <motion.div
                        key={study.id}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        variants={cardVariants}
                      >
                        <Card className="group overflow-hidden h-full">
                          <LoadingLink href={`/case-studies/${study.slug}`} className="block">
                                <div className="aspect-video relative">
                                    <Image src={study.img} alt={study.locales.en.title} fill className="object-cover transition-transform group-hover:scale-105"  />
                                </div>
                            <CardHeader>
                                <CardTitle className="font-headline text-lg">{study.locales.en.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <span className="text-primary hover:underline text-sm">
                                    Read Case Study <ArrowRight className="ml-1 h-4 w-4 inline" />
                                </span>
                            </CardContent>
                          </LoadingLink>
                        </Card>
                      </motion.div>
                    )
                  })}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8 lg:sticky lg:top-24 h-min">
            {serviceImage && (
                <motion.div 
                    className="relative aspect-video rounded-lg overflow-hidden"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={cardVariants}
                >
                    <Image src={serviceImage.imageUrl} alt={service.title} fill className="object-cover" data-ai-hint={serviceImage.imageHint} />
                </motion.div>
            )}

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                variants={cardVariants}
            >
                <Card>
                <CardHeader>
                    <CardTitle className="font-headline flex items-center gap-2 text-xl">
                        <Wallet className="h-6 w-6 text-primary"/>
                        Pricing
                    </CardTitle>
                    <CardDescription>Typical Investment</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-3xl font-bold font-headline text-primary">{service.priceRange}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                        Prices vary based on project scope and complexity.
                    </p>
                </CardContent>
                </Card>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                variants={cardVariants}
            >
                <Card className="bg-primary text-primary-foreground text-center">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl">Ready to get started?</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm">Let's discuss how our {service.title} services can help your business grow.</p>
                    </CardContent>
                    <CardFooter>
                        <Button variant="secondary" size="lg" className="w-full" asChild>
                            <LoadingLink href={`/contact?interest=${service.id}`}>Schedule a Free Consultation</LoadingLink>
                        </Button>
                    </CardFooter>
                </Card>
            </motion.div>
          </aside>
        </div>
      </div>
    </div>
  );
}
