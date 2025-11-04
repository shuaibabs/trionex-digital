
import LoadingLink from '@/components/loading-link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/data';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const notFoundImage = placeholderImages.find(p => p.id === 'not-found');

  return (
    <div className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {notFoundImage && (
            <div className="relative w-full max-w-sm h-64 mb-8">
              <Image
                src={notFoundImage.imageUrl}
                alt={notFoundImage.description}
                fill
                className="object-contain"
                data-ai-hint={notFoundImage.imageHint}
              />
            </div>
          )}
          <p className="text-base font-semibold text-primary">404</p>
          <h1 className="mt-4 font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-muted-foreground">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10">
            <Button asChild>
              <LoadingLink href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go back home
              </LoadingLink>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
