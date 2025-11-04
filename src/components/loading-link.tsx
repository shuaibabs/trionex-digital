
'use client';

import Link, { type LinkProps } from 'next/link';
import React, { startTransition } from 'react';
import { useLoading } from '@/hooks/use-loading-store';
import { usePathname } from 'next/navigation';

type LoadingLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps & {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  'aria-label'?: string;
};

// This component wraps Next.js's Link.
// It triggers the global loading spinner on click.
export default function LoadingLink({ children, onClick, ...props }: LoadingLinkProps) {
  const { startLoading, isLoading } = useLoading();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only start loading if the route is different and we aren't already loading
    if (props.href !== pathname && !isLoading) {
      startTransition(() => {
        startLoading();
      });
    }
    // We can still allow custom onClick handlers to run if passed.
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link {...props} onClick={handleClick}>
      {children}
    </Link>
  );
}
