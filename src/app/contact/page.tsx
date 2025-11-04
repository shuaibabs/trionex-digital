
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
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Loader2, Bot, UserCheck, Briefcase, Wallet, Building } from 'lucide-react';
import { useState, useEffect } from 'react';
import type { SummarizeContactFormSubmissionOutput } from '@/ai/flows/summarize-contact-form-submissions';
import { summarizeSubmissionAction } from '@/app/contact/actions';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { services, packages } from '@/lib/data';
import { useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';

const allOfferings = [
  ...services.map(s => ({ id: s.id, title: s.title, type: 'Service', price: s.priceRange })),
  ...packages.map(p => ({ id: p.id, title: p.title, type: 'Package', price: p.pricePeriod ? `${p.price} ${p.pricePeriod}` : p.price })),
  { id: 'custom', title: 'Custom Service/Package', type: 'Custom Inquiry', price: 'Let\'s talk' }
];

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  companyName: z.string().optional(),
  phone: z.string().optional(),
  interest: z.string().min(1, { message: 'Please select a service or package.' }),
  message: z
    .string()
    .min(10, {
      message: 'Message must be at least 10 characters.',
    })
    .max(500, {
      message: 'Message must not be longer than 500 characters.',
    }),
});

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SummarizeContactFormSubmissionOutput | null>(null);
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const interestParam = searchParams.get('interest');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      companyName: '',
      phone: '',
      interest: interestParam || '',
      message: '',
    },
  });

  useEffect(() => {
    if (interestParam) {
      form.setValue('interest', interestParam);
    }
  }, [interestParam, form]);

  const selectedInterestId = form.watch('interest');
  const selectedOffering = allOfferings.find(o => o.id === selectedInterestId);


  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setResult(null);

    const submissionData = {
        ...values,
        interest: selectedOffering?.title || values.interest,
    };

    try {
      const response = await summarizeSubmissionAction(submissionData);
      if (response) {
        setResult(response);
        toast({
          title: "Submission Received!",
          description: "Our AI has processed your request. See the summary below.",
        });
        form.reset();
      } else {
        throw new Error('Failed to get a summary.');
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
            Have a project in mind or just want to say hello? We&apos;d love to
            hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="font-headline text-2xl font-bold">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <a href="mailto:support@trionexdigital.com" className="text-muted-foreground hover:text-primary text-sm">
                    support@trionexdigital.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <a href="tel:+919258724441" className="text-muted-foreground hover:text-primary text-sm">
                    +91 9258724441
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary mt-1">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Office</h3>
                  <p className="text-muted-foreground text-sm">
                    Jalalabad, Shamli, Uttar Pradesh, 247772, India
                  </p>
                </div>
              </div>
            </div>
             <div className="relative h-80 w-full rounded-lg overflow-hidden border map-container">
                <iframe
                  width="100%"
                  height="100%"
                  className="absolute inset-0 w-full h-full"
                  title="map"
                  src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Jalalabad,%20Shamli,%20Uttar%20Pradesh,%20247772&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                ></iframe>
            </div>
          </div>

          <div>
             <h2 className="font-headline text-2xl font-bold mb-8">Send Us a Message</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                            <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input placeholder="john.doe@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                
                 <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Company Name (Optional)</FormLabel>
                        <FormControl>
                            <Input placeholder="Acme Inc." {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Phone (Optional)</FormLabel>
                        <FormControl>
                            <Input placeholder="+91 12345 67890" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                  control={form.control}
                  name="interest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service of Interest</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service or package..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {allOfferings.map(offering => (
                            <SelectItem key={offering.id} value={offering.id}>
                              {offering.title} ({offering.type})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us more about your project requirements..."
                          {...field}
                          rows={4}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {selectedOffering && (
                    <Card className="bg-secondary/50 dark:bg-secondary/20 border-dashed">
                        <CardHeader className='p-4 pb-2'>
                            <CardTitle className="flex items-center gap-2 text-base font-semibold">
                                <Briefcase className="h-5 w-5 text-primary" />
                                Your Selection
                            </CardTitle>
                        </CardHeader>
                        <CardContent className='p-4 pt-2'>
                            <p className="text-sm font-medium text-foreground">{selectedOffering.title}</p>
                            <p className="text-xs text-muted-foreground mb-2">({selectedOffering.type})</p>
                            <div className="flex items-center gap-2 text-sm text-primary font-semibold border-t border-dashed pt-2">
                                <Wallet className="h-4 w-4" />
                                <span>{selectedOffering.price}</span>
                            </div>
                        </CardContent>
                    </Card>
                )}

                <Button type="submit" disabled={loading} className="w-full">
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {loading ? 'Submitting...' : 'Submit'}
                </Button>
              </form>
            </Form>

            {result && (
              <Card className="mt-8 bg-gradient-to-br from-secondary/30 to-background dark:from-secondary/20 dark:to-background">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-headline text-xl md:text-2xl">
                    <Bot className="h-6 w-6" />
                    AI-Powered Routing Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Inquiry Summary:</h4>
                    <p className="text-muted-foreground italic text-sm">
                      &quot;{result.summary}&quot;
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold flex items-center gap-2">
                       <UserCheck className="h-5 w-5 text-green-500" />
                      Suggested Team Member:
                    </h4>
                    <p className="text-foreground text-base md:text-lg font-medium">{result.suggestedTeamMember}</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
