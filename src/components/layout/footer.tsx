
import LoadingLink from '@/components/loading-link';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import Logo from '../icons/logo';
import { Button } from '@/components/ui/button';
import { NewsletterForm } from '../newsletter-form';

const footerNavs = [
  {
    label: 'Product',
    items: [
      { href: '/packages', name: 'Packages' },
      { href: '/services', name: 'Services' },
      { href: '/case-studies', name: 'Case Studies' },
    ],
  },
  {
    label: 'Company',
    items: [
      { href: '/about', name: 'About Us' },
      { href: '/blog', name: 'Blog' },
      { href: '/contact', name: 'Contact' },
    ],
  },
  {
    label: 'Legal',
    items: [
      { href: '/legal/privacy-policy', name: 'Privacy Policy' },
      { href: '/legal/terms-of-service', name: 'Terms of Service' },
      { href: '/legal/cancellation-policy', name: 'Cancellation Policy' },
      { href: '/legal/refund-policy', name: 'Refund Policy' },
      { href: '/legal/cookie-policy', name: 'Cookie Policy' },
    ],
  },
];

const socialLinks = [
  { icon: <Instagram className="h-6 w-6" />, href: '#', label: 'Instagram' },
  { icon: <Facebook className="h-6 w-6" />, href: '#', label: 'Facebook' },
  { icon: <Linkedin className="h-6 w-6" />, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="bg-secondary/50 dark:bg-secondary/20 border-t">
      <div className="container mx-auto px-4">
        {/* Main Footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="flex flex-col gap-4 md:col-span-2">
                <LoadingLink href="/" aria-label="Back to homepage">
                    <Logo />
                </LoadingLink>
                <p className="text-muted-foreground text-sm max-w-sm">
                  A modern marketing and web development agency for growing businesses.
                </p>
                 <div className="mt-4">
                  <h3 className="font-headline font-semibold text-foreground">Stay Ahead of the Curve</h3>
                  <p className="text-muted-foreground text-sm mt-1 mb-4">Subscribe to our newsletter for the latest insights.</p>
                  <NewsletterForm />
                </div>
            </div>
            {footerNavs.map((nav) => (
              <div key={nav.label} className="mt-8 sm:mt-0">
                <h3 className="font-headline font-semibold text-foreground">{nav.label}</h3>
                <ul className="mt-4 space-y-3">
                  {nav.items.map((item) => (
                    <li key={item.name}>
                      <LoadingLink
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.name}
                      </LoadingLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} Trionex Digital. All rights reserved.</p>
          <div className="flex items-center space-x-1 sm:space-x-3 mt-4 sm:mt-0">
              {socialLinks.map((link, i) => (
              <Button
                  key={i}
                  asChild
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:text-primary transition-transform hover:scale-110"
              >
                  <LoadingLink
                      href={link.href}
                      aria-label={link.label}
                  >
                      {link.icon}
                  </LoadingLink>
              </Button>
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
