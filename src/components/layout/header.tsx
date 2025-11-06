
'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import LoadingLink from '@/components/loading-link';
import { LogOut, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '../theme-toggle';
import Logo from '../icons/logo';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/packages', label: 'Packages' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className={cn('sticky top-0 z-50 w-full transition-all duration-300')}>
      <div className="container mx-auto px-4">
        <div className="mt-2 flex h-16 items-center rounded-full border bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60 px-4 shadow-lg sm:px-6">
          <LoadingLink href="/" className="mr-auto flex items-center">
            <Logo />
          </LoadingLink>
          <nav className="hidden lg:flex lg:items-center lg:gap-6 text-sm font-medium mx-auto">
            {navLinks.map(({ href, label }) => (
              <LoadingLink
                key={href}
                href={href}
                className={cn(
                  'transition-colors hover:text-primary nav-link-glow',
                  pathname === href ? 'text-primary font-semibold' : 'text-foreground/60'
                )}
              >
                {label}
              </LoadingLink>
            ))}
          </nav>
          <div className="flex items-center justify-end gap-2 ml-auto">
            <ThemeToggle />
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="flex flex-col items-center justify-center">
                <SheetHeader><SheetTitle></SheetTitle><SheetDescription></SheetDescription></SheetHeader>
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between border-b pb-4">
                    <LoadingLink href="/" onClick={() => setMobileMenuOpen(false)}>
                      <Logo />
                    </LoadingLink>
                  </div>
                  <nav className="flex-grow mt-6">
                    <ul className="space-y-4 text-center">
                      {navLinks.map(({ href, label }) => (
                        <li key={href}>
                          <LoadingLink
                            href={href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={cn(
                              'text-lg font-medium transition-colors hover:text-primary',
                              pathname === href ? 'text-primary' : 'text-foreground'
                            )}
                          >
                            {label}
                          </LoadingLink>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
