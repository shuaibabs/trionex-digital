
'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useLoading } from '@/hooks/use-loading-store';

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { stopLoading } = useLoading();

  useEffect(() => {
    // Stop loading whenever the path or search params change.
    // This is triggered after the new page component has rendered.
    stopLoading();
  }, [pathname, searchParams, stopLoading]);

  return null;
}
