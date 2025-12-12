'use client';

import * as React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogPosts } from '@/lib/data/blog-posts';
import blogImagesData from '@/lib/placeholder-images/blog-posts.json';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import LoadingLink from '@/components/loading-link';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params); // ✅ unwrap params Promise properly

  const post = blogPosts.find((s) => s.slug === slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);
  const blogImage = blogImagesData.blogPostsImages.find((p) => p.id === post.imageId);
  const authorAvatar = blogImagesData.blogPostsImages.find((p) => p.id === post.author.avatarId);

  return (
    <article className="py-16 sm:py-24 bg-background/50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button variant="ghost" asChild className="mb-8">
            <LoadingLink href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </LoadingLink>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
          {/* Main Blog Content */}
          <div className="lg:col-span-2">
            {blogImage && (
              <motion.div
                className="relative aspect-video rounded-2xl overflow-hidden mb-10 shadow-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={blogImage.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            )}

            <header className="mb-12">
              <motion.div
                className="flex flex-wrap gap-2 mb-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-sm">
                    {tag}
                  </Badge>
                ))}
              </motion.div>

              <motion.h1
                className="font-headline text-4xl sm:text-5xl font-bold tracking-tight text-primary leading-tight"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {post.title}
              </motion.h1>

              <motion.div
                className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 text-muted-foreground"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3">
                  {authorAvatar && (
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={authorAvatar.imageUrl} alt={post.author.name} />
                      <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  )}
                  <div>
                    <p className="font-semibold text-foreground">{post.author.name}</p>
                    <p className="text-xs opacity-75">Author</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </motion.div>
            </header>

            {/* Article Content */}
            <motion.div
              className="prose prose-lg dark:prose-invert max-w-none mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <p className="lead text-lg font-medium text-muted-foreground">{post.excerpt}</p>
              <div className="mt-6 whitespace-pre-line text-foreground">{post.content}</div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 lg:sticky lg:top-24 h-min mt-12 lg:mt-0">
            <h3 className="font-headline text-2xl font-bold mb-6">Read More Articles</h3>
            <div className="space-y-6">
              {otherPosts.map((otherPost) => {
                const otherPostImage = blogImagesData.blogPostsImages.find(
                  (p) => p.id === otherPost.imageId
                );
                return (
                  <Card
                    key={otherPost.id}
                    className="group overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <LoadingLink
                      href={`/blog/${otherPost.slug}`}
                      className="flex items-center gap-4"
                    >
                      {otherPostImage && (
                        <div className="relative w-24 h-24 flex-shrink-0">
                          <Image
                            src={otherPostImage.imageUrl}
                            alt={otherPost.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      )}
                      <div className="py-2 pr-4">
                        <p className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
                          {otherPost.title}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">{otherPost.date}</p>
                      </div>
                    </LoadingLink>
                  </Card>
                );
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
