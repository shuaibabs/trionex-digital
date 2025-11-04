
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import LoadingLink from '@/components/loading-link';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // We need to wait for the component to mount to access localStorage
    const consent = localStorage.getItem('cookie_consent');
    if (consent !== 'true') {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    setShowBanner(false);
    localStorage.setItem('cookie_consent', 'true');
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4"
        >
            <div className="max-w-4xl mx-auto">
                <div className={cn(
                    "rounded-lg border bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60 p-4 shadow-2xl flex flex-col sm:flex-row items-center gap-4"
                )}>
                    <div className="flex-shrink-0">
                        <Cookie className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground flex-grow">
                        We use essential browser storage to improve your experience. By using our site, you agree to our{' '}
                        <LoadingLink href="/legal/cookie-policy" className="underline hover:text-primary">
                            Cookie Policy
                        </LoadingLink>.
                    </p>
                    <Button onClick={handleAccept} size="sm" className="w-full sm:w-auto">
                        Accept
                    </Button>
                </div>
            </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
