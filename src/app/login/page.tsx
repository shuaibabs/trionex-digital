
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { getAuth, signInWithEmailAndPassword, sendSignInLinkToEmail, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import LoadingLink from '@/components/loading-link';
import { Loader2, Mail } from 'lucide-react';
import { useUser } from '@/firebase';
import { Separator } from '@/components/ui/separator';
import GoogleIcon from '@/components/icons/google';

const passwordFormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }),
  password: z.string().min(1, { message: 'Password is required.' }),
});

const emailFormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }),
});


export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [isPasswordLoading, setIsPasswordLoading] = useState(false);
  const [isEmailLoading, setIsEmailLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const { user } = useUser();

  const passwordForm = useForm<z.infer<typeof passwordFormSchema>>({
    resolver: zodResolver(passwordFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const emailForm = useForm<z.infer<typeof emailFormSchema>>({
    resolver: zodResolver(emailFormSchema),
     defaultValues: {
      email: '',
    },
  });


  if (user) {
    router.push('/dashboard');
    return null;
  }

  async function onPasswordSubmit(values: z.infer<typeof passwordFormSchema>) {
    setIsPasswordLoading(true);
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      toast({
        title: 'Login Successful',
        description: "Welcome back!",
      });
      router.push('/dashboard');
    } catch (error: any) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Login Failed',
        description: error.message || 'An unexpected error occurred.',
      });
    } finally {
      setIsPasswordLoading(false);
    }
  }

  async function onEmailSubmit(values: z.infer<typeof emailFormSchema>) {
    setIsEmailLoading(true);
    const auth = getAuth();
    const actionCodeSettings = {
      url: `${window.location.origin}/finish-login`,
      handleCodeInApp: true,
    };

    try {
        window.localStorage.setItem('emailForSignIn', values.email);
        await sendSignInLinkToEmail(auth, values.email, actionCodeSettings);
        router.push('/login/sent');
    } catch(error: any) {
       console.error(error);
      toast({
        variant: 'destructive',
        title: 'Error sending link',
        description: error.message || 'Could not send magic link. Please try again.',
      });
    } finally {
        setIsEmailLoading(false);
    }
  }

  async function onGoogleSignIn() {
    setIsGoogleLoading(true);
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast({
        title: 'Login Successful',
        description: "Welcome!",
      });
      router.push('/dashboard');
    } catch (error: any) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Login Failed',
        description: error.message || 'An unexpected error occurred with Google Sign-In.',
      });
    } finally {
      setIsGoogleLoading(false);
    }
  }

  const isLoading = isPasswordLoading || isEmailLoading || isGoogleLoading;

  return (
    <div className="py-16 sm:py-24">
      <div className="container mx-auto px-4 flex justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-headline">Welcome Back!</CardTitle>
            <CardDescription>Sign in to your account to continue</CardDescription>
          </CardHeader>
          <CardContent>
             <div className="flex flex-col gap-4">
                <Button variant="outline" onClick={onGoogleSignIn} disabled={isLoading}>
                    {isGoogleLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <GoogleIcon className="mr-2 h-4 w-4" />}
                    Sign In with Google
                </Button>

                <Form {...emailForm}>
                <form onSubmit={emailForm.handleSubmit(onEmailSubmit)} className="space-y-4">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">
                            Or sign in with email
                            </span>
                        </div>
                    </div>
                    <FormField
                    control={emailForm.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="sr-only">Login with Email</FormLabel>
                        <FormControl>
                            <Input type="email" placeholder="john.doe@example.com" {...field} disabled={isLoading} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <Button type="submit" disabled={isLoading} className="w-full">
                        {isEmailLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        <Mail className="mr-2 h-4 w-4" />
                        {isEmailLoading ? 'Sending...' : 'Send Magic Link'}
                    </Button>
                </form>
                </Form>
            </div>

            <div className="my-6 flex items-center">
                <Separator className="flex-1" />
                <span className="mx-4 text-xs text-muted-foreground">OR</span>
                <Separator className="flex-1" />
            </div>

            <Form {...passwordForm}>
              <form onSubmit={passwordForm.handleSubmit(onPasswordSubmit)} className="space-y-6">
                <FormField
                  control={passwordForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john.doe@example.com" {...field} disabled={isLoading} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={passwordForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="••••••••" {...field} disabled={isLoading} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <div className="text-right text-sm">
                    <LoadingLink href="/forgot-password" className="text-primary hover:underline">
                      Forgot Password?
                    </LoadingLink>
                  </div>
                <Button type="submit" disabled={isLoading} className="w-full" variant="outline">
                  {isPasswordLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {isPasswordLoading ? 'Signing In...' : 'Sign In with Password'}
                </Button>
              </form>
            </Form>
            <div className="mt-6 text-center text-sm">
              Don&apos;t have an account?{' '}
              <LoadingLink href="/signup" className="text-primary hover:underline">
                Sign Up
              </LoadingLink>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
