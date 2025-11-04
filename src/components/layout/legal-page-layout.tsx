
import React from 'react';
import { Badge } from '@/components/ui/badge';

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <div className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="mb-12 border-b pb-8">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
        </header>
        <main className="prose prose-lg dark:prose-invert max-w-none">
          {children}
        </main>
      </div>
    </div>
  );
}
