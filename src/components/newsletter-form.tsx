
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ArrowRight, Loader2 } from 'lucide-react';
import { useState, useTransition } from 'react';
import { subscribeToNewsletterAction } from '@/app/actions';

const formSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email.',
  }),
});

export function NewsletterForm() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setResult(null);
    startTransition(async () => {
      const response = await subscribeToNewsletterAction(values.email);
      setResult(response);
      if(response.success) {
        form.reset();
      }
    });
  }

  if (result?.success) {
    return (
        <div className="flex items-center justify-center text-center p-4 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 rounded-md">
            <p>{result.message}</p>
        </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-start space-x-2">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <div className="relative">
                    <Input placeholder="Enter your email" {...field} className="pr-10" />
                     <Button type="submit" size="icon" disabled={isPending} className="absolute right-0 top-0 h-full w-10">
                        {isPending ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                            <ArrowRight className="h-4 w-4" />
                        )}
                        <span className="sr-only">Subscribe</span>
                    </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
       {result && !result.success && (
        <p className="text-destructive text-sm mt-2">{result.message}</p>
      )}
    </Form>
  );
}
