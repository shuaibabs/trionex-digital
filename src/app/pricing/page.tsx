
'use client';
import LoadingLink from '@/components/loading-link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { packages } from '@/lib/data';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export default function PricingPage() {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

  return (
    <div className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl">
            Our Pricing Plans
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
            Choose the perfect plan to fuel your growth. Simple, transparent pricing for businesses of all sizes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {packages.map((pkg, i) => (
              <motion.div
                  key={pkg.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  variants={cardVariants}
                  className="h-full"
              >
                  <Card className={cn(
                  "flex flex-col h-full",
                  pkg.isPopular ? 'border-primary ring-2 ring-primary shadow-lg' : ''
                  )}>
                  <CardHeader className="relative">
                      {pkg.isPopular && (
                      <div className="absolute top-0 right-6 -mt-3">
                          <div className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                          POPULAR
                          </div>
                      </div>
                      )}
                      <CardTitle className="font-headline">{pkg.title}</CardTitle>
                      <CardDescription>{pkg.description}</CardDescription>
                      <div className="flex items-baseline pt-4">
                      <span className="text-3xl font-bold font-headline sm:text-4xl">
                          {pkg.price.startsWith('Custom') ? '' : '₹'}
                          {pkg.price}
                      </span>
                      <span className="text-sm text-muted-foreground">{pkg.pricePeriod}</span>
                      </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                      <ul className="space-y-3">
                      {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground text-sm">{feature}</span>
                          </li>
                      ))}
                      </ul>
                  </CardContent>
                  <CardFooter>
                      <Button asChild className="w-full" variant={pkg.isPopular ? 'default' : 'outline'}>
                        <LoadingLink href={`/contact?interest=${pkg.id}`}>{pkg.ctaText}</LoadingLink>
                      </Button>
                  </CardFooter>
                  </Card>
              </motion.div>
          ))}
        </div>
        <div className="text-center mt-16">
          <h3 className="font-headline text-2xl font-bold sm:text-3xl">Need a custom solution?</h3>
          <p className="text-muted-foreground mt-2 text-base md:text-lg">We offer tailored enterprise plans. Let's discuss your unique requirements.</p>
          <Button asChild className="mt-4">
            <LoadingLink href="/contact">Schedule a Call</LoadingLink>
          </Button>
        </div>
      </div>
    </div>
  );
}
