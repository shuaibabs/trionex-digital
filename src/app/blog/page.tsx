
'use client';
import Image from 'next/image';
import LoadingLink from '@/components/loading-link';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { blogPosts, placeholderImages } from '@/lib/data';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function BlogPage() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl">
            Our Blog
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
            Insights, trends, and expert advice on digital marketing and web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => {
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
                <Card className={cn("overflow-hidden group flex flex-col h-full w-full transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl card-glow-on-hover")}>
                  <LoadingLink href={`/blog/${post.slug}`} className="block h-full flex flex-col">
                    <div className="aspect-video relative">
                      {blogImage && (
                        <Image
                          src={blogImage.imageUrl}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={blogImage.imageHint}
                        />
                      )}
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
                      <p className="text-muted-foreground line-clamp-3 text-sm">
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
            );
          })}
        </div>
        {/* Simple Pagination Placeholder */}
        <div className="flex justify-center mt-12">
            {/* In a real app, this would be dynamic pagination component */}
        </div>
      </div>
    </div>
  );
}
