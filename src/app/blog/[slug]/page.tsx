
'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogPosts, placeholderImages } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import LoadingLink from '@/components/loading-link';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== params.slug).slice(0, 3);
  const blogImage = placeholderImages.find(p => p.id === post.imageId);
  const authorAvatar = placeholderImages.find(p => p.id === post.author.avatarId);

  return (
    <article className="py-16 sm:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Button variant="ghost" asChild className="mb-8">
              <LoadingLink href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4"/>
                  Back to Blog
              </LoadingLink>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-2">
            {blogImage && (
              <motion.div 
                className="relative aspect-video rounded-lg overflow-hidden mb-8 shadow-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Image
                  src={blogImage.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                  data-ai-hint={blogImage.imageHint}
                  priority
                />
              </motion.div>
            )}

            <header className="mb-12">
              <motion.div
                className="flex flex-wrap gap-2 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </motion.div>

              <motion.h1 
                className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {post.title}
              </motion.h1>
              
              <motion.div 
                className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-center gap-3">
                  {authorAvatar && (
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={authorAvatar.imageUrl} alt={post.author.name} data-ai-hint={authorAvatar.imageHint} />
                      <AvatarFallback>{post.author.name.substring(0, 1)}</AvatarFallback>
                    </Avatar>
                  )}
                  <div>
                    <p className="font-semibold text-foreground">{post.author.name}</p>
                    <p className="text-xs">Author</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4"/>
                        <span className="text-sm">{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4"/>
                        <span className="text-sm">{post.readTime}</span>
                    </div>
                </div>
              </motion.div>
            </header>

            <motion.div 
              className="prose prose-lg dark:prose-invert max-w-none mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="lead">{post.excerpt}</p>
              
              <h2>The Core Idea</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
              </p>

              <ul>
                <li>First, we need to understand the problem space.</li>
                <li>Second, we identify the key stakeholders.</li>
                <li>Third, we develop a phased approach to the solution.</li>
              </ul>

              <h2 className="font-headline">Diving Deeper</h2>
              <p>
                Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augu. Praesent egestas leo in pede. Praesent blanitac, tellus.
              </p>
              <blockquote>
                The journey of a thousand miles begins with a single step. This is that step.
              </blockquote>
              <p>
                Fusce tristique, nisl Sign in to write a review. Aliquam erat volutpat. Nulla facilisi. Duis sit amet felis. Morbi nisl <code>nulla</code>, pulvinar <code>nulla</code>, commodo <code>nulla</code>, porttitor <code>nulla</code>, et <code>nulla</code>. This approach allows for iterative development and feedback, ensuring the final product aligns perfectly with user needs and business goals.
              </p>
            </motion.div>
          </div>
          
          <aside className="lg:col-span-1 lg:sticky lg:top-24 h-min mt-12 lg:mt-0">
            <h3 className="font-headline text-2xl font-bold mb-6">Read More Articles</h3>
            <div className="space-y-6">
              {otherPosts.map(otherPost => {
                const otherPostImage = placeholderImages.find(p => p.id === otherPost.imageId);
                return (
                  <Card key={otherPost.id} className="group overflow-hidden">
                    <LoadingLink href={`/blog/${otherPost.slug}`} className="flex items-center gap-4">
                      {otherPostImage && (
                        <div className="relative w-24 h-24 flex-shrink-0">
                          <Image 
                            src={otherPostImage.imageUrl} 
                            alt={otherPost.title} 
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            data-ai-hint={otherPostImage.imageHint}
                          />
                        </div>
                      )}
                      <div className="py-2 pr-4">
                        <p className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">{otherPost.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">{otherPost.date}</p>
                      </div>
                    </LoadingLink>
                  </Card>
                )
              })}
            </div>
            <Button asChild className="w-full mt-8">
              <LoadingLink href="/blog">View All Articles</LoadingLink>
            </Button>
          </aside>
        </div>
      </div>
    </article>
  );
}
