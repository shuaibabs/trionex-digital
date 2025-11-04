
'use client';

import { useRouter } from 'next/navigation';
import { useUser } from '@/firebase';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { getAuth, signOut } from 'firebase/auth';

export default function DashboardPage() {
  const { user, isUserLoading } = useUser();
  const router = useRouter();

  const handleLogout = async () => {
    const auth = getAuth();
    await signOut(auth);
    router.push('/');
  };

  const getInitials = (email: string | null | undefined) => {
    if (!email) return 'U';
    return email.substring(0, 2).toUpperCase();
  };

  if (isUserLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!user) {
    router.push('/login');
    return null;
  }

  return (
    <div className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-headline">Dashboard</CardTitle>
              <CardDescription>Welcome to your Trionex Digital dashboard.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-6">
                <Avatar className="h-24 w-24 border-4 border-primary">
                    <AvatarImage src={user.photoURL || undefined} alt={user.email || 'User'} />
                    <AvatarFallback className="text-3xl">{getInitials(user.email)}</AvatarFallback>
                </Avatar>
                <div className='text-center'>
                    <h2 className="text-xl sm:text-2xl font-semibold">{user.displayName || 'User'}</h2>
                    <p className="text-muted-foreground text-sm sm:text-base">{user.email}</p>
                </div>
                <div className="w-full border-t pt-6">
                    <h3 className="font-semibold text-lg mb-2">Account Details</h3>
                    <div className="text-sm space-y-2 text-muted-foreground break-all">
                       <p><span className="font-medium text-foreground">User ID:</span> {user.uid}</p>
                       <p><span className="font-medium text-foreground">Email Verified:</span> {user.emailVerified ? 'Yes' : 'No'}</p>
                       <p><span className="font-medium text-foreground">Account Created:</span> {user.metadata.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString() : 'N/A'}</p>
                       <p><span className="font-medium text-foreground">Last Signed In:</span> {user.metadata.lastSignInTime ? new Date(user.metadata.lastSignInTime).toLocaleString() : 'N/A'}</p>
                    </div>
                </div>
                <Button onClick={handleLogout} variant="destructive" className="w-full max-w-xs">
                    Log Out
                </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
