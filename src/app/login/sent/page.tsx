
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MailCheck } from 'lucide-react';

export default function MagicLinkSentPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="container mx-auto px-4 flex justify-center">
        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <div className="mx-auto bg-primary/10 p-4 rounded-full w-min mb-4">
                <MailCheck className="h-10 w-10 text-primary" />
            </div>
            <CardTitle className="text-2xl font-headline">Check Your Email</CardTitle>
            <CardDescription>
              A magic sign-in link has been sent to your email address.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Click the link in the email to sign in instantly. The link will expire shortly.
            </p>
            <Button asChild className="mt-6" variant="outline">
              <Link href="/login">Back to Login</Link>
            </Button>
             <p className="text-xs text-muted-foreground mt-6">
                If you don&apos;t see the email, please check your spam folder.
             </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
