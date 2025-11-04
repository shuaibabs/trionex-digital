
'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import LoadingLink from '@/components/loading-link';
import { LogOut, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '../theme-toggle';
import Logo from '../icons/logo';
import { useUser } from '@/firebase';
import { getAuth, signOut } from 'firebase/auth';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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
  const { user, isUserLoading } = useUser();

  const handleLogout = async () => {
    const auth = getAuth();
    await signOut(auth);
  };

  const getInitials = (email: string | null | undefined) => {
    if (!email) return 'U';
    return email.substring(0, 2).toUpperCase();
  };

  return (
    <header className={cn('sticky top-0 z-50 w-full transition-all duration-300')}>
        <div className="container mx-auto px-4">
            <div className="mt-2 flex h-16 items-center rounded-full border bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60 px-4 shadow-lg sm:px-6">
                <LoadingLink href="/" className="mr-auto flex items-center">
                  <Logo />
                </LoadingLink>

                {/* Desktop Navigation */}
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

                    {!isUserLoading && (
                      <>
                        {user ? (
                           <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src={user.photoURL || undefined} alt={user.email || 'User'} />
                                  <AvatarFallback>{getInitials(user.email)}</AvatarFallback>
                                </Avatar>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align="end" forceMount>
                              <DropdownMenuLabel className="font-normal">
                                <div className="flex flex-col space-y-1">
                                  <p className="text-sm font-medium leading-none">
                                    {user.displayName || 'User'}
                                  </p>
                                  <p className="text-xs leading-none text-muted-foreground">
                                    {user.email}
                                  </p>
                                </div>
                              </DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem asChild>
                                <LoadingLink href="/dashboard">Dashboard</LoadingLink>
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                                <LogOut className="mr-2 h-4 w-4" />
                                <span>Log out</span>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        ) : (
                          <div className="hidden md:flex items-center gap-2">
                            <Button variant="ghost" asChild>
                              <LoadingLink href="/login">Login</LoadingLink>
                            </Button>
                            <Button asChild>
                              <LoadingLink href="/signup">Sign Up</LoadingLink>
                            </Button>
                          </div>
                        )}
                      </>
                    )}

                  {/* Mobile & Tablet Navigation Menu */}
                  <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                      <SheetTrigger asChild>
                      <Button variant="ghost" size="icon" className="lg:hidden">
                          <Menu />
                          <span className="sr-only">Open menu</span>
                      </Button>
                      </SheetTrigger>
                      <SheetContent side="left">
                      <div className="flex flex-col h-full">
                          <div className="flex items-center justify-between border-b pb-4">
                          <LoadingLink href="/" onClick={() => setMobileMenuOpen(false)}>
                              <Logo />
                          </LoadingLink>
                          </div>
                          <nav className="flex-grow mt-6">
                          <ul className="space-y-4">
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
                          <div className="border-t pt-4">
                          {user ? (
                            // Logged in user in mobile sheet
                              <div className="flex flex-col gap-4">
                                  <Button variant="outline" asChild>
                                      <LoadingLink href="/dashboard" onClick={() => setMobileMenuOpen(false)}>Go to Dashboard</LoadingLink>
                                  </Button>
                                  <Button onClick={() => {handleLogout(); setMobileMenuOpen(false);}} className="w-full">
                                  Log Out
                                  </Button>
                              </div>
                          ) : (
                            // Logged out user in mobile sheet
                              <div className="flex flex-col gap-4">
                                <Button asChild className="w-full">
                                    <LoadingLink href="/login" onClick={() => setMobileMenuOpen(false)}>
                                    Login
                                    </LoadingLink>
                                </Button>
                                <Button variant="outline" asChild className="w-full">
                                    <LoadingLink href="/signup" onClick={() => setMobileMenuOpen(false)}>
                                    Sign Up
                                    </LoadingLink>
                                </Button>
                              </div>
                          )}
                          </div>
                      </div>
                      </SheetContent>
                  </Sheet>
                </div>
            </div>
        </div>
    </header>
  );
}
