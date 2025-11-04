
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

export default function FinishLoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const auth = getAuth();
    const email = window.localStorage.getItem('emailForSignIn');
    const href = window.location.href;

    if (isSignInWithEmailLink(auth, href) && email) {
      signInWithEmailLink(auth, email, href)
        .then(() => {
          window.localStorage.removeItem('emailForSignIn');
          toast({
            title: 'Login Successful',
            description: 'Welcome back!',
          });
          router.push('/dashboard');
        })
        .catch((err) => {
          console.error(err);
          setError(err.message || 'Failed to sign in. The link may be expired or invalid.');
          toast({
            variant: 'destructive',
            title: 'Login Failed',
            description: 'The link may be expired or invalid. Please try again.',
          });
        });
    } else if (!email) {
       setError('Could not find email for sign-in. Please try the login process again from the same browser.');
    } else {
       setError('This is not a valid sign-in link.');
    }
  }, [router, toast]);

  return (
    <div className="py-16 sm:py-24">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
        {error ? (
          <>
            <h1 className="text-2xl font-bold text-destructive">Login Failed</h1>
            <p className="mt-4 text-muted-foreground max-w-md">{error}</p>
            <Button onClick={() => router.push('/login')} className="mt-6">
              Return to Login
            </Button>
          </>
        ) : (
          <>
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
            <h1 className="mt-6 text-2xl font-bold">Signing you in...</h1>
            <p className="mt-2 text-muted-foreground">Please wait while we verify your magic link.</p>
          </>
        )}
      </div>
    </div>
  );
}
